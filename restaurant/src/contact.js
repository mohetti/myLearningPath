// On this site you see open and closing times, aswell as a reservation formula

let contactContent = (function contactContent(hide1, hide2, display, content) {
    hide1.style.display = "none";
    hide2.style.display = "none";
    
    let alreadyBuilt = document.getElementById("form-title");

    if (alreadyBuilt) {
        display.style.display = "flex";
    } else {
        display.style.display = "flex";

        content.appendChild(display);

        let formContainer = document.createElement("div");
        formContainer.classList.add("form-container");
        display.appendChild(formContainer);
    
        let form = document.createElement("div");
        form.classList.add("form");
        formContainer.appendChild(form);

        let title = document.createElement("h2");
        title.id = "form-title";
        title.innerText = "Make a Reservation";
        form.appendChild(title);

        let fields = ["Your Name", "Desired Date", "Desired Time", "Your E-Mail"];

        for (let i = 0; i < 4; i++) {
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = fields[i];
            form.appendChild(input);
        }

        let formBtn = document.createElement("button");
        formBtn.id = "form-button";
        formBtn.innerText = "Submit reservation";
        form.appendChild(formBtn);
    }
});

export {contactContent};