if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const l=e=>s(e,o),a={module:{uri:o},exports:c,require:l};i[o]=Promise.all(n.map((e=>a[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BE7l4sj2.js",revision:null},{url:"assets/index-BLrtgrJY.css",revision:null},{url:"assets/mgba-DRRjgPTs.wasm",revision:null},{url:"assets/vendor_@mui-cBjKiS00.js",revision:null},{url:"assets/vendor_mgba-wasm-BLfC_69t.js",revision:null},{url:"assets/vendor_react-joyride-BeiANMH_.js",revision:null},{url:"assets/vendor-D9ZbVt_x.js",revision:null},{url:"index.html",revision:"f68c10e61b51c406c11452736b033e61"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"img/favicon.ico",revision:"98a43945afc7c943daa2ed84f997718f"},{url:"img/icon-144x144.png",revision:"89351e993665403ca07eb747a05a74b4"},{url:"img/icon-192x192.png",revision:"58c5fbb94b7e7feaabc7a8bfed9f00c5"},{url:"img/icon-256x256.png",revision:"2b81aa14c5e117b7cd9b7d38b60e25f7"},{url:"img/icon-384x384.png",revision:"9976f30e2b3bc9168a7dd4024ee1dc15"},{url:"img/icon-512x512.png",revision:"39adf26d66341a852448b01c61647dfb"},{url:"img/maskable-icon-144x144.png",revision:"87ec9b4a7fc59450b7041e94cb96d287"},{url:"img/maskable-icon-192x192.png",revision:"875058165b6b2d0c013f4c53e5a82928"},{url:"img/maskable-icon-256x256.png",revision:"602975c0da2909830b2ce4ddd59ce5c9"},{url:"img/maskable-icon-384x384.png",revision:"2d086b17ed3f333b0d0b88973718da27"},{url:"img/maskable-icon-512x512.png",revision:"213947a1e0863e2236fd4c631cff5859"},{url:"manifest.webmanifest",revision:"869df593ed1aa37d50d0f4f89d6bf644"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));