class Phone {
    pin;
    //tin nhắn đang soạn
    textingMessage;
    // hộp thư đến
    inboxMessage;
    // tin nhắn đã gửi
    sentMessage;
    isOn;

    constructor(pin, textingMessage, inboxMessage, sentMessage, isOn) {
        this.pin = pin;
        this.textingMessage = textingMessage;
        this.inboxMessage = inboxMessage;
        this.sentMessage = sentMessage;
        this.isOn = isOn;
    }

    checkIsOn() {
        if (this.isOn === true) {
            return this.isOn;
            this.pin--;
            if (this.pin <= 0) {
                this.isOn = false
            }
        }
    }

    // bật điện thoại
    turnOnThePhone() {
        this.isOn = true;
        if (this.pin <= 0) {
            this.isOn = false
        }
    }

    //tắt điện thoại
    turnOffThePhone() {
        this.isOn = false;
    }

    //sạc pin
    charge() {
        this.pin = 100;
    }

    //soạn tin nhắn
    texting(message) {
        if (this.isOn === true) {
            this.textingMessage = message;
            this.pin--;
            if (this.pin <= 0) {
                this.isOn = false
            }
        }
    }

    //gửi tin nhắn
    sendMessage(otherPhone) {
        if (this.isOn === true) {
            this.sentMessage.push(this.textingMessage);
            otherPhone.inboxMessage.push(this.textingMessage);
            this.textingMessage = "";
            this.pin--;
            if (this.pin <= 0) {
                this.isOn = false
            }
            otherPhone.pin--;
            if (otherPhone.pin <= 0) {
                otherPhone.isOn = false
            }
        }
    }

    // xemHopThuDen
    seeMailboxTo() {
        if (this.isOn === true) {
            document.write(this.inboxMessage);
            this.pin--;
            if (this.pin <= 0) {
                this.isOn = false
            }
        }
    }

    // xemTinDaGui
    seeSentMessage() {
        if (this.isOn === true) {
            document.write((this.sentMessage));
            this.pin--;
            if (this.pin <= 0) {
                this.isOn = false
            }
        }
    }
}