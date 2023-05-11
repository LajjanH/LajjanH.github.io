window.onload = function() {
  const rows = document.querySelectorAll(".row__1");
  if (localStorage.getItem("DUSK")) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].style.opacity = "1";
    }
  }
};

const inputCipher = document.getElementById("input__cipher");
const BtnAnswer = document.getElementById("Btn__answer");
const rows = document.querySelectorAll(".row__1");

BtnAnswer.addEventListener("click", () => {
  if (inputCipher.value.toUpperCase() === "DUSK") {
    for (let i = 0; i < rows.length; i++) {
      rows[i].style.opacity = "1";
    }
    localStorage.setItem("DUSK", "true");
  } else {
    localStorage.removeItem("DUSK");
    for (let i = 0; i < rows.length; i++) {
      rows[i].style.opacity = "0";
    }
  }
});
