import{S as e,i as t,s,a as n,o as a,q as o,d as r,c as l,p as c,j as i,r as m,u as $,v as f,w as p,e as u,b as h,f as d,h as g,x as v,y as _}from"./client.0addc799.js";import{L as b,a as x}from"./LabNav.a59701b3.js";function j(e){let t,s,n;return s=new x({props:{segment:e[0],links:[{segment:void 0,href:"lab1",text:"Постановка задачи"},{segment:"development_environment",href:"lab1/development_environment",text:"Среда разработки"},{segment:"site_location",href:"lab1/site_location",text:"Место расположения сайта"},{segment:"description_of_the_subject_environment",href:"lab1/description_of_the_subject_environment",text:"Описание предметной области"},{segment:"site_appearance",href:"lab1/site_appearance",text:"Внешний вид сайта"},{segment:"conclusion",href:"lab1/conclusion",text:"Выводы"}]}}),{c(){t=u("div"),a(s.$$.fragment),this.h()},l(e){t=h(e,"DIV",{slot:!0});var n=d(t);c(s.$$.fragment,n),n.forEach(r),this.h()},h(){g(t,"slot","nav-bar")},m(e,a){i(e,t,a),m(s,t,null),n=!0},p(e,t){const n={};1&t&&(n.segment=e[0]),s.$set(n)},i(e){n||($(s.$$.fragment,e),n=!0)},o(e){f(s.$$.fragment,e),n=!1},d(e){e&&r(t),p(s)}}}function w(e){let t,s,a;const o=e[1].default,c=v(o,e,e[2],null);return{c(){t=n(),s=u("div"),c&&c.c()},l(e){t=l(e),s=h(e,"DIV",{});var n=d(s);c&&c.l(n),n.forEach(r)},m(e,n){i(e,t,n),i(e,s,n),c&&c.m(s,null),a=!0},p(e,t){c&&c.p&&4&t&&_(c,o,e,e[2],t,null,null)},i(e){a||($(c,e),a=!0)},o(e){f(c,e),a=!1},d(e){e&&r(t),e&&r(s),c&&c.d(e)}}}function E(e){let t,s,u;return s=new b({props:{$$slots:{default:[w],"nav-bar":[j]},$$scope:{ctx:e}}}),{c(){t=n(),a(s.$$.fragment),this.h()},l(e){o('[data-svelte="svelte-1vq0p38"]',document.head).forEach(r),t=l(e),c(s.$$.fragment,e),this.h()},h(){document.title="Лабораторна робота №1"},m(e,n){i(e,t,n),m(s,e,n),u=!0},p(e,[t]){const n={};5&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){u||($(s.$$.fragment,e),u=!0)},o(e){f(s.$$.fragment,e),u=!1},d(e){e&&r(t),p(s,e)}}}function q(e,t,s){let{$$slots:n={},$$scope:a}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&s(0,o=e.segment),"$$scope"in e&&s(2,a=e.$$scope)},[o,n,a]}export default class extends e{constructor(e){super(),t(this,e,q,E,s,{segment:0})}}