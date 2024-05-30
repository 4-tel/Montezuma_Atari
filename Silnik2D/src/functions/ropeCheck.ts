export function rope(player: any) {
    ropeOff(player)
    ropeCheck(player)
    if (player.up_the_rope) {
        stopCheck(player)
        goCheck(player)
        jumpCheck(player)

    }
}
function ropeOff(player: any) {
    let on_rope = false
    for (let i: number = 0; i < player.rope.length; i++) {
        const rope = player.rope[i]
        if (player.player_position.x >= rope.position.x &&
            player.player_position.x <= rope.position.x + rope.width &&
            player.player_position.y + player.height >= rope.position.y &&
            player.player_position.y + player.height <= rope.position.y + rope.height) {
            on_rope = true
            break
        }
    }
    if (on_rope == false && player.up_the_rope == true) {
        player.up_the_rope = false

    }
}
function ropeCheck(player: any) {
    for (let i: number = 0; i < player.rope.length; i++) {
        const rope = player.rope[i]
        if (player.player_position.x >= rope.position.x && player.player_position.x <= rope.position.x + rope.width &&
            player.player_position.y >= rope.position.y && player.player_position.y <= rope.position.y + rope.height) {
            player.up_the_rope = true
            player.player_position.x = rope.position.x
            break
        }
    }
    if (player.on_ground == true) {
        if (player.keys_pressed.s == true) {
            for (let i: number = 0; i < player.rope.length; i++) {
                const rope = player.rope[i]
                if (player.player_position.x >= rope.position.x && player.player_position.x <= rope.position.x + rope.width &&
                    player.player_position.y + player.height >= rope.position.y - 0.01 && player.player_position.y + player.height <= rope.position.y) {
                    player.up_the_rope = true
                    player.player_position.x = rope.position.x
                    player.keys_pressed.a = false
                    player.keys_pressed.d = false
                    break
                }
            }
        }
    }
}
function stopCheck(player: any) {
    if (player.keys_pressed.w == false && player.keys_pressed.s == false) {
        player.velocity.y = 0
        player.velocity.x = 0
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
function jumpCheck(player: any) {
    if ((player.keys_pressed.a == true || player.keys_pressed.d == true) && player.keys_pressed.space == true) {
        player.velocity.y = -4.5
        player.up_the_rope = false
        if (player.keys_pressed.a == true) {
            player.velocity.x = -3
        }
        else {
            player.player_position.x += 8
            player.velocity.x = 3
        }
    }
}