!function(){"use strict";const e=1616496079385,t=`cache${e}`,n=["/client/client.e49cb35e.js","/client/inject_styles.5607aec6.js","/client/index.97815ddb.js","/client/about.24dabdcc.js","/client/index.b6191793.js","/client/[slug].c655e518.js","/client/_layout.4d062260.js","/client/LabNav.36e16f5a.js","/client/index.7d90298c.js","/client/description_of_the_subject_environment.ed7aa068.js","/client/development_environment.6f2eb6b1.js","/client/_layout.40b5709e.js","/client/index.2bfc1493.js","/client/catalogue.460cb5a1.js","/client/product.b7b2a799.js","/client/cart.44e916ef.js","/client/site_location.c1e442b4.js","/client/conclusion.4654654b.js","/client/_layout.b50e7098.js","/client/index.1dca1e41.js","/client/floating_elements.4f93e61e.js","/client/identifiers.e3c443fe.js","/client/_layout.03195788.js","/client/index.9762a8d9.js","/client/grouping.5fa0898f.js","/client/other.1c0ac66c.js","/client/_layout.79a3567d.js","/client/index.963e2932.js","/client/embedding.5104aec2.js","/client/import.8cca0ed4.js","/client/inline.d6a20993.js","/client/indents.ec61471a.js","/client/lists.5ef79acf.js","/client/_layout.f2565ad0.js","/client/index.4e5bedb8.js","/client/conclusions.85d7da81.js","/client/_layout.e1aec098.js","/client/index.d3f5273d.js","/client/flexbox.09aa2730.js","/client/blocks.6da4101f.js","/client/table.be93d3f1.js","/client/_layout.2170de28.js","/client/index.f10523ab.js","/client/flexbox.3936b5bc.js","/client/blocks.4a88aef8.js","/client/table.7bd8039c.js","/client/_layout.3108d743.js","/client/index.2adac805.js","/client/flexbox.2932abec.js","/client/blocks.dffcb6c2.js","/client/table.a1ebf5b2.js","/client/home.a4fa3315.js","/client/html.7fdb480e.js","/client/css.ad69985b.js","/client/_layout.20db0e94.js","/client/index.0807b61d.js","/client/_layout.d368d11b.js","/client/index.070e92a6.js","/client/index.335b960b.js","/client/index.4f558105.js","/client/index.d645e9bd.js","/client/_layout.09000c5f.js","/client/index.6ed7eb3e.js","/client/index.521dffae.js","/client/Calendar.62591b8f.js","/client/index.8732f830.js","/client/index.80869bd5.js","/client/_layout.271708b2.js","/client/index.e42a19fb.js","/client/index.265d110c.js","/client/index.255ccd7a.js","/client/index.398d5765.js","/client/js.bca8ce0e.js","/client/_layout.94a92246.js","/client/index.cd029172.js","/client/solution.5932902a.js","/client/_layout.896a57ac.js","/client/index.1ea375c7.js","/client/solution.99e37190.js","/client/_layout.d4ceebed.js","/client/index.31d1cc6e.js","/client/_layout.d8b66203.js","/client/index.02a8af83.js","/client/_layout.29099648.js","/client/index.11631a4e.js","/client/index.17ccca05.js","/client/prism-okaidia.c69ad818.js","/client/prism-xml-doc.6485befb.js","/client/prism-line-numbers.e216b9e0.js","/client/prism-line-highlight.6bd06295.js","/client/prism-line-highlight.6eea236f.js","/client/prism-css.c6083894.js","/client/prism-typescript.26bf4c5f.js","/client/prism-shell-session.5b740571.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),i=n.protocol.startsWith("http"),s=n.hostname===self.location.hostname&&n.port!==self.location.port,l=n.host===self.location.host&&c.has(n.pathname),a="only-if-cached"===t.request.cache&&!l;!i||s||a||t.respondWith((async()=>l&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
