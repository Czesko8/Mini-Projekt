const basketButtonOpen = document.querySelector(".basket_button_open");
const menuContainerBasket = document.querySelector(".basket_list_main");
const basketButtonClose = document.querySelector(".basket_button_close");

const BasketopenMenu = () => {
    menuContainerBasket.style.display = "block";
  };

const BasketcloseMenu = () => {
    menuContainerBasket.style.display = "none";
  };
  
basketButtonOpen.addEventListener("click", () => {
    BasketopenMenu();
  });
  
basketButtonClose.addEventListener("click", () => {
    BasketcloseMenu();
  });
  
