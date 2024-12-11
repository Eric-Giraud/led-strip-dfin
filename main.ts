function PropagePixel (MaCouleur: number, Vitesse: number, Sens: number, Depart: number) {
    L1 = strip.range(Depart, 1)
    L1.showColor(MaCouleur)
    for (let index = 0; index < 15; index++) {
        strip.show()
        strip.rotate(Sens)
        basic.pause(Vitesse)
    }
    strip.clear()
    strip.show()
    basic.pause(Vitesse)
}
let L1: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
basic.forever(function () {
    for (let rouge = 0; rouge <= 255; rouge++) {
        rouge = rouge + 100
        for (let vert = 0; vert <= 255; vert++) {
            vert = vert + 100
            for (let bleu = 0; bleu <= 255; bleu++) {
                bleu = bleu + 100
                PropagePixel(neopixel.rgb(rouge, vert, bleu), 50, 1, 0)
            }
        }
    }
})
