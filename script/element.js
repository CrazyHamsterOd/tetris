function Element(x, y) {
  this.x = x;
  this.y = y;
}

Element.prototype.addElement = function(array){
  this.x = 0;
  this.y = 4;

  array[0][4] = 1;
  array[0][5] = 1;
  array[1][4] = 1;
  array[1][5] = 1;
}

Element.prototype.checkForMoveElementDown = function(array){
  return (array[this.x+2][this.y] === 0 && array[this.x+2][this.y+1] === 0);
}

Element.prototype.moveDown = function(array){
  if(this.checkForMoveElementDown(array)){
    array[this.x][this.y] = 0;
    array[this.x][this.y+1] = 0;
    array[this.x+2][this.y] = 1;
    array[this.x+2][this.y+1] = 1;
    this.x += 1;
  }
}

Element.prototype.checkForMoveElement = function(array, direction){
  if (direction === "left") {
    return array[this.x][this.y - 1] === 0;
  } else if (direction === "right") {
    return array[this.x][this.y + 2] === 0;
  }
}

Element.prototype.moveElement = function (array, direction) {
  if (direction === "left") {
    array[x][y+1] = 0;
    array[x+1][y+1] = 0;
    array[x][y-1] = 1;
    array[x+1][y-1] = 1;
  } else if (direction === "right") {
    array[x][y] = 0;
    array[x+1][y] = 0;
    array[x][y+2] = 1;
    array[x+1][y+2] = 1;
  }  
}

//addEventListener("keydown", checkForMoveElement);