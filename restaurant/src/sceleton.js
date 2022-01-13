// below creates HTML for header, navigation-bar and the footer
let sceletonHTML = (function sceletonHTML() {

    let header = document.createElement("div");
    header.classList.add("header");

    let navContainer = document.createElement("div");
    let nav = document.createElement("div");
    navContainer.classList.add("nav");
    navContainer.appendChild(nav);

    let footer = document.createElement("div");
    footer.classList.add("footer");

    let container = document.getElementById("body");

    container.appendChild(header);
    container.appendChild(navContainer);
    container.appendChild(footer);
});

// below inserts the header-image
let headerContent = (function headerContent() {
    let pic = document.createElement("img");
    pic.src = "/img/lotr.png";

    let header = document.getElementsByClassName("header");
    header[0].appendChild(pic);})

// below creates the navbar with 3 options
let navBar = (function navBar() {
    let list = document.createElement("ul");
    let textContent = ["Home", "Menu", "Contact"];
    let ids = ["home", "menu", "contact"];

    for (let i = 0; i < 3; i++) {
        let li = document.createElement("li");
        li.innerText = textContent[i];
        li.id = ids[i];
        list.appendChild(li);
    }

    let navContainer = document.getElementsByClassName("nav");
    navContainer[0].appendChild(list);

})





export {sceletonHTML, headerContent, navBar, footerContent};