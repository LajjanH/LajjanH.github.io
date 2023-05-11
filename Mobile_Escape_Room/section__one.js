if (localStorage.getItem("count_timer")) {
  var count_timer = localStorage.getItem("count_timer");
} else {
  var count_timer = -2;
}

if (localStorage.getItem("count_timer1")) {
  var count_timer1 = localStorage.getItem("count_timer1");
} else {
  var count_timer1 = 0;
}

if (localStorage.getItem("count_timer2")) {
  var count_timer2 = localStorage.getItem("count_timer2");
} else {
  var count_timer2 = -60 * 7.5;
}

if (localStorage.getItem("count_timer3")) {
  var count_timer3 = localStorage.getItem("count_timer3");
} else {
  var count_timer3 = -60 * 15;
}

if (localStorage.getItem("count_timer4")) {
  var count_timer4 = localStorage.getItem("count_timer4");
} else {
  var count_timer4 = -60 * 22.5;
}

function countDownTimer() {
  var progressBar = document.getElementById("progress-bar");
  var progressBar1 = document.getElementById("progress-bar__1");
  var progressBar2 = document.getElementById("progress-bar__2");
  var progressBar3 = document.getElementById("progress-bar__3");

  var timeLeft = count_timer1 / (60 * 30); // Calculate time left as a percentage
  progressBar.style.height = 100 - timeLeft * 400 + "%"; // Set height of progress bar
  timeLeft__2 = count_timer2 / (60 * 30);
  progressBar1.style.width = 100 - timeLeft__2 * 400 + "%";
  timeLeft__3 = count_timer3 / (60 * 30);
  progressBar2.style.height = 100 - timeLeft__3 * 400 + "%";
  timeLeft__4 = count_timer4 / (60 * 30);
  progressBar3.style.width = 100 - timeLeft__4 * 400 + "%";

  if (count_timer >= 60 * 7.5) {
    progressBar.style.width = "0%";
  }

  if (count_timer >= 60 * 15) {
    progressBar.style.width = "0%";
    progressBar1.style.height = "0%";
  }

  if (count_timer1 >= 60 * 15 + 1) {
    progressBar2.classList.remove("green");
    progressBar3.classList.remove("green");
    progressBar1.classList.remove("green");
    progressBar.classList.remove("green");
    progressBar.classList.add("yellow");
    progressBar1.classList.add("yellow");
    progressBar2.classList.add("yellow");
    progressBar3.classList.add("yellow");
  }

  if (count_timer >= 60 * 22.5) {
    progressBar.style.width = "0%";
    progressBar1.style.height = "0%";
    progressBar2.style.width = "0%";
  }

  if (count_timer1 >= 60 * 22.5 + 1) {
    progressBar2.classList.remove("yellow");
    progressBar3.classList.remove("yellow");
    progressBar1.classList.remove("yellow");
    progressBar.classList.remove("yellow");
    progressBar.classList.add("red");
    progressBar1.classList.add("red");
    progressBar2.classList.add("red");
    progressBar3.classList.add("red");
  }

  if (count_timer1 >= 60 * 30) {
    localStorage.clear("count_timer");
    localStorage.clear("count_timer1");
    localStorage.clear("count_timer2");
    localStorage.clear("count_timer3");
    localStorage.clear("count_timer4");
    localStorage.removeItem("notes");
    localStorage.removeItem("CODE");
    localStorage.removeItem("DUSK");
    localStorage.clear("rotationAngle1");
    localStorage.clear("rotationAngle2");
    localStorage.clear("rotationAngle3");
    localStorage.clear("rotationAngle4");
    window.location.href = "lose.html";
  } else {
    count_timer++;
    count_timer1++;
    count_timer2++;
    count_timer3++;
    count_timer4++;
    localStorage.setItem("count_timer", count_timer);
    localStorage.setItem("count_timer1", count_timer1);
    localStorage.setItem("count_timer2", count_timer2);
    localStorage.setItem("count_timer3", count_timer3);
    localStorage.setItem("count_timer4", count_timer4);
    setTimeout(countDownTimer, 1000);
  }
}

setTimeout(countDownTimer, 1000);

// Section 1 //
const indexBtn = document.getElementById("index__btn");
const colorBtn1 = document.getElementsByClassName("button__1")[0];
const colorBtn2 = document.getElementsByClassName("button__2")[0];
const colorBtn3 = document.getElementsByClassName("button__3")[0];
const colorBtn4 = document.getElementsByClassName("button__4")[0];
const svgText = document.getElementById("svg__text");
const svgText1 = document.getElementById("svg__text__1");
const svgText2 = document.getElementById("svg__text__2");
const svgText3 = document.getElementById("svg__text__3");
const answer = document.getElementsByClassName("textcircle")[0];
const answer1 = document.getElementsByClassName("textcircle__1")[0];
const answer2 = document.getElementsByClassName("textcircle__2")[0];
const answer3 = document.getElementsByClassName("textcircle__3")[0];
const indexSvg = document.querySelector(".svg");
const indexSvg1 = document.querySelector(".svg__1");
const indexSvg2 = document.querySelector(".svg__2");
const indexSvg3 = document.querySelector(".svg__3");
indexSvg.style.zIndex = "3"; // 2 biggest //
indexSvg1.style.zIndex = "3"; // 3 biggest //
indexSvg2.style.zIndex = "3"; // 4 biggest //
indexSvg3.style.zIndex = "4"; // biggest //
indexBtn.classList.add("colorBtn1");

let rotationAngle1;
let rotationAngle2;
let rotationAngle3;
let rotationAngle4;
let currentX = 0,
  currentY = 0;

window.onload = function () {
  if (localStorage.getItem("rotationAngle1")) {
    rotationAngle1 = parseInt(localStorage.getItem("rotationAngle1"));
    answer.style.transform = `rotate(${rotationAngle1}deg)`;
  } else {
    rotationAngle1 = 0;
  }

  if (localStorage.getItem("rotationAngle2")) {
    rotationAngle2 = parseInt(localStorage.getItem("rotationAngle2"));
    answer1.style.transform = `rotate(${rotationAngle2}deg)`;
  } else {
    rotationAngle2 = 0;
  }

  if (localStorage.getItem("rotationAngle3")) {
    rotationAngle3 = parseInt(localStorage.getItem("rotationAngle3"));
    answer2.style.transform = `rotate(${rotationAngle3}deg)`;
  } else {
    rotationAngle3 = 0;
  }

  if (localStorage.getItem("rotationAngle4")) {
    rotationAngle4 = parseInt(localStorage.getItem("rotationAngle4"));
    answer3.style.transform = `rotate(${rotationAngle4}deg)`;
  } else {
    rotationAngle4 = 0;
  }
};

indexBtn.addEventListener("click", () => {
  if (
    indexBtn.classList.contains("colorBtn1") &&
    indexSvg.style.zIndex === "4"
  ) {
    indexBtn.classList.remove("colorBtn1");
    indexBtn.classList.add("colorBtn2");
  }

  if (
    indexBtn.classList.contains("colorBtn2") &&
    indexSvg1.style.zIndex === "4"
  ) {
    indexBtn.classList.remove("colorBtn2");
    indexBtn.classList.add("colorBtn3");
  }

  if (
    indexBtn.classList.contains("colorBtn3") &&
    indexSvg2.style.zIndex === "4"
  ) {
    indexBtn.classList.remove("colorBtn3");
    indexBtn.classList.add("colorBtn4");
  }

  if (
    indexBtn.classList.contains("colorBtn4") &&
    indexSvg3.style.zIndex === "4"
  ) {
    indexBtn.classList.remove("colorBtn4");
    indexBtn.classList.add("colorBtn1");
  }

  if (indexBtn.classList.contains("colorBtn1")) {
    indexSvg3.style.zIndex = "2";
    indexSvg.style.zIndex = "4";
    console.log("1");
  }

  if (indexBtn.classList.contains("colorBtn2")) {
    indexSvg.style.zIndex = "2";
    indexSvg1.style.zIndex = "4";
    console.log("2");
  }

  if (indexBtn.classList.contains("colorBtn3")) {
    indexSvg1.style.zIndex = "2";
    indexSvg2.style.zIndex = "4";
    console.log("3");
  }

  if (indexBtn.classList.contains("colorBtn4")) {
    indexSvg2.style.zIndex = "2";
    indexSvg3.style.zIndex = "4";
    console.log("4");
  }
});

svgText.addEventListener("touchstart", (e) => {
  prevTouchX = e.touches[0].clientX;
  prevTouchY = e.touches[0].clientY;
});

svgText.addEventListener("touchmove", (e) => {
  const deltaTouchX = e.touches[0].clientX - prevTouchX;
  const deltaTouchY = e.touches[0].clientY - prevTouchY;
  currentY -= deltaTouchY / 100;
  currentX += deltaTouchX / 100;
  rotationAngle1 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer.style.transform = `rotate(${rotationAngle1}deg)`;
  prevTouchX = e.touches[0].clientX;
  localStorage.setItem("rotationAngle1", rotationAngle1.toString());
});

svgText1.addEventListener("touchstart", (e) => {
  prevTouchX = e.touches[0].clientX;
  prevTouchY = e.touches[0].clientY;
});

svgText1.addEventListener("touchmove", (e) => {
  const deltaTouchX = e.touches[0].clientX - prevTouchX;
  const deltaTouchY = e.touches[0].clientY - prevTouchY;
  currentY -= deltaTouchY / 100;
  currentX += deltaTouchX / 100;
  rotationAngle2 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer1.style.transform = `rotate(${rotationAngle2}deg)`;
  prevTouchX = e.touches[0].clientX;
  localStorage.setItem("rotationAngle2", rotationAngle2.toString());
});

svgText2.addEventListener("touchstart", (e) => {
  prevTouchX = e.touches[0].clientX;
  prevTouchY = e.touches[0].clientY;
});

svgText2.addEventListener("touchmove", (e) => {
  const deltaTouchX = e.touches[0].clientX - prevTouchX;
  const deltaTouchY = e.touches[0].clientY - prevTouchY;
  currentY -= deltaTouchY / 100;
  currentX += deltaTouchX / 100;
  rotationAngle3 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer2.style.transform = `rotate(${rotationAngle3}deg)`;
  prevTouchX = e.touches[0].clientX;
  localStorage.setItem("rotationAngle3", rotationAngle3.toString());
});

svgText3.addEventListener("touchstart", (e) => {
  prevTouchX = e.touches[0].clientX;
  prevTouchY = e.touches[0].clientY;
});

svgText3.addEventListener("touchmove", (e) => {
  const deltaTouchX = e.touches[0].clientX - prevTouchX;
  const deltaTouchY = e.touches[0].clientY - prevTouchY;
  currentY -= deltaTouchY / 100;
  currentX += deltaTouchX / 100;
  rotationAngle4 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer3.style.transform = `rotate(${rotationAngle4}deg)`;
  prevTouchX = e.touches[0].clientX;
  localStorage.setItem("rotationAngle4", rotationAngle4.toString());
});
// Same but for desktop //

svgText.addEventListener("mousedown", (e) => {
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});

document.addEventListener("mouseup", (e) => {});

svgText.addEventListener("mousemove", (e) => {
  const deltaMouseX = e.clientX - prevMouseX;
  const deltaMouseY = e.clientY - prevMouseY;
  currentY -= deltaMouseY / 100;
  currentX += deltaMouseX / 100;
  rotationAngle1 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer.style.transform = `rotate(${rotationAngle1}deg)`;
  prevTouchX = e.clientX;
  localStorage.setItem("rotationAngle1", rotationAngle1.toString());
});

svgText1.addEventListener("mousedown", (e) => {
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});

svgText1.addEventListener("mousemove", (e) => {
  const deltaMouseX = e.clientX - prevMouseX;
  const deltaMouseY = e.clientY - prevMouseY;
  currentY -= deltaMouseY / 100;
  currentX += deltaMouseX / 100;
  rotationAngle2 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer1.style.transform = `rotate(${rotationAngle2}deg)`;
  prevTouchX = e.clientX;
  localStorage.setItem("rotationAngle2", rotationAngle2.toString());
});

svgText2.addEventListener("mousedown", (e) => {
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});

svgText2.addEventListener("mousemove", (e) => {
  const deltaMouseX = e.clientX - prevMouseX;
  const deltaMouseY = e.clientY - prevMouseY;
  currentY -= deltaMouseY / 100;
  currentX += deltaMouseX / 100;
  rotationAngle3 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer2.style.transform = `rotate(${rotationAngle3}deg)`;
  prevTouchX = e.clientX;
  localStorage.setItem("rotationAngle3", rotationAngle3.toString());
});

svgText3.addEventListener("mousedown", (e) => {
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});

svgText3.addEventListener("mousemove", (e) => {
  const deltaMouseX = e.clientX - prevMouseX;
  const deltaMouseY = e.clientY - prevMouseY;
  currentY -= deltaMouseY / 100;
  currentX += deltaMouseX / 100;
  rotationAngle4 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer3.style.transform = `rotate(${rotationAngle4}deg)`;
  prevTouchX = e.clientX;
  localStorage.setItem("rotationAngle4", rotationAngle4.toString());
});

svgText3.addEventListener("touchstart", (e) => {
  prevTouchX = e.touches[0].clientX;
  prevTouchY = e.touches[0].clientY;
});

svgText3.addEventListener("touchmove", (e) => {
  const deltaTouchX = e.touches[0].clientX - prevTouchX;
  const deltaTouchY = e.touches[0].clientY - prevTouchY;
  currentY -= deltaTouchY / 100;
  currentX += deltaTouchX / 100;
  rotationAngle4 = "rotateX(" + currentX + "deg) rotateY(" + currentY + "deg)";
  answer3.style.transform = `rotate(${rotationAngle4}deg)`;
  prevTouchX = e.touches[0].clientX;
  localStorage.setItem("rotationAngle4", rotationAngle4.toString());
});
