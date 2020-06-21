function billingFunction() {
    var name = document.getElementById("shippingName").value;
    var zipcode = document.getElementById("shippingZip").value;

    if (document.getElementById("same").checked) {
        document.getElementById("billingName").value = name;
        document.getElementById("billingZip").value = zipcode;
    }
    
    else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}