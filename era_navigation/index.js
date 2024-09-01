const slider = document.getElementById("slider");

const links = document.querySelectorAll(".link");
const eraBtns = document.querySelectorAll(".era-btn");
const eraImgLinks = document.querySelectorAll(".era-img-link");

// Event listener of page reload ------------------
document.addEventListener("DOMContentLoaded", function () {
    console.log("slider val = ", slider.value);

    slider.value = 0;

    // Initialize links/images/buttons based on slider position
    updateLinks(slider.value);
    updateEraBtns(slider.value);
    updateEraImgLink(slider.value);
});

// Event listener for slider changes ---------------------
slider.addEventListener("input", function () {
    updateLinks(this.value);
    updateEraBtns(this.value);
    updateEraImgLink(this.value);
});

// Function to update active link (w.r.t. slider value)
function updateLinks(position) {
    links.forEach((link, index) => {
        link.classList.remove("active"); // Deactivate all links
        if (index == position) {
            link.classList.add("active"); // Activate the current link
        }
    });
}

// Function to update active era-btn (w.r.t. slider value)
function updateEraBtns(position) {
    eraBtns.forEach((eraBtn, index) => {
        eraBtn.classList.remove("active-btn");
        if (index == position) {
            eraBtn.classList.add("active-btn");
        }
    });
}

// Function to update active era-img-link (w.r.t. slider value)
function updateEraImgLink(position) {
    eraImgLinks.forEach((eraImgLink, index) => {
        eraImgLink.classList.remove("active-era-img-link");
        if (index == position) {
            eraImgLink.classList.add("active-era-img-link");
        }
    });
}
