// -------- MENÚ -------------

function openMenu() {
    "use strict";
    document.getElementById("menu").firstElementChild.children[1].style.left = "0";
  }
  
  function closeMenu() {
    "use strict";
    document.getElementById("menu").firstElementChild.children[1].style.left = "-100%";
  }
  
  function menu() {
    "use strict";
    if (document.getElementById("menu").lastElementChild.style.left === "0") {
        closeMenu();
    } else {
        openMenu();
    }
  }