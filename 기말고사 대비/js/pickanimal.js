function Animal() {
  var year = prompt("당신이 태어난 해를 입력하시오.");
  var animal = document.getElementsByClassName("animal");

  document.getElementById("photo").src = animal[year % 12].src;
}