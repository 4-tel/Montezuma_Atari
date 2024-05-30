
export function ladder(player: any) {
    ladderOff(player)
    ladderCheck(player)
    if (player.up_the_ladder == true) {
        goCheck(player)
        stopCheck(player)
    }

}

function ladderCheck(player: any) {
    if (player.on_ground == true) {
        if (player.keys_pressed.w == true) {
            for (let i: number = 0; i < player.ladder.length; i++) {
                const ladder = player.ladder[i]
                if (player.player_position.x >= ladder.position.x && player.player_position.x <= ladder.position.x + ladder.width &&
                    player.player_position.y >= ladder.position.y && player.player_position.y <= ladder.position.y + ladder.height) {
                    player.up_the_ladder = true
                    player.player_position.x = Math.floor(ladder.position.x + ladder.width / 2)
                    break
                }
            }
        }
        else if (player.keys_pressed.s == true) {
            for (let i: number = 0; i < player.ladder.length; i++) {
                const ladder = player.ladder[i]
                if (player.player_position.x >= ladder.position.x && player.player_position.x <= ladder.position.x + ladder.width &&
                    player.player_position.y + player.height >= ladder.position.y - 0.01 && player.player_position.y + player.height <= ladder.position.y) {
                    player.up_the_ladder = true
                    player.player_position.x = Math.floor(ladder.position.x + ladder.width / 2)
                    break
                }
            }
        }
    }
}
function goCheck(player: any) {
    if (player.keys_pressed.w == true) {
        player.velocity.y = -2
        player.velocity.x = 0
    }
    else if (player.keys_pressed.s == true) {
        player.velocity.y = 2
        player.velocity.x = 0
    }
}
function stopCheck(player: any) {
    if (player.keys_pressed.w == false && player.keys_pressed.s == false) {
        player.velocity.y = 0
    }
}
function ladderOff(player: any) {
    let on_ladder = false
    for (let i: number = 0; i < player.ladder.length; i++) {
        const ladder = player.ladder[i]
        if (player.player_position.x >= ladder.position.x &&
            player.player_position.x <= ladder.position.x + ladder.width &&
            player.player_position.y + player.height >= ladder.position.y - 0.01 &&
            player.player_position.y + player.height <= ladder.position.y + ladder.height) {
            on_ladder = true
            break
        }
    }
    if (on_ladder == false && player.up_the_ladder == true) {

        player.up_the_ladder = false
        player.player_position.y -= 2

    }
}
