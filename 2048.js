var grid = [
	[0, 0, 0, 0],
	[0, 0, 2, 0],
	[0, 0, 0, 0],
	[0, 0, 2, 0]
];

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



var rotate = function (matrix) {
	// Copy the original matrix
	var origMatrix = matrix.slice();
	for (var i = 0; i < matrix.length; i++) {
		// Map each row entry to its rotated value
		var row = matrix[i].map(function (x, j) {
			var k = (matrix.length - 1) - j;
			return origMatrix[k][i];
		});
		matrix[i] = row;
	}
	return matrix;
};
console.log(rotate(grid));

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
function gameOver() {
	// let gameOver = true;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (grid[i][j] == 0) {
				return false;
			}
			if (i !== 3 && grid[i][j] == grid[i + 1][j]) {
				return false;
			}
			if (j !== 3 && grid[i][j] == grid[i][j + 1]) {
				return false;
			}

		}

	}
	// console.log('Game over');
	return true;


}
console.log('Game over');
function gameWon() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (grid[i][j] == 2048) {
				return true;
			}
		}
	}
	return false;

}


