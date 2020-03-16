var c1 = {
  x: 100,
  y: 250,
  diameter: 50,
  speedx: 5,
  speedy: 5,
  flag: 0,
  flagx: 0
};

var c2 = {
  x: 200,
  y: 350,
  diameter: 90,
  speedx: 6,
  speedy: 6,
  flag: 0,
  flagx: 0
};

var c3 = {
  x: 300,
  y: 450,
  diameter: 50,
  speedx: 7,
  speedy: 7,
  flag: 0,
  flagx: 0
};

var c4 = {
  x: 400,
  y: 550,
  diameter: 50,
  speedx: 8,
  speedy: 8,
  flag: 0,
  flagx: 0
};

var c5 = {
  x: 500,
  y: 650,
  diameter: 90,
  speedx: 9,
  speedy: 9,
  flag: 0,
  flagx: 0
};

var c6 = {
  x: 600,
  y: 150,
  diameter: 50,
  speedx: 10,
  speedy: 10,
  flag: 0,
  flagx: 0
};

var c7 = {
  x: 700,
  y: 250,
  diameter: 50,
  speedx: 7,
  speedy: 7,
  flag: 0,
  flagx: 0
};

var c8 = {
  x: 800,
  y: 350,
  diameter: 90,
  speedx: 8,
  speedy: 8,
  flag: 0,
  flagx: 0
};

var c9 = {
  x: 900,
  y: 450,
  diameter: 90,
  speedx: 9,
  speedy: 9,
  flag: 0,
  flagx: 0
};

var c10 = {
  x: 1000,
  y: 550,
  diameter: 50,
  speedx: 10,
  speedy: 10,
  flag: 0,
  flagx: 0
};

var p1 = {
  x: 250,
  y: 250,
  diameter: 50
};

////pause variable
var pauseStatus = true;

var playerdied = 0;

var signs = [-1, 1];
var windowx = 1100;
var windowy = 660;
var timerValue = 0;
var foodx = [];
var foody = [];

var flag_food = 0;
var flag_fooddraw = 0;

food_distance = 100;

let eat;
let gameover;
let win;

var foodCount = 0;
var foodCountFlag = 0;
var foodAddCount = 0;

//start = 0 (game has not started)
//start = 1 (game is running)
var start = 0;

var pauseString = "";
pauseX = mouseX;
pauseY = mouseY;
ppf = 1;

var restart = 1;

var stopStatus = 0;

var timerClock = 10;

// variable list over
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reinitializeAll() {
  c1.x = 100;
  c1.y = 250;
  c1.diameter = 50;
  c1.speedx = 5;
  c1.speedy = 5;
  c1.flag = 0;
  c1.flagx = 0;

  c2.x = 200;
  c2.y = 350;
  c2.diameter = 90;
  c2.speedx = 6;
  c2.speedy = 6;
  c2.flag = 0;
  c2.flagx = 0;

  c3.x = 300;
  c3.y = 450;
  c3.diameter = 50;
  c3.speedx = 7;
  c3.speedy = 7;
  c3.flag = 0;
  c3.flagx = 0;

  c4.x = 400;
  c4.y = 550;
  c4.diameter = 50;
  c4.speedx = 8;
  c4.speedy = 8;
  c4.flag = 0;
  c4.flagx = 0;

  c5.x = 500;
  c5.y = 650;
  c5.diameter = 90;
  c5.speedx = 9;
  c5.speedy = 9;
  c5.flag = 0;
  c5.flagx = 0;

  c6.x = 600;
  c6.y = 150;
  c6.diameter = 5;
  c6.speedx = 10;
  c6.speedy = 10;
  c6.flag = 0;
  c6.flagx = 0;

  c7.x = 700;
  c7.y = 250;
  c7.diameter = 50;
  c7.speedx = 7;
  c7.speedy = 7;
  c7.flag = 0;
  c7.flagx = 0;

  c8.x = 800;
  c8.y = 350;
  c8.diameter = 90;
  c8.speedx = 8;
  c8.speedy = 8;
  c8.flag = 0;
  c8.flagx = 0;

  c9.x = 900;
  c9.y = 450;
  c9.diameter = 90;
  c9.speedx = 9;
  c9.speedy = 9;
  c9.flag = 0;
  c9.flagx = 0;

  c10.x = 1000;
  c10.y = 550;
  c10.diameter = 50;
  c10.speedx = 10;
  c10.speedy = 10;
  c10.flag = 0;
  c10.flagx = 0;

  p1.x = 250;
  p1.y = 250;
  p1.diameter = 50;

  ////pause variable
  pauseStatus = true;

  playerdied = 0;

  signs = [-1, 1];
  windowx = 1100;
  windowy = 660;
  timerValue = 0;
  foodx = [];
  foody = [];

  flag_food = 0;
  flag_fooddraw = 0;

  food_distance = 100;

  foodCount = 0;
  foodCountFlag = 0;
  foodAddCount = 0;

  //start = 0 (game has not started)
  //start = 1 (game is running)
  start = 0;

  pauseString = "";
  pauseX = mouseX;
  pauseY = mouseY;
  ppf = 1;

  timerClock = 10;

  pauseString = "";

  draw();
}

function preload() {
  eat = loadSound("../Audio/eat_food.mp3");
  gameover = loadSound("../Audio/game_over.mp3");
  win = loadSound("../Audio/win.mp3");
}

// pauseStatus==0 ( game pause)
// pauseStatus==1 (game running)

///for puase game
function pauseFunction() {
  pauseStatus = 0;
  pauseX = mouseX;
  pauseY = mouseY;
}

function setup() {
  var cnv = createCanvas(windowx, windowy);
  setInterval(timeIt, 1000);
  var x = 30;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

var startStatus = -1;
var newVar = null;

var flagDied = 0;

// function displayScorePlayer() {
//   return timerClock;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  if (pauseStatus == 1) {
    timerClock += 10;

    console.log(timerClock + "    aaaaaaaaaa");
  }

  background(22);
  noStroke();

  if (foodCountFlag == 1 && foodx.length >= foodCount / 1.5) {
    if (foodAddCount == 0) {
      var remove = random(foodx.length);
      foodx.splice(remove, 1);
      foody.splice(remove, 1);
    }
    if (foodAddCount >= 10) {
      foodAddCount = 0;
    } else {
      foodAddCount += 5;
    }
  }
  food();
  foodCountFlag = 1;

  // if (pauseStatus == 1) {
  enemy(c1, 400, 200, pauseStatus);
  enemy(c2, 500, 100, pauseStatus);
  enemy(c3, 600, 300, pauseStatus);
  enemy(c4, 700, 180, pauseStatus);
  enemy(c5, 800, 250, pauseStatus);
  enemy(c6, 450, 220, pauseStatus);
  enemy(c7, 550, 200, pauseStatus);
  enemy(c8, 650, 150, pauseStatus);
  enemy(c9, 750, 230, pauseStatus);
  enemy(c10, 850, 300, pauseStatus);

  if (pauseStatus == 1) {
    player(p1, pauseStatus);
    ppf = 1;
  } else {
    if (ppf == 1) {
      pauseX = mouseX;
      pauseY = mouseY;
    }
    ppf = 0;
    fill(0, 0, 255);
    ellipse(pauseX, pauseY, p1.diameter, p1.diameter);
    // arc(obj.x, obj.y, smileDiam, smileDiam, startAng, endAng);
    console.log("v");
    console.log(pauseX, pauseY);
  }
  playerVsenemy(p1, c1);
  playerVsenemy(p1, c2);
  playerVsenemy(p1, c3);
  playerVsenemy(p1, c4);
  playerVsenemy(p1, c5);
  playerVsenemy(p1, c6);
  playerVsenemy(p1, c7);
  playerVsenemy(p1, c8);
  playerVsenemy(p1, c9);
  playerVsenemy(p1, c10);

  // last two parameter for enemy are introduced
  // for randomizing there movement from one another
  // for best output take select values from specified range
  // for 2nd parameter between 300 to 1000
  // for 3nd parameter between 100 to 300
  // }

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 242, 0);
  text(pauseString, 0, windowy / 2, width);

  //lose condition
  if (playerdied == 1) {
    if (isNaN(timerClock)) {
      pauseString =
        "GAME OVER!!!!\n Click to play again\n" + "Your score: " + "950";
      playerscore = 950;
    } else {
      pauseString =
        "GAME OVER!!!!\n Click to play again\n" + "Your score: " + timerClock;
      playerscore = timerClock;
    }

    playerdied = 2;
  }

  //win condition
  if (
    c1.diameter < 10 &&
    c2.diameter < 10 &&
    c3.diameter < 10 &&
    c4.diameter < 10 &&
    c5.diameter < 10 &&
    c6.diameter < 10 &&
    c7.diameter < 10 &&
    c8.diameter < 10 &&
    c9.diameter < 10 &&
    c10.diameter < 10
  ) {
    if (playerdied != 2) {
      pauseString =
        "YOU WIN!!!\n Click to play again\n" + "Your score: " + timerClock;
    }

    playerdied = 2;
  }
}

// pauseStatus==0 ( game pause)
// pauseStatus==1 (game running)

function mousePressed() {
  if (mouseX > 0 && mouseX <= 1100 && mouseY > 0 && mouseY < 650) {
    if (playerdied == 2) {
      reinitializeAll();
      resetSketch();
    }
  }
  if (mouseX > 0 && mouseX <= 1100 && mouseY > 0 && mouseY < 650) {
    if (pauseStatus == 0) {
      console.log(pauseX, pauseY);
      if (
        mouseX > pauseX - p1.diameter / 2 &&
        mouseX < pauseX + p1.diameter / 2 &&
        mouseY > pauseY - p1.diameter / 2 &&
        mouseY < pauseY + p1.diameter / 2
      ) {
        console.log(
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );
        pauseStatus = 1;
        pauseString = "";
        console.log(pauseStatus);
      }
    } else if (pauseStatus == 1) {
      pauseStatus = 0;
      pauseString = "Game Paused \n Click inside player to play.";
      pauseX = mouseX;
      pauseY = mouseX;
      // ellipse(pauseX, pauseY, obj.diameter, obj.diameter);
    }
  }
}

function player(obj, pauseFlag) {
  //setInterval(food(), 10000);
  noStroke();
  fill(0, 0, 255);
  playerMovement(obj, pauseFlag);
  console.log(mouseX, mouseY);
  p1.x = mouseX;
  p1.y = mouseY;
  eatFood(obj, 1);
}

function enemy(obj, random1, random2, pauseFlag) {
  stroke(255);
  fill(255, 0, 0);
  ellipse(obj.x, obj.y, obj.diameter, obj.diameter);
  var startAng = 0.01 * PI;
  var endAng = 1 * PI;
  var smileDiam = 0.6 * obj.diameter;
  fill(255);
  arc(obj.x, obj.y, smileDiam, smileDiam, startAng, endAng);
  // line(obj.x-10, obj.y+10,obj.x+20,obj.y+10);
  // Eyes
  var offset = 0.5 * obj.diameter;
  var eyeDiam = 0.3 * obj.diameter;
  fill(255);
  ellipse(obj.x - offset, obj.y - offset, eyeDiam, eyeDiam);
  ellipse(obj.x + offset, obj.y - offset, eyeDiam, eyeDiam);

  var offset1 = 0.2 * obj.diameter;
  var eyeDiam1 = 0.2 * obj.diameter;
  ellipse(obj.x - offset1, obj.y - offset1, eyeDiam1, eyeDiam1);
  ellipse(obj.x + offset1, obj.y - offset1, eyeDiam1, eyeDiam1);
  moveRandom(obj, random1, random2, pauseFlag);
  eatFood(obj, 0);
}

function playerMovement(obj, pauseFlag) {
  if (obj.x > windowx - obj.diameter / 2) {
    obj.x = windowx - obj.diameter / 2;
    if (pauseFlag == 1) {
      ellipse(obj.x, mouseY, obj.diameter, obj.diameter);
    } else {
      ellipse(pauseX, pauseY, obj.diameter, obj.diameter);
    }
    fill(0);
    var startAng = 0.01 * PI;
    var endAng = 1 * PI;
    var smileDiam = 0.6 * obj.diameter;
    arc(obj.x, mouseY, smileDiam, smileDiam, startAng, endAng);

    // Eyes
    var offset = 0.2 * obj.diameter;
    var eyeDiam = 0.1 * obj.diameter;
    fill(0);
    if (pauseFlag == 1) {
      ellipse(obj.x - offset, mouseY - offset, eyeDiam, eyeDiam);
      ellipse(obj.x + offset, mouseY - offset, eyeDiam, eyeDiam);
    } else {
      ellipse(pauseX, pauseY, eyeDiam, eyeDiam);
      ellipse(pauseX, pauseY, eyeDiam, eyeDiam);
    }
  } else if (obj.x < obj.diameter / 2) {
    obj.x = obj.diameter / 2;
    if (pauseFlag == 1) {
      ellipse(obj.x, mouseY, obj.diameter, obj.diameter);
    } else {
      ellipse(pauseX, pauseY, obj.diameter, obj.diameter);
    }
    fill(0);
    var startAng = 0.01 * PI;
    var endAng = 1 * PI;
    var smileDiam = 0.6 * obj.diameter;
    arc(obj.x, mouseY, smileDiam, smileDiam, startAng, endAng);

    // Eyes
    var offset = 0.2 * obj.diameter;
    var eyeDiam = 0.1 * obj.diameter;
    fill(0);
    if (pauseFlag == 1) {
      ellipse(obj.x - offset, mouseY - offset, eyeDiam, eyeDiam);
      ellipse(obj.x + offset, mouseY - offset, eyeDiam, eyeDiam);
    } else {
      ellipse(pauseX, pauseY, eyeDiam, eyeDiam);
      ellipse(pauseX, pauseY, eyeDiam, eyeDiam);
    }
  } else if (obj.y > windowy - obj.diameter / 2) {
    obj.y = windowy - obj.diameter / 2;

    ellipse(mouseX, obj.y, obj.diameter, obj.diameter);

    fill(0);
    var startAng = 0.01 * PI;
    var endAng = 1 * PI;
    var smileDiam = 0.6 * obj.diameter;
    arc(mouseX, obj.y, smileDiam, smileDiam, startAng, endAng);

    // Eyes
    var offset = 0.2 * obj.diameter;
    var eyeDiam = 0.1 * obj.diameter;
    fill(0);

    ellipse(mouseX - offset, obj.y - offset, eyeDiam, eyeDiam);
    ellipse(mouseX + offset, obj.y - offset, eyeDiam, eyeDiam);
  } else if (obj.y < obj.diameter / 2) {
    obj.y = windowy - obj.diameter / 2;

    ellipse(mouseX, obj.y, obj.diameter, obj.diameter);

    fill(0);
    var startAng = 0.01 * PI;
    var endAng = 1 * PI;
    var smileDiam = 0.6 * obj.diameter;
    arc(mouseX, obj.y, smileDiam, smileDiam, startAng, endAng);

    // Eyes
    var offset = 0.2 * obj.diameter;
    var eyeDiam = 0.1 * obj.diameter;
    fill(0);
    ellipse(mouseX - offset, obj.y - offset, eyeDiam, eyeDiam);
    ellipse(mouseX + offset, obj.y - offset, eyeDiam, eyeDiam);
  } else {
    if (pauseFlag == 1) {
      ellipse(mouseX, mouseY, obj.diameter, obj.diameter);
    } else {
      ellipse(pauseX, pauseY, obj.diameter, obj.diameter);
    }
    fill(0);
    var startAng = 0.01 * PI;
    var endAng = 1 * PI;
    var smileDiam = 0.6 * obj.diameter;
    arc(mouseX, mouseY, smileDiam, smileDiam, startAng, endAng);

    // Eyes
    var offset = 0.2 * obj.diameter;
    var eyeDiam = 0.1 * obj.diameter;
    fill(0);
    if (pauseFlag == 1) {
      ellipse(mouseX - offset, mouseY - offset, eyeDiam, eyeDiam);
      ellipse(mouseX + offset, mouseY - offset, eyeDiam, eyeDiam);
    } else {
      ellipse(pauseX, pauseY, eyeDiam, eyeDiam);
      ellipse(pauseX, pauseY, eyeDiam, eyeDiam);
    }
  }
}

function playerVsenemy(obj1, obj2) {
  if (obj1.diameter == 0 || obj2.diameter == 0) {
    //do nothing
  } else {
    if (
      sqrt(sq(obj1.x - obj2.x) + sq(obj1.y - obj2.y)) <=
      obj1.diameter / 2 + obj2.diameter / 2
    ) {
      if (obj1.diameter <= obj2.diameter) {
        gameover.play();
        obj2.diameter = obj2.diameter + 8;
        obj1.diameter = 0;
        playerdied = 1;
      } else {
        win.play();
        obj1.diameter = obj1.diameter + obj2.diameter / 8;
        obj2.diameter = 0;
      }
    }
  }
}

function food() {
  noStroke();
  fill(0, 0, 255);
  for (let i = food_distance; i <= windowx; i = i + food_distance) {
    for (let j = food_distance; j < windowy; j = j + food_distance) {
      if (foodCountFlag == 0) {
        foodCount++;
      }
      if (foodx.length == 0) {
        ellipse(i, j, 8, 8);
      } else {
        for (let k = 0; k < foodx.length; k++) {
          if (foodx[k] == i && foody[k] == j) {
            flag_fooddraw = 1;
          }
        }
        if (flag_fooddraw == 1) {
          flag_fooddraw = 0;
        } else {
          ellipse(i, j, 8, 8);
        }
      }
    }
  }
}

function timeIt() {
  if (timerValue < 11) {
    timerValue++;
  } else {
    timerValue = 0;
  }
}

function eatFood(obj, x) {
  for (let i = food_distance; i <= windowx; i = i + food_distance) {
    for (let j = food_distance; j < windowy; j = j + food_distance) {
      if (
        i <= obj.x + obj.diameter / 2 &&
        i >= obj.x - obj.diameter / 2 &&
        j <= obj.y + obj.diameter / 2 &&
        j >= obj.y - obj.diameter / 2
      ) {
        if (foodx.length == 0) {
          foodx.push(i);
          foody.push(j);
          eat.play();
          if (x == 0) obj.diameter = obj.diameter + 4;
          else obj.diameter = obj.diameter + 1.0;

          if (obj.diameter > 175 && x == 0) {
            fill(200, 200, 0);
            obj.diameter = 175;
          }
        } else {
          for (let k = 0; k < foodx.length; k++) {
            if (foodx[k] == i && foody[k] == j) {
              flag_food = 1;
            }
          }
          if (flag_food == 0) {
            foodx.push(i);
            foody.push(j);
            eat.play();
            if (x == 0) obj.diameter = obj.diameter + 4;
            else obj.diameter = obj.diameter + 1.0;

            if (obj.diameter > 175 && x == 0) {
              fill(200, 200, 0);
              obj.diameter = 175;
            }
          } else {
            flag_food = 0;
          }
        }
      }
    }
  }
}

function moveRandom(obj, randomize, change, pauseFlag) {
  if (pauseFlag == 1) {
    if (obj.flag == change) {
      obj.speedx = random(signs) * obj.speedx;
      obj.speedy = random(signs) * obj.speedy;
      obj.flag = 0;
    } else {
      obj.flag++;
    }

    if (obj.flagx == randomize) {
      obj.flagx = 0;
    } else {
      obj.flagx++;
    }

    if (obj.flagx < randomize / 3) {
      obj.x = obj.x + obj.speedx;
    } else if (obj.flagx < (2 * randomize) / 3 && obj.flagx >= randomize / 3) {
      obj.y = obj.y + obj.speedy;
    } else {
      obj.x = obj.x + obj.speedx;
      obj.y = obj.y + obj.speedy;
    }

    var limit = abs(obj.speedx);

    if (obj.x >= windowx - obj.diameter / 2 - limit) {
      obj.x = windowx - obj.diameter / 2 - 2 * limit;
      obj.speedx = -obj.speedx;
    } else if (obj.x <= obj.diameter / 2 + limit) {
      obj.x = obj.diameter / 2 + 2 * limit;
      obj.speedx = -obj.speedx;
    }

    if (obj.y >= windowy - obj.diameter / 2 - limit) {
      obj.y = windowy - obj.diameter / 2 - 2 * limit;
      obj.speedy = -obj.speedy;
    } else if (obj.y <= obj.diameter / 2 + limit) {
      obj.y = obj.diameter / 2 + 2 * limit;
      obj.speedy = -obj.speedy;
    }
  }
}
