import{S as e,i as t,s,a,o as n,q as r,d as l,c as o,p as $,j as c,r as f,u as i,v as m,w as u,x as h,e as d,b as g,f as p,y as b,h as x}from"./client.e49cb35e.js";import{L as v,a as y}from"./LabNav.36e16f5a.js";function z(e){let t,s;const a=e[1].default,n=h(a,e,e[2],null);return{c(){t=d("div"),n&&n.c()},l(e){t=g(e,"DIV",{});var s=p(t);n&&n.l(s),s.forEach(l)},m(e,a){c(e,t,a),n&&n.m(t,null),s=!0},p(e,t){n&&n.p&&4&t&&b(n,a,e,e[2],t,null,null)},i(e){s||(i(n,e),s=!0)},o(e){m(n,e),s=!1},d(e){e&&l(t),n&&n.d(e)}}}function j(e){let t,s,a;return s=new y({props:{segment:e[0],links:[{segment:void 0,href:"lab3/zatsarnyi",text:"Середовище розробки. Шлях до файлів"},{segment:"table",href:"lab3/zatsarnyi/table",text:"Розмітка за допомогою таблиці"},{segment:"blocks",href:"lab3/zatsarnyi/blocks",text:"Розмітка за допомогою блочних елементів"},{segment:"flexbox",href:"lab3/zatsarnyi/flexbox",text:"Flexbox"}]}}),{c(){t=d("div"),n(s.$$.fragment),this.h()},l(e){t=g(e,"DIV",{slot:!0});var a=p(t);$(s.$$.fragment,a),a.forEach(l),this.h()},h(){x(t,"slot","nav-bar")},m(e,n){c(e,t,n),f(s,t,null),a=!0},p(e,t){const a={};1&t&&(a.segment=e[0]),s.$set(a)},i(e){a||(i(s.$$.fragment,e),a=!0)},o(e){m(s.$$.fragment,e),a=!1},d(e){e&&l(t),u(s)}}}function k(e){let t,s,h;return s=new v({props:{$$slots:{"nav-bar":[j],default:[z]},$$scope:{ctx:e}}}),{c(){t=a(),n(s.$$.fragment),this.h()},l(e){r('[data-svelte="svelte-9e57xd"]',document.head).forEach(l),t=o(e),$(s.$$.fragment,e),this.h()},h(){document.title="Лабораторна робота №2"},m(e,a){c(e,t,a),f(s,e,a),h=!0},p(e,[t]){const a={};5&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){h||(i(s.$$.fragment,e),h=!0)},o(e){m(s.$$.fragment,e),h=!1},d(e){e&&l(t),u(s,e)}}}function w(e,t,s){let{$$slots:a={},$$scope:n}=t,{segment:r}=t;return e.$$set=e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(2,n=e.$$scope)},[r,a,n]}export default class extends e{constructor(e){super(),t(this,e,w,k,s,{segment:0})}}