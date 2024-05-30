export function collisionCheckHorizontal(player: any) {

    for (let i: number = 0; i < player.collisionBlock.length; i++) {
        const collisionBlock = player.collisionBlock[i]

        if (player.player_position.x <= collisionBlock.position.x + collisionBlock.width &&
            player.player_position.x + player.width >= collisionBlock.position.x &&
            player.player_position.y + player.height >= collisionBlock.position.y &&
            player.player_position.y <= collisionBlock.position.y + collisionBlock.height
        ) {

            if (player.velocity.x < -1) {
                player.velocity.x = 0
                player.player_position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                break
            }
            if (player.velocity.x > 1) {
                player.velocity.x = 0

                player.player_position.x = collisionBlock.position.x - player.width - 0.01
                break
            }

        }

    }
}
export function collisionCheckVertical(player: any) {
    for (let i: number = 0; i < player.collisionBlock.length; i++) {
        const collisionBlock = player.collisionBlock[i]

        if (player.player_position.x <= collisionBlock.position.x + collisionBlock.width &&
            player.player_position.x + player.width >= collisionBlock.position.x &&
            player.player_position.y + player.height >= collisionBlock.position.y &&
            player.player_position.y <= collisionBlock.position.y + collisionBlock.height
        ) {

            if (player.velocity.y < 0) {
                player.velocity.y = 0
                player.player_position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                player.on_ground = true
                break
            }
            if (player.velocity.y > 0) {
                player.velocity.y = 0
                player.player_position.y = collisionBlock.position.y - player.height - 0.01
                player.on_ground = true

                break
            }

        }

    }

}