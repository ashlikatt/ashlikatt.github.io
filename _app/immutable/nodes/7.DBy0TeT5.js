import{s as xe,n as Ae}from"../chunks/scheduler.DrUr7rw5.js";import{S as et,i as tt,e as A,t as r,c as I,a as st,b as o,d as n,k as $t,g as s,h as it,j as lt,o as h,s as X,p as k,f as Z,q as v,m as B,n as N,r as D}from"../chunks/index.BfAMNwJz.js";import{P as at,H as rt,a as ot}from"../chunks/pageData.H3MLa4Ob.js";import{B as ft,P as _e}from"../chunks/paragraph.CfScf5T3.js";import{E as nt}from"../chunks/externalLink.DNJPPYHb.js";import{I as W}from"../chunks/inlineCode.BRCHcj98.js";import{S as be}from"../chunks/section.COscnjH2.js";function mt(a){let t,e=a[0].split(`
`).map(Ze).join(`
`)+"",i;return{c(){t=A("p"),i=r(e),this.h()},l(d){t=I(d,"P",{class:!0});var b=st(t);i=o(b,e),b.forEach(n),this.h()},h(){$t(t,"class","svelte-1y4hdci")},m(d,b){s(d,t,b),it(t,i)},p(d,[b]){b&1&&e!==(e=d[0].split(`
`).map(Ze).join(`
`)+"")&&lt(i,e)},i:Ae,o:Ae,d(d){d&&n(t)}}}const Ze=a=>a.trimStart().substring(1);function pt(a,t,e){let{value:i}=t;return a.$$set=d=>{"value"in d&&e(0,i=d.value)},[i]}class Se extends et{constructor(t){super(),tt(this,t,pt,mt,xe,{value:0})}}function ut(a){let t;return{c(){t=r("Back")},l(e){t=o(e,"Back")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function ct(a){let t,e;return t=new ot({props:{href:"langs/dfon",$$slots:{default:[ut]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment)},l(i){k(t.$$.fragment,i)},m(i,d){v(t,i,d),e=!0},p(i,d){const b={};d&1&&(b.$$scope={dirty:d,ctx:i}),t.$set(b)},i(i){e||(B(t.$$.fragment,i),e=!0)},o(i){N(t.$$.fragment,i),e=!1},d(i){D(t,i)}}}function _t(a){let t;return{c(){t=r("JSON")},l(e){t=o(e,"JSON")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function bt(a){let t,e,i,d,b,j,F;return b=new nt({props:{href:"https://www.json.org/json-en.html",$$slots:{default:[_t]},$$scope:{ctx:a}}}),{c(){t=r(`DiamondFire Object Notation is a JSON-like language for constant data on DiamondFire plots. It is not a programming language.
        DFON was created to streamline the production of games with large amounts of constant, read-only data. It may be helpful for things like weapon stats,
        map regions, npc dialogue, etc.`),e=A("br"),i=A("br"),d=r(`

        It is recommended to have an understanding of `),h(b.$$.fragment),j=r(`
        before using DFON, as they share many similarities. (I mean it!!)`)},l(T){t=o(T,`DiamondFire Object Notation is a JSON-like language for constant data on DiamondFire plots. It is not a programming language.
        DFON was created to streamline the production of games with large amounts of constant, read-only data. It may be helpful for things like weapon stats,
        map regions, npc dialogue, etc.`),e=I(T,"BR",{}),i=I(T,"BR",{}),d=o(T,`

        It is recommended to have an understanding of `),k(b.$$.fragment,T),j=o(T,`
        before using DFON, as they share many similarities. (I mean it!!)`)},m(T,_){s(T,t,_),s(T,e,_),s(T,i,_),s(T,d,_),v(b,T,_),s(T,j,_),F=!0},p(T,_){const P={};_&1&&(P.$$scope={dirty:_,ctx:T}),b.$set(P)},i(T){F||(B(b.$$.fragment,T),F=!0)},o(T){N(b.$$.fragment,T),F=!1},d(T){T&&(n(t),n(e),n(i),n(d),n(j)),D(b,T)}}}function gt(a){let t;return{c(){t=r("Basic Structure")},l(e){t=o(e,"Basic Structure")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function dt(a){let t;return{c(){t=r("a")},l(e){t=o(e,"a")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function wt(a){let t;return{c(){t=r("b")},l(e){t=o(e,"b")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function ht(a){let t;return{c(){t=r("c")},l(e){t=o(e,"c")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function kt(a){let t;return{c(){t=r("key")},l(e){t=o(e,"key")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function vt(a){let t,e,i,d,b,j,F,T,_,P,w,C,J,M,H,E,z,Y,V,U;return b=new Se({props:{value:`            |{
            |        a: 0,
            |        b: 1,
            |        c: [1, 2, 3],
            |    "key": "whatever",
            |}
        `}}),F=new W({props:{$$slots:{default:[dt]},$$scope:{ctx:a}}}),_=new W({props:{$$slots:{default:[wt]},$$scope:{ctx:a}}}),w=new W({props:{$$slots:{default:[ht]},$$scope:{ctx:a}}}),J=new W({props:{$$slots:{default:[kt]},$$scope:{ctx:a}}}),{c(){t=r(`A DFON file uses the same rough structure as JSON. The file is one huge dictionary, which has 0 or more keys.
        Those keys contain other values like lists, strings, numbers, nested dictionaries, etc.`),e=A("br"),i=A("br"),d=r(`

        The outer-most dictionary is referred to as the "main dictionary." When DFON is compiled, each entry in the main dictionary will become a global variable. 
        (With the corresponding name and value)

        `),h(b.$$.fragment),j=r(`

        This will compile down into a code-line that sets the global variables `),h(F.$$.fragment),T=r(", "),h(_.$$.fragment),P=r(`, 
        `),h(w.$$.fragment),C=r(", and "),h(J.$$.fragment),M=r(" to their respective values."),H=A("br"),E=A("br"),z=r(`

        Both strings and identifiers are allowed as keys for a dictionary, and trailing commas are allowed anywhere.`),Y=A("br"),V=r(`
        Values will be covered in the following three sections.`)},l(u){t=o(u,`A DFON file uses the same rough structure as JSON. The file is one huge dictionary, which has 0 or more keys.
        Those keys contain other values like lists, strings, numbers, nested dictionaries, etc.`),e=I(u,"BR",{}),i=I(u,"BR",{}),d=o(u,`

        The outer-most dictionary is referred to as the "main dictionary." When DFON is compiled, each entry in the main dictionary will become a global variable. 
        (With the corresponding name and value)

        `),k(b.$$.fragment,u),j=o(u,`

        This will compile down into a code-line that sets the global variables `),k(F.$$.fragment,u),T=o(u,", "),k(_.$$.fragment,u),P=o(u,`, 
        `),k(w.$$.fragment,u),C=o(u,", and "),k(J.$$.fragment,u),M=o(u," to their respective values."),H=I(u,"BR",{}),E=I(u,"BR",{}),z=o(u,`

        Both strings and identifiers are allowed as keys for a dictionary, and trailing commas are allowed anywhere.`),Y=I(u,"BR",{}),V=o(u,`
        Values will be covered in the following three sections.`)},m(u,S){s(u,t,S),s(u,e,S),s(u,i,S),s(u,d,S),v(b,u,S),s(u,j,S),v(F,u,S),s(u,T,S),v(_,u,S),s(u,P,S),v(w,u,S),s(u,C,S),v(J,u,S),s(u,M,S),s(u,H,S),s(u,E,S),s(u,z,S),s(u,Y,S),s(u,V,S),U=!0},p(u,S){const L={};S&1&&(L.$$scope={dirty:S,ctx:u}),F.$set(L);const c={};S&1&&(c.$$scope={dirty:S,ctx:u}),_.$set(c);const R={};S&1&&(R.$$scope={dirty:S,ctx:u}),w.$set(R);const G={};S&1&&(G.$$scope={dirty:S,ctx:u}),J.$set(G)},i(u){U||(B(b.$$.fragment,u),B(F.$$.fragment,u),B(_.$$.fragment,u),B(w.$$.fragment,u),B(J.$$.fragment,u),U=!0)},o(u){N(b.$$.fragment,u),N(F.$$.fragment,u),N(_.$$.fragment,u),N(w.$$.fragment,u),N(J.$$.fragment,u),U=!1},d(u){u&&(n(t),n(e),n(i),n(d),n(j),n(T),n(P),n(C),n(M),n(H),n(E),n(z),n(Y),n(V)),D(b,u),D(F,u),D(_,u),D(w,u),D(J,u)}}}function Bt(a){let t;return{c(){t=r("Basic Primitive Types")},l(e){t=o(e,"Basic Primitive Types")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Nt(a){let t;return{c(){t=r("0x")},l(e){t=o(e,"0x")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Dt(a){let t;return{c(){t=r("0o")},l(e){t=o(e,"0o")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Rt(a){let t;return{c(){t=r("0b")},l(e){t=o(e,"0b")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Ft(a){let t;return{c(){t=r("12")},l(e){t=o(e,"12")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Tt(a){let t;return{c(){t=r("-12")},l(e){t=o(e,"-12")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Ot(a){let t;return{c(){t=r("12.52")},l(e){t=o(e,"12.52")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function yt(a){let t;return{c(){t=r("-1_000_000_000.002")},l(e){t=o(e,"-1_000_000_000.002")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function St(a){let t;return{c(){t=r("0xFF_00_AA")},l(e){t=o(e,"0xFF_00_AA")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function At(a){let t;return{c(){t=r("-0b11101110")},l(e){t=o(e,"-0b11101110")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function It(a){let t;return{c(){t=r("0o77")},l(e){t=o(e,"0o77")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function jt(a){let t;return{c(){t=r('"')},l(e){t=o(e,'"')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Pt(a){let t;return{c(){t=r("'")},l(e){t=o(e,"'")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Ct(a){let t;return{c(){t=r("T")},l(e){t=o(e,"T")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Vt(a){let t;return{c(){t=r('""')},l(e){t=o(e,'""')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Wt(a){let t;return{c(){t=r('"Hello, World!"')},l(e){t=o(e,'"Hello, World!"')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Jt(a){let t;return{c(){t=r('"String that has \\na newline!"')},l(e){t=o(e,'"String that has \\na newline!"')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Lt(a){let t;return{c(){t=r('T""')},l(e){t=o(e,'T""')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function zt(a){let t;return{c(){t=r('T"<red>Hello, player!"')},l(e){t=o(e,'T"<red>Hello, player!"')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Mt(a){let t;return{c(){t=r('"Text that has <newline>a newline!"')},l(e){t=o(e,'"Text that has <newline>a newline!"')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Ht(a){let t,e,i,d,b,j,F,T,_,P,w,C,J,M,H,E,z,Y,V,U,u,S,L,c,R,G,q,Q,m,y,K,ne,x,se,ee,f,O,ie,te,le,l,g,ue,ce,$e,ge,de,we,he,ae,ke,re,ve,oe,Be,Ne,fe,De,me,Re,pe,Fe,Te,Oe,ye;return P=new W({props:{$$slots:{default:[Nt]},$$scope:{ctx:a}}}),C=new W({props:{$$slots:{default:[Dt]},$$scope:{ctx:a}}}),M=new W({props:{$$slots:{default:[Rt]},$$scope:{ctx:a}}}),V=new W({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),u=new W({props:{$$slots:{default:[Tt]},$$scope:{ctx:a}}}),L=new W({props:{$$slots:{default:[Ot]},$$scope:{ctx:a}}}),R=new W({props:{$$slots:{default:[yt]},$$scope:{ctx:a}}}),q=new W({props:{$$slots:{default:[St]},$$scope:{ctx:a}}}),m=new W({props:{$$slots:{default:[At]},$$scope:{ctx:a}}}),K=new W({props:{$$slots:{default:[It]},$$scope:{ctx:a}}}),te=new W({props:{$$slots:{default:[jt]},$$scope:{ctx:a}}}),l=new W({props:{$$slots:{default:[Pt]},$$scope:{ctx:a}}}),$e=new W({props:{$$slots:{default:[Ct]},$$scope:{ctx:a}}}),ae=new W({props:{$$slots:{default:[Vt]},$$scope:{ctx:a}}}),re=new W({props:{$$slots:{default:[Wt]},$$scope:{ctx:a}}}),oe=new W({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),fe=new W({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),me=new W({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),pe=new W({props:{$$slots:{default:[Mt]},$$scope:{ctx:a}}}),{c(){t=r("DFON has the common primitive value types from DiamondFire. This includes numbers, strings, text, locations, and vectors."),e=A("br"),i=r(`
        Numbers, strings, and text are covered in this section. The rest are covered in the next section.`),d=A("br"),b=A("br"),j=r(`

        Numbers are written in base-10, with or without a negative sign, and with or without a decimal place. 
        A number's decimal place may go beyond 3 digits, unlike in DiamondFire - however the value will be truncated when compiling.
        Numbers additionally can have underscores anywhere inside of them for readability`),F=A("br"),T=A("br"),_=r(`

        Numbers may also be written in hex, octal, or binary using the `),h(P.$$.fragment),w=r(", "),h(C.$$.fragment),J=r(`,
        and `),h(M.$$.fragment),H=r(" prefixes. Numbers created this way do not support decimals."),E=A("br"),z=A("br"),Y=r(`

        All of the following are valid numbers: `),h(V.$$.fragment),U=r(", "),h(u.$$.fragment),S=r(", "),h(L.$$.fragment),c=r(`,
        `),h(R.$$.fragment),G=r(", "),h(q.$$.fragment),Q=r(", "),h(m.$$.fragment),y=r(", "),h(K.$$.fragment),ne=r("."),x=A("br"),se=A("br"),ee=X(),f=A("br"),O=A("br"),ie=r(`

        Strings are identical to JSON strings, except they can use either `),h(te.$$.fragment),le=r(`
        or `),h(l.$$.fragment),g=r(" as a delimiter. Backslashes are used to escape characters."),ue=A("br"),ce=r(`
        Text is created by placing `),h($e.$$.fragment),ge=r(" before string quotes."),de=A("br"),we=A("br"),he=r(`

        The following are valid strings: `),h(ae.$$.fragment),ke=r(", "),h(re.$$.fragment),ve=r(`, 
        `),h(oe.$$.fragment),Be=A("br"),Ne=r(`
        The following are valid text: `),h(fe.$$.fragment),De=r(", "),h(me.$$.fragment),Re=r(`, 
        `),h(pe.$$.fragment),Fe=A("br"),Te=A("br"),Oe=r(`

        Remember that this is constant data! DiamondFire Codes like %default have no meaning.`)},l($){t=o($,"DFON has the common primitive value types from DiamondFire. This includes numbers, strings, text, locations, and vectors."),e=I($,"BR",{}),i=o($,`
        Numbers, strings, and text are covered in this section. The rest are covered in the next section.`),d=I($,"BR",{}),b=I($,"BR",{}),j=o($,`

        Numbers are written in base-10, with or without a negative sign, and with or without a decimal place. 
        A number's decimal place may go beyond 3 digits, unlike in DiamondFire - however the value will be truncated when compiling.
        Numbers additionally can have underscores anywhere inside of them for readability`),F=I($,"BR",{}),T=I($,"BR",{}),_=o($,`

        Numbers may also be written in hex, octal, or binary using the `),k(P.$$.fragment,$),w=o($,", "),k(C.$$.fragment,$),J=o($,`,
        and `),k(M.$$.fragment,$),H=o($," prefixes. Numbers created this way do not support decimals."),E=I($,"BR",{}),z=I($,"BR",{}),Y=o($,`

        All of the following are valid numbers: `),k(V.$$.fragment,$),U=o($,", "),k(u.$$.fragment,$),S=o($,", "),k(L.$$.fragment,$),c=o($,`,
        `),k(R.$$.fragment,$),G=o($,", "),k(q.$$.fragment,$),Q=o($,", "),k(m.$$.fragment,$),y=o($,", "),k(K.$$.fragment,$),ne=o($,"."),x=I($,"BR",{}),se=I($,"BR",{}),ee=Z($),f=I($,"BR",{}),O=I($,"BR",{}),ie=o($,`

        Strings are identical to JSON strings, except they can use either `),k(te.$$.fragment,$),le=o($,`
        or `),k(l.$$.fragment,$),g=o($," as a delimiter. Backslashes are used to escape characters."),ue=I($,"BR",{}),ce=o($,`
        Text is created by placing `),k($e.$$.fragment,$),ge=o($," before string quotes."),de=I($,"BR",{}),we=I($,"BR",{}),he=o($,`

        The following are valid strings: `),k(ae.$$.fragment,$),ke=o($,", "),k(re.$$.fragment,$),ve=o($,`, 
        `),k(oe.$$.fragment,$),Be=I($,"BR",{}),Ne=o($,`
        The following are valid text: `),k(fe.$$.fragment,$),De=o($,", "),k(me.$$.fragment,$),Re=o($,`, 
        `),k(pe.$$.fragment,$),Fe=I($,"BR",{}),Te=I($,"BR",{}),Oe=o($,`

        Remember that this is constant data! DiamondFire Codes like %default have no meaning.`)},m($,p){s($,t,p),s($,e,p),s($,i,p),s($,d,p),s($,b,p),s($,j,p),s($,F,p),s($,T,p),s($,_,p),v(P,$,p),s($,w,p),v(C,$,p),s($,J,p),v(M,$,p),s($,H,p),s($,E,p),s($,z,p),s($,Y,p),v(V,$,p),s($,U,p),v(u,$,p),s($,S,p),v(L,$,p),s($,c,p),v(R,$,p),s($,G,p),v(q,$,p),s($,Q,p),v(m,$,p),s($,y,p),v(K,$,p),s($,ne,p),s($,x,p),s($,se,p),s($,ee,p),s($,f,p),s($,O,p),s($,ie,p),v(te,$,p),s($,le,p),v(l,$,p),s($,g,p),s($,ue,p),s($,ce,p),v($e,$,p),s($,ge,p),s($,de,p),s($,we,p),s($,he,p),v(ae,$,p),s($,ke,p),v(re,$,p),s($,ve,p),v(oe,$,p),s($,Be,p),s($,Ne,p),v(fe,$,p),s($,De,p),v(me,$,p),s($,Re,p),v(pe,$,p),s($,Fe,p),s($,Te,p),s($,Oe,p),ye=!0},p($,p){const Ie={};p&1&&(Ie.$$scope={dirty:p,ctx:$}),P.$set(Ie);const je={};p&1&&(je.$$scope={dirty:p,ctx:$}),C.$set(je);const Pe={};p&1&&(Pe.$$scope={dirty:p,ctx:$}),M.$set(Pe);const Ce={};p&1&&(Ce.$$scope={dirty:p,ctx:$}),V.$set(Ce);const Ve={};p&1&&(Ve.$$scope={dirty:p,ctx:$}),u.$set(Ve);const We={};p&1&&(We.$$scope={dirty:p,ctx:$}),L.$set(We);const Je={};p&1&&(Je.$$scope={dirty:p,ctx:$}),R.$set(Je);const Le={};p&1&&(Le.$$scope={dirty:p,ctx:$}),q.$set(Le);const ze={};p&1&&(ze.$$scope={dirty:p,ctx:$}),m.$set(ze);const Me={};p&1&&(Me.$$scope={dirty:p,ctx:$}),K.$set(Me);const He={};p&1&&(He.$$scope={dirty:p,ctx:$}),te.$set(He);const qe={};p&1&&(qe.$$scope={dirty:p,ctx:$}),l.$set(qe);const Ee={};p&1&&(Ee.$$scope={dirty:p,ctx:$}),$e.$set(Ee);const Ye={};p&1&&(Ye.$$scope={dirty:p,ctx:$}),ae.$set(Ye);const Ue={};p&1&&(Ue.$$scope={dirty:p,ctx:$}),re.$set(Ue);const Ge={};p&1&&(Ge.$$scope={dirty:p,ctx:$}),oe.$set(Ge);const Ke={};p&1&&(Ke.$$scope={dirty:p,ctx:$}),fe.$set(Ke);const Qe={};p&1&&(Qe.$$scope={dirty:p,ctx:$}),me.$set(Qe);const Xe={};p&1&&(Xe.$$scope={dirty:p,ctx:$}),pe.$set(Xe)},i($){ye||(B(P.$$.fragment,$),B(C.$$.fragment,$),B(M.$$.fragment,$),B(V.$$.fragment,$),B(u.$$.fragment,$),B(L.$$.fragment,$),B(R.$$.fragment,$),B(q.$$.fragment,$),B(m.$$.fragment,$),B(K.$$.fragment,$),B(te.$$.fragment,$),B(l.$$.fragment,$),B($e.$$.fragment,$),B(ae.$$.fragment,$),B(re.$$.fragment,$),B(oe.$$.fragment,$),B(fe.$$.fragment,$),B(me.$$.fragment,$),B(pe.$$.fragment,$),ye=!0)},o($){N(P.$$.fragment,$),N(C.$$.fragment,$),N(M.$$.fragment,$),N(V.$$.fragment,$),N(u.$$.fragment,$),N(L.$$.fragment,$),N(R.$$.fragment,$),N(q.$$.fragment,$),N(m.$$.fragment,$),N(K.$$.fragment,$),N(te.$$.fragment,$),N(l.$$.fragment,$),N($e.$$.fragment,$),N(ae.$$.fragment,$),N(re.$$.fragment,$),N(oe.$$.fragment,$),N(fe.$$.fragment,$),N(me.$$.fragment,$),N(pe.$$.fragment,$),ye=!1},d($){$&&(n(t),n(e),n(i),n(d),n(b),n(j),n(F),n(T),n(_),n(w),n(J),n(H),n(E),n(z),n(Y),n(U),n(S),n(c),n(G),n(Q),n(y),n(ne),n(x),n(se),n(ee),n(f),n(O),n(ie),n(le),n(g),n(ue),n(ce),n(ge),n(de),n(we),n(he),n(ke),n(ve),n(Be),n(Ne),n(De),n(Re),n(Fe),n(Te),n(Oe)),D(P,$),D(C,$),D(M,$),D(V,$),D(u,$),D(L,$),D(R,$),D(q,$),D(m,$),D(K,$),D(te,$),D(l,$),D($e,$),D(ae,$),D(re,$),D(oe,$),D(fe,$),D(me,$),D(pe,$)}}}function qt(a){let t;return{c(){t=r("Other Primitive Types")},l(e){t=o(e,"Other Primitive Types")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Et(a){let t;return{c(){t=r("(1, 2, 3)")},l(e){t=o(e,"(1, 2, 3)")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Yt(a){let t;return{c(){t=r("(23.5, 50.5, 24.5, )")},l(e){t=o(e,"(23.5, 50.5, 24.5, )")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Ut(a){let t;return{c(){t=r("(150.5, 200.5, 150.5, 0, 90, )")},l(e){t=o(e,"(150.5, 200.5, 150.5, 0, 90, )")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Gt(a){let t;return{c(){t=r("<2, 3, 4>")},l(e){t=o(e,"<2, 3, 4>")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Kt(a){let t;return{c(){t=r("<1, 0.25, 0, >")},l(e){t=o(e,"<1, 0.25, 0, >")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Qt(a){let t,e,i,d,b,j,F,T,_,P,w,C,J,M,H,E,z,Y,V,U,u,S,L;return b=new W({props:{$$slots:{default:[Et]},$$scope:{ctx:a}}}),F=new W({props:{$$slots:{default:[Yt]},$$scope:{ctx:a}}}),_=new W({props:{$$slots:{default:[Ut]},$$scope:{ctx:a}}}),V=new W({props:{$$slots:{default:[Gt]},$$scope:{ctx:a}}}),u=new W({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),{c(){t=r("Locations are written as 3 or 5 comma-separated numbers inside of parenthesis."),e=A("br"),i=A("br"),d=r(`
        Valid locations may look like: `),h(b.$$.fragment),j=r(", "),h(F.$$.fragment),T=r(`, or 
        `),h(_.$$.fragment),P=r("."),w=A("br"),C=A("br"),J=A("br"),M=A("br"),H=r(`

        Vectors are written as 3 comma-separated numbers inside of parenthesis.`),E=A("br"),z=A("br"),Y=r(`
        Valid vectors may look like: `),h(V.$$.fragment),U=r(" or "),h(u.$$.fragment),S=r(".")},l(c){t=o(c,"Locations are written as 3 or 5 comma-separated numbers inside of parenthesis."),e=I(c,"BR",{}),i=I(c,"BR",{}),d=o(c,`
        Valid locations may look like: `),k(b.$$.fragment,c),j=o(c,", "),k(F.$$.fragment,c),T=o(c,`, or 
        `),k(_.$$.fragment,c),P=o(c,"."),w=I(c,"BR",{}),C=I(c,"BR",{}),J=I(c,"BR",{}),M=I(c,"BR",{}),H=o(c,`

        Vectors are written as 3 comma-separated numbers inside of parenthesis.`),E=I(c,"BR",{}),z=I(c,"BR",{}),Y=o(c,`
        Valid vectors may look like: `),k(V.$$.fragment,c),U=o(c," or "),k(u.$$.fragment,c),S=o(c,".")},m(c,R){s(c,t,R),s(c,e,R),s(c,i,R),s(c,d,R),v(b,c,R),s(c,j,R),v(F,c,R),s(c,T,R),v(_,c,R),s(c,P,R),s(c,w,R),s(c,C,R),s(c,J,R),s(c,M,R),s(c,H,R),s(c,E,R),s(c,z,R),s(c,Y,R),v(V,c,R),s(c,U,R),v(u,c,R),s(c,S,R),L=!0},p(c,R){const G={};R&1&&(G.$$scope={dirty:R,ctx:c}),b.$set(G);const q={};R&1&&(q.$$scope={dirty:R,ctx:c}),F.$set(q);const Q={};R&1&&(Q.$$scope={dirty:R,ctx:c}),_.$set(Q);const m={};R&1&&(m.$$scope={dirty:R,ctx:c}),V.$set(m);const y={};R&1&&(y.$$scope={dirty:R,ctx:c}),u.$set(y)},i(c){L||(B(b.$$.fragment,c),B(F.$$.fragment,c),B(_.$$.fragment,c),B(V.$$.fragment,c),B(u.$$.fragment,c),L=!0)},o(c){N(b.$$.fragment,c),N(F.$$.fragment,c),N(_.$$.fragment,c),N(V.$$.fragment,c),N(u.$$.fragment,c),L=!1},d(c){c&&(n(t),n(e),n(i),n(d),n(j),n(T),n(P),n(w),n(C),n(J),n(M),n(H),n(E),n(z),n(Y),n(U),n(S)),D(b,c),D(F,c),D(_,c),D(V,c),D(u,c)}}}function Xt(a){let t;return{c(){t=r("Compound Types")},l(e){t=o(e,"Compound Types")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Zt(a){let t;return{c(){t=r("[]")},l(e){t=o(e,"[]")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function xt(a){let t;return{c(){t=r("[2]")},l(e){t=o(e,"[2]")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function en(a){let t;return{c(){t=r('["a", 2, { a: 2 }, ]')},l(e){t=o(e,'["a", 2, { a: 2 }, ]')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function tn(a){let t;return{c(){t=r("{}")},l(e){t=o(e,"{}")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function nn(a){let t;return{c(){t=r("{ a: 2 }")},l(e){t=o(e,"{ a: 2 }")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function sn(a){let t;return{c(){t=r("{ a: 2, b: { c: 3 }, }")},l(e){t=o(e,"{ a: 2, b: { c: 3 }, }")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function $n(a){let t,e,i,d,b,j,F,T,_,P,w,C,J,M,H,E,z,Y,V,U,u,S,L,c,R,G,q,Q;return F=new W({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),_=new W({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),w=new W({props:{$$slots:{default:[en]},$$scope:{ctx:a}}}),S=new W({props:{$$slots:{default:[tn]},$$scope:{ctx:a}}}),c=new W({props:{$$slots:{default:[nn]},$$scope:{ctx:a}}}),G=new W({props:{$$slots:{default:[sn]},$$scope:{ctx:a}}}),{c(){t=r("DFON has the same two compound types as JSON, dictionaries and lists."),e=A("br"),i=r(`
        
        Lists are written as square brackets with zero or more comma-separated values inside. 
        When compiled, they become a DiamondFire List value.`),d=A("br"),b=A("br"),j=r(`

        Valid lists may look like `),h(F.$$.fragment),T=r(", "),h(_.$$.fragment),P=r(`, or 
        `),h(w.$$.fragment),C=r("."),J=A("br"),M=A("br"),H=X(),E=A("br"),z=A("br"),Y=r(`

        Dictionaries are written as curly braces with zero or more comma-separated key-value pairs inside.
        When compiled, they will become a DiamondFire Dictionary value. The main dictionary will compile differently than normal dictionary values, see above.`),V=A("br"),U=A("br"),u=r(`

        Valid dictionaries may look like `),h(S.$$.fragment),L=r(", "),h(c.$$.fragment),R=r(`, or
        `),h(G.$$.fragment),q=r(".")},l(m){t=o(m,"DFON has the same two compound types as JSON, dictionaries and lists."),e=I(m,"BR",{}),i=o(m,`
        
        Lists are written as square brackets with zero or more comma-separated values inside. 
        When compiled, they become a DiamondFire List value.`),d=I(m,"BR",{}),b=I(m,"BR",{}),j=o(m,`

        Valid lists may look like `),k(F.$$.fragment,m),T=o(m,", "),k(_.$$.fragment,m),P=o(m,`, or 
        `),k(w.$$.fragment,m),C=o(m,"."),J=I(m,"BR",{}),M=I(m,"BR",{}),H=Z(m),E=I(m,"BR",{}),z=I(m,"BR",{}),Y=o(m,`

        Dictionaries are written as curly braces with zero or more comma-separated key-value pairs inside.
        When compiled, they will become a DiamondFire Dictionary value. The main dictionary will compile differently than normal dictionary values, see above.`),V=I(m,"BR",{}),U=I(m,"BR",{}),u=o(m,`

        Valid dictionaries may look like `),k(S.$$.fragment,m),L=o(m,", "),k(c.$$.fragment,m),R=o(m,`, or
        `),k(G.$$.fragment,m),q=o(m,".")},m(m,y){s(m,t,y),s(m,e,y),s(m,i,y),s(m,d,y),s(m,b,y),s(m,j,y),v(F,m,y),s(m,T,y),v(_,m,y),s(m,P,y),v(w,m,y),s(m,C,y),s(m,J,y),s(m,M,y),s(m,H,y),s(m,E,y),s(m,z,y),s(m,Y,y),s(m,V,y),s(m,U,y),s(m,u,y),v(S,m,y),s(m,L,y),v(c,m,y),s(m,R,y),v(G,m,y),s(m,q,y),Q=!0},p(m,y){const K={};y&1&&(K.$$scope={dirty:y,ctx:m}),F.$set(K);const ne={};y&1&&(ne.$$scope={dirty:y,ctx:m}),_.$set(ne);const x={};y&1&&(x.$$scope={dirty:y,ctx:m}),w.$set(x);const se={};y&1&&(se.$$scope={dirty:y,ctx:m}),S.$set(se);const ee={};y&1&&(ee.$$scope={dirty:y,ctx:m}),c.$set(ee);const f={};y&1&&(f.$$scope={dirty:y,ctx:m}),G.$set(f)},i(m){Q||(B(F.$$.fragment,m),B(_.$$.fragment,m),B(w.$$.fragment,m),B(S.$$.fragment,m),B(c.$$.fragment,m),B(G.$$.fragment,m),Q=!0)},o(m){N(F.$$.fragment,m),N(_.$$.fragment,m),N(w.$$.fragment,m),N(S.$$.fragment,m),N(c.$$.fragment,m),N(G.$$.fragment,m),Q=!1},d(m){m&&(n(t),n(e),n(i),n(d),n(b),n(j),n(T),n(P),n(C),n(J),n(M),n(H),n(E),n(z),n(Y),n(V),n(U),n(u),n(L),n(R),n(q)),D(F,m),D(_,m),D(w,m),D(S,m),D(c,m),D(G,m)}}}function ln(a){let t;return{c(){t=r("Documentation")},l(e){t=o(e,"Documentation")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function an(a){let t,e,i;return e=new Se({props:{value:`            |{
            |   // This is here for blablabla
            |   someVar: "whatever"
            |
            |   /* 
            |       This next section is here for yada yada yada...
            |       ... remember to blabla! 
            |   */
            |}
        `}}),{c(){t=r(`DFON Files may be documented with comments. The language supports both inline and block comments using traditional C-style comments.
        Inline comments can be started with two slashes, block comments can be started with a slash-star, and ended with a star-slash.

        `),h(e.$$.fragment)},l(d){t=o(d,`DFON Files may be documented with comments. The language supports both inline and block comments using traditional C-style comments.
        Inline comments can be started with two slashes, block comments can be started with a slash-star, and ended with a star-slash.

        `),k(e.$$.fragment,d)},m(d,b){s(d,t,b),v(e,d,b),i=!0},p:Ae,i(d){i||(B(e.$$.fragment,d),i=!0)},o(d){N(e.$$.fragment,d),i=!1},d(d){d&&n(t),D(e,d)}}}function rn(a){let t;return{c(){t=r("Macros")},l(e){t=o(e,"Macros")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function on(a){let t;return{c(){t=r("blockName")},l(e){t=o(e,"blockName")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function fn(a){let t;return{c(){t=r("blockName")},l(e){t=o(e,"blockName")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function mn(a){let t;return{c(){t=r("justATwo()")},l(e){t=o(e,"justATwo()")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function pn(a){let t;return{c(){t=r("2")},l(e){t=o(e,"2")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function un(a){let t;return{c(){t=r("pair(1, 2)")},l(e){t=o(e,"pair(1, 2)")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function cn(a){let t;return{c(){t=r("[1, 2]")},l(e){t=o(e,"[1, 2]")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function _n(a){let t;return{c(){t=r('block("stone", 12)')},l(e){t=o(e,'block("stone", 12)')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function bn(a){let t;return{c(){t=r('{ blockName: "stone", miningSpeed: 12 }')},l(e){t=o(e,'{ blockName: "stone", miningSpeed: 12 }')},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function gn(a){let t,e,i,d,b,j,F,T,_,P,w,C,J,M,H,E,z,Y,V,U,u,S,L,c,R,G,q,Q,m,y,K,ne,x,se,ee;return b=new Se({props:{value:`            |macro justATwo() = 2
            |
            |macro pair(x, y) = [x, y]
            |
            |macro block(blockName, blockValue) = {
            |    "blockName": blockName,
            |    "miningSpeed": blockValue    
            |}
        `}}),F=new W({props:{$$slots:{default:[on]},$$scope:{ctx:a}}}),_=new W({props:{$$slots:{default:[fn]},$$scope:{ctx:a}}}),z=new W({props:{$$slots:{default:[mn]},$$scope:{ctx:a}}}),V=new W({props:{$$slots:{default:[pn]},$$scope:{ctx:a}}}),L=new W({props:{$$slots:{default:[un]},$$scope:{ctx:a}}}),R=new W({props:{$$slots:{default:[cn]},$$scope:{ctx:a}}}),m=new W({props:{$$slots:{default:[_n]},$$scope:{ctx:a}}}),K=new W({props:{$$slots:{default:[bn]},$$scope:{ctx:a}}}),{c(){t=r(`Macros are where DFON strays away from mostly-normal JSON syntax. In any DFON file, any number of macros may be placed above the main dictionary.
        Macros have a name, zero or more named parameters, and a result expression. Both the macro name and parameter names must be valid identifiers.`),e=A("br"),i=A("br"),d=r(`

        Inside macros, parameter names can be used in place of regular values, which will be 
        substituted with the argument supplied to the macro when it is invoked.

        `),h(b.$$.fragment),j=r(`

        Note that in the third macro definition, the `),h(F.$$.fragment),T=r(` key must be written as a string. Otherwise DFON would
        think that you're using the value of the `),h(_.$$.fragment),P=r(" parameter as a dictionary key!"),w=A("br"),C=A("br"),J=r(`

        Assuming these macro definitions are properly above the main dictionary, they can now be invoked in place of a regular value.
        A macro can be invoked by writing its name followed by parenthesis, with comma-separated arguments between the parenthesis.`),M=A("br"),H=A("br"),E=r(`

        With the above code, writing `),h(z.$$.fragment),Y=r(" would be the same as writing "),h(V.$$.fragment),U=r("."),u=A("br"),S=r(`
        Writing `),h(L.$$.fragment),c=r(" would be the same as writing "),h(R.$$.fragment),G=r("."),q=A("br"),Q=r(` 
        Finally, writing `),h(m.$$.fragment),y=r(" is identical to "),h(K.$$.fragment),ne=A("br"),x=A("br"),se=r(`

        Properly using macros can greatly reduce the size of DFON scripts, and improve readability.`)},l(f){t=o(f,`Macros are where DFON strays away from mostly-normal JSON syntax. In any DFON file, any number of macros may be placed above the main dictionary.
        Macros have a name, zero or more named parameters, and a result expression. Both the macro name and parameter names must be valid identifiers.`),e=I(f,"BR",{}),i=I(f,"BR",{}),d=o(f,`

        Inside macros, parameter names can be used in place of regular values, which will be 
        substituted with the argument supplied to the macro when it is invoked.

        `),k(b.$$.fragment,f),j=o(f,`

        Note that in the third macro definition, the `),k(F.$$.fragment,f),T=o(f,` key must be written as a string. Otherwise DFON would
        think that you're using the value of the `),k(_.$$.fragment,f),P=o(f," parameter as a dictionary key!"),w=I(f,"BR",{}),C=I(f,"BR",{}),J=o(f,`

        Assuming these macro definitions are properly above the main dictionary, they can now be invoked in place of a regular value.
        A macro can be invoked by writing its name followed by parenthesis, with comma-separated arguments between the parenthesis.`),M=I(f,"BR",{}),H=I(f,"BR",{}),E=o(f,`

        With the above code, writing `),k(z.$$.fragment,f),Y=o(f," would be the same as writing "),k(V.$$.fragment,f),U=o(f,"."),u=I(f,"BR",{}),S=o(f,`
        Writing `),k(L.$$.fragment,f),c=o(f," would be the same as writing "),k(R.$$.fragment,f),G=o(f,"."),q=I(f,"BR",{}),Q=o(f,` 
        Finally, writing `),k(m.$$.fragment,f),y=o(f," is identical to "),k(K.$$.fragment,f),ne=I(f,"BR",{}),x=I(f,"BR",{}),se=o(f,`

        Properly using macros can greatly reduce the size of DFON scripts, and improve readability.`)},m(f,O){s(f,t,O),s(f,e,O),s(f,i,O),s(f,d,O),v(b,f,O),s(f,j,O),v(F,f,O),s(f,T,O),v(_,f,O),s(f,P,O),s(f,w,O),s(f,C,O),s(f,J,O),s(f,M,O),s(f,H,O),s(f,E,O),v(z,f,O),s(f,Y,O),v(V,f,O),s(f,U,O),s(f,u,O),s(f,S,O),v(L,f,O),s(f,c,O),v(R,f,O),s(f,G,O),s(f,q,O),s(f,Q,O),v(m,f,O),s(f,y,O),v(K,f,O),s(f,ne,O),s(f,x,O),s(f,se,O),ee=!0},p(f,O){const ie={};O&1&&(ie.$$scope={dirty:O,ctx:f}),F.$set(ie);const te={};O&1&&(te.$$scope={dirty:O,ctx:f}),_.$set(te);const le={};O&1&&(le.$$scope={dirty:O,ctx:f}),z.$set(le);const l={};O&1&&(l.$$scope={dirty:O,ctx:f}),V.$set(l);const g={};O&1&&(g.$$scope={dirty:O,ctx:f}),L.$set(g);const ue={};O&1&&(ue.$$scope={dirty:O,ctx:f}),R.$set(ue);const ce={};O&1&&(ce.$$scope={dirty:O,ctx:f}),m.$set(ce);const $e={};O&1&&($e.$$scope={dirty:O,ctx:f}),K.$set($e)},i(f){ee||(B(b.$$.fragment,f),B(F.$$.fragment,f),B(_.$$.fragment,f),B(z.$$.fragment,f),B(V.$$.fragment,f),B(L.$$.fragment,f),B(R.$$.fragment,f),B(m.$$.fragment,f),B(K.$$.fragment,f),ee=!0)},o(f){N(b.$$.fragment,f),N(F.$$.fragment,f),N(_.$$.fragment,f),N(z.$$.fragment,f),N(V.$$.fragment,f),N(L.$$.fragment,f),N(R.$$.fragment,f),N(m.$$.fragment,f),N(K.$$.fragment,f),ee=!1},d(f){f&&(n(t),n(e),n(i),n(d),n(j),n(T),n(P),n(w),n(C),n(J),n(M),n(H),n(E),n(Y),n(U),n(u),n(S),n(c),n(G),n(q),n(Q),n(y),n(ne),n(x),n(se)),D(b,f),D(F,f),D(_,f),D(z,f),D(V,f),D(L,f),D(R,f),D(m,f),D(K,f)}}}function dn(a){let t;return{c(){t=r("Large Example")},l(e){t=o(e,"Large Example")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function wn(a){let t;return{c(){t=r("dirMap")},l(e){t=o(e,"dirMap")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function hn(a){let t;return{c(){t=r("blockData")},l(e){t=o(e,"blockData")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function kn(a){let t,e,i,d,b,j,F,T;return e=new Se({props:{value:`            |/**
            | * Macro to generate block data.
            | * @param miningTime : number - The number of ticks to mine this block by hand
            | * @param pickaxePower : number - The minimum required pickaxe power to mine this block
            | * @param drops : string[] - List of item IDs this block can drop
            | */
            |macro block(miningTime, pickaxePower, drops) = {
            |    "miningTime": miningTime,
            |    "pickaxePower": pickaxePower,
            |    "drops": drops
            |}
            |
            |
            |
            |// Holds all game data
            |{
            |
            |    // Used for blockdata lookups
            |    dirMap: {
            |        east: < 1,  0,  0>,
            |        west: <-1,  0,  0>,
            |        north: < 0,  0, -1>,
            |        south: < 0,  0,  1>,
            |        up: < 0,  1,  0>,
            |        down: < 0, -1,  0>,
            |    },
            |
            |    // Stores mineable block information
            |    blockData: {
            |              'stone': block(40, 0, ['stone']),
            |           'andesite': block(60, 1, ['stone', 'iron_scrap', 'none']),
            |        'cobblestone': block(80, 2, ['stone', 'gold_scrap', 'none']),
            |    },
            |}
        `}}),d=new W({props:{$$slots:{default:[wn]},$$scope:{ctx:a}}}),j=new W({props:{$$slots:{default:[hn]},$$scope:{ctx:a}}}),{c(){t=r(`Sometimes it's easier to read through a large example.

        `),h(e.$$.fragment),i=r(`

        This code, when compiled, creates two global variables: `),h(d.$$.fragment),b=r(" and "),h(j.$$.fragment),F=r(".")},l(_){t=o(_,`Sometimes it's easier to read through a large example.

        `),k(e.$$.fragment,_),i=o(_,`

        This code, when compiled, creates two global variables: `),k(d.$$.fragment,_),b=o(_," and "),k(j.$$.fragment,_),F=o(_,".")},m(_,P){s(_,t,P),v(e,_,P),s(_,i,P),v(d,_,P),s(_,b,P),v(j,_,P),s(_,F,P),T=!0},p(_,P){const w={};P&1&&(w.$$scope={dirty:P,ctx:_}),d.$set(w);const C={};P&1&&(C.$$scope={dirty:P,ctx:_}),j.$set(C)},i(_){T||(B(e.$$.fragment,_),B(d.$$.fragment,_),B(j.$$.fragment,_),T=!0)},o(_){N(e.$$.fragment,_),N(d.$$.fragment,_),N(j.$$.fragment,_),T=!1},d(_){_&&(n(t),n(i),n(b),n(F)),D(e,_),D(d,_),D(j,_)}}}function vn(a){let t;return{c(){t=r("Compilation")},l(e){t=o(e,"Compilation")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Bn(a){let t;return{c(){t=r(`Compiled DFON code will generate one process, and 0 or more functions. All generated templates need to be placed down to work.
        You will need to manually call the process when the first player joins the plot, there is no need to manually call the functions.`)},l(e){t=o(e,`Compiled DFON code will generate one process, and 0 or more functions. All generated templates need to be placed down to work.
        You will need to manually call the process when the first player joins the plot, there is no need to manually call the functions.`)},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Nn(a){let t;return{c(){t=r("Limits")},l(e){t=o(e,"Limits")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Dn(a){let t;return{c(){t=r("Discord")},l(e){t=o(e,"Discord")},m(e,i){s(e,t,i)},d(e){e&&n(t)}}}function Rn(a){let t,e,i,d,b,j,F,T,_,P;return T=new nt({props:{href:"https://discord.gg/G6nuF8zz7S",$$slots:{default:[Dn]},$$scope:{ctx:a}}}),{c(){t=r(`DFON isn't a good fit for every project. Using it means that any time you want to change data, you will need to edit the script,
        recompile the code, and replace the templates. This is made even harder if multiple people are working on your plot.`),e=A("br"),i=A("br"),d=r(`

        The main reasons to use DFON are to make constant data easier to read through and spot bugs with, as well as providing a sort of "backup" in case 
        code is accidentally lost. Constant data is often more devastating to lose than a simple algorithm.`),b=A("br"),j=A("br"),F=r(`

        You can join my `),h(T.$$.fragment),_=r(` to get in contact if you'd like to suggest features.
        I am still currently thinking about implementation for function hooks, embedded metadata, support for all DF datatypes, and support for items, among other things.`)},l(w){t=o(w,`DFON isn't a good fit for every project. Using it means that any time you want to change data, you will need to edit the script,
        recompile the code, and replace the templates. This is made even harder if multiple people are working on your plot.`),e=I(w,"BR",{}),i=I(w,"BR",{}),d=o(w,`

        The main reasons to use DFON are to make constant data easier to read through and spot bugs with, as well as providing a sort of "backup" in case 
        code is accidentally lost. Constant data is often more devastating to lose than a simple algorithm.`),b=I(w,"BR",{}),j=I(w,"BR",{}),F=o(w,`

        You can join my `),k(T.$$.fragment,w),_=o(w,` to get in contact if you'd like to suggest features.
        I am still currently thinking about implementation for function hooks, embedded metadata, support for all DF datatypes, and support for items, among other things.`)},m(w,C){s(w,t,C),s(w,e,C),s(w,i,C),s(w,d,C),s(w,b,C),s(w,j,C),s(w,F,C),v(T,w,C),s(w,_,C),P=!0},p(w,C){const J={};C&1&&(J.$$scope={dirty:C,ctx:w}),T.$set(J)},i(w){P||(B(T.$$.fragment,w),P=!0)},o(w){N(T.$$.fragment,w),P=!1},d(w){w&&(n(t),n(e),n(i),n(d),n(b),n(j),n(F),n(_)),D(T,w)}}}function Fn(a){let t,e,i,d,b,j,F,T,_,P,w,C,J,M,H,E,z,Y,V,U,u,S,L,c,R,G,q,Q,m,y,K,ne,x,se,ee,f,O,ie,te,le;return t=new rt({props:{title:"DiamondFire Object Notation Reference",$$slots:{default:[ct]},$$scope:{ctx:a}}}),i=new _e({props:{$$slots:{default:[bt]},$$scope:{ctx:a}}}),b=new be({props:{$$slots:{default:[gt]},$$scope:{ctx:a}}}),F=new _e({props:{$$slots:{default:[vt]},$$scope:{ctx:a}}}),_=new be({props:{$$slots:{default:[Bt]},$$scope:{ctx:a}}}),w=new _e({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),J=new be({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),H=new _e({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),z=new be({props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}),V=new _e({props:{$$slots:{default:[$n]},$$scope:{ctx:a}}}),u=new be({props:{$$slots:{default:[ln]},$$scope:{ctx:a}}}),L=new _e({props:{$$slots:{default:[an]},$$scope:{ctx:a}}}),R=new be({props:{$$slots:{default:[rn]},$$scope:{ctx:a}}}),q=new _e({props:{$$slots:{default:[gn]},$$scope:{ctx:a}}}),m=new be({props:{$$slots:{default:[dn]},$$scope:{ctx:a}}}),K=new _e({props:{$$slots:{default:[kn]},$$scope:{ctx:a}}}),x=new be({props:{$$slots:{default:[vn]},$$scope:{ctx:a}}}),ee=new _e({props:{$$slots:{default:[Bn]},$$scope:{ctx:a}}}),O=new be({props:{$$slots:{default:[Nn]},$$scope:{ctx:a}}}),te=new _e({props:{$$slots:{default:[Rn]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=X(),h(i.$$.fragment),d=X(),h(b.$$.fragment),j=X(),h(F.$$.fragment),T=X(),h(_.$$.fragment),P=X(),h(w.$$.fragment),C=X(),h(J.$$.fragment),M=X(),h(H.$$.fragment),E=X(),h(z.$$.fragment),Y=X(),h(V.$$.fragment),U=X(),h(u.$$.fragment),S=X(),h(L.$$.fragment),c=X(),h(R.$$.fragment),G=X(),h(q.$$.fragment),Q=X(),h(m.$$.fragment),y=X(),h(K.$$.fragment),ne=X(),h(x.$$.fragment),se=X(),h(ee.$$.fragment),f=X(),h(O.$$.fragment),ie=X(),h(te.$$.fragment)},l(l){k(t.$$.fragment,l),e=Z(l),k(i.$$.fragment,l),d=Z(l),k(b.$$.fragment,l),j=Z(l),k(F.$$.fragment,l),T=Z(l),k(_.$$.fragment,l),P=Z(l),k(w.$$.fragment,l),C=Z(l),k(J.$$.fragment,l),M=Z(l),k(H.$$.fragment,l),E=Z(l),k(z.$$.fragment,l),Y=Z(l),k(V.$$.fragment,l),U=Z(l),k(u.$$.fragment,l),S=Z(l),k(L.$$.fragment,l),c=Z(l),k(R.$$.fragment,l),G=Z(l),k(q.$$.fragment,l),Q=Z(l),k(m.$$.fragment,l),y=Z(l),k(K.$$.fragment,l),ne=Z(l),k(x.$$.fragment,l),se=Z(l),k(ee.$$.fragment,l),f=Z(l),k(O.$$.fragment,l),ie=Z(l),k(te.$$.fragment,l)},m(l,g){v(t,l,g),s(l,e,g),v(i,l,g),s(l,d,g),v(b,l,g),s(l,j,g),v(F,l,g),s(l,T,g),v(_,l,g),s(l,P,g),v(w,l,g),s(l,C,g),v(J,l,g),s(l,M,g),v(H,l,g),s(l,E,g),v(z,l,g),s(l,Y,g),v(V,l,g),s(l,U,g),v(u,l,g),s(l,S,g),v(L,l,g),s(l,c,g),v(R,l,g),s(l,G,g),v(q,l,g),s(l,Q,g),v(m,l,g),s(l,y,g),v(K,l,g),s(l,ne,g),v(x,l,g),s(l,se,g),v(ee,l,g),s(l,f,g),v(O,l,g),s(l,ie,g),v(te,l,g),le=!0},p(l,g){const ue={};g&1&&(ue.$$scope={dirty:g,ctx:l}),t.$set(ue);const ce={};g&1&&(ce.$$scope={dirty:g,ctx:l}),i.$set(ce);const $e={};g&1&&($e.$$scope={dirty:g,ctx:l}),b.$set($e);const ge={};g&1&&(ge.$$scope={dirty:g,ctx:l}),F.$set(ge);const de={};g&1&&(de.$$scope={dirty:g,ctx:l}),_.$set(de);const we={};g&1&&(we.$$scope={dirty:g,ctx:l}),w.$set(we);const he={};g&1&&(he.$$scope={dirty:g,ctx:l}),J.$set(he);const ae={};g&1&&(ae.$$scope={dirty:g,ctx:l}),H.$set(ae);const ke={};g&1&&(ke.$$scope={dirty:g,ctx:l}),z.$set(ke);const re={};g&1&&(re.$$scope={dirty:g,ctx:l}),V.$set(re);const ve={};g&1&&(ve.$$scope={dirty:g,ctx:l}),u.$set(ve);const oe={};g&1&&(oe.$$scope={dirty:g,ctx:l}),L.$set(oe);const Be={};g&1&&(Be.$$scope={dirty:g,ctx:l}),R.$set(Be);const Ne={};g&1&&(Ne.$$scope={dirty:g,ctx:l}),q.$set(Ne);const fe={};g&1&&(fe.$$scope={dirty:g,ctx:l}),m.$set(fe);const De={};g&1&&(De.$$scope={dirty:g,ctx:l}),K.$set(De);const me={};g&1&&(me.$$scope={dirty:g,ctx:l}),x.$set(me);const Re={};g&1&&(Re.$$scope={dirty:g,ctx:l}),ee.$set(Re);const pe={};g&1&&(pe.$$scope={dirty:g,ctx:l}),O.$set(pe);const Fe={};g&1&&(Fe.$$scope={dirty:g,ctx:l}),te.$set(Fe)},i(l){le||(B(t.$$.fragment,l),B(i.$$.fragment,l),B(b.$$.fragment,l),B(F.$$.fragment,l),B(_.$$.fragment,l),B(w.$$.fragment,l),B(J.$$.fragment,l),B(H.$$.fragment,l),B(z.$$.fragment,l),B(V.$$.fragment,l),B(u.$$.fragment,l),B(L.$$.fragment,l),B(R.$$.fragment,l),B(q.$$.fragment,l),B(m.$$.fragment,l),B(K.$$.fragment,l),B(x.$$.fragment,l),B(ee.$$.fragment,l),B(O.$$.fragment,l),B(te.$$.fragment,l),le=!0)},o(l){N(t.$$.fragment,l),N(i.$$.fragment,l),N(b.$$.fragment,l),N(F.$$.fragment,l),N(_.$$.fragment,l),N(w.$$.fragment,l),N(J.$$.fragment,l),N(H.$$.fragment,l),N(z.$$.fragment,l),N(V.$$.fragment,l),N(u.$$.fragment,l),N(L.$$.fragment,l),N(R.$$.fragment,l),N(q.$$.fragment,l),N(m.$$.fragment,l),N(K.$$.fragment,l),N(x.$$.fragment,l),N(ee.$$.fragment,l),N(O.$$.fragment,l),N(te.$$.fragment,l),le=!1},d(l){l&&(n(e),n(d),n(j),n(T),n(P),n(C),n(M),n(E),n(Y),n(U),n(S),n(c),n(G),n(Q),n(y),n(ne),n(se),n(f),n(ie)),D(t,l),D(i,l),D(b,l),D(F,l),D(_,l),D(w,l),D(J,l),D(H,l),D(z,l),D(V,l),D(u,l),D(L,l),D(R,l),D(q,l),D(m,l),D(K,l),D(x,l),D(ee,l),D(O,l),D(te,l)}}}function Tn(a){let t,e,i,d;return t=new at({props:{title:"DFON - Reference",desc:"Reference page for the DFON markup language."}}),i=new ft({props:{$$slots:{default:[Fn]},$$scope:{ctx:a}}}),{c(){h(t.$$.fragment),e=X(),h(i.$$.fragment)},l(b){k(t.$$.fragment,b),e=Z(b),k(i.$$.fragment,b)},m(b,j){v(t,b,j),s(b,e,j),v(i,b,j),d=!0},p(b,[j]){const F={};j&1&&(F.$$scope={dirty:j,ctx:b}),i.$set(F)},i(b){d||(B(t.$$.fragment,b),B(i.$$.fragment,b),d=!0)},o(b){N(t.$$.fragment,b),N(i.$$.fragment,b),d=!1},d(b){b&&n(e),D(t,b),D(i,b)}}}class Cn extends et{constructor(t){super(),tt(this,t,null,Tn,xe,{})}}export{Cn as component};
