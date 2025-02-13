const total = document.getElementById("total")

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
