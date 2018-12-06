var cardGame = function(PIXI){
    var cardURL = "./img/card.png" ;
    var Me = new PIXI.Sprite();

    PIXI.loader
    .add([
        cardURL,
    ])
    .load(setupGame);

    function setupGame()
    {
        var cardSprite = new PIXI.Sprite(
            PIXI.loader.resources[cardURL].texture
        );

        Me.addChild(cardSprite);
    }
    return Me;
}