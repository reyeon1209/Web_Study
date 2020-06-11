function InputGrade() {
  var name = document.getElementsByClassName("name");
  sum = 0;

  for (i = 0; i < name.length; i++) {
    var input = prompt(name[i].textContent + "의 성적을 입력하세요.");
    var grade = Number(input);

    if (!Number.isInteger(grade)) {
      i--;
    } else {
      sum += grade;
      document.getElementsByClassName("grade")[i].innerHTML = grade;
    }
  }
  document.getElementById("avg").innerHTML = sum / name.length; 
}