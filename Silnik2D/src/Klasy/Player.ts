import { on } from "events"
import { c, canvas, start, currentlvl } from "../Engine"
import { blockDisappear } from "../functions/blockDisappear"
import { changeRoom } from "../functions/changeRooms"
import { collisionCheckHorizontal, collisionCheckVertical } from "../functions/collisionCheck"
import { ladder } from "../functions/ladderCheck"
import { pipe } from "../functions/pipeCheck"
import { rope } from "../functions/ropeCheck"
import { slider } from "../functions/sliderCheck"
import { Sprite } from "./Sprites"
import { revive } from '../functions/die'
import { semicollisionCheckHorizontal, semicollisionCheckVertical } from "../functions/semicollisionCheck"
import { drawStats } from "../functions/stats"
import { deathanimation, playerAnimations } from "../functions/playerAnimations"
import { enemyCheckHorizontal, enemyCheckVertical } from "../functions/enemyCheck"
import { checkForItems } from "../functions/itemCheck"
import { doorcheck } from "../functions/doorCheck"
import { burn } from "../functions/fireCheck"
interface Velo {

    x: number,
    y: number

}

export class Player {


    width: number
    height: number
    gravity_const: number
    player_sides: any
    player_position: any
    keys_pressed: any
    velocity: Velo
    on_ground: boolean
    pressed: boolean
    img: any
    loaded: any
    collisionBlock: any
    ladder: any
    slider: any
    rope: any
    pipe: any
    enemy: any
    item: any
    door: any
    flame: any
    up_the_ladder: any
    up_the_pipe: any
    slide: any
    imageSrc: any
    PlayerSprite: any
    up_the_rope: any
    disappear: Function
    wall: any
    room_position: any
    default_player_position: any
    die: boolean
    revive: any
    semicollisionBlock: any
    lives: number
    score: number
    inventory: any
    main: any
    mainleft: any
    right: any
    left: any
    animationframes: number
    lastpress: any
    playerslide: any
    playerladder: any
    playerrope: any
    playerjump: any
    death: boolean
    deathframes: number
    deathtype: string
    airTime: number
    death1: any
    death2: any
    death3: any
    numbers: any


    constructor(wall: any, imageSrc: any) {
        this.wall = wall

        this.semicollisionBlock = wall.getsemihitbox()
        this.collisionBlock = wall.gethitbox()
        this.ladder = wall.getladders()
        this.slider = wall.getsliders()
        this.rope = wall.getropes()
        this.pipe = wall.getpipes()
        this.enemy = wall.getenemies()
        this.item = wall.getitems()
        this.door = wall.getdoors()
        this.flame = wall.getflames()

        this.revive = revive
        this.disappear = wall.disappearBlock
        this.room_position = start
        this.lastpress = "a"

        //console.log(this.collisionBlock);
        this.keys_pressed = {
            a: false,
            d: false,
            w: false,
            s: false,
            space: false
        }
        this.player_position = {
            x: 100,
            y: 85
        }
        this.default_player_position = {
            x: 100,
            y: 85
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.airTime = 0
        this.inventory = []
        this.lives = 5
        this.score = 0
        this.die = false
        this.gravity_const = 0.5
        this.width = 10
        this.height = 4
        this.animationframes = 0
        this.deathframes = 0
        this.on_ground = true
        this.pressed = true
        this.death = false
        this.up_the_ladder = false
        this.up_the_rope = false
        this.up_the_pipe = false
        this.right = new Image()
        this.right.src = '/Silnik2D/src/img/walkRight.png'
        this.left = new Image()
        this.left.src = '/Silnik2D/src/img/walkLeft.png'
        this.slide = false
        this.main = new Image()
        this.main.src = '/Silnik2D/src/img/mainCharacter.png'
        this.mainleft = new Image()
        this.mainleft.src = '/Silnik2D/src/img/mainCharacter2.png'
        this.playerslide = new Image()
        this.playerslide.src = '/Silnik2D/src/img/playerslide.png'
        this.playerladder = new Image()
        this.playerladder.src = '/Silnik2D/src/img/playerladder.png'
        this.playerrope = new Image()
        this.playerrope.src = '/Silnik2D/src/img/playerrope.png'
        this.playerjump = new Image()
        this.playerjump.src = '/Silnik2D/src/img/playerjump.png'
        this.death1 = new Image()
        this.death1.src = '/Silnik2D/src/img/death1.png'
        this.death2 = new Image()
        this.death2.src = '/Silnik2D/src/img/death2.png'
        this.death3 = new Image()
        this.death3.src = '/Silnik2D/src/img/death3.png'
        this.numbers = new Image()
        this.numbers.src = "/Silnik2D/src/img/score.png"


        this.player_sides = {
            right: this.player_position.x + this.width,
            left: this.player_position.x,
            top: this.player_position.y,
            bottom: this.player_position.y + this.height,
        }
        this.PlayerSprite = new Sprite(this.player_position, imageSrc.imageSrc, this.width,
            this.height)
    }

    pressedW() {
        this.keys_pressed.w = true
    }

    getAll() {
        this.collisionBlock = this.wall.gethitbox()
        this.semicollisionBlock = this.wall.getsemihitbox()
        this.ladder = this.wall.getladders()
        this.slider = this.wall.getsliders()
        this.rope = this.wall.getropes()
        this.pipe = this.wall.getpipes()
        this.enemy = this.wall.getenemies()
        this.item = this.wall.getitems()
        this.door = this.wall.getdoors()
        this.flame = this.wall.getflames()


    }
    passinventory() {
        this.wall.inventory = this.inventory
    }
    update() {
        //console.log(this.on_ground);
        // if (this.lives < 0) {
        // this.player_position = "aaa"
        // }
        if (this.death) {
            drawStats(this, c, this.wall.hat, this.wall.display, this.wall.display2, canvas, this.wall)
            this.deathframes += 1
            deathanimation(this, c)
            if (this.deathframes > 80) {
                this.death = false
                this.deathframes = 0
                this.airTime = 0
                this.up_the_ladder = true
                this.up_the_rope = true
                this.revive(this)
            }
        }
        else {
            playerAnimations(this, c)
            this.passinventory()

            drawStats(this, c, this.wall.hat, this.wall.display, this.wall.display2, canvas, this.wall)
            this.getAll()

            this.PlayerSprite.draw()
            ladder(this)
            pipe(this)
            rope(this)
            slider(this)
            burn(this)


            doorcheck(this)
            checkForItems(this)
            enemyCheckHorizontal(this)
            enemyCheckVertical(this)


            blockDisappear(this.disappear)

            if (this.up_the_ladder == false && this.up_the_pipe == false && this.up_the_rope == false) {
                if (this.keys_pressed.a == true) {
                    this.velocity.x = -2
                }
                else if (this.keys_pressed.d == true) {
                    this.velocity.x = 2
                }
                if (this.keys_pressed.a == false && this.keys_pressed.d == false && this.on_ground == true) {
                    this.velocity.x = 0
                }
                if (this.slide == true && this.velocity.y >= 0) {
                    this.velocity.x = this.velocity.x - 1.5
                }
            }

            this.player_position.x += this.velocity.x

            collisionCheckHorizontal(this)

            this.player_position.y += this.velocity.y
            this.player_sides.bottom = this.player_position.y + this.height
            this.on_ground = false

            if (this.up_the_ladder == false && this.up_the_rope == false) {
                collisionCheckVertical(this)

                if (this.velocity.y >= 0) {
                    semicollisionCheckVertical(this)
                }
            }

            if (this.player_sides.bottom + this.velocity.y < canvas.height && this.up_the_ladder == false) {
                if (this.velocity.y < 0) {
                    this.velocity.y += this.gravity_const
                }
                else {
                    this.velocity.y = 2
                }

            }
            else {
                this.on_ground = true
                this.velocity.y = 0
            }
            changeRoom(this)
            if (this.velocity.y == 2 && this.on_ground == false && this.up_the_ladder == false && this.up_the_pipe == false && this.up_the_rope == false) {
                this.airTime++

            }
            // else if (this.up_the_ladder == true || this.up_the_pipe == true || this.up_the_rope == true) {
            //     this.airTime = 0
            // }
            else {
                if (this.airTime > 20 && this.on_ground == true) {
                    this.death = true
                    this.deathtype = "fall"
                }
                this.airTime = 0
            }

        }
    }
}