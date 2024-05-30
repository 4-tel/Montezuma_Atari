import { c } from "../Engine"

interface position {

    x: any,
    y: any

}
export class Sprite {
    position: any
    image: any
    loaded: boolean
    width: any
    height: any
    character: any
    constructor(position: any, imageSrc: any, width: any, height: any) {
        this.position = position
        this.image = new Image()
        this.image.src = "a"
        this.width = width
        this.height = height
        this.image.onload = () => {
            this.loaded = true
        }
        this.character = new Image()

        this.loaded = false
        console.log(this.position)

    }
    draw() {
        c.fillStyle = 'red'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        //c.drawImage(this.image, this.position.x, this.position.y, 20, 16)

    }
}