let menu_icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".nav-links-container");

console.log(menu);
console.log(menu_icon);

menu_icon.addEventListener("click", function() {
    console.log(menu.style.display);
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
        console.log("reveal");
    }

    else{
        menu.style.display = 'none';
        console.log("hide");
    }
});