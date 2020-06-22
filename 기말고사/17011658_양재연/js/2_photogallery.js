/*
왼쪽 버튼(<), 오른쪽 버튼(>)이 존재하며
<img>의 index는 0 ~ 8이고, 순서대로 "쯔위", "사나", "정연", "다현", "채영", "나연", "모모", "미나", "지효" 이다.

왼쪽 버튼과 오른쪽 버튼을 누르면 <div id="image">의 background-image와 <p id="name">의 내용이 해당 사진의 src와 alt로 변하게

왼쪽 버튼을 누르면,
“정연” -> “사나” -> “쯔위” -> “지효” -> “미나” -> “모모” -> “나연” -> “채영” -> “다현” -> “정연” 순으로 반복이 되게 하는 function left()를 정의

오른쪽 버튼을 누르면
반대로, “정연” -> “다현” -> “채영” -> “나연” -> “모모” -> “미나” -> “지효” -> “쯔위” -> “사나” -> “정연” 순으로 반복이 되게 하는 function right()를 정의
*/
var i = 0;
var img = document.getElementsByClassName("img");

function left() {
    
    if (i == 0) {
        i = 8;
    } else {
        i--;
    }
    
    document.getElementById("name").innerHTML = img[i].alt;

    if (i == 0) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice1.jpg");    
    } else if (i == 1) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice2.jpg");
    } else if (i == 2) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice3.jpg");
    } else if (i == 3) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice4.jpg");
    } else if (i == 4) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice5.jpg");
    } else if (i == 5) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice6.jpg");
    } else if (i == 6) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice7.jpg");
    } else if (i == 7) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice8.jpg");
    } else {
        document.getElementById("image").style.backgroundImage = url("imgs/twice9.jpg");
    } 
   
}

function right() {
    if (i == 8) {
        i = 0;
    } else {
        i++;
    }

    document.getElementById("name").innerHTML = img[i].alt;
    
    if (i == 0) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice1.jpg");    
    } else if (i == 1) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice2.jpg");
    } else if (i == 2) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice3.jpg");
    } else if (i == 3) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice4.jpg");
    } else if (i == 4) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice5.jpg");
    } else if (i == 5) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice6.jpg");
    } else if (i == 6) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice7.jpg");
    } else if (i == 7) {
        document.getElementById("image").style.backgroundImage = url("imgs/twice8.jpg");
    } else {
        document.getElementById("image").style.backgroundImage = url("imgs/twice9.jpg");
    } 
}