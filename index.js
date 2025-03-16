const menuIcon = document.getElementById("bar_icon");
const menu = document.getElementById("menu-icon");

menuIcon?.addEventListener("click",()=> {
    if(menu.className == "hidden"){
        menu.classList.remove("hidden");
    }
    else if(menu.className != "hidden"){
        menu.classList.add("hidden");
    }
});