/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){e.exports=a(52)},37:function(e,t,a){},38:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),l=a.n(c);a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(19),i=a(31),s=a(13),m=a(14),u=a(11),h=a(16),d=a(17),p=a(28),E=a.n(p),f=(a(38),a(54)),b=a(55),v=a(56),g=a(57),O=a(58),j=a(59),x=a(60),k=a(61),w=a(66),y=a(62),A=a(63),S=a(64),C=a(65),N=(a(39),a(10)),J=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={items:[],text:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),0!==this.state.text.length){var t={text:this.state.text,id:Date.now()};this.setState((function(e){return{items:e.items.concat(t),text:""}}))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("section",{className:"logo"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"})),r.a.createElement("section",{className:"todo"},r.a.createElement("h3",null,"TODO App"),r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"new-todo"},"Ayo tulis sesuatu disini ..."),r.a.createElement(g.a,{id:"new-todo",type:"text",onChange:this.handleChange,value:this.state.text})),r.a.createElement(O.a,{color:"info"},"Add #",this.state.items.length+1))),r.a.createElement("section",{className:"list-items"},r.a.createElement(D,{items:this.state.items})),r.a.createElement("section",{className:"react-version"},r.a.createElement("p",{className:"font-weight-bold"},"React Js version : ",r.a.version))))}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",null,this.props.items.map((function(e){return r.a.createElement("li",{key:e.id},e.text)})))}}]),a}(n.Component);function z(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(j.a,{color:"info",dark:!0,fixed:"top",expand:"md"},r.a.createElement(x.a,{href:"/"},"Adam Arthur Faizal"),r.a.createElement(k.a,{onClick:function(){return c(!a)}}),r.a.createElement(w.a,{isOpen:a,navbar:!0},r.a.createElement(y.a,{className:"mr-auto",navbar:!0},r.a.createElement(A.a,null,r.a.createElement(S.a,{href:"https://github.com/AdamArthurFaizal"},"GitHub"))),r.a.createElement(C.a,null,"React JS version : ",r.a.version)))}var B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/",component:J,exact:!0})))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{basename:"/TodoApp"},r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.49eb400a.chunk.js.map