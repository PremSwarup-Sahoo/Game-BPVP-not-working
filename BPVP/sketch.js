var canvas;
var backgroundImage,pl1_img, pl2_img, battleground;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image;
var blastImage; //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, pl1, pl2, obstacles;
var pls = [];
var bullets 
var def1,def2,def3,def4,box

function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  pl1_img = loadImage("./assets/h1.png");
  pl2_img = loadImage("./assets/h2.png");
  battleground = loadImage("./assets/bgg.jpg");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  def1 = loadImage("./assets/bpvpO/f1.png")
  def2 = loadImage("./assets/bpvpO/f2.png")
  def3 = loadImage("./assets/bpvpO/f3.png")
  def4 = loadImage("./assets/bpvpO/f4.png")
  box = loadImage("./assets/box.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  bullets = new Group();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
