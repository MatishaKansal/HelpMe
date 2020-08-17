var map, car, form1, start, form2, form3;
var database, bg, radio;
var order, time, finish, done, end, item, databaseitem, databasenum, databaseplace, databasetime, game1, game2, game3, game4, game5;
var time1, time2, time3, time4, time5, finish1, finish2, finish3, finish4, end1, end2, end3, end4, playerCount;

function preload(){
  bg = loadImage("images/bg.jpg")
}

function setup() {
 createCanvas(1000, 600);
  database = firebase.database();
  start = new Start();
  game1 = new Game();
  game2 = new Game();
  game3 = new Game();
  game4 = new Game();
  game5 = new Game();
  item = new Game();
  time1 = new Time();
  time2 = new Time();
  time3 = new Time();
  time4 = new Time();
  time5 = new Time();
  end1 = new End();
  end2 = new End();
  end3 = new End();
  end4 = new End();
  finish1 = new Finish();
  finish2 = new Finish();
  finish3 = new Finish();
  finish4 = new Finish();
}

function draw() {
  background(bg);
  // background(239, 0, 143)
  start.display();
}
