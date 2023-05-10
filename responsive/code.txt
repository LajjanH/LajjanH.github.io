const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function showNotification() {
  if (localStorage.getItem("CODE")) {
    if (isMobile) {
      // show mobile notification
      if ('Notification' in window) {
        Notification.requestPermission().then(function(result) {
          if (result === 'granted') {
            var notification = new Notification('CODE', {
              body: '6312',
            });
          }
        });
      }
    } else {
      // show alert
      alert('CODE: 6312');
    }
  }
}

window.onload = function() {
  showNotification();
};

const upButtons = document.querySelectorAll("#buttons button[id^='up']");
const downButtons = document.querySelectorAll("#buttons button[id^='down']");
const lines = document.querySelectorAll("#combination div");
const correctCombination = [8, 2, 9, 4];
let enteredCombination = [0, 0, 0, 0];

function checkCombination() {
  if (enteredCombination.toString() === correctCombination.toString()) {
    localStorage.setItem("CODE", "true");
    showNotification();
  } else {
    localStorage.removeItem("CODE");
  }
}

upButtons.forEach(button => {
  button.addEventListener("click", event => {
    const lineId = event.target.id.slice(-1);
    enteredCombination[lineId - 1] = (enteredCombination[lineId - 1] + 1) % 10;
    lines[lineId - 1].textContent = enteredCombination[lineId - 1];
    checkCombination();
  });
});

downButtons.forEach(button => {
  button.addEventListener("click", event => {
    const lineId = event.target.id.slice(-1);
    enteredCombination[lineId - 1] = (enteredCombination[lineId - 1] - 1 + 10) % 10;
    lines[lineId - 1].textContent = enteredCombination[lineId - 1];
    checkCombination();
  });
});
