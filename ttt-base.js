
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

///////////////////////////////////////////////////////////////////////////////////////////
// markSpace() is used by the user to update the board and display the move on the page
///////////////////////////////////////////////////////////////////////////////////////////
function markSpace()
{
	alert(sq+" is the current candidate to be marked on the board");
  document.getElementById('').style.backgroundImage='url("X.bmp")'; // specifies the image
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
