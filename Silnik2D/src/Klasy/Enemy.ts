export class Enemy {
    //typy: 
    //skull - czacha
    //spider - pająk 
    //snake - wąż
    //jumping skull - skacze czacha
    width: number
    height: number
    position: any
    speed: number
    direction: string
    type: string
    id: number
    constructor(position: any, speed: number, direction: string, type: string, width: number, id: number) {
        this.width = width
        this.height = 10
        this.position = [position[0] + 2, position[1]]
        this.speed = speed
        this.direction = direction
        this.type = type
        this.id = id
    }
}