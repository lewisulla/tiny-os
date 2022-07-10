namespace SpriteKind {
    export const logo = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.y += -5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite2.overlapsWith(mySprite)) {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.x += -5
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.x += 5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.y += 5
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
console.log("boot")
mySprite = sprites.create(assets.image`logo`, SpriteKind.logo)
mySprite2 = sprites.create(assets.image`arrow`, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let textSprite = textsprite.create("tiny-os")
textSprite.setOutline(1, 15)
textSprite.y += -50
textSprite.x += -30
textSprite.setIcon(assets.image`logo`)
scene.setBackgroundImage(assets.image`back`)
music.playMelody("C5 B A G A B C5 - ", 120)
