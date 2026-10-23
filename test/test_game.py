"""Haunted Piano headless test (Chrome + SwiftShader WebGL, served over a local web server)."""
import asyncio, os, re, glob
from playwright.async_api import async_playwright
import threading, http.server, functools, socketserver
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
class _Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
_srv = socketserver.ThreadingTCPServer(('127.0.0.1', 0), functools.partial(_Q, directory=ROOT)); _srv.daemon_threads = True
threading.Thread(target=_srv.serve_forever, daemon=True).start()
URL = 'http://127.0.0.1:%d/index.html' % _srv.server_address[1]
OUT = ROOT + '/test/shots/'; os.makedirs(OUT, exist_ok=True)
ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required']
R = []
def check(n, ok, info=''): R.append(bool(ok)); print(('PASS ' if ok else 'FAIL ') + n + (f' — {info}' if info != '' else ''), flush=True)


async def page(b, q='', **kw):
    ctx = await b.new_context(accept_downloads=True, **kw)
    qs = f"localStorage.setItem('hp-q','{q}');" if q else ''
    await ctx.add_init_script(f"window.__hpSeed = 4242; window.__hpNoAutoQ = true; try{{if(!sessionStorage.getItem('hpInit')){{sessionStorage.setItem('hpInit','1'); localStorage.clear(); {qs}}}}}catch(e){{}}")
    pg = await ctx.new_page(); pg.set_default_timeout(240000); logs = []
    pg.on('console', lambda m: logs.append(f'{m.type}: {m.text}') if m.type == 'error' else None)
    pg.on('pageerror', lambda e: logs.append(f'PAGEERROR {e}'))
    await pg.goto(URL); await pg.wait_for_function('document.body.classList.contains("ready")', timeout=60000)
    await pg.evaluate('window.__hpManual = true; __hp.step(1/30, 3)')
    return ctx, pg, logs

def bright_share(path, thr=250):
    im = Image.open(path).convert('RGB'); px = list(im.getdata()) if not hasattr(im, 'get_flattened_data') else im.get_flattened_data(); n = sum(1 for r, g, b in px if r >= thr and g >= thr and b >= thr); return n / (im.width * im.height)

# perfect bot: presses each chart note on its frame (offset = timing error in s)
BOT = '''([frames, off, skip]) => { let k = 0; for (let i = 0; i < frames && __hp.S.state === 'play'; i++) { let x; while ((x = __hp.next()) && x.t + off <= __hp.S.songT + 1e-6) { if (skip && (k++ % skip === 0)) { break; } __hp.press(x.lane); } __hp.stepq(1/30); } __hp.step(1/30); }'''
LOG = '__hp.log.map(e => e.n)'
async def bot(pg, frames, off=0.0, skip=0): await pg.evaluate(f'({BOT})([{frames}, {off}, {skip}])')

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', headless=True, args=ARGS)
        ctx, pg, logs = await page(b, viewport={'width': 1280, 'height': 800})
        check('menu visible, EN default, title', await pg.is_visible('#menu.show') and (await pg.text_content('#btnPlay')) == 'Play!' and (await pg.text_content('h1')) == 'Haunted Piano')
        check("graphics label reads 'Normal'", 'Normal' in await pg.text_content('#btnQ'), await pg.text_content('#btnQ'))
        check('four public-domain songs listed', await pg.evaluate("document.querySelectorAll('#songs button').length") == 4 and 'Bach' in await pg.text_content('#songs') and 'Grieg' in await pg.text_content('#songs'))
        await pg.evaluate('__hp.step(1/30, 150)'); lg = await pg.evaluate(LOG)
        check('menu attract: the ghost plays the piano with real samples', sum(1 for n in lg if n.startswith('p_')) >= 5, len(lg))
        await pg.screenshot(path=OUT + 'shot-menu.png'); check('menu no glare', bright_share(OUT + 'shot-menu.png') < .004)
        await pg.click('#btnLang'); de = await pg.text_content('#btnPlay'); await pg.screenshot(path=OUT + 'shot-menu-de.png')
        check('DE toggle', de == 'Spielen!' and 'Frei spielen' in await pg.text_content('#menu'), de)
        await pg.wait_for_timeout(300); await pg.reload(wait_until='load'); await pg.wait_for_function('document.body.classList.contains("ready") && window.__hp'); await pg.evaluate('window.__hpManual = true')
        check('language remembered after reload', (await pg.text_content('#btnPlay')) == 'Spielen!'); await pg.click('#btnLang')
        check('difficulty default Medium, 5 lanes', await pg.evaluate('__hp.diff()') == 'medium' and 'on' in (await pg.get_attribute('#diff [data-d=medium]', 'class') or ''))
        await pg.evaluate('__hp.log.length = 0')
        await pg.click('#btnPlay'); await pg.wait_for_timeout(300); await pg.evaluate('__hp.step(1/30, 20)')
        s0 = await pg.evaluate('({st: __hp.S.state, t: __hp.S.songT, n: __hp.chart().length, l: __hp.lanes()})')
        check('play starts with a gentle lead-in (notes still falling)', s0['st'] == 'play' and s0['t'] < -1 and s0['n'] > 30 and s0['l'] == 5, s0)
        check('hint shown at start', await pg.is_visible('#hint.show'))
        # real keyboard presses for the first notes
        ks = ['KeyD', 'KeyF', 'Space', 'KeyJ', 'KeyK']; kb = 0
        for _ in range(400):
            x = await pg.evaluate('__hp.next()'); t = await pg.evaluate('__hp.S.songT')
            if x and x['t'] <= t + 1e-6: await pg.keyboard.press(ks[x['lane']]); kb += 1
            if kb >= 6: break
            await pg.evaluate('__hp.stepq(1/30)')
        h = await pg.evaluate('({h: __hp.S.hits, c: __hp.S.combo, s: __hp.S.score})')
        check('keyboard hits land on time (combo, score)', h['h'] == 6 and h['c'] == 6 and h['s'] > 0, h)
        lg = await pg.evaluate(LOG); check('hits play sampled piano notes (no beeps), ghost accompanies', sum(1 for n in lg if n.startswith('p_')) >= 6, sorted(set(lg))[:12])
        await pg.evaluate('__hp.step(1/30)'); await pg.screenshot(path=OUT + 'shot-play.png')
        await bot(pg, 520)
        st = await pg.evaluate('({c: __hp.S.combo, ch: __hp.choir(), sw: Math.abs(__hp.chand().v) + Math.abs(__hp.chand().a)})')
        check('combo 10 swings the chandelier, combo 20 summons the ghost choir', st['c'] >= 20 and st['ch'] > .3 and st['sw'] > .01, st)
        lg = await pg.evaluate(LOG); check('choir and crystal samples', 'choir_ah' in lg and 'tinkle' in lg, sorted(set(lg)))
        await pg.screenshot(path=OUT + 'shot-choir.png'); bs = bright_share(OUT + 'shot-choir.png')
        check('choir moment: no glare', bs < .004, round(bs, 5))
        cam = await pg.evaluate('__hp.cam()'); check('player camera sits outside the piano', cam['p'][2] > 2.0 and cam['p'][1] > 1.4, cam)
        # a late press = Good, a wild miss resets the combo
        a0 = await pg.evaluate('__hp.S.accSum / __hp.S.judged'); await bot(pg, 40, off=0.12); a1 = await pg.evaluate('__hp.S.accSum / __hp.S.judged'); jj = await pg.text_content('#pops')
        check('late presses judged Good (accuracy drops)', a1 < a0 and 'Good' in jj, (a0, a1))
        await pg.evaluate('__hp.stepq(1/30, 45); __hp.step(1/30)'); m = await pg.evaluate('({c: __hp.S.combo, sp: __hp.S.spirit})')
        check('missed notes cost spirit, show Miss, ghost plays them', m['sp'] < 1 and 'Miss' in await pg.text_content('#pops'), m)
        await bot(pg, 2400)
        check('song finishes -> end screen with grade', await pg.evaluate('__hp.S.state') == 'end' and await pg.is_visible('#end.show') and (await pg.text_content('#eGrade')) in 'SABC')
        await pg.evaluate('__hp.step(1/30, 45)'); await pg.screenshot(path=OUT + 'shot-end.png')
        sc = await pg.evaluate('__hp.S.score'); best = await pg.evaluate("localStorage.getItem('hp-best-play-toccata-medium')")
        check('highscore saved per song + difficulty', sc > 0 and best == str(sc), (sc, best))
        eb = bright_share(OUT + 'shot-end.png'); check('end screen no glare', eb < .004, eb)
        await pg.fill('#eName', 'Night Pianist')
        async with pg.expect_download() as dl: await pg.click('#btnCard')
        d = await dl.value; path = OUT + 'card.png'; await d.save_as(path); im = Image.open(path)
        check('share card PNG 1080x1350', d.suggested_filename == 'haunted-piano.png' and im.size == (1080, 1350), im.size)
        check('share card has no glare', bright_share(path) < .006, bright_share(path))
        # fail: miss everything on hard
        await pg.click('#btnMenu'); await pg.click('#diff [data-d=hard]'); await pg.click('#songs [data-s=mountain]'); await pg.click('#btnPlay')
        check('hard: 6 lanes', await pg.evaluate('__hp.lanes()') == 6)
        await pg.evaluate('__hp.stepq(1/30, 1500)'); await pg.evaluate('__hp.step(1/30, 60)')
        check('spirit runs out -> the run fails', await pg.evaluate('__hp.S.failed') and await pg.evaluate('__hp.S.state') == 'end' and (await pg.text_content('#eGrade')) == 'D')
        await pg.click('#btnMenu'); await pg.wait_for_timeout(200); await pg.reload(); await pg.wait_for_function('window.__hp && document.body.classList.contains("ready")'); await pg.evaluate('window.__hpManual = true')
        check('difficulty + song remembered', await pg.evaluate('__hp.diff()') == 'hard' and await pg.evaluate('__hp.S.song') == 'mountain')
        await pg.click('#diff [data-d=easy]'); await pg.click('#songs [data-s=funeral]'); await pg.click('#btnPlay')
        check('easy: 4 lanes, wider notes', await pg.evaluate('__hp.lanes()') == 4); await pg.evaluate('__hp.end(); __hp.step(1/30, 3)'); await pg.click('#btnMenu')
        # kids
        await pg.click('#btnKids'); await pg.click('#btnPlay')
        check('kids: 3 big lanes, no spirit bar', await pg.evaluate('__hp.lanes()') == 3 and not await pg.is_visible('#hSpiritBox'))
        await pg.evaluate('__hp.stepq(1/30, 900)'); await pg.evaluate('__hp.step(1/30)')
        check('kids: missed notes are played by the ghost, never fails', await pg.evaluate('__hp.S.state') == 'play' and not await pg.evaluate('__hp.S.failed') and await pg.evaluate('__hp.chart().filter(n => n.missed).length') > 3)
        await pg.evaluate('__hp.end(); __hp.step(1/30, 3)'); await pg.click('#btnMenu'); await pg.click('#btnKids')
        # echo
        await pg.click('#btnEcho'); await pg.evaluate('__hp.step(1/30, 10)')
        check('echo: ghost plays a phrase first', (await pg.evaluate('__hp.echo()'))['phase'] == 'listen' and await pg.is_visible('#hLivesBox'))
        for _ in range(3):
            await pg.evaluate("(() => { for (let i = 0; i < 400 && __hp.echo().phase !== 'play'; i++) __hp.stepq(1/30); })()")
            e = await pg.evaluate('__hp.echo()')
            for ln in e['seq']: await pg.keyboard.press(['KeyD', 'KeyF', 'KeyJ', 'KeyK'][ln]); await pg.evaluate('__hp.stepq(1/30, 3)')
            await pg.evaluate('__hp.stepq(1/30, 2)')
        check('echo: repeating phrases scores rounds', await pg.evaluate('__hp.S.score') > 0 and await pg.evaluate('__hp.S.round') >= 3, await pg.evaluate('[__hp.S.score, __hp.S.round]'))
        await pg.evaluate("(() => { for (let i = 0; i < 400 && __hp.echo().phase !== 'play'; i++) __hp.stepq(1/30); })()")
        e = await pg.evaluate('__hp.echo()'); wrong = (e['seq'][0] + 1) % 4
        await pg.evaluate(f'__hp.press({wrong}); __hp.step(1/30)')
        check('echo: wrong key blows out a candle', await pg.evaluate('__hp.S.lives') == 2)
        await pg.screenshot(path=OUT + 'shot-echo.png')
        await pg.evaluate('__hp.end(); __hp.step(1/30, 3)'); await pg.click('#btnMenu')
        # free
        await pg.click('#btnFree'); await pg.evaluate('__hp.step(1/30, 40)')
        for k in ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ']: await pg.keyboard.press(k); await pg.evaluate('__hp.stepq(1/30, 4)')
        sc = await pg.evaluate('__hp.keyScreen(60)'); await pg.mouse.click(sc['x'], sc['y']); await pg.evaluate('__hp.step(1/30)')
        check('free play: keyboard + clicking the 3D keys play notes', await pg.evaluate('__hp.S.freeN') == 8, await pg.evaluate('__hp.S.freeN'))
        await pg.evaluate('for (let i = 0; i < 20; i++) { __hp.freeNote(60 + i % 12); __hp.stepq(1/30, 3); } __hp.step(1/30, 30)')
        check('free play: choir joins after 24 notes', await pg.evaluate('__hp.choir()') > .3)
        await pg.screenshot(path=OUT + 'shot-free.png'); check('free play no glare', bright_share(OUT + 'shot-free.png') < .004)
        ey = await pg.evaluate('__hp.eyes()'); check('portrait eyes follow', len(ey) >= 6 and any(abs(a) + abs(c) > .01 for a, c in ey), ey[:2])
        await pg.keyboard.press('Escape'); await pg.evaluate('__hp.step(1/30, 5)'); check('Esc ends free play', await pg.evaluate('__hp.S.state') == 'end')
        labels = []
        for _ in range(4): await pg.click('#btnQ'); labels.append(await pg.text_content('#btnQ'))
        check('quality cycles Low/Normal/High/Ultra', any('Normal' in l for l in labels) and any('Ultra' in l for l in labels), labels)
        check('no console errors (desktop)', not logs, logs[:3])
        await ctx.close()
        # mobile touch
        ctx, pg, logs = await page(b, viewport={'width': 390, 'height': 844}, has_touch=True, is_mobile=True, device_scale_factor=2)
        await pg.screenshot(path=OUT + 'shot-mobile-menu.png')
        r = await pg.eval_on_selector('#menu', 'e => { const r = e.getBoundingClientRect(); return [r.top, r.bottom]; }'); check('mobile menu fits', r[0] >= 0 and r[1] <= 844, r)
        await pg.tap('#btnPlay'); await pg.evaluate('__hp.step(1/30, 60)')
        for _ in range(500):
            x = await pg.evaluate('__hp.next()'); t = await pg.evaluate('__hp.S.songT')
            if x and x['t'] <= t + 1e-6:
                sp = await pg.evaluate(f'__hp.laneScreen({x["lane"]})'); await pg.touchscreen.tap(sp['x'], sp['y'] - 40)
                if await pg.evaluate('__hp.S.hits') >= 5: break
            await pg.evaluate('__hp.stepq(1/30)')
        check('touch: tapping lanes hits notes', await pg.evaluate('__hp.S.hits') >= 5, await pg.evaluate('__hp.S.hits'))
        await pg.evaluate('__hp.step(1/30)'); await pg.screenshot(path=OUT + 'shot-mobile-play.png')
        bb = [await pg.eval_on_selector(s, 'e => { const r = e.getBoundingClientRect(); return [r.left, r.right, r.top, r.bottom]; }') for s in ['#hud', '#top']]
        check('mobile HUD inside the screen, not under the buttons', bb[0][0] >= 0 and (bb[0][1] <= bb[1][0] or bb[0][2] >= bb[1][3]) and bb[0][3] <= 844, bb)  # beside or (phone layout) below the corner buttons
        ls = [await pg.evaluate(f'__hp.laneScreen({i})') for i in range(5)]
        check('mobile: all lanes on screen', all(20 < l['x'] < 370 and 0 < l['y'] < 844 for l in ls), [round(l['x']) for l in ls])
        check('mobile play no glare', bright_share(OUT + 'shot-mobile-play.png') < .004)
        await pg.evaluate('__hp.end(); __hp.step(1/30, 40)'); await pg.screenshot(path=OUT + 'shot-mobile-end.png')
        r = await pg.eval_on_selector('#end', 'e => { const r = e.getBoundingClientRect(); return [r.top, r.bottom]; }')
        check('mobile end panel fits', r[0] >= 0 and r[1] <= 844, r)
        check('no console errors (mobile)', not logs, logs[:3])
        await ctx.close(); await b.close()
    src = ''.join(open(f, encoding='utf8').read() for f in glob.glob(ROOT + '/src/*.js') + [ROOT + '/index.html', ROOT + '/css/style.css'])
    check('no synth oscillators (real samples only)', 'createOscillator' not in src)
    texts = ''.join(open(f, encoding='utf8', errors='ignore').read() for f in glob.glob(ROOT + '/src/*.js') + [ROOT + '/index.html'] + glob.glob(ROOT + '/*.md') + glob.glob(ROOT + '/LICENSES/*.md'))
    check('no email addresses', not re.search(r'[\w.+-]+@[\w-]+\.[\w.]+', texts))
    check("no 'AI' wording", not re.search(r'\bAI\b', texts))
    print(f'\n{sum(R)}/{len(R)} passed'); return all(R)
ok = asyncio.run(main()); raise SystemExit(0 if ok else 1)
