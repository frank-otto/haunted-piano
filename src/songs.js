// Public-domain spooky classics, arranged for one ghost-assisted right hand (melody = the notes you play) and a
// ghost left hand (accompaniment patterns in {curly braces}: chords separated by '|', step in beats after ':').
import { NOTE } from './piano.js';
export const SONGS = {
  toccata: { title: 'Toccata in D minor', composer: 'J. S. Bach', bpm: 64, tonic: 'D', acc: [1, 1.12], src: `
{D2+D3:6} A5/.25 G5/.25 A5/1.75 r/.5 G5/.25 F5/.25 E5/.25 D5/.25 C#5/.75 D5/1.75 r/.5
{D2+A2:6} A4/.25 G4/.25 A4/1.75 r/.5 E4/.5 F4/.5 C#4/.5 D4/1.75 r/.5
{D1+D2:6} A3/.25 G3/.25 A3/1.75 r/.5 G3/.25 F3/.25 E3/.25 D3/.25 C#3/.75 D3/1.75 r/.5
{D2+A2+D3:2} D4/.25 F4/.25 A4/.25 D5/.25 F5/.25 A5/.25 D6/.75 r/.25
{C#2+G2+A#2:2} C#5/.25 E5/.25 G5/.25 A#5/.25 C#6/.75 A#5/.25 G5/.25 E5/.25
{D2+A2+F3:2} D5/.5 A4/.5 F4/.5 D4/.5
{A1+A2|C#3+E3+G3:1} E4/.25 G4/.25 A#4/.25 C#5/.25 E5/.5 G5/.5 F5/.25 E5/.25 D5/.25 C#5/.25 D5/1
{D2+A2+D3+F3:4} A5/.25 G5/.25 F5/.25 E5/.25 D5/.25 C#5/.25 D5/.25 E5/.25 F5/.5 E5/.5 D5/2 {}` },
  mountain: { title: 'In the Hall of the Mountain King', composer: 'E. Grieg', bpm: 104, tonic: 'B', acc: [.82, 1.55], src: `
{B1|F#2:1} B3/.5 C#4/.5 D4/.5 E4/.5 F#4/.5 D4/.5 F#4/1 F4/.5 C#4/.5 F4/1 E4/.5 C4/.5 E4/1
B3/.5 C#4/.5 D4/.5 E4/.5 F#4/.5 D4/.5 F#4/.5 B4/.5 A4/.5 F#4/.5 D4/.5 F#4/.5 A4/2
{F#1|C#2:1} F#4/.5 G#4/.5 A#4/.5 B4/.5 C#5/.5 A#4/.5 C#5/1 D5/.5 A#4/.5 D5/1 C#5/.5 A#4/.5 C#5/1
F#4/.5 G#4/.5 A#4/.5 B4/.5 C#5/.5 A#4/.5 C#5/.5 F#5/.5 E5/.5 C#5/.5 A#4/.5 C#5/.5 E5/2
{B1+B2|F#2+D3:.5} B4/.5 C#5/.5 D5/.5 E5/.5 F#5/.5 D5/.5 F#5/1 F5/.5 C#5/.5 F5/1 E5/.5 C5/.5 E5/1
B4/.5 C#5/.5 D5/.5 E5/.5 F#5/.5 D5/.5 F#5/.5 B5/.5 A5/.5 F#5/.5 D5/.5 F#5/.5 A5/1 {B1+F#2+B2:3} B5/1 r/1 B4/1 {}` },
  funeral: { title: 'Funeral March', composer: 'F. Chopin', bpm: 56, tonic: 'Bb', acc: [1, 1], src: `
{A#1+F2|F#1+C#2:1} A#3/1 A#3/.75 A#3/.25 A#3/2 C#4/.75 C4/.25 C4/.75 A#3/.25 A#3/.75 A3/.25 A#3/2
A#3/1 A#3/.75 A#3/.25 A#3/2 C#4/.75 C4/.25 C4/.75 A#3/.25 A#3/.75 A3/.25 A#3/2
{C#2+C#3|G#1+G#2:1} F4/1 F4/.75 D#4/.25 C#4/1 C4/.75 C#4/.25 D#4/1 C#4/.75 C4/.25 A#3/2
{A#1+F2|F#1+C#2:1} A#4/1 A#4/.75 A#4/.25 A#4/2 C#5/.75 C5/.25 C5/.75 A#4/.25 A#4/.75 A4/.25 A#4/2 {A#1+F2+A#2+C#3:4} A#3/4 {}` },
  dies: { title: 'Dies Irae', composer: 'Gregorian chant', bpm: 76, tonic: 'D', acc: [1, 1], src: `
{D2+A2:4} F4/1 E4/1 F4/1 D4/1 {C2+G2:2} E4/1 C4/1 {D2+A2:2} D4/2
{D2+A2:4} F4/1 F4/1 G4/1 F4/1 {A#1+F2:2} E4/1 D4/1 {C2+G2:2} C4/1 E4/1 {D2+A2:2} F4/1 E4/1 D4/2
{F2+C3:4} A4/1 C5/1 A4/1 G4/1 {D2+A2:4} A4/1 F4/1 G4/2
{D2+A2+D3:4} D5/1 C5/1 A4/1 F4/1 {C2+G2+C3:2} G4/1 E4/1 {D2+A2+D3+F3:4} D4/4 {}` }
};
export const SONG_ORDER = ['toccata', 'mountain', 'funeral', 'dies'];
export function parseSong(key) {
  const sg = SONGS[key]; const mel = [], acc = []; let b = 0, pat = null, patStart = 0;
  const flushPat = upto => { if (!pat) return; for (let x = patStart, i = 0; x < upto - 1e-6; x += pat.step, i++) acc.push({ b: x, ms: pat.ch[i % pat.ch.length], dur: Math.min(pat.step, upto - x) }); };
  for (const tok of sg.src.trim().split(/\s+/)) {
    if (tok.startsWith('{')) { flushPat(b); const body = tok.slice(1, -1); if (!body) { pat = null; continue; } const [chs, st] = body.split(':'); pat = { ch: chs.split('|').map(c => c.split('+').map(NOTE)), step: +(st || 4) }; patStart = b; continue; }
    const [n, d] = tok.split('/'); const dur = +d; if (n !== 'r') mel.push({ b, dur, m: NOTE(n) }); b += dur;
  }
  flushPat(b);
  const total = b; const a0 = sg.acc[0], a1 = sg.acc[1];
  const tAt = beat => { let t = 0; const N = 200; const h = beat / N; for (let i = 0; i < N; i++) { const bb = (i + .5) * h; t += 60 / (sg.bpm * (a0 + (a1 - a0) * bb / total)) * h; } return t; };
  for (const e of mel) { e.t = tAt(e.b); e.d = tAt(e.b + e.dur) - e.t; }
  for (const e of acc) { e.t = tAt(e.b); e.d = tAt(e.b + e.dur) - e.t; }
  return { key, ...sg, mel, acc, beats: total, len: tAt(total), tAt };
}
