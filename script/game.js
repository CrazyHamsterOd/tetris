let i = 0;

let runGame = true;
let runElement = false;
let element;

let gameArray = new GameArray();
let gameArea = new GameArea();

let array = gameArray.array;

gameArray.clearArray();

gameArea.createAndShowGameArea(array);
//gameArea.refreshGameArea(array);
//debugger;

let interval = setInterval(gameArea.refreshGameArea(array), 50);

while (runGame) {
  if (!runElement) {
    element = new Element(0, 0);
    element.addElement(array);
    gameArray.showArrayInConsole();
    //gameArea.refreshGameArea(array);
    runElement = true;
  } else {
    sleep(200);
    element.moveDown(array);
    
    
    console.clear();
    gameArray.showArrayInConsole();
    
    if (i >= 17)
      runGame = false;
      clearInterval(interval);
    i++;
  }
}

function sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms) { }
} 