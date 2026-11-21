radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == command_stop) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    is_controller = 1
    basic.showIcon(IconNames.Square)
})
let roll = 0
let command = 0
let command_stop = 0
let is_controller = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(196)
radio.setFrequencyBand(0)
radio.setTransmitPower(1)
radio.setTransmitSerialNumber(false)
is_controller = 0
command_stop = 0
basic.forever(function () {
    basic.pause(100)
    if (is_controller) {
        command = command_stop
        roll = input.rotation(Rotation.Roll)
        if (roll > 45) {
            basic.showArrow(ArrowNames.East)
        } else if (roll < -45) {
            basic.showArrow(ArrowNames.West)
        } else if (false) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            radio.sendNumber(command)
        }
    }
})
