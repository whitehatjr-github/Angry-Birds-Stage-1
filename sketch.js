const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,350,70,70);
    box2 = new Box(920,350,70,70);
    pig1 = new Pig(810,370);
    log1 = new Log(810,320,300,PI/2);

    box3 = new Box(700,280,70,70);
    box4 = new Box(920,280,70,70);
    pig2 = new Pig(810,290);
    log2 = new Log(810,260,300,PI/2);

    box5 = new Box(810,190,70,70);
    log3 = new Log(760,160,150,PI/7);
    log4 = new Log(870,160,150,-PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    
    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    box5.display();

    bird.display();
}