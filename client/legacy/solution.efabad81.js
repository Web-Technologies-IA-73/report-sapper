import{_ as n,a as r,b as t,c as e,i as s,d as c,S as a,s as i,f as o,t as f,e as l,j as u,k as h,l as p,g as v,h as m,m as d,n as g,o as E,p as w}from"./client.cd069576.js";function y(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,c=r(n);if(e){var a=r(this).constructor;s=Reflect.construct(c,arguments,a)}else s=c.apply(this,arguments);return t(this,s)}}function $(n){var r,t,e,s,c,a,i,y,$,_,x,b,R,k,P,j,O,C,D,z,B,G,H,I,M,S,q,A;return{c:function(){r=o("h3"),t=f("Конфігурація веб-сервера"),e=l(),s=o("p"),c=f("У якості веб-сервера було використано nginx"),a=l(),i=o("p"),y=f("Конфігурація nginx має наступний вигляд"),$=l(),_=o("pre"),x=o("code"),b=f("master_process off;\n    worker_processes 1;\n    pid nginx.pid;\n\n    events {\n        worker_connections 1024;\n    }\n\n    http {\n        include mime.types;\n\n        server {\n            listen 80;\n            root /www/web;\n\n            location / {\n                try_files $uri $uri.html $uri/ =404;\n            }\n        }\n    }"),R=l(),k=o("p"),P=f("Завдяки "),j=o("code"),O=f("try_files $uri $uri.html $uri/ =404;"),C=f(" можна прибрати з адресу сторінки розширення\n"),D=o("code"),z=f(".html"),B=f("."),G=l(),H=o("h3"),I=f("Результат"),M=l(),S=o("img"),q=l(),A=o("img"),this.h()},l:function(n){r=u(n,"H3",{});var o=h(r);t=p(o,"Конфігурація веб-сервера"),o.forEach(v),e=m(n),s=u(n,"P",{});var f=h(s);c=p(f,"У якості веб-сервера було використано nginx"),f.forEach(v),a=m(n),i=u(n,"P",{});var l=h(i);y=p(l,"Конфігурація nginx має наступний вигляд"),l.forEach(v),$=m(n),_=u(n,"PRE",{});var d=h(_);x=u(d,"CODE",{});var g=h(x);b=p(g,"master_process off;\n    worker_processes 1;\n    pid nginx.pid;\n\n    events {\n        worker_connections 1024;\n    }\n\n    http {\n        include mime.types;\n\n        server {\n            listen 80;\n            root /www/web;\n\n            location / {\n                try_files $uri $uri.html $uri/ =404;\n            }\n        }\n    }"),g.forEach(v),d.forEach(v),R=m(n),k=u(n,"P",{});var E=h(k);P=p(E,"Завдяки "),j=u(E,"CODE",{});var w=h(j);O=p(w,"try_files $uri $uri.html $uri/ =404;"),w.forEach(v),C=p(E," можна прибрати з адресу сторінки розширення\n"),D=u(E,"CODE",{});var F=h(D);z=p(F,".html"),F.forEach(v),B=p(E,"."),E.forEach(v),G=m(n),H=u(n,"H3",{});var J=h(H);I=p(J,"Результат"),J.forEach(v),M=m(n),S=u(n,"IMG",{src:!0,alt:!0,class:!0}),q=m(n),A=u(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){S.src!=="./client/8ea582953f65f2b0.png"&&d(S,"src","./client/8ea582953f65f2b0.png"),d(S,"alt","Результат"),d(S,"class","svelte-1244zjh"),A.src!=="./client/e86f0329a74b3e25.png"&&d(A,"src","./client/e86f0329a74b3e25.png"),d(A,"alt","Результат"),d(A,"class","svelte-1244zjh")},m:function(n,o){g(n,r,o),E(r,t),g(n,e,o),g(n,s,o),E(s,c),g(n,a,o),g(n,i,o),E(i,y),g(n,$,o),g(n,_,o),E(_,x),E(x,b),g(n,R,o),g(n,k,o),E(k,P),E(k,j),E(j,O),E(k,C),E(k,D),E(D,z),E(k,B),g(n,G,o),g(n,H,o),E(H,I),g(n,M,o),g(n,S,o),g(n,q,o),g(n,A,o)},p:w,i:w,o:w,d:function(n){n&&v(r),n&&v(e),n&&v(s),n&&v(a),n&&v(i),n&&v($),n&&v(_),n&&v(R),n&&v(k),n&&v(G),n&&v(H),n&&v(M),n&&v(S),n&&v(q),n&&v(A)}}}var _=function(r){n(o,a);var t=y(o);function o(n){var r;return e(this,o),r=t.call(this),s(c(r),n,null,$,i,{}),r}return o}();export default _;
