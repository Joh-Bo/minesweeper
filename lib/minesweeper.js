'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
	var board = [];
	for (var plRow = 0; plRow < numberOfRows; plRow++) {
		var row = [];
		for (var plColumn = 0; plColumn < numberOfColumns; plColumn++) {
			row.push(' ');
		}
		board.push(row);
	}
	console.log(board);
};
//generatePlayerBoard(8, 8);

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
	var board = [];
	for (var plRow = 0; plRow < numberOfRows; plRow++) {
		var row = [];
		for (var plColumn = 0; plColumn < numberOfColumns; plColumn++) {
			row.push(null);
		}
		board.push(row);
	}
	var numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced < numberOfBombs) {
		//return numberOfBombs;
		//The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow
		var randomRowIndex = Math.floor(Math.random() * numberOfRows);
		var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;
	}
	return board;
};

var printBoard = function printBoard(board) {
	console.log(board.map(function (row) {
		return row.join(' | ');
	}).join('\n'));
};
var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);