import{S as t,i as e,s,a,o as n,q as r,d as l,c as o,p as $,j as c,r as i,u as m,v as f,w as u,x as h,e as d,b as g,f as p,y as x,h as b}from"./client.50021aa0.js";import{L as v,a as y}from"./LabNav.ca8878c4.js";function z(t){let e,s;const a=t[1].default,n=h(a,t,t[2],null);return{c(){e=d("div"),n&&n.c()},l(t){e=g(t,"DIV",{});var s=p(e);n&&n.l(s),s.forEach(l)},m(t,a){c(t,e,a),n&&n.m(e,null),s=!0},p(t,e){n&&n.p&&4&e&&x(n,a,t,t[2],e,null,null)},i(t){s||(m(n,t),s=!0)},o(t){f(n,t),s=!1},d(t){t&&l(e),n&&n.d(t)}}}function j(t){let e,s,a;return s=new y({props:{segment:t[0],links:[{segment:void 0,href:"lab3/zatsarnyi",text:"Середовище розробки. Шлях до файлів"},{segment:"table",href:"lab3/zatsarnyi/table",text:"Розмітка за допомогою таблиці"},{segment:"blocks",href:"lab3/zatsarnyi/blocks",text:"Розмітка за допомогою блочних елементів"},{segment:"flexbox",href:"lab3/zatsarnyi/flexbox",text:"Flexbox"}]}}),{c(){e=d("div"),n(s.$$.fragment),this.h()},l(t){e=g(t,"DIV",{slot:!0});var a=p(e);$(s.$$.fragment,a),a.forEach(l),this.h()},h(){b(e,"slot","nav-bar")},m(t,n){c(t,e,n),i(s,e,null),a=!0},p(t,e){const a={};1&e&&(a.segment=t[0]),s.$set(a)},i(t){a||(m(s.$$.fragment,t),a=!0)},o(t){f(s.$$.fragment,t),a=!1},d(t){t&&l(e),u(s)}}}function k(t){let e,s,h;return s=new v({props:{$$slots:{"nav-bar":[j],default:[z]},$$scope:{ctx:t}}}),{c(){e=a(),n(s.$$.fragment),this.h()},l(t){r('[data-svelte="svelte-9e57xd"]',document.head).forEach(l),e=o(t),$(s.$$.fragment,t),this.h()},h(){document.title="Лабораторна робота №2"},m(t,a){c(t,e,a),i(s,t,a),h=!0},p(t,[e]){const a={};5&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){h||(m(s.$$.fragment,t),h=!0)},o(t){f(s.$$.fragment,t),h=!1},d(t){t&&l(e),u(s,t)}}}function w(t,e,s){let{$$slots:a={},$$scope:n}=e,{segment:r}=e;return t.$$set=t=>{"segment"in t&&s(0,r=t.segment),"$$scope"in t&&s(2,n=t.$$scope)},[r,a,n]}export default class extends t{constructor(t){super(),e(this,t,w,k,s,{segment:0})}}
