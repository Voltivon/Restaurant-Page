(()=>{var e={637:()=>{},83:()=>{}},t={};function n(c){var o=t[c];if(void 0!==o)return o.exports;var s=t[c]={exports:{}};return e[c](s,s.exports,n),s.exports}(()=>{"use strict";function e(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to my restaurant page",t.classList.add("header"),e.appendChild(t);const n=document.createElement("img");n.src="restaurantPhoto.jpg",n.classList.add("image"),e.appendChild(n);const c=document.createElement("p");c.textContent="Best restaurant in town",c.classList.add("section-text-one"),e.appendChild(c);const o=document.createElement("p");o.textContent="Good service",e.classList.add("section-text-two"),e.appendChild(o);const s=document.createElement("p");s.textContent="Crazy fun",s.classList.add("section-text-three"),e.appendChild(s)}var t=n(83),c=n(637);console.log("This is my console log statement ha"),e(),document.querySelector(".home").addEventListener("click",e),document.querySelector(".menu").addEventListener("click",t.menu),document.querySelector(".contact").addEventListener("click",c.contact)})()})();