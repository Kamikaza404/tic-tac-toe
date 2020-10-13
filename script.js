let gameText = document.getElementById("state");
let button = document.getElementById("restart");

let cells = Array(9);
let state; // 0 = finished; 1 = X turn; 2 = O turn


// Something something whatever
function drawField() {
	for (let i = 0; i < 9; i++) {
		document.getElementById(String(i)).textContent = cells[i];
	}
}

function restartGame(meme) {
	cells.fill(meme);
	gameText.textContent = "X turn";
	state = 1;
	drawField();
}


// Check functions
function checkForWin() {
	let winner;
	let gameInProgress;

	function check(i1, i2, i3) {
		if (i1 === "X" && i2 === "X" && i3 === "X") {
			winner = "X wins!";
		} else if (i1 === "O" && i2 === "O" && i3 === "O") {
			winner = "O wins!";
		} else if (i1 === "_" || i2 === "_" || i3 === "_") {
			gameInProgress = true;
		}
	}

	check(cells[0], cells[1], cells[2]);
	check(cells[0], cells[3], cells[6]);
	check(cells[0], cells[4], cells[8]);
	check(cells[1], cells[4], cells[7]);
	check(cells[2], cells[5], cells[8]);
	check(cells[2], cells[4], cells[6]);
	check(cells[3], cells[4], cells[5]);
	check(cells[6], cells[7], cells[8]);

	if (winner || !gameInProgress) {
		state = 0;
		gameText.textContent = winner ? winner : "Draw";
	} else {
		gameText.textContent = state === 1 ? "X turn" : "O turn";
	}
}


// Event listeners
button.onclick = function() {
	restartGame("_");
}

for (let i = 0; i < 9; i++) {
	document.getElementById(String(i)).onclick = function() {
		if (state === 1 && this.textContent === "_") {
			// X turn
			cells[this.id] = "X";
			this.textContent = "X";
			state = 2;
		} else if (state === 2 && this.textContent === "_") {
			// O turn
			cells[this.id] = "O";
			this.textContent = "O";
			state = 1;
		} else {
			// Game finished
			alert("NO STUPID, IT DOESN'T WORK LIKE THAT");
		}
		checkForWin();
	}
}


// START THE GAME NOW!
restartGame("_");
