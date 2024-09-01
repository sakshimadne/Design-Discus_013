const lightModeBtn = document.getElementsByClassName("light-mode-btn")[0];
const darkModeBtn = document.getElementsByClassName("dark-mode-btn")[0];

const body = document.body;

lightModeBtn.addEventListener("click", (e) => {
    // toggle button ----------
    lightModeBtn.classList.remove("active-mode-btn");
    darkModeBtn.classList.add("active-mode-btn");

    // add dark-mode ----------
    body.classList.add("dark-mode-colors");
});

darkModeBtn.addEventListener("click", (e) => {
    darkModeBtn.classList.remove("active-mode-btn");
    lightModeBtn.classList.add("active-mode-btn");

    // remove dark-mode -----------
    body.classList.remove("dark-mode-colors");
});
