const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

document.body.className = mode;

toggle.addEventListener("click", ()=>{
    const currentMode = localStorage.getItem("mode") === "light" ? "" : "light";
    localStorage.setItem("mode", currentMode);
    body.className = currentMode;
});

// const mode = localStorage.getItem("mode") || "";
// const toggle = document.querySelector(".toggle");
// const body = document.querySelector("body");

// document.body.className = mode;

// toggle.addEventListener("click", ()=>{
//     localStorage.setItem("mode", mode === "light" ? "" : "light")
//     body.classList.toggle("light")
// })