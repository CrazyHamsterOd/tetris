function GameArray() {
  this.array = new Array(20);
}

GameArray.prototype.clearArray = function () {
  for (let i = 0; i < this.array.length; i++) {
    this.array[i] = new Array(10);
    for (let j = 0; j < this.array[i].length; j++) {
      this.array[i][j] = 0;
    }
  }
}

GameArray.prototype.checkGameOver = function(){
  if(this.array[19].indexOf(1) === -1){
    return false;
  }else{
    return true;
  }
}

GameArray.prototype.showArrayInConsole = function () {
  this.array.forEach(element => {
    console.log(element.join(" "));
  });
}




