import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { createWorld, updateWorld, swingChandelier, liftSheets, QUALITY } from './world.js';
import { createPiano, pressKey, updatePiano, createGhostHand, ghostPlay, updateGhostHand, setLid, keyX, KY, KZF, NOTE } from './piano.js';
import { createChoir, updateChoir } from './ghosts.js';
import { createFX, sparks, puff, updateFX } from './fx.js';
import { SONGS, SONG_ORDER, parseSong } from './songs.js';
import * as A from './audio.js';
import { T } from './i18n.js';

const URL_TXT = '@Frank_AI_Lab';
const $ = id => document.getElementById(id);
const ls = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
let seed = (window.__hpSeed || (Date.now() & 0xffffff)) >>> 0;
function rng() { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
const lerp = (a, b, k) => a + (b - a) * k, clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const DIFF = {
  easy: { lanes: 4, fall: 2.5, tempo: .9, gap: .36, win: [.07, .13, .19], drain: .05, mult: 1, phrase: 3 },
  medium: { lanes: 5, fall: 2.1, tempo: 1, gap: .22, win: [.055, .1, .15], drain: .09, mult: 1.2, phrase: 4 },
  hard: { lanes: 6, fall: 1.7, tempo: 1.08, gap: .12, win: [.045, .085, .13], drain: .12, mult: 1.5, phrase: 5 },
  kids: { lanes: 3, fall: 3, tempo: .8, gap: .55, win: [.1, .18, .3], drain: 0, mult: 1, phrase: 2 }
};
const LANE_KEYS = { 3: ['KeyF', 'Space', 'KeyJ'], 4: ['KeyD', 'KeyF', 'KeyJ', 'KeyK'], 5: ['KeyD', 'KeyF', 'Space', 'KeyJ', 'KeyK'], 6: ['KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'KeyL'] };
const KEY_LABEL = { KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyJ: 'J', KeyK: 'K', KeyL: 'L', Space: '␣' };
const LANE_COL = ['#b48cff', '#7ad0ff', '#7affc8', '#ffd27a', '#ff9ac8', '#c8d8ff'];
const FREE_KEYS = { KeyA: 60, KeyW: 61, KeyS: 62, KeyE: 63, KeyD: 64, KeyF: 65, KeyT: 66, KeyG: 67, KeyY: 68, KeyZ: 68, KeyH: 69, KeyU: 70, KeyJ: 71, KeyK: 72, KeyO: 73, KeyL: 74, KeyP: 75, Semicolon: 76, Quote: 77 };
const S = {
  state: 'menu', mode: 'play', lang: ls.get('hp-lang', 'en'), diff: ls.get('hp-diff', 'medium'), kids: ls.get('hp-kids', '0') === '1', song: ls.get('hp-song', 'toccata'), q: ls.get('hp-q', ''), qUser: !!ls.get('hp-q', ''),
  score: 0, gt: 0, combo: 0, maxCombo: 0, hits: 0, judged: 0, accSum: 0, perfect: 0, spirit: 1, songT: 0, newBest: false, best: 0, shake: 0, lives: 3, round: 0, freeN: 0, failed: false,
  name: ls.get('hp-name', 'Player') || 'Player', pel: 0, pressed: 0
};
if (!DIFF[S.diff] || S.diff === 'kids') S.diff = 'medium';
if (!SONGS[S.song]) S.song = 'toccata';
if (!QUALITY[S.q]) { S.q = 'mid'; S.qUser = false; }
const dkey = () => S.kids ? 'kids' : S.diff, D = () => DIFF[dkey()], bestKey = () => `hp-best-${S.mode}-${S.mode === 'play' ? S.song + '-' : ''}${dkey()}`;
A.setClock(() => S.gt);
const t = k => T[S.lang][k] || T.en[k] || k;

// ---------------- renderer / scene ----------------
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: false });
renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.2; renderer.shadowMap.type = THREE.PCFShadowMap;
const W = createWorld(renderer, QUALITY[S.q], 8); const scene = W.scene;
const camera = new THREE.PerspectiveCamera(42, 1, .05, 60);
const F = createFX(scene, W.soft, W.smokeTex);
const P = createPiano(scene, QUALITY[S.q]);
P.group.traverse(o => { if (o.isMesh) { o.castShadow = o.castShadow || false; } });
const HL = createGhostHand(scene, true), HR = createGhostHand(scene, false);
const C = createChoir(scene, 5);
const keyGlow = {};
let composer, bloom;
function buildComposer() {
  if (composer) composer.dispose();
  composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .3 * QUALITY[S.q].bloom, .35, .9); composer.addPass(bloom);
  composer.addPass(new OutputPass());
}
function applyQuality(qn, user) {
  S.q = qn; if (user) { S.qUser = true; ls.set('hp-q', qn); }
  const q = QUALITY[qn]; renderer.shadowMap.enabled = q.shadows; W.moon.castShadow = q.shadows; W.key.castShadow = q.shadows;
  if (q.shadows) { W.moon.shadow.mapSize.set(q.shadowSize, q.shadowSize); if (W.moon.shadow.map) { W.moon.shadow.map.dispose(); W.moon.shadow.map = null; } }
  scene.traverse(o => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.needsUpdate = true); });
  buildComposer(); resize(); $('btnQ').textContent = '⚙ ' + t('q_' + qn);
}
let VW = 1, VH = 1;
function resize() {
  VW = window.innerWidth; VH = window.innerHeight; const dpr = Math.min(window.devicePixelRatio || 1, QUALITY[S.q].dpr);
  renderer.setPixelRatio(dpr); renderer.setSize(VW, VH, false); if (composer) { composer.setPixelRatio(dpr); composer.setSize(VW, VH); }
  camera.aspect = VW / VH; camera.fov = camera.aspect < .85 ? 52 : 42; camera.updateProjectionMatrix();
}

// ---------------- lanes, notes, targets ----------------
const HIT_Y = KY + .035, TOP_Y = KY + .8, LZ = KZF - .045, SPAN = .74;
const laneX = i => -SPAN / 2 + (i + .5) * SPAN / D().lanes;
const laneGroup = new THREE.Group(); scene.add(laneGroup);
function labelTex(txt, col) { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.font = '700 74px Fredoka, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round'; g.lineWidth = 14; g.strokeStyle = 'rgba(10,6,24,.95)'; g.strokeText(txt, 64, 68); g.fillStyle = col; g.fillText(txt, 64, 68); const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace; return tx; }
const noteTex = (() => { const c = document.createElement('canvas'); c.width = 128; c.height = 96; const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 48, 4, 64, 48, 60); gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(.35, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 96);
  g.fillStyle = 'rgba(20,10,40,.85)'; g.font = '700 50px serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('♪', 64, 50); return new THREE.CanvasTexture(c); })();
const trailTex = (() => { const c = document.createElement('canvas'); c.width = 16; c.height = 128; const g = c.getContext('2d'); const gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(255,255,255,.5)'); g.fillStyle = gr; g.fillRect(0, 0, 16, 128); return new THREE.CanvasTexture(c); })();
const ringTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 7; g.beginPath(); g.arc(64, 64, 52, 0, 7); g.stroke(); const gr = g.createRadialGradient(64, 64, 30, 64, 64, 62); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.8, 'rgba(255,255,255,.18)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(c); })();
let lanes = [];
function buildLanes() {
  while (laneGroup.children.length) laneGroup.remove(laneGroup.children[0]); lanes = [];
  const n = D().lanes, w = SPAN / n;
  const bar = new THREE.Mesh(new THREE.PlaneGeometry(SPAN + .02, .006), new THREE.MeshBasicMaterial({ color: '#d8c8ff', transparent: true, opacity: .7, depthWrite: false })); bar.position.set(0, HIT_Y, LZ); laneGroup.add(bar);
  for (let i = 0; i < n; i++) {
    const col = new THREE.Color(LANE_COL[i % 6]);
    const beam = new THREE.Mesh(new THREE.PlaneGeometry(w * .86, TOP_Y - HIT_Y), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uC: { value: col }, uA: { value: .08 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
      fragmentShader: 'uniform vec3 uC; uniform float uA; varying vec2 vUv; void main(){ float e = smoothstep(0., .25, vUv.x) * smoothstep(1., .75, vUv.x); float f = smoothstep(1., .1, vUv.y); gl_FragColor = vec4(uC, uA * e * (.35 + .65 * f)); }' }));
    beam.position.set(laneX(i), (HIT_Y + TOP_Y) / 2, LZ - .002); laneGroup.add(beam);
    const ring = new THREE.Mesh(new THREE.PlaneGeometry(w * .62, w * .62 * .6), new THREE.MeshBasicMaterial({ map: ringTex, color: col, transparent: true, opacity: .55, depthWrite: false })); ring.position.set(laneX(i), HIT_Y, LZ + .001); laneGroup.add(ring);
    const lab = new THREE.Mesh(new THREE.PlaneGeometry(.04, .04), new THREE.MeshBasicMaterial({ map: labelTex(KEY_LABEL[LANE_KEYS[n][i]], LANE_COL[i % 6]), transparent: true, depthWrite: false })); lab.position.set(laneX(i), HIT_Y - .034, LZ + .03); lab.rotation.x = -.5; laneGroup.add(lab);
    lanes.push({ beam, ring, lab, col, flash: 0 });
  }
}
const notePool = []; function getNoteMesh() { let o = notePool.find(o => !o.used); if (!o) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.075, .056), new THREE.MeshBasicMaterial({ map: noteTex, transparent: true, depthWrite: false })); const tr = new THREE.Mesh(new THREE.PlaneGeometry(.02, .16), new THREE.MeshBasicMaterial({ map: trailTex, transparent: true, depthWrite: false })); tr.position.y = .085; m.add(tr); scene.add(m); o = { m, tr, used: false }; notePool.push(o); } o.used = true; o.m.visible = true; return o; }
function freeNoteMesh(o) { if (!o) return; o.used = false; o.m.visible = false; }

// ---------------- song / chart ----------------
let song = null, chart = [], auto = [], accEv = [], evI = 0, autoI = 0;
function buildChart() {
  song = parseSong(S.song); const d = D(), sc = 1 / d.tempo;
  const mel = song.mel.map(e => ({ ...e, t: e.t * sc, d: e.d * sc }));
  accEv = song.acc.map(e => ({ ...e, t: e.t * sc, d: e.d * sc }));
  const pitches = [...new Set(mel.map(e => e.m))].sort((a, b) => a - b); const n = d.lanes;
  chart = []; auto = []; let last = -9;
  for (const e of mel) { if (e.t - last >= d.gap) { const lane = Math.min(n - 1, Math.floor(pitches.indexOf(e.m) / pitches.length * n)); chart.push({ ...e, lane, hit: false, missed: false, mesh: null }); last = e.t; } else auto.push(e); }
  // avoid same-lane jacks on fast passages for kids/easy: nudge
  evI = 0; autoI = 0; song.len2 = song.len * sc;
}
// ---------------- game flow ----------------
let echo = null;
function resetRun() {
  for (const o of notePool) freeNoteMesh(o); chart.forEach(n => n.mesh = null);
  S.score = 0; S.combo = 0; S.maxCombo = 0; S.hits = 0; S.judged = 0; S.accSum = 0; S.perfect = 0; S.spirit = 1; S.newBest = false; S.failed = false; S.pel = 0; S.pressed = 0; S.freeN = 0; S.lives = 3; S.round = 0;
  C.want = 0; W.chandSwing.v += 0; S.best = +ls.get(bestKey(), 0);
}
function start(mode) {
  A.unlock(); S.mode = mode || 'play'; S.state = mode === 'free' ? 'free' : mode === 'echo' ? 'echo' : 'play'; buildChart(); buildLanes(); resetRun();
  laneGroup.visible = S.mode !== 'free';
  if (S.mode === 'play') { S.songT = -(D().fall + 1.2); }
  if (S.mode === 'echo') { echo = { pos: 0, len: D().phrase, phase: 'wait', t: 0, i: 0, seq: [] }; echoNext(1.2); }
  A.sfx.start(); if (S.kids) A.sfx.kids();
  show(null); hud();
}
function judge(dt) { const w = D().win; const a = Math.abs(dt); return a <= w[0] ? 0 : a <= w[1] ? 1 : a <= w[2] ? 2 : 3; }
const JW = [1, .7, .4, 0], JP = [300, 200, 100, 0], JK = ['perfect', 'great', 'good', 'miss'], JC = ['#fff2a8', '#b8ffcf', '#a8d8ff', '#ffb0b0'];
function lanePress(i) {
  if (i < 0 || i >= D().lanes) return; const L = lanes[i]; if (L) L.flash = 1; S.pressed++;
  if (S.state === 'play') {
    let best = null, bd = 9; for (const n of chart) { if (n.hit || n.missed || n.lane !== i) continue; const d = S.songT - n.t; if (Math.abs(d) < Math.abs(bd)) { bd = d; best = n; } if (n.t > S.songT + 1) break; }
    if (best && Math.abs(bd) <= D().win[2]) hitNote(best, judge(bd), bd);
    else { pressKey(P, NOTE('C4') + [0, 2, 4, 5, 7, 9][i], .3); }
  } else if (S.state === 'echo') echoPress(i);
}
function hitNote(n, j, dt) {
  n.hit = true; freeNoteMesh(n.mesh); n.mesh = null;
  A.piano(n.m, j === 0 ? .95 : j === 1 ? .82 : .7, n.d); pressKey(P, n.m, 1); keyGlow[n.m] = 1;
  S.judged++; S.hits++; S.accSum += JW[j]; if (j === 0) S.perfect++;
  S.combo++; S.maxCombo = Math.max(S.maxCombo, S.combo); const cm = 1 + Math.min(S.combo, 40) / 20;
  S.score += Math.round(JP[j] * cm * D().mult); S.spirit = Math.min(1, S.spirit + .02);
  const at = new THREE.Vector3(laneX(n.lane), HIT_Y + .01, LZ + .01);
  sparks(F, at, j === 0 ? 14 : 8, { colors: [LANE_COL[n.lane % 6], '#ffffff'], speed: .55, up: .5, life: .55, grav: .4, size: .028 });
  W.react = Math.min(1, W.react + (j === 0 ? .35 : .2));
  popText(t(JK[j]), JC[j], j === 0 ? 1.05 : .9, n.lane);
  comboEvents();
}
function missNote(n) {
  n.missed = true; freeNoteMesh(n.mesh); n.mesh = null; S.judged++;
  A.piano(n.m, .3, n.d * .6); keyGlow[n.m] = .4; pressKey(P, n.m, .5); ghostPlay(HR, n.m);
  if (S.combo >= 20) A.sfx.miss(); S.combo = 0; C.want = 0;
  popText(t('miss'), JC[3], .8, n.lane);
  S.spirit = Math.max(0, S.spirit - D().drain); S.shake = Math.max(S.shake, .15);
  if (S.spirit <= 0 && D().drain > 0 && !S.failed) { S.failed = true; toast(t('failed')); A.sfx.fail(); timers.push({ t: S.gt + 1.4, f: () => end() }); }
}
function comboEvents() {
  const c = S.combo;
  if (c === 10 || (c > 10 && c % 25 === 0)) { swingChandelier(W, c >= 25 ? 2.2 : 1.4); A.sfx.combo(c >= 25 ? 2 : 1); banner(t('chand')); }
  if (c === 20) { C.want = 1; C.sing = 1; A.choir(choirChord(), .5); banner(t('choir')); A.sfx.great(); }
  if (c === 30) liftSheets(W, 1);
  if (c === 50 || c === 100) { W.flash = 1; A.sfx.thunder(); banner(t('storm')); S.shake = .5; }
  if (c >= 20 && c % 8 === 0 && c !== 20) { C.sing = 1; A.choir(choirChord(), .32); }
}
function choirChord() { const tn = NOTE(song.tonic + '3'); const minor = song.key !== 'mountain' || true; return [tn - 12 + 12, tn + (minor ? 3 : 4) , tn + 7]; }
let bannerEl = null; function banner(s) { const el = $('banner'); el.textContent = s; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); timers.push({ t: S.gt + 1.8, f: () => el.classList.remove('show') }); }

// ---------------- echo (memory) mode ----------------
function echoNext(delay) {
  const ch = chart; if (echo.pos >= ch.length) echo.pos = 0;
  echo.seq = ch.slice(echo.pos, echo.pos + echo.len); if (echo.seq.length < echo.len) echo.seq = ch.slice(0, echo.len);
  const t0 = echo.seq[0].t; echo.times = echo.seq.map(n => Math.max(0, (n.t - t0)) * 1.15 + 0);
  // keep notes at least .32 s apart so the phrase is readable
  for (let k = 1; k < echo.times.length; k++) echo.times[k] = Math.max(echo.times[k], echo.times[k - 1] + .34);
  echo.phase = 'listen'; echo.t = -delay; echo.i = 0; echo.k = 0; S.round++; $('hint').textContent = t('listen');
}
function echoPress(i) {
  if (echo.phase !== 'play') { pressKey(P, NOTE('C4') + i * 2, .3); return; }
  const n = echo.seq[echo.k];
  if (n.lane === i) { A.piano(n.m, .85, .5); pressKey(P, n.m, 1); keyGlow[n.m] = 1; echo.k++; S.combo++; S.maxCombo = Math.max(S.maxCombo, S.combo); S.hits++; S.judged++; S.accSum += 1;
    sparks(F, new THREE.Vector3(laneX(i), HIT_Y + .01, LZ + .01), 10, { colors: [LANE_COL[i % 6], '#ffffff'], speed: .5, up: .5, life: .5, grav: .4, size: .028 }); W.react = Math.min(1, W.react + .3);
    if (echo.k >= echo.seq.length) { const pts = Math.round(100 * echo.seq.length * D().mult * (1 + S.round * .1)); S.score += pts; popText(`${t('echoOk')} +${pts}`, '#fff2a8', 1.1, -1); comboEvents(); A.sfx.combo(1);
      echo.pos += echo.seq.length; echo.len = Math.min(echo.len + 1, 9); echo.phase = 'wait'; if (S.round >= 8) timers.push({ t: S.gt + 1.2, f: () => end() }); else timers.push({ t: S.gt + .9, f: () => echoNext(.4) }); } }
  else { A.piano(NOTE('C4') + [0, 2, 4, 5, 7, 9][i] - 12, .35, .3); A.sfx.miss(); S.lives--; S.combo = 0; S.judged++; C.want = 0; popText(t('echoBad'), JC[3], 1, -1); S.shake = .3; echo.phase = 'wait';
    if (S.lives <= 0) { A.sfx.fail(); timers.push({ t: S.gt + 1.2, f: () => end() }); } else timers.push({ t: S.gt + 1, f: () => { S.round--; echoNext(.3); } }); }
  hud();
}
function echoStep(dt) {
  if (echo.phase === 'listen') { echo.t += dt;
    while (echo.i < echo.seq.length && echo.t >= echo.times[echo.i]) { const n = echo.seq[echo.i]; A.piano(n.m, .7, .45); pressKey(P, n.m, 1); keyGlow[n.m] = .8; ghostPlay(HR, n.m); lanes[n.lane] && (lanes[n.lane].flash = 1); echo.i++; }
    if (echo.i >= echo.seq.length && echo.t > echo.times[echo.times.length - 1] + .5) { echo.phase = 'play'; echo.k = 0; $('hint').textContent = t('yourTurn'); }
  }
}
// ---------------- free play ----------------
function freeNote(m) { if (m < 21 || m > 108) return; A.piano(m, .8, .9); pressKey(P, m, 1); keyGlow[m] = 1; S.freeN++; S.combo = S.freeN; W.react = Math.min(1, W.react + .2);
  sparks(F, new THREE.Vector3(keyX(m), KY + .03, KZF - .05), 6, { colors: ['#c8b8ff', '#ffffff'], speed: .4, up: .4, life: .45, grav: .3, size: .022 });
  if (S.freeN === 12) { swingChandelier(W, 1.4); A.sfx.combo(1); } if (S.freeN === 24) { C.want = 1; C.sing = 1; A.choir([57, 60, 64], .45); banner(t('choir')); } if (S.freeN > 24 && S.freeN % 10 === 0) { C.sing = 1; A.choir([m - 12, m - 9, m - 5].map(x => clamp(x, 45, 70)), .3); } if (S.freeN === 60) { W.flash = 1; A.sfx.thunder(); } }

function end() {
  if (S.state === 'end') return; const prev = S.state; S.state = 'end';
  for (const o of notePool) freeNoteMesh(o); laneGroup.visible = false;
  const acc = S.judged ? S.accSum / S.judged : 0; S.acc = acc;
  if (S.mode !== 'free') { if (S.score > S.best) { S.best = S.score; S.newBest = S.score > 0; ls.set(bestKey(), S.score); } }
  let grade = S.mode === 'free' ? '' : S.failed ? 'D' : acc >= .95 ? 'S' : acc >= .85 ? 'A' : acc >= .7 ? 'B' : acc >= .5 ? 'C' : 'D'; if (S.kids && 'CD'.includes(grade) && grade) grade = 'B'; S.grade = grade;
  A.sfx.end(S.newBest); if (!S.failed && S.mode === 'play') { W.flash = .7; C.want = 1; C.sing = 1; A.choirSwell(NOTE(song.tonic + '3'), .45); }
  $('eTitle').textContent = S.failed ? t('failed') : S.mode === 'free' ? t('freeOver') : S.mode === 'echo' ? t('echoOver') : S.kids ? t('kidsOver') : t('over');
  $('eScore').textContent = S.mode === 'free' ? `🎹 ${S.freeN}` : S.score; $('eGrade').textContent = grade; $('eGrade').dataset.g = grade;
  $('eBest').textContent = S.mode === 'free' ? '' : S.newBest ? t('newBest') : `${t('best')}: ${S.best}`;
  $('eStats').textContent = S.mode === 'free' ? `${S.freeN} ${t('notes')}` : S.mode === 'echo' ? `${t('round')} ${S.round} · ${S.hits} ${t('notes')} · ${S.maxCombo} ${t('maxCombo')}`
    : `${song.title} · ${Math.round(acc * 100)}% · ${S.maxCombo} ${t('maxCombo')} · ${S.perfect}× ${t('perfect').replace('!', '')}`;
  $('eName').value = S.name; show('end');
}
function toMenu() { S.state = 'menu'; for (const o of notePool) freeNoteMesh(o); laneGroup.visible = false; C.want = 0; show('menu'); attract.t = 0; attract.i = 0; attract.a = 0; }

// ---------------- UI ----------------
function show(id) { for (const s of ['menu', 'end']) $(s).classList.toggle('show', s === id); document.body.dataset.state = S.state; document.body.dataset.mode = S.mode; document.body.classList.toggle('kids', S.kids); }
function pulse(id) { const el = $(id); if (!el) return; el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); }
function hud() {
  $('hScore').textContent = S.score; $('hCombo').textContent = S.combo; $('hAcc').textContent = S.judged ? Math.round(S.accSum / S.judged * 100) + '%' : '–';
  $('hSpirit').style.width = Math.round(S.spirit * 100) + '%'; $('hSpiritBox').classList.toggle('low', S.spirit < .3);
  $('hLives').textContent = '🕯️'.repeat(Math.max(0, S.lives)); $('hRound').textContent = S.round;
  $('hProg').style.width = (S.mode === 'play' && song ? clamp(S.songT / song.len2, 0, 1) * 100 : 0) + '%';
}
function applyLang() {
  document.documentElement.lang = S.lang; document.querySelectorAll('[data-t]').forEach(el => el.textContent = t(el.dataset.t));
  $('h3').textContent = S.kids ? t('h3k') : t('h3'); $('btnLang').textContent = S.lang === 'en' ? 'DE' : 'EN';
  $('btnKids').classList.toggle('on', S.kids); $('btnKids').setAttribute('aria-pressed', S.kids);
  document.querySelectorAll('#diff button').forEach(b => b.classList.toggle('on', b.dataset.d === S.diff)); $('diff').style.display = S.kids ? 'none' : '';
  document.querySelectorAll('#songs button').forEach(b => { b.classList.toggle('on', b.dataset.s === S.song); b.querySelector('b').textContent = SONGS[b.dataset.s].title; b.querySelector('small').textContent = SONGS[b.dataset.s].composer; });
  $('btnSound').classList.toggle('on', !A.isMuted()); $('btnSound').textContent = A.isMuted() ? '🔇' : '🔊'; $('btnQ').textContent = '⚙ ' + t('q_' + S.q); hud();
}
const timers = [], popT = [];
function popText(txt, col, big = 1, lane = -1) {
  const el = document.createElement('div'); el.className = 'pop'; el.textContent = txt;
  let x = VW / 2, y = VH * .32;
  if (lane >= 0) { const p = new THREE.Vector3(laneX(lane), HIT_Y + .12, LZ).project(camera); x = clamp((p.x * .5 + .5) * VW, 70, VW - 70); y = clamp((-p.y * .5 + .5) * VH, 90, VH - 120); }
  el.style.left = x + 'px'; el.style.top = y + 'px'; el.style.color = col;
  { const now = S.gt; popT.splice(0, popT.length, ...popT.filter(q => now - q.t < .45 && Math.abs(q.x - x) < 60)); el.style.marginTop = (-popT.length * 34) + 'px'; popT.push({ t: now, x }); }
  el.style.fontSize = (28 * big * (VW < 600 ? .8 : 1)) + 'px'; $('pops').appendChild(el); timers.push({ t: S.gt + 1.0, f: () => el.remove() });
}
function toast(s) { const el = $('toast'); el.textContent = s; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2500); }

// ---------------- input ----------------
let isTouch = false, lastPtr = null;
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); const keyMeshes = Object.entries(P.keys).map(([m, k]) => { k.userData.m = +m; return k; });
function laneAtScreen(x) { let best = -1, bd = 1e9; for (let i = 0; i < D().lanes; i++) { const p = new THREE.Vector3(laneX(i), HIT_Y, LZ).project(camera); const sx = (p.x * .5 + .5) * VW; const d = Math.abs(sx - x); if (d < bd) { bd = d; best = i; } } const w = Math.abs(new THREE.Vector3(laneX(1), HIT_Y, LZ).project(camera).x - new THREE.Vector3(laneX(0), HIT_Y, LZ).project(camera).x) * .5 * VW; return bd < w * 1.6 ? best : -1; }
canvas.addEventListener('pointerdown', e => { A.unlock(); isTouch = e.pointerType === 'touch'; lastPtr = { x: e.clientX, y: e.clientY }; e.preventDefault();
  if (S.state === 'play' || S.state === 'echo') { const i = laneAtScreen(e.clientX); if (i >= 0) lanePress(i); }
  else if (S.state === 'free') { ndc.set(e.clientX / VW * 2 - 1, -(e.clientY / VH) * 2 + 1); ray.setFromCamera(ndc, camera); const h = ray.intersectObjects(keyMeshes, false); if (h.length) { // prefer black keys (they sit on top)
      const hb = h.find(x => [1, 3, 6, 8, 10].includes(x.object.userData.m % 12)) || h[0]; freeNote(hb.object.userData.m); } } });
window.addEventListener('keydown', e => {
  if (e.target && e.target.tagName === 'INPUT') return; if (e.repeat) return;
  if (e.code === 'Enter' && S.state === 'menu') { start('play'); return; }
  if (e.code === 'Escape' && (S.state === 'play' || S.state === 'echo' || S.state === 'free')) { end(); return; }
  if (S.state === 'play' || S.state === 'echo') { const ks = LANE_KEYS[D().lanes]; let i = ks.indexOf(e.code); if (i < 0 && /^Digit[1-6]$/.test(e.code)) i = +e.code.slice(5) - 1; if (i >= 0) { e.preventDefault(); lanePress(i); } }
  else if (S.state === 'free' && FREE_KEYS[e.code] !== undefined) { e.preventDefault(); freeNote(FREE_KEYS[e.code] + (e.shiftKey ? 12 : 0)); }
});
$('btnPlay').onclick = () => start('play'); $('btnEcho').onclick = () => start('echo'); $('btnFree').onclick = () => start('free');
$('btnAgain').onclick = () => start(S.mode); $('btnMenu').onclick = () => { A.sfx.ui(); toMenu(); }; $('btnQuit').onclick = () => end();
$('btnCard').onclick = () => saveCard(false); $('btnShare').onclick = () => saveCard(true);
$('btnLang').onclick = () => { S.lang = S.lang === 'en' ? 'de' : 'en'; ls.set('hp-lang', S.lang); applyLang(); A.sfx.ui(); };
document.querySelectorAll('#diff button').forEach(b => b.onclick = () => { S.diff = b.dataset.d; ls.set('hp-diff', S.diff); applyLang(); A.sfx.ui(); });
document.querySelectorAll('#songs button').forEach(b => b.onclick = () => { S.song = b.dataset.s; ls.set('hp-song', S.song); applyLang(); A.unlock(); A.sfx.ui(); attract.t = 0; attract.i = 0; attractSong = parseSong(S.song); });
$('btnKids').onclick = () => { S.kids = !S.kids; ls.set('hp-kids', S.kids ? '1' : '0'); applyLang(); A.unlock(); A.sfx.ui(); };
$('btnSound').onclick = () => { A.unlock(); A.setMuted(!A.isMuted()); applyLang(); };
$('btnQ').onclick = () => { const o = ['low', 'mid', 'high', 'ultra']; applyQuality(o[(o.indexOf(S.q) + 1) % 4], true); };
$('eName').addEventListener('keydown', e => e.stopPropagation());
window.addEventListener('resize', resize);

// ---------------- share card ----------------
async function saveCard(share) {
  S.name = ($('eName').value || '').trim() || 'Player'; ls.set('hp-name', S.name);
  try { await document.fonts.load('700 40px Fredoka'); } catch (e) {}
  const CW = 1080, CH = 1350, RW = 864, RH = 1080;
  renderer.setPixelRatio(1); renderer.setSize(RW, RH, false); composer.setPixelRatio(1); composer.setSize(RW, RH);
  const old = { a: camera.aspect, f: camera.fov, p: camera.position.clone(), q: camera.quaternion.clone() };
  camera.aspect = RW / RH; camera.fov = 50; camera.updateProjectionMatrix(); camera.position.set(1.7, 1.75, 3.2); camera.lookAt(-.1, 1.05, -.6); laneGroup.visible = false; composer.render();
  const c = document.createElement('canvas'); c.width = CW; c.height = CH; const k = c.getContext('2d'); k.drawImage(renderer.domElement, 0, 0, CW, CH);
  camera.aspect = old.a; camera.fov = old.f; camera.position.copy(old.p); camera.quaternion.copy(old.q); resize();
  const gr = k.createLinearGradient(0, 0, 0, CH); gr.addColorStop(0, 'rgba(8,6,20,.85)'); gr.addColorStop(.26, 'rgba(8,6,20,.1)'); gr.addColorStop(.76, 'rgba(8,6,20,.15)'); gr.addColorStop(1, 'rgba(8,6,20,.92)'); k.fillStyle = gr; k.fillRect(0, 0, CW, CH);
  const Fo = (w, s) => `${w} ${s}px Fredoka, "Arial Rounded MT Bold", sans-serif`; k.textAlign = 'center'; k.lineJoin = 'round';
  const txt = (s, x, y, fill, stroke = 'rgba(14,8,30,.85)', lw = 8) => { k.strokeStyle = stroke; k.lineWidth = lw; k.strokeText(s, x, y); k.fillStyle = fill; k.fillText(s, x, y); };
  k.font = Fo(700, 92); txt('🎹 Haunted Piano', CW / 2, 125, '#e6dcff', 'rgba(30,10,60,.85)', 10);
  k.font = Fo(500, 44); txt(S.name.slice(0, 18), CW / 2, 200, '#ffffff');
  if (S.mode === 'free') { k.font = Fo(700, 64); txt(`🎹 ${S.freeN} ${t('notes')}`, CW / 2, 290, '#fff0c8'); }
  else { k.font = Fo(700, 72); txt(`${S.score}${S.grade ? '  ·  ' + S.grade : ''}`, CW / 2, 290, '#fff0c8');
    k.font = Fo(500, 34); txt(`${S.mode === 'echo' ? t('echo') : song.title} · ${S.kids ? t('kids') : t('d_' + S.diff)}${S.newBest ? ' · ' + t('newBest') : ''}`, CW / 2, 345, '#e8dcff'); }
  k.font = Fo(600, 48); txt(t('cardTag'), CW / 2, 1230, '#ffd27a');
  k.font = Fo(400, 32); txt(t('cardPlay') + ' · ' + URL_TXT, CW / 2, 1290, 'rgba(255,255,255,.92)');
  const blob = await new Promise(r => c.toBlob(r, 'image/png')); window.__hpCard = { w: c.width, h: c.height };
  const file = new File([blob], 'haunted-piano.png', { type: 'image/png' });
  if (share && navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], text: `Haunted Piano — ${t('cardTag')} ${URL_TXT}` }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'haunted-piano.png'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast(t('saved'));
}

// ---------------- attract (menu): the ghost plays by itself ----------------
let attractSong = parseSong(S.song); const attract = { t: 0, i: 0, j: 0, a: 0 };
function attractStep(dt) {
  attract.t += dt * .9; const sg = attractSong;
  while (attract.i < sg.mel.length && sg.mel[attract.i].t <= attract.t) { const e = sg.mel[attract.i++]; pressKey(P, e.m, 1); keyGlow[e.m] = .5; ghostPlay(HR, e.m); A.piano(e.m, .45, e.d * .9); }
  while (attract.j < sg.acc.length && sg.acc[attract.j].t <= attract.t) { const e = sg.acc[attract.j++]; for (const m of e.ms) { pressKey(P, m, 1); A.piano(m, .3, e.d * .9); } ghostPlay(HL, e.ms[0]); }
  if (attract.t > sg.len + 2.5) { attract.t = -1; attract.i = 0; attract.j = 0; }
}
// ---------------- simulation ----------------
const camPos = new THREE.Vector3(2.5, 2.2, 4), look = new THREE.Vector3(0, 1, 0), _v = new THREE.Vector3(), _l = new THREE.Vector3(), eyeT = new THREE.Vector3();
let owlT = 20;
function playStep(dt) {
  S.songT += dt; const d = D();
  // ghost left hand: accompaniment
  while (evI < accEv.length && accEv[evI].t <= S.songT) { const e = accEv[evI++]; for (const m of e.ms) { A.piano(m, .5, e.d * .95); pressKey(P, m, 1); } ghostPlay(HL, e.ms[0]); W.react = Math.min(1, W.react + .08); }
  // ghost fills the notes you don't have to play
  while (autoI < auto.length && auto[autoI].t <= S.songT) { const e = auto[autoI++]; A.piano(e.m, .55, e.d); pressKey(P, e.m, 1); keyGlow[e.m] = .35; ghostPlay(HR, e.m); }
  for (const n of chart) {
    if (n.hit || n.missed) continue; const dtn = n.t - S.songT; if (dtn > d.fall + .2) break;
    if (dtn < -d.win[2]) { if (S.kids) { // kids: the ghost plays it, no penalty, no combo loss
        n.missed = true; freeNoteMesh(n.mesh); n.mesh = null; A.piano(n.m, .45, n.d); pressKey(P, n.m, 1); ghostPlay(HR, n.m); S.judged++; S.accSum += .2; continue; } missNote(n); continue; }
    if (!n.mesh) { n.mesh = getNoteMesh(); n.mesh.m.material.color.set(LANE_COL[n.lane % 6]); n.mesh.tr.material.color.set(LANE_COL[n.lane % 6]); }
    const k = clamp(dtn / d.fall, -.2, 1); n.mesh.m.position.set(laneX(n.lane), HIT_Y + k * (TOP_Y - HIT_Y) + .005, LZ + .004); const s = .8 + (1 - Math.max(0, k)) * .35; n.mesh.m.scale.set(s, s, 1);
    n.mesh.m.material.opacity = clamp((1 - k) * 4, 0, 1) * .95; n.mesh.tr.material.opacity = n.mesh.m.material.opacity * .6;
  }
  if (S.songT > song.len2 + 1.6 && !S.failed) end();
}
const portrait0 = () => camera.aspect < .85;
function step(dt) {
  dt = Math.min(dt, 1 / 20); S.gt += dt; S.pel += dt;
  for (let i = timers.length - 1; i >= 0; i--) if (timers[i].t <= S.gt) { const f = timers[i].f; timers.splice(i, 1); f(); }
  const st = S.state;
  if (st === 'play') playStep(dt); else if (st === 'echo') echoStep(dt); else if (st === 'menu') attractStep(dt);
  for (const L of lanes) { L.flash = Math.max(0, L.flash - dt * 5); L.ring.material.opacity = .45 + L.flash * .5; L.ring.scale.setScalar(1 + L.flash * .25); L.beam.material.uniforms.uA.value = .07 + L.flash * .12; }
  updatePiano(P, dt, keyGlow); updateGhostHand(HL, dt, S.gt); updateGhostHand(HR, dt, S.gt); updateChoir(C, dt, S.gt);
  { const lw = (portrait0() && (st === 'play' || st === 'echo' || st === 'free')) ? .34 : .78; if (Math.abs(P.lidA - lw) > .001) setLid(P, P.lidA + (lw - P.lidA) * Math.min(1, dt * 2.5)); }
  // camera: player's seat (play/echo/free), slow cinematic orbit (menu), wide (end)
  const portrait = camera.aspect < .85; let tgt;
  if (st === 'play' || st === 'echo' || st === 'free') { if (portrait) { _v.set(0, 1.9, 2.5); _l.set(0, .95, .45); } else { _v.set(0, 1.75, 2.4); _l.set(0, 1.0, .2); } }
  else if (st === 'menu') { const a = Math.sin(S.gt * .07) * .55 + .35; const R = portrait ? 4.6 : 3.7; _v.set(Math.sin(a) * R, 1.75 + Math.sin(S.gt * .11) * .15, Math.cos(a) * R + .2); _l.set(-.1, 1.1, -.4); if (!portrait) _l.x -= .9; }
  else { const a = .55 + Math.sin(S.gt * .08) * .2; const R = portrait ? 5.4 : 3.9; _v.set(Math.sin(a) * R, portrait ? 2.3 : 1.9, Math.cos(a) * R); _l.set(portrait ? -.2 : -1.0, portrait ? -.35 : 1.05, -.6); }
  camPos.lerp(_v, 1 - Math.exp(-dt * 2.2)); look.lerp(_l, 1 - Math.exp(-dt * 2.2)); camera.position.copy(camPos);
  if (S.shake > .01) camera.position.add(new THREE.Vector3(rng() - .5, rng() - .5, 0).multiplyScalar(S.shake * .015));
  camera.lookAt(look); camera.updateMatrixWorld(); S.shake *= Math.exp(-dt * 6);
  // portraits watch the keys being played (or the camera)
  const hx = (HR.a > .1 ? HR.g.position.x : 0); eyeT.set(hx, 1.0, .8); if (st === 'end' || st === 'menu') eyeT.copy(camera.position);
  updateWorld(W, S.gt, dt, eyeT);
  updateFX(F, dt, VH * renderer.getPixelRatio() * .5 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
  owlT -= dt; if (owlT < 0) { owlT = 30 + rng() * 25; if (st === 'play' || st === 'free') A.sfx.owl(); }
  if ((st === 'play' || st === 'echo') && Math.floor(S.gt * 10) !== S._h) { S._h = Math.floor(S.gt * 10); hud(); }
  const hk = st === 'free' ? 'hintF' : st === 'echo' ? null : S.kids ? 'hintK' : isTouch ? 'hintT' : 'hint';
  if (hk) { $('hint').textContent = t(hk); $('hint').classList.toggle('show', (st === 'play' && S.songT < -.3 && S.pel > .3) || (st === 'free' && S.freeN === 0 && S.pel > .3)); }
  else $('hint').classList.toggle('show', st === 'echo' && echo && (echo.phase === 'listen' || echo.phase === 'play'));
}
function render() { composer.render(); }
const fps = { ema: 60, n: 0, acc: 0, frames: 0, checked: 0 };
function fpsTick(dt) { fps.acc += dt; fps.frames++; if (fps.acc >= 1) { const f = fps.frames / fps.acc; fps.ema = fps.n ? fps.ema * .6 + f * .4 : f; fps.n++; fps.acc = 0; fps.frames = 0;
  if (!S.qUser && !window.__hpNoAutoQ && fps.n >= 5 && fps.ema < 40 && S.q !== 'low' && S.gt - fps.checked > 3) { fps.checked = S.gt; const o = ['low', 'mid', 'high', 'ultra']; const nq = o[o.indexOf(S.q) - 1]; applyQuality(nq); toast(`${t('autoQ')} ${t('q_' + nq)} (${Math.round(fps.ema)} fps)`); fps.n = 0; } } }

applyQuality(S.q); applyLang(); show('menu'); laneGroup.visible = false;
for (let i = 0; i < 90; i++) step(1 / 30);
let last = performance.now();
function loop(now) { const dt = (now - last) / 1000; last = now; if (!window.__hpManual) { step(dt); render(); fpsTick(dt); } requestAnimationFrame(loop); }
requestAnimationFrame(loop);
const laneScreen = i => { const p = new THREE.Vector3(laneX(i), HIT_Y, LZ).project(camera); return { x: (p.x * .5 + .5) * VW, y: (-p.y * .5 + .5) * VH }; };
const keyScreen = m => { const p = new THREE.Vector3(keyX(m), KY + .005, KZF - .03).project(camera); return { x: (p.x * .5 + .5) * VW, y: (-p.y * .5 + .5) * VH }; };
window.__hp = { S, start, end, step: (dt, n = 1) => { for (let i = 0; i < n; i++) step(dt); render(); }, stepq: (dt, n = 1) => { for (let i = 0; i < n; i++) step(dt); }, log: A.log, quality: q => q ? applyQuality(q, true) : S.q, renderer,
  chart: () => chart.map(n => ({ t: n.t, lane: n.lane, m: n.m, hit: n.hit, missed: n.missed })), press: lanePress, lanes: () => D().lanes, laneScreen, keyScreen, freeNote,
  next: () => chart.find(n => !n.hit && !n.missed), echo: () => echo && { phase: echo.phase, seq: echo.seq.map(n => n.lane), k: echo.k }, choir: () => C.a, chand: () => W.chandSwing,
  songs: SONG_ORDER, diff: () => S.diff, cam: () => ({ p: camera.position.toArray(), near: camera.near }), react: () => W.react, eyes: () => W.eyes.map(e => [e.rotation.x, e.rotation.y]) };
document.body.classList.add('ready');
