const playerCredits = document.querySelector(".player-credits");
const computerCredits = document.querySelector(".computer-credits");

// buttons
const btnThrow = document.querySelector(".throw");
const btnHigh = document.querySelector(".btn-high");
const btnLow = document.querySelector(".btn-low");

// variables
let randomComputer = 0;
let randomPlayer = 0;
let higherLower = "";
let playerScore = 0;
let computerScore = 0;

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Geeft een willekeurig getal tussen 1 en 6 terug
function getRandomNumber() {
	return getRandomIntInclusive(1, 6);
}

// Gooit een dobbelsteen voor de computer
btnThrow.addEventListener("click", (e) => {
	randomComputer = getRandomNumber();
	console.log("randomComputer: ", randomComputer);
});

// Speler verwacht hoger te gooien
btnHigh.addEventListener("click", (e) => {
	higherLower = "hoger";
	randomPlayer = getRandomNumber();
	console.log("randomPlayer: ", randomPlayer);
	checkwin();
});

// Speler verwacht lager te gooien
btnLow.addEventListener("click", (e) => {
	higherLower = "lager";
	randomPlayer = getRandomNumber();
	console.log("randomPlayer: ", randomPlayer);
	checkwin();
});

// Bepaalt wie gewonnen heeeft
function checkwin() {
	// als speler hoger heeft geklikt
	if (higherLower === "hoger") {
		// als speler hoger heeft gegooid
		if (randomPlayer > randomComputer) {
			// speler heeft gewonnen
			playerScore += 1;
			computerScore -= 1;
		} // als speler lager heeft gegooid
		else if (randomPlayer < randomComputer) {
			// speler heeft verloren
			playerScore -= 1;
			computerScore += 1;
		} else {
			// gelijkspel
			console.log("Gelijkspel");
		}
	} // als speler lager heeft geklikt
	else if (higherLower === "lager") {
		// Als speler lager heeft gegooid
		if (randomPlayer < randomComputer) {
			// speler heeft gewonnen
			playerScore += 1;
			computerScore -= 1;
		} // als speler hoger heeft gegooid
		else if (randomPlayer > randomComputer) {
			// speler heeft verloren
			playerScore -= 1;
			computerScore += 1;
		} else {
			// gelijkspel
			console.log("Gelijkspel");
		}
	} else {
		// speler heeft niet op hoger/lager geklikt
	}

	playerCredits.textContent = playerScore;
	computerCredits.textContent = computerScore;
}
