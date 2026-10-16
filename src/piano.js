// Concert grand piano in 3D: lacquered body (bentside outline), open lid on its prop stick, gold iron plate with
// strings, 88 keys that really go down, hammers that fly up to the strings, dampers, pedals, legs with casters.
// Plus translucent ghost hands that play keys by themselves.
import * as THREE from 'three';

export const KY = .74, KZF = 1.0, KL = .15;          // key top height, keyboard front z, white key length
export const WW = .0235;                             // white key pitch
const isBlack = m => [1, 3, 6, 8, 10].includes(m % 12);
export function keyX(m) { // x centre of key with midi m (A0 = 21 ... C8 = 108); middle C (60) near x = 0
  let wi = 0; for (let k = 21; k < m; k++) if (!isBlack(k)) wi++;
  const x0 = (wi - 25.5) * WW;
  if (!isBlack(m)) return x0; return x0 - WW / 2;
}
export const NOTE = n => { const m = /^([A-G])(#|b)?(-?\d)$/.exec(n); const b = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0); return 12 * (+m[3] + 1) + b; };

function outline() {
  const s = new THREE.Shape(); s.moveTo(-.78, .86); s.lineTo(.78, .86); s.lineTo(.78, .25);
  s.bezierCurveTo(.78, -.15, .25, -.25, .1, -.75); s.bezierCurveTo(-.02, -1.15, -.25, -1.32, -.5, -1.32); s.bezierCurveTo(-.7, -1.32, -.78, -1.2, -.78, -1.0); s.closePath(); return s;
}
export function createPiano(scene, q) {
  const P = { group: new THREE.Group(), keys: {}, hammers: {}, press: {}, ghost: [] }; scene.add(P.group);
  const lac = new THREE.MeshPhysicalMaterial({ color: '#08080b', roughness: .32, metalness: .1, clearcoat: .55, clearcoatRoughness: .35 });
  const gold = new THREE.MeshStandardMaterial({ color: '#9a7a34', roughness: .42, metalness: .85 });
  const wood = new THREE.MeshStandardMaterial({ color: '#7a5030', roughness: .6 });
  const felt = new THREE.MeshStandardMaterial({ color: '#7a1a1a', roughness: .95 });
  // rim: extruded outline (hollow), height .3
  const rimShape = outline(); const inner = new THREE.Path(rimShape.getPoints(64).map(p => new THREE.Vector2(p.x * .965, p.y * .975 - .012)).reverse()); rimShape.holes.push(inner);
  const rim = new THREE.Mesh(new THREE.ExtrudeGeometry(rimShape, { depth: .3, bevelEnabled: true, bevelSize: .008, bevelThickness: .008, bevelSegments: 2, curveSegments: 48 }), lac);
  rim.rotation.x = Math.PI / 2; rim.position.y = .88; rim.castShadow = true; rim.receiveShadow = true; P.group.add(rim);
  const bottom = new THREE.Mesh(new THREE.ShapeGeometry(outline(), 48), lac); bottom.rotation.x = Math.PI / 2; bottom.position.y = .58; P.group.add(bottom);
  // soundboard (warm spruce) + gold plate with round holes + strings
  const sbM = new THREE.MeshStandardMaterial({ color: '#b08048', roughness: .65, side: THREE.DoubleSide }); const sb = new THREE.Mesh(new THREE.ShapeGeometry(outline(), 48), sbM); sb.rotation.x = Math.PI / 2; sb.scale.set(.95, .97, 1); sb.position.y = .66; sb.receiveShadow = true; P.group.add(sb);
  const plateS = outline(); for (const [x, z, rr] of [[.35, .05, .11], [.05, -.4, .09], [-.3, -.8, .1], [-.5, .1, .12], [.45, .5, .08]]) { const h = new THREE.Path(); h.absarc(x, -z, rr, 0, Math.PI * 2, true); plateS.holes.push(h); }
  const plate = new THREE.Mesh(new THREE.ExtrudeGeometry(plateS, { depth: .015, bevelEnabled: false, curveSegments: 40 }), gold); plate.rotation.x = Math.PI / 2; plate.scale.set(.9, .93, 1); plate.position.set(0, .715, 0); plate.receiveShadow = true; P.group.add(plate);
  // flip outline: shape y was used as -z by rotation; fix plate/soundboard orientation consistently
  const strPos = []; for (let i = 0; i < 88; i++) { const x = -.7 + i / 87 * 1.42; const len = .45 + (1 - i / 87) * 1.55; const zEnd = Math.max(-1.25, .62 - len); const xe = x + (1 - i / 87) * .12; strPos.push(x, .73, .62, xe, .73, zEnd < -.75 + x * .9 && x > .1 ? -.75 + x * .9 : zEnd); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(strPos, 3));
  P.strings = new THREE.LineSegments(sg, new THREE.LineBasicMaterial({ color: '#c8b080', transparent: true, opacity: .75 })); P.group.add(P.strings);
  // tuning pin block + pins
  const pinB = new THREE.Mesh(new THREE.BoxGeometry(1.5, .03, .14), wood); pinB.position.set(0, .72, .7); P.group.add(pinB);
  // keybed, key slip, cheeks, fallboard
  const bed = new THREE.Mesh(new THREE.BoxGeometry(1.62, .06, .32), lac); bed.position.set(0, KY - .045, KZF - .13); bed.castShadow = true; P.group.add(bed);
  const slip = new THREE.Mesh(new THREE.BoxGeometry(1.62, .05, .02), lac); slip.position.set(0, KY - .03, KZF + .01); P.group.add(slip);
  for (const sx of [-1, 1]) { const ch = new THREE.Mesh(new THREE.BoxGeometry(.06, .11, .36), lac); ch.position.set(sx * .78, KY + .0, KZF - .16); ch.castShadow = true; P.group.add(ch); }
  const fall = new THREE.Mesh(new THREE.BoxGeometry(1.5, .07, .05), lac); fall.position.set(0, KY + .035, KZF - KL - .03); P.group.add(fall);
  const nameplate = new THREE.Mesh(new THREE.BoxGeometry(.16, .012, .002), gold); nameplate.position.set(0, KY + .045, KZF - KL - .004); P.group.add(nameplate);
  // keys
  const whiteM = new THREE.MeshStandardMaterial({ color: '#ece6d8', roughness: .35 });
  const blackM = new THREE.MeshStandardMaterial({ color: '#111114', roughness: .3 });
  const wg = new THREE.BoxGeometry(WW * .94, .022, KL); wg.translate(0, -.011, KL / 2);   // pivot at the back
  const bg = new THREE.BoxGeometry(WW * .55, .02, KL * .62); bg.translate(0, .01, KL * .31);
  P.keyMats = {};
  for (let m = 21; m <= 108; m++) {
    const b = isBlack(m); const mat = (b ? blackM : whiteM).clone(); P.keyMats[m] = mat;
    const k = new THREE.Mesh(b ? bg : wg, mat); k.position.set(keyX(m), KY + (b ? .0 : 0), KZF - KL); k.castShadow = false; k.receiveShadow = true; P.group.add(k); P.keys[m] = k; P.press[m] = 0;
    if (m >= 33 && m <= 96) { // hammers for the playable range (visible through the open top)
      const hm = new THREE.Group(); const shank = new THREE.Mesh(new THREE.BoxGeometry(.004, .004, .1), wood); shank.position.z = .05; hm.add(shank);
      const head = new THREE.Mesh(new THREE.BoxGeometry(WW * .6, .025, .022), felt); head.position.z = .1; hm.add(head);
      hm.position.set(keyX(m), .69, .48); hm.rotation.x = .25; P.group.add(hm); P.hammers[m] = hm;
    }
  }
  // lid on its prop (hinged along the straight left side)
  P.lidPivot = new THREE.Group(); P.lidPivot.position.set(-.79, .885, 0); P.group.add(P.lidPivot);
  const lid = new THREE.Mesh(new THREE.ExtrudeGeometry(outline(), { depth: .02, bevelEnabled: true, bevelSize: .006, bevelThickness: .006, bevelSegments: 2, curveSegments: 48 }), lac);
  lid.rotation.x = Math.PI / 2; lid.position.set(.79, .02, 0); P.lidPivot.add(lid); lid.castShadow = true;
  P.lidPivot.rotation.z = .78;
  const prop = new THREE.Mesh(new THREE.CylinderGeometry(.01, .01, .95, 8), lac); prop.position.set(.62, 1.2, -.2); prop.rotation.z = -.42; P.group.add(prop); P.prop = prop; P.lidA = .78; P.lidWant = .78;
  // legs + casters + lyre/pedals
  const legG = new THREE.CylinderGeometry(.05, .035, .58, 12); legG.translate(0, -.29, 0);
  for (const [x, z] of [[-.68, .7], [.68, .7], [-.45, -1.05]]) { const l = new THREE.Mesh(legG, lac); l.position.set(x, .58, z); l.castShadow = true; P.group.add(l); const c = new THREE.Mesh(new THREE.SphereGeometry(.03, 10, 8), gold); c.position.set(x, .03, z); P.group.add(c); }
  const lyre = new THREE.Mesh(new THREE.BoxGeometry(.24, .45, .03), lac); lyre.position.set(0, .34, .55); P.group.add(lyre);
  P.pedals = []; for (let i = -1; i <= 1; i++) { const pd = new THREE.Mesh(new THREE.BoxGeometry(.035, .012, .1), gold); pd.position.set(i * .06, .1, .62); P.group.add(pd); P.pedals.push(pd); }
  const bench = new THREE.Mesh(new THREE.BoxGeometry(.8, .06, .36), new THREE.MeshStandardMaterial({ color: '#2a0a10', roughness: .8 })); bench.position.set(0, .5, 1.55); bench.castShadow = true; P.group.add(bench);
  for (const [x, z] of [[-.35, 1.4], [.35, 1.4], [-.35, 1.7], [.35, 1.7]]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(.02, .016, .47, 8), lac); l.position.set(x, .235, z); P.group.add(l); }
  // candles on the piano rim (left back) – small, warm
  return P;
}
export function pressKey(P, m, vel = 1) { if (!P.keys[m]) return; P.press[m] = Math.max(P.press[m], vel); P.hold = P.hold || {}; P.hold[m] = .12; }
export function updatePiano(P, dt, glow) {
  for (const m in P.keys) {
    const k = P.keys[m]; let h = P.hold && P.hold[m] > 0; if (h) P.hold[m] -= dt;
    P.press[m] = h ? Math.min(1, P.press[m] + dt * 30) : Math.max(0, P.press[m] - dt * 9);
    k.rotation.x = P.press[m] * .07;
    const gl = glow && glow[m] || 0; const mat = P.keyMats[m];
    if (gl > .001) { mat.emissive.setRGB(gl * .55, gl * .5, gl * .95); glow[m] = Math.max(0, gl - dt * 2.5); } else mat.emissive.setRGB(0, 0, 0);
    const hm = P.hammers[m]; if (hm) hm.rotation.x = .25 - P.press[m] * .55;
  }
}
// ghost hand: palm + 5 fingers (capsules), pale translucent glow
export function createGhostHand(scene, left) {
  const m = new THREE.MeshStandardMaterial({ color: '#b8c8ff', emissive: '#6a7ad0', emissiveIntensity: .6, transparent: true, opacity: 0, roughness: .4, depthWrite: false });
  const g = new THREE.Group(); const palm = new THREE.Mesh(new THREE.CapsuleGeometry(.035, .05, 4, 10), m); palm.rotation.z = Math.PI / 2; palm.scale.set(1, 1.15, .5); palm.position.set(0, .03, -.03); g.add(palm);
  const fingers = []; for (let i = 0; i < 5; i++) { const thumb = left ? i === 4 : i === 0; const f = new THREE.Group(); const fx = (i - 2) * .021; f.position.set(fx, .03, .0); const seg = new THREE.Mesh(new THREE.CapsuleGeometry(.0085, thumb ? .035 : .05, 3, 8), m); seg.rotation.x = Math.PI / 2 - .25; seg.position.z = .035; f.add(seg); if (thumb) f.rotation.y = left ? -.6 : .6; g.add(f); fingers.push(f); }
  const wrist = new THREE.Mesh(new THREE.CapsuleGeometry(.026, .09, 4, 10), m); wrist.rotation.x = Math.PI / 2; wrist.position.set(0, .04, -.11); g.add(wrist);
  const H = { g, m, fingers, target: new THREE.Vector3(), a: 0, wantA: 0, press: [0, 0, 0, 0, 0] }; g.visible = false; scene.add(g); return H;
}
export function ghostPlay(H, m, vel = 1) { H.target.set(keyX(m), KY + .045, KZF - .05); const fi = Math.min(4, Math.max(0, Math.round(((keyX(m) - H.g.position.x) / .021) + 2))); H.press[fi] = 1; H.wantA = 1; H.idle = 0; }
export function updateGhostHand(H, dt, t) {
  H.idle = (H.idle || 0) + dt; if (H.idle > 1.6) H.wantA = 0;
  H.a += (H.wantA - H.a) * Math.min(1, dt * 4); H.m.opacity = H.a * .55; H.g.visible = H.a > .01;
  H.g.position.lerp(H.target, Math.min(1, dt * 10)); H.g.position.y += Math.sin(t * 2.3) * .002;
  H.fingers.forEach((f, i) => { H.press[i] = Math.max(0, H.press[i] - dt * 5); f.rotation.x = H.press[i] * .45 + Math.sin(t * 3 + i) * .04; });
}

// lower/raise the lid; the prop stick follows so it always meets the lid's underside
export function setLid(P, a) {
  P.lidA = a; P.lidPivot.rotation.z = a;
  const bx = .426, by = .766, ang = a - .343, tx = -.79 + 1.77 * Math.cos(ang), ty = .885 + 1.77 * Math.sin(ang);
  const dx = tx - bx, dy = ty - by, L = Math.hypot(dx, dy);
  P.prop.position.set((bx + tx) / 2, (by + ty) / 2, -.2); P.prop.rotation.z = -Math.atan2(dx, dy); P.prop.scale.y = L / .95;
}
