(this.webpackJsonpnotes_app=this.webpackJsonpnotes_app||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/register.bf7ecd46.svg"},26:function(e,t,n){e.exports=n(37)},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=n(1),l=n(3),u=n(7),s=n(13),d=n(4),m=n.n(d),p=n(6),b=new(n(19).a)("notes");b.version(1).stores({notes:"++id, title, text, date"});var f=b,v=Object(a.createContext)(),h=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),d=Object(l.a)(i,2),b=d[0],h=d[1],x=Object(a.useState)({id:"",title:"",text:""}),g=Object(l.a)(x,2),E=g[0],w=g[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.notes.toArray();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(v.Provider,{value:{state:o,handleOpenNote:function(e,t,n,a){h(!0),w({id:e,title:t,text:n,date:a})},isNoteOpen:b,openNote:E,OpenNoteChanger:function(e,t){w((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(u.a)({},e,t))}))},handleNotes:function(e,t,n,a){switch(n){case"add":if(""!==e&&""!==t){var r={title:e,text:t,date:new Date};f.notes.add(r).then(Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.notes.toArray();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))),h(!1)}break;case"delete":f.notes.delete(a).then(Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.notes.toArray();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))),h(!1);break;case"update":""!==e&&""!==t&&(f.notes.update(a,{title:e,text:t,date:new Date}).then(Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.notes.toArray();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))),h(!1));break;case"clear":h(!1);break;default:return null}}}},e.children)},x=n(8),g=n(2);function E(){var e=Object(i.a)(["\n  background: var(--cardsColor);\n  color: white !important;\n  margin-top: 10px;\n  border-radius: 10px;\n  .card-title {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 20px;\n  }\n  .card-separator {\n    background-color: white;\n  }\n  .card-text {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n  }\n  .card-date {\n    float: right;\n    font-size: 12px;\n  }\n  &:hover {\n    box-shadow: 4px 4px 4px 4px rgba(0.2, 0.2, 0.2, 0.2);\n    transition: All 0.2s ease-in-out;\n    cursor: pointer;\n  }\n  &:active {\n    border: 4px solid #40B3A2;\n  }\n"]);return E=function(){return e},e}var w=function(e){var t=e.search,n=e.note,o=n.id,c=n.title,i=n.text,l=n.date,u=Object(a.useContext)(v);if(""!==t&&!i.toLowerCase().includes(t.toLowerCase())&&!c.toLowerCase().includes(t.toLowerCase()))return null;return r.a.createElement(O,{onClick:function(){u.handleOpenNote(o,c,i,l)}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},c),r.a.createElement("hr",{className:"card-separator"}),r.a.createElement("p",{className:"card-text"},i),r.a.createElement("p",{className:"card-date"},x(l.toString()).calendar())))},O=g.a.div(E());function j(){var e=Object(i.a)(["\nmargin-top: 20px;\nfont-size: 24px;\ntext-align: center;\n  color: #14E8C8;\n"]);return j=function(){return e},e}var k=function(e){var t=e.search,n=Object(a.useContext)(v);return 0===n.state.length?r.a.createElement(C,{className:"no-items-div"}," there's no items yet..."):n.state.map((function(e){return r.a.createElement(w,{key:e.id,search:t,note:e})}))},C=g.a.div(j()),N=function(e){var t=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"lets find a note...",onChange:t,style:{width:"100%"}}))};function y(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n"]);return y=function(){return e},e}var S=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{handleChange:function(e){o(e.target.value)}}),r.a.createElement(A,null,r.a.createElement(k,{search:n})))},A=g.a.div(y());function z(){var e=Object(i.a)(["\n  margin-top: 10px;\n  margin-right: 10px;\n"]);return z=function(){return e},e}function D(){var e=Object(i.a)(["\n  font-size: 20px;\n  width: 100%;\n  min-height: 500px;\n  resize: none;\n  outline: none;\n  background: var(--workSpaceColor);\n\n  color: white;\n  border: 2px solid #40b3a2;\n"]);return D=function(){return e},e}function L(){var e=Object(i.a)(["\n  width: 100%;\n  outline: none;\n  background: var(--workSpaceColor);\n  color: white;\n  border: 2px solid #40b3a2;\n  font-size: 30px;\n"]);return L=function(){return e},e}function T(){var e=Object(i.a)(["\n  h3 {\n    margin-top: 10px;\n    color: #14e8c8;\n  }\n"]);return T=function(){return e},e}var B=function(e){var t=e.changeHandler,n=e.handleClick,a=e.isNoteOpen,o=e.title,c=e.text,i=e.date;return r.a.createElement(P,null,r.a.createElement("h3",null,"Title:"),r.a.createElement(W,{id:"title",type:"title",value:o,onChange:t("title"),autoComplete:"off",title:o}),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,x(i.toString()).calendar()),r.a.createElement(H,{onClick:n("delete"),className:"btn btn-danger btn-sm"},"DELETE"),r.a.createElement(H,{onClick:n("update"),className:"btn btn-warning btn-sm"},"UPDATE"),r.a.createElement(H,{onClick:n("clear"),className:"btn btn-secondary btn-sm"},"CLEAR INPUT")),r.a.createElement(H,{onClick:n("add"),className:"btn btn-success btn-sm"},"ADD NEW"),r.a.createElement("h3",null,"Text:"),r.a.createElement(F,{id:"text",type:"text",value:c,onChange:t("text")}))},P=g.a.div(T()),W=g.a.input(L()),F=g.a.textarea(D()),H=g.a.button(z()),I=function(e){var t=Object(a.useContext)(v),n=t.isNoteOpen,o=t.openNote,c=t.OpenNoteChanger,i=t.handleNotes,u=Object(a.useState)(""),s=Object(l.a)(u,2),d=s[0],m=s[1],p=Object(a.useState)(""),b=Object(l.a)(p,2),f=b[0],h=b[1],x=Object(a.useState)(""),g=Object(l.a)(x,2),E=g[0],w=g[1];Object(a.useEffect)((function(){n?(m(o.title),h(o.text),w(o.date)):(m(""),h(""),w(""))}),[o.title,o.text,o.date,n]);return r.a.createElement(B,{changeHandler:function(e){return function(t){n&&c(e,t.target.value),"title"===e?m(t.target.value):h(t.target.value)}},handleClick:function(e){return function(){i(d,f,e,o.id)}},isNoteOpen:n,title:d,text:f,date:E})},J=(n(35),n(24)),U=n(15),_=n(23),M=n.n(_);function R(){var e=Object(i.a)(["\n  background: var(--navbarColor);\n  margin-bottom: 20px;\n  color: white !important;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  height: 60px !important;\n  img {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n  }\n\n  .title {\n    font-weight: bold !important;\n    font-size: 24px;\n    color:  white;\n  }\n"]);return R=function(){return e},e}var $=function(){return r.a.createElement(q,{className:"navbar navbar-light"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{src:M.a,alt:"icon"}),"NOTES"))},q=g.a.nav(R());function G(){var e=Object(i.a)(["\n  background-color: var(--backgroundColor);\n  background-size: cover;\n"]);return G=function(){return e},e}function K(){var e=Object(i.a)([""]);return K=function(){return e},e}var Q=function(){return r.a.createElement(X,null,r.a.createElement(V,{className:"container"},r.a.createElement($,null),r.a.createElement(J.a,null,r.a.createElement(U.a,{xs:3,lg:"3"},r.a.createElement(S,null)),r.a.createElement(U.a,null,r.a.createElement(I,null)))))},V=g.a.div(K()),X=g.a.div(G());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(36);c.a.render(r.a.createElement(h,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.adb33c0b.chunk.js.map