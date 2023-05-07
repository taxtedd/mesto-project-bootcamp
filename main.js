(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{I:()=>K});var t={baseUrl:"https://nomoreparties.co/v1/exp-mipt-fbc-1",headers:{authorization:"59844c9d-8d8a-441e-8b23-64a7c9cc844e","Content-Type":"application/json"}},n=document.querySelector(".elements"),o=document.querySelector("#element-template").content;function r(e){var t=function(e){var t=o.querySelector(".element").cloneNode(!0);if(t._id=e._id,t.querySelector(".element__title").textContent=e.name,t.querySelector(".element__image").src=e.link,t.querySelector(".element__image").alt=e.name,t.querySelector(".element__like-counter").textContent=String(e.likes.length),K._id!=e.owner._id){var n=t.querySelector(".element__delete");t.removeChild(n)}return e.likes.find((function(e){return e._id===K._id}))&&t.querySelector(".element__like").classList.add("element__like_active"),t}(e);n.prepend(t)}var c=document.querySelector(".popup_type_edit"),a=document.querySelector(".popup_type_add"),i=document.querySelector(".popup_type_avatar"),l=document.forms.avatarForm,s=l.elements.link,u=document.forms.placeForm,d=u.elements.title,m=u.elements.link,p=document.forms.profileForm,f=p.elements.name,_=p.elements.description,v=document.querySelector(".profile__name"),y=document.querySelector(".profile__description"),h=document.querySelector(".profile__image"),S=document.querySelector(".popup_type_image"),b=S.querySelector(".popup__image"),g=S.querySelector(".popup__heading"),q=u.querySelector(".popup__save-button"),k=p.querySelector(".popup__save-button"),C=l.querySelector(".popup__save-button");function L(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.src;v.textContent=e,y.textContent=t,h.src=n}function E(e){e.target.classList.contains("popup__exit-button")?A(e.currentTarget):e.target.classList.contains("popup")&&A(e.target)}function j(e){"Escape"===e.key&&A(document.querySelector(".popup_opened"))}function x(e,t){e?(console.log(t.textContent),t.textContent="Сохранение..."):t.textContent="Сохранить"}function P(e){document.addEventListener("keydown",j),e.classList.add("popup_opened")}function A(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",j)}function B(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n),t.disabled=!1):(t.classList.add(n),t.disabled=!0)}var U,O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},T=document.querySelectorAll(".popup"),D=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),w=document.querySelector(".profile__image-button"),J=c.querySelector(O.submitButtonSelector),F=a.querySelector(O.submitButtonSelector),H=i.querySelector(O.submitButtonSelector),z=a.querySelector(".popup__form"),I=Array.from(c.querySelectorAll(O.inputSelector)),M=Array.from(a.querySelectorAll(O.inputSelector)),G=Array.from(i.querySelectorAll(O.inputSelector)),K={};T.forEach((function(e){return e.addEventListener("click",E)})),D.addEventListener("click",(function(){f.value=v.textContent,_.value=y.textContent,B(I,J,O.inactiveButtonClass),P(c)})),N.addEventListener("click",(function(){z.reset(),B(M,F,O.inactiveButtonClass),P(a)})),w.addEventListener("click",(function(){s.value=h.src,B(G,H,O.inactiveButtonClass),P(i)})),p.addEventListener("submit",(function(e){var n;e.preventDefault(),x(!0,k),(n={name:f.value,about:_.value},fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:n.name,about:n.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){L(e.name,e.about)})).catch((function(e){console.log(e)})).finally((function(){x(!1,k),A(c)}))})),u.addEventListener("submit",(function(e){var n;e.preventDefault(),x(!0,q),(n={name:d.value,link:m.value},fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:n.name,link:n.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){r(e)})).catch((function(e){console.log(e)})).finally((function(){x(!1,q),e.target.reset(),A(a)}))})),l.addEventListener("submit",(function(e){var n;e.preventDefault(),x(!0,C),(n=s.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){h.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){x(!1,C),e.target.reset(),A(i)}))})),n.addEventListener("click",(function(e){var n,o,r,c;e.target.classList.contains("element__like")?(n=e.target,r=n.closest(".element__like-container").querySelector(".element__like-counter"),c=n.closest(".element"),n.classList.contains("element__like_active")?(o=c,fetch("".concat(t.baseUrl,"/cards/likes/").concat(o._id),{method:"DELETE",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){n.classList.remove("element__like_active"),r.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:t.headers,body:JSON.stringify({_id:e._id})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(c).then((function(e){n.classList.add("element__like_active"),r.textContent=e.likes.length})).catch((function(e){console.log(e)}))):e.target.classList.contains("element__delete")?function(e){var n=e.closest(".element");(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})(n).then((function(){n.remove()})).catch((function(e){console.log(e)}))}(e.target):e.target.classList.contains("element__image")&&(!function(e){b.src=e.querySelector(".element__image").src,b.alt=e.querySelector(".element__image").alt,g.textContent=e.querySelector(".element__title").textContent}(e.target.closest(".element")),P(S))})),U=O,Array.from(document.querySelectorAll(U.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),B(n,o,t.inactiveButtonClass)}))}))}(e,U)})),fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){for(var t=e.length-1;t>=0;t--)r(e[t])})).catch((function(e){console.log(e)})),fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){L(e.name,e.about,e.avatar),K=e})).catch((function(e){console.log(e)}))})();