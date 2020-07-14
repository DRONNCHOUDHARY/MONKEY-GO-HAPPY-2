//Global Variables
var monkey;
var back;
var banana, obstacleGroup, stone
var obstacleImage;
var score = 0;


function preload() {
  bananaImage = loadImage("Banana.png");
  monkeyAnimation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  backImage = loadImage("jungle.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(600, 300);
  monkey = createSprite(50, 180, 20, 50);
  monkey.addAnimation(monkey);

  banana = createSprite(100, random(100, 250), 10, 10);
  banana.addImage(banana);
  back = createSprite(300, 150, 600, 300);
  back.scale = 1;
  ground.x = ground.width / 2;
  back.addImage(back);
  back.velocityX = -4;
  obstacle.addImage(obstacle);
}


function draw() {
  background(255);
}