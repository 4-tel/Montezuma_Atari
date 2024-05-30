export class Collisionblock {
    position: any
    width: any
    height: any
    purpose: any
    constructor(position: any, height: number, purpose: any) {
        this.purpose = purpose
        this.position = position
        this.width = 8
        this.height = height

    }
    draw = () => {
        console.log("jeee");

    }
}
