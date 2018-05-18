
//Scores//
targetScore = 0;
yourScore = 0;

//Wins and Losses//
numWins = 0;
numLosses = 0;

//Crystal Object Variable//

var crystal = {
	gold:
	{
		name: "Gold",
		points: 0
	},
	diamond:
	{
		name: "Diamond",
		points: 0
	},
	amethyst:
	{
		name: "Amethyst",
		points: 0
	},
	rockCrystal:
	{
		name: "RockCrystal",
		points: 0
	}
};


//Processes//

/* 1. Start Game
	- Reset score to zero.
	- Randomly generate target score.
	- Randomly generate crystal values.
	- Reset wins and losses for session.
	*/

//Setting up random number generation//

var randomNum = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



var startGame = function() {

//Resets your score to 0 when starting the game//
	 yourScore = 0;

//Randomly generates target score//
	 targetScore = randomNum(24, 40);

//Randomly generates crystal values//
crystal.gold.points = randomNum(1,12);
crystal.diamond.points = randomNum(1,12);
crystal.amethyst.points = randomNum(1,12);
crystal.rockCrystal.points = randomNum(1,12);

//Inputs your target score info into html on pages//

$("#yourScore").html(yourScore);
$("#targetScore").html(targetScore);

//Testing//
console.log("----------------------------------")
console.log("Target Score:" + targetScore);
console.log("Gold:" + crystal.gold.points + 
			"| Diamond:" + crystal.diamond.points +
			"| Amethyst:" + crystal.amethyst.points +
			"| RockCrystal:" + crystal.rockCrystal.points);
console.log("----------------------------------")

}

//Your Score//
var addPoints = function(crystal){

	yourScore = crystal.points + yourScore;

//Inputs your score info into html on page//

	$("#yourScore").html(yourScore);

//Determining if I was a winner or looser//

WorL();	

	//Testing//
	console.log("-------------------------------")
	console.log("Your Score: " + yourScore);

}

//Winner or Loser?//

var WorL = function(){

	if (yourScore == targetScore){
		alert("YOU WIN!!!!");
		console.log("YOU WIN!!!");

		//Add Win to Counter//
		numWins++;

		//Update Wins//
		$("#numWins").html(numWins);

		startGame();
	}

	else if (yourScore>targetScore){
		alert("SORRY, YOU LOSE. BETTER LUCK NEXT TIME");
		console.log("SORRY, YOU LOSE. BETTER LUCK NEXT TIME");

		//Add Loss to Counter//
		numLosses++;

		//Update Losses//
		$("#numLosses").html(numLosses);

		startGame();
	}
};


startGame();

	$("#gold").click(function(){
		addPoints(crystal.gold);
	
	});

	$("#diamond").click(function(){
		addPoints(crystal.diamond);
	});

	$("#amethyst").click(function(){
		addPoints(crystal.amethyst);
	});

	$("#rock-crystal").click(function(){
		addPoints(crystal.rockCrystal);
	});
