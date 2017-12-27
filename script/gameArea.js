let parentElem = document.getElementById("gameBody");


function GameArea() {

}

GameArea.prototype.createAndShowGameArea = function (array) {

  let table = document.createElement("table");
  //table.style = "border: 1px solid black;";
  parentElem.appendChild(table);

  for (let i = 0; i < array.length; i++) {
    let tr = document.createElement("tr");
    parentElem = table;
    parentElem.appendChild(tr);
    parentElem = tr;
    for (let j = 0; j < array[i].length; j++) {
      let td = document.createElement("td");
      td.width = 20;
      td.height = 20;
      td.style = "border: 1px solid black;";
      td.id = "td" + i + j;
      parentElem.appendChild(td);
    }
  }

}

GameArea.prototype.refreshGameArea = function(array){
  
  let td;

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){ 
      td = document.getElementById("td"+i+j);
      if(array[i][j] === 0){
        td.style = "border: 1px solid black; background-color: white;"
      }else{
        td.style = "border: 1px solid black; background-color: red;"
      }
    }
  }
}