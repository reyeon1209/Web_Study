function create(){
    var n1 = Math.floor((Math.random() * 9) + 1);
    var n2 = Math.floor((Math.random() * 9) + 1);

    document.getElementById("first").innerHTML = n1;
    document.getElementById("second").innerHTML = n2;
  }
  
  function check(){
    var n1 = document.getElementById("first").innerHTML;
    var n2 = document.getElementById("second").innerHTML;
    var answer = n1 * n2;
    var input = document.getElementById("answer").value;
  
    if (answer == input) {
      document.getElementById("check").innerHTML = "정답입니다.";
    } else {
      document.getElementById("check").innerHTML = "오답입니다.";
    }
  }
  