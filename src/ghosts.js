// Ghost choir: five translucent singers that rise behind the piano on combos. Fresnel-glow robes that ripple at the
// hem, dark eyes, mouths that open with the choir. Kept dim (no glare) and soft-edged.
import * as THREE from 'three';
const vs = `uniform float uT; uniform float uPh; varying vec3 vN; varying vec3 vV; varying float vY;
void main(){ vec3 p = position; float hem = smoothstep(.4, -.05, p.y); float an = atan(p.z, p.x); p.y += sin(an * 7. + uT * 3. + uPh) * .045 * hem; p.xz *= 1. + sin(an * 5. - uT * 2. + uPh) * .06 * hem;
  vY = position.y; vec4 mv = modelViewMatrix * vec4(p, 1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`;
const fs = `uniform float uA; varying vec3 vN; varying vec3 vV; varying float vY;
void main(){ float f = 1. - abs(dot(vN, vV)); float rim = pow(f, 1.8); float fade = smoothstep(-.05, .45, vY);
  vec3 c = mix(vec3(.55,.62,.85), vec3(.8,.9,1.), rim); gl_FragColor = vec4(c * (.35 + rim * .5), (.14 + rim * .55) * uA * fade); }`;
export function createChoir(scene, n = 5) {
  const C = { list: [], a: 0, want: 0, sing: 0 };
  const robe = new THREE.LatheGeometry([[0, -.02], [.36, -.06], [.3, .18], [.24, .48], [.205, .78], [.2, .98], [.205, 1.1], [.18, 1.24], [.11, 1.33], [0, 1.36]].map(([x, y]) => new THREE.Vector2(x, y)), 28);
  const head = new THREE.SphereGeometry(.15, 24, 18);
  const dark = new THREE.MeshBasicMaterial({ color: '#05040a', transparent: true, opacity: 0 });
  for (let i = 0; i < n; i++) {
    const u = { uT: { value: 0 }, uA: { value: 0 }, uPh: { value: i * 1.7 } };
    const m = new THREE.ShaderMaterial({ uniforms: u, vertexShader: vs, fragmentShader: fs, transparent: true, depthWrite: false });
    const g = new THREE.Group(); const b = new THREE.Mesh(robe, m); g.add(b);
    const eyes = []; for (const ex of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(.034, 12, 10), dark); e.position.set(ex * .068, 1.17, .19); e.scale.set(.85, 1.35, .35); g.add(e); eyes.push(e); }
    const mouth = new THREE.Mesh(new THREE.SphereGeometry(.03, 12, 8), dark); mouth.position.set(0, 1.04, .198); mouth.scale.set(1, .5, .4); g.add(mouth);
    const x = (i - (n - 1) / 2) * .95, z = -2.3 - Math.abs(i - (n - 1) / 2) * .25 * -1 - .3; g.position.set(x, 0, z); g.rotation.y = -x * .12; g.visible = false; scene.add(g);
    C.list.push({ g, u, mouth, base: new THREE.Vector3(x, .5, z), ph: i * 1.3 });
  }
  C.dark = dark; return C;
}
export function updateChoir(C, dt, t) {
  C.a += (C.want - C.a) * Math.min(1, dt * (C.want > C.a ? 1.2 : 2.5)); C.sing = Math.max(0, C.sing - dt * .6);
  C.dark.opacity = C.a * .85;
  for (const s of C.list) { s.u.uT.value = t; s.u.uA.value = C.a; s.g.visible = C.a > .01;
    s.g.position.set(s.base.x + Math.sin(t * .5 + s.ph) * .06, s.base.y - (1 - C.a) * .9 + Math.sin(t * 1.1 + s.ph) * .07, s.base.z);
    const o = .45 + C.sing * (.7 + .3 * Math.sin(t * 5 + s.ph)); s.mouth.scale.set(.9, o, .4); }
}
