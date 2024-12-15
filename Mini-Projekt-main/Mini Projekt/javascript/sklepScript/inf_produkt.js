let cena = null;

const cenyProduktow = {
    produkt1: 50,
    produkt2: 60,
    produkt3: 70,
    produkt4: 80,
    produkt5: 90,
    produkt6: 100
}



const produkt = document.querySelectorAll(".produkt");
const infMenu = document.querySelector(".inf_produkt");
const button_close = document.querySelector(".shope_button_close");
const button_buy = document.querySelector(".shope_button_buy");
const cenaElement = document.getElementById("cena");


const openInfmenu = (event) => {
    const clickedId = event.currentTarget.id;
    cena = cenyProduktow[clickedId] || "Brak ceny";
    cenaElement.textContent = `Cena: ${cena} zł Model | Banan z Biedry `;
    infMenu.style.display = "block";
};

const closeInfmenu = () => {
    infMenu.style.display = "none";
};

produkt.forEach((produkt) =>{
    produkt.addEventListener("click", openInfmenu)
})





button_close.addEventListener("click", () => {
    closeInfmenu();
});

button_buy.addEventListener("click", () => {
    closeInfmenu();
});


  