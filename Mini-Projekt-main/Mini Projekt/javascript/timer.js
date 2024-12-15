const timeNamber = document.querySelector('.timer_namber')
const buttonStart = document.querySelector('.button_start')
const buttonStop = document.querySelector('.button_stop')
const buttonClose = document.querySelector('.button_close')

let seconds = 0;
let work = null;

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const min = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

function updateTimer() {
    timeNamber.textContent = formatTime(seconds);
  }


  buttonStart.addEventListener("click", () => {
    if (work) return; 
    work = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000); //
});

buttonStop.addEventListener("click", () => {
    clearInterval(work);
    work = null;
});

buttonClose.addEventListener("click", () => {
    clearInterval(work);
    work = null;
    seconds = 0;
    updateTimer();
  });
  
  // Inicjalizacja
  updateTimer();