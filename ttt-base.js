
// These variables will be used to form the internal board and can be used to decide
// if there are three in a row. Initially they are all set to "".
// internal representation of square 1: will be set to "X" or "O" or ""
var sq = "";		// used to identify which square is the current candidate to be marked
var moves = "9";	// used to record the number of moves remaining (9 down to 0)
var moveX = true;	// true when it is X's move and false when it is O's move
var winner = false;	// true when there is a winner (someone has 3 in a row)
var theWinner = "CAT";	// the identity of the winner of the game: "X" or "O" or "CAT"
	// set initial values for variables and game html elements
var board = [
    [sq1,sq2,sq3],
    [sq4,sq5,sq6],	// internal representation of squares/board : will be set to "X" or "O" or ""
    [sq7,sq8,sq9]
];

///////////////////////////////////////////////////////////////////////////////////////////
// markSpace() is used by the user to update the board and display the move on the page
///////////////////////////////////////////////////////////////////////////////////////////
function markSpace1()
{

		if (moveX == true){
    document.getElementById('sq1').style.backgroundImage='url("X.bmp")'; // specifies the image

		moveX = !moveX;
	}
		else {
		document.getElementById('sq1').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace2()
{

		if (moveX == true){
    document.getElementById('sq2').style.backgroundImage='url("X.bmp")'; // specifies the image

		moveX = !moveX;
	}
		else {
		document.getElementById('sq2').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace3()
{

		if (moveX == true){
    document.getElementById('sq3').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('sq3').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace4()
{

		if (moveX == true){
    document.getElementById('sq4').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('sq4').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace5()
{

		if (moveX == true){
    document.getElementById('sq5').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('sq5').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace6()
{

		if (moveX == true){
    document.getElementById('sq6').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('sq6').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace7()
{

		if (moveX == true){
    document.getElementById('sq7').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('sq7').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace8()
{

		if (moveX == true){
    document.getElementById('sq8').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('sq8').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
}
function markSpace9()
{

		if (moveX == true){
    document.getElementById('sq9').style.backgroundImage='url("X.bmp")'; // specifies the image
		moveX = !moveX;
	}
		else {
		document.getElementById('sq9').style.backgroundImage='url("O.bmp")'; // specifies the image
		moveX = !moveX;
	}
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
