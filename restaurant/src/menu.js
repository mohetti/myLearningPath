// This page shows the different foods and drinks

let menuContent = (function menuContent(hide1, hide2, display, content)  {
    hide1.style.display = "none";
    hide2.style.display = "none";

    let alreadyBuilt = document.getElementById("one");
    if (alreadyBuilt) {
        display.style.display = "grid";
    } else {
        display.style.display = "grid";
        content.appendChild(display);

        let ids = ["one", "two", "three", "four", "five", "six"];

        for (let i = 0; i < 6; i++) {
            let displayItems = document.createElement("div");
            displayItems.classList.add("display-items");
            displayItems.id = ids[i];
            displayItems.style.gridArea = ids[i];
            display.appendChild(displayItems);
        }
    };
});


export {menuContent};