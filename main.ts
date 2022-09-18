let Stringa_ricevuta = ""
basic.forever(function () {
    Stringa_ricevuta = serial.readString()
    radio.setGroup(1)
    radio.sendString(Stringa_ricevuta)
    radio.setGroup(2)
    radio.sendString(Stringa_ricevuta)
    radio.setGroup(3)
    radio.sendString(Stringa_ricevuta)
})
