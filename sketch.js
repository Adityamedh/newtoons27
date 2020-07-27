const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var chain;
var engine, world;



function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;   
   
    ball = new Ball (700,100,20,20);
    ball2 = new Ball (600,100,20,20);
    ball3 = new Ball (500,100,20,20);
    ball4 = new Ball (400,100,20,20);
    ball5 = new Ball (300,100,20,20);
    ball6 = new Ball (200,100,20,20);
    ball7 = new Ball (100,100,20,20);
    log1 = new Log(700, 50, 30, 30);
    log2 = new Log(600,50,30,30);
    log3 = new Log(500,50,30,30);
    log4 = new Log(400,50,30,30);
    log5 = new Log(300,50,30,30);
    log6 = new Log(200,50,30,30);
    log7 = new Log(100,50,30,30);
    chain = new Chain(log1.body, ball.body);
    chain2 = new Chain(log2.body, ball2.body);
    chain3 = new Chain(log3.body, ball3.body);
    chain4 = new Chain(log4.body, ball4.body);
    chain5 = new Chain(log5.body, ball5.body);
    chain6 = new Chain(log6.body,ball6.body);
    chain7 = new Chain(log7.body,ball7.body);

}

function draw(){
    background(0);
    Engine.update(engine);
     
     


if(keyCode = "a")[
  ball.Velocity = -5
]



    
    textSize(30);
    
    
    
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display(); 
    chain.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();
    chain7.display();

}