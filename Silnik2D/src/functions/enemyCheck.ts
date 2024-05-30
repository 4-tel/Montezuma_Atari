import { enemyDie } from "./die"
import { wholelvl } from "../Engine"

export function enemyCheckHorizontal(player: any) {

    for (let i: number = 0; i < player.enemy.length; i++) {
        const enemy = player.enemy[i]
        let death = true

        if (player.player_position.x <= enemy.position[0] + enemy.width &&
            player.player_position.x + player.width >= enemy.position[0] &&
            player.player_position.y + player.height >= enemy.position[1] &&
            player.player_position.y <= enemy.position[1] + enemy.height
        ) {
            for (let j = 0; j < wholelvl.level.enemies.length; j++) {
                if (wholelvl.level.enemies[j].id == enemy.id) {
                    wholelvl.level.enemies.splice(j, 1)
                }
            }
            for (let j = 0; j < player.inventory.length; j++) {
                if (player.inventory[j].type == "sword") {
                    player.score += 1000
                    death = false
                }
            }
            if (death) {
                enemyDie(player)
            }

        }

    }
}
export function enemyCheckVertical(player: any) {
    for (let i: number = 0; i < player.enemy.length; i++) {
        const enemy = player.enemy[i]
        let death = true

        if (player.player_position.x <= enemy.position[0] + enemy.width &&
            player.player_position.x + player.width >= enemy.position[0] &&
            player.player_position.y + player.height >= enemy.position[1] &&
            player.player_position.y <= enemy.position[1] + enemy.height
        ) {
            for (let j = 0; j < wholelvl.level.enemies.length; j++) {
                if (wholelvl.level.enemies[j].id == enemy.id) {
                    wholelvl.level.enemies.splice(j, 1)
                }
            }
            for (let j = 0; j < player.inventory.length; j++) {
                if (player.inventory[j].type == "sword") {
                    player.inventory.splice(j, 1)
                    death = false
                }
            }
            if (death) {
                enemyDie(player)
            }

        }

    }

}