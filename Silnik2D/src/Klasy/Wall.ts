import { c, canvas } from '../Engine'
import { enemyCollision } from '../functions/enemyCollision'
import { Collisionblock } from './CollisionBlock'
import { Door } from './Door'
import { Enemy } from './Enemy'
import { Item } from './item'

export class Wall {
    position: any
    width: number
    height: number
    hitboxes: any
    semihitboxes: any
    wall: any
    ladder: any
    ladderWall: any
    loaded: any
    ladders: any
    sliders: any
    ropes: any
    pipes: any
    flames: any
    pipe: any
    rope: any
    fire: any
    torch: any
    slider: any
    ropeend: any
    fire_end: any
    dissapear: any
    appear: boolean
    animation: number
    sliderend: any
    hat: any
    sliderend2: any
    display: any
    display2: any
    skull: any
    randomframe: number
    enemies: any
    snake: any
    key: any
    items: any
    doors: any
    door: any
    sword: any
    inventory: any
    dark: boolean
    lightened: boolean



    constructor() {
        this.position = {
            x: 120,
            y: 140
        }
        this.appear = true
        this.width = 8
        this.height = 8
        this.hitboxes = []
        this.semihitboxes = []
        this.ladders = []
        this.sliders = []
        this.ropes = []
        this.pipes = []
        this.items = []
        this.doors = []
        this.flames = []
        this.inventory = []
        this.wall = new Image()
        this.wall.src = '/Silnik2D/src/img/wall.png'
        this.wall.onload = () => {
            this.loaded = true
        }
        this.ladder = new Image()
        this.ladder.src = '/Silnik2D/src/img/ladder.png'
        this.ladder.onload = () => {
            this.loaded = true
        }
        this.ladderWall = new Image()
        this.ladderWall.src = '/Silnik2D/src/img/ladderWall.png'
        this.ladderWall.onload = () => {
            this.loaded = true
        }
        this.pipe = new Image()
        this.pipe.src = '/Silnik2D/src/img/pipe.png'
        this.pipe.onload = () => {
            this.loaded = true
        }
        this.rope = new Image()
        this.rope.src = '/Silnik2D/src/img/rope.png'
        this.rope.onload = () => {
            this.loaded = true
        }
        this.fire = new Image()
        this.fire.src = '/Silnik2D/src/img/fire.png'
        this.fire.onload = () => {
            this.loaded = true
        }
        this.fire_end = new Image()
        this.fire_end.src = '/Silnik2D/src/img/fire_end.png'
        this.fire_end.onload = () => {
            this.loaded = true
        }
        this.dissapear = new Image()
        this.dissapear.src = '/Silnik2D/src/img/disappear.png'
        this.dissapear.onload = () => {
            this.loaded = true
        }
        this.ropeend = new Image()
        this.ropeend.src = '/Silnik2D/src/img/ropeStart.png'
        this.ropeend.onload = () => {
            this.loaded = true
        }
        this.slider = new Image()
        this.slider.src = '/Silnik2D/src/img/slider.png'
        this.slider.onload = () => {
            this.loaded = true
        }
        this.sliderend = new Image()
        this.sliderend.src = '/Silnik2D/src/img/sliderend.png'
        this.sliderend.onload = () => {
            this.loaded = true
        }
        this.sliderend2 = new Image()
        this.sliderend2.src = '/Silnik2D/src/img/sliderend2.png'
        this.sliderend2.onload = () => {
            this.loaded = true
        }
        this.hat = new Image()
        this.hat.src = '/Silnik2D/src/img/hat.png'
        this.hat.onload = () => {
            this.loaded = true
        }
        this.display = new Image()
        this.display.src = '/Silnik2D/src/img/display.png'
        this.display.onload = () => {
            this.loaded = true
        }
        this.display2 = new Image()
        this.display2.src = '/Silnik2D/src/img/display2.png'
        this.display2.onload = () => {
            this.loaded = true
        }
        this.skull = new Image()
        this.skull.src = '/Silnik2D/src/img/skull.png'
        this.skull.onload = () => {
            this.loaded = true
        }
        this.snake = new Image()
        this.snake.src = '/Silnik2D/src/img/snake.png'
        this.snake.onload = () => {
            this.loaded = true
        }
        this.key = new Image()
        this.key.src = '/Silnik2D/src/img/key.png'
        this.key.onload = () => {
            this.loaded = true
        }
        this.door = new Image()
        this.door.src = '/Silnik2D/src/img/door.png'
        this.door.onload = () => {
            this.loaded = true
        }
        this.torch = new Image()
        this.torch.src = '/Silnik2D/src/img/torch.png'
        this.torch.onload = () => {
            this.loaded = true
        }
        this.sword = new Image()
        this.sword.src = '/Silnik2D/src/img/sword.png'
        this.sword.onload = () => {
            this.loaded = true
        }
        this.loaded = false
        this.animation = 0
        this.randomframe = 0

    }

    draw = (currentlvl: any, wholelvl: any) => {
        if (this.animation % 3 == 0) {
            this.randomframe = Math.floor(Math.random() * 4)
        }
        if (this.animation < 11) {
            this.animation += 1
        }
        else {
            this.animation = 0
        }
        this.semihitboxes = []
        this.hitboxes = []
        this.ladders = []
        this.ropes = []
        this.pipes = []
        this.sliders = []
        this.enemies = []
        this.items = []
        this.doors = []
        this.flames = []
        if (wholelvl.level.dark) {
            this.dark = true
        }
        else {
            this.dark = false
        }
        if (this.inventory.length > 0) {
            for (let i = 0; i < this.inventory.length; i++) {
                if (this.inventory[i].type == "torch") {
                    this.lightened = true
                }
            }

        }

        for (let i: number = 0; i < currentlvl[0].length; i++) {
            for (let j: number = 0; j < currentlvl.length; j++) {
                if (currentlvl[j][i] == 1) {
                    if (this.dark) {
                        if (this.lightened) {
                            c.fillStyle = wholelvl.level.color
                            c.fillRect(8 * i, 8 * j, this.width, this.height)
                            c.drawImage(this.wall, 8 * i, 8 * j, this.width, this.height)
                        }
                    }
                    else {
                        c.fillStyle = wholelvl.level.color
                        c.fillRect(8 * i, 8 * j, this.width, this.height)
                        c.drawImage(this.wall, 8 * i, 8 * j, this.width, this.height)
                    }
                    this.hitboxes.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "wall",
                        )
                    )
                    // if (!this.loaded) return
                }
                else if (currentlvl[j][i] == 2) {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    if (this.dark) {
                        if (this.lightened) {
                            c.drawImage(this.ladder, 8 * i, 8 * j, this.width * 2, this.height)
                        }
                    }
                    else {
                        c.drawImage(this.ladder, 8 * i, 8 * j, this.width * 2, this.height)
                    }
                    this.ladders.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "ladder"
                        )
                    )
                }
                else if (currentlvl[j][i] == 3) {
                    if (this.dark) {
                        if (this.lightened) {
                            c.fillStyle = wholelvl.level.color
                            c.fillRect(8 * i, 8 * j, this.width * 2, this.height)
                            c.drawImage(this.ladderWall, 8 * i, 8 * j, this.width * 2, this.height)
                        }
                    }
                    else {
                        c.fillStyle = wholelvl.level.color
                        c.fillRect(8 * i, 8 * j, this.width * 2, this.height)
                        c.drawImage(this.ladderWall, 8 * i, 8 * j, this.width * 2, this.height)
                    }
                    this.ladders.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "ladder-end"
                        )
                    )
                }
                else if (currentlvl[j][i] == 6) {
                    c.fillStyle = 'brown'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)

                    c.drawImage(this.slider, 8 * Math.floor(this.animation / 3), 0, this.width, this.height, 8 * i, 8 * j, this.width, this.height)
                    this.semihitboxes.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "slider"
                        )
                    )
                    this.sliders.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "slider"
                        )
                    )
                }
                else if (currentlvl[j][i] == "slider-end") {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    c.drawImage(this.sliderend, 8 * Math.floor(this.animation / 3), 0, this.width, this.height, 8 * i, 8 * j, this.width, this.height)

                }
                else if (currentlvl[j][i] == "slider-end2") {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    c.drawImage(this.sliderend2, 8 * Math.floor(this.animation / 3), 0, this.width, this.height, 8 * i, 8 * j, this.width, this.height)

                }
                else if (currentlvl[j][i] == 4) {
                    c.fillStyle = 'blue'
                    // c.fillRect(8 * i, 8 * j, this.width, this.height)
                    this.hitboxes.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "semi-wall"
                        )
                    )
                }
                else if (currentlvl[j][i] == 10) {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    c.drawImage(this.pipe, 8 * i, 8 * j, this.width, this.height)
                    this.pipes.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "pipe",
                        )
                    )
                }
                else if (currentlvl[j][i] == 5) {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    c.drawImage(this.rope, 8 * i, 8 * j, this.width, this.height)
                    this.ropes.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "rope",
                        )
                    )
                }
                else if (currentlvl[j][i] == 11) {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    c.drawImage(this.ropeend, 8 * i, 8 * j, this.width, this.height)
                    this.ropes.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "rope-end",
                        )
                    )
                }
                else if (currentlvl[j][i] == 8) {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    c.drawImage(this.fire, 8 * this.randomframe, 0, this.width, this.height, 8 * i, 8 * j, this.width, this.height)
                    this.randomframe = Math.floor(Math.random() * 4)
                    this.flames.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "fire",
                        )
                    )

                }
                else if (currentlvl[j][i] == 7) {
                    c.fillStyle = 'green'
                    //c.fillRect(8 * i, 8 * j, this.width, this.height)
                    c.drawImage(this.fire_end, 8 * this.randomframe, 0, this.width, this.height, 8 * i, 8 * j, this.width, this.height)
                    this.flames.push(
                        new Collisionblock(
                            {
                                x: 8 * i,
                                y: 8 * j
                            },
                            8,
                            "fire_end",
                        )
                    )

                }
                else if (currentlvl[j][i] == 9) {
                    if (this.appear) {
                        c.fillStyle = 'green'
                        //c.fillRect(8 * i, 8 * j, this.width, 4)
                        c.drawImage(this.dissapear, 8 * this.animation, 0, this.width, this.height, 8 * i, 8 * j, this.width, this.height)
                        this.semihitboxes.push(
                            new Collisionblock(
                                {
                                    x: 8 * i,
                                    y: 8 * j
                                },
                                4,
                                "disappear"
                            )
                        )
                    }
                }
            }
        }
        if (wholelvl.level.items != undefined) {
            for (let i: number = 0; i < wholelvl.level.items.length; i++) {
                if (wholelvl.level.items[i].type == "key") {
                    c.fillStyle = wholelvl.level.items[i].color
                    c.fillRect(wholelvl.level.items[i].position[0], wholelvl.level.items[i].position[1], 14, 14)
                    c.drawImage(this.key, wholelvl.level.items[i].position[0], wholelvl.level.items[i].position[1], 14, 14)
                }
                else if (wholelvl.level.items[i].type == "sword") {
                    c.drawImage(this.sword, wholelvl.level.items[i].position[0], wholelvl.level.items[i].position[1], 16, 14)
                }
                // else if (wholelvl.level.enemies[i].type == "maracas") {
                //     c.drawImage(this.maracas, wholelvl.level.enemies[i].position[0], wholelvl.level.enemies[i].position[1], 16, 14)
                // }
                else if (wholelvl.level.items[i].type == "torch") {
                    c.drawImage(this.torch, wholelvl.level.items[i].position[0], wholelvl.level.items[i].position[1], 16, 14)
                }
                this.items.push(
                    new Item(wholelvl.level.items[i].position, wholelvl.level.items[i].type, wholelvl.level.items[i].id, wholelvl.level.items[i].color)
                )

            }
        }
        if (wholelvl.level.doors != undefined) {
            for (let i: number = 0; i < wholelvl.level.doors.length; i++) {
                if (wholelvl.level.doors[i].closed) {
                    c.fillStyle = wholelvl.level.doors[i].color
                    c.fillRect(wholelvl.level.doors[i].position[0], wholelvl.level.doors[i].position[1], 8, 32)
                    c.drawImage(this.door, 0, 0, 8, 24, wholelvl.level.doors[i].position[0], wholelvl.level.doors[i].position[1], 8, 32)
                }
                else {
                    c.fillStyle = wholelvl.level.doors[i].color
                    c.fillRect(wholelvl.level.doors[i].position[0], wholelvl.level.doors[i].position[1], 24, 32)
                    c.drawImage(this.door, 8, 0, 24, 24, wholelvl.level.doors[i].position[0], wholelvl.level.doors[i].position[1], 24, 32)
                }
                this.doors.push(
                    new Door(wholelvl.level.doors[i].position, wholelvl.level.doors[i].color, wholelvl.level.doors[i].closed, wholelvl.level.doors[i].id)
                )
            }


        }
        if (wholelvl.level.enemies != undefined) {
            for (let i: number = 0; i < wholelvl.level.enemies.length; i++) {
                c.fillStyle = 'blue'
                //c.fillRect(wholelvl.level.enemies[i].position[0], wholelvl.level.enemies[i].position[1], 14, 12)
                if (wholelvl.level.enemies[i].type == "skull") {
                    c.drawImage(this.skull, wholelvl.level.enemies[i].position[0], wholelvl.level.enemies[i].position[1] - 4, 16, 14)
                    this.enemies.push(
                        new Enemy(wholelvl.level.enemies[i].position, wholelvl.level.enemies[i].speed, wholelvl.level.enemies[i].direction, wholelvl.level.enemies[i].type, 14, wholelvl.level.enemies[i].id)
                    )
                }
                else if (wholelvl.level.enemies[i].type == "spider") {

                }
                else if (wholelvl.level.enemies[i].type == "snake") {
                    c.drawImage(this.snake, wholelvl.level.enemies[i].position[0], wholelvl.level.enemies[i].position[1] - 4, 16, 14)
                    this.enemies.push(
                        new Enemy(wholelvl.level.enemies[i].position, wholelvl.level.enemies[i].speed, wholelvl.level.enemies[i].direction, wholelvl.level.enemies[i].type, 10, wholelvl.level.enemies[i].id)
                    )
                }



            }
            for (let i: number = 0; i < this.enemies.length; i++) {
                if (enemyCollision(this.enemies[i], this.hitboxes, this.semihitboxes, this.doors)) {
                    wholelvl.level.enemies[i].speed = wholelvl.level.enemies[i].speed * -1
                }
                wholelvl.level.enemies[i].position[0] += wholelvl.level.enemies[i].speed
            }
        }

    }
    getflames = () => {
        return this.flames
    }
    getdoors = () => {
        return this.doors
    }
    getitems = () => {
        return this.items
    }
    getenemies = () => {
        return this.enemies
    }
    gethitbox = () => {
        return this.hitboxes
    }
    getsemihitbox = () => {
        return this.semihitboxes
    }
    getropes = () => {
        return this.ropes
    }
    getladders = () => {
        return this.ladders
    }
    getpipes = () => {
        return this.pipes
    }
    getsliders = () => {
        return this.sliders
    }
    disappearBlock = () => {
        if (this.appear) {
            this.appear = false
            for (let i: number = 0; i > this.semihitboxes.length; i++) {
                if (this.semihitboxes[i].purpose == "disappear") {
                    this.semihitboxes.splice(i, 1)
                }
            }
        }
        else {
            this.appear = true
            for (let i: number = 0; i > this.semihitboxes.length; i++) {
                if (this.semihitboxes[i].purpose == "disappear") {
                    this.semihitboxes.splice(i, 1)
                }
            }
        }
    }
} 