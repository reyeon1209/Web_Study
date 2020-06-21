function nicknameFunc() {
    if (document.getElementById('yesNick').checked) {
        document.getElementById('nick').style.display = "inline";
        document.getElementById('nickname').setAttribute('required', true); // nickname 필수 입력하게
    }
    
    else {
        document.getElementById('nickname').removeAttribute('required');    // nickname 필수 입력 X
        document.getElementById('nick').style.display = "none";
    }
}