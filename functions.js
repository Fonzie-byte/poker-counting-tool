let names = [
	"Jennifer",
	"Illiad",
	"Helena",
	"Geralt",
	"Farida",
	"Emile",
	"Dahlia",
	"Chris",
	"Bob",
	"Anna",
]

const total = document.getElementById("total")
const playerArea = document.getElementById("player-area")

function addPlayer(startingBet) {
	const name = names.pop();
	const id = name[0].toLowerCase()
	// startingBet = Math.floor(Math.random() * 30) + 20

	playerArea.innerHTML += '<tr><td><label for=' + id + '>' + name + '</label></td><td><input id=' + id + ' type=number value=' + startingBet + ' disabled></td><td><input class=current type=number min=0 value=0 onfocus="this.oldvalue = this.value" onchange="adjustValues(this, ' + id + ')"></td><td><button onclick="assignBet(' + id + ')">Won</button></td></tr>'
}

function adjustValues(sender, target) {
	const difference = sender.value - sender.oldvalue

	target.value -= difference

	total.value = parseInt(total.value) + difference
}

function assignBet(target) {
	target.value = parseInt(target.value) + parseInt(total.value)

	const currentBets = document.getElementsByClassName("current")
	for (currentBet of currentBets)
		currentBet.value = 0
	total.value = 0
}
