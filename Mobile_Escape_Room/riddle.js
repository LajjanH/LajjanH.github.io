
const textarea = document.getElementById('textarea');


textarea.addEventListener('input', function() {
  // When the textarea content changes, store its value in local storage
  localStorage.setItem('notes', textarea.value);
});

// Load the notes from local storage when the page loads
window.addEventListener('load', function() {
  const notes = localStorage.getItem('notes');
  if (notes) {
    textarea.value = notes;
  }
});


textarea.addEventListener('click', function() {
  const notes = localStorage.getItem('notes');
  if (notes) {
    textarea.value = notes;
} else {
  textarea.value = '';

}});


const answerButton3 = document.getElementById("Btn__answer__3");

answerButton3.addEventListener("click", function() {
  const input = document.getElementById("input__cipher").value.toLowerCase();
  if (input === "teeth") {

         localStorage.clear("count_timer");
         localStorage.clear("count_timer1");
       localStorage.clear("count_timer2");
         localStorage.clear("count_timer3");
       localStorage.clear("count_timer4");   localStorage.clear("count_timer");
         localStorage.clear("count_timer1");
       localStorage.clear("count_timer2");
         localStorage.clear("count_timer3");
       localStorage.clear("count_timer4");
localStorage.removeItem('notes');
    localStorage.removeItem("CODE");
 localStorage.removeItem("DUSK");
localStorage.clear('rotationAngle1');
localStorage.clear('rotationAngle2');
localStorage.clear('rotationAngle3');
localStorage.clear('rotationAngle4');
    window.location.href = "win.html";
  } else {
    alert("Incorrect input");
  }
});
