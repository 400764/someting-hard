input.onGesture(Gesture.Shake, function () {
    if (開始 == 1) {
        basic.clearScreen()
        開始 += -1
        music.playMelody("C5 B A G F E D C ", 400)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (開始 == 0) {
        開始 += 1
        music.playMelody("C D E F G A B C5 ", 400)
    } else {
        開始 += -1
        basic.clearScreen()
        music.playMelody("C5 B A G F E D C ", 400)
    }
})
let 開始 = 0
開始 = 0
basic.clearScreen()
basic.forever(function () {
    if (開始 == 1 && 49 < input.soundLevel()) {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            . # . # .
            `)
    }
    if (開始 == 1 && input.soundLevel() < 50) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            # . # . #
            . # . # .
            `)
    }
})
