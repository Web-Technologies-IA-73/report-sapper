!function(){"use strict";const e=1614680298809,t=`cache${e}`,n=["/client/client.ac5b6e55.js","/client/inject_styles.5607aec6.js","/client/index.9fbbcdb0.js","/client/about.db957d0e.js","/client/index.c37a29b2.js","/client/[slug].f9d20272.js","/client/_layout.9fba3409.js","/client/LabNav.575b204b.js","/client/index.fc0cb202.js","/client/description_of_the_subject_environment.84f0d8d2.js","/client/development_environment.0681b777.js","/client/_layout.b0564d6e.js","/client/index.f9f52ad5.js","/client/catalogue.85185df2.js","/client/product.1288f373.js","/client/cart.fbb0866d.js","/client/site_location.1d98a541.js","/client/conclusion.c55d2bf7.js","/client/_layout.f9d1b25a.js","/client/index.9f34ea47.js","/client/floating_elements.eea888be.js","/client/identifiers.817defca.js","/client/_layout.0b0f2d61.js","/client/index.c16aa47f.js","/client/grouping.e9d75a95.js","/client/other.3e0de74b.js","/client/_layout.df57d691.js","/client/index.30ef93d8.js","/client/embedding.163299ec.js","/client/import.744e22c6.js","/client/inline.6d5e54f9.js","/client/indents.b6e12152.js","/client/lists.919ec184.js","/client/_layout.1816f849.js","/client/index.4b8f3f89.js","/client/conclusions.ed203221.js","/client/_layout.395433e2.js","/client/index.eb388750.js","/client/flexbox.61c290c6.js","/client/blocks.bbe647cf.js","/client/table.30d4419f.js","/client/_layout.d7637496.js","/client/index.e0c71665.js","/client/flexbox.24b19d23.js","/client/blocks.325cd4ef.js","/client/table.7c53931c.js","/client/_layout.ee3df3e6.js","/client/index.5e62aad8.js","/client/flexbox.e2a83a5c.js","/client/blocks.3785acb9.js","/client/table.325bdd0d.js","/client/home.79b48d2a.js","/client/html.8a84e24f.js","/client/css.915a7903.js","/client/_layout.8a3cb4d6.js","/client/index.c10610d9.js","/client/_layout.4ef2bac6.js","/client/index.b32b4a9b.js","/client/_layout.9cf82bec.js","/client/index.61f30212.js","/client/_layout.3807c8b4.js","/client/index.4abe693c.js","/client/_layout.85ae083b.js","/client/index.fd4380df.js","/client/_layout.92d0a8f1.js","/client/index.e723aef0.js","/client/index.4d1884fd.js","/client/prism-okaidia.c69ad818.js","/client/prism-xml-doc.6485befb.js","/client/prism-line-numbers.e216b9e0.js","/client/prism-line-highlight.6bd06295.js","/client/prism-line-highlight.6eea236f.js","/client/prism-css.c6083894.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),i=n.protocol.startsWith("http"),s=n.hostname===self.location.hostname&&n.port!==self.location.port,l=n.host===self.location.host&&c.has(n.pathname),a="only-if-cached"===t.request.cache&&!l;!i||s||a||t.respondWith((async()=>l&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
