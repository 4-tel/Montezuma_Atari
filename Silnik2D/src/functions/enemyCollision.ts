export function enemyCollision(enemy: any, collisionBlock: any, semicollisionBlock: any, door: any) {
    let noblock = true
    for (let i: number = 0; i < collisionBlock.length; i++) {
        const collision = collisionBlock[i]
        if ((enemy.position[0] <= collision.position.x + collision.width &&
            enemy.position[0] + enemy.width >= collision.position.x &&
            enemy.position[1] + enemy.height > collision.position.y &&
            enemy.position[1] < collision.position.y + collision.height)) {
            return true
        }
        else if (
            enemy.position[0] <= collision.position.x + collision.width &&
            enemy.position[0] + enemy.width >= collision.position.x &&
            enemy.position[1] + enemy.height >= collision.position.y &&
            enemy.position[1] <= collision.position.y + collision.height) {
            noblock = false
        }

    }
    if (noblock) {
        return true
    }
}