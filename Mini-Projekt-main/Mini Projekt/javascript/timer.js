const timeNamber = document.querySelector('.timer_namber')
const buttonStart = document.querySelector('.button_start')
const buttonStop = document.querySelector('.button_stop')
const buttonClose = document.querySelector('.button_close')

let seconds = 0;
let work = null;

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

function updateTimer() {
    timeNamber.textContent = formatTime(seconds);
  }


  buttonStart.addEventListener("click", () => {
    if (work) return; // Jeśli stoper już działa, nie rób nic
    work = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000); // Aktualizacja co 1 sekundę
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