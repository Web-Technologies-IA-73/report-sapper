import{_ as t,a as n,b as e,c as a,i as s,d as c,S as o,s as r,e as f,x as u,q as i,g as l,h as $,y as h,n as m,z as v,u as p,A as d,B as g,C as y,D as k,f as x,j as b,k as R,E,m as _}from"./client.4e927cb7.js";import{L as j,a as z}from"./LabNav.fc875f90.js";function B(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,c=n(t);if(a){var o=n(this).constructor;s=Reflect.construct(c,arguments,o)}else s=c.apply(this,arguments);return e(this,s)}}function D(t){var n,e,a=t[1].default,s=k(a,t,t[2],null);return{c:function(){n=x("div"),s&&s.c()},l:function(t){n=b(t,"DIV",{});var e=R(n);s&&s.l(e),e.forEach(l)},m:function(t,a){m(t,n,a),s&&s.m(n,null),e=!0},p:function(t,n){s&&s.p&&4&n&&E(s,a,t,t[2],n,null,null)},i:function(t){e||(d(s,t),e=!0)},o:function(t){g(s,t),e=!1},d:function(t){t&&l(n),s&&s.d(t)}}}function w(t){var n,e,a;return e=new z({props:{segment:t[0],links:[{segment:"shevchenko",href:"lab4/task_1/shevchenko",text:"Шевченко Данило"},{segment:"savchuk",href:"lab4/task_1/savchuk",text:"Савчук Олександр"},{segment:"zatsarnyi",href:"lab4/task_1/zatsarnyi",text:"Зацарний Максим"}]}}),{c:function(){n=x("div"),u(e.$$.fragment),this.h()},l:function(t){n=b(t,"DIV",{slot:!0});var a=R(n);h(e.$$.fragment,a),a.forEach(l),this.h()},h:function(){_(n,"slot","nav-bar")},m:function(t,s){m(t,n,s),v(e,n,null),a=!0},p:function(t,n){var a={};1&n&&(a.segment=t[0]),e.$set(a)},i:function(t){a||(d(e.$$.fragment,t),a=!0)},o:function(t){g(e.$$.fragment,t),a=!1},d:function(t){t&&l(n),y(e)}}}function I(t){var n,e,a;return e=new j({props:{$$slots:{"nav-bar":[w],default:[D]},$$scope:{ctx:t}}}),{c:function(){n=f(),u(e.$$.fragment),this.h()},l:function(t){i('[data-svelte="svelte-9e57xd"]',document.head).forEach(l),n=$(t),h(e.$$.fragment,t),this.h()},h:function(){document.title="Лабораторна робота №2"},m:function(t,s){m(t,n,s),v(e,t,s),a=!0},p:function(t,n){var a=p(n,1)[0],s={};5&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i:function(t){a||(d(e.$$.fragment,t),a=!0)},o:function(t){g(e.$$.fragment,t),a=!1},d:function(t){t&&l(n),y(e,t)}}}function L(t,n,e){var a=n.$$slots,s=void 0===a?{}:a,c=n.$$scope,o=n.segment;return t.$$set=function(t){"segment"in t&&e(0,o=t.segment),"$$scope"in t&&e(2,c=t.$$scope)},[o,s,c]}var V=function(n){t(f,o);var e=B(f);function f(t){var n;return a(this,f),n=e.call(this),s(c(n),t,L,I,r,{segment:0}),n}return f}();export default V;
