def on_gesture_shake():
    global 開始
    if 開始 == 1:
        basic.clear_screen()
        開始 += -1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    global 開始
    if 開始 == 0:
        開始 += 1
        music.play_melody("C D E F G A B C5 ", 300)
    else:
        開始 += -1
        basic.clear_screen()
        music.play_melody("C5 B A G F E D C ", 300)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

開始 = 0
開始 = 0
basic.clear_screen()

def on_forever():
    if 開始 == 1 and 99 < input.sound_level():
        basic.show_leds("""
            . # # # .
                        . # # # .
                        # # # # #
                        . . # . .
                        . # . # .
        """)
    if 開始 == 1 and input.sound_level() < 100:
        basic.show_leds("""
            . # # # .
                        . # # # .
                        . # # # .
                        # . # . #
                        . # . # .
        """)
basic.forever(on_forever)
