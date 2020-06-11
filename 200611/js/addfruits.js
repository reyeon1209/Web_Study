var fruits = ["Banana", "Orange", "Apple", "Mango"];

function LoadFruits() {
  document.getElementById("frutis").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your favorite fruit?");
 
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}