const codeAnswer = document.getElementById("codeAnswer");

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function showNotification() {
  if (localStorage.getItem("CODE")) {
    codeAnswer.classList.remove("hid");
    if (isMobile) {
      // show mobile notification
      if ("Notification" in window) {
        Notification.requestPermission().then(function (result) {
          if (result === "granted") {
            var notification = new Notification("CODE", {
              body: "6312",
            });
          }
        });
      }
    } else {
      // show alert
      alert("CODE: 6312");
      codeAnswer.classList.remove("hid");
    }
  }
}

window.onload = function () {
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
    codeAnswer.classList.remove("hid");
    if ("vibrate" in navigator) {
      function vibratePattern() {
        navigator.vibrate([300, 100, 300, 100, 300]);
      }
      vibratePattern(); // call vibratePattern() function
    }
  } else {
    localStorage.removeItem("CODE");
    if ("vibrate" in navigator) {
      function vibrate() {
        navigator.vibrate([1000]);
      }
      vibrate(); // call vibrate() function
    }
  }
}

upButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const lineId = event.target.id.slice(-1);
    enteredCombination[lineId - 1] = (enteredCombination[lineId - 1] + 1) % 10;
    lines[lineId - 1].textContent = enteredCombination[lineId - 1];
    checkCombination();
  });
});

downButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const lineId = event.target.id.slice(-1);
    enteredCombination[lineId - 1] =
      (enteredCombination[lineId - 1] - 1 + 10) % 10;
    lines[lineId - 1].textContent = enteredCombination[lineId - 1];
    checkCombination();
  });
});
