// body of the landing page. Below h1, and 2 paragraphs are created for "Home"

let landingPageContent = (function landingPageContent() {
        
        let homeContainer = document.createElement("div");
        homeContainer.id = "home-container";
        let headline = document.createElement("h1");
        headline.id = "headline";
        headline.innerText = "The Second Breakfast";

        let paragraph1 = document.createElement("div");
        let paragraph2 = document.createElement("div");
        paragraph1.classList.add("paragraph");
        paragraph1.id = "first-paragraph";
        paragraph2.classList.add("paragraph");
        paragraph1.innerText = "This is the Second Breakfast. This is the Second Breakfast. This is the Second Breakfast."
        paragraph2.innerText = "You can eat here. You can eat here. You can eat here. You can eat here. You can eat here. "

        let content = document.getElementById("content");
        content.appendChild(homeContainer);
        homeContainer.appendChild(headline);
        homeContainer.appendChild(paragraph1);
        homeContainer.appendChild(paragraph2);
})

let homeButton = (function homeButton(hide1, hide2, display) {
    
        display.style.display = "flex";
        hide1.style.display = "none";
        hide2.style.display = "none";
})

let setUpContactAndMenu = (function setUpContactAndMenu() {
    let contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";
    contactContainer.style.display = "none";
    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.style.display = "none";

    return ({menuContainer, contactContainer});
})

export {landingPageContent, setUpContactAndMenu, homeButton};