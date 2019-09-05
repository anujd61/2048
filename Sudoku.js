var grid= [
	[0,0,0,2,6,0,7,0,1],
	[6,8,0,0,7,0,0,9,0],
	[1,9,0,0,0,4,5,0,0],
	[8,2,0,1,0,0,0,4,0],
	[0,0,4,6,0,2,9,0,0],
	[0,5,0,0,0,3,0,2,8],
	[0,0,9,3,0,0,0,7,4],
	[0,4,0,0,5,0,0,3,6],
	[7,0,3,0,1,8,0,0,0]
];




solvegrid(grid);

console.log(grid);
var col;
var row;
var num;
var i,j;
// Returns a boolean which indicates whether any assigned entry
// in the specified row matches the given number. 

function usedinrow(grid,row,num){

for(i=0;i<9;i++){

if(grid[row][i]===num){

return true;
 }
}
return false;
}

// Returns a boolean which indicates whether any assigned entry
// in the specified column matches the given number. 

function usedincol(grid,col,num){

for(i=0;i<9;i++){

if(grid[i][col]===num){
	return true;

}
	

}

return false;
}



// Returns a boolean which indicates whether any assigned entry
// within the specified 3x3 box matches the given number. 

function usedinbox(grid,rowfirst,colfirst,num){
for(i=rowfirst;i<rowfirst + 3;i++){
	for(j=colfirst;j<colfirst + 3;j++){

		if(grid[i][j]==num){

			return true;
		}

	}


}


return false;


}

// Returns a boolean which indicates whether it will be legal to assign
// num to the given row,col location.

function issafe(grid,row,col,num){

if((usedincol(grid,col,num) || usedinrow(grid,row,num) || usedinbox(grid,row-row%3,col-col%3,num)) == 1){

return false;
}

else{

	return true;
}


}

// Searches the grid to find an entry that is still unassigned. If
// found, the reference parameters row, col will be set the location
// that is unassigned, and true is returned. If no unassigned entries
// remain, false is returned. 

function unassigned(grid){
for(i=0;i<9;i++){
	for(j=0;j<9;j++){

		if(grid[i][j]==0){

			return [i,j];
		}

	} 


}
return true;
}


// Takes a partially filled-in grid and attempts to assign values to
// all unassigned locations in such a way to meet the requirements
// for Sudoku solution (non-duplication across rows, columns, and boxes) 

function solvegrid(grid){


if(unassigned(grid) === true){
return true;
}

let newrowcol=unassigned(grid)

let row=newrowcol[0];
let col=newrowcol[1];

for(let num=1;num<=9;num++){
	
if(issafe(grid,row,col,num)==1){

	grid[row][col]=num;
	const flag = solvegrid(grid);

if(flag){
	return true;
}	else {
		grid[row][col] = 0;

}
}




}



}