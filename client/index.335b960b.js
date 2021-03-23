import{S as n,i as r,s as e,e as t,t as f,a,o,z as i,b as s,f as c,g as u,d as l,c as d,p as m,h,j as $,k as _,D as p,r as g,E as b,l as v,v as P,A as S,u as E,w as x,F as y,B as A,n as N,C as w,G as C}from"./client.e49cb35e.js";function I(n){let r,e=`\n$ inputArr: [${n[1].join(", ")}]\n$ outArr: [${n[3].join(", ")}]\n$ max + min = ${n[3][n[3].length-1]} + ${n[3][0]} = ${n[3][n[3].length-1]+n[3][0]}\n`;return{c(){r=f(e)},l(n){r=u(n,e)},m(n,e){$(n,r,e)},p(n,t){10&t&&e!==(e=`\n$ inputArr: [${n[1].join(", ")}]\n$ outArr: [${n[3].join(", ")}]\n$ max + min = ${n[3][n[3].length-1]} + ${n[3][0]} = ${n[3][n[3].length-1]+n[3][0]}\n`)&&v(r,e)},d(n){n&&l(r)}}}function j(n){let r,e="\nfunction randIntn(n: number): number {\n    return Math.floor(Math.random() * n);\n}\n\nfunction makeRandomArray(size: number, maxN = 10): number[] {\n    const arr = new Array(size);\n    for (let i = 0; i < size; i++) {\n        arr[i] = randIntn(maxN);\n    }\n\n    return arr;\n}\n\nfunction quickSort(arr: number[], lo: number, hi: number) {\n    if (arr.length < 2) {\n        return;\n    }\n\n    const idx = doPivot(arr, lo, hi);\n    if (lo < idx - 1) {\n        quickSort(arr, lo, idx - 1);\n    }\n\n    if (idx < hi) {\n        quickSort(arr, idx, hi);\n    }\n}\n\nfunction doPivot(arr: number[], lo: number, hi: number): number {\n    const pivot = arr[Math.floor((lo + hi) / 2)];\n    while (lo <= hi) {\n        while (arr[lo] < pivot) {\n            lo++;\n        }\n\n        while (arr[hi] > pivot) {\n            hi--;\n        }\n\n        if (lo <= hi) {\n            [arr[lo], arr[hi]] = [arr[hi], arr[lo]];\n            lo++;\n            hi--;\n        }\n    }\n\n    return lo;\n}\n\nfunction qSort(arr: number[]): number[] {\n    const arrCopy = arr.slice();\n    quickSort(arrCopy, 0, arrCopy.length - 1);\n    return arrCopy;\n}\n\nconst inputArr = makeRandomArray(10);\nconst outArr = qSort(inputArr);\n\nconsole.log(inputArr);\nconsole.log(outArr);\n";return{c(){r=f(e)},l(n){r=u(n,e)},m(n,e){$(n,r,e)},p:N,d(n){n&&l(r)}}}function k(n){let r,e,A,N,C,k,R,q,M,T,J,O,z,B,H,L,D,F,G,U,K,Q,V,W,X,Y,Z,nn,rn,en,tn,fn,an,on,sn;var cn=n[2];function un(n){return{props:{language:"shell-session",$$slots:{default:[I]},$$scope:{ctx:n}}}}cn&&(Y=new cn(un(n)));var ln=n[2];function dn(n){return{props:{language:"ts",showLineNumbers:!0,$$slots:{default:[j]},$$scope:{ctx:n}}}}return ln&&(tn=new ln(dn(n))),{c(){r=t("h3"),e=f("Варіант №6"),A=a(),N=t("p"),C=f("Створити одновимірний массив, кількість елементів якого задана користувачем. Обчислити суму елементів між\n    максимальним та мінімальними значеннями масиву."),k=a(),R=t("p"),q=f("Упорядкувати масив у порядку зростання (метод "),M=t("b"),T=f("швидкого"),J=f(" сортування). Надрукувати вхідний та вихідний масив."),O=a(),z=t("p"),B=f("Застосувати функції"),H=a(),L=t("h3"),D=f("Результат"),F=a(),G=t("label"),U=t("p"),K=f("Розмір масиву: "),Q=f(n[0]),V=a(),W=t("input"),X=a(),Y&&o(Y.$$.fragment),Z=a(),nn=t("h3"),rn=f("Код"),en=a(),tn&&o(tn.$$.fragment),fn=i(),this.h()},l(t){r=s(t,"H3",{});var f=c(r);e=u(f,"Варіант №6"),f.forEach(l),A=d(t),N=s(t,"P",{});var a=c(N);C=u(a,"Створити одновимірний массив, кількість елементів якого задана користувачем. Обчислити суму елементів між\n    максимальним та мінімальними значеннями масиву."),a.forEach(l),k=d(t),R=s(t,"P",{});var o=c(R);q=u(o,"Упорядкувати масив у порядку зростання (метод "),M=s(o,"B",{});var h=c(M);T=u(h,"швидкого"),h.forEach(l),J=u(o," сортування). Надрукувати вхідний та вихідний масив."),o.forEach(l),O=d(t),z=s(t,"P",{});var $=c(z);B=u($,"Застосувати функції"),$.forEach(l),H=d(t),L=s(t,"H3",{});var _=c(L);D=u(_,"Результат"),_.forEach(l),F=d(t),G=s(t,"LABEL",{});var p=c(G);U=s(p,"P",{});var g=c(U);K=u(g,"Розмір масиву: "),Q=u(g,n[0]),g.forEach(l),V=d(p),W=s(p,"INPUT",{type:!0,min:!0,max:!0}),p.forEach(l),X=d(t),Y&&m(Y.$$.fragment,t),Z=d(t),nn=s(t,"H3",{});var b=c(nn);rn=u(b,"Код"),b.forEach(l),en=d(t),tn&&m(tn.$$.fragment,t),fn=i(),this.h()},h(){h(W,"type","range"),h(W,"min","1"),h(W,"max","10")},m(t,f){$(t,r,f),_(r,e),$(t,A,f),$(t,N,f),_(N,C),$(t,k,f),$(t,R,f),_(R,q),_(R,M),_(M,T),_(R,J),$(t,O,f),$(t,z,f),_(z,B),$(t,H,f),$(t,L,f),_(L,D),$(t,F,f),$(t,G,f),_(G,U),_(U,K),_(U,Q),_(G,V),_(G,W),p(W,n[0]),$(t,X,f),Y&&g(Y,t,f),$(t,Z,f),$(t,nn,f),_(nn,rn),$(t,en,f),tn&&g(tn,t,f),$(t,fn,f),an=!0,on||(sn=[b(W,"change",n[4]),b(W,"input",n[4])],on=!0)},p(n,[r]){(!an||1&r)&&v(Q,n[0]),1&r&&p(W,n[0]);const e={};if(74&r&&(e.$$scope={dirty:r,ctx:n}),cn!==(cn=n[2])){if(Y){w();const n=Y;P(n.$$.fragment,1,0,(()=>{x(n,1)})),S()}cn?(Y=new cn(un(n)),o(Y.$$.fragment),E(Y.$$.fragment,1),g(Y,Z.parentNode,Z)):Y=null}else cn&&Y.$set(e);const t={};if(64&r&&(t.$$scope={dirty:r,ctx:n}),ln!==(ln=n[2])){if(tn){w();const n=tn;P(n.$$.fragment,1,0,(()=>{x(n,1)})),S()}ln?(tn=new ln(dn(n)),o(tn.$$.fragment),E(tn.$$.fragment,1),g(tn,fn.parentNode,fn)):tn=null}else ln&&tn.$set(t)},i(n){an||(Y&&E(Y.$$.fragment,n),tn&&E(tn.$$.fragment,n),an=!0)},o(n){Y&&P(Y.$$.fragment,n),tn&&P(tn.$$.fragment,n),an=!1},d(n){n&&l(r),n&&l(A),n&&l(N),n&&l(k),n&&l(R),n&&l(O),n&&l(z),n&&l(H),n&&l(L),n&&l(F),n&&l(G),n&&l(X),Y&&x(Y,n),n&&l(Z),n&&l(nn),n&&l(en),n&&l(fn),tn&&x(tn,n),on=!1,y(sn)}}}function R(n,r,e){if(n.length<2)return;const t=function(n,r,e){const t=n[Math.floor((r+e)/2)];for(;r<=e;){for(;n[r]<t;)r++;for(;n[e]>t;)e--;r<=e&&([n[r],n[e]]=[n[e],n[r]],r++,e--)}return r}(n,r,e);r<t-1&&R(n,r,t-1),t<e&&R(n,t,e)}function q(n,r,e){let t,f;var a=this&&this.__awaiter||function(n,r,e,t){return new(e||(e=Promise))((function(f,a){function o(n){try{s(t.next(n))}catch(n){a(n)}}function i(n){try{s(t.throw(n))}catch(n){a(n)}}function s(n){var r;n.done?f(n.value):(r=n.value,r instanceof e?r:new e((function(n){n(r)}))).then(o,i)}s((t=t.apply(n,r||[])).next())}))};let o;A((()=>a(void 0,void 0,void 0,(function*(){const n=yield Promise.all([import("./index.17ccca05.js"),__inject_styles(["client-13f4b814.css"])]).then((function(n){return n[0]}));yield Promise.all([Promise.all([import("./prism-okaidia.c69ad818.js"),__inject_styles(["prism-okaidia-c096b22b.css"])]).then((function(n){return n[0]})),Promise.all([import("./prism-typescript.26bf4c5f.js"),]).then((function(n){return n[0]})),Promise.all([import("./prism-shell-session.5b740571.js"),]).then((function(n){return n[0]})),Promise.all([import("./prism-line-numbers.e216b9e0.js"),__inject_styles(["prism-line-numbers-1580f458.css"])]).then((function(n){return n[0]}))]),e(2,o=n.default)}))));let i=10;return n.$$.update=()=>{1&n.$$.dirty&&e(1,t=function(n,r=10){const e=new Array(n);for(let f=0;f<n;f++)e[f]=(t=r,Math.floor(Math.random()*t));var t;return e}(i)),2&n.$$.dirty&&e(3,f=function(n){const r=n.slice();return R(r,0,r.length-1),r}(t))},[i,t,o,f,function(){i=C(this.value),e(0,i)}]}export default class extends n{constructor(n){super(),r(this,n,q,k,e,{})}}

import __inject_styles from './inject_styles.5607aec6.js';