export function revive(player: any) {
    player.player_position.x = player.default_player_position.x
    player.player_position.y = player.default_player_position.y
    player.lives -= 1

}
export function enemyDie(player: any) {
    player.death = true
    player.deathtype = "enemy"
}
