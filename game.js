class Game{
    constructor(){
        

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
            
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        boy1 = createSprite(100,350);
        boy1.addImage("boy1", runner1_img);
        boy2 = createSprite(300,350);
        boy2.addImage("boy2", runner2_img);
       boy3 = createSprite(500,350);
       boy3.addImage("boy3", runner3_img);
       boy4 = createSprite(700,350);
       boy4.addImage("boy4", runner4_img);

       boys = [boy1,boy2, boy3, boy4];


        if(gameState ===0 ){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

       

    }



    play(){
        form.hide();

        Player.getPlayerInfo();
        player.getPlayersAtEnd();

        if(allPlayers !== undefined){
            console.log(gameState)
            background(rgb(198,135,103));
            image(track_Img,0,-displayHeight*4,displayWidth, displayHeight*5);
            
            
            var index =0;

            var x = 210;
            var y;

            for (var plr in allPlayers){
                index = index+1;

                x =x+200

                y = displayHeight-allPlayers[plr].distance;
                boys[index-1].x =x;
                boys[index-1].y =y;

                if(index ===player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                    boys[index-1].shapeColor = "blue";
                    camera.position.x = displayWidth/2;
                    camera.position.y = boys[index-1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10;
            player.update();
        }

        if (player.distance > 3860){
            gameState = 2;
            player.rank +=1;
            Player.updatePlayersAtEnd(player.rank);
        }

        drawSprites();

    }

    end(){
        console.log("Game Ended");
        console.log(player.rank);

    }

    
}