// WebAudio for the embedded CC0 samples (window.HP_SOUNDS): a multi-sampled acoustic piano (recorded every minor
// third, pitched to the nearest key), a real recorded room reverb tail made from the piano's own decay, ghost choir
// voices pitched into the song's key, and spooky one-shots. Every played sound is logged for the video mix.
let ctx = null, master = null, dry = null, wet = null, conv = null, loopGain = null, windSrc = null, bufs = {}, ready = false, muted = false;
export const log = [];
let clock = () => 0;
export function setClock(f) { clock = f; }
function b64(s) { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; }
export const PSAMP = { A1: 33, C2: 36, Ds2: 39, Fs2: 42, B2: 47, C3: 48, Ds3: 51, Fs3: 54, A3: 57, B3: 59, Ds4: 63, Fs4: 66, A4: 69, C5: 72, Ds5: 75, Fs5: 78, A5: 81, C6: 84, Ds6: 87, Fs6: 90, A6: 93, C7: 96 };
const PS = Object.entries(PSAMP).sort((a, b) => a[1] - b[1]);
export function sampleFor(m) { let best = PS[0]; for (const e of PS) if (Math.abs(e[1] - m) < Math.abs(best[1] - m) || (Math.abs(e[1] - m) === Math.abs(best[1] - m) && e[1] > m)) best = e; return { n: 'p_' + best[0], r: Math.pow(2, (m - best[1]) / 12) }; }
function makeIR(sec = 2.6) { // room reverb impulse: decaying, slightly darkening noise tail (processing only, no tone synthesis)
  const sr = ctx.sampleRate, n = Math.floor(sr * sec), ir = ctx.createBuffer(2, n, sr); let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 * 2 - 1; };
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); let lp = 0; for (let i = 0; i < n; i++) { const t = i / sr; lp += (rnd() - lp) * (0.5 - .4 * t / sec); d[i] = lp * Math.exp(-t * 2.6) * (i < sr * .012 ? i / (sr * .012) : 1); } }
  return ir;
}
// iOS Safari: create/resume inside the tap, play a 1-sample silent buffer (unlocks output), ask for 'playback' (ignores the mute switch)
function kick(c) { try { const b = c.createBuffer(1, 1, 22050), s = c.createBufferSource(); s.buffer = b; s.connect(c.destination); s.start(0); } catch (e) {} }
export function audioState() { return ctx ? ctx.state : 'none'; }
export async function unlock() {
  try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch (e) {}
  if (ctx) { if (ctx.state !== 'running') ctx.resume().catch(() => {}); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  ctx = new AC(); kick(ctx); if (ctx.state !== 'running') ctx.resume().catch(() => {}); master = ctx.createGain(); master.gain.value = muted ? 0 : .9;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -12; comp.ratio.value = 2.5; master.connect(comp); comp.connect(ctx.destination);
  dry = ctx.createGain(); dry.gain.value = 1; dry.connect(master);
  conv = ctx.createConvolver(); conv.buffer = makeIR(); wet = ctx.createGain(); wet.gain.value = .32; conv.connect(wet); wet.connect(master);
  loopGain = ctx.createGain(); loopGain.gain.value = .22; loopGain.connect(master);
  const src = window.HP_SOUNDS || {};
  await Promise.all(Object.keys(src).map(k => new Promise(res => { try { ctx.decodeAudioData(b64(src[k]), b => { bufs[k] = b; res(); }, () => res()); } catch (e) { res(); } })));
  ready = true; window.__hpAudioReady = Object.keys(bufs).length; startWind();
}
export function play(n, vol = 1, rate = 1, delay = 0, rev = .5, dur = 0) {
  log.push({ n, t: clock() + delay, v: vol, r: rate, rv: rev, d: dur });
  if (!ready || !bufs[n]) return null;
  const s = ctx.createBufferSource(); s.buffer = bufs[n]; s.playbackRate.value = rate;
  const g = ctx.createGain(); g.gain.value = vol; s.connect(g); g.connect(dry);
  if (rev > 0) { const sg = ctx.createGain(); sg.gain.value = rev; g.connect(sg); sg.connect(conv); }
  const t0 = ctx.currentTime + delay; s.start(t0);
  if (dur > 0) { g.gain.setValueAtTime(vol, t0 + dur); g.gain.exponentialRampToValueAtTime(.0008, t0 + dur + .45); s.stop(t0 + dur + .5); }
  return s;
}
// piano: vel 0..1, dur = how long the key is held (dampers release after)
export function piano(m, vel = .8, dur = 1.2, delay = 0) { const { n, r } = sampleFor(m); const v = (.18 + .62 * vel) * (m < 45 ? 1.15 : m > 84 ? .9 : 1); return play(n, v, r, delay, .55, Math.max(.15, dur)); }
// ghost choir: real sung "aah" (F3) pitched into the song's chord
const CH_REF = 53; // F3
export function choir(ms, vol = .32, delay = 0) { ms.forEach((m, i) => play('choir_ah', vol / Math.sqrt(ms.length) * (1 - i * .08), Math.pow(2, (m - CH_REF) / 12) * (1 + (i - 1) * .003), delay + i * .05, .8)); }
export function choirSwell(tonicMidi, vol = .5) { let k = (((tonicMidi - 41) % 12) + 12) % 12; if (k > 6) k -= 12; play('choir_swell', vol, Math.pow(2, k / 12), 0, .7); }
function startWind() { if (windSrc || !bufs.wind) return; windSrc = ctx.createBufferSource(); windSrc.buffer = bufs.wind; windSrc.loop = true; windSrc.connect(loopGain); windSrc.start(); }
export function setMuted(m) { muted = m; if (master) master.gain.value = m ? 0 : .9; }
export function isMuted() { return muted; }
export const sfx = {
  miss() { play('whisper', .22, .9 + Math.random() * .2, 0, .6); },
  combo(k) { play('tinkle', .45, .9 + Math.random() * .2, 0, .6); if (k >= 2) play('sparkle', .3, 1, .05, .5); },
  thunder() { play('thunder', .6, 1, 0, .2); },
  start() { play('stinger', .45, .8, 0, .6); play('whisper', .25, 1, .3, .7); },
  ghost() { play('boo', .25, .8, 0, .6); },
  end(best) { play('howl', .3, 1, .2, .5); if (best) play('success', .5, 1, .4, .4); else play('harp', .4, 1, .3, .5); },
  great() { play('magic', .35, 1, 0, .5); },
  fail() { play('eerie', .45, 1, 0, .6); play('impact', .3, .7, 0, .3); },
  owl() { play('owl', .22, .95, 0, .6); },
  kids() { play('laugh_kids', .45, 1, .2, .4); },
  ui() { play('soft', .35, 1.4, 0, .2); },
  eerie() { play('eerie', .3, 1, 0, .6); }
};
