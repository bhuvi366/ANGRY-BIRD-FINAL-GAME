const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bg = "sprites/bg.png"
var score = 0;
var birds=[];

var gameState = "onSling"

function preload() {
   
    getTime ();
    select = loadSound ("select.mp3")
   oink= loadSound ("oink.mp3")
   fly = loadSound ("fly.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log= new Log(200,200,50, PI/2);

    bird = new Bird(200,50);
    bird2 = new Bird(150,170);
    bird3 = new Bird(100,170);
    bird4 = new Bird(50,170);
birds.push(bird4)
birds.push(bird3)
birds.push(bird2)
birds.push(bird)


    slingshot = new SlingShot(bird.body,{x:200,y:50});

}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
    else
    background(bg);
    strokeWeight (4);
    stroke(0);
    fill ("white");
    text ("Score : " + score,1000,20)
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
    platform.display();
    slingshot.display();
    //log.display();
}
 
function mouseDragged(){
    if (gameState !=="launched"){
    Matter.Body.setPosition(birds[birds.length-1].body,{x: mouseX, y:mouseY});
    Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position,{x: mouseX, y:mouseY});
    return false;
    select.play();
}
}
  
function mouseReleased(){
    slingshot.fly();
    birds.pop();
    gameState = "launched"
    fly.play();
}

function keyPressed(){
    if(keyCode === 32 && birds[birds.length-1].body.speed <1) {
        birds[birds.length-1].body.trajectory=[]
        slingshot.attach(birds[birds.length-1].body);
        gameState = "onSling"
        Matter.Body.setPosition(birds[birds.length-1].body,{x: 200, y:200});
        select.play();
    }
}
  async function getTime (){
var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
var responseJson = await response.json();
console.log (responseJson)

var datetime = responseJson.datetime;
console.log (datetime)

var hour = datetime.slice(11,13);
console.log (hour)

if(hour> 06 && hour<19){
    bg= "sprites/bg.png"
}
 else{
    bg= "sprites/bg2.jpg"  
 }
 backgroundImg = loadImage(bg);
 }
