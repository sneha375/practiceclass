

var box1, box2,box3;
var ball1,ball2;

function preload(){

}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  box1=new Box(20,100,10,30);
  box2=new Box(50,100,40,40)
  box3=new Box(300,250,10,50);
  ball1=new Ball(300,100,20);
  ball2=new Ball(500,300,10)

}

function draw() 
{
  background("teal");
  
  fill("orange")
  box1.display()
  fill("cyan")
  box2.display()
  fill("crimson")
  box3.display();
  ball1.display()
  ball2.display()
}

