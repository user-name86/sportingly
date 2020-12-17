var canvas, backgroundImg

var allPlayers;
var  gameState=0;

var playerCount;
var distance=0;
var database;

var form,player,game;

var runner1_img,  runner2_img, runner3_img, runner4_img;
var boys, boy1,boy2,boy3,boy4;
var  track_Img;

function preload() {
    runner1_img=loadImage("images/boy1.png");
    runner2_img=loadImage("images/boy2.png");
    runner3_img=loadImage("images/boy3.png");
    runner4_img=loadImage("images/boy4.png");
    track_Img=loadImage("images/track.jpg");
    backgroundImg=loadImage("images/ground.png");
}

function setup(){
    canvas =createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game= new Game();
    game.getState();
    game.start();

}

function draw(){
    if (playerCount===4){
        console.log(gameState);
        game.update(1);
    } 
    if(gameState===1){
       clear();
        game.play();

    }
    if(gameState===2){
        game.end();
    }
    

}

