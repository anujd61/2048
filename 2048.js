var grid = [
	[0, 0, 0, 0],
	[0, 0, 2, 0],
	[0, 0, 0, 0],
	[0, 0, 2, 0]
];

var i, j, row, col = 0;



// generateNumbers();
// generateNumbers();
// console.log(grid);
// moveDown();
// console.log(grid);

function generateNumbers() {
	var k=1;
	while(k){
	i = Math.floor(Math.random() * grid.length);
	j = Math.floor(Math.random() * grid.length);

	if (grid[i][j] == 0) {

		grid[i][j] = 2;
		k=0;
	}
}}




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



function rotate(matrix)  {
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


function moveLeft() {


	rotate(grid);
	moveUp();
	rotate(grid);
	rotate(grid);
	rotate(grid);
}



function moveRight() {

	rotate(grid);
	rotate(grid);
	rotate(grid);
	moveUp();
	rotate(grid);

}



function moveDown() {

	rotate(grid);
	rotate(grid);
	moveUp();
	rotate(grid);
	rotate(grid);

}
function gameOver() {
	// let gameOver = true;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {

			if (grid[i][j] == 2048) {
				return true;
			}
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

	 console.log("You lost :(");



}
// console.log('Game over');


// function gameWon() {
// 	for (let i = 0; i < 4; i++) {
// 		for (let j = 0; j < 4; j++) {
// 			if (grid[i][j] == 2048) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;

// }