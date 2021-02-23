input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 20) {
        basic.showString("Comfortable living!")
    } else if (input.temperature() >= 0) {
        basic.showString("Too cold!!")
    } else {
        basic.showString("No thanks!")
    }
})
