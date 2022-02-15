var availableSpaces = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var turnNum = 1;
var whosTurn;
var defMode;
var sideMode;
var cornerMode;
var playable = true;

function playSpace(space, xo){
  if(document.getElementById(space.toString()).innerHTML == ""){
    document.getElementById(space.toString()).innerHTML = xo.toUpperCase();
    var index = availableSpaces.indexOf(space.toString());
    if (index !== -1) {
      availableSpaces.splice(index, 1);
    }
    turnNum++;
    if(whosTurn == "bot"){
      whosTurn = "human";
    } else {
      whosTurn = "bot";
      botTurn();
    }
  }
}

function smartPlay(insteadSpace){
  //Function wins, then blocks any wins, otherwise plays inputted move or random move depending on wether the player input a space
  var grid = [document.getElementById("0").innerHTML, document.getElementById("1").innerHTML, document.getElementById("2").innerHTML, document.getElementById("3").innerHTML, document.getElementById("4").innerHTML, document.getElementById("5").innerHTML, document.getElementById("6").innerHTML, document.getElementById("7").innerHTML, document.getElementById("8").innerHTML]
  //Win
  if(grid[0] == "X" && grid[8] == "X" && availableSpaces.includes("4")){
    playSpace(4, "x");
    win();
    return;
  } else if (grid[0] == "X" && grid[4] == "X" && availableSpaces.includes("8")){
    playSpace(8, "x");
    win();
    return;
  } else if (grid[4] == "X" && grid[8] == "X" && availableSpaces.includes("0")){
    playSpace(0, "x");
    win();
    return;
  } else if (grid[2] == "X" && grid[6] == "X" && availableSpaces.includes("4")){
    playSpace(4, "x");
    win();
    return;
  } else if (grid[4] == "X" && grid[6] == "X" && availableSpaces.includes("2")){
    playSpace(2, "x");
    win();
    return;
  } else if (grid[2] == "X" && grid[4] == "X" && availableSpaces.includes("6")){
    playSpace(6, "x");
    win();
    return;
  //Start horizontals v v v v
  } else if (grid[0] == "X" && grid[2] == "X" && availableSpaces.includes("1")){
    playSpace(1, "x");
    win();
    return;
  } else if (grid[1] == "X" && grid[2] == "X" && availableSpaces.includes("0")){
    playSpace(0, "x");
    win();
    return;
  } else if (grid[0] == "X" && grid[1] == "X" && availableSpaces.includes("2")){
    playSpace(2, "x");
    win();
    return;
  } else if (grid[3] == "X" && grid[5] == "X" && availableSpaces.includes("4")){
    playSpace(4, "x");
    win();
    return;
  } else if (grid[4] == "X" && grid[5] == "X" && availableSpaces.includes("3")){
    playSpace(3, "x");
    win();
    return;
  } else if (grid[3] == "X" && grid[4] == "X" && availableSpaces.includes("5")){
    playSpace(5, "x");
    win();
    return;
  } else if (grid[6] == "X" && grid[8] == "X" && availableSpaces.includes("7")){
    playSpace(7, "x");
    win();
    return;
  } else if (grid[7] == "X" && grid[8] == "X" && availableSpaces.includes("6")){
    playSpace(6, "x");
    win();
    return;
  } else if (grid[6] == "X" && grid[7] == "X" && availableSpaces.includes("8")){
    playSpace(8, "x");
    win();
    return;
    //Start verticals v v v v
  } else if (grid[0] == "X" && grid[6] == "X" && availableSpaces.includes("3")){
    playSpace(3, "x");
    win();
    return;
  } else if (grid[3] == "X" && grid[6] == "X" && availableSpaces.includes("0")){
    playSpace(0, "x");
    win();
    return;
  } else if (grid[0] == "X" && grid[3] == "X" && availableSpaces.includes("6")){
    playSpace(6, "x");
    win();
    return;
  } else if (grid[1] == "X" && grid[7] == "X" && availableSpaces.includes("4")){
    playSpace(4, "x");
    win();
    return;
  } else if (grid[4] == "X" && grid[7] == "X" && availableSpaces.includes("1")){
    playSpace(1, "x");
    win();
    return;
  } else if (grid[1] == "X" && grid[4] == "X" && availableSpaces.includes("7")){
    playSpace(7, "x");
    win();
    return;
  } else if (grid[2] == "X" && grid[8] == "X" && availableSpaces.includes("5")){
    playSpace(5, "x");
    win();
    return;
  } else if (grid[5] == "X" && grid[8] == "X" && availableSpaces.includes("2")){
    playSpace(2, "x");
    win();
    return;
  } else if (grid[2] == "X" && grid[5] == "X" && availableSpaces.includes("8")){
    playSpace(8, "x");
    win();
    return;
  }
  //Prevent loss
  //Start diagonals v v v v
  if(grid[0] == "O" && grid[8] == "O" && availableSpaces.includes("4")){
    playSpace(4, "x");
  } else if (grid[0] == "O" && grid[4] == "O" && availableSpaces.includes("8")){
    playSpace(8, "x");
  } else if (grid[4] == "O" && grid[8] == "O" && availableSpaces.includes("0")){
    playSpace(0, "x");
  } else if (grid[2] == "O" && grid[6] == "O" && availableSpaces.includes("4")){
    playSpace(4, "x");
  } else if (grid[4] == "O" && grid[6] == "O" && availableSpaces.includes("2")){
    playSpace(2, "x");
  } else if (grid[2] == "O" && grid[4] == "O" && availableSpaces.includes("6")){
    playSpace(6, "x");
  //Start horizontals v v v v
  } else if (grid[0] == "O" && grid[2] == "O" && availableSpaces.includes("1")){
    playSpace(1, "x");
  } else if (grid[1] == "O" && grid[2] == "O" && availableSpaces.includes("0")){
    playSpace(0, "x");
  } else if (grid[0] == "O" && grid[1] == "O" && availableSpaces.includes("2")){
    playSpace(2, "x");
  } else if (grid[3] == "O" && grid[5] == "O" && availableSpaces.includes("4")){
    playSpace(4, "x");
  } else if (grid[4] == "O" && grid[5] == "O" && availableSpaces.includes("3")){
    playSpace(3, "x");
  } else if (grid[3] == "O" && grid[4] == "O" && availableSpaces.includes("5")){
    playSpace(5, "x");
  } else if (grid[6] == "O" && grid[8] == "O" && availableSpaces.includes("7")){
    playSpace(7, "x");
  } else if (grid[7] == "O" && grid[8] == "O" && availableSpaces.includes("6")){
    playSpace(6, "x");
  } else if (grid[6] == "O" && grid[7] == "O" && availableSpaces.includes("8")){
    playSpace(8, "x");
    //Start verticals v v v v
  } else if (grid[0] == "O" && grid[6] == "O" && availableSpaces.includes("3")){
    playSpace(3, "x");
  } else if (grid[3] == "O" && grid[6] == "O" && availableSpaces.includes("0")){
    playSpace(0, "x");
  } else if (grid[0] == "O" && grid[3] == "O" && availableSpaces.includes("6")){
    playSpace(6, "x");
  } else if (grid[1] == "O" && grid[7] == "O" && availableSpaces.includes("4")){
    playSpace(4, "x");
  } else if (grid[4] == "O" && grid[7] == "O" && availableSpaces.includes("1")){
    playSpace(1, "x");
  } else if (grid[1] == "O" && grid[4] == "O" && availableSpaces.includes("7")){
    playSpace(7, "x");
  } else if (grid[2] == "O" && grid[8] == "O" && availableSpaces.includes("5")){
    playSpace(5, "x");
  } else if (grid[5] == "O" && grid[8] == "O" && availableSpaces.includes("2")){
    playSpace(2, "x");
  } else if (grid[2] == "O" && grid[5] == "O" && availableSpaces.includes("8")){
    playSpace(8, "x");
  } else if (insteadSpace + 1 && availableSpaces.includes(insteadSpace.toString())){
    playSpace(insteadSpace, "x");
  } else {
    playSpace(availableSpaces[Math.floor(Math.random() * availableSpaces.length)], "x");
  }
}

function offensive(){
  var grid = [document.getElementById("0").innerHTML, document.getElementById("1").innerHTML, document.getElementById("2").innerHTML, document.getElementById("3").innerHTML, document.getElementById("4").innerHTML, document.getElementById("5").innerHTML, document.getElementById("6").innerHTML, document.getElementById("7").innerHTML, document.getElementById("8").innerHTML]
  if(turnNum == 1){
    smartPlay(0);
  } else if (grid[8] == ""){
    smartPlay(8);
  } else if (grid[6] == ""){
    smartPlay(6);
  } else  if (grid[2] == ""){
    smartPlay(2);
  } else {
    smartPlay();
  }
}

function defensive(){
  var grid = [document.getElementById("0").innerHTML, document.getElementById("1").innerHTML, document.getElementById("2").innerHTML, document.getElementById("3").innerHTML, document.getElementById("4").innerHTML, document.getElementById("5").innerHTML, document.getElementById("6").innerHTML, document.getElementById("7").innerHTML, document.getElementById("8").innerHTML];
  if(turnNum == 2){
    if(grid[4] == "O"){
      defMode = "middle";
      smartPlay(0);
    } else if (grid[0] == "O" || grid[2] == "O" || grid[6] == "O" || grid[8] == "O"){
      defMode = "corner"
      smartPlay(4);
    } else {
      defMode = "side";
      smartPlay(4);
    }
  } else if (turnNum == 4){
    if(defMode == "middle"){
      smartPlay(6);
    } else if (defMode == "corner"){
      if(grid[3] == "O" && (grid[1] == "O" || grid[2] == "O")){
        cornerMode = 1;
      } else if (grid[7] == "O" && (grid[0] == "O" || grid[3] == "O")){
        cornerMode = 2;
      } else if (grid[5] == "O" && (grid[6] == "O" || grid[7] == "O")){
        cornerMode = 3;
      } else if (grid[1] == "O" && (grid[5] == "O" || grid[8] == "O")){
        cornerMode = 4;
      } else if (grid[3] == "O" && (grid[7] == "O" || grid[8] == "O")){
        cornerMode = 5;
      } else if (grid[7] == "O" && (grid[2] == "O" || grid[5] == "O")){
        cornerMode = 6;
      } else if (grid[5] == "O" && (grid[0] == "O" || grid[1] == "O")){
        cornerMode = 7;
      } else if (grid[1] == "O" && (grid[3] == "O" || grid[6] == "O")){
        cornerMode = 8;
      } else if ((grid[1] == "O" && (grid[3] == "O" || grid[6] == "O")) || (grid[0] == "O" && grid[8] == "O") || (grid[2] == "O" && grid[6] == "O")){
        cornerMode = 9;
      }

      if(cornerMode == 1 || cornerMode == 8){
        smartPlay(0);
      } else if (cornerMode == 2 || cornerMode == 5){
        smartPlay(6);
      } else if (cornerMode == 3 || cornerMode == 6){
        smartPlay(8);
      } else if (cornerMode == 4 || cornerMode == 7){
        smartPlay(2);
      } else if (cornerMode == 9){
        smartPlay(5);
      } else {
        smartPlay();
      }
    } else {
      if(grid[3] == "O" && (grid[1] == "O" || grid[2] == "O")){
        sideMode = 1;
      } else if (grid[7] == "O" && (grid[0] == "O" || grid[3] == "O")){
        sideMode = 2;
      } else if (grid[5] == "O" && (grid[6] == "O" || grid[7] == "O")){
        sideMode = 3;
      } else if (grid[1] == "O" && (grid[5] == "O" || grid[8] == "O")){
        sideMode = 4;
      } else if (grid[3] == "O" && (grid[7] == "O" || grid[8] == "O")){
        sideMode = 5;
      } else if (grid[7] == "O" && (grid[2] == "O" || grid[5] == "O")){
        sideMode = 6;
      } else if (grid[5] == "O" && (grid[0] == "O" || grid[1] == "O")){
        sideMode = 7;
      } else if (grid[1] == "O" && (grid[3] == "O" || grid[6] == "O")){
        sideMode = 8;
      }
      if(sideMode == 1 || sideMode == 8){
        smartPlay(0);
      } else if (sideMode == 2 || sideMode == 5){
        smartPlay(6);
      } else if (sideMode == 3 || sideMode == 6){
        smartPlay(8);
      } else if (sideMode == 4 || sideMode == 7){
        smartPlay(2);
      } else {
        smartPlay();
      }
    }
  } else if (turnNum == 6){
    if(defMode == "middle"){
      smartPlay();
    } else if (defMode == "corner"){
      smartPlay();
    } else {
      smartPlay();
    }
  } else if (turnNum == 8){
    if(defMode == "middle"){
      smartPlay();
    } else if (defMode == "corner"){
      smartPlay();
    } else {
      smartPlay();
    }
  }
}

function botTurn(){
  if(turnNum % 2 == 1){
    offensive();
  } else {
    defensive();
  }
  if(turnNum == 10 || turnNum == 11){
    cats();
  }
}

function humanTurn(space){
  if(playable){
    if (document.getElementById(space.toString()).innerHTML == "" && whosTurn == "human"){
      playSpace(space, "o");
    }
  }
}

function playGame(){
  document.getElementById("again").style.display = "none";
  document.getElementById("0").innerHTML = "";
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  availableSpaces = ["0",      "1", "2", "3", "4", "5", "6", "7", "8"];
  turnNum = 1;
  whosTurn;
  defMode;
  sideMode;
  cornerMode;
  playable = true;
  if(Math.random() < 0.5){
    whosTurn = "bot";
    botTurn();
    document.getElementById("first").innerHTML = "Bot goes first";
  } else {
    whosTurn = "human"
    document.getElementById("first").innerHTML = "Player goes first";
  }
}

function win(){
  playable = false;
  document.getElementById("first").innerHTML = "Bot wins!";
  document.getElementById("again").style.display = "block";
}

function cats(){
  document.getElementById("first").innerHTML = "Cat's game!";
  document.getElementById("again").style.display = "block";
}

playGame();