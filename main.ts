input.onButtonPressed(Button.A, function () {
    punto.move(-1)
})
input.onButtonPressed(Button.B, function () {
    punto.move(1)
})
let punto: game.LedSprite = null
punto = game.createSprite(2, 4)
