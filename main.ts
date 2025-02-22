let distancia = 0
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distancia <= 10) {
        music.ringTone(988)
        basic.showIcon(IconNames.No)
    } else {
        basic.showNumber(distancia)
        music.stopAllSounds()
        basic.pause(2000)
    }
})
