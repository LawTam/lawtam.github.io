(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{hVfd:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));a("91GP");var n=a("q1tI"),r=a.n(n),o=a("MHn+"),c=a("Womt"),l=a("NK00"),i=(a("DKVj"),a("QXNl")),s=a("pCm1"),u=a.n(s),m=a("LbRr"),h=a("rjxO");function f(){return r.a.createElement("div",{style:{color:"purple",overflowY:"hidden"}},r.a.createElement(h.a,null),r.a.createElement(m.a,{headerText:"Welcome to my portfolio!"}),r.a.createElement("div",null," This version 2 of the portfolio is still in construction. It will be a React/Gatsby App featuring three.js, a 3d graphics API. Stay tuned! "),r.a.createElement(o.a,{style:{position:"absolute",top:"0",height:"100vh",zIndex:"-1"},camera:{position:[0,0,5]},onCreated:function(e){var t=e.gl;t.shadowMap.enabled=!0,t.shadowMap.type=c.PCFSoftShadowMap}},r.a.createElement(n.Suspense,{fallback:r.a.createElement(o.b,{center:!0,className:"loading",children:"Loading..."})},r.a.createElement("fog",{attach:"fog",args:["white",10,20]}),r.a.createElement("spotLight",{position:[10,10,10],castShadow:!0}),r.a.createElement(E,{position:[-1.2,0,0]}),r.a.createElement(E,{position:[1.2,0,0]}),r.a.createElement(d,null),r.a.createElement(p,null)),r.a.createElement(i.a,null)))}var p=function(){var e=Object(n.useState)(),t=(e[0],e[1]);return Object(n.useEffect)((function(){(new l.a).load(u.a,t)})),null},d=function(){return r.a.createElement("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.5,0],receiveShadow:!0},r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[100,100]}),r.a.createElement("meshPhysicalMaterial",{attach:"material",color:"white"}))},E=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),o=a[0],c=a[1],l=Object(n.useState)(!1),i=l[0],s=l[1];return r.a.createElement("mesh",Object.assign({},e,{ref:t,scale:i?[1.5,1.5,1.5]:[1,1,1],onClick:function(e){return s(!i)},onPointerOver:function(e){return c(!0)},onPointerOut:function(e){return c(!1)},castShadow:!0}),r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[1,1,1]}),r.a.createElement("meshPhysicalMaterial",{attach:"material",color:o?"hotpink":"orange"}))}}}]);
//# sourceMappingURL=component---src-pages-react-three-fiber-test-js-62839ac11fce3acaf99c.js.map