import{S as e,i as t,s,a as n,o as a,q as l,d as r,c as o,p as i,j as f,r as $,u as c,v as m,w as d,x as g,e as h,b as u,f as p,y as x,h as b}from"./client.e49cb35e.js";import{L as v,a as _}from"./LabNav.36e16f5a.js";function j(e){let t,s;const n=e[1].default,a=g(n,e,e[2],null);return{c(){t=h("div"),a&&a.c()},l(e){t=u(e,"DIV",{});var s=p(t);a&&a.l(s),s.forEach(r)},m(e,n){f(e,t,n),a&&a.m(t,null),s=!0},p(e,t){a&&a.p&&4&t&&x(a,n,e,e[2],t,null,null)},i(e){s||(c(a,e),s=!0)},o(e){m(a,e),s=!1},d(e){e&&r(t),a&&a.d(e)}}}function w(e){let t,s,n;return s=new _({props:{segment:e[0],links:[{segment:void 0,href:"lab2",text:"Постановка задачі"},{segment:"css_defs",href:"lab2/css_defs",text:"Визначення таблиці стилей"},{segment:"lists",href:"lab2/lists",text:"Списки"},{segment:"identifiers",href:"lab2/identifiers",text:"Ідентифікатори"},{segment:"indents",href:"lab2/indents",text:"Відступи"},{segment:"floating_elements",href:"lab2/floating_elements",text:"Плаваючі елементи"},{segment:"selectors",href:"lab2/selectors",text:"Селектори"}]}}),{c(){t=h("div"),a(s.$$.fragment),this.h()},l(e){t=u(e,"DIV",{slot:!0});var n=p(t);i(s.$$.fragment,n),n.forEach(r),this.h()},h(){b(t,"slot","nav-bar")},m(e,a){f(e,t,a),$(s,t,null),n=!0},p(e,t){const n={};1&t&&(n.segment=e[0]),s.$set(n)},i(e){n||(c(s.$$.fragment,e),n=!0)},o(e){m(s.$$.fragment,e),n=!1},d(e){e&&r(t),d(s)}}}function E(e){let t,s,g;return s=new v({props:{$$slots:{"nav-bar":[w],default:[j]},$$scope:{ctx:e}}}),{c(){t=n(),a(s.$$.fragment),this.h()},l(e){l('[data-svelte="svelte-9e57xd"]',document.head).forEach(r),t=o(e),i(s.$$.fragment,e),this.h()},h(){document.title="Лабораторна робота №2"},m(e,n){f(e,t,n),$(s,e,n),g=!0},p(e,[t]){const n={};5&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){g||(c(s.$$.fragment,e),g=!0)},o(e){m(s.$$.fragment,e),g=!1},d(e){e&&r(t),d(s,e)}}}function y(e,t,s){let{$$slots:n={},$$scope:a}=t,{segment:l}=t;return e.$$set=e=>{"segment"in e&&s(0,l=e.segment),"$$scope"in e&&s(2,a=e.$$scope)},[l,n,a]}export default class extends e{constructor(e){super(),t(this,e,y,E,s,{segment:0})}}