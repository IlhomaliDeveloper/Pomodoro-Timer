let timeLeft = 1500; // 25 minutes in seconds
let timer;

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      displayTime(timeLeft);
    } else {
      clearInterval(timer);
      alert('Pomodoro session finished!');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  document.getElementById('time').textContent = display;
}



function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
  }
  
  function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
  }
  
  // Add this event listener to close the settings window when the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById('settingsModal')) {
      document.getElementById('settingsModal').style.display = 'none';
    }
  }
  

  function saveSettings() {
    const focusTime = parseInt(document.getElementById('focusTime').value) * 60;
    // const restTime = parseInt(document.getElementById('restTime').value) * 60;
    // const longRestTime = parseInt(document.getElementById('longRestTime').value) * 60;
    updateTimer(focusTime); // Update the timer with the new focus time
    document.getElementById('settingsModal').style.display = 'none';
  }
  
  function updateTimer(seconds) {
    timeLeft = seconds;
    displayTime(timeLeft);
  }

  // 
// function displayTime(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   document.getElementById('time').textContent = display;

//   const percentage = (seconds / 1500) * 100; // Calculate the percentage of time remaining
//   document.querySelector('.circle::after').style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`; // Update the clip-path property
// }


function startTimer() {
  timer = setInterval(() => {
    if (timeLeft) {
      if (timeLeft > 0) {
        timeLeft--;
        displayTime(timeLeft);
      } else {
        clearInterval(timer);
        alert('Pomodoro session finished!');
      }
    } else {
      console.log("Nimadir kirit naxxuy")
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timeLeft = 1500; // Reset the time left to 25 minutes
  displayTime(timeLeft); // Update the displayed time
}

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  document.querySelector('.time-left').textContent = display;
}

displayTime(timeLeft);