const homeBtn = document.getElementsByClassName("home-btn")[0];
const workBtn = document.getElementsByClassName("work-btn")[0];
const homeGrid = document.getElementsByClassName("home-grid")[0];
const workGrid = document.getElementsByClassName("work-grid")[0];

homeBtn.addEventListener("click", () => {
    console.log("Home btn clicked !");
    console.log(homeBtn, workBtn, homeGrid, workGrid);

    // toggle active grid
    workGrid.classList.remove("active-hw-grid");
    homeGrid.classList.add("active-hw-grid");

    // toggle active btn
    workBtn.classList.remove("active-btn");
    homeBtn.classList.add("active-btn");
});

workBtn.addEventListener("click", () => {
    console.log("Work btn clicked !");
    console.log(homeBtn, workBtn, homeGrid, workGrid);

    // toggle active grid
    homeGrid.classList.remove("active-hw-grid");
    workGrid.classList.add("active-hw-grid");

    // toggle active btn
    homeBtn.classList.remove("active-btn");
    workBtn.classList.add("active-btn");
});
