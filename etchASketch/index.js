"use strict";

let container = document.getElementById("grid");
let n;

// creating a grid with number-input from user.
let makeGrid = function makeGrid(input) {
    let c;
    
    for (c = 0; c < (input * input); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "squares";
        
    };
    container.style.gridTemplateColumns = `repeat(${input}, auto)`;
    container.style.gridTemplateRows = `repeat(${input}, auto)`;
};

// function gets exectuted, only if a number and below 101
let numberCheck = function numberCheck() {
    
    if ((n % n) === 0 && n <= 100) {
    makeGrid(n);
};

    while ((n % n) !== 0) {
        alert("Please enter a number.");
        n = prompt("Choose again.");
        if ((n % n) === 0 && n <= 100) {
            makeGrid(n);
        }
    };

    while ((n % n) === 0 && n > 100) {
        alert("The number is too high.");
        n = prompt("Choose again.");
        if ((n % n) === 0 && n <= 100) {
            makeGrid(n);
        }
        else if ((n % n) !== 0) {
            alert("Please enter a number");
            n = prompt("Choose again");
                if ((n % n) === 0 && n <= 100) {
                    makeGrid(n);
                }
        }
    };
    
};

// default grid on first pageload
makeGrid(16);

// this function sets the hovered items colour to black on default / first pageload
let blackColor = function blackColor(event) {
    let colour = event.target;
    if (colour.className === "container") {
        return;
    }
    else if (colour.className === "squares") {
        colour.style.backgroundColor = "black";
    };
};

// addEventListener for blackColor function
let hoverItems = document.querySelectorAll(".container");
    hoverItems.forEach(element => { element.addEventListener("mouseover", blackColor)
});



// function to manual selecting a grid-size. Beforehand, old grid gets deleted
let removeElements = function removeElements(event) {
    let elements = document.getElementsByClassName("squares");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    };
    n = prompt("Choose the size of your grid");
    numberCheck(n);
};

// button for selecting a grid-size manually
let button = document.querySelector("#button");
button.addEventListener("click", removeElements);


// this function sets the background-color of the cells on mouseover to gray
let grayColour = function grayColour(event) {
        let colour = event.target;
        if (colour.className === "container") {
        return;
    }
    else if (colour.className === "squares") {
        colour.style.backgroundColor = "gray"

    }
}
// this function sets the background-color of the cells on mouseover to yellow
let yellowColour = function yellowColour(event) {
    let colour = event.target;
    if (colour.className === "container") {
        return;
    }
    else if (colour.className === "squares") {
    colour.style.backgroundColor = "yellow";

}
}


let colourHover = function colourHover(event) {
    let hover = document.querySelectorAll(".container");
    switch (event.target.id) {
        case "gray":
            hover.forEach(element => { element.removeEventListener("mouseover", yellowColour)
            });
            hover.forEach(element => { element.removeEventListener("mouseover", grayColour)
            });
            hover.forEach(element => { element.addEventListener("mouseover", grayColour)
        });
        break;
        case "yellow":
        hover.forEach(element => { element.removeEventListener("mouseover", yellowColour)
            });
            hover.forEach(element => { element.removeEventListener("mouseover", grayColour)
            });
        hover.forEach(element => { element.addEventListener("mouseover", yellowColour)
        });
        break;
};
};

let colourBtn = document.querySelectorAll(".button");
colourBtn.forEach(element => { element.addEventListener("click", colourHover)
});