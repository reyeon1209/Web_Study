function check_password() {
    var pw1 = document.getElementById("user_password").value;
    var pw2 = document.getElementById("user_password_check").value;

    if(pw1 == pw2) {
        document.getElementById("check").innerHTML = "비밀번호가 일치합니다";
        document.getElementById("check").style.color = "black";
        return false;
      
    } else {
        document.getElementById("check").innerHTML = "비밀번호가 일치하지 않습니다";
        document.getElementById("check").style.color = "red";
        return false;
    }
  }
  