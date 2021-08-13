radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 372) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        onoff = 1
    }
    if (receivedNumber == 491) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        onoff = 0
    }
    if (receivedNumber == 904) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        onoff = 1
        for (let index = 0; index < 3600; index++) {
            basic.pause(1000)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        onoff = 0
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (onoff == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        onoff = 1
    } else if (onoff == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        onoff = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setBuiltInSpeakerEnabled(true)
    soundExpression.twinkle.playUntilDone()
    music.setBuiltInSpeakerEnabled(false)
})
let onoff = 0
radio.setGroup(562)
onoff = 0
