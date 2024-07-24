input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showString("dice")
    basic.showNumber(randint(1, 6))
})
