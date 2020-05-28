function showing(element) {
    document.getElementById("name").innerHTML = element.alt;
    document.getElementById("photo").src = element.src;
}

function original() {
    document.getElementById("name").innerHTML = "여기에 사진이 크게 들어갑니다.";
    document.getElementById("photo").src = "imgs/user.png";
}