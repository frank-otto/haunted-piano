// Gothic music room at midnight: stone walls with pointed arches, three stained-glass windows with soft moonlight
// shafts, heavy velvet curtains, dark plank floor with a patterned rug, two tall candelabras, a swinging crystal
// chandelier, portraits whose eyes follow you, floating sheet music, drifting dust. No glare: emissive parts are
// kept below the bloom threshold except tiny flame cores.
import * as THREE from 'three';

export const QUALITY = {
  low: { dpr: 1, shadows: false, bloom: .8, parts: .45 },
  mid: { dpr: 1.25, shadows: false, bloom: 1, parts: .7 },
  high: { dpr: 1.6, shadows: true, shadowSize: 1024, bloom: 1, parts: 1 },
  ultra: { dpr: 2, shadows: true, shadowSize: 2048, bloom: 1, parts: 1.3 }
};
export function rnd(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const cv = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
const tex = (c, srgb = true, rep) => { const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); } t.anisotropy = 4; return t; };
export function softTexture() { const [c, g] = cv(128, 128); const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.3, 'rgba(255,255,255,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(c); }
function smokeTexture() { const [c, g] = cv(256, 256); const r = rnd(5); for (let i = 0; i < 26; i++) { const x = 128 + (r() - .5) * 110, y = 128 + (r() - .5) * 110, s = 30 + r() * 60; const gr = g.createRadialGradient(x, y, 0, x, y, s); gr.addColorStop(0, 'rgba(255,255,255,.22)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 256, 256); } return new THREE.CanvasTexture(c); }
export function flameTexture() {
  const [c, g] = cv(64, 128); const gr = g.createRadialGradient(32, 84, 2, 32, 72, 50); gr.addColorStop(0, 'rgba(255,236,190,1)'); gr.addColorStop(.25, 'rgba(255,185,80,.95)'); gr.addColorStop(.6, 'rgba(255,110,20,.45)'); gr.addColorStop(1, 'rgba(255,60,0,0)');
  g.fillStyle = gr; g.beginPath(); g.moveTo(32, 4); g.quadraticCurveTo(62, 70, 32, 124); g.quadraticCurveTo(2, 70, 32, 4); g.fill(); return new THREE.CanvasTexture(c);
}
function stoneTexture(seed) {
  const [c, g] = cv(1024, 1024); const r = rnd(seed); g.fillStyle = '#2b2733'; g.fillRect(0, 0, 1024, 1024);
  const rowH = 64; for (let y = 0, row = 0; y < 1024; y += rowH, row++) { let x = row % 2 ? -60 : 0; while (x < 1024) { const w = 90 + r() * 80; const l = 30 + r() * 22; g.fillStyle = `hsl(${255 + r() * 20},${8 + r() * 8}%,${l * .55}%)`; g.fillRect(x + 3, y + 3, w - 6, rowH - 6);
    for (let k = 0; k < 40; k++) { g.fillStyle = `rgba(${r() < .5 ? '0,0,0' : '255,255,255'},${r() * .06})`; g.fillRect(x + r() * w, y + r() * rowH, 2 + r() * 10, 1 + r() * 4); } x += w; } }
  for (let i = 0; i < 60; i++) { g.strokeStyle = `rgba(0,0,0,${.1 + r() * .15})`; g.lineWidth = 1; g.beginPath(); let x = r() * 1024, y = r() * 1024; g.moveTo(x, y); for (let k = 0; k < 5; k++) { x += (r() - .5) * 40; y += r() * 30; g.lineTo(x, y); } g.stroke(); }
  return tex(c, true, [3, 1.6]);
}
function plankTexture(seed) {
  const [c, g] = cv(1024, 1024); const r = rnd(seed); g.fillStyle = '#2a1a12'; g.fillRect(0, 0, 1024, 1024);
  for (let x = 0; x < 1024; x += 64) { let y = -r() * 300; while (y < 1024) { const L = 200 + r() * 300; const l = 14 + r() * 8; g.fillStyle = `hsl(${20 + r() * 8},${35 + r() * 10}%,${l}%)`; g.fillRect(x + 1, y + 1, 62, L - 2);
    for (let k = 0; k < 14; k++) { g.strokeStyle = `rgba(0,0,0,${.08 + r() * .12})`; g.beginPath(); const xx = x + 4 + r() * 56; g.moveTo(xx, y); g.bezierCurveTo(xx + (r() - .5) * 10, y + L * .3, xx + (r() - .5) * 10, y + L * .6, xx, y + L); g.stroke(); } y += L; } }
  return tex(c, true, [6, 6]);
}
function rugTexture() {
  const [c, g] = cv(1024, 1024); g.fillStyle = '#3a0d14'; g.fillRect(0, 0, 1024, 1024);
  g.translate(512, 512); for (let ring = 0; ring < 6; ring++) { const R = 500 - ring * 70; g.strokeStyle = ring % 2 ? 'rgba(200,150,70,.55)' : 'rgba(30,10,40,.8)'; g.lineWidth = ring % 2 ? 10 : 26; g.beginPath(); g.arc(0, 0, R, 0, 7); g.stroke(); }
  for (let k = 0; k < 16; k++) { g.save(); g.rotate(k * Math.PI / 8); g.fillStyle = 'rgba(190,140,60,.5)'; g.beginPath(); g.moveTo(0, -140); g.quadraticCurveTo(40, -230, 0, -330); g.quadraticCurveTo(-40, -230, 0, -140); g.fill(); g.fillStyle = 'rgba(20,40,60,.6)'; g.beginPath(); g.arc(0, -400, 16, 0, 7); g.fill(); g.restore(); }
  g.fillStyle = 'rgba(200,150,70,.6)'; g.beginPath(); g.arc(0, 0, 60, 0, 7); g.fill(); return tex(c);
}
function glassTexture(seed) {
  // pointed-arch stained glass: deep blues, violets, crimson, amber, lead lines; a rose motif on top
  const [c, g] = cv(256, 640); const r = rnd(seed); const cols = ['#2a3a8a', '#4a2a8a', '#6a1a3a', '#1a5a6a', '#8a5a1a', '#3a1a6a', '#20306a', '#5a1a5a'];
  g.fillStyle = '#101020'; g.fillRect(0, 0, 256, 640);
  for (let y = 120; y < 640; y += 40) for (let x = 0; x < 256; x += 32) { g.fillStyle = cols[Math.floor(r() * cols.length)]; g.beginPath(); g.moveTo(x + r() * 6, y + r() * 6); g.lineTo(x + 32 - r() * 6, y + r() * 6); g.lineTo(x + 32 - r() * 6, y + 40 - r() * 6); g.lineTo(x + r() * 6, y + 40 - r() * 6); g.fill(); }
  g.save(); g.translate(128, 110); for (let k = 0; k < 8; k++) { g.rotate(Math.PI / 4); g.fillStyle = k % 2 ? '#8a2a4a' : '#3a4aa0'; g.beginPath(); g.ellipse(0, -45, 18, 42, 0, 0, 7); g.fill(); } g.fillStyle = '#c08a2a'; g.beginPath(); g.arc(0, 0, 22, 0, 7); g.fill(); g.restore();
  g.strokeStyle = '#0a0a10'; g.lineWidth = 5; for (let y = 160; y < 640; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(256, y); g.stroke(); } for (let x = 32; x < 256; x += 32) { g.beginPath(); g.moveTo(x, 150); g.lineTo(x, 640); g.stroke(); }
  g.beginPath(); g.arc(128, 110, 96, 0, 7); g.stroke(); g.lineWidth = 10; g.strokeRect(0, 0, 256, 640);
  const gr = g.createLinearGradient(0, 0, 0, 640); gr.addColorStop(0, 'rgba(255,255,255,.08)'); gr.addColorStop(1, 'rgba(0,0,0,.25)'); g.fillStyle = gr; g.fillRect(0, 0, 256, 640);
  return tex(c);
}
function portraitTexture(seed, kind) {
  // dark oil-painting style portrait; the eyes are separate 3D spheres placed on top
  const [c, g] = cv(256, 320); const r = rnd(seed);
  const bg = g.createRadialGradient(128, 120, 10, 128, 160, 220); bg.addColorStop(0, ['#3a3020', '#20302a', '#302030'][kind]); bg.addColorStop(1, '#0c0a08'); g.fillStyle = bg; g.fillRect(0, 0, 256, 320);
  g.fillStyle = ['#1a1418', '#141a20', '#20141a'][kind]; g.beginPath(); g.moveTo(30, 320); g.quadraticCurveTo(50, 200, 128, 190); g.quadraticCurveTo(206, 200, 226, 320); g.fill(); // shoulders / coat
  g.fillStyle = '#d8d0c0'; g.beginPath(); g.moveTo(108, 200); g.lineTo(128, 240); g.lineTo(148, 200); g.fill(); // collar
  g.fillStyle = ['#c8b090', '#b8b0a0', '#c0a8a0'][kind]; g.beginPath(); g.ellipse(128, 130, 44, 58, 0, 0, 7); g.fill(); // face
  g.fillStyle = 'rgba(80,50,40,.35)'; g.beginPath(); g.ellipse(128, 160, 30, 22, 0, 0, Math.PI); g.fill();
  g.fillStyle = ['#2a1a10', '#d0d0d0', '#3a2018'][kind]; g.beginPath(); if (kind === 1) { g.ellipse(128, 86, 58, 30, 0, Math.PI, 0); g.ellipse(80, 120, 16, 40, 0, 0, 7); g.ellipse(176, 120, 16, 40, 0, 0, 7); } else { g.ellipse(128, 84, 50, 28, 0, Math.PI, 0); } g.fill(); // hair / wig
  g.fillStyle = '#1a0e0a'; g.beginPath(); g.ellipse(110, 124, 11, 7, 0, 0, 7); g.ellipse(146, 124, 11, 7, 0, 0, 7); g.fill(); // eye sockets (3D eyes go here)
  g.strokeStyle = 'rgba(60,20,20,.7)'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(114, 166); g.quadraticCurveTo(128, 162 + (kind === 2 ? 6 : -2), 142, 166); g.stroke();
  for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(${r() < .5 ? '0,0,0' : '255,230,200'},${r() * .05})`; g.fillRect(r() * 256, r() * 320, 2, 2); } // craquelure
  return tex(c);
}
function sheetTexture(seed) {
  const [c, g] = cv(128, 160); const r = rnd(seed); g.fillStyle = '#e6dcc4'; g.fillRect(0, 0, 128, 160); g.fillStyle = 'rgba(120,90,50,.25)'; g.fillRect(0, 0, 128, 160);
  g.strokeStyle = '#3a2a1a'; g.lineWidth = 1; for (let s = 0; s < 6; s++) { const y0 = 18 + s * 23; for (let l = 0; l < 5; l++) { g.beginPath(); g.moveTo(8, y0 + l * 3); g.lineTo(120, y0 + l * 3); g.stroke(); }
    g.fillStyle = '#2a1a10'; for (let n = 0; n < 7; n++) { const x = 18 + n * 14 + r() * 4, y = y0 + Math.floor(r() * 9) * 1.5; g.beginPath(); g.ellipse(x, y, 2.6, 2, -.4, 0, 7); g.fill(); g.fillRect(x + 2, y - 10, 1, 10); } }
  return tex(c);
}

export function createWorld(renderer, q, seed = 8) {
  const W = { scene: new THREE.Scene(), soft: softTexture(), smokeTex: smokeTexture(), flameTex: flameTexture(), flames: [], eyes: [], sheets: [], dust: null, t: 0 };
  const S = W.scene; S.background = new THREE.Color('#07060d'); S.fog = new THREE.FogExp2('#0c0a16', .045);
  const r = rnd(seed);
  // floor + rug
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshStandardMaterial({ map: plankTexture(seed), roughness: .55, metalness: 0 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; S.add(floor);
  const rug = new THREE.Mesh(new THREE.CircleGeometry(2.6, 64), new THREE.MeshStandardMaterial({ map: rugTexture(), roughness: .95 })); rug.rotation.x = -Math.PI / 2; rug.position.set(0, .005, -.2); rug.receiveShadow = true; S.add(rug);
  // walls (pointed arch niches carved by geometry: flat walls + pilasters + arches)
  const stone = stoneTexture(seed + 1); const wallM = new THREE.MeshStandardMaterial({ map: stone, roughness: .92, color: '#9a94a8' });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(14, 7.5), wallM); back.position.set(0, 3.75, -6); back.receiveShadow = true; S.add(back);
  for (const sx of [-1, 1]) { const side = new THREE.Mesh(new THREE.PlaneGeometry(12, 7.5), wallM); side.position.set(sx * 6.5, 3.75, -.5); side.rotation.y = -sx * Math.PI / 2; side.receiveShadow = true; S.add(side); }
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(14, 12), new THREE.MeshStandardMaterial({ color: '#141018', roughness: 1 })); ceil.rotation.x = Math.PI / 2; ceil.position.set(0, 7.2, -.5); S.add(ceil);
  const beamM = new THREE.MeshStandardMaterial({ color: '#1e140e', roughness: .8 }); for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(13, .3, .35), beamM); b.position.set(0, 7, -5 + i * 2.4); S.add(b); }
  // windows: pointed arch shape, stained glass + stone frame + moonlight shaft
  W.glassMats = [];
  const arch = (w, h) => { const s = new THREE.Shape(); s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(w / 2, h - w * .62); s.quadraticCurveTo(w / 2, h - w * .1, 0, h); s.quadraticCurveTo(-w / 2, h - w * .1, -w / 2, h - w * .62); s.closePath(); return s; };
  const frameM = new THREE.MeshStandardMaterial({ color: '#4a4452', roughness: .85 });
  W.shafts = [];
  [-3.2, 0, 3.2].forEach((x, i) => {
    const big = i === 1; const w = big ? 1.7 : 1.3, h = big ? 4.2 : 3.4, y0 = big ? 1.9 : 2.3;
    const gm = new THREE.MeshStandardMaterial({ map: glassTexture(seed + 10 + i), emissive: '#ffffff', emissiveMap: null, emissiveIntensity: 0, roughness: .4 });
    gm.emissiveMap = gm.map; gm.emissiveIntensity = .55; W.glassMats.push(gm);
    const gGeo = new THREE.ShapeGeometry(arch(w, h), 24); { const p = gGeo.attributes.position, uv = gGeo.attributes.uv; for (let k = 0; k < p.count; k++) uv.setXY(k, p.getX(k) / w + .5, p.getY(k) / h); }
    const glass = new THREE.Mesh(gGeo, gm); glass.position.set(x, y0, -5.97); S.add(glass);
    const fr = new THREE.Mesh(new THREE.ExtrudeGeometry((() => { const o = arch(w + .36, h + .3); o.holes.push(arch(w, h)); return o; })(), { depth: .25, bevelEnabled: true, bevelSize: .04, bevelThickness: .04, bevelSegments: 2, curveSegments: 24 }), frameM);
    fr.position.set(x, y0 - .15, -6.02); fr.castShadow = false; S.add(fr);
    for (let m = 1; m < 3; m++) { const mu = new THREE.Mesh(new THREE.BoxGeometry(.05, h * .78, .06), frameM); mu.position.set(x - w / 2 + m * w / 3, y0 + h * .39, -5.94); S.add(mu); }
    // soft moonlight shaft (very low opacity, no glare)
    const shaftG = new THREE.CylinderGeometry(w * .45, w * .9, 7, 24, 1, true); shaftG.translate(0, -3.5, 0);
    const shaftM = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { uA: { value: .05 }, uT: { value: 0 } },
      vertexShader: 'varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'uniform float uA; uniform float uT; varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 1.6); float fade = smoothstep(0., .25, vUv.y) * smoothstep(1., .55, vUv.y); float n = .75 + .25 * sin(vUv.x * 40. + uT * .5); gl_FragColor = vec4(vec3(.55,.62,1.) * uA * edge * fade * n, 1.); }' });
    const shaft = new THREE.Mesh(shaftG, shaftM); shaft.position.set(x, y0 + h * .55, -5.8); shaft.rotation.x = -.62; S.add(shaft); W.shafts.push(shaft);
    // velvet curtains at the big window sides
    if (big) for (const sx of [-1, 1]) { const cg = new THREE.PlaneGeometry(1.1, 6.2, 24, 1); const p = cg.attributes.position; for (let k = 0; k < p.count; k++) p.setZ(k, Math.sin(p.getX(k) * 18) * .07); cg.computeVertexNormals();
      const cm = new THREE.Mesh(cg, new THREE.MeshStandardMaterial({ color: '#4a0a18', roughness: .75, side: THREE.DoubleSide })); cm.position.set(x + sx * (w / 2 + .55), 3.4, -5.75); S.add(cm); }
  });
  // pilasters
  for (const x of [-4.8, -1.6, 1.6, 4.8]) { const pl = new THREE.Mesh(new THREE.BoxGeometry(.5, 7.2, .4), frameM); pl.position.set(x, 3.6, -5.85); pl.receiveShadow = true; S.add(pl); }
  // portraits with following eyes (side walls)
  const goldM = new THREE.MeshStandardMaterial({ color: '#8a6a2a', roughness: .38, metalness: .85 });
  const eyeWhite = new THREE.MeshStandardMaterial({ color: '#d8d2c0', roughness: .35, emissive: '#302a20', emissiveIntensity: .4 });
  const pupilM = new THREE.MeshStandardMaterial({ color: '#0a0604', roughness: .3 });
  [[-6.45, 2.9, -2.6, 1], [-6.45, 2.9, 1.0, 0], [6.45, 2.9, -2.6, 2], [6.45, 2.9, 1.0, 1]].forEach(([x, y, z, k], i) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2; S.add(g);
    const pw = 1.2, ph = 1.5; const pic = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), new THREE.MeshStandardMaterial({ map: portraitTexture(seed + 30 + i, k), roughness: .7 })); pic.position.z = .04; g.add(pic);
    const fr = new THREE.Mesh(new THREE.ExtrudeGeometry((() => { const o = new THREE.Shape(); o.moveTo(-pw / 2 - .14, -ph / 2 - .14); o.lineTo(pw / 2 + .14, -ph / 2 - .14); o.lineTo(pw / 2 + .14, ph / 2 + .14); o.lineTo(-pw / 2 - .14, ph / 2 + .14); const hl = new THREE.Path(); hl.moveTo(-pw / 2, -ph / 2); hl.lineTo(-pw / 2, ph / 2); hl.lineTo(pw / 2, ph / 2); hl.lineTo(pw / 2, -ph / 2); o.holes.push(hl); return o; })(), { depth: .06, bevelEnabled: true, bevelSize: .04, bevelThickness: .04, bevelSegments: 3 }), goldM);
    g.add(fr);
    for (const ex of [-1, 1]) { const eg = new THREE.Group(); eg.position.set(ex * 18 / 256 * pw, (ph / 2) - (124 / 320) * ph, .045); const w = new THREE.Mesh(new THREE.SphereGeometry(.034, 16, 12), eyeWhite); w.scale.z = .6; eg.add(w); const pu = new THREE.Mesh(new THREE.SphereGeometry(.017, 12, 8), pupilM); pu.position.z = .021; eg.add(pu); g.add(eg); W.eyes.push(eg); }
  });
  // candelabras (floor standing) with flames + warm lights
  const brass = new THREE.MeshStandardMaterial({ color: '#6a5020', roughness: .4, metalness: .8 });
  const waxM = new THREE.MeshStandardMaterial({ color: '#e8dcc0', roughness: .7, emissive: '#5a3a10', emissiveIntensity: .25 });
  const flameMat = () => new THREE.SpriteMaterial({ map: W.flameTex, color: '#ffd9a0', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .85 });
  const addCandle = (parent, x, y, z, s = 1) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(.022 * s, .024 * s, .2 * s, 10), waxM); c.position.set(x, y + .1 * s, z); parent.add(c); const f = new THREE.Sprite(flameMat()); f.scale.set(.05 * s, .11 * s, 1); f.position.set(x, y + .25 * s, z); parent.add(f); W.flames.push({ s: f, b: .05 * s, h: .11 * s, ph: r() * 10 }); return f; };
  W.cLights = [];
  for (const sx of [-1, 1]) {
    const g = new THREE.Group(); g.position.set(sx * 2.4, 0, -.9); S.add(g);
    const pts = [[.0, 0], [.22, .02], [.12, .08], [.05, .2], [.04, 1.2], [.08, 1.25], [.03, 1.32], [.03, 1.5], [.06, 1.55], [0, 1.58]].map(([a, b]) => new THREE.Vector2(a, b));
    const stem = new THREE.Mesh(new THREE.LatheGeometry(pts, 20), brass); stem.castShadow = true; g.add(stem);
    for (let k = -2; k <= 2; k++) { const ax = k * .14; const arm = new THREE.Mesh(new THREE.TorusGeometry(Math.abs(ax) / 2 || .01, .012, 6, 16, Math.PI), brass); if (k) { arm.position.set(ax / 2, 1.48, 0); arm.rotation.z = Math.PI; g.add(arm); }
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(.04, .02, .04, 12), brass); cup.position.set(ax, k ? 1.48 : 1.58, 0); g.add(cup); addCandle(g, ax, k ? 1.5 : 1.6, 0, 1.2); }
    const L = new THREE.PointLight('#ffae5a', 3.2, 7, 1.7); L.position.set(sx * 2.4, 1.95, -.9); S.add(L); W.cLights.push(L);
  }
  // chandelier (pivot at the ceiling, swings on combos)
  W.chand = new THREE.Group(); W.chand.position.set(0, 7.0, -1.0); S.add(W.chand); W.chandSwing = { a: 0, v: 0, b: 0, bv: 0 };
  const chain = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, 2.2, 6), brass); chain.position.y = -1.1; W.chand.add(chain);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(.75, .03, 8, 48), brass); ring.rotation.x = Math.PI / 2; ring.position.y = -2.4; W.chand.add(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(.4, .025, 8, 36), brass); ring2.rotation.x = Math.PI / 2; ring2.position.y = -2.15; W.chand.add(ring2);
  for (let k = 0; k < 4; k++) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(.008, .008, .82, 5), brass); sp.position.set(Math.cos(k * Math.PI / 2) * .37, -2.0, Math.sin(k * Math.PI / 2) * .37); sp.rotation.set(Math.sin(k * Math.PI / 2) * .5, 0, -Math.cos(k * Math.PI / 2) * .5); W.chand.add(sp); }
  const crystal = new THREE.MeshPhysicalMaterial({ color: '#cfd8ff', roughness: .1, metalness: 0, transmission: 0, transparent: true, opacity: .55, emissive: '#4a4a70', emissiveIntensity: .3 });
  W.crystals = [];
  for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; addCandle(W.chand, Math.cos(a) * .75, -2.38, Math.sin(a) * .75, 1);
    const cr = new THREE.Mesh(new THREE.OctahedronGeometry(.04), crystal); cr.scale.y = 1.8; cr.position.set(Math.cos(a + .3) * .7, -2.55, Math.sin(a + .3) * .7); W.chand.add(cr); W.crystals.push(cr); }
  const drop = new THREE.Mesh(new THREE.OctahedronGeometry(.08), crystal); drop.scale.y = 2; drop.position.y = -2.75; W.chand.add(drop);
  W.chandLight = new THREE.PointLight('#ffb870', 4, 9, 1.6); W.chandLight.position.y = -2.3; W.chand.add(W.chandLight);
  // floating sheet music
  const sheetMs = [0, 1, 2].map(i => new THREE.MeshStandardMaterial({ map: sheetTexture(seed + 50 + i), side: THREE.DoubleSide, roughness: .9, emissive: '#2a2010', emissiveIntensity: .25 }));
  for (let i = 0; i < Math.round(9 * (q.parts || 1)) + 3; i++) { const sg = new THREE.PlaneGeometry(.21, .28, 4, 1); const m = new THREE.Mesh(sg, sheetMs[i % 3]);
    const o = { m, base: new THREE.Vector3((r() - .5) * 7, 2.3 + r() * 2.2, -4.6 + r() * 3.4), ph: r() * 10, sp: .3 + r() * .4, lift: 0 }; m.position.copy(o.base); m.castShadow = false; S.add(m); W.sheets.push(o); }
  // dust motes in the moonlight
  const n = Math.round(380 * (q.parts || 1)); const dp = new Float32Array(n * 3); for (let i = 0; i < n; i++) { dp[i * 3] = (r() - .5) * 10; dp[i * 3 + 1] = r() * 6; dp[i * 3 + 2] = -5.5 + r() * 7; }
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  W.dust = new THREE.Points(dg, new THREE.PointsMaterial({ map: W.soft, color: '#b8b8ff', size: .04, transparent: true, opacity: .45, depthWrite: false, blending: THREE.AdditiveBlending })); S.add(W.dust);
  // lights
  W.hemi = new THREE.HemisphereLight('#5a5a9a', '#1a1010', .55); S.add(W.hemi);
  W.moon = new THREE.DirectionalLight('#8f9cff', 1.5); W.moon.position.set(-1.5, 6, -8); W.moon.target.position.set(0, 0, 0); S.add(W.moon, W.moon.target);
  W.moon.shadow.camera.left = -4; W.moon.shadow.camera.right = 4; W.moon.shadow.camera.top = 4; W.moon.shadow.camera.bottom = -4; W.moon.shadow.camera.far = 20; W.moon.shadow.bias = -.0006; W.moon.shadow.normalBias = .02;
  W.key = new THREE.SpotLight('#ffd6a8', 13, 7.5, .55, .7, 1.6); W.key.position.set(.3, 3.4, 2.6); W.key.target.position.set(0, .8, .4); S.add(W.key, W.key.target);
  const rim = new THREE.SpotLight('#9ab0ff', 7, 8, .6, .8, 1.4); rim.position.set(-2.2, 3.2, -2.4); rim.target.position.set(0, .9, .2); S.add(rim, rim.target);
  W.flash = 0; W.react = 0;
  return W;
}
const _v = new THREE.Vector3();
export function updateWorld(W, t, dt, lookAt) {
  W.t = t;
  for (const f of W.flames) { const k = 1 + Math.sin(t * 9 + f.ph) * .07 + Math.sin(t * 23 + f.ph * 2) * .05 + W.react * .35; f.s.scale.set(f.b * (1 + W.react * .15), f.h * k, 1); }
  const cl = 1 + Math.sin(t * 7.3) * .06 + Math.sin(t * 17.1) * .04; for (const L of W.cLights) L.intensity = 3.2 * cl * (1 + W.react * .5);
  // chandelier pendulum (two axes)
  const c = W.chandSwing; c.v += (-c.a * 1.9 - c.v * .25) * dt; c.a += c.v * dt; c.bv += (-c.b * 1.9 - c.bv * .25) * dt; c.b += c.bv * dt;
  W.chand.rotation.z = c.a; W.chand.rotation.x = c.b; W.chandLight.intensity = 4 * cl * (1 + W.react * .4);
  for (const [i, cr] of W.crystals.entries()) cr.rotation.y = t * .6 + i;
  // stained glass breathes with the music, lightning flashes softly
  W.flash = Math.max(0, W.flash - dt * 2.2); const fl = W.flash > 0 ? W.flash * (.6 + .4 * Math.sin(t * 60)) : 0;
  for (const gm of W.glassMats) gm.emissiveIntensity = .5 + W.react * .25 + fl * .9;
  W.moon.intensity = 1.5 + fl * 2.2; W.hemi.intensity = .55 + fl * .5;
  for (const s of W.shafts) s.material.uniforms.uA.value = .05 + W.react * .02 + fl * .05, s.material.uniforms.uT.value = t;
  W.react = Math.max(0, W.react - dt * 1.5);
  for (const o of W.sheets) { o.lift = Math.max(0, o.lift - dt * .25); const y = o.base.y + Math.sin(t * o.sp + o.ph) * .15 + o.lift * 1.2; o.m.position.set(o.base.x + Math.sin(t * o.sp * .7 + o.ph) * .3, y, o.base.z + Math.cos(t * o.sp * .5 + o.ph) * .2); o.m.rotation.set(Math.sin(t * .4 + o.ph) * .4, t * o.sp * .3 + o.ph + o.lift * 6, Math.sin(t * .3 + o.ph) * .3);
    const p = o.m.geometry.attributes.position; for (let k = 0; k < p.count; k++) p.setZ(k, Math.sin(p.getX(k) * 18 + t * 3 + o.ph) * .012); p.needsUpdate = true; }
  const dp = W.dust.geometry.attributes.position; for (let i = 0; i < dp.count; i++) { let y = dp.getY(i) + dt * (.03 + (i % 7) * .006) * (1 + W.react * 3); if (y > 6) y = 0; dp.setY(i, y); dp.setX(i, dp.getX(i) + Math.sin(t * .3 + i) * dt * .02); } dp.needsUpdate = true;
  // portrait eyes follow the target
  if (lookAt) for (const e of W.eyes) { e.parent.updateMatrixWorld(); e.getWorldPosition(_v); const d = lookAt.clone().sub(_v); const inv = e.parent.getWorldQuaternion(new THREE.Quaternion()).invert(); d.applyQuaternion(inv).normalize(); e.rotation.set(-Math.asin(THREE.MathUtils.clamp(d.y, -.6, .6)) * .9, Math.atan2(d.x, d.z) * .9, 0); }
}
export function swingChandelier(W, k) { W.chandSwing.v += (Math.random() < .5 ? -1 : 1) * .06 * k; W.chandSwing.bv += (Math.random() - .5) * .05 * k; }
export function liftSheets(W, k) { for (const o of W.sheets) if (Math.random() < .5) o.lift = Math.min(1.5, o.lift + k); }
