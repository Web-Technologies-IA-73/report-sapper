import{S as s,i as t,s as e,a,o as n,q as r,d as o,c as $,p as l,j as c,r as m,u as i,v as f,w as u,x as d,e as p,b as h,f as g,y as v,h as b}from"./client.c7d2b611.js";import{L as x,a as j}from"./LabNav.b17eeba2.js";function w(s){let t,e;const a=s[1].default,n=d(a,s,s[2],null);return{c(){t=p("div"),n&&n.c()},l(s){t=h(s,"DIV",{});var e=g(t);n&&n.l(e),e.forEach(o)},m(s,a){c(s,t,a),n&&n.m(t,null),e=!0},p(s,t){n&&n.p&&4&t&&v(n,a,s,s[2],t,null,null)},i(s){e||(i(n,s),e=!0)},o(s){f(n,s),e=!1},d(s){s&&o(t),n&&n.d(s)}}}function E(s){let t,e,a;return e=new j({props:{segment:s[0],links:[{segment:void 0,href:"lab1",text:"Постановка задачи"}]}}),{c(){t=p("div"),n(e.$$.fragment),this.h()},l(s){t=h(s,"DIV",{slot:!0});var a=g(t);l(e.$$.fragment,a),a.forEach(o),this.h()},h(){b(t,"slot","nav-bar")},m(s,n){c(s,t,n),m(e,t,null),a=!0},p(s,t){const a={};1&t&&(a.segment=s[0]),e.$set(a)},i(s){a||(i(e.$$.fragment,s),a=!0)},o(s){f(e.$$.fragment,s),a=!1},d(s){s&&o(t),u(e)}}}function y(s){let t,e,d;return e=new x({props:{$$slots:{"nav-bar":[E],default:[w]},$$scope:{ctx:s}}}),{c(){t=a(),n(e.$$.fragment),this.h()},l(s){r('[data-svelte="svelte-9e57xd"]',document.head).forEach(o),t=$(s),l(e.$$.fragment,s),this.h()},h(){document.title="Лабораторна робота №2"},m(s,a){c(s,t,a),m(e,s,a),d=!0},p(s,[t]){const a={};5&t&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){d||(i(e.$$.fragment,s),d=!0)},o(s){f(e.$$.fragment,s),d=!1},d(s){s&&o(t),u(e,s)}}}function D(s,t,e){let{$$slots:a={},$$scope:n}=t,{segment:r}=t;return s.$$set=s=>{"segment"in s&&e(0,r=s.segment),"$$scope"in s&&e(2,n=s.$$scope)},[r,a,n]}export default class extends s{constructor(s){super(),t(this,s,D,y,e,{segment:0})}}
