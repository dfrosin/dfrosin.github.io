if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const a=e=>n(e,t),l={module:{uri:t},exports:o,require:a};s[t]=Promise.all(i.map((e=>l[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-13d6fed4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-icon-180.897eba3f.png",revision:null},{url:"assets/favicon-196.568fc082.png",revision:null},{url:"assets/index.0b21fc4b.css",revision:null},{url:"assets/index.a62955f7.js",revision:null},{url:"assets/manifest-icon-512.maskable.8371ca80.png",revision:null},{url:"assets/vendor.ad9d9f1c.js",revision:null},{url:"index.html",revision:"24b764d553a5cb1aee7c530e5e778e0e"},{url:"manifest.webmanifest",revision:"36cc7e95ef7deab52bff0165e54b0520"},{url:"manifest-icon-192.maskable.png",revision:"be1e495039de3d258c94d2b2870f6f40"},{url:"manifest-icon-512.maskable.png",revision:"fd005a3e533859cb87cf3af402fa5557"},{url:"manifest.webmanifest",revision:"36cc7e95ef7deab52bff0165e54b0520"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/https:\/\/api\.spacexdata\.com\/v4\/launches\/.+/i,new e.NetworkFirst,"GET"),e.registerRoute(/https:\/\/api\.nasa\.gov\/mars-photos\/api\/v1\/rovers\/.+/i,new e.NetworkFirst,"GET")}));
