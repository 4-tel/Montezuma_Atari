import { canvas, wholelvl, start, lvl1_map } from '../Engine'
import { Wall } from '../Klasy/Wall'
export function changeRoom(player: any) {
    checkUp(player)
    checkDown(player)
    checkRight(player)
    checkLeft(player)
}
function checkUp(player: any) {
    if (player.player_position.y < 0) {
        player.room_position[1] -= 1
        wholelvl.level = lvl1_map[player.room_position[1]][player.room_position[0]]

        player.player_position.y = canvas.height - player.height
        player.player_position.x = canvas.width / 2
        player.default_player_position = {
            x: canvas.width / 2 - 5,
            y: canvas.height - player.height
        }
    }
}
function checkDown(player: any) {
    if (player.player_position.y > canvas.height - player.height) {
        player.room_position[1] += 1
        wholelvl.level = lvl1_map[player.room_position[1]][player.room_position[0]]
        player.player_position.x = canvas.width / 2
        player.player_position.y = 0
        player.default_player_position = {
            x: canvas.width / 2 - 5,
            y: 10
        }
    }
}
function checkRight(player: any) {
    if (player.player_position.x > canvas.width - player.width) {
        player.room_position[0] += 1
        wholelvl.level = lvl1_map[player.room_position[1]][player.room_position[0]]
        player.player_position.x = 0
        player.default_player_position = {
            x: 0,
            y: player.player_position.y
        }
    }
}
function checkLeft(player: any) {
    if (player.player_position.x < 0) {
        player.room_position[0] -= 1
        wholelvl.level = lvl1_map[player.room_position[1]][player.room_position[0]]
        player.player_position.x = canvas.width - player.width
        player.default_player_position = {
            x: canvas.width - player.width,
            y: player.player_position.y
        }
    }
}
