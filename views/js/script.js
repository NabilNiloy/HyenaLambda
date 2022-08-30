const   body = document.querySelector("body"),
        modeToggle = document.querySelector(".mode-toggle");
        sidebar = document.querySelector("nav");
        sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark") {
    body.classList.toggle("dark");
}


modeToggle.addEventListener("click", ()=> {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    } else{
        localStorage.setItem("mode", "light");
    }
})

sidebarToggle.addEventListener("click", ()=> {
    sidebar.classList.toggle("close");
})


