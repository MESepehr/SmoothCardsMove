var cardGame = function(PIXI){
    const cardURL = "./img/card.png" ;
    this.me = new PIXI.Sprite();
    var cardSprite = null ;

    PIXI.loader
    .add([
        cardURL,
    ])
    .load(setupGame);

    function setupGame()
    {
        cardSprite = new PIXI.Sprite(
            PIXI.loader.resources[cardURL].texture
        );

        me.addChild(cardSprite);

        cardSprite.anchor.x = .5;
        cardSprite.anchor.y = .5;
        //cardSprite.rotation = Math.PI/8;
    }

    this.enterFrame = function()
    {
        //alert('frame"0')
       if(cardSprite)
       {
            //cardSprite.rotation += .01 ;
       } 
    }

    return this;
}