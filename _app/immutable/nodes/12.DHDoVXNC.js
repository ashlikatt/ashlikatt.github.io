import{s as V,e as B,i as x,o as ee,f as C}from"../chunks/scheduler.DrUr7rw5.js";import{S as J,i as K,e as P,k as f,c as A,a as y,l as u,d,q as w,g as _,h as te,m as $,n as m,o as c,p,s as D,f as M,t as U,b as k,j as ne,v as se,w as R}from"../chunks/index.D0vlszi7.js";import{P as ae,H as re}from"../chunks/pageData.CjyB71EG.js";import{R as j,S as z,G as ie}from"../chunks/rows.C1GYxWaE.js";import{N as le,C as oe}from"../chunks/columns.D2Wz2XD2.js";import{H as fe}from"../chunks/header.CsVsGNvJ.js";import{I as ue,P as $e}from"../chunks/pixelDisplay.CyzJmu-N.js";import{B as Y}from"../chunks/button.B5_XyLbD.js";const X=5,Z=100,me=32500;var O=void 0,I=void 0,T=void 0,F=void 0,E=void 0;function ce(i){O=i}function pe(i){I=i}function ge(i){T=i}function de(i){F=i}function _e(i){E=i}var he=void 0,S=void 0,G=void 0,H=void 0,N=!1;function q(){var i;if(!(!T||!F))try{const e=(i=T.files)==null?void 0:i[0],a=parseInt(F.value)-1;if(!(e instanceof File))throw new Error("Input file is invalid - Invalid data.");if(!e.type.startsWith("image"))throw new Error("Input file is invalid - Not an image.");if(a<0||a>99)throw new Error("Input quality is invalid - Out of range.");he=URL.createObjectURL(e),createImageBitmap(e).then(n=>{const l=Math.min(Z/n.width,Z/n.height),t=Q(X,n.width*l,a/100),s=Q(X,n.height*l,a/100),r=document.createElement("canvas");r.width=t,r.height=s;const o=r.getContext("2d");o==null||o.drawImage(n,0,0,t,s),S=o==null?void 0:o.getImageData(0,0,t,s),G=r.toDataURL(),r.remove(),we()})}catch(e){W(),console.log(e)}}function we(){if(G&&E){const i=new Image;i.src=G,i.id="pixelImage",E.innerHTML="",E.appendChild(i)}if(S){const i=S.data;let e=0;const a=[];for(let n=0;n<S.height;n++){let l=[];for(let t=0;t<S.width;t++){let s=i[e++],r=i[e++],o=i[e++];e++;let h=ve(s,r,o);l.length>0&&l[l.length-1].color===h?l[l.length-1].count++:l.push({first:l.length===0,color:h,count:1})}a.push("'["+l.map(De).join(",")+"]'")}H="["+a.join(",")+"]",be()}else W()}function Q(i,e,a){return Math.round((e-i)*a+i)}function ve(i,e,a){return"#"+i.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")+a.toString(16).padStart(2,"0")}function W(){N=!1,O&&O.classList.add("disabled"),I&&(I.classList.add("disabled"),I.classList.remove("warning"))}function be(){N=!0,O&&O.classList.remove("disabled"),I&&(I.classList.remove("disabled"),H.length+19>me?I.classList.add("warning"):I.classList.remove("warning"))}function ze(){if(!N)return;const e="/give @p cod"+("{display:{Lore:"+H+"}}");navigator.clipboard.writeText(e)}function Ie(){if(!N)return;const i=`{"source":"Ashli's Site","type":"nbt","data":"{'id':'minecraft:stone','Count':1,tag:{display:{Lore:${H.replaceAll('"','\\"')}}}}"}`,e=new WebSocket("ws://localhost:31371");e.addEventListener("open",a=>{e.send(i)})}function De(i){return i.first?`{"italic":false,"color":"${i.color}","text":"${"█".repeat(i.count)}"}`:`{"color":"${i.color}","text":"${"█".repeat(i.count)}"}`}function Me(i){let e;return{c(){e=U(i[5])},l(a){e=k(a,i[5])},m(a,n){_(a,e,n)},p(a,n){n&32&&ne(e,a[5])},d(a){a&&d(e)}}}function Le(i){let e,a,n;return{c(){e=P("input"),this.h()},l(l){e=A(l,"INPUT",{type:!0,min:!0,max:!0,id:!0,step:!0,class:!0}),this.h()},h(){w(e,"type","range"),w(e,"min",i[1]),w(e,"max",i[2]),e.value=i[3],w(e,"id",i[4]),w(e,"step",i[6]),w(e,"class","svelte-7e41zl")},m(l,t){_(l,e,t),i[8](e),a||(n=se(e,"change",function(){x(i[7])&&i[7].apply(this,arguments)}),a=!0)},p(l,t){i=l,t&2&&w(e,"min",i[1]),t&4&&w(e,"max",i[2]),t&8&&(e.value=i[3]),t&16&&w(e,"id",i[4]),t&64&&w(e,"step",i[6])},d(l){l&&d(e),i[8](null),a=!1,n()}}}function Be(i){let e,a,n,l;return e=new z({props:{size:"1",padded:!0,$$slots:{default:[Me]},$$scope:{ctx:i}}}),n=new z({props:{size:"1",padded:!0,$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),a=D(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),a=M(t),u(n.$$.fragment,t)},m(t,s){$(e,t,s),_(t,a,s),$(n,t,s),l=!0},p(t,s){const r={};s&544&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const o={};s&735&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){l||(m(e.$$.fragment,t),m(n.$$.fragment,t),l=!0)},o(t){c(e.$$.fragment,t),c(n.$$.fragment,t),l=!1},d(t){t&&d(a),p(e,t),p(n,t)}}}function Se(i){let e,a,n,l;return n=new j({props:{$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){e=P("label"),a=P("div"),f(n.$$.fragment),this.h()},l(t){e=A(t,"LABEL",{for:!0});var s=y(e);a=A(s,"DIV",{class:!0});var r=y(a);u(n.$$.fragment,r),r.forEach(d),s.forEach(d),this.h()},h(){w(a,"class","svelte-7e41zl"),w(e,"for",i[4])},m(t,s){_(t,e,s),te(e,a),$(n,a,null),l=!0},p(t,[s]){const r={};s&767&&(r.$$scope={dirty:s,ctx:t}),n.$set(r),(!l||s&16)&&w(e,"for",t[4])},i(t){l||(m(n.$$.fragment,t),l=!0)},o(t){c(n.$$.fragment,t),l=!1},d(t){t&&d(e),p(n)}}}function Oe(i,e,a){let{min:n}=e,{max:l}=e,{value:t}=e,{id:s}=e,{name:r}=e,{step:o}=e,{onUpdate:h=()=>{}}=e,{element:v=null}=e;function L(g){B[g?"unshift":"push"](()=>{v=g,a(0,v)})}return i.$$set=g=>{"min"in g&&a(1,n=g.min),"max"in g&&a(2,l=g.max),"value"in g&&a(3,t=g.value),"id"in g&&a(4,s=g.id),"name"in g&&a(5,r=g.name),"step"in g&&a(6,o=g.step),"onUpdate"in g&&a(7,h=g.onUpdate),"element"in g&&a(0,v=g.element)},[v,n,l,t,s,r,o,h,L]}class Ce extends J{constructor(e){super(),K(this,e,Oe,Se,V,{min:1,max:2,value:3,id:4,name:5,step:6,onUpdate:7,element:0})}}function Re(i){let e;return{c(){e=U("Back")},l(a){e=k(a,"Back")},m(a,n){_(a,e,n)},d(a){a&&d(e)}}}function Ee(i){let e,a;return e=new re({props:{href:"tools",$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(n){u(e.$$.fragment,n)},m(n,l){$(e,n,l),a=!0},p(n,l){const t={};l&1024&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){c(e.$$.fragment,n),a=!1},d(n){p(e,n)}}}function Ue(i){let e,a,n;function l(s){i[5](s)}let t={name:"Image File:",id:"inputfile",onUpdate:q};return i[2]!==void 0&&(t.element=i[2]),e=new ue({props:t}),B.push(()=>R(e,"element",l)),{c(){f(e.$$.fragment)},l(s){u(e.$$.fragment,s)},m(s,r){$(e,s,r),n=!0},p(s,r){const o={};!a&&r&4&&(a=!0,o.element=s[2],C(()=>a=!1)),e.$set(o)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){p(e,s)}}}function ke(i){let e;return{c(){e=U("Copy Command")},l(a){e=k(a,"Copy Command")},m(a,n){_(a,e,n)},d(a){a&&d(e)}}}function He(i){let e,a,n;function l(s){i[6](s)}let t={click:ze,$$slots:{default:[ke]},$$scope:{ctx:i}};return i[1]!==void 0&&(t.element=i[1]),e=new Y({props:t}),B.push(()=>R(e,"element",l)),{c(){f(e.$$.fragment)},l(s){u(e.$$.fragment,s)},m(s,r){$(e,s,r),n=!0},p(s,r){const o={};r&1024&&(o.$$scope={dirty:r,ctx:s}),!a&&r&2&&(a=!0,o.element=s[1],C(()=>a=!1)),e.$set(o)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){p(e,s)}}}function Ne(i){let e,a,n,l;return e=new z({props:{size:"19",padded:!0,$$slots:{default:[Ue]},$$scope:{ctx:i}}}),n=new z({props:{size:"1",padded:!0,$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),a=D(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),a=M(t),u(n.$$.fragment,t)},m(t,s){$(e,t,s),_(t,a,s),$(n,t,s),l=!0},p(t,s){const r={};s&1028&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const o={};s&1026&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){l||(m(e.$$.fragment,t),m(n.$$.fragment,t),l=!0)},o(t){c(e.$$.fragment,t),c(n.$$.fragment,t),l=!1},d(t){t&&d(a),p(e,t),p(n,t)}}}function Pe(i){let e,a;return e=new j({props:{$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(n){u(e.$$.fragment,n)},m(n,l){$(e,n,l),a=!0},p(n,l){const t={};l&1030&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){c(e.$$.fragment,n),a=!1},d(n){p(e,n)}}}function Ae(i){let e,a,n;function l(s){i[7](s)}let t={min:"1",max:"100",value:"3",step:"1",id:"inputrange",name:"Quality",onUpdate:q};return i[3]!==void 0&&(t.element=i[3]),e=new Ce({props:t}),B.push(()=>R(e,"element",l)),{c(){f(e.$$.fragment)},l(s){u(e.$$.fragment,s)},m(s,r){$(e,s,r),n=!0},p(s,r){const o={};!a&&r&8&&(a=!0,o.element=s[3],C(()=>a=!1)),e.$set(o)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){p(e,s)}}}function Te(i){let e,a,n;function l(s){i[8](s)}let t={id:"pixelDisplay"};return i[4]!==void 0&&(t.element=i[4]),e=new $e({props:t}),B.push(()=>R(e,"element",l)),{c(){f(e.$$.fragment)},l(s){u(e.$$.fragment,s)},m(s,r){$(e,s,r),n=!0},p(s,r){const o={};!a&&r&16&&(a=!0,o.element=s[4],C(()=>a=!1)),e.$set(o)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){p(e,s)}}}function Fe(i){let e;return{c(){e=U("Send to Recode")},l(a){e=k(a,"Send to Recode")},m(a,n){_(a,e,n)},d(a){a&&d(e)}}}function Ge(i){let e,a,n;function l(s){i[9](s)}let t={click:Ie,$$slots:{default:[Fe]},$$scope:{ctx:i}};return i[0]!==void 0&&(t.element=i[0]),e=new Y({props:t}),B.push(()=>R(e,"element",l)),{c(){f(e.$$.fragment)},l(s){u(e.$$.fragment,s)},m(s,r){$(e,s,r),n=!0},p(s,r){const o={};r&1024&&(o.$$scope={dirty:r,ctx:s}),!a&&r&1&&(a=!0,o.element=s[0],C(()=>a=!1)),e.$set(o)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){c(e.$$.fragment,s),n=!1},d(s){p(e,s)}}}function je(i){let e,a,n,l,t,s;return e=new z({props:{size:"1",padded:!0,$$slots:{default:[Ae]},$$scope:{ctx:i}}}),n=new z({props:{size:"18",padded:!0,$$slots:{default:[Te]},$$scope:{ctx:i}}}),t=new z({props:{size:"1",padded:!0,$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),a=D(),f(n.$$.fragment),l=D(),f(t.$$.fragment)},l(r){u(e.$$.fragment,r),a=M(r),u(n.$$.fragment,r),l=M(r),u(t.$$.fragment,r)},m(r,o){$(e,r,o),_(r,a,o),$(n,r,o),_(r,l,o),$(t,r,o),s=!0},p(r,o){const h={};o&1032&&(h.$$scope={dirty:o,ctx:r}),e.$set(h);const v={};o&1040&&(v.$$scope={dirty:o,ctx:r}),n.$set(v);const L={};o&1025&&(L.$$scope={dirty:o,ctx:r}),t.$set(L)},i(r){s||(m(e.$$.fragment,r),m(n.$$.fragment,r),m(t.$$.fragment,r),s=!0)},o(r){c(e.$$.fragment,r),c(n.$$.fragment,r),c(t.$$.fragment,r),s=!1},d(r){r&&(d(a),d(l)),p(e,r),p(n,r),p(t,r)}}}function qe(i){let e,a;return e=new j({props:{$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(n){u(e.$$.fragment,n)},m(n,l){$(e,n,l),a=!0},p(n,l){const t={};l&1049&&(t.$$scope={dirty:l,ctx:n}),e.$set(t)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){c(e.$$.fragment,n),a=!1},d(n){p(e,n)}}}function We(i){let e,a,n,l;return e=new z({props:{size:"1",$$slots:{default:[Pe]},$$scope:{ctx:i}}}),n=new z({props:{size:"1",$$slots:{default:[qe]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),a=D(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),a=M(t),u(n.$$.fragment,t)},m(t,s){$(e,t,s),_(t,a,s),$(n,t,s),l=!0},p(t,s){const r={};s&1030&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const o={};s&1049&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){l||(m(e.$$.fragment,t),m(n.$$.fragment,t),l=!0)},o(t){c(e.$$.fragment,t),c(n.$$.fragment,t),l=!1},d(t){t&&d(a),p(e,t),p(n,t)}}}function ye(i){let e,a,n,l,t,s;return e=new le({}),n=new fe({props:{title:"Minecraft Image Lore Generator",$$slots:{default:[Ee]},$$scope:{ctx:i}}}),t=new oe({props:{$$slots:{default:[We]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),a=D(),f(n.$$.fragment),l=D(),f(t.$$.fragment)},l(r){u(e.$$.fragment,r),a=M(r),u(n.$$.fragment,r),l=M(r),u(t.$$.fragment,r)},m(r,o){$(e,r,o),_(r,a,o),$(n,r,o),_(r,l,o),$(t,r,o),s=!0},p(r,o){const h={};o&1024&&(h.$$scope={dirty:o,ctx:r}),n.$set(h);const v={};o&1055&&(v.$$scope={dirty:o,ctx:r}),t.$set(v)},i(r){s||(m(e.$$.fragment,r),m(n.$$.fragment,r),m(t.$$.fragment,r),s=!0)},o(r){c(e.$$.fragment,r),c(n.$$.fragment,r),c(t.$$.fragment,r),s=!1},d(r){r&&(d(a),d(l)),p(e,r),p(n,r),p(t,r)}}}function Xe(i){let e,a,n,l;return e=new ae({props:{title:"Minecraft Image Lore Generator",desc:"Tool to generate minecraft items with custom images in their lore."}}),n=new ie({props:{$$slots:{default:[ye]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),a=D(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),a=M(t),u(n.$$.fragment,t)},m(t,s){$(e,t,s),_(t,a,s),$(n,t,s),l=!0},p(t,[s]){const r={};s&1055&&(r.$$scope={dirty:s,ctx:t}),n.$set(r)},i(t){l||(m(e.$$.fragment,t),m(n.$$.fragment,t),l=!0)},o(t){c(e.$$.fragment,t),c(n.$$.fragment,t),l=!1},d(t){t&&d(a),p(e,t),p(n,t)}}}function Ze(i,e,a){let n=null,l=null,t=null,s=null,r=null;ee(()=>{q(),W()});function o(b){t=b,a(2,t)}function h(b){l=b,a(1,l)}function v(b){s=b,a(3,s)}function L(b){r=b,a(4,r)}function g(b){n=b,a(0,n)}return i.$$.update=()=>{i.$$.dirty&31&&(ce(n),pe(l),ge(t),de(s),_e(r))},[n,l,t,s,r,o,h,v,L,g]}class nt extends J{constructor(e){super(),K(this,e,Ze,Xe,V,{})}}export{nt as component};