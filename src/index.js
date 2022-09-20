import { initialPageLoad } from "./initialPageLoad.js";
import { menu } from "./menu.js";
import { contact } from './contact.js';

console.log("This is my console log statement ha");
initialPageLoad();

let tabSwitchingModule = (function(){
    const homeTab = document.querySelector(".home");
homeTab.addEventListener('click', initialPageLoad);

const menuTab = document.querySelector(".menu");
menuTab.addEventListener("click", menu);

const contactTab = document.querySelector(".contact");
contactTab.addEventListener('click', contact);
})();

