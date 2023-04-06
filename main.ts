input.onSound(DetectedSound.Quiet, function () {
    if (開始 == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            # . # . #
            . # . # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (開始 == 1) {
        basic.clearScreen()
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (開始 == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            . # . # .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (開始 == 0) {
        開始 += 1
        music.playMelody("C D E F G A B C5 ", 120)
    } else {
        開始 += -1
        basic.clearScreen()
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
let 開始 = 0
開始 = 0
basic.clearScreen()
basic.forever(function () {
	
})
