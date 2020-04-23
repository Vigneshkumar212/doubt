var ball,position,database;

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    
    var ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition);
}

function draw(){
    background("white");
    ball.x = mouseX;
    ball.y = mouseY;
    drawSprites();
}
// to create the change in two diffrent sites at the same time.
/*function writePosition(x,y){
    // to up date the position of the ball iint the data base
    database.ref('ball/position').set({
        'x':mouseX,
        'y':mouseY
    })
}*/
function readPosition(data){
    //to get the values from the data base 

    position = data.val();
    
    ball.x = position.x;
    ball.y = position.y;
}

