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
  