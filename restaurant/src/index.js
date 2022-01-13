// Everything concentrates in this file.
// EventListeners for the header are in this file.

import * as setUp from "./sceleton.js";
import {landingPageContent, setUpContactAndMenu} from "./home.js";

setUp.sceletonHTML();
setUp.navBar();
setUp.headerContent();
landingPageContent();
setUpContactAndMenu();

let content = document.getElementById("content");
let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");

let homeContainer = document.getElementById("home-container");
let menuContainer = setUpContactAndMenu().menuContainer;
let contactContainer = setUpContactAndMenu().contactContainer;


let navToMenu = (function navToMenu() {
    import("./menu.js").then(menu => {
        menu.menuContent(homeContainer, contactContainer, menuContainer, content);
    })
    
});
menu.addEventListener("click", navToMenu);


let navToHome = (function navToHome() {
    import ("./home.js").then(home => {
        home.homeButton(menuContainer, contactContainer, homeContainer);
    })
});
home.addEventListener("click", navToHome);


let contactPage = (function contactPage() {
    import("./contact.js").then(contact => {
        contact.contactContent(menuContainer, homeContainer, contactContainer, content);
    })
})
contact.addEventListener("click", contactPage);