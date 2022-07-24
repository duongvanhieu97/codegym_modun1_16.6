let nokia = new Phone(100, "", [], [], true);
let iphone = new Phone(100, "", [], [], true);

function sendNokia() {
    let t = document.getElementById("sendNokia").value;
    nokia.texting(t);
    nokia.sendMessage(iphone);
    document.getElementById("pinNokia").innerHTML = "Pin" + nokia.pin;
    document.getElementById("pinIphone").innerHTML = "Pin" + iphone.pin;
    document.getElementById("sendNokia").value = ""
    document.getElementById("hopThuDenIphone").innerHTML = iphone.inboxMessage.join("<br>")
}

function sendIphone() {
    let t = document.getElementById("sendIphone").value;
    iphone.texting(t);
    iphone.sendMessage(nokia);
    document.getElementById("pinIphone").innerHTML = "Pin" + iphone.pin;
    document.getElementById("pinNokia").innerHTML = "Pin" + nokia.pin;
    document.getElementById("sendIphone").value = "";
    document.getElementById("inboxMessageNokia").innerHTML = nokia.inboxMessage.join("<br>");
}

function chargeNokia() {
    nokia.charge()
    document.getElementById("pinNokia").innerHTML = "Pin 100"
}

function chargeIphone() {
    iphone.charge()
    document.getElementById("pinIphone").innerHTML = "Pin 100"
}