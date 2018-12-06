var cardGame = function(PIXI){
    const cardURL = "./img/card.png" ;
    this.me = new PIXI.Sprite();

    var cardList = [new card()] ;
    cardList = [] ;

    PIXI.loader
    .add([
        cardURL,
    ])
    .load(setupGame);

    function setupGame()
    {
        var cardTexture = PIXI.loader.resources[cardURL].texture ;
        


        //cardSprite.rotation = Math.PI/8;
        for(var i = 0 ; i<144 ; i++)
        {
            var cardItem = new card(PIXI,cardTexture);
            cardList.push(cardItem);
            me.addChild(cardItem.me);
            cardItem.me.x = i ;
            cardItem.me.y = i ;
            cardItem.me.rotation = i*0.01;
            cardItem.me.width = 100 ;
            cardItem.me.height = 200;
            cardItem.me.anchor.x = .5;
            cardItem.me.anchor.y = .5;
        }
    }

    this.enterFrame = function()
    {
        //alert('frame"0')
       for(var i = 0 ; i<cardList.length ; i++)
       {
        cardList[i].me.rotation += 0.01 ;
       }
    }

    return this;
}




var card = function(PIXI=null,texture=null)
{
    if(PIXI==null)
        return;
    this.me = new PIXI.Sprite(texture);
    this.me.anchor.x = .5;
    this.me.anchor.y = .5;

   return this ;
}