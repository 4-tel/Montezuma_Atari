export function playerAnimations(player: any, c: any) {
    if (player.keys_pressed.a == false && player.keys_pressed.d == false && player.up_the_ladder == false && player.up_the_rope == false && player.up_the_pipe == false && player.on_ground == true) {
        if (player.lastpress == "a") {
            c.drawImage(player.main, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
            player.animationframes = 0
        }
        if (player.lastpress == "d") {
            c.drawImage(player.mainleft, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
            player.animationframes = 0
        }
    }

    else if (player.up_the_ladder) {
        c.drawImage(player.playerladder, 16 * Math.floor(player.animationframes / 4), 0, 16, 20, player.player_position.x - 4, player.player_position.y - 16, 16, 20)
        if (player.keys_pressed.s || player.keys_pressed.w) {
            if (player.animationframes < 7) {
                player.animationframes++
            }
            else player.animationframes = 0
        }
    }
    else if (player.up_the_rope) {
        c.drawImage(player.playerrope, 16 * Math.floor(player.animationframes / 4), 0, 16, 20, player.player_position.x - 4, player.player_position.y - 16, 16, 20)
        if (player.keys_pressed.s || player.keys_pressed.w) {
            if (player.animationframes < 7) {
                player.animationframes++
            }
            else player.animationframes = 0
        }

    }
    else if (player.up_the_pipe) {
        c.drawImage(player.playerrope, 16 * Math.floor(player.animationframes / 4), 0, 16, 20, player.player_position.x - 4, player.player_position.y - 16, 16, 20)

    }
    else if (player.on_ground == false) {
        player.animationframes = 0
        if (player.lastpress == "a") {
            c.drawImage(player.playerjump, 16, 0, 16, 20, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
        }
        else if (player.lastpress == "d") {
            c.drawImage(player.playerjump, 0, 0, 16, 20, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
        }

    }
    else if (player.keys_pressed.a) {
        c.drawImage(player.left, 16 * Math.floor(player.animationframes / 3), 0, 16, 20, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
        if (player.animationframes < 11) {
            player.animationframes++
        }
        else {
            player.animationframes = 0
        }
    }
    else if (player.keys_pressed.d) {
        c.drawImage(player.right, 16 * Math.floor(player.animationframes / 3), 0, 16, 20, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
        if (player.animationframes < 11) {
            player.animationframes++
        }
        else {
            player.animationframes = 0
        }
    }

}
export function deathanimation(player: any, c: any) {
    console.log(player.deathtype);

    if (player.deathtype == "enemy") {
        c.drawImage(player.death1, 16 * Math.floor(player.deathframes / 8), 0, 16, 20, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
    }
    if (player.deathtype == "fire") {
        c.drawImage(player.death2, 16 * Math.floor(player.deathframes / 8), 0, 16, 20, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
    }
    if (player.deathtype == "fall") {
        c.drawImage(player.death3, 16 * Math.floor(player.deathframes / 8), 0, 16, 20, player.player_position.x - 2, player.player_position.y - 16, 16, 20)
    }
}