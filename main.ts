function updateScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + Player_A)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + Player_B)
}
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let Ties = 0
let Player_A = 0
let Player_B = 0
let Rounds = 0
OLED.init(128, 64)
OLED.writeStringNewLine("                                                         UwU")
Rounds = 0
Player_B = 0
Player_A = 0
Ties = 0
basic.pause(2000)
updateScoreboard()
