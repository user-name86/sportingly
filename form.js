class Form{
    constructor(){
        this.input=createInput("Name");
        this.greeting=createElement('h2');
        this.button = createButton('Play');
        this.title=createElement('h2');
        this.subtitle=createElement('h3');
        this.reset = createButton("Reset");

    }

    hide(){
        this.input.hide();
        this.greeting.hide();
        this.title.hide();
        this.subtitle.hide();
        this.button.hide();

    }

    display(){
        this.title.html("SPORTINGLY");
        this.subtitle.html("... attitude towards life");

        this.title.position(displayWidth/2-50,0);
        this.subtitle.position(displayWidth/2-30,50);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            player.index=playerCount;
            playerCount+=1;
            player.update();
            player.updateCount(playerCount);
            console.log(this.index);
            this.greeting.html("Hello  " + player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4)
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })

    }
}