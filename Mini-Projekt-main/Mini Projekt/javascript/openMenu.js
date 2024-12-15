const menu = document.querySelector("#menu");
const menuContainer = document.querySelector("#menuContainer");
const menuClose = document.querySelector("#menu--close");

const openMenu = () => {
    menuContainer.style.display = "block";
  };

const closeMenu = () => {
    menuContainer.style.display = "none";
  };
  
menu.addEventListener("click", () => {
    openMenu();
  });
  
menuClose.addEventListener("click", () => {
    closeMenu();
  });
  