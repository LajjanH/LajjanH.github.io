var questionBtn = document.getElementById("time__btn1");
var question = document.querySelector('.question__one');

questionBtn.addEventListener("click", function() {
if (question.style.display === 'none') {
question.style.display = 'block'
} else {
question.style.display = 'none'
}
});

answerBtn = document.getElementById('answerBtn--1');
answer = document.querySelector('#answer');


answerBtn.addEventListener("click", () => {
  const answer = document.getElementById("answer").value;
  if (answer == 6) 
   {
    hid = document.querySelector('.hid');
    hid.style.visibility = 'visible';

    let circle = document.querySelector('.fa-2');
     let lock = document.querySelector('.fa-lock');
  let number = document.querySelector('.number');

  lock.classList.add('hidden--2');
  number.classList.remove('hidden--2');
    circle.classList.add('active');

  var section2 = document.querySelector('#section__2');
  section2.scrollIntoView({ behavior: 'smooth' });
    x1.play();
  x.pause();
   }
});



// section 2 //

const task1 = document.querySelector('.task__1');
const task2 = document.querySelector('.task__2');
const task3 = document.querySelector('.task__3');

task1.addEventListener("click", () => {
  task1.classList.add('selected');
  if (task1.classList.contains('selected') && task2.classList.contains('selected') && task3.classList.contains('selected')) {
    let circle = document.querySelector('.fa-3');
    let lock = document.querySelector('#lock--2');
    let number = document.querySelector('#number--3');

  lock.classList.add('hidden--2');
  number.classList.remove('hidden--2');
    circle.classList.add('active');

    const section3 = document.querySelector('#section__3');
    section3.scrollIntoView({ behavior: 'smooth' });

        hid = document.querySelector('.hid--1');
        hid.style.visibility = 'visible';
            x2.play();
  x1.pause();
  }
});

task2.addEventListener("click", () => {
  task2.classList.add('selected');
  if (task1.classList.contains('selected') && task2.classList.contains('selected') && task3.classList.contains('selected')) {
    let circle = document.querySelector('.fa-3');
    let lock = document.querySelector('#lock--2');
    let number = document.querySelector('#number--3');

  lock.classList.add('hidden--2');
  number.classList.remove('hidden--2');
    circle.classList.add('active');

    const section3 = document.querySelector('#section__3');
    section3.scrollIntoView({ behavior: 'smooth' });

        hid = document.querySelector('.hid--1');
        hid.style.visibility = 'visible';
                   x2.play();
  x1.pause();
  }
});

task3.addEventListener("click", () => {
  task3.classList.add('selected');
  if (task1.classList.contains('selected') && task2.classList.contains('selected') && task3.classList.contains('selected')) {
    let circle = document.querySelector('.fa-3');
    let lock = document.querySelector('#lock--2');
    let number = document.querySelector('#number--3');

  lock.classList.add('hidden--2');
  number.classList.remove('hidden--2');
    circle.classList.add('active');

    const section3 = document.querySelector('#section__3');
    section3.scrollIntoView({ behavior: 'smooth' });

    hid = document.querySelector('.hid--1');
        hid.style.visibility = 'visible';
                   x2.play();
  x1.pause();
  }
});



// Section 3 //

var sacrificeBtn = document.getElementById("sacrifice__btn");

sacrificeBtn.addEventListener("click", function () {
  const sacrifice = document.querySelector("#sacrifice");
  sacrifice.classList.add("open--section--4");
  sacrifice.classList.remove("hidden--2");

});


// Section 4 //

const smallCubes = document.querySelectorAll(".small-cube");

smallCubes.forEach((cube) => {
  cube.addEventListener("mouseenter", () => {
      const two = document.querySelectorAll(".two");
            const one = document.querySelectorAll(".one");
                  const seven = document.querySelectorAll(".seven");

    if (cube.classList.contains("two") && currentActive === 1) {

      two.forEach((two) => {
        cube.style.backgroundColor = "#A5C9FF";
      });
    }

        if (cube.classList.contains("one") && currentActive === 2) {

      one.forEach((one) => {
        cube.style.backgroundColor = "#ECFFA5";
      });
    }

        if (cube.classList.contains("seven") && currentActive === 3) {

      seven.forEach((seven) => {
        cube.style.backgroundColor = "#FFA5A5";
      });
    }


  });

});

answerBtn2 = document.getElementById('answerBtn--2');
answer = document.querySelector('#answer');

answerBtn2.addEventListener("click", () => {
  const answer2 = document.getElementById("answer2").value;
  if (parseInt(answer2) === 217) {
    let circle = document.querySelector('.fa-5');
    let lock = document.querySelector('#lock--4');
    let number = document.querySelector('#number--5');

    lock.classList.add('hidden--2');
    number.classList.remove('hidden--2');
    circle.classList.add('active');

    const section5 = document.querySelector('#section__5');
    section5.scrollIntoView({ behavior: 'smooth' });

    hid = document.querySelector('.hid--3');
    hid.style.visibility = 'visible';
                           x4.play();
  x3.pause();

  }
});

// Section 5 //

const riddleOne = document.querySelector('.riddle--1')
const riddleTwo = document.querySelector('.riddle--2')
const riddleThree = document.querySelector('.riddle--3')

riddleOne.addEventListener("mouseover", () => {

if (currentActive === 1) {
  const riddleTwo = document.querySelector('.riddle--2')
  riddleTwo.classList.remove('hidden--2');
}
});

riddleTwo.addEventListener("mouseover", () => {

if (currentActive === 2) {
  const riddleThree = document.querySelector('.riddle--3')
  riddleThree.classList.remove('hidden--2');

}

});

riddleThree.addEventListener("mouseover", () => {

if (currentActive === 3) {
  riddleOne.style.color = '#fff';
  riddleTwo.style.color = '#fff';
  riddleThree.style.color = '#fff';
}

});




const answerBtn3 = document.getElementById('answerBtn--3');
const answer3 = document.querySelector('#answer3');
const neonText1 = document.querySelector('.neonText1');



answerBtn3.addEventListener("click", () => {
  const answer = answer3.value.toLowerCase();

  if (answer === 'water') {

    answerBtn3.classList.add('hidden--2');
    riddleOne.classList.add('hidden--2');
    riddleTwo.classList.add('hidden--2');
    riddleThree.classList.add('hidden--2');
    answer3.classList.add('hidden--2');

    neonText1.classList.remove('hidden--2');
                               x5.play();
  x4.pause();
  }
});

