export class Door {
    width: number
    height: number
    position: any
    color: string
    closed: boolean
    id: number
    constructor(position: any, color: string, closed: boolean, id: number) {
        this.width = 8
        this.height = 32
        this.position = position
        this.color = color
        this.closed = closed
        this.id = id
    }
}