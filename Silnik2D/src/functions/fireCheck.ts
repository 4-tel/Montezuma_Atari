export function burn(player: any) {

    for (let i: number = 0; i < player.flame.length; i++) {
        const flame = player.flame[i]

        if (player.player_position.x <= flame.position.x + flame.width &&
            player.player_position.x + player.width >= flame.position.x &&
            player.player_position.y + player.height >= flame.position.y &&
            player.player_position.y <= flame.position.y + flame.height
        ) {

            player.death = true
            player.deathtype = "fire"
        }
    }
}
