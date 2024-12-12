const menyClick = document.querySelector('.photo_cliker')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')

let click = 0

function getClick(){
    click++
}

menyClick.addEventListener('click',() =>{
    getClick()
    result.textContent = click
})

reset.addEventListener('click',()=>{
    click = 0 
    result.textContent = click
})