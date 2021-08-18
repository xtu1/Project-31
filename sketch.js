const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var maxDrops = 100;
var thunderCreatedFrame = 0;

var drops=[];

var thunder,thunderImage1,thunderImage2,thunderImage3,thunderImage4;
var ground;
var umbrella,Man;
var bg;
var random;
var Man;

function preload()
{
  thunderImage1=loadImage("thunder_1.png");
  thunderImage2=loadImage("thunder_2.png");
  thunderImage3=loadImage("thunder_3.png");
  thunderImage4=loadImage("thunder_4.png");

  Man = loadAnimation("walking_1.png","walking_2.png","walking_3.png",
        "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");

  bg = loadImage("bg.png");
  land = loadImage("ground.png");
}

function setup() {
createCanvas(500,900);

   engine = Engine.create();
   world = engine.world;
  
   
   umbrella = new Umbrella(220,300);
   Man.scale = 0.1;
 
 if(frameCount % 80 === 0){

    for(var i=0; i< maxDrops; i++){
        drops.push(new Drop(random(0,800), random(0,800)));
    }
 }
               

}


function draw() {
    Engine.update(engine);
    background("black");
    image(bg,-1,-1,500,900);
    umbrella.display();
    image(land,-1,870,500,30);
    animation(Man,200,550);
    
    

    rand = Math.round(random(1,4));
    if(frameCount% 100 === 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage("1.png",thunderImage1);
            break;
            case 2: thunder.addImage("2.png",thunderImage2);
            break; 
            case 3: thunder.addImage("3.png",thunderImage3);
            break;
            case 4: thunder.addImage("4.png",thunderImage4);
            break;
            default: break;
        }
        thunder.scale = random(0.4,0.6)
    }
    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

                        
    

    for(var i = 0; i < maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        }

    drawSprites();
  
}