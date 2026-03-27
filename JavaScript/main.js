let menuButton = document.getElementById("menuButton");
let menuLinks = document.getElementById("menuLinks");
let accountButton = document.querySelector(".account-btn");
let accountDropdown = document.querySelector(".dropdown");

if (menuButton && menuLinks) {
    menuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        menuLinks.classList.toggle("showMenu");
        if (accountDropdown) {
            accountDropdown.classList.remove("showDropdown");
        }
    });
}

if (accountButton && accountDropdown) {
    accountButton.addEventListener("click", (event) => {
        event.stopPropagation();
        accountDropdown.classList.toggle("showDropdown");
        if (menuLinks) {
            menuLinks.classList.remove("showMenu");
        }
    });
}

document.addEventListener("click", (event) => {
    if (accountDropdown && !event.target.closest(".account")) {
        accountDropdown.classList.remove("showDropdown");
    }

    if (menuLinks && !event.target.closest("#menu")) {
        menuLinks.classList.remove("showMenu");
    }
});

let passwords = document.querySelectorAll(".passwords");

for (let i = 0; i < passwords.length; i++) {
    let span = passwords[i].querySelector(".password-toggle-icon");
    let input = passwords[i].querySelector("input");
    if (!span || !input) {
        continue;
    }
    span.onclick = function () {
        if (input.type === "password") {
            input.type = "text";
            span.classList.remove("fa-eye");
            span.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            span.classList.remove("fa-eye-slash");
            span.classList.add("fa-eye");
        }
    };
}
