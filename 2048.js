var grid = [[0, 0, 0, 0],
[0, 0, 2, 0],
[0, 0, 0, 0],
[0, 0, 2, 0]];
var i, j, row, col = 0;

function generateNumbers() {
	i = Math.floor(Math.random() * grid.length);
	j = Math.floor(Math.random() * grid.length);

	if (grid[i][j] == 0) {

		grid[i][j] = 2;
	}
}

moveUp();

console.log(grid);

//generateNumbers();
//generateNumbers();
//console.log(grid);


function rotateBoard(array) {

	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push([]);
	};
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			newArray[j].push(array[i][j]);
		};
	};
	return newArray;

}
console.log(rotateBoard(grid);


function moveUp() {

	//merge 
	for (j = 0; j < 4; j++) {
		for (i = 1; i < 4; i++) {


			if (grid[i][j]) {
				row = i;

				while (row > 0) {
					if (grid[row - 1][j] == 0) {

						grid[row - 1][j] = grid[row][j];
						grid[row][j] = 0;
						row--;


					}

					else if (grid[row - 1][j] === grid[row][j]) {

						grid[row - 1][j] *= 2;
						grid[row][j] = 0;
						break;
					}
					else { break; }
				}



			}
		}

	}

}











function moveLeft() {


	rotateBoard();
	moveUp();
	rotateBoard();
	rotateBoard();

}



function moveRight() {

	rotateBoard();
	rotateBoard();
	rotateBoard();
	moveUp();
	rotateBoard();


}



function moveDown() {

	rotateBoard();
	rotateBoard();
	moveUp();
	rotateBoard();
	rotateBoard();


}
function gameOver(){
	// let gameOver = true;
	for(let i =0;i<4;i++){
		for(let j=0;j<4;j++){
			if(grid[i][j]==0){
				return false;
			}
		    if( i !== 3 && grid[i][j]==grid[i+1][j]){
			 return false;
		    }
		    if(j !==3 && grid[i][j]==grid[i][j+1]){
			 return false;
		    }	

		}
		
	}
	// console.log('Game over');
	return true;
	

}
console.log('Game over');
function gameWon(){
	for(let i =0;i<4;i++){
		for(let j=0;j<4;j++){
			if(grid[i][j]==2048){
				return true;
			}
		}
	}
	return false;		

}

