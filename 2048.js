var grid = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];

var i, j, row,m,n, col = 0;


// update();


update();
// console.log(grid);
// moveDown();
// console.log(grid);

function update(){
document.getElementById("box1").innerHTML = grid[0][0];
document.getElementById("box2").innerHTML = grid[0][1];
document.getElementById("box3").innerHTML = grid[0][2];
document.getElementById("box4").innerHTML = grid[0][3];
document.getElementById("box5").innerHTML = grid[1][0];
document.getElementById("box6").innerHTML = grid[1][1];
document.getElementById("box7").innerHTML = grid[1][2];
document.getElementById("box8").innerHTML = grid[1][3];
document.getElementById("box9").innerHTML = grid[2][0];
document.getElementById("box10").innerHTML = grid[2][1];
document.getElementById("box11").innerHTML = grid[2][2];
document.getElementById("box12").innerHTML = grid[2][3];
document.getElementById("box13").innerHTML = grid[3][0];
document.getElementById("box14").innerHTML = grid[3][1];
document.getElementById("box15").innerHTML = grid[3][2];
document.getElementById("box16").innerHTML = grid[3][3];
}
function generateNumbers() {
	var k = 1;
	while (k && gridFull()) {
		i = Math.floor(Math.random() * grid.length);
		j = Math.floor(Math.random() * grid.length);

		if (grid[i][j] == 0) {

			grid[i][j] = 2;
			k = 0;
		}
	}
}

function gridFull(){

	for(m=0;m<4;m++){
		for(n=0;n<4;n++){
			if(grid[m][n]==0)
			return true;
	}
		}

	
	return false;
}





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
generateNumbers();
generateNumbers();
}



function rotate(matrix) {
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

	return true;



}

document.onkeydown = function (event) {

	if (event.keyCode === 38 || event.keyCode === 87) {
		moveUp();
		
	} else if (event.keyCode === 39 || event.keyCode === 68) {
		moveLeft();
		
	} else if (event.keyCode === 40 || event.keyCode === 83) {
		moveDown();
		
	} else if (event.keyCode === 37 || event.keyCode === 65) {
		moveRight();
		
	}
update();
if(gameOver()){
	alert("Game Over");
}
update();

}
