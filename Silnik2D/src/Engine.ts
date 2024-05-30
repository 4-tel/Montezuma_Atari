import { Player } from "./Klasy/Player"
import { Sprite } from "./Klasy/Sprites"
import { Wall } from "./Klasy/Wall"
import { levels } from "./Klasy/levels"
import { Enemy } from "./Klasy/Enemy"
//const levels = require('./Klasy/level.json')
//console.log(levels);


const scene: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement
window.devicePixelRatio
document.body.appendChild(scene)
export const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement
canvas.id = "field"
export const c: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D

canvas.width = 320
canvas.height = 200
c.imageSmoothingEnabled = false

export let start: any = [9, 0]
export let lvl1_map: any = [
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', levels.lv0.lv0, 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', levels.lv1.lv1_1, levels.lv1.lv1_2, levels.lv1.lv1_3],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', levels.lv2.lv2_1, levels.lv2.lv2_2, levels.lv2.lv2_3, levels.lv2.lv2_4],
    ['x', 'x', 'x', 'x', 'x', 'x', levels.lv3.lv3_1, levels.lv3.lv3_2, levels.lv3.lv3_3, levels.lv3.lv3_4, 'x'],
    ['x', 'x', 'x', 'x', 'x', levels.lv4.lv4_1, levels.lv4.lv4_2, levels.lv4.lv4_3, levels.lv4.lv4_4, levels.lv4.lv4_5, 'x'],
    ['x', 'x', 'x', 'x', levels.lv5.lv5_1, levels.lv5.lv5_2, levels.lv5.lv5_3, levels.lv5.lv5_4, levels.lv5.lv5_5, levels.lv5.lv5_6, 'x'],
    ['x', 'x', 'x', levels.lv6.lv6_1, levels.lv6.lv6_2, levels.lv6.lv6_3, levels.lv6.lv6_4, levels.lv6.lv6_5, levels.lv6.lv6_6, levels.lv6.lv6_7, 'x'],
    ['x', 'x', levels.lv7.lv7_1, levels.lv7.lv7_2, levels.lv7.lv7_3, levels.lv7.lv7_4, levels.lv7.lv7_5, levels.lv7.lv7_6, levels.lv7.lv7_7, levels.lv7.lv7_8, 'x'],
    ['x', levels.lv8.lv8_1, levels.lv8.lv8_2, levels.lv8.lv8_3, levels.lv8.lv8_4, levels.lv8.lv8_5, levels.lv8.lv8_6, levels.lv8.lv8_7, levels.lv8.lv8_8, levels.lv8.lv8_9, 'x'],
    [levels.lv9.lv9_1, levels.lv9.lv9_2, levels.lv9.lv9_3, levels.lv9.lv9_4, levels.lv9.lv9_5, levels.lv9.lv9_6, levels.lv9.lv9_7, levels.lv9.lv9_8, levels.lv9.lv9_9, levels.lv9.lv9_10, 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', "lv99", 'x']
]
export function getRoom(position: any) {
    return lvl1_map[position[1]][position[0]].layout

}
export var wholelvl: any = {

    level: lvl1_map[start[1]][start[0]]
}
export var currentlvl: any = getRoom(start)

let wall = new Wall()
wall.draw(currentlvl, wholelvl)
export let player = new Player(wall, { imageSrc: '../Silnik2D/src/img/SpriteSheet.png' })

// let img = new Sprite({
//     x: 30,
//     y: 30
// }, "../Silnik2D/src/img/wallpaper.png")
function tick() {
    currentlvl = getRoom(player.room_position)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    wall.draw(currentlvl, wholelvl)
    player.update()

}

setInterval(tick, 1000 / 60)

window.addEventListener('keydown', (event) => {
    player.pressed = true
    switch (event.key) {
        case 'w':
            if (player.keys_pressed.w == false) {
                player.pressedW()
            }
            break
        case ' ':
            if (player.keys_pressed.space == false) {
                if (player.on_ground == true) { player.velocity.y = -4.5 }
                player.keys_pressed.space = true
            }
            break
        case 's':
            if (player.keys_pressed.s == false) {
                player.keys_pressed.s = true
            }
            break
        case 'a':
            if (player.up_the_ladder == false) {
                player.keys_pressed.a = true
                player.lastpress = "a"
            }
            break
        case 'd':
            if (player.up_the_ladder == false) {
                player.keys_pressed.d = true
                player.lastpress = "d"
            }
            break
    }
})
window.addEventListener('keyup', (event) => {
    player.pressed = false
    switch (event.key) {
        case ' ':
            player.keys_pressed.space = false
            break
        case 'w':
            player.keys_pressed.w = false
            break
        case 'a':
            player.keys_pressed.a = false

            break
        case 'd':
            player.keys_pressed.d = false

            break
        case 's':
            player.keys_pressed.s = false

            break
    }
})
