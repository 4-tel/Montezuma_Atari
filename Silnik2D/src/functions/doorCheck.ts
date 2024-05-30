import { wholelvl } from "../Engine";

export function doorcheck(player: any) {

    for (let i: number = 0; i < player.door.length; i++) {
        const door = player.door[i]
        if (player.player_position.x <= door.position[0] + door.width &&
            player.player_position.x + player.width >= door.position[0] &&
            player.player_position.y + player.height >= door.position[1] &&
            player.player_position.y <= door.position[1] + door.height
        ) {
            if (door.closed) {
                if (player.inventory.length != 0) {
                    for (let j = 0; j < player.inventory.length; j++) {
                        if (player.inventory[j].color == door.color) {
                            for (let v = 0; v < wholelvl.level.doors.length; v++) {
                                if (door.id == wholelvl.level.doors[v].id) {
                                    wholelvl.level.doors[v].closed = false
                                    door.closed = false
                                    player.inventory.splice(j, 1)
                                    break
                                }
                            }
                        }
                    }
                }
                if (door.closed) {
                    if (player.velocity.x < -1) {
                        player.velocity.x = 0
                        player.player_position.x = door.position[0] + door.width + 0.01
                    }
                    if (player.velocity.x > 1) {
                        player.velocity.x = 0

                        player.player_position.x = door.position[0] - player.width - 0.01
                    }
                }
            }

        }

    }
}