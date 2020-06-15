namespace SpriteKind {
    export const leftPaddle = SpriteKind.create()
    export const rightPaddle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightPaddle, function (sprite, otherSprite) {
    Right_paddle.vx = Right_paddle.vx - 0
    info.player2.changeScoreBy(1)
})
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
function rightPaddle2 () {
    Right_paddle = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . d d . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f . . . . 
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
`, SpriteKind.rightPaddle)
    controller.player2.moveSprite(Right_paddle, 0, 150)
    Right_paddle.setFlag(SpriteFlag.StayInScreen, true)
    Right_paddle.right = 160
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftPaddle, function (sprite, otherSprite) {
    leftPaddles.vx = leftPaddles.vx - 1
    info.changeScoreBy(1)
})
let Hot_potato: Sprite = null
let leftPaddles: Sprite = null
let Right_paddle: Sprite = null
hotPotato()
left_paddle()
rightPaddle()
scene.setBackgroundColor(9)
