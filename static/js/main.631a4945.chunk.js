(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),s=n(1),r=n(0),b=function(t){var e=t.tabs,n=t.selectedTabId,c=t.callback;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"App__buttons",children:e.map((function(t){return Object(r.jsx)("button",{type:"button",value:t.id,onClick:function(t){return c(t)},className:"App__button",children:t.title})}))}),Object(r.jsx)("p",{className:"App__content",children:e.map((function(t){return t.id===n?t.content:null}))})]})},l=(n(10),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),o=function(){var t=Object(s.useState)(l[0]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Selected tab is ".concat(n.title)}),Object(r.jsx)(b,{tabs:l,selectedTabId:n.id,callback:function(t){var e=l.find((function(e){return e.id===t.currentTarget.value}));e&&c(e)}})]})};a.a.render(Object(r.jsx)(o,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.631a4945.chunk.js.map