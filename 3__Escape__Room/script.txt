window.addEventListener('wheel', function(e) {
  const scrollStep = 2000;
  let scrollAmount = 0;

  if (e.deltaY < 0) {
    scrollAmount = -scrollStep;
  } else {
    scrollAmount = scrollStep;
  }

  const currentPosition = window.scrollX;
  const targetPosition = currentPosition + scrollAmount;

  window.scrollTo({
    left: targetPosition,
    behavior: "smooth"

});
});



const openButton = document.getElementById("Notebook");
const textBox = document.getElementById("comment_text");


openButton.addEventListener("click", () => {
  if (textBox.style.display === "block") {
    textBox.style.display = "none";
  } else {
    textBox.style.display = "block";
  }
});





const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
     } else {
         entry.target.classList.remove('show');
     }



  });

})
;


const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



var x = document.getElementById("myAudio");
var x1 = document.getElementById("myAudio1");
var x2 = document.getElementById("myAudio2");
var x3 = document.getElementById("myAudio3");
var x4 = document.getElementById("myAudio4");
var x5 = document.getElementById("myAudio5");
const hide = document.querySelectorAll("hide");

  function playAudio() { 
  var playBtn = document.getElementById("playBtn"); 
    x.play();
    playBtn.classList.add("hide"); 
      var section1 = document.querySelector('#section__1');
  section1.scrollIntoView({ behavior: 'smooth' });  
  } 



const semicircle = document.querySelectorAll('.semicircle');
const cirlceContainer = document.getElementById("cirlce-container");


if(localStorage.getItem("count_timer1")){
    var count_timer1 = localStorage.getItem("count_timer1");
} else {
    var count_timer1 = 60*60;
}


var minutes = parseInt(count_timer1/60);
var seconds = parseInt(count_timer1%60);
function countDownTimer() {
  minutes = parseInt(count_timer1 / 60);
  seconds = count_timer1 % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  document.getElementById("total-time-left").innerHTML = " " + minutes + ":" + seconds;
  if (count_timer1 <= 0) {
    semicircle[2].style.display = 'none';
    semicircle[0].style.display = 'none';
    semicircle[1].style.display = 'none';
    localStorage.clear("count_timer1");

        const answerBtn3 = document.getElementById('answerBtn--3');
const answer3 = document.querySelector('#answer3');
const riddleOne = document.querySelector('.riddle--1')
const riddleTwo = document.querySelector('.riddle--2')
const riddleThree = document.querySelector('.riddle--3')
    answerBtn3.classList.add('hidden--2');
    riddleOne.classList.add('hidden--2');
    riddleTwo.classList.add('hidden--2');
    riddleThree.classList.add('hidden--2');
    answer3.classList.add('hidden--2');
    const neonText2 = document.querySelector('.neonText2');
    neonText2.classList.remove("hidden--2");
    const section5 = document.querySelector('#section__5');
    section5.scrollIntoView({ behavior: 'smooth' });

    hid = document.querySelector('.hid--3');
    hid.style.visibility = 'visible';

  } else {
    count_timer1--;
    localStorage.setItem("count_timer1", count_timer1);
    setTimeout(countDownTimer, 1000);
  }
}





const starTime = Date.now();
const futureTime = starTime + count_timer1;
const currentTime = Date.now();
const remainingTime = futureTime - currentTime;
const angle = (count_timer1)/(60*60) * 360;

if(angle > 180){
  semicircle[2].style.display = 'none';
  semicircle[0].style.transform = `rotate(180deg)`;
  semicircle[1].style.transform = `rotate(${angle}deg)`;
  cirlceContainer.classList.remove('r');
  cirlceContainer.classList.remove('y');

} else {
  semicircle[2].style.display = 'block';
  semicircle[0].style.transform = `rotate(${angle}deg)`;
  semicircle[1].style.transform = `rotate(${angle}deg)`;
}


if(angle < 180) {  
  semicircle[0].style.backgroundColor = "#FFF01F";
  semicircle[1].style.backgroundColor = "#FFF01F"; 
  cirlceContainer.classList.remove('circle-container');
  cirlceContainer.classList.add('y');

} 

if(angle < 90){
  semicircle[0].style.backgroundColor = "#FF3131";
  semicircle[1].style.backgroundColor = "#FF3131";
  cirlceContainer.classList.remove('y') ;
  cirlceContainer.classList.add('r');

}



setTimeout("countDownTimer()",1000);



var timeBtn = document.getElementById("time__btn");

timeBtn.addEventListener("click", function() {
if (count_timer1 <= 0) {
    count_timer1 = 0;
    semicircle[2].style.display = 'none';
    semicircle[0].style.display = 'none';
    semicircle[1].style.display = 'none';
    localStorage.clear("count_timer1");


    const answerBtn3 = document.getElementById('answerBtn--3');
const answer3 = document.querySelector('#answer3');
const riddleOne = document.querySelector('.riddle--1')
const riddleTwo = document.querySelector('.riddle--2')
const riddleThree = document.querySelector('.riddle--3')
    answerBtn3.classList.add('hidden--2');
    riddleOne.classList.add('hidden--2');
    riddleTwo.classList.add('hidden--2');
    riddleThree.classList.add('hidden--2');
    answer3.classList.add('hidden--2');
        const neonText2 = document.querySelector('.neonText2');
    neonText2.classList.remove("hidden--2");
    const section5 = document.querySelector('#section__5');
    section5.scrollIntoView({ behavior: 'smooth' });

    hid = document.querySelector('.hid--3');
    hid.style.visibility = 'visible';

} else {
  count_timer1 = count_timer1 -300; // subtract 5 minutes (300 seconds)
  }

  minutes = parseInt(count_timer1 / 60);
  seconds = parseInt(count_timer1 % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
        localStorage.setItem("count_timer1",count_timer1); 
 document.getElementById("total-time-left").innerHTML = " " + minutes + ":" + seconds;

const starTime = Date.now();
const futureTime = starTime + count_timer1;
const currentTime = Date.now();
const remainingTime = futureTime - currentTime;
const angle = (count_timer1)/(60*60) * 360;


if(angle > 180){
  semicircle[2].style.display = 'none';
  semicircle[0].style.transform = `rotate(180deg)`;
  semicircle[1].style.transform = `rotate(${angle}deg)`;
  cirlceContainer.classList.remove('r');
  cirlceContainer.classList.remove('y');

} else {
  semicircle[2].style.display = 'block';
  semicircle[0].style.transform = `rotate(${angle}deg)`;
  semicircle[1].style.transform = `rotate(${angle}deg)`;
}


if(angle < 180) {  
  semicircle[0].style.backgroundColor = "#FFF01F";
  semicircle[1].style.backgroundColor = "#FFF01F"; 
  cirlceContainer.classList.remove('circle-container');
  cirlceContainer.classList.add('y');

} 

if(angle < 90){
  semicircle[0].style.backgroundColor = "#FF3131";
  semicircle[1].style.backgroundColor = "#FF3131";
  cirlceContainer.classList.remove('y') ;
  cirlceContainer.classList.add('r');

}

  const sacrifice = document.querySelector("#sacrifice");
  if(sacrifice.classList.contains('open--section--4')) {


    hid = document.querySelector('.hid--2');
    hid.style.visibility = 'visible';

    let circle = document.querySelector('.fa-4');
    let lock = document.querySelector('#lock--3');
    let number = document.querySelector('#number--4');

  lock.classList.add('hidden--2');
  number.classList.remove('hidden--2');
    circle.classList.add('active');
        const section4 = document.querySelector('#section__4');
    section4.scrollIntoView({ behavior: 'smooth' });
                       x3.play();
  x2.pause();

  }

});

const progress = document.getElementById("progress");
const next = document.getElementById("next");
const circles = document.querySelectorAll('.circle');
const actives = document.querySelectorAll(".active");


const middle = document.getElementById('middle');
const middleOne = document.getElementById('middle-1');
const middleTwo = document.getElementById('middle-2');
const middleThree = document.getElementById('middle-3');





