import{_ as n,a as e,b as t,c as a,i as r,d as f,S as i,s as o,f as c,t as l,e as s,x as u,F as d,j as p,k as m,l as g,g as _,h as b,y as h,n as $,o as v,z as x,u as y,B as P,G as N,A as w,C as S,H as E,p as k,I as C,w as I}from"./client.791387b2.js";function R(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,f=e(n);if(a){var i=e(this).constructor;r=Reflect.construct(f,arguments,i)}else r=f.apply(this,arguments);return t(this,r)}}function j(n){var e,t="\n<script>\n    import Nav from '../components/Nav.svelte';\n\n    export let segment: string;\n<\/script>\n\n<style>\n    main {\n        position: relative;\n        background-color: white;\n        padding: 2em;\n        margin: 0 auto;\n        box-sizing: border-box;\n    }\n</style>\n\n<Nav {segment}/>\n\n<main>\n    <slot></slot>\n</main>\n";return{c:function(){e=l(t)},l:function(n){e=g(n,t)},m:function(n,t){$(n,e,t)},p:k,d:function(n){n&&_(e)}}}function A(n){var e,t="\n<script>\n    export let segment: string | undefined;\n<\/script>\n\n<style>\n    nav {\n        border-bottom: 1px solid rgba(255, 62, 0, 0.1);\n        font-weight: 300;\n        padding: 0 1em;\n    }\n\n    ul {\n        margin: 0;\n        padding: 0;\n    }\n\n    /* clearfix */\n    ul::after {\n        content: '';\n        display: block;\n        clear: both;\n    }\n\n    li {\n        display: block;\n        float: left;\n    }\n\n    [aria-current] {\n        position: relative;\n        display: inline-block;\n    }\n\n    [aria-current]::after {\n        position: absolute;\n        content: '';\n        width: calc(100% - 1em);\n        height: 2px;\n        background-color: rgb(255, 62, 0);\n        display: block;\n        bottom: -1px;\n    }\n\n    a {\n        text-decoration: none;\n        padding: 1em 0.5em;\n        display: block;\n    }\n</style>\n\n<nav>\n    <ul>\n        <li><a aria-current=\"{segment === 'lab1' ? 'page' : undefined}\" href=\"lab1\">Лабораторна №1</a></li>\n        <li><a aria-current=\"{segment === 'lab2' ? 'page' : undefined}\" href=\"lab2\">Лабораторна №2</a></li>\n        <li><a aria-current=\"{segment === 'lab3' ? 'page' : undefined}\" href=\"lab3\">Лабораторна №3</a></li>\n        <li><a aria-current=\"{segment === 'lab4' ? 'page' : undefined}\" href=\"lab4\">Лабораторна №4</a></li>\n        <li><a aria-current=\"{segment === 'lab5' ? 'page' : undefined}\" href=\"lab5\">Лабораторна №5</a></li>\n        <li><a aria-current=\"{segment === 'lab6' ? 'page' : undefined}\" href=\"lab6\">Лабораторна №6</a></li>\n        <li><a aria-current=\"{segment === 'lab7' ? 'page' : undefined}\" href=\"lab7\">Лабораторна №7</a></li>\n        <li><a aria-current=\"{segment === 'lab8' ? 'page' : undefined}\" href=\"lab8\">Лабораторна №8</a></li>\n        <li><a aria-current=\"{segment === 'lab9' ? 'page' : undefined}\" href=\"lab9\">Лабораторна №9</a></li>\n    </ul>\n</nav>\n";return{c:function(){e=l(t)},l:function(n){e=g(n,t)},m:function(n,t){$(n,e,t)},p:k,d:function(n){n&&_(e)}}}function O(n){var e,t,a,r,f,i,o,E,k,I,R,O,J,T,B,z,L,F=n[0];function G(n){return{props:{language:"html",showLineNumbers:!0,$$slots:{default:[j]},$$scope:{ctx:n}}}}F&&(I=new F(G(n)));var H=n[0];function q(n){return{props:{language:"html",showLineNumbers:!0,$$slots:{default:[A]},$$scope:{ctx:n}}}}return H&&(B=new H(q(n))),{c:function(){e=c("p"),t=l("В ході роботи було розроблено шаблон для оформлення протоколів до лабораторних работ, а також було визначено\n    предметну область виконання роботи."),a=s(),r=c("p"),f=l("Для зручного оформлення звітів було використано фреймворк Svelte."),i=s(),o=c("p"),E=l("Лістинг компоненту layout:"),k=s(),I&&u(I.$$.fragment),R=s(),O=c("p"),J=l("Компонент Nav:"),T=s(),B&&u(B.$$.fragment),z=d()},l:function(n){e=p(n,"P",{});var c=m(e);t=g(c,"В ході роботи було розроблено шаблон для оформлення протоколів до лабораторних работ, а також було визначено\n    предметну область виконання роботи."),c.forEach(_),a=b(n),r=p(n,"P",{});var l=m(r);f=g(l,"Для зручного оформлення звітів було використано фреймворк Svelte."),l.forEach(_),i=b(n),o=p(n,"P",{});var s=m(o);E=g(s,"Лістинг компоненту layout:"),s.forEach(_),k=b(n),I&&h(I.$$.fragment,n),R=b(n),O=p(n,"P",{});var u=m(O);J=g(u,"Компонент Nav:"),u.forEach(_),T=b(n),B&&h(B.$$.fragment,n),z=d()},m:function(n,c){$(n,e,c),v(e,t),$(n,a,c),$(n,r,c),v(r,f),$(n,i,c),$(n,o,c),v(o,E),$(n,k,c),I&&x(I,n,c),$(n,R,c),$(n,O,c),v(O,J),$(n,T,c),B&&x(B,n,c),$(n,z,c),L=!0},p:function(n,e){var t=y(e,1)[0],a={};if(4&t&&(a.$$scope={dirty:t,ctx:n}),F!==(F=n[0])){if(I){C();var r=I;P(r.$$.fragment,1,0,(function(){S(r,1)})),N()}F?(I=new F(G(n)),u(I.$$.fragment),w(I.$$.fragment,1),x(I,R.parentNode,R)):I=null}else F&&I.$set(a);var f={};if(4&t&&(f.$$scope={dirty:t,ctx:n}),H!==(H=n[0])){if(B){C();var i=B;P(i.$$.fragment,1,0,(function(){S(i,1)})),N()}H?(B=new H(q(n)),u(B.$$.fragment),w(B.$$.fragment,1),x(B,z.parentNode,z)):B=null}else H&&B.$set(f)},i:function(n){L||(I&&w(I.$$.fragment,n),B&&w(B.$$.fragment,n),L=!0)},o:function(n){I&&P(I.$$.fragment,n),B&&P(B.$$.fragment,n),L=!1},d:function(n){n&&_(e),n&&_(a),n&&_(r),n&&_(i),n&&_(o),n&&_(k),I&&S(I,n),n&&_(R),n&&_(O),n&&_(T),n&&_(z),B&&S(B,n)}}}function J(n,e,t){var a,r=this&&this.__awaiter||function(n,e,t,a){return new(t||(t=Promise))((function(r,f){function i(n){try{c(a.next(n))}catch(n){f(n)}}function o(n){try{c(a.throw(n))}catch(n){f(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,o)}c((a=a.apply(n,e||[])).next())}))};return E((function(){return r(void 0,void 0,void 0,I.mark((function n(){var e;return I.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([import("./index.31357788.js"),__inject_styles(["client-13f4b814.css"])]).then((function(n){return n[0]}));case 2:return e=n.sent,n.next=5,Promise.all([Promise.all([import("./prism-okaidia.c69ad818.js"),__inject_styles(["prism-okaidia-c096b22b.css"])]).then((function(n){return n[0]})),Promise.all([import("./prism-xml-doc.a8c9e51a.js"),]).then((function(n){return n[0]})),Promise.all([import("./prism-line-numbers.e216b9e0.js"),__inject_styles(["prism-line-numbers-1580f458.css"])]).then((function(n){return n[0]}))]);case 5:t(0,a=e.default);case 6:case"end":return n.stop()}}),n)})))})),[a]}var T=function(e){n(c,i);var t=R(c);function c(n){var e;return a(this,c),e=t.call(this),r(f(e),n,J,O,o,{}),e}return c}();export default T;

import __inject_styles from './inject_styles.fe622066.js';