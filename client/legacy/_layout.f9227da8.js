import{_ as t,a as n,b as e,c as s,i as a,d as o,S as c,s as r,e as f,x as u,q as i,g as l,h,y as m,n as $,z as v,u as g,A as p,B as d,C as b,D as x,f as y,j as k,k as R,E,m as j}from"./client.791387b2.js";import{L as z,a as B}from"./LabNav.a19d8bf0.js";function D(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(s){var c=n(this).constructor;a=Reflect.construct(o,arguments,c)}else a=o.apply(this,arguments);return e(this,a)}}function L(t){var n,e,s=t[1].default,a=x(s,t,t[2],null);return{c:function(){n=y("div"),a&&a.c()},l:function(t){n=k(t,"DIV",{});var e=R(n);a&&a.l(e),e.forEach(l)},m:function(t,s){$(t,n,s),a&&a.m(n,null),e=!0},p:function(t,n){a&&a.p&&4&n&&E(a,s,t,t[2],n,null,null)},i:function(t){e||(p(a,t),e=!0)},o:function(t){d(a,t),e=!1},d:function(t){t&&l(n),a&&a.d(t)}}}function S(t){var n,e,s;return e=new B({props:{segment:t[0],links:[{segment:void 0,href:"lab3",text:"Тема та мета"},{segment:"home",href:"lab3/home",text:"Головна сторінка сайту"},{segment:"html",href:"lab3/html",text:"HTML-код сайту"},{segment:"css",href:"lab3/css",text:"CSS-код сайту"},{segment:"shevchenko",href:"lab3/shevchenko",text:"Шевченко Данило"},{segment:"savchuk",href:"lab3/savchuk",text:"Савчук Олександр"},{segment:"zatsarnyi",href:"lab3/zatsarnyi",text:"Зацарний Максим"},{segment:"conclusions",href:"lab3/conclusions",text:"Висновки"}]}}),{c:function(){n=y("div"),u(e.$$.fragment),this.h()},l:function(t){n=k(t,"DIV",{slot:!0});var s=R(n);m(e.$$.fragment,s),s.forEach(l),this.h()},h:function(){j(n,"slot","nav-bar")},m:function(t,a){$(t,n,a),v(e,n,null),s=!0},p:function(t,n){var s={};1&n&&(s.segment=t[0]),e.$set(s)},i:function(t){s||(p(e.$$.fragment,t),s=!0)},o:function(t){d(e.$$.fragment,t),s=!1},d:function(t){t&&l(n),b(e)}}}function w(t){var n,e,s;return e=new z({props:{$$slots:{"nav-bar":[S],default:[L]},$$scope:{ctx:t}}}),{c:function(){n=f(),u(e.$$.fragment),this.h()},l:function(t){i('[data-svelte="svelte-9e57xd"]',document.head).forEach(l),n=h(t),m(e.$$.fragment,t),this.h()},h:function(){document.title="Лабораторна робота №2"},m:function(t,a){$(t,n,a),v(e,t,a),s=!0},p:function(t,n){var s=g(n,1)[0],a={};5&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i:function(t){s||(p(e.$$.fragment,t),s=!0)},o:function(t){d(e.$$.fragment,t),s=!1},d:function(t){t&&l(n),b(e,t)}}}function C(t,n,e){var s=n.$$slots,a=void 0===s?{}:s,o=n.$$scope,c=n.segment;return t.$$set=function(t){"segment"in t&&e(0,c=t.segment),"$$scope"in t&&e(2,o=t.$$scope)},[c,a,o]}var I=function(n){t(f,c);var e=D(f);function f(t){var n;return s(this,f),n=e.call(this),a(o(n),t,C,w,r,{segment:0}),n}return f}();export default I;