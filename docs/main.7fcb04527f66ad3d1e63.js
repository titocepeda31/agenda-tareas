(()=>{"use strict";var t={707:(t,e,o)=>{o.d(e,{Z:()=>g});var i=o(645),n=o.n(i),r=o(667),a=o.n(r),l=new URL(o(470),o.b),d=new URL(o(438),o.b),s=n()((function(t){return t[1]})),p=a()(l),c=a()(d);s.push([t.id,'html,body{margin:0;padding:0}button{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;-webkit-appearance:none;appearance:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{font:14px "Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#111;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:300}:focus{outline:0}.hidden{display:none}.todoapp{background:#fff;margin:130px 0 40px 0;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.todoapp input::-webkit-input-placeholder{font-style:italic;font-weight:300;color:rgba(0,0,0,.4)}.todoapp input::-moz-placeholder{font-style:italic;font-weight:300;color:rgba(0,0,0,.4)}.todoapp input::input-placeholder{font-style:italic;font-weight:300;color:rgba(0,0,0,.4)}.todoapp h1{position:absolute;top:-140px;width:100%;font-size:80px;font-weight:200;text-align:center;color:#b83f45;-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.new-todo,.edit{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.main{position:relative;z-index:2;border-top:1px solid #e6e6e6}.toggle-all{width:1px;height:1px;border:none;opacity:0;position:absolute;right:100%;bottom:100%}.toggle-all+label{width:60px;height:34px;font-size:0;position:absolute;top:-52px;left:-13px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.toggle-all+label:before{content:"❯";font-size:22px;color:#e6e6e6;padding:10px 27px 10px 27px}.toggle-all:checked+label:before{color:#737373}.todo-list{margin:0;padding:0;list-style:none}.todo-list li{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list li:last-child{border-bottom:none}.todo-list li.editing{border-bottom:none;padding:0}.todo-list li.editing .edit{display:block;width:calc(100% - 43px);padding:12px 16px;margin:0 0 0 43px}.todo-list li.editing .view{display:none}.todo-list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;appearance:none}.todo-list li .toggle{opacity:0}.todo-list li .toggle+label{background-image:url('+p+");background-repeat:no-repeat;background-position:center left}.todo-list li .toggle:checked+label{background-image:url("+c+')}.todo-list li label{word-break:break-all;padding:15px 15px 15px 60px;display:block;line-height:1.2;transition:color .4s;font-weight:400;color:#4d4d4d}.todo-list li.completed label{color:#cdcdcd;text-decoration:line-through}.todo-list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;transition:color .2s ease-out}.todo-list li .destroy:hover{color:#af5b5e}.todo-list li .destroy:after{content:"×"}.todo-list li:hover .destroy{display:block}.todo-list li .edit{display:none}.todo-list li.editing:last-child{margin-bottom:-1px}.footer{padding:10px 15px;height:20px;text-align:center;font-size:15px;border-top:1px solid #e6e6e6}.footer:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.todo-count{float:left;text-align:left}.todo-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters li{display:inline}.filters li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.filters li a:hover{border-color:rgba(175,47,47,.1)}.filters li a.selected{border-color:rgba(175,47,47,.2)}.clear-completed,html .clear-completed:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.clear-completed:hover{text-decoration:underline}.info{margin:65px auto 0;color:#4d4d4d;font-size:11px;text-shadow:0 1px 0 rgba(255,255,255,.5);text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none;font-weight:400}.info a:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio: 0){.toggle-all,.todo-list li .toggle{background:none}.todo-list li .toggle{height:40px}}@media(max-width: 430px){.footer{height:50px}.filters{bottom:10px}}hr{margin:20px 0;border:0;border-top:1px dashed #c5c5c5;border-bottom:1px dashed #f7f7f7}.learn a{font-weight:normal;text-decoration:none;color:#b83f45}.learn a:hover{text-decoration:underline;color:#787e7e}.learn h3,.learn h4,.learn h5{margin:10px 0;font-weight:500;line-height:1.2;color:#000}.learn h3{font-size:24px}.learn h4{font-size:18px}.learn h5{margin-bottom:0;font-size:14px}.learn ul{padding:0;margin:0 0 30px 25px}.learn li{line-height:20px}.learn p{font-size:15px;font-weight:300;line-height:1.3;margin-top:0;margin-bottom:0}#issue-count{display:none}.quote{border:none;margin:20px 0 60px 0}.quote p{font-style:italic}.quote p:before{content:"“";font-size:50px;opacity:.15;position:absolute;top:-20px;left:3px}.quote p:after{content:"”";font-size:50px;opacity:.15;position:absolute;bottom:-42px;right:3px}.quote footer{position:absolute;bottom:-40px;right:0}.quote footer img{border-radius:3px}.quote footer a{margin-left:5px;vertical-align:middle}.speech-bubble{position:relative;padding:10px;background:rgba(0,0,0,.04);border-radius:5px}.speech-bubble:after{content:"";position:absolute;top:100%;right:30px;border:13px solid transparent;border-top-color:rgba(0,0,0,.04)}.learn-bar>.learn{position:absolute;width:272px;top:8px;left:-300px;padding:10px;border-radius:5px;background-color:rgba(255,255,255,.6);transition-property:left;transition-duration:500ms}@media(min-width: 899px){.learn-bar{width:auto;padding-left:300px}.learn-bar>.learn{left:8px}}',""]);const g=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,i){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(n[a]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);i&&n[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},379:t=>{var e=[];function o(t){for(var o=-1,i=0;i<e.length;i++)if(e[i].identifier===t){o=i;break}return o}function i(t,i){for(var r={},a=[],l=0;l<t.length;l++){var d=t[l],s=i.base?d[0]+i.base:d[0],p=r[s]||0,c="".concat(s," ").concat(p);r[s]=p+1;var g=o(c),h={css:d[1],media:d[2],sourceMap:d[3]};-1!==g?(e[g].references++,e[g].updater(h)):e.push({identifier:c,updater:n(h,i),references:1}),a.push(c)}return a}function n(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o.update(t=e)}else o.remove()}}t.exports=function(t,n){var r=i(t=t||[],n=n||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var l=o(r[a]);e[l].references--}for(var d=i(t,n),s=0;s<r.length;s++){var p=o(r[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=d}}},569:t=>{var e={};t.exports=function(t,o){var i=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var i=o.css,n=o.media,r=o.sourceMap;n?t.setAttribute("media",n):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},438:t=>{t.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E"},470:t=>{t.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,o),r.exports}o.m=t,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.b=document.baseURI||self.location.href;var i={};(()=>{o.d(i,{L:()=>z});var t=o(379),e=o.n(t),n=o(795),r=o.n(n),a=o(569),l=o.n(a),d=o(565),s=o.n(d),p=o(216),c=o.n(p),g=o(589),h=o.n(g),f=o(707),u={};u.styleTagTransform=h(),u.setAttributes=s(),u.insert=l().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=c();e()(f.Z,u);f.Z&&f.Z.locals&&f.Z.locals;class x{constructor(t){this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.FechaCreacion=new Date}}const m=document.querySelector(".todo-list"),b=document.querySelector(".new-todo"),v=document.querySelector(".clear-completed"),w=document.querySelector(".filters"),y=document.querySelectorAll(".filtro"),k=document.querySelector(".contador-todos"),L=()=>{k.innerText=z.contadorTodos()},C=t=>{const e=`  \n        <li class="${t.completado?"completed":""}" data-id="${t.id}">\n        <div class="view">\n        <input class="toggle" type="checkbox" ${t.completado?"checked":""}>\n        <label>${t.tarea}</label>\n        <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n        </li>`,o=document.createElement("div");return o.innerHTML=e,m.append(o.firstElementChild),L(),o.firstElementChild};b.addEventListener("keyup",(t=>{if(13===t.keyCode&&b.value.length>0){const t=new x(b.value);z.nuevoTodo(t),C(t),b.value=""}})),m.addEventListener("click",(t=>{const e=t.target.type,o=t.target.localName,i=t.target.parentElement.parentElement,n=t.target.parentElement.parentElement.getAttribute("data-id");"input"==o&&"checkbox"==e?(z.marcarCompletado(n),L(),i.classList.toggle("completed")):"button"==o&&"submit"==e&&(z.eliminarTodo(n),m.removeChild(i),L())})),v.addEventListener("click",(()=>{z.eliminaCompletados();for(let t=m.children.length-1;t>=0;t--){const e=m.children[t];e.classList.contains("completed")&&m.removeChild(e)}})),w.addEventListener("click",(t=>{const e=t.target.text;if(e){y.forEach((t=>t.classList.remove("selected"))),t.target.classList.add("selected");for(const t of m.children){t.classList.remove("hidden");const o=t.classList.contains("completed");switch(e){case"Pendientes":o&&t.classList.add("hidden");break;case"Completados":o||t.classList.add("hidden")}}}}));const z=new class{constructor(){this.cargarLocalStorage()}nuevoTodo(t){this.todos.push(t),this.guardarLocalStorage()}eliminarTodo(t){this.todos=this.todos.filter((e=>e.id!=t)),this.guardarLocalStorage()}marcarCompletado(t){for(const e of this.todos)if(t==e.id){e.completado=!e.completado,this.guardarLocalStorage();break}}eliminaCompletados(){this.todos=this.todos.filter((t=>0==t.completado)),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))}cargarLocalStorage(){this.todos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]}contadorTodos(){return this.todos.filter((t=>0==t.completado)).length}};z.todos.forEach((t=>C(t)))})()})();