export class Item {
    //typy: 
    //sword - miecz
    //light - pochodnia 
    //key - klucz
    //maracas - marakas
    width: number
    height: number
    position: any
    type: string
    id: number
    color: string
    constructor(position: any, type: string, id: number, color: string) {
        this.id = id
        this.width = 14
        this.height = 14
        this.position = position
        this.type = type
        this.color = color
    }
}