import{_ as t,a as n,b as e,c as a,i as c,d as r,S as o,s,x as f,y as u,z as i,u as l,A as $,B as p,C as m,D as v,f as g,j as h,k as d,g as x,n as b,E as y,m as R}from"./client.e05cce7c.js";import{L as _,a as j}from"./LabNav.9388c32c.js";function B(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var o=n(this).constructor;c=Reflect.construct(r,arguments,o)}else c=r.apply(this,arguments);return e(this,c)}}function D(t){var n,e,a=t[1].default,c=v(a,t,t[2],null);return{c:function(){n=g("div"),c&&c.c()},l:function(t){n=h(t,"DIV",{});var e=d(n);c&&c.l(e),e.forEach(x)},m:function(t,a){b(t,n,a),c&&c.m(n,null),e=!0},p:function(t,n){c&&c.p&&4&n&&y(c,a,t,t[2],n,null,null)},i:function(t){e||($(c,t),e=!0)},o:function(t){p(c,t),e=!1},d:function(t){t&&x(n),c&&c.d(t)}}}function E(t){var n,e,a;return e=new j({props:{segment:t[0],links:[{segment:void 0,href:"lab1/site_appearance",text:"Головна сторінка"},{segment:"catalogue",href:"lab1/site_appearance/catalogue",text:"Сторінка з каталогом смартфонів"},{segment:"product",href:"lab1/site_appearance/product",text:"Сторінка для перегляду розширеної інформації про обраний смартфон"},{segment:"cart",href:"lab1/site_appearance/cart",text:"Кошик користувача"}]}}),{c:function(){n=g("div"),f(e.$$.fragment),this.h()},l:function(t){n=h(t,"DIV",{slot:!0});var a=d(n);u(e.$$.fragment,a),a.forEach(x),this.h()},h:function(){R(n,"slot","nav-bar")},m:function(t,c){b(t,n,c),i(e,n,null),a=!0},p:function(t,n){var a={};1&n&&(a.segment=t[0]),e.$set(a)},i:function(t){a||($(e.$$.fragment,t),a=!0)},o:function(t){p(e.$$.fragment,t),a=!1},d:function(t){t&&x(n),m(e)}}}function k(t){var n,e;return n=new _({props:{$$slots:{"nav-bar":[E],default:[D]},$$scope:{ctx:t}}}),{c:function(){f(n.$$.fragment)},l:function(t){u(n.$$.fragment,t)},m:function(t,a){i(n,t,a),e=!0},p:function(t,e){var a=l(e,1)[0],c={};5&a&&(c.$$scope={dirty:a,ctx:t}),n.$set(c)},i:function(t){e||($(n.$$.fragment,t),e=!0)},o:function(t){p(n.$$.fragment,t),e=!1},d:function(t){m(n,t)}}}function w(t,n,e){var a=n.$$slots,c=void 0===a?{}:a,r=n.$$scope,o=n.segment;return t.$$set=function(t){"segment"in t&&e(0,o=t.segment),"$$scope"in t&&e(2,r=t.$$scope)},[o,c,r]}var I=function(n){t(f,o);var e=B(f);function f(t){var n;return a(this,f),n=e.call(this),c(r(n),t,w,k,s,{segment:0}),n}return f}();export default I;
