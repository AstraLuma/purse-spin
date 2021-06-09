brightboard.setBrightness(64)
brightboard.setPattern(brightboard.colorForLed(0xff0000, 0xFF7F00, 0xFFFE00, 0x7FFF00, 0x00FF00, 0x00FF7F, 0x00FFFE, 0x007FFF, 0x0000FF, 0x7F00FF, 0xFE00FF, 0xFF007F))
brightboard.show()
basic.forever(function () {
    brightboard.rotate(1)
    brightboard.show()
    basic.pause(1000)
})
