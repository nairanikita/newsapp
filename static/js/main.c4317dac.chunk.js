(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),o=(n(11),n(3)),i=n.n(o),u=n(5),l=n(2),j=(n.p,n(13),n(0)),b=function(e){var t=e.title,n=e.image,c=e.content,a=e.url;return Object(j.jsxs)("div",{className:"news",children:[Object(j.jsx)("span",{children:Object(j.jsx)("h1",{children:t})}),Object(j.jsx)("img",{className:"Imag",src:n}),Object(j.jsxs)("p",{children:[c," ",Object(j.jsx)("a",{href:a,children:"Read More"})]})]})},p=function(){var e="2334e3adad3c48708c5780e4a4e31cf7",t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),p=o[0],h=o[1],f=Object(c.useState)(""),O=Object(l.a)(f,2),d=O[0],v=O[1],x=Object(c.useState)("2021-02-20"),g=Object(l.a)(x,2),m=g[0],y=g[1],w=Object(c.useState)(""),S=Object(l.a)(w,2),N=S[0],C=S[1],I=Object(c.useState)(""),D=Object(l.a)(I,2),k=D[0],F=D[1],T=function(){var t=Object(u.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://newsapi.org/v2/top-headlines?country=in&apiKey=".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,console.log(c.articles),s(c.articles);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=Object(c.useState)("In India"),E=Object(l.a)(B,2),J=E[0],K=E[1];Object(c.useEffect)((function(){""==d?T():L()}),[d]);var L=function(){var t=Object(u.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return K("about "+d),t.next=3,fetch("http://newsapi.org/v2/everything?q=".concat(d,"+").concat(k,"&from=").concat(N,"&sortBy=").concat(a.title,"&apiKey=").concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,console.log(c.articles),s(c.articles);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),v(p),C(m),h("")},children:[Object(j.jsx)("input",{className:"inputbutton",type:"text",value:p,onChange:function(e){h(e.target.value),console.log({search:p})}}),Object(j.jsx)("input",{className:"inputbutton",type:"date",value:m,onChange:function(e){e.preventDefault(),y(e.target.value)}}),Object(j.jsxs)("select",{className:"inputbutton",onChange:function(e){e.preventDefault();e.target.value;F(e.target.value),console.log({filter:k})},children:[Object(j.jsx)("option",{value:"all",children:"all "}),Object(j.jsx)("option",{value:"food",children:"food "}),Object(j.jsx)("option",{value:"technology",children:"technology "}),Object(j.jsx)("option",{value:"business",children:"business "})]}),Object(j.jsx)("button",{className:"submit",type:"submit",children:"Search"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("h1",{className:"heading",children:["Top news ",J]}),Object(j.jsx)("div",{className:"Display",children:a.map((function(e){return Object(j.jsx)(b,{title:e.title,image:e.urlToImage,content:e.content,url:e.url})}))})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.c4317dac.chunk.js.map