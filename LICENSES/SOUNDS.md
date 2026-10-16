# Sounds – sources & licenses (Haunted Piano)

All sounds are recorded samples released under **CC0 1.0** (https://creativecommons.org/publicdomain/zero/1.0/). No synth beeps, no oscillators. `tools/build.mjs` embeds them as base64 into `js/sounds-src.js` so the game also works via `file://`. Credit is not required for CC0 and is given voluntarily.

## Piano
`p_A1.mp3` … `p_C7.mp3` (22 notes, every minor third from A1 to C7; the game re-pitches the nearest sample by at most ±1.5 semitones): **FreePats "Upright Piano KW"** (a recorded Kawai upright), loud velocity layer, released as CC0 – https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html (archive `UprightPianoKW-SFZ+FLAC-20220221.7z`). Trimmed with a natural fade, loudness-matched. The concert-hall room is a generated convolution reverb.

## Choir, room and effects (new for this game)
| File | Used for | Source | License |
|---|---|---|---|
| choir_ah.mp3 | ghost choir "aah" (re-pitched into chords) | [Freesound #764330](https://freesound.org/s/764330/) (ShangusBurger) | CC0 1.0 |
| choir_swell.mp3 | choir swell at the finale | [Freesound #458146](https://freesound.org/s/458146/) (DiArchangeli) | CC0 1.0 |
| eerie.mp3 | eerie room tone | [Freesound #437475](https://freesound.org/s/437475/) (ThomEvans) | CC0 1.0 |
| whisper.mp3 | ghost whisper | [Freesound #175944](https://freesound.org/s/175944/) (Litruv) | CC0 1.0 |
| thunder.mp3 | storm at 50 / 100 combo | [Freesound #194364](https://freesound.org/s/194364/) | CC0 1.0 |
| tinkle.mp3 | chandelier crystals | [Freesound #84526](https://freesound.org/s/84526/) (crystal lamp) | CC0 1.0 |

## Reused from earlier games in this series
wind, owl, fwoosh, stinger, harp, sparkle, magic, success, howl, laugh_kids, soft, swish_a, swish_b, sub, epic, chime_c (Pumpkin Carver, see its SOUNDS.md) and boo, impact (Spider Drop). All CC0 1.0 from Freesound and Kenney Impact Sounds.

Code: three.js (MIT, see three.js-MIT.txt). Font: Fredoka (SIL Open Font License 1.1).
