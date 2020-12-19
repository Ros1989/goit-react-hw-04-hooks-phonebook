(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{21:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e.n(a),o=e(11),i=e.n(o),u=(e(21),e(15)),f=e(4),l=e(2),s=e(3);function d(){var n=Object(l.a)(["\n  padding: 2px 10px;\n  max-width: 250px;\n  height: 30px;\n  background-color: #fff418;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  :hover {\n    transform: scale(1.2);\n  }\n"]);return d=function(){return n},n}function b(){var n=Object(l.a)(["\n  height: 15px;\n  width: 250px;\n"]);return b=function(){return n},n}function p(){var n=Object(l.a)(["\n  width: 85%;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-around;\n  font-weight: 500;\n  color: #ff18cd;\n"]);return p=function(){return n},n}function j(){var n=Object(l.a)(["\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return j=function(){return n},n}var x=s.a.form(j()),h=s.a.label(p()),m=s.a.input(b()),O=s.a.button(d());function g(n){var t=n.addContact,e=Object(a.useState)(""),c=Object(f.a)(e,2),o=c[0],i=c[1],u=Object(a.useState)(""),l=Object(f.a)(u,2),s=l[0],d=l[1],b=function(n){var t=n.target,e=t.name,r=t.value;switch(e){case"name":i(r);break;case"number":d(r);break;default:return}};return Object(r.jsxs)(x,{onSubmit:function(n){n.preventDefault(),o&&s?Number.isNaN(+s)?alert("Phone number must contain only numbers"):(t(o,s),i(""),d("")):alert("You have not entered all the data")},children:[Object(r.jsxs)(h,{children:["Name",Object(r.jsx)(m,{type:"text",name:"name",value:o,placeholder:"Enter name",onChange:b})]}),Object(r.jsxs)(h,{children:["Number",Object(r.jsx)(m,{name:"number",type:"tel",value:s,placeholder:"Enter phone number",onChange:b})]}),Object(r.jsx)(O,{type:"submit",children:"Add contact"})]})}function v(){var n=Object(l.a)(["\n  padding: 5px 10px;\n  max-width: 200px;\n  height: 20px;\n  background-color: goldenrod;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.6rem;\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n"]);return v=function(){return n},n}function w(){var n=Object(l.a)(["\n  font-weight: 500;\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n  padding: 5px 5px 5px 5px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  /* background-color:grey; */\n  background-color: #fff;\n  :not(:nth-child(odd)) {\n    background-color: #cacaca;\n  }\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  margin-bottom: 10px;\n  box-shadow: 10px 5px 5px grey;\n"]);return y=function(){return n},n}function k(){var n=Object(l.a)(["\n  max-width: 700px;\n  margin: 0 auto;\n"]);return k=function(){return n},n}var C=s.a.ul(k()),S=s.a.li(y()),N=s.a.p(w()),I=s.a.button(v());function D(n){var t=n.items,e=n.onDeleteContact;return Object(r.jsx)(C,{children:t.map((function(n){return Object(r.jsxs)(S,{children:[Object(r.jsxs)(N,{children:[n.name," :"]}),Object(r.jsx)(N,{children:n.number}),Object(r.jsx)(I,{type:"button",onClick:function(){return e(n.id)},children:"Delete"})]},n.id)}))})}function E(){var n=Object(l.a)(["\n  width: 100%;\n  text-align: center;\n  font-size: 2rem;\n  color: #1834ff;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 40px;\n"]);return E=function(){return n},n}function F(){var n=Object(l.a)(["\n  padding: 20px 0px 20px;\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: #18f0ff;\n"]);return F=function(){return n},n}var J=s.a.section(F()),z=s.a.h2(E());function L(n){var t=n.title,e=n.children;return Object(r.jsxs)(J,{children:[Object(r.jsx)(z,{children:t}),e]})}function P(){var n=Object(l.a)(["\n  width: 30%;\n"]);return P=function(){return n},n}function A(){var n=Object(l.a)(["\n  width: 100%;\n  /* text-align:center; */\n  margin-bottom: 5px;\n  margin-left: 205px;\n  color: #ff188c;\n"]);return A=function(){return n},n}function B(){var n=Object(l.a)(["\n  width: 100%;\n  font-weight: 500;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return B=function(){return n},n}function M(){var n=Object(l.a)(["\n  width: 100%;\n  padding-bottom: 20px;\n  margin-top: 10px;\n"]);return M=function(){return n},n}var Y=s.a.div(M()),q=s.a.label(B()),G=s.a.p(A()),H=s.a.input(P());function K(n){var t=n.value,e=n.OnInputFilter;return Object(r.jsx)(Y,{children:Object(r.jsxs)(q,{children:[Object(r.jsx)(G,{children:"Find Contacts by name"}),Object(r.jsx)(H,{type:"text",value:t,onChange:function(n){return e(n.target.value)}})]})})}var Q=e(26);function R(){var n,t=Object(a.useState)(null!==(n=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==n?n:""),e=Object(f.a)(t,2),c=e[0],o=e[1],i=Object(a.useState)(""),l=Object(f.a)(i,2),s=l[0],d=l[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))}),[c]);var b=c.filter((function(n){return n.name.toLowerCase().includes(s.toLowerCase())}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(L,{title:"Phonebook",children:[Object(r.jsx)(g,{addContact:function(n,t){if(function(n){return c.map((function(n){return n.name})).includes(n)}(n))return alert("".concat(n," is in the list of your contacts"));o((function(e){return[].concat(Object(u.a)(e),[{id:Object(Q.a)(),name:n,number:t}])}))}}),Object(r.jsx)(K,{value:s,OnInputFilter:function(n){d(n)}}),Object(r.jsx)(D,{items:b,onDeleteContact:function(n){o((function(t){return t.filter((function(t){return t.id!==n}))}))}})]})})}i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c3e522d0.chunk.js.map