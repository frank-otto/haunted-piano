(()=>{var xd=0,gh=1,vd=2;var fs=1,yd=2,or=3,ki=0,on=1,jt=2,Rn=0,lr=1,Gn=2,_h=3,xh=4,Md=5;var ps=100,Sd=101,bd=102,Ed=103,Td=104,wd=200,Ad=201,Cd=202,Rd=203,vh=204,yh=205,Pd=206,Id=207,Ld=208,Dd=209,Nd=210,Ud=211,Fd=212,Od=213,Bd=214,bo=0,Eo=1,To=2,Ws=3,wo=4,Ao=5,Co=6,Ro=7,Mh=0,zd=1,kd=2,Vn=0,ma=1,ga=2,_a=3,ms=4,xa=5,va=6,ya=7;var Sh=300,Hi=301,gs=302,cl=303,hl=304,Ma=306,Xs=1e3,ei=1001,Po=1002,Xt=1003,Hd=1004;var Sa=1005;var Yt=1006,ul=1007;var Gi=1008;var cn=1009,bh=1010,Eh=1011,cr=1012,dl=1013,Wn=1014,Xn=1015,Zt=1016,fl=1017,pl=1018,hr=1020,Th=35902,wh=35899,Ah=1021,Ch=1022,Pn=1023,ii=1026,Vi=1027,Rh=1028,ml=1029,Wi=1030,gl=1031;var _l=1033,ba=33776,Ea=33777,Ta=33778,wa=33779,xl=35840,vl=35841,yl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,Tl=37488,wl=37489,Aa=37490,Al=37491,Cl=37808,Rl=37809,Pl=37810,Il=37811,Ll=37812,Dl=37813,Nl=37814,Ul=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,kl=37820,Hl=37821,Gl=36492,Vl=36494,Wl=36495,Xl=36283,ql=36284,Ca=36285,Yl=36286;var Hr=2300,Io=2301,Mo=2302,th=2303,nh=2400,ih=2401,sh=2402;var Gd=3200;var Zl=0,Vd=1,xi="",Vt="srgb",Gr="srgb-linear",Vr="linear",ct="srgb";var So=7680;var Wd=519,Xd=512,qd=513,Yd=514,Kl=515,Zd=516,Kd=517,Jl=518,Jd=519,Ph=35044;var Ih="300 es",kn=2e3,qs=2001;function Ip(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $d(){let i=Wr("canvas");return i.style.display="block",i}var Nu={},Ys=null;function Xr(...i){let e="THREE."+i.shift();Ys?Ys("log",e,...i):console.log(e,...i)}function Qd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Qd(i);let e="THREE."+i.shift();if(Ys)Ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Qd(i);let e="THREE."+i.shift();if(Ys)Ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ns(...i){let e=i.join(" ");e in Nu||(Nu[e]=!0,ze(...i))}function jd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ef={[bo]:Eo,[To]:Co,[wo]:Ro,[Ws]:Ao,[Eo]:bo,[Co]:To,[Ro]:wo,[Ao]:Ws},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=1234567,Or=Math.PI/180,is=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Lh(i,e){return(i%e+e)%e}function Dp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Np(i,e,t){return i!==e?(t-i)/(e-i):0}function Br(i,e,t){return(1-t)*i+t*e}function Up(i,e,t,n){return Br(i,e,1-Math.exp(-t*n))}function Fp(i,e=1){return e-Math.abs(Lh(i,e*2)-e)}function Op(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kp(i,e){return i+Math.random()*(e-i)}function Hp(i){return i*(.5-Math.random())}function Gp(i){i!==void 0&&(Uu=i);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vp(i){return i*Or}function Wp(i){return i*is}function Xp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ra={DEG2RAD:Or,RAD2DEG:is,generateUUID:ni,clamp:tt,euclideanModulo:Lh,mapLinear:Dp,inverseLerp:Np,lerp:Br,damp:Up,pingpong:Fp,smoothstep:Op,smootherstep:Bp,randInt:zp,randFloat:kp,randFloatSpread:Hp,seededRandom:Gp,degToRad:Vp,radToDeg:Wp,isPowerOfTwo:Xp,ceilPowerOfTwo:qp,floorPowerOfTwo:Yp,setQuaternionFromProperEuler:Zp,normalize:pt,denormalize:zn},Bh=class Bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bh.prototype.isVector2=!0;var ie=Bh,An=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*y;m<0&&(u=-u,d=-d,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+y*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;var P=zh,Rc=new P,Fu=new An,kh=class kh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],w=s[4],v=s[7],E=s[2],b=s[5],I=s[8];return r[0]=a*y+o*M+l*E,r[3]=a*m+o*w+l*b,r[6]=a*p+o*v+l*I,r[1]=c*y+h*M+f*E,r[4]=c*m+h*w+f*b,r[7]=c*p+h*v+f*I,r[2]=u*y+d*M+g*E,r[5]=u*m+d*w+g*b,r[8]=u*p+d*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pc.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pc.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kh.prototype.isMatrix3=!0;var Ze=kh,Pc=new Ze,Ou=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kp(){let i={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gr]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}var it=Kp();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ws,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Wr("canvas")),ws.width=e.width,ws.height=e.height;let s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jp=0,Zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ic(s[a].image)):r.push(Ic(s[a]))}else r=Ic(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var $p=0,Lc=new P,rn=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=Yt,a=Gi,o=Pn,l=cn,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ni(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Sh;rn.DEFAULT_ANISOTROPY=1;var Hh=class Hh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(d+1)/2,E=(p+1)/2,b=(h+u)/4,I=(f+y)/4,x=(g+m)/4;return w>v&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=I/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=I/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hh.prototype.isVector4=!0;var Tt=Hh,Do=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qr=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ll=class ll{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,y,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ll().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,y=c*f;t[0]=u+y*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,y=c*f;t[0]=u-y*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-y*f}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,jp)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),wi.crossVectors(n,pn),wi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),wi.crossVectors(n,pn)),wi.normalize(),qa.crossVectors(pn,wi),s[0]=wi.x,s[4]=qa.x,s[8]=pn.x,s[1]=wi.y,s[5]=qa.y,s[9]=pn.y,s[2]=wi.z,s[6]=qa.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],w=n[7],v=n[11],E=n[15],b=s[0],I=s[4],x=s[8],T=s[12],C=s[1],N=s[5],k=s[9],G=s[13],U=s[2],F=s[6],L=s[10],B=s[14],Y=s[3],V=s[7],J=s[11],$=s[15];return r[0]=a*b+o*C+l*U+c*Y,r[4]=a*I+o*N+l*F+c*V,r[8]=a*x+o*k+l*L+c*J,r[12]=a*T+o*G+l*B+c*$,r[1]=h*b+f*C+u*U+d*Y,r[5]=h*I+f*N+u*F+d*V,r[9]=h*x+f*k+u*L+d*J,r[13]=h*T+f*G+u*B+d*$,r[2]=g*b+y*C+m*U+p*Y,r[6]=g*I+y*N+m*F+p*V,r[10]=g*x+y*k+m*L+p*J,r[14]=g*T+y*G+m*B+p*$,r[3]=M*b+w*C+v*U+E*Y,r[7]=M*I+w*N+v*F+E*V,r[11]=M*x+w*k+v*L+E*J,r[15]=M*T+w*G+v*B+E*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*d-c*u,w=o*d-c*f,v=o*u-l*f,E=a*d-c*h,b=a*u-l*h,I=a*f-o*h;return t*(y*M-m*w+p*v)-n*(g*M-m*E+p*b)+s*(g*w-y*E+p*I)-r*(g*v-y*b+m*I)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*o-n*a,w=t*l-s*a,v=t*c-r*a,E=n*l-s*o,b=n*c-r*o,I=s*c-r*l,x=h*y-f*g,T=h*m-u*g,C=h*p-d*g,N=f*m-u*y,k=f*p-d*y,G=u*p-d*m,U=M*G-w*k+v*N+E*C-b*T+I*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/U;return e[0]=(o*G-l*k+c*N)*F,e[1]=(s*k-n*G-r*N)*F,e[2]=(y*I-m*b+p*E)*F,e[3]=(u*b-f*I-d*E)*F,e[4]=(l*C-a*G-c*T)*F,e[5]=(t*G-s*C+r*T)*F,e[6]=(m*v-g*I-p*w)*F,e[7]=(h*I-u*v+d*w)*F,e[8]=(a*k-o*C+c*x)*F,e[9]=(n*C-t*k-r*x)*F,e[10]=(g*b-y*v+p*M)*F,e[11]=(f*v-h*b-d*M)*F,e[12]=(o*T-a*N-l*x)*F,e[13]=(t*N-n*T+s*x)*F,e[14]=(y*w-g*E-m*M)*F,e[15]=(h*E-f*w+u*M)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,y=a*h,m=a*f,p=o*f,M=l*c,w=l*h,v=l*f,E=n.x,b=n.y,I=n.z;return s[0]=(1-(y+p))*E,s[1]=(d+v)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+w)*I,s[9]=(m-M)*I,s[10]=(1-(u+y))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,h=1/o,f=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===kn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===qs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===kn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===qs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ll.prototype.isMatrix4=!0;var xt=ll,As=new P,Un=new xt,Qp=new P(0,0,0),jp=new P(1,1,1),wi=new P,qa=new P,pn=new P,zu=new xt,ku=new An,_i=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},em=0,Hu=new P,Cs=new An,hi=new xt,Ya=new P,Cr=new P,tm=new P,nm=new An,Gu=new P(1,0,0),Vu=new P(0,1,0),Wu=new P(0,0,1),Xu={type:"added"},im={type:"removed"},Rs={type:"childadded",child:null},Dc={type:"childremoved",child:null},It=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new _i,n=new An,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ze}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Cr,Ya,this.up):hi.lookAt(Ya,Cr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(hi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(im),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new P(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=Lh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Nc(a,r,e+1/3),this.g=Nc(a,r,e),this.b=Nc(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=tf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return it.workingToColorSpace(Qt.copy(this),e),Math.round(tt(Qt.r*255,0,255))*65536+Math.round(tt(Qt.g*255,0,255))*256+Math.round(tt(Qt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Vt){it.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Za);let n=Br(Ai.h,Za.h,t),s=Br(Ai.s,Za.s,t),r=Br(Ai.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Ne;Ne.NAMES=tf;var Yr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new P,ui=new P,Uc=new P,di=new P,Ps=new P,Is=new P,qu=new P,Fc=new P,Oc=new P,Bc=new P,zc=new Tt,kc=new Tt,Hc=new Tt,mi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ui.subVectors(n,t),Uc.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(ui),l=Fn.dot(Uc),c=ui.dot(ui),h=ui.dot(Uc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return zc.setScalar(0),kc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(zc,r.x),a.addScaledVector(kc,r.y),a.addScaledVector(Hc,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ui.subVectors(e,t),Fn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,n),Is.subVectors(r,n),Fc.subVectors(e,n);let l=Ps.dot(Fc),c=Is.dot(Fc);if(l<=0&&c<=0)return t.copy(n);Oc.subVectors(e,s);let h=Ps.dot(Oc),f=Is.dot(Oc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ps,a);Bc.subVectors(e,r);let d=Ps.dot(Bc),g=Is.dot(Bc);if(g>=0&&d<=g)return t.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Is,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return qu.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(qu,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ii=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Ja.subVectors(this.max,Rr),Ls.subVectors(e.a,Rr),Ds.subVectors(e.b,Rr),Ns.subVectors(e.c,Rr),Ci.subVectors(Ds,Ls),Ri.subVectors(Ns,Ds),Qi.subVectors(Ls,Ns);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Qi.z,Qi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Qi.z,0,-Qi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Qi.y,Qi.x,0];return!Gc(t,Ls,Ds,Ns,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,Ls,Ds,Ns,Ja))?!1:($a.crossVectors(Ci,Ri),t=[$a.x,$a.y,$a.z],Gc(t,Ls,Ds,Ns,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,Ka=new Ii,Ls=new P,Ds=new P,Ns=new P,Ci=new P,Ri=new P,Qi=new P,Rr=new P,Ja=new P,$a=new P,ji=new P;function Gc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ji.fromArray(i,r);let o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dt=new P,Qa=new ie,rm=0,Nt=class extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Kr=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},am=new Ii,Pr=new P,Vc=new P,Li=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):am.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Vc)),this.expandByPoint(Pr.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},om=0,wn=new xt,Wc=new It,Us=new P,mn=new Ii,Ir=new Ii,Gt=new P,ft=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ip(e)?Jr:Kr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(mn.min,Ir.min),mn.expandByPoint(Gt),Gt.addVectors(mn.max,Ir.max),mn.expandByPoint(Gt)):(mn.expandByPoint(Ir.min),mn.expandByPoint(Ir.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(e,c),Gt.add(Us)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;let c=new P,h=new P,f=new P,u=new ie,d=new ie,g=new ie,y=new P,m=new P;function p(x,T,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),o[x].add(y),o[T].add(y),o[C].add(y),l[x].add(m),l[T].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let C=M[x],N=C.start,k=C.count;for(let G=N,U=N+k;G<U;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let w=new P,v=new P,E=new P,b=new P;function I(x){E.fromBufferAttribute(s,x),b.copy(E);let T=o[x];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(b,T);let N=v.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,N)}for(let x=0,T=M.length;x<T;++x){let C=M[x],N=C.start,k=C.count;for(let G=N,U=N+k;G<U;G+=3)I(e.getX(G+0)),I(e.getX(G+1)),I(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Nt(u,h,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},sn=new P,$r=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Xr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xc=new P,lm=new P,cm=new Ze,Bn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xc.subVectors(n,t).cross(lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cm.getNormalMatrix(e),s=this.coplanarPoint(Xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hm=0,Hn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=lr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=yh,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Di=class extends Hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,Lr=new P,Os=new P,Bs=new P,zs=new ie,Dr=new ie,nf=new xt,ja=new P,Nr=new P,eo=new P,Yu=new ie,qc=new ie,Zu=new ie,ss=class extends It{constructor(e=new Di){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uo(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new $r(n,3,0,!1)),Fs.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;to(ja.set(-.5,-.5,0),Bs,a,Os,s,r),to(Nr.set(.5,-.5,0),Bs,a,Os,s,r),to(eo.set(.5,.5,0),Bs,a,Os,s,r),Yu.set(0,0),qc.set(1,0),Zu.set(1,1);let o=e.ray.intersectTriangle(ja,Nr,eo,!1,Lr);if(o===null&&(to(Nr.set(-.5,.5,0),Bs,a,Os,s,r),qc.set(0,1),o=e.ray.intersectTriangle(ja,eo,Nr,!1,Lr),o===null))return;let l=e.ray.origin.distanceTo(Lr);l<e.near||l>e.far||t.push({distance:l,point:Lr.clone(),uv:mi.getInterpolation(Lr,ja,Nr,eo,Yu,qc,Zu,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function to(i,e,t,n,s,r){zs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Dr.x=r*zs.x-s*zs.y,Dr.y=s*zs.x+r*zs.y):Dr.copy(zs),i.copy(e),i.x+=Dr.x,i.y+=Dr.y,i.applyMatrix4(nf)}var pi=new P,Yc=new P,no=new P,io=new P,rs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yc.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),io.copy(this.origin).sub(Yc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=io.dot(this.direction),l=-io.dot(no),c=io.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Yc).addScaledVector(no,u),d}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,v=Math.abs(l),E=Math.abs(c),b=Math.abs(h),I,x,T,C,N,k,G,U,F,L,B,Y;if(v>=E&&v>=b?(T=l,k=f,F=g,Y=p,l>=0?(I=c,x=h,C=u,N=d,G=y,U=m,L=M,B=w):(I=h,x=c,C=d,N=u,G=m,U=y,L=w,B=M)):E>=b?(T=c,k=u,F=y,Y=M,c>=0?(I=h,x=l,C=d,N=f,G=m,U=g,L=w,B=p):(I=l,x=h,C=f,N=d,G=g,U=m,L=p,B=w)):(T=h,k=d,F=m,Y=w,h>=0?(I=l,x=c,C=f,N=u,G=g,U=y,L=p,B=M):(I=c,x=l,C=u,N=f,G=y,U=g,L=M,B=p)),T===0)return null;let V=I/T,J=x/T,$=1/T,he=C-V*k,de=N-J*k,je=G-V*F,Je=U-J*F,qe=L-V*Y,K=B-J*Y,ee=qe*Je-K*je,le=he*K-de*qe,De=je*de-Je*he;if(s){if(ee<0||le<0||De<0)return null}else if((ee<0||le<0||De<0)&&(ee>0||le>0||De>0))return null;let me=ee+le+De;if(me===0)return null;let ke=$*(ee*k+le*F+De*Y);return(me>0?ke<0:ke>0)?null:this.at(ke/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ku=new xt,es=new rs,so=new Li,Ju=new P,ro=new P,ao=new P,oo=new P,Zc=new P,lo=new P,$u=new P,co=new P,ge=class extends It{constructor(e=new ft,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Zc.fromBufferAttribute(f,e),a?lo.addScaledVector(Zc,h):lo.addScaledVector(Zc.sub(t),h))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(so.containsPoint(es.origin)===!1&&(es.intersectSphere(so,Ju)===null||es.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),es.copy(e.ray).applyMatrix4(Ku),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,E=w;v<E;v+=3){let b=o.getX(v),I=o.getX(v+1),x=o.getX(v+2);s=ho(this,p,e,n,c,h,f,b,I,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let M=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);s=ho(this,a,e,n,c,h,f,M,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,E=w;v<E;v+=3){let b=v,I=v+1,x=v+2;s=ho(this,p,e,n,c,h,f,b,I,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let M=m,w=m+1,v=m+2;s=ho(this,a,e,n,c,h,f,M,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function um(i,e,t,n,s,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ki,o),l===null)return null;co.copy(o),co.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ro),i.getVertexPosition(l,ao),i.getVertexPosition(c,oo);let h=um(i,e,t,n,ro,ao,oo,$u);if(h){let f=new P;mi.getBarycoord($u,ro,ao,oo,f),s&&(h.uv=mi.getInterpolatedAttribute(s,o,l,c,f,new ie)),r&&(h.uv1=mi.getInterpolatedAttribute(r,o,l,c,f,new ie)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};mi.getNormal(ro,ao,oo,u.normal),h.face=u,h.barycoord=f}return h}var Fo=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xt,h=Xt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=new Li,dm=new ie(.5,.5),uo=new P,$s=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],w=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,p-g,E-M).normalize(),s[1].setComponents(c+a,d+h,p+g,E+M).normalize(),s[2].setComponents(c+o,d+f,p+y,E+w).normalize(),s[3].setComponents(c-o,d-f,p-y,E-w).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,E-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,E-v).normalize(),t===kn)s[5].setComponents(c+l,d+u,p+m,E+v).normalize();else if(t===qs)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);let t=dm.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qs=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oo=new P,Bo=new P,Qu=new xt,Ur=new rs,fo=new Li,Kc=new P,ju=new P,zo=class extends It{constructor(e=new ft,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Oo.fromBufferAttribute(t,s-1),Bo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oo.distanceTo(Bo);e.setAttribute("lineDistance",new Ye(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Qu.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),w=po(this,e,Ur,l,p,M,y);w&&t.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(d),p=po(this,e,Ur,l,y,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){let p=po(this,e,Ur,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=po(this,e,Ur,l,g-1,d,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function po(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Oo.fromBufferAttribute(o,s),Bo.fromBufferAttribute(o,r),t.distanceSqToSegment(Oo,Bo,Kc,ju)>n)return;Kc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kc);if(!(c<e.near||c>e.far))return{distance:c,point:ju.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ed=new P,td=new P,Qr=class extends zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ed.fromBufferAttribute(t,s),td.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ed.distanceTo(td);e.setAttribute("lineDistance",new Ye(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var js=class extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nd=new xt,rh=new rs,mo=new Li,go=new P,as=class extends It{constructor(e=new ft,t=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;nd.copy(s).invert(),rh.copy(e.ray).applyMatrix4(nd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,y=d;g<y;g++){let m=c.getX(g);go.fromBufferAttribute(f,m),id(go,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,y=d;g<y;g++)go.fromBufferAttribute(f,g),id(go,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function id(i,e,t,n,s,r,a){let o=rh.distanceSqToPoint(i);if(o<t){let l=new P;rh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var jr=class extends rn{constructor(e=[],t=Hi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gn=class extends rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends rn{constructor(e,t,n=Wn,s,r,a,o=Xt,l=Xt,c,h=ii,f=1){if(h!==ii&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ko=class extends Ni{constructor(e,t=Wn,n=Hi,s,r,a=Xt,o=Xt,l,c=ii){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ea=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wt=class i extends ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function g(y,m,p,M,w,v,E,b,I,x,T){let C=v/I,N=E/x,k=v/2,G=E/2,U=b/2,F=I+1,L=x+1,B=0,Y=0,V=new P;for(let J=0;J<L;J++){let $=J*N-G;for(let he=0;he<F;he++){let de=he*C-k;V[y]=de*M,V[m]=$*w,V[p]=U,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=b>0?1:-1,h.push(V.x,V.y,V.z),f.push(he/I),f.push(1-J/x),B+=1}}for(let J=0;J<x;J++)for(let $=0;$<I;$++){let he=u+$+F*J,de=u+$+F*(J+1),je=u+($+1)+F*(J+1),Je=u+($+1)+F*J;l.push(he,de,Je),l.push(de,je,Je),Y+=6}o.addGroup(d,Y,T),d+=Y,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},os=class i extends ft{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,g=n*2+r,y=s+1,m=new P,p=new P;for(let M=0;M<=g;M++){let w=0,v=0,E=0,b=0;if(M<=n){let T=M/n,C=T*Math.PI/2;v=-h-e*Math.cos(C),E=e*Math.sin(C),b=-e*Math.cos(C),w=T*f}else if(M<=n+r){let T=(M-n)/r;v=-h+T*t,E=e,b=0,w=f+T*u}else{let T=(M-n-r)/n,C=T*Math.PI/2;v=h+e*Math.sin(C),E=e*Math.cos(C),b=e*Math.sin(C),w=f+u+T*f}let I=Math.max(0,Math.min(1,w/d)),x=0;M===0?x=.5/s:M===g&&(x=-.5/s);for(let T=0;T<=s;T++){let C=T/s,N=C*Math.PI*2,k=Math.sin(N),G=Math.cos(N);p.x=-E*G,p.y=v,p.z=E*k,o.push(p.x,p.y,p.z),m.set(-E*G,b,E*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+x,I)}if(M>0){let T=(M-1)*y;for(let C=0;C<s;C++){let N=T+C,k=T+C+1,G=M*y+C,U=M*y+C+1;a.push(N,k,G),a.push(k,U,G)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ta=class i extends ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_n=class i extends ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,y=[],m=n/2,p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ye(f,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(d,2));function M(){let v=new P,E=new P,b=0,I=(t-e)/n;for(let x=0;x<=r;x++){let T=[],C=x/r,N=C*(t-e)+e;for(let k=0;k<=s;k++){let G=k/s,U=G*l+o,F=Math.sin(U),L=Math.cos(U);E.x=N*F,E.y=-C*n+m,E.z=N*L,f.push(E.x,E.y,E.z),v.set(F,I,L).normalize(),u.push(v.x,v.y,v.z),d.push(G,1-C),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let C=y[T][x],N=y[T+1][x],k=y[T+1][x+1],G=y[T][x+1];(e>0||T!==0)&&(h.push(C,N,G),b+=3),(t>0||T!==r-1)&&(h.push(N,k,G),b+=3)}c.addGroup(p,b,0),p+=b}function w(v){let E=g,b=new ie,I=new P,x=0,T=v===!0?e:t,C=v===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,m*C,0),u.push(0,C,0),d.push(.5,.5),g++;let N=g;for(let k=0;k<=s;k++){let U=k/s*l+o,F=Math.cos(U),L=Math.sin(U);I.x=T*L,I.y=m*C,I.z=T*F,f.push(I.x,I.y,I.z),u.push(0,C,0),b.x=F*.5+.5,b.y=L*.5*C+.5,d.push(b.x,b.y),g++}for(let k=0;k<s;k++){let G=E+k,U=N+k;v===!0?h.push(U,U+1,G):h.push(U+1,U,G),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ho=class i extends ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new P,v=new P,E=new P;for(let b=0;b<t.length;b+=3)d(t[b+0],w),d(t[b+1],v),d(t[b+2],E),l(w,v,E,M)}function l(M,w,v,E){let b=E+1,I=[];for(let x=0;x<=b;x++){I[x]=[];let T=M.clone().lerp(v,x/b),C=w.clone().lerp(v,x/b),N=b-x;for(let k=0;k<=N;k++)k===0&&x===b?I[x][k]=T:I[x][k]=T.clone().lerp(C,k/N)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){let C=Math.floor(T/2);T%2===0?(u(I[x][C+1]),u(I[x+1][C]),u(I[x][C])):(u(I[x][C+1]),u(I[x+1][C+1]),u(I[x+1][C]))}}function c(M){let w=new P;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(M),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let v=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;a.push(v,1-E)}g(),f()}function f(){for(let M=0;M<a.length;M+=6){let w=a[M+0],v=a[M+2],E=a[M+4],b=Math.max(w,v,E),I=Math.min(w,v,E);b>.9&&I<.1&&(w<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,w){let v=M*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function g(){let M=new P,w=new P,v=new P,E=new P,b=new ie,I=new ie,x=new ie;for(let T=0,C=0;T<r.length;T+=9,C+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),b.set(a[C+0],a[C+1]),I.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),E.copy(M).add(w).add(v).divideScalar(3);let N=m(E);y(b,C+0,M,N),y(I,C+2,w,N),y(x,C+4,v,N)}}function y(M,w,v,E){E<0&&M.x===1&&(a[w]=M.x-1),v.x===0&&v.z===0&&(a[w]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new xt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(tt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},er=class extends xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Go=class extends er{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var sd=new P,rd=new P,Jc=new Dh,$c=new Dh,Qc=new Dh,Vo=class extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(rd.subVectors(s[0],s[1]).add(s[0]),c=rd);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Jc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,y,m),$c.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,y,m),Qc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),$c.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Qc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Jc.calc(l),$c.calc(l),Qc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ad(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function fm(i,e){let t=1-i;return t*t*e}function pm(i,e){return 2*(1-i)*i*e}function mm(i,e){return i*i*e}function zr(i,e,t,n){return fm(i,e)+pm(i,t)+mm(i,n)}function gm(i,e){let t=1-i;return t*t*t*e}function _m(i,e){let t=1-i;return 3*t*t*i*e}function xm(i,e){return 3*(1-i)*i*i*e}function vm(i,e){return i*i*i*e}function kr(i,e,t,n,s){return gm(i,e)+_m(i,t)+xm(i,n)+vm(i,s)}var na=class extends xn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends xn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y),kr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends xn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends xn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends xn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends xn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y),zr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(ad(o,l.x,c.x,h.x,f.x),ad(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},ah=Object.freeze({__proto__:null,ArcCurve:Go,CatmullRomCurve3:Vo,CubicBezierCurve:na,CubicBezierCurve3:Wo,EllipseCurve:er,LineCurve:ia,LineCurve3:Xo,QuadraticBezierCurve:sa,QuadraticBezierCurve3:qo,SplineCurve:ra}),Yo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ah[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ah[s.type]().fromJSON(s))}return this}},ri=class extends Yo{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ia(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new sa(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new na(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ra(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new er(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class extends ri{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ri().fromJSON(s))}return this}};function ym(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Tm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return aa(r,a,t,o,l,c,0),a}function sf(i,e,t,n,s){let r;if(s===Fm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=od(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=od(a/n|0,i[a],i[a+1],r);return r&&tr(r,r.next)&&(la(r),r=r.next),r}function ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||Ct(t.prev,t,t.next)===0)){if(la(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function aa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Pm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Sm(i,n,s,r):Mm(i)){e.push(l.i,i.i,c.i),la(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=bm(ls(i),e),aa(i,e,t,n,s,r,2)):a===2&&Em(i,e,t,n,s,r):aa(ls(i),e,t,n,s,r,1);break}}}function Mm(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Fr(s,o,r,l,a,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),y=Math.max(o,l,c),m=Math.max(h,f,u),p=oh(d,g,e,t,n),M=oh(y,m,e,t,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=M;){if(w.x>=d&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Fr(o,h,l,f,c,u,w.x,w.y)&&Ct(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Fr(o,h,l,f,c,u,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Fr(o,h,l,f,c,u,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Fr(o,h,l,f,c,u,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!tr(n,s)&&af(n,t,t.next,s)&&oa(n,s)&&oa(s,n)&&(e.push(n.i,t.i,s.i),la(t),la(t.next),t=i=s),t=t.next}while(t!==i);return ls(t)}function Em(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dm(a,o)){let l=of(a,o);a=ls(a,a.next),l=ls(l,l.next),aa(a,e,t,n,s,r,0),aa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Tm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=sf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Lm(c))}s.sort(wm);for(let r=0;r<s.length;r++)t=Am(s[r],t);return t}function wm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Am(i,e){let t=Cm(i,e);if(!t)return e;let n=of(t,i);return ls(n,n.next),ls(t,t.next)}function Cm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(tr(i,t))return t;do{if(tr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&rf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);oa(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Rm(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Rm(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Pm(i,e,t,n){let s=i;do s.z===0&&(s.z=oh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Im(s)}function Im(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function oh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Fr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rf(i,e,t,n,s,r,a,o)}function Dm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Nm(i,e)&&(oa(i,e)&&oa(e,i)&&Um(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||tr(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tr(i,e){return i.x===e.x&&i.y===e.y}function af(i,e,t,n){let s=xo(Ct(i,e,t)),r=xo(Ct(i,e,n)),a=xo(Ct(t,n,i)),o=xo(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&_o(i,t,e)||r===0&&_o(i,n,e)||a===0&&_o(t,i,n)||o===0&&_o(t,e,n))}function _o(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xo(i){return i>0?1:i<0?-1:0}function Nm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&af(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oa(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Um(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function of(i,e){let t=lh(i.i,i.x,i.y),n=lh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function od(i,e,t,n){let s=lh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function la(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ch=class{static triangulate(e,t,n=2){return ym(e,t,n)}},ti=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ld(e),cd(n,e);let a=e.length;t.forEach(ld);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,cd(n,t[l]);let o=ch.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ld(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var oi=class i extends ft{constructor(e=new ai([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Om,w,v=!1,E,b,I,x;if(p){w=p.getSpacedPoints(h),v=!0,u=!1;let se=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,se),b=new P,I=new P,x=new P}u||(m=0,d=0,g=0,y=0);let T=o.extractPoints(c),C=T.shape,N=T.holes;if(!ti.isClockWise(C)){C=C.reverse();for(let se=0,ae=N.length;se<ae;se++){let oe=N[se];ti.isClockWise(oe)&&(N[se]=oe.reverse())}}function G(se){let oe=10000000000000001e-36,ce=se[0];for(let pe=1;pe<=se.length;pe++){let He=pe%se.length,Be=se[He],Xe=Be.x-ce.x,Ke=Be.y-ce.y,D=Xe*Xe+Ke*Ke,ht=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ce.x),Math.abs(ce.y)),st=oe*ht*ht;if(D<=st){se.splice(He,1),pe--;continue}ce=Be}}G(C),N.forEach(G);let U=N.length,F=C;for(let se=0;se<U;se++){let ae=N[se];C=C.concat(ae)}function L(se,ae,oe){return ae||Ve("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ae,oe)}let B=C.length;function Y(se,ae,oe){let ce,pe,He,Be=se.x-ae.x,Xe=se.y-ae.y,Ke=oe.x-se.x,D=oe.y-se.y,ht=Be*Be+Xe*Xe,st=Be*D-Xe*Ke;if(Math.abs(st)>Number.EPSILON){let A=Math.sqrt(ht),_=Math.sqrt(Ke*Ke+D*D),H=ae.x-Xe/A,q=ae.y+Be/A,Q=oe.x-D/_,ue=oe.y+Ke/_,fe=((Q-H)*D-(ue-q)*Ke)/(Be*D-Xe*Ke);ce=H+Be*fe-se.x,pe=q+Xe*fe-se.y;let j=ce*ce+pe*pe;if(j<=2)return new ie(ce,pe);He=Math.sqrt(j/2)}else{let A=!1;Be>Number.EPSILON?Ke>Number.EPSILON&&(A=!0):Be<-Number.EPSILON?Ke<-Number.EPSILON&&(A=!0):Math.sign(Xe)===Math.sign(D)&&(A=!0),A?(ce=-Xe,pe=Be,He=Math.sqrt(ht)):(ce=Be,pe=Xe,He=Math.sqrt(ht/2))}return new ie(ce/He,pe/He)}let V=[];for(let se=0,ae=F.length,oe=ae-1,ce=se+1;se<ae;se++,oe++,ce++)oe===ae&&(oe=0),ce===ae&&(ce=0),V[se]=Y(F[se],F[oe],F[ce]);let J=[],$,he=V.concat();for(let se=0,ae=U;se<ae;se++){let oe=N[se];$=[];for(let ce=0,pe=oe.length,He=pe-1,Be=ce+1;ce<pe;ce++,He++,Be++)He===pe&&(He=0),Be===pe&&(Be=0),$[ce]=Y(oe[ce],oe[He],oe[Be]);J.push($),he=he.concat($)}let de;if(m===0)de=ti.triangulateShape(F,N);else{let se=[],ae=[];for(let oe=0;oe<m;oe++){let ce=oe/m,pe=d*Math.cos(ce*Math.PI/2),He=g*Math.sin(ce*Math.PI/2)+y;for(let Be=0,Xe=F.length;Be<Xe;Be++){let Ke=L(F[Be],V[Be],He);le(Ke.x,Ke.y,-pe),ce===0&&se.push(Ke)}for(let Be=0,Xe=U;Be<Xe;Be++){let Ke=N[Be];$=J[Be];let D=[];for(let ht=0,st=Ke.length;ht<st;ht++){let A=L(Ke[ht],$[ht],He);le(A.x,A.y,-pe),ce===0&&D.push(A)}ce===0&&ae.push(D)}}de=ti.triangulateShape(se,ae)}let je=de.length,Je=g+y;for(let se=0;se<B;se++){let ae=u?L(C[se],he[se],Je):C[se];v?(I.copy(E.normals[0]).multiplyScalar(ae.x),b.copy(E.binormals[0]).multiplyScalar(ae.y),x.copy(w[0]).add(I).add(b),le(x.x,x.y,x.z)):le(ae.x,ae.y,0)}for(let se=1;se<=h;se++)for(let ae=0;ae<B;ae++){let oe=u?L(C[ae],he[ae],Je):C[ae];v?(I.copy(E.normals[se]).multiplyScalar(oe.x),b.copy(E.binormals[se]).multiplyScalar(oe.y),x.copy(w[se]).add(I).add(b),le(x.x,x.y,x.z)):le(oe.x,oe.y,f/h*se)}for(let se=m-1;se>=0;se--){let ae=se/m,oe=d*Math.cos(ae*Math.PI/2),ce=g*Math.sin(ae*Math.PI/2)+y;for(let pe=0,He=F.length;pe<He;pe++){let Be=L(F[pe],V[pe],ce);le(Be.x,Be.y,f+oe)}for(let pe=0,He=N.length;pe<He;pe++){let Be=N[pe];$=J[pe];for(let Xe=0,Ke=Be.length;Xe<Ke;Xe++){let D=L(Be[Xe],$[Xe],ce);v?le(D.x,D.y+w[h-1].y,w[h-1].x+oe):le(D.x,D.y,f+oe)}}}qe(),K();function qe(){let se=s.length/3;if(u){let ae=0,oe=B*ae;for(let ce=0;ce<je;ce++){let pe=de[ce];De(pe[2]+oe,pe[1]+oe,pe[0]+oe)}ae=h+m*2,oe=B*ae;for(let ce=0;ce<je;ce++){let pe=de[ce];De(pe[0]+oe,pe[1]+oe,pe[2]+oe)}}else{for(let ae=0;ae<je;ae++){let oe=de[ae];De(oe[2],oe[1],oe[0])}for(let ae=0;ae<je;ae++){let oe=de[ae];De(oe[0]+B*h,oe[1]+B*h,oe[2]+B*h)}}n.addGroup(se,s.length/3-se,0)}function K(){let se=s.length/3,ae=0;ee(F,ae),ae+=F.length;for(let oe=0,ce=N.length;oe<ce;oe++){let pe=N[oe];ee(pe,ae),ae+=pe.length}n.addGroup(se,s.length/3-se,1)}function ee(se,ae){let oe=se.length;for(;--oe>=0;){let ce=oe,pe=oe-1;pe<0&&(pe=se.length-1);for(let He=0,Be=h+m*2;He<Be;He++){let Xe=B*He,Ke=B*(He+1),D=ae+ce+Xe,ht=ae+pe+Xe,st=ae+pe+Ke,A=ae+ce+Ke;me(D,ht,st,A)}}}function le(se,ae,oe){l.push(se),l.push(ae),l.push(oe)}function De(se,ae,oe){ke(se),ke(ae),ke(oe);let ce=s.length/3,pe=M.generateTopUV(n,s,ce-3,ce-2,ce-1);ot(pe[0]),ot(pe[1]),ot(pe[2])}function me(se,ae,oe,ce){ke(se),ke(ae),ke(ce),ke(ae),ke(oe),ke(ce);let pe=s.length/3,He=M.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);ot(He[0]),ot(He[1]),ot(He[3]),ot(He[1]),ot(He[2]),ot(He[3])}function ke(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function ot(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ah[s.type]().fromJSON(s)),new i(n,e.options)}},Om={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-f),new ie(u,1-g),new ie(y,1-p)]:[new ie(o,1-l),new ie(h,1-f),new ie(d,1-g),new ie(m,1-p)]}};function Bm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var cs=class i extends ft{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=tt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new P,u=new ie,d=new P,g=new P,y=new P,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(g)}for(let M=0;M<=t;M++){let w=n+M*h*s,v=Math.sin(w),E=Math.cos(w);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*v,f.y=e[b].y,f.z=e[b].x*E,a.push(f.x,f.y,f.z),u.x=M/t,u.y=b/(e.length-1),o.push(u.x,u.y);let I=l[3*b+0]*v,x=l[3*b+1],T=l[3*b+0]*E;c.push(I,x,T)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){let v=w+M*e.length,E=v,b=v+e.length,I=v+e.length+1,x=v+1;r.push(E,b,x),r.push(I,x,b)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},nr=class i extends Ho{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ft=class i extends ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let w=0;w<c;w++){let v=w*f-r;g.push(v,-M,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let w=M+c*p,v=M+c*(p+1),E=M+1+c*(p+1),b=M+1+c*p;d.push(w,v,b),d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ui=class i extends ft{constructor(e=new ai([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,g=u.holes;ti.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];ti.isClockWise(M)===!0&&(g[m]=M.reverse())}let y=ti.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){let M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=y.length;m<p;m++){let M=y[m],w=M[0]+f,v=M[1]+f,E=M[2]+f;n.push(w,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function zm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Cn=class i extends ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new P,u=new P,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],w=p/n,v=a+w*o,E=e*Math.cos(v),b=Math.sqrt(e*e-E*E),I=0;p===0&&a===0?I=.5/t:p===n&&l===Math.PI&&(I=-.5/t);for(let x=0;x<=t;x++){let T=x/t,C=s+T*r;f.x=-b*Math.cos(C),f.y=E,f.z=b*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(T+I,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let w=h[p][M+1],v=h[p][M],E=h[p+1][M],b=h[p+1][M+1];(p!==0||a>0)&&d.push(w,v,b),(p!==n-1||l<Math.PI)&&d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(y,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hs=class i extends ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new P,d=new P,g=new P;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,M,v),l.push(M,w,v)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function _s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(hd(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(hd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=_s(i[t]);for(let s in n)e[s]=n[s]}return e}function hd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function km(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var vi={clone:_s,merge:en},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ir=class extends mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gt=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},us=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zo=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ks(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jo=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ih:r=e,o=2*t-n;break;case sh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ih:a=e,l=2*n-t;break;case sh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-d)*m+(1.5+d)*y+.5*g,v=d*m-d*y;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+M*a[c+E]+w*a[l+E]+v*a[f+E];return r}},$o=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Qo=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jo=class extends Fi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=d*u+g*2,M=f[p],w=f[p+1],v=e*u+g*2,E=h[v],b=h[v+1],I=Wm(n,t,M,E,s);r[g]=lf(I,y,w,b,m)}return r}};function lf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Vm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Wm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=lf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Vm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),jc(e.settings)&&(n.settings={inTangents:ks(e.settings.inTangents,Array),outTangents:ks(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case th:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;jc(this.settings)&&(ud(this.settings.inTangents,e),ud(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Lp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[u+g]||y!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,jc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ud(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Io;var Oi=class extends vn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Hr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};el.prototype.ValueTypeName="color";var tl=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};tl.prototype.ValueTypeName="number";var nl=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},ca=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends vn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Hr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};il.prototype.ValueTypeName="vector";var sl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cf=new sl,rl=class{constructor(e){this.manager=e!==void 0?e:cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ha=class extends ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},eh=new xt,dd=new P,fd=new P,sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new P,yo=new An,jn=new P,ua=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,yo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vo,yo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new P,pd=new ie,md=new ie,Wt=class extends ua{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,pd,md),t.subVectors(md,pd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hh=class extends sr{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},rr=class extends ds{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new hh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uh=class extends sr{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},ar=class extends ds{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zi=class extends ua{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dh=class extends sr{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Hs=-90,Gs=1,al=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(Hs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new Wt(Hs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new Wt(Hs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new Wt(Hs,Gs,e,t);o.layers=this.layers,this.add(o);let l=new Wt(Hs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Wt(Hs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ol=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Xm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xm(){this._document.hidden===!1&&this.reset()}var Uh="\\[\\]\\.:\\/",qm=new RegExp("["+Uh+"]","g"),Fh="[^"+Uh+"]",Ym="[^"+Uh.replace("\\.","")+"]",Zm=/((?:WC+[\/:])*)/.source.replace("WC",Fh),Km=/(WCOD+)?/.source.replace("WCOD",Ym),Jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),$m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Qm=new RegExp("^"+Zm+Km+Jm+$m+"$"),jm=["material","materials","bones","map"],fh=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qm,"")}static parseTrackName(e){let t=Qm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=fh;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hy=new Float32Array(1);var gd=new xt,pa=class{constructor(e,t,n=0,s=1/0){this.ray=new rs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(e,t=!0,n=[]){return ph(e,this,n,t),n.sort(_d),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ph(e[s],this,n,t);return n.sort(_d),n}};function _d(i,e){return i.distance-e.distance}function ph(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ph(r[a],e,t,!0)}}var Gh=class Gh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Gh.prototype.isMatrix2=!0;var mh=Gh;function Oh(i,e,t,n){let s=eg(n);switch(t){case Ah:return i*e;case Rh:return i*e/s.components*s.byteLength;case ml:return i*e/s.components*s.byteLength;case Wi:return i*e*2/s.components*s.byteLength;case gl:return i*e*2/s.components*s.byteLength;case Ch:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case _l:return i*e*4/s.components*s.byteLength;case ba:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:case Ml:return Math.max(i,16)*Math.max(e,8)/4;case xl:case yl:return Math.max(i,8)*Math.max(e,8)/2;case Sl:case bl:case Tl:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case El:case Aa:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eg(i){switch(i){case cn:case bh:return{byteLength:1,components:1};case cr:case Eh:case Zt:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Wn:case dl:case Xn:return{byteLength:4,components:1};case Th:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function If(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ng(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:ig,alphahash_pars_fragment:sg,alphamap_fragment:rg,alphamap_pars_fragment:ag,alphatest_fragment:og,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:hg,batching_pars_vertex:ug,batching_vertex:dg,begin_vertex:fg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:_g,clipping_planes_fragment:xg,clipping_planes_pars_fragment:vg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:Mg,color_fragment:Sg,color_pars_fragment:bg,color_pars_vertex:Eg,color_vertex:Tg,common:wg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Cg,displacementmap_pars_vertex:Rg,displacementmap_vertex:Pg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Lg,colorspace_fragment:Dg,colorspace_pars_fragment:Ng,envmap_fragment:Ug,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Og,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Kg,envmap_vertex:zg,fog_vertex:kg,fog_pars_vertex:Hg,fog_fragment:Gg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Yg,lights_pars_begin:Zg,lights_toon_fragment:Jg,lights_toon_pars_fragment:$g,lights_phong_fragment:Qg,lights_phong_pars_fragment:jg,lights_physical_fragment:e0,lights_physical_pars_fragment:t0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,lightprobes_pars_fragment:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:d0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:x0,morphtarget_pars_vertex:v0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:b0,normal_pars_vertex:E0,normal_vertex:T0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:P0,opaque_fragment:I0,packing:L0,premultiplied_alpha_fragment:D0,project_vertex:N0,dithering_fragment:U0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:k0,shadowmap_vertex:H0,shadowmask_pars_fragment:G0,skinbase_vertex:V0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:Z0,tonemapping_fragment:K0,tonemapping_pars_fragment:J0,transmission_fragment:$0,transmission_pars_fragment:Q0,uv_pars_fragment:j0,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:a_,cube_vert:o_,cube_frag:l_,depth_vert:c_,depth_frag:h_,distance_vert:u_,distance_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:g_,meshbasic_vert:__,meshbasic_frag:x_,meshlambert_vert:v_,meshlambert_frag:y_,meshmatcap_vert:M_,meshmatcap_frag:S_,meshnormal_vert:b_,meshnormal_frag:E_,meshphong_vert:T_,meshphong_frag:w_,meshphysical_vert:A_,meshphysical_frag:C_,meshtoon_vert:R_,meshtoon_frag:P_,points_vert:I_,points_frag:L_,shadow_vert:D_,shadow_frag:N_,sprite_vert:U_,sprite_frag:F_},Se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ci={basic:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:en([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:en([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:en([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:en([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:en([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:en([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:en([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:en([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:en([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:en([Se.common,Se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:en([Se.lights,Se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ci.physical={uniforms:en([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var $l={r:0,b:0,g:0},O_=new xt,Lf=new Ze;Lf.set(-1,0,0,0,1,0,0,0,1);function B_(i,e,t,n,s,r){let a=new Ne(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let v=M.backgroundBlurriness>0;w=e.get(w,v)}return w}function g(M){let w=!1,v=d(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===Ma)?(c===void 0&&(c=new ge(new wt(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:_s(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lf),c.material.toneMapped=it.getTransfer(v.colorSpace)!==ct,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ge(new Ft(2,2),new mt({name:"BackgroundMaterial",uniforms:_s(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB($l,Nh(i)),t.buffers.color.setClear($l.r,$l.g,$l.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function z_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,k,G,U,F){let L=!1,B=f(N,U,G,k);r!==B&&(r=B,c(r.object)),L=d(N,U,G,F),L&&g(N,U,G,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,v(N,k,G,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,k,G,U){let F=U.wireframe===!0,L=n[k.id];L===void 0&&(L={},n[k.id]=L);let B=N.isInstancedMesh===!0?N.id:0,Y=L[B];Y===void 0&&(Y={},L[B]=Y);let V=Y[G.id];V===void 0&&(V={},Y[G.id]=V);let J=V[F];return J===void 0&&(J=u(l()),V[F]=J),J}function u(N){let k=[],G=[],U=[];for(let F=0;F<t;F++)k[F]=0,G[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:U,object:N,attributes:{},index:null}}function d(N,k,G,U){let F=r.attributes,L=k.attributes,B=0,Y=G.getAttributes();for(let V in Y)if(Y[V].location>=0){let $=F[V],he=L[V];if(he===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),$===void 0||$.attribute!==he||he&&$.data!==he.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(N,k,G,U){let F={},L=k.attributes,B=0,Y=G.getAttributes();for(let V in Y)if(Y[V].location>=0){let $=L[V];$===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let he={};he.attribute=$,$&&$.data&&(he.data=$.data),F[V]=he,B++}r.attributes=F,r.attributesNum=B,r.index=U}function y(){let N=r.newAttributes;for(let k=0,G=N.length;k<G;k++)N[k]=0}function m(N){p(N,0)}function p(N,k){let G=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;G[N]=1,U[N]===0&&(i.enableVertexAttribArray(N),U[N]=1),F[N]!==k&&(i.vertexAttribDivisor(N,k),F[N]=k)}function M(){let N=r.newAttributes,k=r.enabledAttributes;for(let G=0,U=k.length;G<U;G++)k[G]!==N[G]&&(i.disableVertexAttribArray(G),k[G]=0)}function w(N,k,G,U,F,L,B){B===!0?i.vertexAttribIPointer(N,k,G,F,L):i.vertexAttribPointer(N,k,G,U,F,L)}function v(N,k,G,U){y();let F=U.attributes,L=G.getAttributes(),B=k.defaultAttributeValues;for(let Y in L){let V=L[Y];if(V.location>=0){let J=F[Y];if(J===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let $=J.normalized,he=J.itemSize,de=e.get(J);if(de===void 0)continue;let je=de.buffer,Je=de.type,qe=de.bytesPerElement,K=Je===i.INT||Je===i.UNSIGNED_INT||J.gpuType===dl;if(J.isInterleavedBufferAttribute){let ee=J.data,le=ee.stride,De=J.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<V.locationSize;me++)p(V.location+me,ee.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<V.locationSize;me++)m(V.location+me);i.bindBuffer(i.ARRAY_BUFFER,je);for(let me=0;me<V.locationSize;me++)w(V.location+me,he/V.locationSize,Je,$,le*qe,(De+he/V.locationSize*me)*qe,K)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<V.locationSize;ee++)p(V.location+ee,J.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<V.locationSize;ee++)m(V.location+ee);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ee=0;ee<V.locationSize;ee++)w(V.location+ee,he/V.locationSize,Je,$,he*qe,he/V.locationSize*ee*qe,K)}}else if(B!==void 0){let $=B[Y];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(V.location,$);break;case 3:i.vertexAttrib3fv(V.location,$);break;case 4:i.vertexAttrib4fv(V.location,$);break;default:i.vertexAttrib1fv(V.location,$)}}}}M()}function E(){T();for(let N in n){let k=n[N];for(let G in k){let U=k[G];for(let F in U){let L=U[F];for(let B in L)h(L[B].object),delete L[B];delete U[F]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let k=n[N.id];for(let G in k){let U=k[G];for(let F in U){let L=U[F];for(let B in L)h(L[B].object),delete L[B];delete U[F]}}delete n[N.id]}function I(N){for(let k in n){let G=n[k];for(let U in G){let F=G[U];if(F[N.id]===void 0)continue;let L=F[N.id];for(let B in L)h(L[B].object),delete L[B];delete F[N.id]}}}function x(N){for(let k in n){let G=n[k],U=N.isInstancedMesh===!0?N.id:0,F=G[U];if(F!==void 0){for(let L in F){let B=F[L];for(let Y in B)h(B[Y].object),delete B[Y];delete F[L]}delete G[U],Object.keys(G).length===0&&delete n[k]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function k_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function H_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let x=I===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==cn&&I!==Xn&&!x&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:b}}function G_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Bn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,v=p.clippingState||null;l.value=v,v=h(g,u,w,d);for(let E=0;E!==w;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=d+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=d;w!==y;++w,v+=4)a.copy(f[w]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var dr=4,V_=6,W_=20,X_=256,Pa=new zi,hf=new Ne,Vh=null,Wh=0,Xh=0,qh=!1,q_=new P,xs=new P,jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=q_}=r;Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Wh,Xh),this._renderer.xr.enabled=qh,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Zt,format:Pn,colorSpace:Gr,depthBuffer:!1},s=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y_(r)),this._blurMaterial=K_(r,e,t),this._ggxMaterial=Z_(r,e,t)}return s}_compileMaterial(e){let t=new ge(new ft,e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,s,r){let l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(hf),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new wt,new an({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(hf),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;ur(s,v*E,w>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Hi||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-dr?n-g+dr:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,ur(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Pa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ur(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,Pa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-dr?s-this._lodMax+dr:0),u=4*(this._cubeSize-h);ur(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Pa)}};function Y_(i){let e=[],t=[],n=i,s=i-dr+1+V_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,w=p>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(v,d*u*p);for(let E=0;E<u;E++){let b=h[E*2]*2-1,I=h[E*2+1]*2-1;p===0?xs.set(1,I,b):p===1?xs.set(-b,1,-I):p===2?xs.set(-b,I,1):p===3?xs.set(-1,I,-b):p===4?xs.set(-b,-1,I):xs.set(b,I,-1),xs.toArray(y,(p*u+E)*d)}}let m=new ft;m.setAttribute("position",new Nt(g,d)),m.setAttribute("outputDirection",new Nt(y,d)),t.push(new ge(m,null)),n>dr&&n--}return{lodMeshes:t,sizeLods:e}}function uf(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Z_(i,e,t){return new mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function K_(i,e,t){return new mt({name:"SphericalGaussianBlur",defines:{SAMPLES:W_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function df(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ff(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ec=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wt(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Rn});r.uniforms.tEquirect.value=t;let a=new ge(s,r),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Yt),new al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function J_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===cl||d===hl)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new ec(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===cl||d===hl,y=d===Hi||d===gs;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new jl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new jl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===cl?u.mapping=Hi:d===hl&&(u.mapping=gs),u}function l(u){let d=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function $_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function Q_(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(d!==null){let M=d.array;y=d.version;for(let w=0,v=M.length;w<v;w+=3){let E=M[w+0],b=M[w+1],I=M[w+2];u.push(E,b,b,I,I,E)}}else{let M=g.array;y=g.version;for(let w=0,v=M.length/3-1;w<v;w+=3){let E=w+0,b=w+1,I=w+2;u.push(E,b,b,I,I,E)}}let m=new(g.count>=65535?Jr:Kr)(u,1);m.version=y;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function j_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ex(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tx(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*E*4*f),I=new qr(b,v,E,f);I.type=Xn,I.needsUpdate=!0;let x=w*4;for(let C=0;C<f;C++){let N=m[C],k=p[C],G=M[C],U=v*E*4*C;for(let F=0;F<N.count;F++){let L=F*x;d===!0&&(s.fromBufferAttribute(N,F),b[U+L+0]=s.x,b[U+L+1]=s.y,b[U+L+2]=s.z,b[U+L+3]=0),g===!0&&(s.fromBufferAttribute(k,F),b[U+L+4]=s.x,b[U+L+5]=s.y,b[U+L+6]=s.z,b[U+L+7]=0),y===!0&&(s.fromBufferAttribute(G,F),b[U+L+8]=s.x,b[U+L+9]=s.y,b[U+L+10]=s.z,b[U+L+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:I,size:new ie(v,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function nx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ix={[ma]:"LINEAR_TONE_MAPPING",[ga]:"REINHARD_TONE_MAPPING",[_a]:"CINEON_TONE_MAPPING",[ms]:"ACES_FILMIC_TONE_MAPPING",[va]:"AGX_TONE_MAPPING",[ya]:"NEUTRAL_TONE_MAPPING",[xa]:"CUSTOM_TONE_MAPPING"};function sx(i,e,t,n,s,r){let a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ft;c.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let h=new ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ge(c,h),u=new zi(-1,1,1,-1,0,1),d=null,g=null,y=!1,m,p=null,M=[],w=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let b=0;b<M.length;b++){let I=M[b];I.setSize&&I.setSize(v,E)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;let E=a.width,b=a.height;M.length>0&&o===null&&(o=new Ut(E,b,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),l=new Ut(E,b,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<M.length;I++){let x=M[I];x.setSize&&x.setSize(E,b)}},this.begin=function(v,E){if(y||v.toneMapping===Vn&&M.length===0)return!1;if(p=E,E!==null){let b=E.width,I=E.height;(a.width!==b||a.height!==I)&&this.setSize(b,I)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Vn,!0},this.hasRenderPass=function(){return w},this.end=function(v,E){v.toneMapping=m,y=!0;let b=a,I=o;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(v,I,b,E),T.needsSwap!==!1&&(b=I,I=I===o?l:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,h.defines={},it.getTransfer(d)===ct&&(h.defines.SRGB_TRANSFER="");let x=ix[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(f,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Df=new rn,Kh=new Ni(1,1),Nf=new qr,Uf=new No,Ff=new jr,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),xf=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ic(i,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),kt(t,n)}}function hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),kt(t,n)}}function ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),kt(t,n)}}function dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kh.compareFunction=t.isReversedDepthBuffer()?Jl:Kl,r=Kh):r=Df,t.setTexture2D(e||r,s)}function Mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uf,s)}function Sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ff,s)}function bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nf,s)}function Ex(i){switch(i){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}function Tx(i,e){i.uniform1fv(this.addr,e)}function wx(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ax(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Cx(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Rx(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Px(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ix(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lx(i,e){i.uniform1iv(this.addr,e)}function Dx(i,e){i.uniform2iv(this.addr,e)}function Nx(i,e){i.uniform3iv(this.addr,e)}function Ux(i,e){i.uniform4iv(this.addr,e)}function Fx(i,e){i.uniform1uiv(this.addr,e)}function Ox(i,e){i.uniform2uiv(this.addr,e)}function Bx(i,e){i.uniform3uiv(this.addr,e)}function zx(i,e){i.uniform4uiv(this.addr,e)}function kx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Kh:a=Df;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uf,r[a])}function Gx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ff,r[a])}function Vx(i,e,t){let n=this.cache,s=e.length,r=ic(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nf,r[a])}function Wx(i){switch(i){case 5126:return Tx;case 35664:return wx;case 35665:return Ax;case 35666:return Cx;case 35674:return Rx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Fx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}var Jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ex(t.type)}},$h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wx(t.type)}},Qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Yh=/(\w+)(\])?(\[|\.)?/g;function vf(i,e){i.seq.push(e),i.map[e.id]=e}function Xx(i,e,t){let n=i.name,s=n.length;for(Yh.lastIndex=0;;){let r=Yh.exec(n),a=Yh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vf(t,c===void 0?new Jh(o,i,e):new $h(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Qh(o),vf(t,f)),t=f}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Xx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function yf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var qx=37297,Yx=0;function Zx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Mf=new Ze;function Kx(i){it._getMatrix(Mf,it.workingColorSpace,i);let e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zx(i.getShaderSource(e),o)}else return r}function Jx(i,e){let t=Kx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $x={[ma]:"Linear",[ga]:"Reinhard",[_a]:"Cineon",[ms]:"ACESFilmic",[va]:"AgX",[ya]:"Neutral",[xa]:"Custom"};function Qx(i,e){let t=$x[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ql=new P;function jx(){it.getLuminanceCoefficients(Ql);let i=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function tv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function La(i){return i!==""}function bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(i){return i.replace(iv,rv)}var sv=new Map;function rv(i,e){let t=nt[e];if(t===void 0){let n=sv.get(e);if(n!==void 0)t=nt[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jh(t)}var av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(i){return i.replace(av,ov)}function ov(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var lv={[fs]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function cv(i){return lv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hv={[Hi]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function uv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var dv={[gs]:"ENVMAP_MODE_REFRACTION"};function fv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pv={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[kd]:"ENVMAP_BLENDING_ADD"};function mv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pv[i.combine]||"ENVMAP_BLENDING_NONE"}function gv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _v(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=cv(t),c=uv(t),h=fv(t),f=mv(t),u=gv(t),d=ev(t),g=tv(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(La).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(La).join(`
`),p.length>0&&(p+=`
`)):(m=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),a=jh(a),a=bf(a,t),a=Ef(a,t),o=jh(o),o=bf(o,t),o=Ef(o,t),a=Tf(a),o=Tf(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+a,v=M+p+o,E=yf(s,s.VERTEX_SHADER,w),b=yf(s,s.FRAGMENT_SHADER,v);s.attachShader(y,E),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(N){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(b)||"",F=k.trim(),L=G.trim(),B=U.trim(),Y=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,b);else{let J=Sf(s,E,"vertex"),$=Sf(s,b,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+J+`
`+$)}else F!==""?ze("WebGLProgram: Program Info Log:",F):(L===""||B==="")&&(V=!1);V&&(N.diagnostics={runnable:Y,programLog:F,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(E),s.deleteShader(b),x=new fr(s,y),T=nv(s,y)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,qx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}var xv=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tu(e),t.set(e,n)),n}},tu=class{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}};function vv(i){return i===Wi||i===Aa||i===Ca}function yv(i,e,t,n,s,r){let a=new Ks,o=new eu,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,C,N,k,G){let U=N.fog,F=k.geometry,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||L,B),V=Y&&Y.mapping===Ma?Y.image.height:null,J=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,he=$!==void 0?$.length:0,de=0;F.morphAttributes.position!==void 0&&(de=1),F.morphAttributes.normal!==void 0&&(de=2),F.morphAttributes.color!==void 0&&(de=3);let je,Je,qe,K;if(J){let Mt=ci[J];je=Mt.vertexShader,Je=Mt.fragmentShader}else{je=x.vertexShader,Je=x.fragmentShader;let Mt=o.getVertexShaderStage(x),ut=o.getFragmentShaderStage(x);o.update(x,Mt,ut),qe=Mt.id,K=ut.id}let ee=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,me=k.isBatchedMesh===!0,ke=!!x.map,ot=!!x.matcap,se=!!Y,ae=!!x.aoMap,oe=!!x.lightMap,ce=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,He=!!x.displacementMap,Be=!!x.emissiveMap,Xe=!!x.metalnessMap,Ke=!!x.roughnessMap,D=x.anisotropy>0,ht=x.clearcoat>0,st=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,H=x.sheen>0,q=x.transmission>0,Q=D&&!!x.anisotropyMap,ue=ht&&!!x.clearcoatMap,fe=ht&&!!x.clearcoatNormalMap,j=ht&&!!x.clearcoatRoughnessMap,ne=_&&!!x.iridescenceMap,_e=_&&!!x.iridescenceThicknessMap,Ue=H&&!!x.sheenColorMap,Me=H&&!!x.sheenRoughnessMap,xe=!!x.specularMap,Fe=!!x.specularColorMap,Ge=!!x.specularIntensityMap,$e=q&&!!x.transmissionMap,z=q&&!!x.thicknessMap,ve=!!x.gradientMap,te=!!x.alphaMap,ye=x.alphaTest>0,Te=!!x.alphaHash,re=!!x.extensions,Oe=Vn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let Pe={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:Je,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:me,batchingColor:me&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:ot,envMap:se,envMapMode:se&&Y.mapping,envMapCubeUVHeight:V,aoMap:ae,lightMap:oe,bumpMap:ce,normalMap:pe,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:pe&&x.normalMapType===Vd,normalMapTangentSpace:pe&&x.normalMapType===Zl,packedNormalMap:pe&&x.normalMapType===Zl&&vv(x.normalMap.format),metalnessMap:Xe,roughnessMap:Ke,anisotropy:D,anisotropyMap:Q,clearcoat:ht,clearcoatMap:ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:j,dispersion:st,retroreflection:A,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:_e,sheen:H,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:xe,specularColorMap:Fe,specularIntensityMap:Ge,transmission:q,transmissionMap:$e,thicknessMap:z,gradientMap:ve,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:ye,alphaHash:Te,combine:x.combine,mapUv:ke&&g(x.map.channel),aoMapUv:ae&&g(x.aoMap.channel),lightMapUv:oe&&g(x.lightMap.channel),bumpMapUv:ce&&g(x.bumpMap.channel),normalMapUv:pe&&g(x.normalMap.channel),displacementMapUv:He&&g(x.displacementMap.channel),emissiveMapUv:Be&&g(x.emissiveMap.channel),metalnessMapUv:Xe&&g(x.metalnessMap.channel),roughnessMapUv:Ke&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:ue&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:Fe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ge&&g(x.specularIntensityMap.channel),transmissionMapUv:$e&&g(x.transmissionMap.channel),thicknessMapUv:z&&g(x.thicknessMap.channel),alphaMapUv:te&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||D),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(ke||te),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:de,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jt,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let T=d[x.type],C;if(T){let N=ci[T];C=vi.clone(N.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new _v(i,T,x,s),c.push(C),h.set(T,C)),C}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function I(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:I}}function Mv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,y,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,d,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let w=o(u,d,g,y,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(u,d,g,y,m,p){let M=o(u,d,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||Sv),n.length>1&&n.sort(d||Af),s.length>1&&s.sort(d||Af)}function f(){for(let u=e,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function bv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cf,i.set(n,[a])):s>=r.length?(a=new Cf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ne};break;case"SpotLight":t={position:new P,direction:new P,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var wv=0;function Av(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cv(i){let e=new Ev,t=Tv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new xt,a=new xt;function o(c){let h=0,f=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,M=0,w=0,v=0,E=0,b=0,I=0,x=0,T=0,C=0;c.sort(Av);for(let k=0,G=c.length;k<G;k++){let U=c[k],F=U.color,L=U.intensity,B=U.distance,Y=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Wi?Y=U.shadow.map.texture:Y=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*L,f+=F.g*L,u+=F.b*L;else if(U.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(U.sh.coefficients[V],L);C++}else if(U.isSunLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,$=t.get(U);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=Y;let he=J.getViewportCount();for(let de=0;de<he;de++)n.sunShadowMatrix[y+de]=J.getMatrix(de),n.sunShadowCascade[y+de]=J._cascadeData[de];y+=he,g++}n.sun[d]=V,d++}else if(U.isDirectionalLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,$=t.get(U);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=U.shadow.matrix,E++}n.directional[m]=V,m++}else if(U.isSpotLight){let V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(F).multiplyScalar(L),V.distance=B,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,n.spot[M]=V;let J=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,J.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[M]=J.matrix,U.castShadow){let $=t.get(U);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=Y,I++}M++}else if(U.isRectAreaLight){let V=e.get(U);V.color.copy(F).multiplyScalar(L),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=V,w++}else if(U.isPointLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){let J=U.shadow,$=t.get(U);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=U.shadow.matrix,b++}n.point[p]=V,p++}else if(U.isHemisphereLight){let V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(L),V.groundColor.copy(U.groundColor).multiplyScalar(L),n.hemi[v]=V,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==w||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==I||N.numSpotMaps!==x||N.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=M,N.rectAreaLength=w,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=I,N.numSpotMaps=x,N.numLightProbes=C,n.version=wv++)}function l(c,h){let f=0,u=0,d=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let v=c[M];if(v.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Rf(i){let e=new Cv(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rf(i),e.set(s,[o])):r>=a.length?(o=new Rf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Dv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Pf=new xt,Ia=new P,Zh=new P;function Nv(i,e,t){let n=new $s,s=new ie,r=new ie,a=new Tt,o=new Zo,l=new Ko,c={},h=t.maxTextureSize,f={[ki]:on,[on]:ki,[jt]:jt},u=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Pv,fragmentShader:Iv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ge(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs;let p=this.type;this.render=function(b,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===yd&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fs);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Rn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=p!==this.type;G&&I.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=b.length;U<F;U++){let L=b[U],B=L.shadow;if(B===void 0){ze("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Y=B.getFrameExtents();s.multiply(Y),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,B.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=V,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===or){if(L.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ut(s.x,s.y,{format:Wi,type:Zt,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new Ni(s.x,s.y,Xn),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=ii,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt}else L.isPointLight?(B.map=new ec(s.x),B.map.depthTexture=new ko(s.x,Wn)):(B.map=new Ut(s.x,s.y),B.map.depthTexture=new Ni(s.x,s.y,Wn)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=ii,this.type===fs?(B.map.depthTexture.compareFunction=V?Jl:Kl,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let J=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();L.isPointLight!==!0&&B.updateMatrices(L,x);for(let $=0;$<J;$++){let he=B.getCamera($);if(L.isPointLight){let de=B.camera,je=B.matrix,Je=L.distance||de.far;Je!==de.far&&(de.far=Je,de.updateProjectionMatrix()),Ia.setFromMatrixPosition(L.matrixWorld),de.position.copy(Ia),Zh.copy(de.position),Zh.add(Lv[$]),de.up.copy(Dv[$]),de.lookAt(Zh),de.updateMatrixWorld(),je.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Pf.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Pf,de.coordinateSystem,de.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,$),i.clear();else{$===0&&(i.setRenderTarget(B.map),i.clear());let de=B.getViewport($);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),k.viewport(a)}n=B.getFrustum($),v(I,x,he,L,this.type)}B.isPointLightShadow!==!0&&this.type===or&&M(B,x),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,N)};function M(b,I){let x=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ut(s.x,s.y,{format:Wi,type:Zt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(I,null,x,u,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(I,null,x,d,y,null)}function w(b,I,x,T){let C=null,N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)C=N;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let k=C.uuid,G=I.uuid,U=c[k];U===void 0&&(U={},c[k]=U);let F=U[G];F===void 0&&(F=C.clone(),U[G]=F,I.addEventListener("dispose",E)),C=F}if(C.visible=I.visible,C.wireframe=I.wireframe,T===or?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:f[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=i.properties.get(C);k.light=x}return C}function v(b,I,x,T,C){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===or)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let G=e.update(b),U=b.material;if(Array.isArray(U)){let F=G.groups;for(let L=0,B=F.length;L<B;L++){let Y=F[L],V=U[Y.materialIndex];if(V&&V.visible){let J=w(b,V,T,C);b.onBeforeShadow(i,b,I,x,G,J,Y),i.renderBufferDirect(x,null,G,J,b,Y),b.onAfterShadow(i,b,I,x,G,J,Y)}}}else if(U.visible){let F=w(b,U,T,C);b.onBeforeShadow(i,b,I,x,G,F,null),i.renderBufferDirect(x,null,G,F,b,null),b.onAfterShadow(i,b,I,x,G,F,null)}}let k=b.children;for(let G=0,U=k.length;G<U;G++)v(k[G],I,x,T,C)}function E(b){b.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Uv(i,e){function t(){let z=!1,ve=new Tt,te=null,ye=new Tt(0,0,0,0);return{setMask:function(Te){te!==Te&&!z&&(i.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){z=Te},setClear:function(Te,re,Oe,Pe,Mt){Mt===!0&&(Te*=Pe,re*=Pe,Oe*=Pe),ve.set(Te,re,Oe,Pe),ye.equals(ve)===!1&&(i.clearColor(Te,re,Oe,Pe),ye.copy(ve))},reset:function(){z=!1,te=null,ye.set(-1,0,0,0)}}}function n(){let z=!1,ve=!1,te=null,ye=null,Te=null;return{setReversed:function(re){if(ve!==re){let Oe=e.get("EXT_clip_control");re?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ve=re;let Pe=Te;Te=null,this.setClear(Pe)}},getReversed:function(){return ve},setTest:function(re){re?ee(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(re){te!==re&&!z&&(i.depthMask(re),te=re)},setFunc:function(re){if(ve&&(re=ef[re]),ye!==re){switch(re){case bo:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case To:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=re}},setLocked:function(re){z=re},setClear:function(re){Te!==re&&(Te=re,ve&&(re=1-re),i.clearDepth(re))},reset:function(){z=!1,te=null,ye=null,Te=null,ve=!1}}}function s(){let z=!1,ve=null,te=null,ye=null,Te=null,re=null,Oe=null,Pe=null,Mt=null;return{setTest:function(ut){z||(ut?ee(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(ut){ve!==ut&&!z&&(i.stencilMask(ut),ve=ut)},setFunc:function(ut,Nn,$n){(te!==ut||ye!==Nn||Te!==$n)&&(i.stencilFunc(ut,Nn,$n),te=ut,ye=Nn,Te=$n)},setOp:function(ut,Nn,$n){(re!==ut||Oe!==Nn||Pe!==$n)&&(i.stencilOp(ut,Nn,$n),re=ut,Oe=Nn,Pe=$n)},setLocked:function(ut){z=ut},setClear:function(ut){Mt!==ut&&(i.clearStencil(ut),Mt=ut)},reset:function(){z=!1,ve=null,te=null,ye=null,Te=null,re=null,Oe=null,Pe=null,Mt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,v=null,E=null,b=null,I=null,x=new Ne(0,0,0),T=0,C=!1,N=null,k=null,G=null,U=null,F=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=Y>=2);let J=null,$={},he=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),je=new Tt().fromArray(he),Je=new Tt().fromArray(de);function qe(z,ve,te,ye){let Te=new Uint8Array(4),re=i.createTexture();i.bindTexture(z,re),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<te;Oe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ve+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return re}let K={};K[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ws),ce(!1),pe(gh),ee(i.CULL_FACE),ae(Rn);function ee(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function le(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function De(z,ve){return u[z]!==ve?(i.bindFramebuffer(z,ve),u[z]=ve,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function me(z,ve){let te=g,ye=!1;if(z){te=d.get(ve),te===void 0&&(te=[],d.set(ve,te));let Te=z.textures;if(te.length!==Te.length||te[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Oe=Te.length;re<Oe;re++)te[re]=i.COLOR_ATTACHMENT0+re;te.length=Te.length,ye=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ye=!0);ye&&i.drawBuffers(te)}function ke(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let ot={[ps]:i.FUNC_ADD,[Sd]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};ot[Ed]=i.MIN,ot[Td]=i.MAX;let se={[wd]:i.ZERO,[Ad]:i.ONE,[Cd]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[yh]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Od]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(z,ve,te,ye,Te,re,Oe,Pe,Mt,ut){if(z===Rn){m===!0&&(le(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),z!==Md){if(z!==p||ut!==C){if((M!==ps||E!==ps)&&(i.blendEquation(i.FUNC_ADD),M=ps,E=ps),ut)switch(z){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",z);break}else switch(z){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _h:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",z);break}w=null,v=null,b=null,I=null,x.set(0,0,0),T=0,p=z,C=ut}return}Te=Te||ve,re=re||te,Oe=Oe||ye,(ve!==M||Te!==E)&&(i.blendEquationSeparate(ot[ve],ot[Te]),M=ve,E=Te),(te!==w||ye!==v||re!==b||Oe!==I)&&(i.blendFuncSeparate(se[te],se[ye],se[re],se[Oe]),w=te,v=ye,b=re,I=Oe),(Pe.equals(x)===!1||Mt!==T)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Mt),x.copy(Pe),T=Mt),p=z,C=!1}function oe(z,ve){z.side===jt?le(i.CULL_FACE):ee(i.CULL_FACE);let te=z.side===on;ve&&(te=!te),ce(te),z.blending===lr&&z.transparent===!1?ae(Rn):ae(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let ye=z.stencilWrite;o.setTest(ye),ye&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Be(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(z){N!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),N=z)}function pe(z){z!==xd?(ee(i.CULL_FACE),z!==k&&(z===gh?i.cullFace(i.BACK):z===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),k=z}function He(z){z!==G&&(B&&i.lineWidth(z),G=z)}function Be(z,ve,te){z?(ee(i.POLYGON_OFFSET_FILL),(U!==ve||F!==te)&&(U=ve,F=te,a.getReversed()&&(ve=-ve),i.polygonOffset(ve,te))):le(i.POLYGON_OFFSET_FILL)}function Xe(z){z?ee(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function Ke(z){z===void 0&&(z=i.TEXTURE0+L-1),J!==z&&(i.activeTexture(z),J=z)}function D(z,ve,te){te===void 0&&(J===null?te=i.TEXTURE0+L-1:te=J);let ye=$[te];ye===void 0&&(ye={type:void 0,texture:void 0},$[te]=ye),(ye.type!==z||ye.texture!==ve)&&(J!==te&&(i.activeTexture(te),J=te),i.bindTexture(z,ve||K[z]),ye.type=z,ye.texture=ve)}function ht(){let z=$[J];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function _(){try{i.texSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function ue(){try{i.texStorage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function fe(){try{i.texStorage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function j(){try{i.texImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function ne(){try{i.texImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function _e(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function Ue(z,ve){f[z]!==ve&&(i.pixelStorei(z,ve),f[z]=ve)}function Me(z){je.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),je.copy(z))}function xe(z){Je.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Je.copy(z))}function Fe(z,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let ye=te.get(z);ye===void 0&&(ye=i.getUniformBlockIndex(ve,z.name),te.set(z,ye))}function Ge(z,ve){let ye=c.get(ve).get(z);l.get(ve)!==ye&&(i.uniformBlockBinding(ve,ye,z.__bindingPointIndex),l.set(ve,ye))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,$={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,v=null,E=null,b=null,I=null,x=new Ne(0,0,0),T=0,C=!1,N=null,k=null,G=null,U=null,F=null,je.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:le,bindFramebuffer:De,drawBuffers:me,useProgram:ke,setBlending:ae,setMaterial:oe,setFlipSided:ce,setCullFace:pe,setLineWidth:He,setPolygonOffset:Be,setScissorTest:Xe,activeTexture:Ke,bindTexture:D,unbindTexture:ht,compressedTexImage2D:st,compressedTexImage3D:A,texImage2D:j,texImage3D:ne,pixelStorei:Ue,getParameter:_e,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:fe,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:Me,viewport:xe,reset:$e}}function Fv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,_){return g?new OffscreenCanvas(A,_):Wr("canvas")}function m(A,_,H){let q=1,Q=st(A);if((Q.width>H||Q.height>H)&&(q=H/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ue=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);u===void 0&&(u=y(ue,fe));let j=_?y(ue,fe):u;return j.width=ue,j.height=fe,j.getContext("2d").drawImage(A,0,0,ue,fe),ze("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+fe+")."),j}else return"data"in A&&ze("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,_,H,q,Q,ue=!1){if(A!==null){if(i[A]!==void 0)return i[A];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&fe&&(j=fe.R16_EXT),H===i.SHORT&&fe&&(j=fe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),_===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&fe&&(j=fe.RG16_EXT),H===i.SHORT&&fe&&(j=fe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_SHORT&&fe&&(j=fe.RGB16_EXT),H===i.SHORT&&fe&&(j=fe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){let ne=ue?Vr:it.getTransfer(Q);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=ne===ct?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&fe&&(j=fe.RGBA16_EXT),H===i.SHORT&&fe&&(j=fe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(A,_){let H;return A?_===null||_===Wn||_===hr?H=i.DEPTH24_STENCIL8:_===Xn?H=i.DEPTH32F_STENCIL8:_===cr&&(H=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===hr?H=i.DEPTH_COMPONENT24:_===Xn?H=i.DEPTH_COMPONENT32F:_===cr&&(H=i.DEPTH_COMPONENT16),H}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==Yt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function I(A){let _=A.target;_.removeEventListener("dispose",I),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),N(_)}function T(A){let _=n.get(A);if(_.__webglInit===void 0)return;let H=A.source,q=d.get(H);if(q){let Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(A),Object.keys(q).length===0&&d.delete(H)}n.remove(A)}function C(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let H=A.source,q=d.get(H);delete q[_.__cacheKey],a.memory.textures--}function N(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Q=0;Q<_.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=A.textures;for(let q=0,Q=H.length;q<Q;q++){let ue=n.get(H[q]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(A)}let k=0;function G(){k=0}function U(){return k}function F(A){k=A}function L(){let A=k;return A>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function B(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Y(A,_){let H=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let q=A.image;if(q===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,A,_);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function V(A,_){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){le(H,A,_);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function J(A,_){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){le(H,A,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function $(A,_){let H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){De(H,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let he={[Xs]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},de={[Xt]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[Sa]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[ul]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},je={[Xd]:i.NEVER,[Jd]:i.ALWAYS,[qd]:i.LESS,[Kl]:i.LEQUAL,[Yd]:i.EQUAL,[Jl]:i.GEQUAL,[Zd]:i.GREATER,[Kd]:i.NOTEQUAL};function Je(A,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Yt||_.magFilter===ul||_.magFilter===Sa||_.magFilter===Gi||_.minFilter===Yt||_.minFilter===ul||_.minFilter===Sa||_.minFilter===Gi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,je[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Sa&&_.minFilter!==Gi||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qe(A,_){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",I));let q=_.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let ue=B(_);if(ue!==A.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[ue].usedTimes++;let fe=Q[A.__cacheKey];fe!==void 0&&(Q[A.__cacheKey].usedTimes--,fe.usedTimes===0&&C(_)),A.__cacheKey=ue,A.__webglTexture=Q[ue].texture}return H}function K(A,_,H){return Math.floor(Math.floor(A/H)/_)}function ee(A,_,H,q){let ue=A.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,q,_.data);else{ue.sort((Ue,Me)=>Ue.start-Me.start);let fe=0;for(let Ue=1;Ue<ue.length;Ue++){let Me=ue[fe],xe=ue[Ue],Fe=Me.start+Me.count,Ge=K(xe.start,_.width,4),$e=K(Me.start,_.width,4);xe.start<=Fe+1&&Ge===$e&&K(xe.start+xe.count-1,_.width,4)===Ge?Me.count=Math.max(Me.count,xe.start+xe.count-Me.start):(++fe,ue[fe]=xe)}ue.length=fe+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ue=0,Me=ue.length;Ue<Me;Ue++){let xe=ue[Ue],Fe=Math.floor(xe.start/4),Ge=Math.ceil(xe.count/4),$e=Fe%_.width,z=Math.floor(Fe/_.width),ve=Ge,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,$e,z,ve,te,H,q,_.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function le(A,_,H){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);let Q=qe(A,_),ue=_.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+H);let fe=n.get(ue);if(ue.version!==fe.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let te=it.getPrimaries(it.workingColorSpace),ye=_.colorSpace===xi?null:it.getPrimaries(_.colorSpace),Te=_.colorSpace===xi||te===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=m(_.image,!1,s.maxTextureSize);ne=ht(_,ne);let _e=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),Me=v(_.internalFormat,_e,Ue,_.normalized,_.colorSpace,_.isVideoTexture);Je(q,_);let xe,Fe=_.mipmaps,Ge=_.isVideoTexture!==!0,$e=fe.__version===void 0||Q===!0,z=ue.dataReady,ve=b(_,ne);if(_.isDepthTexture)Me=E(_.format===Vi,_.type),$e&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,_e,Ue,null));else if(_.isDataTexture)if(Fe.length>0){Ge&&$e&&t.texStorage2D(i.TEXTURE_2D,ve,Me,Fe[0].width,Fe[0].height);for(let te=0,ye=Fe.length;te<ye;te++)xe=Fe[te],Ge?z&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,_e,Ue,xe.data):t.texImage2D(i.TEXTURE_2D,te,Me,xe.width,xe.height,0,_e,Ue,xe.data);_.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ne.width,ne.height),z&&ee(_,ne,_e,Ue)):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,_e,Ue,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,Fe[0].width,Fe[0].height,ne.depth);for(let te=0,ye=Fe.length;te<ye;te++)if(xe=Fe[te],_.format!==Pn)if(_e!==null)if(Ge){if(z)if(_.layerUpdates.size>0){let Te=Oh(xe.width,xe.height,_.format,_.type);for(let re of _.layerUpdates){let Oe=xe.data.subarray(re*Te/xe.data.BYTES_PER_ELEMENT,(re+1)*Te/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,re,xe.width,xe.height,1,_e,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,_e,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Me,xe.width,xe.height,ne.depth,0,xe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,_e,Ue,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Me,xe.width,xe.height,ne.depth,0,_e,Ue,xe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ge&&$e&&t.texStorage2D(i.TEXTURE_2D,ve,Me,Fe[0].width,Fe[0].height);for(let te=0,ye=Fe.length;te<ye;te++)xe=Fe[te],_.format!==Pn?_e!==null?Ge?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Me,xe.width,xe.height,0,xe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?z&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,xe.width,xe.height,_e,Ue,xe.data):t.texImage2D(i.TEXTURE_2D,te,Me,xe.width,xe.height,0,_e,Ue,xe.data)}else if(_.isDataArrayTexture)if(Ge){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ne.width,ne.height,ne.depth),z)if(_.layerUpdates.size>0){let te=Oh(ne.width,ne.height,_.format,_.type);for(let ye of _.layerUpdates){let Te=ne.data.subarray(ye*te/ne.data.BYTES_PER_ELEMENT,(ye+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,ne.width,ne.height,1,_e,Ue,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ue,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,_e,Ue,ne.data);else if(_.isData3DTexture)Ge?($e&&t.texStorage3D(i.TEXTURE_3D,ve,Me,ne.width,ne.height,ne.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,_e,Ue,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,_e,Ue,ne.data);else if(_.isFramebufferTexture){if($e)if(Ge)t.texStorage2D(i.TEXTURE_2D,ve,Me,ne.width,ne.height);else{let te=ne.width,ye=ne.height;for(let Te=0;Te<ve;Te++)t.texImage2D(i.TEXTURE_2D,Te,Me,te,ye,0,_e,Ue,null),te>>=1,ye>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),f.add(_),te.onpaint=ye=>{let Te=ye.changedElements;for(let re of f)Te.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Te=i.RGBA,re=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,re,Oe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ge&&$e){let te=st(Fe[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,te.width,te.height)}for(let te=0,ye=Fe.length;te<ye;te++)xe=Fe[te],Ge?z&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,_e,Ue,xe):t.texImage2D(i.TEXTURE_2D,te,Me,_e,Ue,xe);_.generateMipmaps=!1}else if(Ge){if($e){let te=st(ne);t.texStorage2D(i.TEXTURE_2D,ve,Me,te.width,te.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ue,ne)}else t.texImage2D(i.TEXTURE_2D,0,Me,_e,Ue,ne);p(_)&&M(q),fe.__version=ue.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function De(A,_,H){if(_.image.length!==6)return;let q=qe(A,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let ue=n.get(Q);if(Q.version!==ue.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let fe=it.getPrimaries(it.workingColorSpace),j=_.colorSpace===xi?null:it.getPrimaries(_.colorSpace),ne=_.colorSpace===xi||fe===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let _e=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let re=0;re<6;re++)!_e&&!Ue?Me[re]=m(_.image[re],!0,s.maxCubemapSize):Me[re]=Ue?_.image[re].image:_.image[re],Me[re]=ht(_,Me[re]);let xe=Me[0],Fe=r.convert(_.format,_.colorSpace),Ge=r.convert(_.type),$e=v(_.internalFormat,Fe,Ge,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,ve=ue.__version===void 0||q===!0,te=Q.dataReady,ye=b(_,xe);Je(i.TEXTURE_CUBE_MAP,_);let Te;if(_e){z&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,$e,xe.width,xe.height);for(let re=0;re<6;re++){Te=Me[re].mipmaps;for(let Oe=0;Oe<Te.length;Oe++){let Pe=Te[Oe];_.format!==Pn?Fe!==null?z?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,Pe.width,Pe.height,Fe,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,$e,Pe.width,Pe.height,0,Pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,Pe.width,Pe.height,Fe,Ge,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,$e,Pe.width,Pe.height,0,Fe,Ge,Pe.data)}}}else{if(Te=_.mipmaps,z&&ve){Te.length>0&&ye++;let re=st(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,$e,re.width,re.height)}for(let re=0;re<6;re++)if(Ue){z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Me[re].width,Me[re].height,Fe,Ge,Me[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Me[re].width,Me[re].height,0,Fe,Ge,Me[re].data);for(let Oe=0;Oe<Te.length;Oe++){let Mt=Te[Oe].image[re].image;z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,Mt.width,Mt.height,Fe,Ge,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,$e,Mt.width,Mt.height,0,Fe,Ge,Mt.data)}}else{z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,Ge,Me[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Fe,Ge,Me[re]);for(let Oe=0;Oe<Te.length;Oe++){let Pe=Te[Oe];z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,Fe,Ge,Pe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,$e,Fe,Ge,Pe.image[re])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function me(A,_,H,q,Q,ue){let fe=r.convert(H.format,H.colorSpace),j=r.convert(H.type),ne=v(H.internalFormat,fe,j,H.normalized,H.colorSpace),_e=n.get(_),Ue=n.get(H);if(Ue.__renderTarget=_,!_e.__hasExternalTextures){let Me=Math.max(1,_.width>>ue),xe=Math.max(1,_.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,ne,Me,xe,_.depth,0,fe,j,null):t.texImage2D(Q,ue,ne,Me,xe,0,fe,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ke(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,Ue.__webglTexture,0,Xe(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,Ue.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(A,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let q=_.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ue=E(_.stencilBuffer,Q),fe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(_),ue,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(_),ue,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ue,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,A)}else{let q=_.textures;for(let Q=0;Q<q.length;Q++){let ue=q[Q],fe=r.convert(ue.format,ue.colorSpace),j=r.convert(ue.type),ne=v(ue.internalFormat,fe,j,ue.normalized,ue.colorSpace);Ke(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(_),ne,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(A,_,H){let q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Je(i.TEXTURE_CUBE_MAP,_.depthTexture);let _e=r.convert(_.depthTexture.format),Ue=r.convert(_.depthTexture.type),Me;_.depthTexture.format===ii?Me=i.DEPTH_COMPONENT24:_.depthTexture.format===Vi&&(Me=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Me,_.width,_.height,0,_e,Ue,null)}}else Y(_.depthTexture,0);let ue=Q.__webglTexture,fe=Xe(_),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ne=_.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ii)Ke(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,ue,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,ue,0);else if(_.depthTexture.format===Vi)Ke(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,ue,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(A){let _=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)ot(_.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?ot(_.__webglFramebuffer[0],A,0):ot(_.__webglFramebuffer,A,0)}else if(H){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),ke(_.__webglDepthbuffer[q],A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ke(_.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(A,_,H){let q=n.get(A);_!==void 0&&me(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&se(A)}function oe(A){let _=A.texture,H=n.get(A),q=n.get(_);A.addEventListener("dispose",x);let Q=A.textures,ue=A.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),ue){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let ne=0;ne<_.mipmaps.length;ne++)H.__webglFramebuffer[j][ne]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(fe)for(let j=0,ne=Q.length;j<ne;j++){let _e=n.get(Q[j]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ke(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){let ne=Q[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let _e=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),Me=v(ne.internalFormat,_e,Ue,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),xe=Xe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Je(i.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)me(H.__webglFramebuffer[j][ne],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else me(H.__webglFramebuffer[j],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let j=0,ne=Q.length;j<ne;j++){let _e=Q[j],Ue=n.get(_e),Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ue.__webglTexture),Je(Me,_e),me(H.__webglFramebuffer,A,_e,i.COLOR_ATTACHMENT0+j,Me,0),p(_e)&&M(Me)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Je(j,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)me(H.__webglFramebuffer[ne],A,_,i.COLOR_ATTACHMENT0,j,ne);else me(H.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,j,0);p(_)&&M(j),t.unbindTexture()}A.depthBuffer&&se(A)}function ce(A){let _=A.textures;for(let H=0,q=_.length;H<q;H++){let Q=_[H];if(p(Q)){let ue=w(A),fe=n.get(Q).__webglTexture;t.bindTexture(ue,fe),M(ue),t.unbindTexture()}}}let pe=[],He=[];function Be(A){if(A.samples>0){if(Ke(A)===!1){let _=A.textures,H=A.width,q=A.height,Q=i.COLOR_BUFFER_BIT,ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(A),j=_.length>1;if(j)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ne=A.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);let Ue=n.get(_[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,Q,i.NEAREST),l===!0&&(pe.length=0,He.length=0,pe.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pe.push(ue),He.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);let Ue=n.get(_[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Xe(A){return Math.min(s.maxSamples,A.samples)}function Ke(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ht(A,_){let H=A.colorSpace,q=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Gr&&H!==xi&&(it.getTransfer(H)===ct?(q!==Pn||Q!==cn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",H)),_}function st(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ov(i,e){function t(n,s=xi){let r,a=it.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Ch)return i.RGB;if(n===Pn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Rh)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===ba||n===Ea||n===Ta||n===wa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===yl||n===Ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===El||n===Tl||n===wl||n===Aa||n===Al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===bl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tl)return r.COMPRESSED_R11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Vl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Ca||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mt({vertexShader:Bv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new nu,p={},M=t.getContextAttributes(),w=null,v=null,E=[],b=[],I=new ie,x=null,T=null,C=new Wt;C.viewport=new Tt;let N=new Wt;N.viewport=new Tt;let k=[C,N],G=new ol,U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=E[K];return ee===void 0&&(ee=new Js,E[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=E[K];return ee===void 0&&(ee=new Js,E[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=E[K];return ee===void 0&&(ee=new Js,E[K]=ee),ee.getHandSpace()};function L(K){let ee=b.indexOf(K.inputSource);if(ee===-1)return;let le=E[ee];le!==void 0&&(le.update(K.inputSource,K.frame,c||a),le.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<E.length;K++){let ee=b[K];ee!==null&&(b[K]=null,E[K].disconnect(ee))}U=null,F=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(w),d=null,u=null,f=null,s=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,De=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?Vi:ii,De=M.stencil?hr:Wn);let ke={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Ut(u.textureWidth,u.textureHeight,{format:Pn,type:cn,depthTexture:new Ni(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ut(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(K){for(let ee=0;ee<K.removed.length;ee++){let le=K.removed[ee],De=b.indexOf(le);De>=0&&(b[De]=null,E[De].disconnect(le))}for(let ee=0;ee<K.added.length;ee++){let le=K.added[ee],De=b.indexOf(le);if(De===-1){for(let ke=0;ke<E.length;ke++)if(ke>=b.length){b.push(le),De=ke;break}else if(b[ke]===null){b[ke]=le,De=ke;break}if(De===-1)break}let me=E[De];me&&me.connect(le)}}let V=new P,J=new P;function $(K,ee,le){V.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(le.matrixWorld);let De=V.distanceTo(J),me=ee.projectionMatrix.elements,ke=le.projectionMatrix.elements,ot=me[14]/(me[10]-1),se=me[14]/(me[10]+1),ae=(me[9]+1)/me[5],oe=(me[9]-1)/me[5],ce=(me[8]-1)/me[0],pe=(ke[8]+1)/ke[0],He=ot*ce,Be=ot*pe,Xe=De/(-ce+pe),Ke=Xe*-ce;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ke),K.translateZ(Xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let D=ot+Xe,ht=se+Xe,st=He-Ke,A=Be+(De-Ke),_=ae*se/ht*D,H=oe*se/ht*D;K.projectionMatrix.makePerspective(st,A,_,H,D,ht),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function he(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,le=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(le=m.depthFar)),G.near=N.near=C.near=ee,G.far=N.far=C.far=le,(U!==G.near||F!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,F=G.far),G.layers.mask=K.layers.mask|6,C.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let De=K.parent,me=G.cameras;he(G,De);for(let ke=0;ke<me.length;ke++)he(me[ke],De);me.length===2?$(G,C,N):G.projectionMatrix.copy(C.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),de(K,G,De)};function de(K,ee,le){le===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=is*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(K){return p[K]};let je=null;function Je(K,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let le=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let De=!1;le.length!==G.cameras.length&&(G.cameras.length=0,De=!0);for(let se=0;se<le.length;se++){let ae=le[se],oe=null;if(d!==null)oe=d.getViewport(ae);else{let pe=f.getViewSubImage(u,ae);oe=pe.viewport,se===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let ce=k[se];ce===void 0&&(ce=new Wt,ce.layers.enable(se),ce.viewport=new Tt,k[se]=ce),ce.matrix.fromArray(ae.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ae.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(oe.x,oe.y,oe.width,oe.height),se===0&&(G.matrix.copy(ce.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),De===!0&&G.cameras.push(ce)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let se=f.getDepthInformation(le[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(me&&me.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let se=0;se<le.length;se++){let ae=le[se].camera;if(ae){let oe=p[ae];oe||(oe=new ea,p[ae]=oe);let ce=f.getCameraImage(ae);oe.sourceTexture=ce}}}}for(let le=0;le<E.length;le++){let De=b[le],me=E[le];De!==null&&me!==void 0&&me.update(De,ee,c||a)}je&&je(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let qe=new If;qe.setAnimationLoop(Je),this.setAnimationLoop=function(K){je=K},this.dispose=function(){}}},kv=new xt,Of=new Ze;Of.set(-1,0,0,0,1,0,0,0,1);function Hv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Of),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let b=E.program;n.uniformBlockBinding(v,b)}function c(v,E){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",M));let I=E.program;n.updateUBOMapping(v,I);let x=e.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let E=f();v.__bindingPointIndex=E;let b=i.createBuffer(),I=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],b=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){let C=b[x];if(Array.isArray(C))for(let N=0,k=C.length;N<k;N++)d(C[N],x,N,I);else d(C,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,E,b,I){if(y(v,E,b,I)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){let k=T[N],G=p(k);g(k,v.__data,C),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,E,b){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,b)}function y(v,E,b,I){let x=v.value,T=E+"_"+b;if(I[T]===void 0)return typeof x=="number"||typeof x=="boolean"?I[T]=x:ArrayBuffer.isView(x)?I[T]=x.slice():I[T]=x.clone(),!0;{let C=I[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return I[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){let E=v.uniforms,b=0,I=16;for(let T=0,C=E.length;T<C;T++){let N=Array.isArray(E[T])?E[T]:[E[T]];for(let k=0,G=N.length;k<G;k++){let U=N[k],F=Array.isArray(U.value)?U.value:[U.value];for(let L=0,B=F.length;L<B;L++){let Y=F[L],V=p(Y),J=b%I,$=J%V.boundary,he=J+$;b+=$,he!==0&&I-he<V.storage&&(b+=I-he),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=V.storage}}}let x=b%I;return x>0&&(b+=I-x),v.__size=b,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),E}function M(v){let E=v.target;E.removeEventListener("dispose",M);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Wv(){return li===null&&(li=new Fo(Vv,16,16,Wi,Zt),li.name="DFG_LUT",li.minFilter=Yt,li.magFilter=Yt,li.wrapS=ei,li.wrapT=ei,li.generateMipmaps=!1,li.needsUpdate=!0),li}var tc=class{constructor(e={}){let{canvas:t=$d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,m=new Set([_l,gl,ml]),p=new Set([cn,Wn,cr,hr,fl,pl]),M=new Uint32Array(4),w=new Int32Array(4),v=new P,E=null,b=null,I=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,k=null,G=null,U=null,F=null;this._outputColorSpace=Vt;let L=0,B=0,Y=null,V=-1,J=null,$=new Tt,he=new Tt,de=null,je=new Ne(0),Je=0,qe=t.width,K=t.height,ee=1,le=null,De=null,me=new Tt(0,0,qe,K),ke=new Tt(0,0,qe,K),ot=!1,se=new $s,ae=!1,oe=!1,ce=new xt,pe=new P,He=new Tt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Ke(){return Y===null?ee:1}let D=n;function ht(S,O){return t.getContext(S,O)}let st,A,_,H,q,Q,ue,fe,j,ne,_e,Ue,Me,xe,Fe,Ge,$e,z,ve,te,ye,Te,re;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),D===null){let O="webgl2";if(D=ht(O,S),D===null)throw ht(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(S){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),Ve("WebGLRenderer: "+S.message),S}function Oe(){st=new $_(D),st.init(),ye=new Ov(D,st),A=new H_(D,st,e,ye),_=new Uv(D,st),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),G=D.createFramebuffer(),U=D.createFramebuffer(),F=D.createFramebuffer(),H=new ex(D),q=new Mv,Q=new Fv(D,st,_,q,A,ye,H),ue=new J_(C),fe=new ng(D),Te=new z_(D,fe),j=new Q_(D,fe,H,Te),ne=new nx(D,j,fe,Te,H),z=new tx(D,A,Q),Fe=new G_(q),_e=new yv(C,ue,st,A,Te,Fe),Ue=new Hv(C,q),Me=new bv,xe=new Rv(st),$e=new B_(C,ue,_,ne,g,l),Ge=new Nv(C,ne,A),re=new Gv(D,H,A,_),ve=new k_(D,st,H),te=new j_(D,st,H),H.programs=_e.programs,C.capabilities=A,C.extensions=st,C.properties=q,C.renderLists=Me,C.shadowMap=Ge,C.state=_,C.info=H}y!==cn&&(T=new sx(y,t.width,t.height,o,s,r));let Pe=new iu(C,D);this.xr=Pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=st.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=st.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize(qe,K,!1))},this.getSize=function(S){return S.set(qe,K)},this.setSize=function(S,O,Z=!0){if(Pe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=S,K=O,t.width=Math.floor(S*ee),t.height=Math.floor(O*ee),Z===!0&&(t.style.width=S+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(qe*ee,K*ee).floor()},this.setDrawingBufferSize=function(S,O,Z){qe=S,K=O,ee=Z,t.width=Math.floor(S*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(y===cn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,O,Z,W){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,O,Z,W),_.viewport($.copy(me).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(ke)},this.setScissor=function(S,O,Z,W){S.isVector4?ke.set(S.x,S.y,S.z,S.w):ke.set(S,O,Z,W),_.scissor(he.copy(ke).multiplyScalar(ee).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(S){_.setScissorTest(ot=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){De=S},this.getClearColor=function(S){return S.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,Z=!0){let W=0;if(S){let X=!1;if(Y!==null){let Ee=Y.texture.format;X=m.has(Ee)}if(X){let Ee=Y.texture.type,Ae=p.has(Ee),be=$e.getClearColor(),Ce=$e.getClearAlpha(),Ie=be.r,et=be.g,rt=be.b;Ae?(M[0]=Ie,M[1]=et,M[2]=rt,M[3]=Ce,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Ie,w[1]=et,w[2]=rt,w[3]=Ce,D.clearBufferiv(D.COLOR,0,w))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),$e.dispose(),Me.dispose(),xe.dispose(),q.dispose(),ue.dispose(),ne.dispose(),Te.dispose(),re.dispose(),_e.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Tu),Pe.removeEventListener("sessionend",wu),$i.stop()};function Mt(S){S.preventDefault(),Xr("WebGLRenderer: Context Lost."),N=!0}function ut(){Xr("WebGLRenderer: Context Restored."),N=!1;let S=H.autoReset,O=Ge.enabled,Z=Ge.autoUpdate,W=Ge.needsUpdate,X=Ge.type;Oe(),H.autoReset=S,Ge.enabled=O,Ge.autoUpdate=Z,Ge.needsUpdate=W,Ge.type=X}function Nn(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $n(S){let O=S.target;O.removeEventListener("dispose",$n),Ep(O)}function Ep(S){Tp(S),q.remove(S)}function Tp(S){let O=q.get(S).programs;O!==void 0&&(O.forEach(function(Z){_e.releaseProgram(Z)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,Z,W,X,Ee){O===null&&(O=Be);let Ae=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=Cp(S,O,Z,W,X);_.setMaterial(W,Ae);let Ce=Z.index,Ie=1;if(W.wireframe===!0){if(Ce=j.getWireframeAttribute(Z),Ce===void 0)return;Ie=2}let et=Z.drawRange,rt=Z.attributes.position,Re=et.start*Ie,dt=(et.start+et.count)*Ie;Ee!==null&&(Re=Math.max(Re,Ee.start*Ie),dt=Math.min(dt,(Ee.start+Ee.count)*Ie)),Ce!==null?(Re=Math.max(Re,0),dt=Math.min(dt,Ce.count)):rt!=null&&(Re=Math.max(Re,0),dt=Math.min(dt,rt.count));let Lt=dt-Re;if(Lt<0||Lt===1/0)return;Te.setup(X,W,be,Z,Ce);let bt,yt=ve;if(Ce!==null&&(bt=fe.get(Ce),yt=te,yt.setIndex(bt)),X.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*Ke()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(X.isLine){let Jt=W.linewidth;Jt===void 0&&(Jt=1),_.setLineWidth(Jt*Ke()),X.isLineSegments?yt.setMode(D.LINES):X.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else X.isPoints?yt.setMode(D.POINTS):X.isSprite&&yt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(st.get("WEBGL_multi_draw"))yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Jt=X._multiDrawStarts,we=X._multiDrawCounts,nn=X._multiDrawCount,lt=Ce?fe.get(Ce).bytesPerElement:1,Tn=q.get(W).currentProgram.getUniforms();for(let Qn=0;Qn<nn;Qn++)Tn.setValue(D,"_gl_DrawID",Qn),yt.render(Jt[Qn]/lt,we[Qn])}else if(X.isInstancedMesh)yt.renderInstances(Re,Lt,X.count);else if(Z.isInstancedBufferGeometry){let Jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,we=Math.min(Z.instanceCount,Jt);yt.renderInstances(Re,Lt,we)}else yt.render(Re,Lt)};function Eu(S,O,Z,W){k!==null&&S.isNodeMaterial&&k.setObject(W,S),ae===!0&&Fe.setState(S,Z,!1),S.transparent===!0&&S.side===jt&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,Xa(S,O,W),S.side=ki,S.needsUpdate=!0,Xa(S,O,W),S.side=jt):Xa(S,O,W)}this.compile=function(S,O,Z=null){Z===null&&(Z=S),k!==null&&k.renderStart(S,O,Z),b=xe.get(Z),b.init(O),x.push(b),Z.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),S!==Z&&S.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,ae=Fe.init(this.clippingPlanes,oe),ae===!0&&Fe.setGlobalState(this.clippingPlanes,O),k!==null&&Ge.render(b.state.shadowsArray,Z,O);let W=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ae=0;Ae<Ee.length;Ae++){let be=Ee[Ae];Eu(be,Z,O,X),W.add(be)}else Eu(Ee,Z,O,X),W.add(Ee)}),b=x.pop(),k!==null&&k.renderEnd(),W},this.compileAsync=function(S,O,Z=null){let W=this.compile(S,O,Z);return new Promise(X=>{function Ee(){if(W.forEach(function(Ae){let Ce=q.get(Ae).currentProgram;(Ce===void 0||Ce.isReady())&&W.delete(Ae)}),W.size===0){X(S);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ac=null;function wp(S){Ac&&Ac(S)}function Tu(){$i.stop()}function wu(){$i.start()}let $i=new If;$i.setAnimationLoop(wp),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(S){Ac=S,Pe.setAnimationLoop(S),S===null?$i.stop():$i.start()},Pe.addEventListener("sessionstart",Tu),Pe.addEventListener("sessionend",wu),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(S,O);let Z=Pe.enabled===!0&&Pe.isPresenting===!0,W=T!==null&&(Y===null||Z)&&T.begin(C,Y);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(O),O=Pe.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,O,Y),b=xe.get(S,x.length),b.init(O),b.state.textureUnits=Q.getTextureUnits(),x.push(b),ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(ce,kn,O.reversedDepth),oe=this.localClippingEnabled,ae=Fe.init(this.clippingPlanes,oe),E=Me.get(S,I.length),E.init(),I.push(E),Pe.enabled===!0&&Pe.isPresenting===!0){let Ae=C.xr.getDepthSensingMesh();Ae!==null&&Cc(Ae,O,-1/0,C.sortObjects)}Cc(S,O,0,C.sortObjects),E.finish(),k!==null&&k.updateLights(b.state.lightsArray),C.sortObjects===!0&&E.sort(le,De),Xe=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Xe&&$e.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Fe.beginShadows();let X=b.state.shadowsArray;if(Ge.render(X,S,O),ae===!0&&Fe.endShadows(),(W&&T.hasRenderPass())===!1){let Ae=E.opaque,be=E.transmissive;if(b.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(be.length>0)for(let Ie=0,et=Ce.length;Ie<et;Ie++){let rt=Ce[Ie];Cu(Ae,be,S,rt)}Xe&&$e.render(S);for(let Ie=0,et=Ce.length;Ie<et;Ie++){let rt=Ce[Ie];Au(E,S,rt,rt.viewport)}}else be.length>0&&Cu(Ae,be,S,O),Xe&&$e.render(S),Au(E,S,O)}Y!==null&&B===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),W&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,O),Te.resetDefaultState(),V=-1,J=null,x.pop(),x.length>0?(b=x[x.length-1],Q.setTextureUnits(b.state.textureUnits),ae===!0&&Fe.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,I.pop(),I.length>0?E=I[I.length-1]:E=null,k!==null&&k.renderEnd()};function Cc(S,O,Z,W){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(se)){W&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);let Ae=ne.update(S),be=S.material;be.visible&&E.push(S,Ae,be,Z,He.z,null,O)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(se))){let Ae=ne.update(S),be=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),He.copy(Ae.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(be)){let Ce=Ae.groups;for(let Ie=0,et=Ce.length;Ie<et;Ie++){let rt=Ce[Ie],Re=be[rt.materialIndex];Re&&Re.visible&&E.push(S,Ae,Re,Z,He.z,rt,O)}}else be.visible&&E.push(S,Ae,be,Z,He.z,null,O)}}let Ee=S.children;for(let Ae=0,be=Ee.length;Ae<be;Ae++)Cc(Ee[Ae],O,Z,W)}function Au(S,O,Z,W){let{opaque:X,transmissive:Ee,transparent:Ae}=S;b.setupLightsView(Z),ae===!0&&Fe.setGlobalState(C.clippingPlanes,Z),W&&_.viewport($.copy(W)),X.length>0&&Wa(X,O,Z),Ee.length>0&&Wa(Ee,O,Z),Ae.length>0&&Wa(Ae,O,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Cu(S,O,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let Re=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Ut(1,1,{generateMipmaps:!0,type:Re?Zt:cn,minFilter:Gi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Ee=b.state.transmissionRenderTarget[W.id],Ae=W.viewport||$;Ee.setSize(Ae.z*C.transmissionResolutionScale,Ae.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Ie=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(je),Je=C.getClearAlpha(),Je<1&&C.setClearColor(16777215,.5),C.clear(),Xe&&$e.render(Z);let et=C.toneMapping;C.toneMapping=Vn;let rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),ae===!0&&Fe.setGlobalState(C.clippingPlanes,W),Wa(S,Z,W),Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let dt=0,Lt=O.length;dt<Lt;dt++){let bt=O[dt],{object:yt,geometry:Jt,material:we,group:nn}=bt;if(we.side===jt&&yt.layers.test(W.layers)){let lt=we.side;we.side=on,we.needsUpdate=!0,Ru(yt,Z,W,Jt,we,nn),we.side=lt,we.needsUpdate=!0,Re=!0}}Re===!0&&(Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee))}C.setRenderTarget(be,Ce,Ie),C.setClearColor(je,Je),rt!==void 0&&(W.viewport=rt),C.toneMapping=et}function Wa(S,O,Z){let W=O.isScene===!0?O.overrideMaterial:null;for(let X=0,Ee=S.length;X<Ee;X++){let Ae=S[X],{object:be,geometry:Ce,group:Ie}=Ae,et=Ae.material;et.allowOverride===!0&&W!==null&&(et=W),be.layers.test(Z.layers)&&Ru(be,O,Z,Ce,et,Ie)}}function Ru(S,O,Z,W,X,Ee){k!==null&&X.isNodeMaterial&&k.setObject(S,X),S.onBeforeRender(C,O,Z,W,X,Ee),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(C,O,Z,W,S,Ee),X.transparent===!0&&X.side===jt&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,C.renderBufferDirect(Z,O,W,X,S,Ee),X.side=ki,X.needsUpdate=!0,C.renderBufferDirect(Z,O,W,X,S,Ee),X.side=jt):C.renderBufferDirect(Z,O,W,X,S,Ee),S.onAfterRender(C,O,Z,W,X,Ee)}function Xa(S,O,Z){O.isScene!==!0&&(O=Be);let W=q.get(S),X=b.state.lights,Ee=b.state.shadowsArray,Ae=X.state.version,be=_e.getParameters(S,X.state,Ee,O,Z,b.state.lightProbeGridArray),Ce=_e.getProgramCacheKey(be),Ie=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let et=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=ue.get(S.envMap||W.environment,et),W.envMapRotation=W.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",$n),Ie=new Map,W.programs=Ie);let rt=Ie.get(Ce);if(rt!==void 0){if(W.currentProgram===rt&&W.lightsStateVersion===Ae)return Iu(S,be),rt}else be.uniforms=_e.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,Z,be),S.onBeforeCompile(be,C),rt=_e.acquireProgram(be,Ce),Ie.set(Ce,rt),W.uniforms=be.uniforms;let Re=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=Fe.uniform),Iu(S,be),W.needsLights=Pp(S),W.lightsStateVersion=Ae,W.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.sunLights.value=X.state.sun,Re.sunLightShadows.value=X.state.sunShadow,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.sunShadowMatrix.value=X.state.sunShadowMatrix,Re.sunShadowCascade.value=X.state.sunShadowCascade,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=rt,W.uniformsList=null,rt}function Pu(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=fr.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Iu(S,O){let Z=q.get(S);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function Ap(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let Z=0,W=S.length;Z<W;Z++){let X=S[Z];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function Cp(S,O,Z,W,X){O.isScene!==!0&&(O=Be),Q.resetTextureUnits();let Ee=O.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,be=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:it.workingColorSpace,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ie=ue.get(W.envMap||Ae,Ce),et=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,rt=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Lt=!!Z.morphAttributes.color,bt=Vn;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(bt=C.toneMapping);let yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Jt=yt!==void 0?yt.length:0,we=q.get(W),nn=b.state.lights;if(ae===!0&&(oe===!0||S!==J)){let St=S===J&&W.id===V;Fe.setState(W,S,St)}let lt=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==nn.state.version||we.outputColorSpace!==be||X.isBatchedMesh&&we.batching===!1||!X.isBatchedMesh&&we.batching===!0||X.isBatchedMesh&&we.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&we.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&we.instancing===!1||!X.isInstancedMesh&&we.instancing===!0||X.isSkinnedMesh&&we.skinning===!1||!X.isSkinnedMesh&&we.skinning===!0||X.isInstancedMesh&&we.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&we.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&we.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&we.instancingMorph===!1&&X.morphTexture!==null||we.envMap!==Ie||W.fog===!0&&we.fog!==Ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Fe.numPlanes||we.numIntersection!==Fe.numIntersection)||we.vertexAlphas!==et||we.vertexTangents!==rt||we.morphTargets!==Re||we.morphNormals!==dt||we.morphColors!==Lt||we.toneMapping!==bt||we.morphTargetsCount!==Jt||!!we.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,we.__version=W.version);let Tn=we.currentProgram;lt===!0&&(Tn=Xa(W,O,X),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Tn,we));let Qn=!1,bi=!1,Es=!1,_t=Tn.getUniforms(),Pt=we.uniforms;if(_.useProgram(Tn.program)&&(Qn=!0,bi=!0,Es=!0),W.id!==V&&(V=W.id,bi=!0),we.needsLights){let St=Ap(b.state.lightProbeGridArray,X);we.lightProbeGrid!==St&&(we.lightProbeGrid=St,bi=!0)}if(Qn||J!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_t.setValue(D,"projectionMatrix",S.projectionMatrix),_t.setValue(D,"viewMatrix",S.matrixWorldInverse);let Ti=_t.map.cameraPosition;Ti!==void 0&&Ti.setValue(D,pe.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,bi=!0,Es=!0)}if(we.needsLights&&(nn.state.sunShadowMap.length>0&&_t.setValue(D,"sunShadowMap",nn.state.sunShadowMap,Q),nn.state.directionalShadowMap.length>0&&_t.setValue(D,"directionalShadowMap",nn.state.directionalShadowMap,Q),nn.state.spotShadowMap.length>0&&_t.setValue(D,"spotShadowMap",nn.state.spotShadowMap,Q),nn.state.pointShadowMap.length>0&&_t.setValue(D,"pointShadowMap",nn.state.pointShadowMap,Q)),X.isSkinnedMesh){_t.setOptional(D,X,"bindMatrix"),_t.setOptional(D,X,"bindMatrixInverse");let St=X.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),_t.setValue(D,"boneTexture",St.boneTexture,Q))}X.isBatchedMesh&&(_t.setOptional(D,X,"batchingTexture"),_t.setValue(D,"batchingTexture",X._matricesTexture,Q),_t.setOptional(D,X,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",X._indirectTexture,Q),_t.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",X._colorsTexture,Q));let Ei=Z.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&z.update(X,Z,Tn),(bi||we.receiveShadow!==X.receiveShadow)&&(we.receiveShadow=X.receiveShadow,_t.setValue(D,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Wv()),bi){if(_t.setValue(D,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&Rp(Pt,Es),Ee&&W.fog===!0&&Ue.refreshFogUniforms(Pt,Ee),Ue.refreshMaterialUniforms(Pt,W,ee,K,b.state.transmissionRenderTarget[S.id]),we.needsLights&&we.lightProbeGrid){let St=we.lightProbeGrid;Pt.probesSH.value=St.texture,Pt.probesMin.value.copy(St.boundingBox.min),Pt.probesMax.value.copy(St.boundingBox.max),Pt.probesResolution.value.copy(St.resolution)}fr.upload(D,Pu(we),Pt,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fr.upload(D,Pu(we),Pt,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(D,"center",X.center),_t.setValue(D,"modelViewMatrix",X.modelViewMatrix),_t.setValue(D,"normalMatrix",X.normalMatrix),_t.setValue(D,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let St=W.uniformsGroups;for(let Ti=0,Ts=St.length;Ti<Ts;Ti++){let Du=St[Ti];re.update(Du,Tn),re.bind(Du,Tn)}}return Tn}function Rp(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Pp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(S,O,Z){let W=q.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=O,q.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let Z=q.get(S);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,Z=0){Y=S,L=O,B=Z;let W=null,X=!1,Ee=!1;if(S){let be=q.get(S);if(be.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,be.__webglFramebuffer),$.copy(S.viewport),he.copy(S.scissor),de=S.scissorTest,_.viewport($),_.scissor(he),_.setScissorTest(de),V=-1;return}else if(be.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(be.__hasExternalTextures)Q.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let et=S.depthTexture;if(be.__boundDepthTexture!==et){if(et!==null&&q.has(et)&&(S.width!==et.image.width||S.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}let Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let Ie=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?W=Ie[O][Z]:W=Ie[O],X=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?W=q.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?W=Ie[Z]:W=Ie,$.copy(S.viewport),he.copy(S.scissor),de=S.scissorTest}else $.copy(me).multiplyScalar(ee).floor(),he.copy(ke).multiplyScalar(ee).floor(),de=ot;if(Z!==0&&(W=G),_.bindFramebuffer(D.FRAMEBUFFER,W)&&_.drawBuffers(S,W),_.viewport($),_.scissor(he),_.setScissorTest(de),X){let be=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,Z)}else if(Ee){let be=O;for(let Ce=0;Ce<S.textures.length;Ce++){let Ie=q.get(S.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,Z,be)}}else if(S!==null&&Z!==0){let be=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,Z)}V=-1};function Lu(S){let O=q.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=A.textureFormatReadable(S.format),O.__typeReadable=A.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,Z,W,X,Ee,Ae,be=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){_.bindFramebuffer(D.FRAMEBUFFER,Ce);try{let Ie=S.textures[be],et=Ie.format,rt=Ie.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);let Re=Lu(Ie);if(Re.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-W&&Z>=0&&Z<=S.height-X&&D.readPixels(O,Z,W,X,ye.convert(et),ye.convert(rt),Ee)}finally{let Ie=Y!==null?q.get(Y).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,O,Z,W,X,Ee,Ae,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if(O>=0&&O<=S.width-W&&Z>=0&&Z<=S.height-X){_.bindFramebuffer(D.FRAMEBUFFER,Ce);let Ie=S.textures[be],et=Ie.format,rt=Ie.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);let Re=Lu(Ie);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.bufferData(D.PIXEL_PACK_BUFFER,Ee.byteLength,D.STREAM_READ),D.readPixels(O,Z,W,X,ye.convert(et),ye.convert(rt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Lt=Y!==null?q.get(Y).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Lt);let bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jd(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ee),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(dt),D.deleteSync(bt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,Z=0){let W=Math.pow(2,-Z),X=Math.floor(S.image.width*W),Ee=Math.floor(S.image.height*W),Ae=O!==null?O.x:0,be=O!==null?O.y:0;Q.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Ae,be,X,Ee),_.unbindTexture()},this.copyTextureToTexture=function(S,O,Z=null,W=null,X=0,Ee=0){let Ae,be,Ce,Ie,et,rt,Re,dt,Lt,bt=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if(Z!==null)Ae=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Ie=Z.min.x,et=Z.min.y,rt=Z.isBox3?Z.min.z:0;else{let Pt=Math.pow(2,-X);Ae=Math.floor(bt.width*Pt),be=Math.floor(bt.height*Pt),S.isDataArrayTexture?Ce=bt.depth:S.isData3DTexture?Ce=Math.floor(bt.depth*Pt):Ce=1,Ie=0,et=0,rt=0}W!==null?(Re=W.x,dt=W.y,Lt=W.z):(Re=0,dt=0,Lt=0);let yt=ye.convert(O.format),Jt=ye.convert(O.type),we;O.isData3DTexture?(Q.setTexture3D(O,0),we=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),we=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),we=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let nn=_.getParameter(D.UNPACK_ROW_LENGTH),lt=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=_.getParameter(D.UNPACK_SKIP_PIXELS),Qn=_.getParameter(D.UNPACK_SKIP_ROWS),bi=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),_.pixelStorei(D.UNPACK_SKIP_ROWS,et),_.pixelStorei(D.UNPACK_SKIP_IMAGES,rt);let Es=S.isDataArrayTexture||S.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Pt=q.get(S),Ei=q.get(O),St=q.get(Pt.__renderTarget),Ti=q.get(Ei.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,St.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ts=0;Ts<Ce;Ts++)Es&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(S).__webglTexture,X,rt+Ts),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(O).__webglTexture,Ee,Lt+Ts)),D.blitFramebuffer(Ie,et,Ae,be,Re,dt,Ae,be,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||q.has(S)){let Pt=q.get(S),Ei=q.get(O);_.bindFramebuffer(D.READ_FRAMEBUFFER,U),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let St=0;St<Ce;St++)Es?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,X,rt+St):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,X),_t?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ei.__webglTexture,Ee,Lt+St):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ei.__webglTexture,Ee),X!==0?D.blitFramebuffer(Ie,et,Ae,be,Re,dt,Ae,be,D.COLOR_BUFFER_BIT,D.NEAREST):_t?D.copyTexSubImage3D(we,Ee,Re,dt,Lt+St,Ie,et,Ae,be):D.copyTexSubImage2D(we,Ee,Re,dt,Ie,et,Ae,be);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _t?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(we,Ee,Re,dt,Lt,Ae,be,Ce,yt,Jt,bt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(we,Ee,Re,dt,Lt,Ae,be,Ce,yt,bt.data):D.texSubImage3D(we,Ee,Re,dt,Lt,Ae,be,Ce,yt,Jt,bt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ee,Re,dt,Ae,be,yt,Jt,bt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ee,Re,dt,bt.width,bt.height,yt,bt.data):D.texSubImage2D(D.TEXTURE_2D,Ee,Re,dt,Ae,be,yt,Jt,bt);_.pixelStorei(D.UNPACK_ROW_LENGTH,nn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),_.pixelStorei(D.UNPACK_SKIP_ROWS,Qn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,bi),Ee===0&&O.generateMipmaps&&D.generateMipmap(we),_.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){L=0,B=0,Y=null,_.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xv=new zi(-1,1,1,-1,0,1),su=class extends ft{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},qv=new su,Xi=class{constructor(e){this._mesh=new ge(qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sc=class extends yn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vi.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rc=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ac=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sc(mr),this.copyPass.material.blending=Rn,this.timer=new fa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(a instanceof Na?n=!0:a instanceof rc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oc=class extends yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Bf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var gr=class i extends yn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:Zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ut(r,a,{type:Zt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ut(r,a,{type:Zt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Bf;this.highPassUniforms=vi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vi.clone(mr.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,premultipliedAlpha:!0,blending:Gn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new an,this._fsQuad=new Xi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new mt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};gr.BlurDirectionX=new ie(1,0);gr.BlurDirectionY=new ie(0,1);var Ua={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var lc=class extends yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=vi.clone(Ua.uniforms),this.material=new ir({name:Ua.name,uniforms:this.uniforms,vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ma?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===va?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vs={low:{dpr:1,shadows:!1,bloom:.8,parts:.45},mid:{dpr:1.25,shadows:!1,bloom:1,parts:.7},high:{dpr:1.6,shadows:!0,shadowSize:1024,bloom:1,parts:1},ultra:{dpr:2,shadows:!0,shadowSize:2048,bloom:1,parts:1.3}};function ys(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var yi=(i,e)=>{let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]},_r=(i,e=!0,t)=>{let n=new gn(i);return e&&(n.colorSpace=Vt),t&&(n.wrapS=n.wrapT=Xs,n.repeat.set(...t)),n.anisotropy=4,n};function Yv(){let[i,e]=yi(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new gn(i)}function Zv(){let[i,e]=yi(256,256),t=ys(5);for(let n=0;n<26;n++){let s=128+(t()-.5)*110,r=128+(t()-.5)*110,a=30+t()*60,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,256,256)}return new gn(i)}function Kv(){let[i,e]=yi(64,128),t=e.createRadialGradient(32,84,2,32,72,50);return t.addColorStop(0,"rgba(255,236,190,1)"),t.addColorStop(.25,"rgba(255,185,80,.95)"),t.addColorStop(.6,"rgba(255,110,20,.45)"),t.addColorStop(1,"rgba(255,60,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,4),e.quadraticCurveTo(62,70,32,124),e.quadraticCurveTo(2,70,32,4),e.fill(),new gn(i)}function Jv(i){let[e,t]=yi(1024,1024),n=ys(i);t.fillStyle="#2b2733",t.fillRect(0,0,1024,1024);let s=64;for(let r=0,a=0;r<1024;r+=s,a++){let o=a%2?-60:0;for(;o<1024;){let l=90+n()*80,c=30+n()*22;t.fillStyle=`hsl(${255+n()*20},${8+n()*8}%,${c*.55}%)`,t.fillRect(o+3,r+3,l-6,s-6);for(let h=0;h<40;h++)t.fillStyle=`rgba(${n()<.5?"0,0,0":"255,255,255"},${n()*.06})`,t.fillRect(o+n()*l,r+n()*s,2+n()*10,1+n()*4);o+=l}}for(let r=0;r<60;r++){t.strokeStyle=`rgba(0,0,0,${.1+n()*.15})`,t.lineWidth=1,t.beginPath();let a=n()*1024,o=n()*1024;t.moveTo(a,o);for(let l=0;l<5;l++)a+=(n()-.5)*40,o+=n()*30,t.lineTo(a,o);t.stroke()}return _r(e,!0,[3,1.6])}function $v(i){let[e,t]=yi(1024,1024),n=ys(i);t.fillStyle="#2a1a12",t.fillRect(0,0,1024,1024);for(let s=0;s<1024;s+=64){let r=-n()*300;for(;r<1024;){let a=200+n()*300,o=14+n()*8;t.fillStyle=`hsl(${20+n()*8},${35+n()*10}%,${o}%)`,t.fillRect(s+1,r+1,62,a-2);for(let l=0;l<14;l++){t.strokeStyle=`rgba(0,0,0,${.08+n()*.12})`,t.beginPath();let c=s+4+n()*56;t.moveTo(c,r),t.bezierCurveTo(c+(n()-.5)*10,r+a*.3,c+(n()-.5)*10,r+a*.6,c,r+a),t.stroke()}r+=a}}return _r(e,!0,[6,6])}function Qv(){let[i,e]=yi(1024,1024);e.fillStyle="#3a0d14",e.fillRect(0,0,1024,1024),e.translate(512,512);for(let t=0;t<6;t++){let n=500-t*70;e.strokeStyle=t%2?"rgba(200,150,70,.55)":"rgba(30,10,40,.8)",e.lineWidth=t%2?10:26,e.beginPath(),e.arc(0,0,n,0,7),e.stroke()}for(let t=0;t<16;t++)e.save(),e.rotate(t*Math.PI/8),e.fillStyle="rgba(190,140,60,.5)",e.beginPath(),e.moveTo(0,-140),e.quadraticCurveTo(40,-230,0,-330),e.quadraticCurveTo(-40,-230,0,-140),e.fill(),e.fillStyle="rgba(20,40,60,.6)",e.beginPath(),e.arc(0,-400,16,0,7),e.fill(),e.restore();return e.fillStyle="rgba(200,150,70,.6)",e.beginPath(),e.arc(0,0,60,0,7),e.fill(),_r(i)}function jv(i){let[e,t]=yi(256,640),n=ys(i),s=["#2a3a8a","#4a2a8a","#6a1a3a","#1a5a6a","#8a5a1a","#3a1a6a","#20306a","#5a1a5a"];t.fillStyle="#101020",t.fillRect(0,0,256,640);for(let a=120;a<640;a+=40)for(let o=0;o<256;o+=32)t.fillStyle=s[Math.floor(n()*s.length)],t.beginPath(),t.moveTo(o+n()*6,a+n()*6),t.lineTo(o+32-n()*6,a+n()*6),t.lineTo(o+32-n()*6,a+40-n()*6),t.lineTo(o+n()*6,a+40-n()*6),t.fill();t.save(),t.translate(128,110);for(let a=0;a<8;a++)t.rotate(Math.PI/4),t.fillStyle=a%2?"#8a2a4a":"#3a4aa0",t.beginPath(),t.ellipse(0,-45,18,42,0,0,7),t.fill();t.fillStyle="#c08a2a",t.beginPath(),t.arc(0,0,22,0,7),t.fill(),t.restore(),t.strokeStyle="#0a0a10",t.lineWidth=5;for(let a=160;a<640;a+=40)t.beginPath(),t.moveTo(0,a),t.lineTo(256,a),t.stroke();for(let a=32;a<256;a+=32)t.beginPath(),t.moveTo(a,150),t.lineTo(a,640),t.stroke();t.beginPath(),t.arc(128,110,96,0,7),t.stroke(),t.lineWidth=10,t.strokeRect(0,0,256,640);let r=t.createLinearGradient(0,0,0,640);return r.addColorStop(0,"rgba(255,255,255,.08)"),r.addColorStop(1,"rgba(0,0,0,.25)"),t.fillStyle=r,t.fillRect(0,0,256,640),_r(e)}function ey(i,e){let[t,n]=yi(256,320),s=ys(i),r=n.createRadialGradient(128,120,10,128,160,220);r.addColorStop(0,["#3a3020","#20302a","#302030"][e]),r.addColorStop(1,"#0c0a08"),n.fillStyle=r,n.fillRect(0,0,256,320),n.fillStyle=["#1a1418","#141a20","#20141a"][e],n.beginPath(),n.moveTo(30,320),n.quadraticCurveTo(50,200,128,190),n.quadraticCurveTo(206,200,226,320),n.fill(),n.fillStyle="#d8d0c0",n.beginPath(),n.moveTo(108,200),n.lineTo(128,240),n.lineTo(148,200),n.fill(),n.fillStyle=["#c8b090","#b8b0a0","#c0a8a0"][e],n.beginPath(),n.ellipse(128,130,44,58,0,0,7),n.fill(),n.fillStyle="rgba(80,50,40,.35)",n.beginPath(),n.ellipse(128,160,30,22,0,0,Math.PI),n.fill(),n.fillStyle=["#2a1a10","#d0d0d0","#3a2018"][e],n.beginPath(),e===1?(n.ellipse(128,86,58,30,0,Math.PI,0),n.ellipse(80,120,16,40,0,0,7),n.ellipse(176,120,16,40,0,0,7)):n.ellipse(128,84,50,28,0,Math.PI,0),n.fill(),n.fillStyle="#1a0e0a",n.beginPath(),n.ellipse(110,124,11,7,0,0,7),n.ellipse(146,124,11,7,0,0,7),n.fill(),n.strokeStyle="rgba(60,20,20,.7)",n.lineWidth=2.5,n.beginPath(),n.moveTo(114,166),n.quadraticCurveTo(128,162+(e===2?6:-2),142,166),n.stroke();for(let a=0;a<3e3;a++)n.fillStyle=`rgba(${s()<.5?"0,0,0":"255,230,200"},${s()*.05})`,n.fillRect(s()*256,s()*320,2,2);return _r(t)}function ty(i){let[e,t]=yi(128,160),n=ys(i);t.fillStyle="#e6dcc4",t.fillRect(0,0,128,160),t.fillStyle="rgba(120,90,50,.25)",t.fillRect(0,0,128,160),t.strokeStyle="#3a2a1a",t.lineWidth=1;for(let s=0;s<6;s++){let r=18+s*23;for(let a=0;a<5;a++)t.beginPath(),t.moveTo(8,r+a*3),t.lineTo(120,r+a*3),t.stroke();t.fillStyle="#2a1a10";for(let a=0;a<7;a++){let o=18+a*14+n()*4,l=r+Math.floor(n()*9)*1.5;t.beginPath(),t.ellipse(o,l,2.6,2,-.4,0,7),t.fill(),t.fillRect(o+2,l-10,1,10)}}return _r(e)}function kf(i,e,t=8){let n={scene:new Zr,soft:Yv(),smokeTex:Zv(),flameTex:Kv(),flames:[],eyes:[],sheets:[],dust:null,t:0},s=n.scene;s.background=new Ne("#07060d"),s.fog=new Yr("#0c0a16",.045);let r=ys(t),a=new ge(new Ft(14,14),new gt({map:$v(t),roughness:.55,metalness:0}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,s.add(a);let o=new ge(new ta(2.6,64),new gt({map:Qv(),roughness:.95}));o.rotation.x=-Math.PI/2,o.position.set(0,.005,-.2),o.receiveShadow=!0,s.add(o);let l=Jv(t+1),c=new gt({map:l,roughness:.92,color:"#9a94a8"}),h=new ge(new Ft(14,7.5),c);h.position.set(0,3.75,-6),h.receiveShadow=!0,s.add(h);for(let L of[-1,1]){let B=new ge(new Ft(12,7.5),c);B.position.set(L*6.5,3.75,-.5),B.rotation.y=-L*Math.PI/2,B.receiveShadow=!0,s.add(B)}let f=new ge(new Ft(14,12),new gt({color:"#141018",roughness:1}));f.rotation.x=Math.PI/2,f.position.set(0,7.2,-.5),s.add(f);let u=new gt({color:"#1e140e",roughness:.8});for(let L=0;L<5;L++){let B=new ge(new wt(13,.3,.35),u);B.position.set(0,7,-5+L*2.4),s.add(B)}n.glassMats=[];let d=(L,B)=>{let Y=new ai;return Y.moveTo(-L/2,0),Y.lineTo(L/2,0),Y.lineTo(L/2,B-L*.62),Y.quadraticCurveTo(L/2,B-L*.1,0,B),Y.quadraticCurveTo(-L/2,B-L*.1,-L/2,B-L*.62),Y.closePath(),Y},g=new gt({color:"#4a4452",roughness:.85});n.shafts=[],[-3.2,0,3.2].forEach((L,B)=>{let Y=B===1,V=Y?1.7:1.3,J=Y?4.2:3.4,$=Y?1.9:2.3,he=new gt({map:jv(t+10+B),emissive:"#ffffff",emissiveMap:null,emissiveIntensity:0,roughness:.4});he.emissiveMap=he.map,he.emissiveIntensity=.55,n.glassMats.push(he);let de=new Ui(d(V,J),24);{let le=de.attributes.position,De=de.attributes.uv;for(let me=0;me<le.count;me++)De.setXY(me,le.getX(me)/V+.5,le.getY(me)/J)}let je=new ge(de,he);je.position.set(L,$,-5.97),s.add(je);let Je=new ge(new oi((()=>{let le=d(V+.36,J+.3);return le.holes.push(d(V,J)),le})(),{depth:.25,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2,curveSegments:24}),g);Je.position.set(L,$-.15,-6.02),Je.castShadow=!1,s.add(Je);for(let le=1;le<3;le++){let De=new ge(new wt(.05,J*.78,.06),g);De.position.set(L-V/2+le*V/3,$+J*.39,-5.94),s.add(De)}let qe=new _n(V*.45,V*.9,7,24,1,!0);qe.translate(0,-3.5,0);let K=new mt({transparent:!0,depthWrite:!1,blending:Gn,side:jt,uniforms:{uA:{value:.05},uT:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uA; uniform float uT; varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 1.6); float fade = smoothstep(0., .25, vUv.y) * smoothstep(1., .55, vUv.y); float n = .75 + .25 * sin(vUv.x * 40. + uT * .5); gl_FragColor = vec4(vec3(.55,.62,1.) * uA * edge * fade * n, 1.); }"}),ee=new ge(qe,K);if(ee.position.set(L,$+J*.55,-5.8),ee.rotation.x=-.62,s.add(ee),n.shafts.push(ee),Y)for(let le of[-1,1]){let De=new Ft(1.1,6.2,24,1),me=De.attributes.position;for(let ot=0;ot<me.count;ot++)me.setZ(ot,Math.sin(me.getX(ot)*18)*.07);De.computeVertexNormals();let ke=new ge(De,new gt({color:"#4a0a18",roughness:.75,side:jt}));ke.position.set(L+le*(V/2+.55),3.4,-5.75),s.add(ke)}});for(let L of[-4.8,-1.6,1.6,4.8]){let B=new ge(new wt(.5,7.2,.4),g);B.position.set(L,3.6,-5.85),B.receiveShadow=!0,s.add(B)}let y=new gt({color:"#8a6a2a",roughness:.38,metalness:.85}),m=new gt({color:"#d8d2c0",roughness:.35,emissive:"#302a20",emissiveIntensity:.4}),p=new gt({color:"#0a0604",roughness:.3});[[-6.45,2.9,-2.6,1],[-6.45,2.9,1,0],[6.45,2.9,-2.6,2],[6.45,2.9,1,1]].forEach(([L,B,Y,V],J)=>{let $=new Rt;$.position.set(L,B,Y),$.rotation.y=L<0?Math.PI/2:-Math.PI/2,s.add($);let he=1.2,de=1.5,je=new ge(new Ft(he,de),new gt({map:ey(t+30+J,V),roughness:.7}));je.position.z=.04,$.add(je);let Je=new ge(new oi((()=>{let qe=new ai;qe.moveTo(-he/2-.14,-de/2-.14),qe.lineTo(he/2+.14,-de/2-.14),qe.lineTo(he/2+.14,de/2+.14),qe.lineTo(-he/2-.14,de/2+.14);let K=new ri;return K.moveTo(-he/2,-de/2),K.lineTo(-he/2,de/2),K.lineTo(he/2,de/2),K.lineTo(he/2,-de/2),qe.holes.push(K),qe})(),{depth:.06,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:3}),y);$.add(Je);for(let qe of[-1,1]){let K=new Rt;K.position.set(qe*18/256*he,de/2-124/320*de,.045);let ee=new ge(new Cn(.034,16,12),m);ee.scale.z=.6,K.add(ee);let le=new ge(new Cn(.017,12,8),p);le.position.z=.021,K.add(le),$.add(K),n.eyes.push(K)}});let M=new gt({color:"#6a5020",roughness:.4,metalness:.8}),w=new gt({color:"#e8dcc0",roughness:.7,emissive:"#5a3a10",emissiveIntensity:.25}),v=()=>new Di({map:n.flameTex,color:"#ffd9a0",transparent:!0,depthWrite:!1,blending:Gn,opacity:.85}),E=(L,B,Y,V,J=1)=>{let $=new ge(new _n(.022*J,.024*J,.2*J,10),w);$.position.set(B,Y+.1*J,V),L.add($);let he=new ss(v());return he.scale.set(.05*J,.11*J,1),he.position.set(B,Y+.25*J,V),L.add(he),n.flames.push({s:he,b:.05*J,h:.11*J,ph:r()*10}),he};n.cLights=[];for(let L of[-1,1]){let B=new Rt;B.position.set(L*2.4,0,-.9),s.add(B);let Y=[[0,0],[.22,.02],[.12,.08],[.05,.2],[.04,1.2],[.08,1.25],[.03,1.32],[.03,1.5],[.06,1.55],[0,1.58]].map(([$,he])=>new ie($,he)),V=new ge(new cs(Y,20),M);V.castShadow=!0,B.add(V);for(let $=-2;$<=2;$++){let he=$*.14,de=new ge(new hs(Math.abs(he)/2||.01,.012,6,16,Math.PI),M);$&&(de.position.set(he/2,1.48,0),de.rotation.z=Math.PI,B.add(de));let je=new ge(new _n(.04,.02,.04,12),M);je.position.set(he,$?1.48:1.58,0),B.add(je),E(B,he,$?1.5:1.6,0,1.2)}let J=new ar("#ffae5a",3.2,7,1.7);J.position.set(L*2.4,1.95,-.9),s.add(J),n.cLights.push(J)}n.chand=new Rt,n.chand.position.set(0,7,-1),s.add(n.chand),n.chandSwing={a:0,v:0,b:0,bv:0};let b=new ge(new _n(.012,.012,2.2,6),M);b.position.y=-1.1,n.chand.add(b);let I=new ge(new hs(.75,.03,8,48),M);I.rotation.x=Math.PI/2,I.position.y=-2.4,n.chand.add(I);let x=new ge(new hs(.4,.025,8,36),M);x.rotation.x=Math.PI/2,x.position.y=-2.15,n.chand.add(x);for(let L=0;L<4;L++){let B=new ge(new _n(.008,.008,.82,5),M);B.position.set(Math.cos(L*Math.PI/2)*.37,-2,Math.sin(L*Math.PI/2)*.37),B.rotation.set(Math.sin(L*Math.PI/2)*.5,0,-Math.cos(L*Math.PI/2)*.5),n.chand.add(B)}let T=new us({color:"#cfd8ff",roughness:.1,metalness:0,transmission:0,transparent:!0,opacity:.55,emissive:"#4a4a70",emissiveIntensity:.3});n.crystals=[];for(let L=0;L<10;L++){let B=L/10*Math.PI*2;E(n.chand,Math.cos(B)*.75,-2.38,Math.sin(B)*.75,1);let Y=new ge(new nr(.04),T);Y.scale.y=1.8,Y.position.set(Math.cos(B+.3)*.7,-2.55,Math.sin(B+.3)*.7),n.chand.add(Y),n.crystals.push(Y)}let C=new ge(new nr(.08),T);C.scale.y=2,C.position.y=-2.75,n.chand.add(C),n.chandLight=new ar("#ffb870",4,9,1.6),n.chandLight.position.y=-2.3,n.chand.add(n.chandLight);let N=[0,1,2].map(L=>new gt({map:ty(t+50+L),side:jt,roughness:.9,emissive:"#2a2010",emissiveIntensity:.25}));for(let L=0;L<Math.round(9*(e.parts||1))+3;L++){let B=new Ft(.21,.28,4,1),Y=new ge(B,N[L%3]),V={m:Y,base:new P((r()-.5)*7,2.3+r()*2.2,-4.6+r()*3.4),ph:r()*10,sp:.3+r()*.4,lift:0};Y.position.copy(V.base),Y.castShadow=!1,s.add(Y),n.sheets.push(V)}let k=Math.round(380*(e.parts||1)),G=new Float32Array(k*3);for(let L=0;L<k;L++)G[L*3]=(r()-.5)*10,G[L*3+1]=r()*6,G[L*3+2]=-5.5+r()*7;let U=new ft;U.setAttribute("position",new Nt(G,3)),n.dust=new as(U,new js({map:n.soft,color:"#b8b8ff",size:.04,transparent:!0,opacity:.45,depthWrite:!1,blending:Gn})),s.add(n.dust),n.hemi=new ha("#5a5a9a","#1a1010",.55),s.add(n.hemi),n.moon=new da("#8f9cff",1.5),n.moon.position.set(-1.5,6,-8),n.moon.target.position.set(0,0,0),s.add(n.moon,n.moon.target),n.moon.shadow.camera.left=-4,n.moon.shadow.camera.right=4,n.moon.shadow.camera.top=4,n.moon.shadow.camera.bottom=-4,n.moon.shadow.camera.far=20,n.moon.shadow.bias=-6e-4,n.moon.shadow.normalBias=.02,n.key=new rr("#ffd6a8",13,7.5,.55,.7,1.6),n.key.position.set(.3,3.4,2.6),n.key.target.position.set(0,.8,.4),s.add(n.key,n.key.target);let F=new rr("#9ab0ff",7,8,.6,.8,1.4);return F.position.set(-2.2,3.2,-2.4),F.target.position.set(0,.9,.2),s.add(F,F.target),n.flash=0,n.react=0,n}var zf=new P;function Hf(i,e,t,n){i.t=e;for(let l of i.flames){let c=1+Math.sin(e*9+l.ph)*.07+Math.sin(e*23+l.ph*2)*.05+i.react*.35;l.s.scale.set(l.b*(1+i.react*.15),l.h*c,1)}let s=1+Math.sin(e*7.3)*.06+Math.sin(e*17.1)*.04;for(let l of i.cLights)l.intensity=3.2*s*(1+i.react*.5);let r=i.chandSwing;r.v+=(-r.a*1.9-r.v*.25)*t,r.a+=r.v*t,r.bv+=(-r.b*1.9-r.bv*.25)*t,r.b+=r.bv*t,i.chand.rotation.z=r.a,i.chand.rotation.x=r.b,i.chandLight.intensity=4*s*(1+i.react*.4);for(let[l,c]of i.crystals.entries())c.rotation.y=e*.6+l;i.flash=Math.max(0,i.flash-t*2.2);let a=i.flash>0?i.flash*(.6+.4*Math.sin(e*60)):0;for(let l of i.glassMats)l.emissiveIntensity=.5+i.react*.25+a*.9;i.moon.intensity=1.5+a*2.2,i.hemi.intensity=.55+a*.5;for(let l of i.shafts)l.material.uniforms.uA.value=.05+i.react*.02+a*.05,l.material.uniforms.uT.value=e;i.react=Math.max(0,i.react-t*1.5);for(let l of i.sheets){l.lift=Math.max(0,l.lift-t*.25);let c=l.base.y+Math.sin(e*l.sp+l.ph)*.15+l.lift*1.2;l.m.position.set(l.base.x+Math.sin(e*l.sp*.7+l.ph)*.3,c,l.base.z+Math.cos(e*l.sp*.5+l.ph)*.2),l.m.rotation.set(Math.sin(e*.4+l.ph)*.4,e*l.sp*.3+l.ph+l.lift*6,Math.sin(e*.3+l.ph)*.3);let h=l.m.geometry.attributes.position;for(let f=0;f<h.count;f++)h.setZ(f,Math.sin(h.getX(f)*18+e*3+l.ph)*.012);h.needsUpdate=!0}let o=i.dust.geometry.attributes.position;for(let l=0;l<o.count;l++){let c=o.getY(l)+t*(.03+l%7*.006)*(1+i.react*3);c>6&&(c=0),o.setY(l,c),o.setX(l,o.getX(l)+Math.sin(e*.3+l)*t*.02)}if(o.needsUpdate=!0,n)for(let l of i.eyes){l.parent.updateMatrixWorld(),l.getWorldPosition(zf);let c=n.clone().sub(zf),h=l.parent.getWorldQuaternion(new An).invert();c.applyQuaternion(h).normalize(),l.rotation.set(-Math.asin(Ra.clamp(c.y,-.6,.6))*.9,Math.atan2(c.x,c.z)*.9,0)}}function ru(i,e){i.chandSwing.v+=(Math.random()<.5?-1:1)*.06*e,i.chandSwing.bv+=(Math.random()-.5)*.05*e}function Gf(i,e){for(let t of i.sheets)Math.random()<.5&&(t.lift=Math.min(1.5,t.lift+e))}var In=.74,qn=1,Ms=.15,Oa=.0235,au=i=>[1,3,6,8,10].includes(i%12);function Ss(i){let e=0;for(let n=21;n<i;n++)au(n)||e++;let t=(e-25.5)*Oa;return au(i)?t-Oa/2:t}var Mi=i=>{let e=/^([A-G])(#|b)?(-?\d)$/.exec(i),t={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[e[1]]+(e[2]==="#"?1:e[2]==="b"?-1:0);return 12*(+e[3]+1)+t};function Fa(){let i=new ai;return i.moveTo(-.78,.86),i.lineTo(.78,.86),i.lineTo(.78,.25),i.bezierCurveTo(.78,-.15,.25,-.25,.1,-.75),i.bezierCurveTo(-.02,-1.15,-.25,-1.32,-.5,-1.32),i.bezierCurveTo(-.7,-1.32,-.78,-1.2,-.78,-1),i.closePath(),i}function Vf(i,e){let t={group:new Rt,keys:{},hammers:{},press:{},ghost:[]};i.add(t.group);let n=new us({color:"#08080b",roughness:.32,metalness:.1,clearcoat:.55,clearcoatRoughness:.35}),s=new gt({color:"#9a7a34",roughness:.42,metalness:.85}),r=new gt({color:"#7a5030",roughness:.6}),a=new gt({color:"#7a1a1a",roughness:.95}),o=Fa(),l=new ri(o.getPoints(64).map(F=>new ie(F.x*.965,F.y*.975-.012)).reverse());o.holes.push(l);let c=new ge(new oi(o,{depth:.3,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2,curveSegments:48}),n);c.rotation.x=Math.PI/2,c.position.y=.88,c.castShadow=!0,c.receiveShadow=!0,t.group.add(c);let h=new ge(new Ui(Fa(),48),n);h.rotation.x=Math.PI/2,h.position.y=.58,t.group.add(h);let f=new gt({color:"#b08048",roughness:.65,side:jt}),u=new ge(new Ui(Fa(),48),f);u.rotation.x=Math.PI/2,u.scale.set(.95,.97,1),u.position.y=.66,u.receiveShadow=!0,t.group.add(u);let d=Fa();for(let[F,L,B]of[[.35,.05,.11],[.05,-.4,.09],[-.3,-.8,.1],[-.5,.1,.12],[.45,.5,.08]]){let Y=new ri;Y.absarc(F,-L,B,0,Math.PI*2,!0),d.holes.push(Y)}let g=new ge(new oi(d,{depth:.015,bevelEnabled:!1,curveSegments:40}),s);g.rotation.x=Math.PI/2,g.scale.set(.9,.93,1),g.position.set(0,.715,0),g.receiveShadow=!0,t.group.add(g);let y=[];for(let F=0;F<88;F++){let L=-.7+F/87*1.42,B=.45+(1-F/87)*1.55,Y=Math.max(-1.25,.62-B),V=L+(1-F/87)*.12;y.push(L,.73,.62,V,.73,Y<-.75+L*.9&&L>.1?-.75+L*.9:Y)}let m=new ft;m.setAttribute("position",new Ye(y,3)),t.strings=new Qr(m,new Qs({color:"#c8b080",transparent:!0,opacity:.75})),t.group.add(t.strings);let p=new ge(new wt(1.5,.03,.14),r);p.position.set(0,.72,.7),t.group.add(p);let M=new ge(new wt(1.62,.06,.32),n);M.position.set(0,In-.045,qn-.13),M.castShadow=!0,t.group.add(M);let w=new ge(new wt(1.62,.05,.02),n);w.position.set(0,In-.03,qn+.01),t.group.add(w);for(let F of[-1,1]){let L=new ge(new wt(.06,.11,.36),n);L.position.set(F*.78,In+0,qn-.16),L.castShadow=!0,t.group.add(L)}let v=new ge(new wt(1.5,.07,.05),n);v.position.set(0,In+.035,qn-Ms-.03),t.group.add(v);let E=new ge(new wt(.16,.012,.002),s);E.position.set(0,In+.045,qn-Ms-.004),t.group.add(E);let b=new gt({color:"#ece6d8",roughness:.35}),I=new gt({color:"#111114",roughness:.3}),x=new wt(Oa*.94,.022,Ms);x.translate(0,-.011,Ms/2);let T=new wt(Oa*.55,.02,Ms*.62);T.translate(0,.01,Ms*.31),t.keyMats={};for(let F=21;F<=108;F++){let L=au(F),B=(L?I:b).clone();t.keyMats[F]=B;let Y=new ge(L?T:x,B);if(Y.position.set(Ss(F),In+0,qn-Ms),Y.castShadow=!1,Y.receiveShadow=!0,t.group.add(Y),t.keys[F]=Y,t.press[F]=0,F>=33&&F<=96){let V=new Rt,J=new ge(new wt(.004,.004,.1),r);J.position.z=.05,V.add(J);let $=new ge(new wt(Oa*.6,.025,.022),a);$.position.z=.1,V.add($),V.position.set(Ss(F),.69,.48),V.rotation.x=.25,t.group.add(V),t.hammers[F]=V}}t.lidPivot=new Rt,t.lidPivot.position.set(-.79,.885,0),t.group.add(t.lidPivot);let C=new ge(new oi(Fa(),{depth:.02,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:2,curveSegments:48}),n);C.rotation.x=Math.PI/2,C.position.set(.79,.02,0),t.lidPivot.add(C),C.castShadow=!0,t.lidPivot.rotation.z=.78;let N=new ge(new _n(.01,.01,.95,8),n);N.position.set(.62,1.2,-.2),N.rotation.z=-.42,t.group.add(N),t.prop=N,t.lidA=.78,t.lidWant=.78;let k=new _n(.05,.035,.58,12);k.translate(0,-.29,0);for(let[F,L]of[[-.68,.7],[.68,.7],[-.45,-1.05]]){let B=new ge(k,n);B.position.set(F,.58,L),B.castShadow=!0,t.group.add(B);let Y=new ge(new Cn(.03,10,8),s);Y.position.set(F,.03,L),t.group.add(Y)}let G=new ge(new wt(.24,.45,.03),n);G.position.set(0,.34,.55),t.group.add(G),t.pedals=[];for(let F=-1;F<=1;F++){let L=new ge(new wt(.035,.012,.1),s);L.position.set(F*.06,.1,.62),t.group.add(L),t.pedals.push(L)}let U=new ge(new wt(.8,.06,.36),new gt({color:"#2a0a10",roughness:.8}));U.position.set(0,.5,1.55),U.castShadow=!0,t.group.add(U);for(let[F,L]of[[-.35,1.4],[.35,1.4],[-.35,1.7],[.35,1.7]]){let B=new ge(new _n(.02,.016,.47,8),n);B.position.set(F,.235,L),t.group.add(B)}return t}function Mn(i,e,t=1){i.keys[e]&&(i.press[e]=Math.max(i.press[e],t),i.hold=i.hold||{},i.hold[e]=.12)}function Wf(i,e,t){for(let n in i.keys){let s=i.keys[n],r=i.hold&&i.hold[n]>0;r&&(i.hold[n]-=e),i.press[n]=r?Math.min(1,i.press[n]+e*30):Math.max(0,i.press[n]-e*9),s.rotation.x=i.press[n]*.07;let a=t&&t[n]||0,o=i.keyMats[n];a>.001?(o.emissive.setRGB(a*.55,a*.5,a*.95),t[n]=Math.max(0,a-e*2.5)):o.emissive.setRGB(0,0,0);let l=i.hammers[n];l&&(l.rotation.x=.25-i.press[n]*.55)}}function ou(i,e){let t=new gt({color:"#b8c8ff",emissive:"#6a7ad0",emissiveIntensity:.6,transparent:!0,opacity:0,roughness:.4,depthWrite:!1}),n=new Rt,s=new ge(new os(.035,.05,4,10),t);s.rotation.z=Math.PI/2,s.scale.set(1,1.15,.5),s.position.set(0,.03,-.03),n.add(s);let r=[];for(let l=0;l<5;l++){let c=e?l===4:l===0,h=new Rt,f=(l-2)*.021;h.position.set(f,.03,0);let u=new ge(new os(.0085,c?.035:.05,3,8),t);u.rotation.x=Math.PI/2-.25,u.position.z=.035,h.add(u),c&&(h.rotation.y=e?-.6:.6),n.add(h),r.push(h)}let a=new ge(new os(.026,.09,4,10),t);a.rotation.x=Math.PI/2,a.position.set(0,.04,-.11),n.add(a);let o={g:n,m:t,fingers:r,target:new P,a:0,wantA:0,press:[0,0,0,0,0]};return n.visible=!1,i.add(n),o}function qi(i,e,t=1){i.target.set(Ss(e),In+.045,qn-.05);let n=Math.min(4,Math.max(0,Math.round((Ss(e)-i.g.position.x)/.021+2)));i.press[n]=1,i.wantA=1,i.idle=0}function lu(i,e,t){i.idle=(i.idle||0)+e,i.idle>1.6&&(i.wantA=0),i.a+=(i.wantA-i.a)*Math.min(1,e*4),i.m.opacity=i.a*.55,i.g.visible=i.a>.01,i.g.position.lerp(i.target,Math.min(1,e*10)),i.g.position.y+=Math.sin(t*2.3)*.002,i.fingers.forEach((n,s)=>{i.press[s]=Math.max(0,i.press[s]-e*5),n.rotation.x=i.press[s]*.45+Math.sin(t*3+s)*.04})}function Xf(i,e){i.lidA=e,i.lidPivot.rotation.z=e;let t=.426,n=.766,s=e-.343,r=-.79+1.77*Math.cos(s),a=.885+1.77*Math.sin(s),o=r-t,l=a-n,c=Math.hypot(o,l);i.prop.position.set((t+r)/2,(n+a)/2,-.2),i.prop.rotation.z=-Math.atan2(o,l),i.prop.scale.y=c/.95}var ny=`uniform float uT; uniform float uPh; varying vec3 vN; varying vec3 vV; varying float vY;
void main(){ vec3 p = position; float hem = smoothstep(.4, -.05, p.y); float an = atan(p.z, p.x); p.y += sin(an * 7. + uT * 3. + uPh) * .045 * hem; p.xz *= 1. + sin(an * 5. - uT * 2. + uPh) * .06 * hem;
  vY = position.y; vec4 mv = modelViewMatrix * vec4(p, 1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,iy=`uniform float uA; varying vec3 vN; varying vec3 vV; varying float vY;
void main(){ float f = 1. - abs(dot(vN, vV)); float rim = pow(f, 1.8); float fade = smoothstep(-.05, .45, vY);
  vec3 c = mix(vec3(.55,.62,.85), vec3(.8,.9,1.), rim); gl_FragColor = vec4(c * (.35 + rim * .5), (.14 + rim * .55) * uA * fade); }`;function qf(i,e=5){let t={list:[],a:0,want:0,sing:0},n=new cs([[0,-.02],[.36,-.06],[.3,.18],[.24,.48],[.205,.78],[.2,.98],[.205,1.1],[.18,1.24],[.11,1.33],[0,1.36]].map(([a,o])=>new ie(a,o)),28),s=new Cn(.15,24,18),r=new an({color:"#05040a",transparent:!0,opacity:0});for(let a=0;a<e;a++){let o={uT:{value:0},uA:{value:0},uPh:{value:a*1.7}},l=new mt({uniforms:o,vertexShader:ny,fragmentShader:iy,transparent:!0,depthWrite:!1}),c=new Rt,h=new ge(n,l);c.add(h);let f=[];for(let y of[-1,1]){let m=new ge(new Cn(.034,12,10),r);m.position.set(y*.068,1.17,.19),m.scale.set(.85,1.35,.35),c.add(m),f.push(m)}let u=new ge(new Cn(.03,12,8),r);u.position.set(0,1.04,.198),u.scale.set(1,.5,.4),c.add(u);let d=(a-(e-1)/2)*.95,g=-2.3-Math.abs(a-(e-1)/2)*.25*-1-.3;c.position.set(d,0,g),c.rotation.y=-d*.12,c.visible=!1,i.add(c),t.list.push({g:c,u:o,mouth:u,base:new P(d,.5,g),ph:a*1.3})}return t.dark=r,t}function Yf(i,e,t){i.a+=(i.want-i.a)*Math.min(1,e*(i.want>i.a?1.2:2.5)),i.sing=Math.max(0,i.sing-e*.6),i.dark.opacity=i.a*.85;for(let n of i.list){n.u.uT.value=t,n.u.uA.value=i.a,n.g.visible=i.a>.01,n.g.position.set(n.base.x+Math.sin(t*.5+n.ph)*.06,n.base.y-(1-i.a)*.9+Math.sin(t*1.1+n.ph)*.07,n.base.z);let s=.45+i.sing*(.7+.3*Math.sin(t*5+n.ph));n.mouth.scale.set(.9,s,.4)}}var Yn=2400;function Zf(i,e,t){let n={scene:i},s=new ft;n.pos=new Float32Array(Yn*3),n.col=new Float32Array(Yn*3),n.size=new Float32Array(Yn),n.alpha=new Float32Array(Yn),n.vel=new Float32Array(Yn*3),n.life=new Float32Array(Yn),n.max=new Float32Array(Yn),n.grav=new Float32Array(Yn),n.s0=new Float32Array(Yn),n.n=0,n.cursor=0,s.setAttribute("position",new Nt(n.pos,3)),s.setAttribute("color",new Nt(n.col,3)),s.setAttribute("size",new Nt(n.size,1)),s.setAttribute("alpha",new Nt(n.alpha,1));let r=new mt({uniforms:{map:{value:e},scale:{value:800}},transparent:!0,depthWrite:!1,blending:Gn,vertexColors:!0,vertexShader:"attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); }"});n.points=new as(s,r),n.points.frustumCulled=!1,i.add(n.points),n.geo=s,n.mat=r,n.puffs=[];for(let a=0;a<30;a++){let o=new ss(new Di({map:t,color:"#8a7a9a",transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,i.add(o),n.puffs.push({s:o,life:0,max:1,v:new P,g:1})}return n}function cc(i,e,t,n={}){let s=new Ne,r=(n.colors||["#ffffff"]).map(a=>new Ne(a));for(let a=0;a<t;a++){let o=i.cursor;i.cursor=(i.cursor+1)%Yn,i.n=Math.max(i.n,i.cursor===0?Yn:i.cursor);let l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),f=(n.speed||3)*(.35+Math.random()*.8);i.pos[o*3]=e.x,i.pos[o*3+1]=e.y,i.pos[o*3+2]=e.z,i.vel[o*3]=Math.cos(c)*h*f+(n.vx||0),i.vel[o*3+1]=l*f+(n.up||0),i.vel[o*3+2]=Math.sin(c)*h*f+(n.vz||0),s.copy(r[a%r.length]),i.col[o*3]=s.r,i.col[o*3+1]=s.g,i.col[o*3+2]=s.b,i.max[o]=i.life[o]=(n.life||1)*(.6+Math.random()*.8),i.grav[o]=n.grav??3,i.s0[o]=(n.size||.12)*(.5+Math.random())}}function Kf(i,e,t){i.mat.uniforms.scale.value=t;for(let n=0;n<i.n;n++){if(i.life[n]<=0){i.alpha[n]=0;continue}i.life[n]-=e;let s=Math.max(0,i.life[n]/i.max[n]);i.vel[n*3+1]-=i.grav[n]*e,i.vel[n*3]*=1-e*1.2,i.vel[n*3+2]*=1-e*1.2,i.pos[n*3]+=i.vel[n*3]*e,i.pos[n*3+1]+=i.vel[n*3+1]*e,i.pos[n*3+2]+=i.vel[n*3+2]*e,i.pos[n*3+1]<.05&&(i.pos[n*3+1]=.05,i.vel[n*3+1]*=-.3),i.alpha[n]=Math.min(1,s*2.5),i.size[n]=i.s0[n]*(.4+s*.6)}i.geo.attributes.position.needsUpdate=!0,i.geo.attributes.color.needsUpdate=!0,i.geo.attributes.size.needsUpdate=!0,i.geo.attributes.alpha.needsUpdate=!0;for(let n of i.puffs){if(n.life<=0)continue;n.life-=e;let s=1-n.life/n.max;n.s.position.addScaledVector(n.v,e),n.v.multiplyScalar(1-e*1.2),n.s.scale.setScalar(n.g*(.6+s*2.2)),n.s.material.opacity=Math.sin(Math.PI*Math.min(1,s*1.3))*.5,n.life<=0&&(n.s.visible=!1)}}var Ba={toccata:{title:"Toccata in D minor",composer:"J. S. Bach",bpm:64,tonic:"D",acc:[1,1.12],src:`
{D2+D3:6} A5/.25 G5/.25 A5/1.75 r/.5 G5/.25 F5/.25 E5/.25 D5/.25 C#5/.75 D5/1.75 r/.5
{D2+A2:6} A4/.25 G4/.25 A4/1.75 r/.5 E4/.5 F4/.5 C#4/.5 D4/1.75 r/.5
{D1+D2:6} A3/.25 G3/.25 A3/1.75 r/.5 G3/.25 F3/.25 E3/.25 D3/.25 C#3/.75 D3/1.75 r/.5
{D2+A2+D3:2} D4/.25 F4/.25 A4/.25 D5/.25 F5/.25 A5/.25 D6/.75 r/.25
{C#2+G2+A#2:2} C#5/.25 E5/.25 G5/.25 A#5/.25 C#6/.75 A#5/.25 G5/.25 E5/.25
{D2+A2+F3:2} D5/.5 A4/.5 F4/.5 D4/.5
{A1+A2|C#3+E3+G3:1} E4/.25 G4/.25 A#4/.25 C#5/.25 E5/.5 G5/.5 F5/.25 E5/.25 D5/.25 C#5/.25 D5/1
{D2+A2+D3+F3:4} A5/.25 G5/.25 F5/.25 E5/.25 D5/.25 C#5/.25 D5/.25 E5/.25 F5/.5 E5/.5 D5/2 {}`},mountain:{title:"In the Hall of the Mountain King",composer:"E. Grieg",bpm:104,tonic:"B",acc:[.82,1.55],src:`
{B1|F#2:1} B3/.5 C#4/.5 D4/.5 E4/.5 F#4/.5 D4/.5 F#4/1 F4/.5 C#4/.5 F4/1 E4/.5 C4/.5 E4/1
B3/.5 C#4/.5 D4/.5 E4/.5 F#4/.5 D4/.5 F#4/.5 B4/.5 A4/.5 F#4/.5 D4/.5 F#4/.5 A4/2
{F#1|C#2:1} F#4/.5 G#4/.5 A#4/.5 B4/.5 C#5/.5 A#4/.5 C#5/1 D5/.5 A#4/.5 D5/1 C#5/.5 A#4/.5 C#5/1
F#4/.5 G#4/.5 A#4/.5 B4/.5 C#5/.5 A#4/.5 C#5/.5 F#5/.5 E5/.5 C#5/.5 A#4/.5 C#5/.5 E5/2
{B1+B2|F#2+D3:.5} B4/.5 C#5/.5 D5/.5 E5/.5 F#5/.5 D5/.5 F#5/1 F5/.5 C#5/.5 F5/1 E5/.5 C5/.5 E5/1
B4/.5 C#5/.5 D5/.5 E5/.5 F#5/.5 D5/.5 F#5/.5 B5/.5 A5/.5 F#5/.5 D5/.5 F#5/.5 A5/1 {B1+F#2+B2:3} B5/1 r/1 B4/1 {}`},funeral:{title:"Funeral March",composer:"F. Chopin",bpm:56,tonic:"Bb",acc:[1,1],src:`
{A#1+F2|F#1+C#2:1} A#3/1 A#3/.75 A#3/.25 A#3/2 C#4/.75 C4/.25 C4/.75 A#3/.25 A#3/.75 A3/.25 A#3/2
A#3/1 A#3/.75 A#3/.25 A#3/2 C#4/.75 C4/.25 C4/.75 A#3/.25 A#3/.75 A3/.25 A#3/2
{C#2+C#3|G#1+G#2:1} F4/1 F4/.75 D#4/.25 C#4/1 C4/.75 C#4/.25 D#4/1 C#4/.75 C4/.25 A#3/2
{A#1+F2|F#1+C#2:1} A#4/1 A#4/.75 A#4/.25 A#4/2 C#5/.75 C5/.25 C5/.75 A#4/.25 A#4/.75 A4/.25 A#4/2 {A#1+F2+A#2+C#3:4} A#3/4 {}`},dies:{title:"Dies Irae",composer:"Gregorian chant",bpm:76,tonic:"D",acc:[1,1],src:`
{D2+A2:4} F4/1 E4/1 F4/1 D4/1 {C2+G2:2} E4/1 C4/1 {D2+A2:2} D4/2
{D2+A2:4} F4/1 F4/1 G4/1 F4/1 {A#1+F2:2} E4/1 D4/1 {C2+G2:2} C4/1 E4/1 {D2+A2:2} F4/1 E4/1 D4/2
{F2+C3:4} A4/1 C5/1 A4/1 G4/1 {D2+A2:4} A4/1 F4/1 G4/2
{D2+A2+D3:4} D5/1 C5/1 A4/1 F4/1 {C2+G2+C3:2} G4/1 E4/1 {D2+A2+D3+F3:4} D4/4 {}`}},Jf=["toccata","mountain","funeral","dies"];function hc(i){let e=Ba[i],t=[],n=[],s=0,r=null,a=0,o=u=>{if(r)for(let d=a,g=0;d<u-1e-6;d+=r.step,g++)n.push({b:d,ms:r.ch[g%r.ch.length],dur:Math.min(r.step,u-d)})};for(let u of e.src.trim().split(/\s+/)){if(u.startsWith("{")){o(s);let m=u.slice(1,-1);if(!m){r=null;continue}let[p,M]=m.split(":");r={ch:p.split("|").map(w=>w.split("+").map(Mi)),step:+(M||4)},a=s;continue}let[d,g]=u.split("/"),y=+g;d!=="r"&&t.push({b:s,dur:y,m:Mi(d)}),s+=y}o(s);let l=s,c=e.acc[0],h=e.acc[1],f=u=>{let d=0,g=200,y=u/g;for(let m=0;m<g;m++){let p=(m+.5)*y;d+=60/(e.bpm*(c+(h-c)*p/l))*y}return d};for(let u of t)u.t=f(u.b),u.d=f(u.b+u.dur)-u.t;for(let u of n)u.t=f(u.b),u.d=f(u.b+u.dur)-u.t;return{key:i,...e,mel:t,acc:n,beats:l,len:f(l),tAt:f}}var At=null,Yi=null,dc=null,uc=null,fc=null,pc=null,xr=null,vr={},Qf=!1,cu=!1,hu=[],jf=()=>0;function ep(i){jf=i}function sy(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}var ry={A1:33,C2:36,Ds2:39,Fs2:42,B2:47,C3:48,Ds3:51,Fs3:54,A3:57,B3:59,Ds4:63,Fs4:66,A4:69,C5:72,Ds5:75,Fs5:78,A5:81,C6:84,Ds6:87,Fs6:90,A6:93,C7:96},$f=Object.entries(ry).sort((i,e)=>i[1]-e[1]);function ay(i){let e=$f[0];for(let t of $f)(Math.abs(t[1]-i)<Math.abs(e[1]-i)||Math.abs(t[1]-i)===Math.abs(e[1]-i)&&t[1]>i)&&(e=t);return{n:"p_"+e[0],r:Math.pow(2,(i-e[1])/12)}}function oy(i=2.6){let e=At.sampleRate,t=Math.floor(e*i),n=At.createBuffer(2,t,e),s=7,r=()=>(s=s*16807%2147483647,s/2147483647*2-1);for(let a=0;a<2;a++){let o=n.getChannelData(a),l=0;for(let c=0;c<t;c++){let h=c/e;l+=(r()-l)*(.5-.4*h/i),o[c]=l*Math.exp(-h*2.6)*(c<e*.012?c/(e*.012):1)}}return n}function ly(i){try{let e=i.createBuffer(1,1,22050),t=i.createBufferSource();t.buffer=e,t.connect(i.destination),t.start(0)}catch{}}function tp(){return At?At.state:"none"}async function yr(){try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}if(At){At.state!=="running"&&At.resume().catch(()=>{});return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;At=new i,ly(At),At.state!=="running"&&At.resume().catch(()=>{}),Yi=At.createGain(),Yi.gain.value=cu?0:.9;let e=At.createDynamicsCompressor();e.threshold.value=-12,e.ratio.value=2.5,Yi.connect(e),e.connect(At.destination),dc=At.createGain(),dc.gain.value=1,dc.connect(Yi),fc=At.createConvolver(),fc.buffer=oy(),uc=At.createGain(),uc.gain.value=.32,fc.connect(uc),uc.connect(Yi),pc=At.createGain(),pc.gain.value=.22,pc.connect(Yi);let t=window.HP_SOUNDS||{};await Promise.all(Object.keys(t).map(n=>new Promise(s=>{try{At.decodeAudioData(sy(t[n]),r=>{vr[n]=r,s()},()=>s())}catch{s()}}))),Qf=!0,window.__hpAudioReady=Object.keys(vr).length,hy()}function Ot(i,e=1,t=1,n=0,s=.5,r=0){if(hu.push({n:i,t:jf()+n,v:e,r:t,rv:s,d:r}),!Qf||!vr[i])return null;let a=At.createBufferSource();a.buffer=vr[i],a.playbackRate.value=t;let o=At.createGain();if(o.gain.value=e,a.connect(o),o.connect(dc),s>0){let c=At.createGain();c.gain.value=s,o.connect(c),c.connect(fc)}let l=At.currentTime+n;return a.start(l),r>0&&(o.gain.setValueAtTime(e,l+r),o.gain.exponentialRampToValueAtTime(8e-4,l+r+.45),a.stop(l+r+.5)),a}function Ln(i,e=.8,t=1.2,n=0){let{n:s,r}=ay(i),a=(.18+.62*e)*(i<45?1.15:i>84?.9:1);return Ot(s,a,r,n,.55,Math.max(.15,t))}var cy=53;function za(i,e=.32,t=0){i.forEach((n,s)=>Ot("choir_ah",e/Math.sqrt(i.length)*(1-s*.08),Math.pow(2,(n-cy)/12)*(1+(s-1)*.003),t+s*.05,.8))}function np(i,e=.5){let t=((i-41)%12+12)%12;t>6&&(t-=12),Ot("choir_swell",e,Math.pow(2,t/12),0,.7)}function hy(){xr||!vr.wind||(xr=At.createBufferSource(),xr.buffer=vr.wind,xr.loop=!0,xr.connect(pc),xr.start())}function ip(i){cu=i,Yi&&(Yi.gain.value=i?0:.9)}function mc(){return cu}var Bt={miss(){Ot("whisper",.22,.9+Math.random()*.2,0,.6)},combo(i){Ot("tinkle",.45,.9+Math.random()*.2,0,.6),i>=2&&Ot("sparkle",.3,1,.05,.5)},thunder(){Ot("thunder",.6,1,0,.2)},start(){Ot("stinger",.45,.8,0,.6),Ot("whisper",.25,1,.3,.7)},ghost(){Ot("boo",.25,.8,0,.6)},end(i){Ot("howl",.3,1,.2,.5),i?Ot("success",.5,1,.4,.4):Ot("harp",.4,1,.3,.5)},great(){Ot("magic",.35,1,0,.5)},fail(){Ot("eerie",.45,1,0,.6),Ot("impact",.3,.7,0,.3)},owl(){Ot("owl",.22,.95,0,.6)},kids(){Ot("laugh_kids",.45,1,.2,.4)},ui(){Ot("soft",.35,1.4,0,.2)},eerie(){Ot("eerie",.3,1,0,.6)}};var uu={en:{title:"Haunted Piano",sub:"A ghost sits at the grand piano. Play along \u2014 if you dare.",h1:"Ghostly notes fall onto the keys \u2014 hit them right on the glowing line",h2:"Keys D F J K (and more), or tap the lanes. Chain hits for combos",h3:"Big combos wake the room: chandelier, candles, the ghost choir\u2026",h3k:"Kids mode: three big lanes, slow notes, and the ghost always helps",play:"Play!",echo:"Ghost Echo",free:"Free play",kids:"Kids mode",song:"Song",difficulty:"Difficulty",score:"Score",combo:"Combo",acc:"Accuracy",spirit:"Spirit",best:"Best",newBest:"New highscore!",round:"Round",lives:"Candles",d_easy:"Easy",d_medium:"Medium",d_hard:"Hard",q_low:"Low",q_mid:"Normal",q_high:"High",q_ultra:"Ultra",autoQ:"Quality adjusted:",perfect:"Perfect!",great:"Great",good:"Good",miss:"Miss",hint:"Hit the falling notes as they touch the glowing line",hintT:"Tap the lanes as the notes touch the line",hintK:"Tap a lane when its note reaches the line",hintE:"Listen to the ghost\u2026 then play it back",hintF:"Play anything! Keys A\u2013; and W E T Y U O P, or tap the keys",yourTurn:"Your turn!",listen:"Listen\u2026",echoOk:"Spooky good!",echoBad:"Wrong key\u2026",choir:"The ghost choir sings!",chand:"The chandelier swings!",storm:"Thunder!",failed:"The ghost took over the piano\u2026",over:"Bravo, maestro!",kidsOver:"What a concert!",freeOver:"Encore!",echoOver:"The ghost is impressed!",grade:"Grade",name:"Your name",again:"Play again",card:"Save score card",share:"Share",menu:"Menu",back:"Menu",cardTag:"Can you play the haunted piano?",cardPlay:"Play free in your browser",notes:"notes",maxCombo:"max combo",copied:"Link copied!",saved:"Card saved!"},de:{title:"Haunted Piano",sub:"Ein Geist sitzt am Fl\xFCgel. Spiel mit \u2014 wenn du dich traust.",h1:"Geisternoten fallen auf die Tasten \u2014 triff sie genau auf der leuchtenden Linie",h2:"Tasten D F J K (und mehr) oder tippe auf die Bahnen. Treffer in Folge geben Combos",h3:"Gro\xDFe Combos wecken den Saal: Kronleuchter, Kerzen, der Geisterchor\u2026",h3k:"Kindermodus: drei gro\xDFe Bahnen, langsame Noten, der Geist hilft immer",play:"Spielen!",echo:"Geister-Echo",free:"Frei spielen",kids:"Kindermodus",song:"St\xFCck",difficulty:"Schwierigkeit",score:"Punkte",combo:"Combo",acc:"Genauigkeit",spirit:"Geist",best:"Rekord",newBest:"Neuer Rekord!",round:"Runde",lives:"Kerzen",d_easy:"Leicht",d_medium:"Mittel",d_hard:"Schwer",q_low:"Niedrig",q_mid:"Normal",q_high:"Hoch",q_ultra:"Ultra",autoQ:"Qualit\xE4t angepasst:",perfect:"Perfekt!",great:"Super",good:"Gut",miss:"Daneben",hint:"Triff die Noten, wenn sie die leuchtende Linie ber\xFChren",hintT:"Tippe auf die Bahnen, wenn die Noten die Linie ber\xFChren",hintK:"Tippe auf eine Bahn, wenn ihre Note die Linie erreicht",hintE:"H\xF6r dem Geist zu\u2026 und spiel es nach",hintF:"Spiel, was du willst! Tasten A\u2013\xD6 und W E T Z U O P, oder tippe auf die Tasten",yourTurn:"Du bist dran!",listen:"H\xF6r zu\u2026",echoOk:"Schaurig gut!",echoBad:"Falsche Taste\u2026",choir:"Der Geisterchor singt!",chand:"Der Kronleuchter schwingt!",storm:"Donner!",failed:"Der Geist hat den Fl\xFCgel \xFCbernommen\u2026",over:"Bravo, Maestro!",kidsOver:"Was f\xFCr ein Konzert!",freeOver:"Zugabe!",echoOver:"Der Geist ist beeindruckt!",grade:"Note",name:"Dein Name",again:"Nochmal",card:"Punktekarte speichern",share:"Teilen",menu:"Men\xFC",back:"Men\xFC",cardTag:"Kannst du den Geisterfl\xFCgel spielen?",cardPlay:"Kostenlos im Browser spielen",notes:"Noten",maxCombo:"max. Combo",copied:"Link kopiert!",saved:"Karte gespeichert!"}};var sp="@Frank_AI_Lab",We=i=>document.getElementById(i),ln={get(i,e){try{let t=localStorage.getItem(i);return t===null?e:t}catch{return e}},set(i,e){try{localStorage.setItem(i,e)}catch{}}},du=(window.__hpSeed||Date.now()&16777215)>>>0;function fu(){du=du+1831565813>>>0;let i=du;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}var Sr=(i,e,t)=>Math.max(e,Math.min(t,i)),fp={easy:{lanes:4,fall:2.5,tempo:.9,gap:.36,win:[.07,.13,.19],drain:.05,mult:1,phrase:3},medium:{lanes:5,fall:2.1,tempo:1,gap:.22,win:[.055,.1,.15],drain:.09,mult:1.2,phrase:4},hard:{lanes:6,fall:1.7,tempo:1.08,gap:.12,win:[.045,.085,.13],drain:.12,mult:1.5,phrase:5},kids:{lanes:3,fall:3,tempo:.8,gap:.55,win:[.1,.18,.3],drain:0,mult:1,phrase:2}},pp={3:["KeyF","Space","KeyJ"],4:["KeyD","KeyF","KeyJ","KeyK"],5:["KeyD","KeyF","Space","KeyJ","KeyK"],6:["KeyS","KeyD","KeyF","KeyJ","KeyK","KeyL"]},dy={KeyS:"S",KeyD:"D",KeyF:"F",KeyJ:"J",KeyK:"K",KeyL:"L",Space:"\u2423"},br=["#b48cff","#7ad0ff","#7affc8","#ffd27a","#ff9ac8","#c8d8ff"],rp={KeyA:60,KeyW:61,KeyS:62,KeyE:63,KeyD:64,KeyF:65,KeyT:66,KeyG:67,KeyY:68,KeyZ:68,KeyH:69,KeyU:70,KeyJ:71,KeyK:72,KeyO:73,KeyL:74,KeyP:75,Semicolon:76,Quote:77};function fy(){try{let i=navigator.languages&&navigator.languages[0]||navigator.language||"";return/^de\b/i.test(i)?"de":"en"}catch{return"en"}}var R={state:"menu",mode:"play",lang:ln.get("hp-lang","")||fy(),diff:ln.get("hp-diff","medium"),kids:ln.get("hp-kids","0")==="1",song:ln.get("hp-song","toccata"),q:ln.get("hp-q",""),qUser:!!ln.get("hp-q",""),score:0,gt:0,combo:0,maxCombo:0,hits:0,judged:0,accSum:0,perfect:0,spirit:1,songT:0,newBest:!1,best:0,shake:0,lives:3,round:0,freeN:0,failed:!1,name:ln.get("hp-name","Player")||"Player",pel:0,pressed:0};(!fp[R.diff]||R.diff==="kids")&&(R.diff="medium");Ba[R.song]||(R.song="toccata");vs[R.q]||(R.q="mid",R.qUser=!1);var mp=()=>R.kids?"kids":R.diff,tn=()=>fp[mp()],gp=()=>`hp-best-${R.mode}-${R.mode==="play"?R.song+"-":""}${mp()}`;ep(()=>R.gt);var Qe=i=>uu[R.lang][i]||uu.en[i]||i,_p=We("game"),dn=new tc({canvas:_p,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});dn.outputColorSpace=Vt;dn.toneMapping=ms;dn.toneMappingExposure=1.2;dn.shadowMap.type=fs;var vt=kf(dn,vs[R.q],8),Si=vt.scene,at=new Wt(42,1,.05,60),bc=Zf(Si,vt.soft,vt.smokeTex),Ht=Vf(Si,vs[R.q]);Ht.group.traverse(i=>{i.isMesh&&(i.castShadow=i.castShadow||!1)});var xu=ou(Si,!0),Zi=ou(Si,!1),fn=qf(Si,5),Ji={},hn,ap;function py(){hn&&(hn.passes.forEach(i=>i.dispose&&i.dispose()),hn.dispose()),hn=new ac(dn),hn.addPass(new oc(Si,at)),ap=new gr(new ie(256,256),.3*vs[R.q].bloom,.35,.9),hn.addPass(ap),hn.addPass(new lc)}function Ec(i,e){R.q=i,e&&(R.qUser=!0,ln.set("hp-q",i));let t=vs[i];dn.shadowMap.enabled=t.shadows,vt.moon.castShadow=t.shadows,vt.key.castShadow=t.shadows,t.shadows&&(vt.moon.shadow.mapSize.set(t.shadowSize,t.shadowSize),vt.moon.shadow.map&&(vt.moon.shadow.map.dispose(),vt.moon.shadow.map=null)),Si.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(s=>s.needsUpdate=!0)}),py(),vu(),We("btnQ").textContent="\u2699 "+Qe("q_"+i)}var En=1,Zn=1;function vu(){En=window.innerWidth,Zn=window.innerHeight;let i=Math.min(window.devicePixelRatio||1,vs[R.q].dpr);dn.setPixelRatio(i),dn.setSize(En,Zn,!1),hn&&(hn.setPixelRatio(i),hn.setSize(En,Zn)),at.aspect=En/Zn,at.fov=at.aspect<.85?52:42,at.updateProjectionMatrix()}var un=In+.035,gu=In+.8,Dn=qn-.045,yc=.74,Jn=i=>-yc/2+(i+.5)*yc/tn().lanes,Sn=new Rt;Si.add(Sn);function my(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.font="700 74px Fredoka, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=14,n.strokeStyle="rgba(10,6,24,.95)",n.strokeText(i,64,68),n.fillStyle=e,n.fillText(i,64,68);let s=new gn(t);return s.colorSpace=Vt,s.userData.own=!0,s}var gy=(()=>{let i=document.createElement("canvas");i.width=128,i.height=96;let e=i.getContext("2d"),t=e.createRadialGradient(64,48,4,64,48,60);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,96),e.fillStyle="rgba(20,10,40,.85)",e.font="700 50px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u266A",64,50),new gn(i)})(),_y=(()=>{let i=document.createElement("canvas");i.width=16,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(1,"rgba(255,255,255,.5)"),e.fillStyle=t,e.fillRect(0,0,16,128),new gn(i)})(),xy=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=7,e.beginPath(),e.arc(64,64,52,0,7),e.stroke();let t=e.createRadialGradient(64,64,30,64,64,62);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.8,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new gn(i)})(),Er=[];function vy(){for(;Sn.children.length;){let n=Sn.children[0];Sn.remove(n),n.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&(s.material.map&&s.material.map.userData.own&&s.material.map.dispose(),s.material.dispose())})}Er=[];let i=tn().lanes,e=yc/i,t=new ge(new Ft(yc+.02,.006),new an({color:"#d8c8ff",transparent:!0,opacity:.7,depthWrite:!1}));t.position.set(0,un,Dn),Sn.add(t);for(let n=0;n<i;n++){let s=new Ne(br[n%6]),r=new ge(new Ft(e*.86,gu-un),new mt({transparent:!0,depthWrite:!1,uniforms:{uC:{value:s},uA:{value:.08}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"uniform vec3 uC; uniform float uA; varying vec2 vUv; void main(){ float e = smoothstep(0., .25, vUv.x) * smoothstep(1., .75, vUv.x); float f = smoothstep(1., .1, vUv.y); gl_FragColor = vec4(uC, uA * e * (.35 + .65 * f)); }"}));r.position.set(Jn(n),(un+gu)/2,Dn-.002),Sn.add(r);let a=new ge(new Ft(e*.62,e*.62*.6),new an({map:xy,color:s,transparent:!0,opacity:.55,depthWrite:!1}));a.position.set(Jn(n),un,Dn+.001),Sn.add(a);let o=new ge(new Ft(.04,.04),new an({map:my(dy[pp[i][n]],br[n%6]),transparent:!0,depthWrite:!1}));o.position.set(Jn(n),un-.034,Dn+.03),o.rotation.x=-.5,Sn.add(o),Er.push({beam:r,ring:a,lab:o,col:s,flash:0})}}var Va=[];function yy(){let i=Va.find(e=>!e.used);if(!i){let e=new ge(new Ft(.075,.056),new an({map:gy,transparent:!0,depthWrite:!1})),t=new ge(new Ft(.02,.16),new an({map:_y,transparent:!0,depthWrite:!1}));t.position.y=.085,e.add(t),Si.add(e),i={m:e,tr:t,used:!1},Va.push(i)}return i.used=!0,i.m.visible=!0,i}function Tr(i){i&&(i.used=!1,i.m.visible=!1)}var bn=null,Ki=[],Ga=[],gc=[],_c=0,xc=0;function My(){bn=hc(R.song);let i=tn(),e=1/i.tempo,t=bn.mel.map(a=>({...a,t:a.t*e,d:a.d*e}));gc=bn.acc.map(a=>({...a,t:a.t*e,d:a.d*e}));let n=[...new Set(t.map(a=>a.m))].sort((a,o)=>a-o),s=i.lanes;Ki=[],Ga=[];let r=-9;for(let a of t)if(a.t-r>=i.gap){let o=Math.min(s-1,Math.floor(n.indexOf(a.m)/n.length*s));Ki.push({...a,lane:o,hit:!1,missed:!1,mesh:null}),r=a.t}else Ga.push(a);_c=0,xc=0,bn.len2=bn.len*e}var Le=null;function Sy(){for(let i of Va)Tr(i);Ki.forEach(i=>i.mesh=null),R.score=0,R.combo=0,R.maxCombo=0,R.hits=0,R.judged=0,R.accSum=0,R.perfect=0,R.spirit=1,R.newBest=!1,R.failed=!1,R.pel=0,R.pressed=0,R.freeN=0,R.lives=3,R.round=0,fn.want=0,vt.chandSwing.v+=0,R.best=+ln.get(gp(),0)}function wr(i){yr(),R.mode=i||"play",R.state=i==="free"?"free":i==="echo"?"echo":"play",My(),vy(),Sy(),Sn.visible=R.mode!=="free",R.mode==="play"&&(R.songT=-(tn().fall+1.2)),R.mode==="echo"&&(Le={pos:0,len:tn().phrase,phase:"wait",t:0,i:0,seq:[]},_u(1.2)),Bt.start(),R.kids&&Bt.kids(),Tc(null),wc()}function by(i){let e=tn().win,t=Math.abs(i);return t<=e[0]?0:t<=e[1]?1:t<=e[2]?2:3}var Ey=[1,.7,.4,0],Ty=[300,200,100,0],wy=["perfect","great","good","miss"],yu=["#fff2a8","#b8ffcf","#a8d8ff","#ffb0b0"];function Mu(i){if(i<0||i>=tn().lanes)return;let e=Er[i];if(e&&(e.flash=1),R.pressed++,R.state==="play"){let t=null,n=9;for(let s of Ki){if(s.hit||s.missed||s.lane!==i)continue;let r=R.songT-s.t;if(Math.abs(r)<Math.abs(n)&&(n=r,t=s),s.t>R.songT+1)break}t&&Math.abs(n)<=tn().win[2]?Ay(t,by(n),n):Mn(Ht,Mi("C4")+[0,2,4,5,7,9][i],.3)}else R.state==="echo"&&Ry(i)}function Ay(i,e,t){i.hit=!0,Tr(i.mesh),i.mesh=null,Ln(i.m,e===0?.95:e===1?.82:.7,i.d),Mn(Ht,i.m,1),Ji[i.m]=1,R.judged++,R.hits++,R.accSum+=Ey[e],e===0&&R.perfect++,R.combo++,R.maxCombo=Math.max(R.maxCombo,R.combo);let n=1+Math.min(R.combo,40)/20;R.score+=Math.round(Ty[e]*n*tn().mult),R.spirit=Math.min(1,R.spirit+.02);let s=new P(Jn(i.lane),un+.01,Dn+.01);cc(bc,s,e===0?14:8,{colors:[br[i.lane%6],"#ffffff"],speed:.55,up:.5,life:.55,grav:.4,size:.028}),vt.react=Math.min(1,vt.react+(e===0?.35:.2)),Mc(Qe(wy[e]),yu[e],e===0?1.05:.9,i.lane),xp()}function Cy(i){i.missed=!0,Tr(i.mesh),i.mesh=null,R.judged++,Ln(i.m,.3,i.d*.6),Ji[i.m]=.4,Mn(Ht,i.m,.5),qi(Zi,i.m),R.combo>=20&&Bt.miss(),R.combo=0,fn.want=0,Mc(Qe("miss"),yu[3],.8,i.lane),R.spirit=Math.max(0,R.spirit-tn().drain),R.shake=Math.max(R.shake,.15),R.spirit<=0&&tn().drain>0&&!R.failed&&(R.failed=!0,bu(Qe("failed")),Bt.fail(),Kn.push({t:R.gt+1.4,f:()=>bs()}))}function xp(){let i=R.combo;(i===10||i>10&&i%25===0)&&(ru(vt,i>=25?2.2:1.4),Bt.combo(i>=25?2:1),vc(Qe("chand"))),i===20&&(fn.want=1,fn.sing=1,za(op(),.5),vc(Qe("choir")),Bt.great()),i===30&&Gf(vt,1),(i===50||i===100)&&(vt.flash=1,Bt.thunder(),vc(Qe("storm")),R.shake=.5),i>=20&&i%8===0&&i!==20&&(fn.sing=1,za(op(),.32))}function op(){let i=Mi(bn.tonic+"3"),e=bn.key!=="mountain"||!0;return[i-12+12,i+(e?3:4),i+7]}function vc(i){let e=We("banner");e.textContent=i,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),Kn.push({t:R.gt+1.8,f:()=>e.classList.remove("show")})}function _u(i){let e=Ki;Le.pos>=e.length&&(Le.pos=0),Le.seq=e.slice(Le.pos,Le.pos+Le.len),Le.seq.length<Le.len&&(Le.seq=e.slice(0,Le.len));let t=Le.seq[0].t;Le.times=Le.seq.map(n=>Math.max(0,n.t-t)*1.15+0);for(let n=1;n<Le.times.length;n++)Le.times[n]=Math.max(Le.times[n],Le.times[n-1]+.34);Le.phase="listen",Le.t=-i,Le.i=0,Le.k=0,R.round++,We("hint").textContent=Qe("listen")}function Ry(i){if(Le.phase!=="play"){Mn(Ht,Mi("C4")+i*2,.3);return}let e=Le.seq[Le.k];if(e.lane===i){if(Ln(e.m,.85,.5),Mn(Ht,e.m,1),Ji[e.m]=1,Le.k++,R.combo++,R.maxCombo=Math.max(R.maxCombo,R.combo),R.hits++,R.judged++,R.accSum+=1,cc(bc,new P(Jn(i),un+.01,Dn+.01),10,{colors:[br[i%6],"#ffffff"],speed:.5,up:.5,life:.5,grav:.4,size:.028}),vt.react=Math.min(1,vt.react+.3),Le.k>=Le.seq.length){let t=Math.round(100*Le.seq.length*tn().mult*(1+R.round*.1));R.score+=t,Mc(`${Qe("echoOk")} +${t}`,"#fff2a8",1.1,-1),xp(),Bt.combo(1),Le.pos+=Le.seq.length,Le.len=Math.min(Le.len+1,9),Le.phase="wait",R.round>=8?Kn.push({t:R.gt+1.2,f:()=>bs()}):Kn.push({t:R.gt+.9,f:()=>_u(.4)})}}else Ln(Mi("C4")+[0,2,4,5,7,9][i]-12,.35,.3),Bt.miss(),R.lives--,R.combo=0,R.judged++,fn.want=0,Mc(Qe("echoBad"),yu[3],1,-1),R.shake=.3,Le.phase="wait",R.lives<=0?(Bt.fail(),Kn.push({t:R.gt+1.2,f:()=>bs()})):Kn.push({t:R.gt+1,f:()=>{R.round--,_u(.3)}});wc()}function Py(i){if(Le.phase==="listen"){for(Le.t+=i;Le.i<Le.seq.length&&Le.t>=Le.times[Le.i];){let e=Le.seq[Le.i];Ln(e.m,.7,.45),Mn(Ht,e.m,1),Ji[e.m]=.8,qi(Zi,e.m),Er[e.lane]&&(Er[e.lane].flash=1),Le.i++}Le.i>=Le.seq.length&&Le.t>Le.times[Le.times.length-1]+.5&&(Le.phase="play",Le.k=0,We("hint").textContent=Qe("yourTurn"))}}function Su(i){i<21||i>108||(Ln(i,.8,.9),Mn(Ht,i,1),Ji[i]=1,R.freeN++,R.combo=R.freeN,vt.react=Math.min(1,vt.react+.2),cc(bc,new P(Ss(i),In+.03,qn-.05),6,{colors:["#c8b8ff","#ffffff"],speed:.4,up:.4,life:.45,grav:.3,size:.022}),R.freeN===12&&(ru(vt,1.4),Bt.combo(1)),R.freeN===24&&(fn.want=1,fn.sing=1,za([57,60,64],.45),vc(Qe("choir"))),R.freeN>24&&R.freeN%10===0&&(fn.sing=1,za([i-12,i-9,i-5].map(e=>Sr(e,45,70)),.3)),R.freeN===60&&(vt.flash=1,Bt.thunder()))}function bs(){if(R.state==="end")return;let i=R.state;R.state="end";for(let n of Va)Tr(n);Sn.visible=!1;let e=R.judged?R.accSum/R.judged:0;R.acc=e,R.mode!=="free"&&R.score>R.best&&(R.best=R.score,R.newBest=R.score>0,ln.set(gp(),R.score));let t=R.mode==="free"?"":R.failed?"D":e>=.95?"S":e>=.85?"A":e>=.7?"B":e>=.5?"C":"D";R.kids&&"CD".includes(t)&&t&&(t="B"),R.grade=t,Bt.end(R.newBest),!R.failed&&R.mode==="play"&&(vt.flash=.7,fn.want=1,fn.sing=1,np(Mi(bn.tonic+"3"),.45)),We("eTitle").textContent=R.failed?Qe("failed"):R.mode==="free"?Qe("freeOver"):R.mode==="echo"?Qe("echoOver"):R.kids?Qe("kidsOver"):Qe("over"),We("eScore").textContent=R.mode==="free"?`\u{1F3B9} ${R.freeN}`:R.score,We("eGrade").textContent=t,We("eGrade").dataset.g=t,We("eBest").textContent=R.mode==="free"?"":R.newBest?Qe("newBest"):`${Qe("best")}: ${R.best}`,We("eStats").textContent=R.mode==="free"?`${R.freeN} ${Qe("notes")}`:R.mode==="echo"?`${Qe("round")} ${R.round} \xB7 ${R.hits} ${Qe("notes")} \xB7 ${R.maxCombo} ${Qe("maxCombo")}`:`${bn.title} \xB7 ${Math.round(e*100)}% \xB7 ${R.maxCombo} ${Qe("maxCombo")} \xB7 ${R.perfect}\xD7 ${Qe("perfect").replace("!","")}`,We("eName").value=R.name,Tc("end")}function Iy(){R.state="menu";for(let i of Va)Tr(i);Sn.visible=!1,fn.want=0,Tc("menu"),qt.t=0,qt.i=0,qt.a=0}function Tc(i){for(let e of["menu","end"])We(e).classList.toggle("show",e===i);document.body.dataset.state=R.state,document.body.dataset.mode=R.mode,document.body.classList.toggle("kids",R.kids)}function wc(){We("hScore").textContent=R.score,We("hCombo").textContent=R.combo,We("hAcc").textContent=R.judged?Math.round(R.accSum/R.judged*100)+"%":"\u2013",We("hSpirit").style.width=Math.round(R.spirit*100)+"%",We("hSpiritBox").classList.toggle("low",R.spirit<.3),We("hLives").textContent="\u{1F56F}\uFE0F".repeat(Math.max(0,R.lives)),We("hRound").textContent=R.round,We("hProg").style.width=(R.mode==="play"&&bn?Sr(R.songT/bn.len2,0,1)*100:0)+"%"}function Ar(){document.documentElement.lang=R.lang,document.querySelectorAll("[data-t]").forEach(i=>i.textContent=Qe(i.dataset.t)),We("h3").textContent=R.kids?Qe("h3k"):Qe("h3"),We("btnLang").textContent=R.lang==="en"?"DE":"EN",We("btnKids").classList.toggle("on",R.kids),We("btnKids").setAttribute("aria-pressed",R.kids),document.querySelectorAll("#diff button").forEach(i=>i.classList.toggle("on",i.dataset.d===R.diff)),We("diff").style.display=R.kids?"none":"",document.querySelectorAll("#songs button").forEach(i=>{i.classList.toggle("on",i.dataset.s===R.song),i.querySelector("b").textContent=Ba[i.dataset.s].title,i.querySelector("small").textContent=Ba[i.dataset.s].composer}),We("btnSound").classList.toggle("on",!mc()),We("btnSound").textContent=mc()?"\u{1F507}":"\u{1F50A}",We("btnQ").textContent="\u2699 "+Qe("q_"+R.q),wc()}var Kn=[],ka=[];function Mc(i,e,t=1,n=-1){let s=document.createElement("div");s.className="pop",s.textContent=i;let r=En/2,a=Zn*.32;if(n>=0){let o=new P(Jn(n),un+.12,Dn).project(at);r=Sr((o.x*.5+.5)*En,70,En-70),a=Sr((-o.y*.5+.5)*Zn,90,Zn-120)}s.style.left=r+"px",s.style.top=a+"px",s.style.color=e;{let o=R.gt;ka.splice(0,ka.length,...ka.filter(l=>o-l.t<.45&&Math.abs(l.x-r)<60)),s.style.marginTop=-ka.length*34+"px",ka.push({t:o,x:r})}s.style.fontSize=28*t*(En<600?.8:1)+"px",We("pops").appendChild(s),Kn.push({t:R.gt+1,f:()=>s.remove()})}function bu(i){let e=We("toast");e.textContent=i,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2500)}var vp=!1,Ly=null,lp=new pa,cp=new ie,Dy=Object.entries(Ht.keys).map(([i,e])=>(e.userData.m=+i,e));function Ny(i){let e=-1,t=1e9;for(let s=0;s<tn().lanes;s++){let a=(new P(Jn(s),un,Dn).project(at).x*.5+.5)*En,o=Math.abs(a-i);o<t&&(t=o,e=s)}let n=Math.abs(new P(Jn(1),un,Dn).project(at).x-new P(Jn(0),un,Dn).project(at).x)*.5*En;return t<n*1.6?e:-1}_p.addEventListener("pointerdown",i=>{if(yr(),vp=i.pointerType==="touch",Ly={x:i.clientX,y:i.clientY},i.preventDefault(),R.state==="play"||R.state==="echo"){let e=Ny(i.clientX);e>=0&&Mu(e)}else if(R.state==="free"){cp.set(i.clientX/En*2-1,-(i.clientY/Zn)*2+1),lp.setFromCamera(cp,at);let e=lp.intersectObjects(Dy,!1);if(e.length){let t=e.find(n=>[1,3,6,8,10].includes(n.object.userData.m%12))||e[0];Su(t.object.userData.m)}}});window.addEventListener("keydown",i=>{if(!(i.target&&i.target.tagName==="INPUT")&&!i.repeat){if(i.code==="Enter"&&R.state==="menu"){wr("play");return}if(i.code==="Escape"&&(R.state==="play"||R.state==="echo"||R.state==="free")){bs();return}if(R.state==="play"||R.state==="echo"){let t=pp[tn().lanes].indexOf(i.code);t<0&&/^Digit[1-6]$/.test(i.code)&&(t=+i.code.slice(5)-1),t>=0&&(i.preventDefault(),Mu(t))}else R.state==="free"&&rp[i.code]!==void 0&&(i.preventDefault(),Su(rp[i.code]+(i.shiftKey?12:0)))}});We("btnPlay").onclick=()=>wr("play");We("btnEcho").onclick=()=>wr("echo");We("btnFree").onclick=()=>wr("free");We("btnAgain").onclick=()=>wr(R.mode);We("btnMenu").onclick=()=>{Bt.ui(),Iy()};We("btnQuit").onclick=()=>bs();We("btnCard").onclick=()=>yp(!1);We("btnShare").onclick=()=>yp(!0);We("btnLang").onclick=()=>{R.lang=R.lang==="en"?"de":"en",ln.set("hp-lang",R.lang),Ar(),Bt.ui()};document.querySelectorAll("#diff button").forEach(i=>i.onclick=()=>{R.diff=i.dataset.d,ln.set("hp-diff",R.diff),Ar(),Bt.ui()});document.querySelectorAll("#songs button").forEach(i=>i.onclick=()=>{R.song=i.dataset.s,ln.set("hp-song",R.song),Ar(),yr(),Bt.ui(),qt.t=0,qt.i=0,Mp=hc(R.song)});We("btnKids").onclick=()=>{R.kids=!R.kids,ln.set("hp-kids",R.kids?"1":"0"),Ar(),yr(),Bt.ui()};We("btnSound").onclick=()=>{yr(),ip(!mc()),Ar()};We("btnQ").onclick=()=>{let i=["low","mid","high","ultra"];Ec(i[(i.indexOf(R.q)+1)%4],!0)};We("eName").addEventListener("keydown",i=>i.stopPropagation());window.addEventListener("resize",vu);async function yp(i){R.name=(We("eName").value||"").trim()||"Player",ln.set("hp-name",R.name);try{await document.fonts.load("700 40px Fredoka")}catch{}let e=1080,t=1350,n=864,s=1080;dn.setPixelRatio(1),dn.setSize(n,s,!1),hn.setPixelRatio(1),hn.setSize(n,s);let r={a:at.aspect,f:at.fov,p:at.position.clone(),q:at.quaternion.clone()};at.aspect=n/s,at.fov=50,at.updateProjectionMatrix(),at.position.set(1.7,1.75,3.2),at.lookAt(-.1,1.05,-.6),Sn.visible=!1,hn.render();let a=document.createElement("canvas");a.width=e,a.height=t;let o=a.getContext("2d");o.drawImage(dn.domElement,0,0,e,t),at.aspect=r.a,at.fov=r.f,at.position.copy(r.p),at.quaternion.copy(r.q),vu();let l=o.createLinearGradient(0,0,0,t);l.addColorStop(0,"rgba(8,6,20,.85)"),l.addColorStop(.26,"rgba(8,6,20,.1)"),l.addColorStop(.76,"rgba(8,6,20,.15)"),l.addColorStop(1,"rgba(8,6,20,.92)"),o.fillStyle=l,o.fillRect(0,0,e,t);let c=(g,y)=>`${g} ${y}px Fredoka, "Arial Rounded MT Bold", sans-serif`;o.textAlign="center",o.lineJoin="round";let h=(g,y,m,p,M="rgba(14,8,30,.85)",w=8)=>{o.strokeStyle=M,o.lineWidth=w,o.strokeText(g,y,m),o.fillStyle=p,o.fillText(g,y,m)};o.font=c(700,92),h("\u{1F3B9} Haunted Piano",e/2,125,"#e6dcff","rgba(30,10,60,.85)",10),o.font=c(500,44),h(R.name.slice(0,18),e/2,200,"#ffffff"),R.mode==="free"?(o.font=c(700,64),h(`\u{1F3B9} ${R.freeN} ${Qe("notes")}`,e/2,290,"#fff0c8")):(o.font=c(700,72),h(`${R.score}${R.grade?"  \xB7  "+R.grade:""}`,e/2,290,"#fff0c8"),o.font=c(500,34),h(`${R.mode==="echo"?Qe("echo"):bn.title} \xB7 ${R.kids?Qe("kids"):Qe("d_"+R.diff)}${R.newBest?" \xB7 "+Qe("newBest"):""}`,e/2,345,"#e8dcff")),o.font=c(600,48),h(Qe("cardTag"),e/2,1230,"#ffd27a"),o.font=c(400,32),h(Qe("cardPlay")+" \xB7 "+sp,e/2,1290,"rgba(255,255,255,.92)");let f=await new Promise(g=>a.toBlob(g,"image/png"));window.__hpCard={w:a.width,h:a.height};let u=new File([f],"haunted-piano.png",{type:"image/png"});if(i&&navigator.canShare&&navigator.canShare({files:[u]}))try{await navigator.share({files:[u],text:`Haunted Piano \u2014 ${Qe("cardTag")} ${sp}`});return}catch(g){if(g&&g.name==="AbortError")return}let d=document.createElement("a");d.href=URL.createObjectURL(f),d.download="haunted-piano.png",document.body.appendChild(d),d.click(),setTimeout(()=>{URL.revokeObjectURL(d.href),d.remove()},1500),bu(Qe("saved"))}var Mp=hc(R.song),qt={t:0,i:0,j:0,a:0};function Uy(i){qt.t+=i*.9;let e=Mp;for(;qt.i<e.mel.length&&e.mel[qt.i].t<=qt.t;){let t=e.mel[qt.i++];Mn(Ht,t.m,1),Ji[t.m]=.5,qi(Zi,t.m),Ln(t.m,.45,t.d*.9)}for(;qt.j<e.acc.length&&e.acc[qt.j].t<=qt.t;){let t=e.acc[qt.j++];for(let n of t.ms)Mn(Ht,n,1),Ln(n,.3,t.d*.9);qi(xu,t.ms[0])}qt.t>e.len+2.5&&(qt.t=-1,qt.i=0,qt.j=0)}var hp=new P(2.5,2.2,4),up=new P(0,1,0),Ha=new P,Mr=new P,pu=new P,mu=20;function Fy(i){R.songT+=i;let e=tn();for(;_c<gc.length&&gc[_c].t<=R.songT;){let t=gc[_c++];for(let n of t.ms)Ln(n,.5,t.d*.95),Mn(Ht,n,1);qi(xu,t.ms[0]),vt.react=Math.min(1,vt.react+.08)}for(;xc<Ga.length&&Ga[xc].t<=R.songT;){let t=Ga[xc++];Ln(t.m,.55,t.d),Mn(Ht,t.m,1),Ji[t.m]=.35,qi(Zi,t.m)}for(let t of Ki){if(t.hit||t.missed)continue;let n=t.t-R.songT;if(n>e.fall+.2)break;if(n<-e.win[2]){if(R.kids){t.missed=!0,Tr(t.mesh),t.mesh=null,Ln(t.m,.45,t.d),Mn(Ht,t.m,1),qi(Zi,t.m),R.judged++,R.accSum+=.2;continue}Cy(t);continue}t.mesh||(t.mesh=yy(),t.mesh.m.material.color.set(br[t.lane%6]),t.mesh.tr.material.color.set(br[t.lane%6]));let s=Sr(n/e.fall,-.2,1);t.mesh.m.position.set(Jn(t.lane),un+s*(gu-un)+.005,Dn+.004);let r=.8+(1-Math.max(0,s))*.35;t.mesh.m.scale.set(r,r,1),t.mesh.m.material.opacity=Sr((1-s)*4,0,1)*.95,t.mesh.tr.material.opacity=t.mesh.m.material.opacity*.6}R.songT>bn.len2+1.6&&!R.failed&&bs()}var Oy=()=>at.aspect<.85;function Sc(i){i=Math.min(i,1/20),R.gt+=i,R.pel+=i;for(let a=Kn.length-1;a>=0;a--)if(Kn[a].t<=R.gt){let o=Kn[a].f;Kn.splice(a,1),o()}let e=R.state;e==="play"?Fy(i):e==="echo"?Py(i):e==="menu"&&Uy(i);for(let a of Er)a.flash=Math.max(0,a.flash-i*5),a.ring.material.opacity=.45+a.flash*.5,a.ring.scale.setScalar(1+a.flash*.25),a.beam.material.uniforms.uA.value=.07+a.flash*.12;Wf(Ht,i,Ji),lu(xu,i,R.gt),lu(Zi,i,R.gt),Yf(fn,i,R.gt);{let a=Oy()&&(e==="play"||e==="echo"||e==="free")?.34:.78;Math.abs(Ht.lidA-a)>.001&&Xf(Ht,Ht.lidA+(a-Ht.lidA)*Math.min(1,i*2.5))}let t=at.aspect<.85,n;if(e==="play"||e==="echo"||e==="free")t?(Ha.set(0,1.9,2.5),Mr.set(0,.95,.45)):(Ha.set(0,1.75,2.4),Mr.set(0,1,.2));else if(e==="menu"){let a=Math.sin(R.gt*.07)*.55+.35,o=t?4.6:3.7;Ha.set(Math.sin(a)*o,1.75+Math.sin(R.gt*.11)*.15,Math.cos(a)*o+.2),Mr.set(-.1,1.1,-.4),t||(Mr.x-=.9)}else{let a=.55+Math.sin(R.gt*.08)*.2,o=t?5.4:3.9;Ha.set(Math.sin(a)*o,t?2.3:1.9,Math.cos(a)*o),Mr.set(t?-.2:-1,t?-.35:1.05,-.6)}hp.lerp(Ha,1-Math.exp(-i*2.2)),up.lerp(Mr,1-Math.exp(-i*2.2)),at.position.copy(hp),R.shake>.01&&at.position.add(new P(fu()-.5,fu()-.5,0).multiplyScalar(R.shake*.015)),at.lookAt(up),at.updateMatrixWorld(),R.shake*=Math.exp(-i*6);let s=Zi.a>.1?Zi.g.position.x:0;pu.set(s,1,.8),(e==="end"||e==="menu")&&pu.copy(at.position),Hf(vt,R.gt,i,pu),Kf(bc,i,Zn*dn.getPixelRatio()*.5/Math.tan(Ra.degToRad(at.fov/2))),mu-=i,mu<0&&(mu=30+fu()*25,(e==="play"||e==="free")&&Bt.owl()),(e==="play"||e==="echo")&&Math.floor(R.gt*10)!==R._h&&(R._h=Math.floor(R.gt*10),wc());let r=e==="free"?"hintF":e==="echo"?null:R.kids?"hintK":vp?"hintT":"hint";r?(We("hint").textContent=Qe(r),We("hint").classList.toggle("show",e==="play"&&R.songT<-.3&&R.pel>.3||e==="free"&&R.freeN===0&&R.pel>.3)):We("hint").classList.toggle("show",e==="echo"&&Le&&(Le.phase==="listen"||Le.phase==="play"))}function Sp(){hn.render()}var Kt={ema:60,n:0,acc:0,frames:0,checked:0};function By(i){if(Kt.acc+=i,Kt.frames++,Kt.acc>=1){let e=Kt.frames/Kt.acc;if(Kt.ema=Kt.n?Kt.ema*.6+e*.4:e,Kt.n++,Kt.acc=0,Kt.frames=0,!R.qUser&&!window.__hpNoAutoQ&&Kt.n>=5&&Kt.ema<40&&R.q!=="low"&&R.gt-Kt.checked>3){Kt.checked=R.gt;let t=["low","mid","high","ultra"],n=t[t.indexOf(R.q)-1];Ec(n),bu(`${Qe("autoQ")} ${Qe("q_"+n)} (${Math.round(Kt.ema)} fps)`),Kt.n=0}}}Ec(R.q);Ar();Tc("menu");Sn.visible=!1;for(let i=0;i<90;i++)Sc(1/30);var dp=performance.now();function bp(i){let e=(i-dp)/1e3;dp=i,window.__hpManual||(Sc(e),Sp(),By(e)),requestAnimationFrame(bp)}requestAnimationFrame(bp);var zy=i=>{let e=new P(Jn(i),un,Dn).project(at);return{x:(e.x*.5+.5)*En,y:(-e.y*.5+.5)*Zn}},ky=i=>{let e=new P(Ss(i),In+.005,qn-.03).project(at);return{x:(e.x*.5+.5)*En,y:(-e.y*.5+.5)*Zn}};window.__hp={S:R,audioState:()=>tp(),start:wr,end:bs,step:(i,e=1)=>{for(let t=0;t<e;t++)Sc(i);Sp()},stepq:(i,e=1)=>{for(let t=0;t<e;t++)Sc(i)},log:hu,quality:i=>i?Ec(i,!0):R.q,renderer:dn,chart:()=>Ki.map(i=>({t:i.t,lane:i.lane,m:i.m,hit:i.hit,missed:i.missed})),press:Mu,lanes:()=>tn().lanes,laneScreen:zy,keyScreen:ky,freeNote:Su,next:()=>Ki.find(i=>!i.hit&&!i.missed),echo:()=>Le&&{phase:Le.phase,seq:Le.seq.map(i=>i.lane),k:Le.k},choir:()=>fn.a,chand:()=>vt.chandSwing,songs:Jf,diff:()=>R.diff,cam:()=>({p:at.position.toArray(),near:at.near}),react:()=>vt.react,eyes:()=>vt.eyes.map(i=>[i.rotation.x,i.rotation.y])};We("top").prepend(We("btnQuit"));document.body.classList.add("ready");})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
