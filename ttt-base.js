
// These variables will be used to form the internal board and can be used to decide
// if there are three in a row. Initially they are all set to "".
var sq1 = "";	// internal representation of square 1: will be set to "X" or "O" or ""
var sq2 = "";	// internal representation of square 2: will be set to "X" or "O" or ""
var sq3 = "";	// internal representation of square 3: will be set to "X" or "O" or ""
var sq4 = "";	// internal representation of square 4: will be set to "X" or "O" or ""
var sq5 = "";	// internal representation of square 5: will be set to "X" or "O" or ""
var sq6 = "";	// internal representation of square 6: will be set to "X" or "O" or ""
var sq7 = "";	// internal representation of square 7: will be set to "X" or "O" or ""
var sq8 = "";	// internal representation of square 8: will be set to "X" or "O" or ""
var sq9 = "";	// internal representation of square 9: will be set to "X" or "O" or ""
var sq = "";		// used to identify which square is the current candidate to be marked
var moves = "9";	// used to record the number of moves remaining (9 down to 0)
var moveX = true;	// true when it is X's move and false when it is O's move
var winner = false;	// true when there is a winner (someone has 3 in a row)
var theWinner = "CAT";	// the identity of the winner of the game: "X" or "O" or "CAT"
	// set initial values for variables and game html elements
var board = [
    [sq1, sq2, sq3],
    [sq4, sq5, sq6],
    [sq7, sq8, sq9]
];
///////////////////////////////////////////////////////////////////////////////////////////
// markSpace() is used by the user to update the board and display the move on the page
///////////////////////////////////////////////////////////////////////////////////////////
sq1.addEventListener('click', (e) => {            }, false);
sq2.addEventListener('click', (e) => {            }, false);
sq3.addEventListener('click', (e) => {            }, false);
sq4.addEventListener('click', (e) => {            }, false);//all add a listener to (e)
sq5.addEventListener('click', (e) => {            }, false);
sq6.addEventListener('click', (e) => {            }, false);
sq7.addEventListener('click', (e) => {            }, false);
sq8.addEventListener('click', (e) => {            }, false);
sq9.addEventListener('click', (e) => {            }, false);

function markSpace()
{

		if (moveX == true){
    document.getElementById('').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
		}
}
		var i;
		for (i = 0; i <9; i++) {
		board[1] += " ";
}

///////////////////////////////////////////////////////////////////////////////////////////
// reset() is used to set all the variables to their initial values and to clear the board
// on the screen
///////////////////////////////////////////////////////////////////////////////////////////
function reset()
{
	alert("The system is to be reset to start a new game");
	location.reload()
}
