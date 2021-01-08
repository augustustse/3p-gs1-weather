input.onButtonPressed(Button.A, function () {
    let temperature = 0
    basic.showString("" + (temperature))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    number += 1
})
let number = 0
basic.forever(function () {
    basic.showNumber(number)
})
