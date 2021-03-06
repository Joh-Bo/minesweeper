class Game{
	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
	}
	playMove(rowIndex, columnIndex){
		this._board.flipTile(rowIndex, columnIndex);
		if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
			console.log('Game Over');
			this._board.print();
		}else if(this._board.hasSafeTiles()){
			console.log(this._board.hasSafeTiles());
			console.log('You have won!');
		}else{
			console.log('Current Board:');
			this._board.print();
		}

	}
}


class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows * numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);

	}

	get playerBoard(){
		return this._playerBoard;
	}

	flipTile(rowIndex, columnIndex, getNumberOfNeighborBombs) {
		//this._rowIndex = rowIndex;
		//this._columnIndex = columnIndex;
		//this._getNumberOfNeighborBombs = getNumberOfNeighborBombs;

 	if(this._playerBoard[rowIndex][columnIndex] !== ' '){
 		console.log('This tile has already been flipped!');
 		return; //a revoir (27)
 	} else if(this._bombBoard[rowIndex][columnIndex] === 'B'){
 		this._playerBoard[rowIndex][columnIndex] = 'B';
 	}else{
 		this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
 		}
 		this._numberOfTiles--;
 	}

 	

getNumberOfNeighborBombs(rowIndex, columnIndex) {
		this._rowIndex = rowIndex;
		this._columnIndex = columnIndex;
 	const neighborOffsets = [ [-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1] ];
 	const numberOfRows = this._bombBoard.length;
 	const numberOfColumns = this._bombBoard[0].length;
 	let numberOfBombs = 0;

 	neighborOffsets.forEach(offset =>{
 		const neighborRowIndex = rowIndex + offset[0];
 		const neighborColumnIndex = columnIndex + offset[1];
 		//a revoir nested if
 		if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
 			if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
 				numberOfBombs++;
 			}
 		}
 		
 	});
 	return numberOfBombs;
 }

 

 	hasSafeTiles() {
 		if(this._numberOfTiles !== this._numberOfBombs){
 			return true;
 		}else{
 			return false;
 		}
 		
 	}
 print(board) {
	console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
	//return this._playerBoard;
}

static generatePlayerBoard (numberOfRows, numberOfColumns){ 
	let board = [];
	for(let plRow = 0; plRow < numberOfRows; plRow++){
		let row = [];
		for(let plColumn = 0; plColumn < numberOfColumns; plColumn++){
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};
//generatePlayerBoard(8, 8);

static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
	let board = [];
	for(let plRow = 0; plRow < numberOfRows; plRow++){
		let row = [];
		for(let plColumn = 0; plColumn < numberOfColumns; plColumn++){
			row.push(null);
		}
		board.push(row);
	}
	let numberOfBombsPlaced = 0;
	while(numberOfBombsPlaced < numberOfBombs){
		//return numberOfBombs;
		//The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow
	let randomRowIndex = Math.floor(Math.random() * numberOfRows);
	let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

	if(board[randomRowIndex][randomColumnIndex] !== 'B'){
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;
	 }
	// board[randomRowIndex][randomColumnIndex] = 'B';
		//numberOfBombsPlaced++;
	}
return board;
}

}


const g = new Game(3, 3, 3);
g.playMove(1, 2);

















