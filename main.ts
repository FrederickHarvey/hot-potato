namespace SpriteKind {
    export const leftPaddle = SpriteKind.create()
    export const rightPaddle = SpriteKind.create()
}
function left_paddle () {
    leftPaddles = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.leftPaddle)
    controller.moveSprite(leftPaddles, 0, 150)
    leftPaddles.setFlag(SpriteFlag.StayInScreen, true)
    leftPaddles.left = 0
}
function hotPotato () {
    Hot_potato = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . d d d d . . . . . . 
. . . . d d d d d d d d . . . . 
. . . . d d d d d d d d d . . . 
. . . d d d d d d d d d d d . . 
. . . d d d d d d d d d d d . . 
. . . d d d d d d d d d d d d . 
. . . d d d d d d d d d d d . . 
. . . . d d d d d d d d d d . . 
. . . . . d d d d d d d d d . . 
. . . . . . . . d d d d d . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Hot_potato.y = Math.randomRange(0, 120)
    Hot_potato.setVelocity(100, 100)
    Hot_potato.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Hot_potato.vx = Block_1.vx - 45
    info.changeScoreBy(1)
    Block_1.destroy()
})
info.onCountdownEnd(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftPaddle, function (sprite, otherSprite) {
    Hot_potato.vx = leftPaddles.x - 45
})
let Hot_potato: Sprite = null
let leftPaddles: Sprite = null
let Block_1: Sprite = null
scene.setBackgroundColor(9)
hotPotato()
left_paddle()
Block_1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
info.startCountdown(60)
