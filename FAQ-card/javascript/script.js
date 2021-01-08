
var questionsArr = document.querySelectorAll('[data-question]');
var textArr = document.querySelectorAll('[data-content]');
var arrowArr = document.querySelectorAll('[data-arrow]');

textArr.forEach(function (elem) {
  elem.style.display = 'none';
});

questionsArr.forEach(function (elem, index) {
  elem.addEventListener('click', function (){
    showContent(index);
  });
});

arrowArr.forEach(function (elem, index) {
  elem.addEventListener('click', function (){
    showContent(index);
  });
});

function showContent(index) {
  var x = textArr[index];
  if(x.style.display === 'none') { 
  x.style.display = 'block';
  arrowArr[index].style.transform = 'rotate(180deg)';
  questionsArr[index].className = questionsArr[index].className.replace("active", "changeStyle");
  } else {
  x.style.display = 'none';
  arrowArr[index].style.transform = 'rotate(360deg)';
  questionsArr[index].className = questionsArr[index].className.replace("changeStyle", "active");
  }
}