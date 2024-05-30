export function semicollisionCheckHorizontal(player: any) {

    for (let i: number = 0; i < player.semicollisionBlock.length; i++) {
        const semicollisionBlock = player.semicollisionBlock[i]

        if (player.player_position.x <= semicollisionBlock.position.x + semicollisionBlock.width &&
            player.player_position.x + player.width >= semicollisionBlock.position.x &&
            player.player_position.y + player.height >= semicollisionBlock.position.y &&
            player.player_position.y <= semicollisionBlock.position.y + semicollisionBlock.height
        ) {

            if (player.velocity.x < -1) {
                player.velocity.x = 0
                player.player_position.x = semicollisionBlock.position.x + semicollisionBlock.width + 0.01
                break
            }
            if (player.velocity.x > 1) {
                player.velocity.x = 0

                player.player_position.x = semicollisionBlock.position.x - player.width - 0.01
                break
            }

        }

    }
}
export function semicollisionCheckVertical(player: any) {
    for (let i: number = 0; i < player.semicollisionBlock.length; i++) {
        const semicollisionBlock = player.semicollisionBlock[i]

        if (player.player_position.x <= semicollisionBlock.position.x + semicollisionBlock.width &&
            player.player_position.x + player.width >= semicollisionBlock.position.x &&
            player.player_position.y + player.height >= semicollisionBlock.position.y &&
            player.player_position.y <= semicollisionBlock.position.y + semicollisionBlock.height
        ) {

            if (player.velocity.y < 0) {
                player.velocity.y = 0
                player.player_position.y = semicollisionBlock.position.y + semicollisionBlock.height + 0.01
                player.on_ground = true
                break
            }
            if (player.velocity.y > 0) {
                player.player_position.y = semicollisionBlock.position.y - player.height - 0.01
                player.velocity.y = 0
                player.on_ground = true

                break
            }

        }

    }

}