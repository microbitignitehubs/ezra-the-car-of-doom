radio.onReceivedNumber(function (receivedNumber) {
    if (is_controller) {
        if (0 == command_stop) {
            basic.showArrow(ArrowNames.East)
        } else if (roll == -1) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
        }
        radio.sendNumber(command)
    }
})
input.onButtonPressed(Button.AB, function () {
    is_controller = 1
    basic.showIcon(IconNames.Square)
})
let command = 0
let roll = 0
let command_stop = 0
let is_controller = 0
basic.showIcon(IconNames.SmallSquare)
radio.setGroup(196)
radio.setFrequencyBand(0)
radio.setTransmitPower(1)
radio.setTransmitSerialNumber(false)
is_controller = 0
command_stop = 0
basic.forever(function () {
    basic.pause(100)
})
basic.forever(function () {
    basic.pause(100)
    if (is_controller) {
        roll = input.rotation(Rotation.Roll)
    }
    if (roll < 1) {
        basic.showArrow(ArrowNames.West)
    } else {
    	
    }
})
basic.forever(function () {
    if (is_controller) {
        command = command_stop
        roll = input.rotation(Rotation.Roll)
        if (roll > 1) {
            let is_controller2 = 0
            basic.showArrow(ArrowNames.East)
            command = is_controller2
        } else if (roll < -1) {
            basic.showArrow(ArrowNames.West)
        } else if (false) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            radio.sendNumber(command)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (is_controller) {
        command = command_stop
    }
    radio.sendNumber(command)
})
