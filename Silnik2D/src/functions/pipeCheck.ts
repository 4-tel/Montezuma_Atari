export function pipe(player: any) {
    pipeOff(player)
    pipeCheck(player)
    if (player.up_the_pipe) {
        player.player_position.y += 2
        player.velocity.x = 0
        player.velocity.y = 0
    }
}
function pipeOff(player: any) {
    let on_pipe = false
    for (let i: number = 0; i < player.pipe.length; i++) {
        const pipe = player.pipe[i]
        if (player.player_position.x >= pipe.position.x &&
            player.player_position.x <= pipe.position.x + pipe.width &&
            player.player_position.y + player.height >= pipe.position.y - 0.01 &&
            player.player_position.y + player.height <= pipe.position.y + pipe.height) {
            on_pipe = true
            break
        }

    }

    if (on_pipe == false && player.up_the_pipe == true) {
        player.up_the_pipe = false
        player.player_position.y -= 1

    }
}
function pipeCheck(player: any) {
    if (player.on_ground == false) {
        for (let i: number = 0; i < player.pipe.length; i++) {
            const pipe = player.pipe[i]
            if (player.player_position.x >= pipe.position.x && player.player_position.x <= pipe.position.x + pipe.width &&
                player.player_position.y + player.height >= pipe.position.y && player.player_position.y <= pipe.position.y + pipe.height) {
                player.up_the_pipe = true
                player.player_position.x = pipe.position.x
                break
            }
        }
    }
}