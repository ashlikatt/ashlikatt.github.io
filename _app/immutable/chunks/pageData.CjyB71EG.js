import{s as T,b as P,u as M,g as k,d as v,n as g,c as w}from"./scheduler.DrUr7rw5.js";import{S as A,i as E,e as m,c as h,a as b,d as f,q as s,g as q,h as _,n as y,o as B,B as S}from"./index.D0vlszi7.js";import{b as p}from"./entry.CHYiFP43.js";import{p as F}from"./stores.DWJ_T-4C.js";function H(u){let t,n,c,r,l;const i=u[3].default,e=P(i,u,u[2],null);return{c(){t=m("a"),n=m("button"),e&&e.c(),this.h()},l(a){t=h(a,"A",{href:!0,target:!0});var o=b(t);n=h(o,"BUTTON",{class:!0});var d=b(n);e&&e.l(d),d.forEach(f),o.forEach(f),this.h()},h(){s(n,"class","svelte-19frktq"),s(t,"href",c=`${p}/${u[1]}`),s(t,"target",r=u[0]?"_blank":"_self")},m(a,o){q(a,t,o),_(t,n),e&&e.m(n,null),l=!0},p(a,[o]){e&&e.p&&(!l||o&4)&&M(e,i,a,a[2],l?v(i,a[2],o,null):k(a[2]),null),(!l||o&2&&c!==(c=`${p}/${a[1]}`))&&s(t,"href",c),(!l||o&1&&r!==(r=a[0]?"_blank":"_self"))&&s(t,"target",r)},i(a){l||(y(e,a),l=!0)},o(a){B(e,a),l=!1},d(a){a&&f(t),e&&e.d(a)}}}function C(u,t,n){let{$$slots:c={},$$scope:r}=t,{newPage:l=!1}=t,{href:i}=t;return u.$$set=e=>{"newPage"in e&&n(0,l=e.newPage),"href"in e&&n(1,i=e.href),"$$scope"in e&&n(2,r=e.$$scope)},[l,i,r,c]}class z extends A{constructor(t){super(),E(this,t,C,H,T,{newPage:0,href:1})}}function D(u){let t,n,c,r,l,i,e;return document.title=l=u[0],{c(){t=m("meta"),n=m("meta"),r=m("meta"),i=m("meta"),e=m("meta"),this.h()},l(a){const o=S("svelte-1oxg7k6",document.head);t=h(o,"META",{name:!0,content:!0}),n=h(o,"META",{property:!0,content:!0}),r=h(o,"META",{content:!0,"data-react-helmet":!0,name:!0}),i=h(o,"META",{content:!0,property:!0}),e=h(o,"META",{content:!0,property:!0}),o.forEach(f),this.h()},h(){s(t,"name","author"),s(t,"content","Ashli Katt"),s(n,"property","og:url"),s(n,"content",c=u[3].url.pathname),s(r,"content","#FF8888"),s(r,"data-react-helmet","true"),s(r,"name","theme-color"),s(i,"content",u[1]),s(i,"property","og:title"),s(e,"content",u[2]),s(e,"property","og:description")},m(a,o){_(document.head,t),_(document.head,n),_(document.head,r),_(document.head,i),_(document.head,e)},p(a,[o]){o&8&&c!==(c=a[3].url.pathname)&&s(n,"content",c),o&1&&l!==(l=a[0])&&(document.title=l),o&2&&s(i,"content",a[1]),o&4&&s(e,"content",a[2])},i:g,o:g,d(a){f(t),f(n),f(r),f(i),f(e)}}}function K(u,t,n){let c;w(u,F,e=>n(3,c=e));let{title:r="Ashli's Site"}=t,{ogTitle:l=r}=t,{desc:i=""}=t;return u.$$set=e=>{"title"in e&&n(0,r=e.title),"ogTitle"in e&&n(1,l=e.ogTitle),"desc"in e&&n(2,i=e.desc)},[r,l,i,c]}class G extends A{constructor(t){super(),E(this,t,K,D,T,{title:0,ogTitle:1,desc:2})}}export{z as H,G as P};