import { wholelvl } from "../Engine";

export function checkForItems(player: any) {

    for (let i: number = 0; i < player.item.length; i++) {
        const item = player.item[i]

        if (player.player_position.x <= item.position[0] + item.width &&
            player.player_position.x + player.width >= item.position[0] &&
            player.player_position.y + player.height >= item.position[1] &&
            player.player_position.y <= item.position[1] + item.height
        ) {
            for (let j: number = 0; j < wholelvl.level.items.length; j++) {
                if (item.id == wholelvl.level.items[j].id) {
                    if (player.inventory.length < 5) {
                        console.log(wholelvl.level.items[j].type);
                        player.inventory.push(wholelvl.level.items[j])
                        player.score += 50
                        wholelvl.level.items.splice(j, 1)
                    }
                }
            }
        }

    }
}