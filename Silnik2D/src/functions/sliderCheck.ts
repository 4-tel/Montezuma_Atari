export function slider(player: any) {
    sliderOff()
    if (slidercheck(player)) {
        player.slide = true
    }
    else {
        player.slide = false
    }
}
function sliderOff() {

}
function slidercheck(player: any) {
    for (let i: number = 0; i < player.slider.length; i++) {
        const slider = player.slider[i]
        if (player.player_position.x + player.width + 0.01 >= slider.position.x && player.player_position.x <= slider.position.x + slider.width &&
            player.player_position.y + player.height + 0.01 >= slider.position.y && player.player_position.y <= slider.position.y + slider.height) {
            return true
        }
    }
}