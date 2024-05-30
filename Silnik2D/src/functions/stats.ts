import { platform } from "os"
import { c, wholelvl } from "../Engine"

export function drawStats(player: any, ctx: any, hat: any, display: any, display2: any, canvas: any, wall: any) {
    drawscore(player.score, ctx, display, display2, canvas, player)
    drawlives(player.lives, ctx, hat)
    drawinventory(player.inventory, ctx, wall, player.score)

}
function drawlives(lives: number, ctx: any, hat: any) {
    for (let i = 0; i < lives; i++) {
        ctx.drawImage(hat, 8 + i * 15, 26, 15, 7)
    }
}
function drawinventory(inventory: any, ctx: any, wall: any, score: number) {
    if (inventory.length != 0) {
        // console.log(inventory);

        for (let i: number = 0; i < inventory.length; i++) {
            if (inventory[i].type == "key") {
                ctx.fillStyle = inventory[i].color
                ctx.fillRect(9 + 14 * i, 8, 14, 14)
                ctx.drawImage(wall.key, 9 + 14 * i, 8, 14, 14)

            }
            else if (inventory[i].type == "sword") {
                ctx.fillStyle = inventory[i].color
                ctx.fillRect(9 + 14 * i, 8, 14, 14)
                ctx.drawImage(wall.sword, 9 + 14 * i, 8, 14, 14)
            }
            else if (inventory[i].type == "torch") {
                ctx.fillStyle = inventory[i].color
                ctx.fillRect(9 + 14 * i, 8, 14, 14)
                ctx.drawImage(wall.torch, 9 + 14 * i, 8, 14, 14)
            }
            else if (inventory[i].type == "maracas") { }
        }
    }
}
function drawscore(score: number, ctx: any, display: any, display2: any, canvas: any, player: any) {
    ctx.fillStyle = wholelvl.level.color
    ctx.fillRect(0, 0, 91, 33)
    ctx.fillRect(canvas.width - 102, 0, 102, 33)
    ctx.drawImage(display, 0, 0, 91, 33)
    ctx.drawImage(display2, canvas.width - 102, 0, 102, 33)
    let scorestr = score.toString()
    console.log(scorestr.length);

    for (let i = scorestr.length - 1; i > -1; i--) {
        let j = scorestr.length - i - 1
        if (scorestr[i] == "0") {
            ctx.drawImage(player.numbers, 0, 0, 16, 16, 295 - 16 * j, 9, 16, 16)
        }
        if (scorestr[i] == "1") {
            ctx.drawImage(player.numbers, 16, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "2") {
            ctx.drawImage(player.numbers, 32, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "3") {
            ctx.drawImage(player.numbers, 48, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "4") {
            ctx.drawImage(player.numbers, 64, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "5") {
            ctx.drawImage(player.numbers, 80, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "6") {
            ctx.drawImage(player.numbers, 96, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "7") {
            ctx.drawImage(player.numbers, 112, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "8") {
            ctx.drawImage(player.numbers, 128, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
        if (scorestr[i] == "9") {
            ctx.drawImage(player.numbers, 146, 0, 16, 16, 295 - 16 * j, 9, 16, 16)

        }
    }
}