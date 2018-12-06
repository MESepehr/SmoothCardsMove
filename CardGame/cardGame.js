const   cardW = 100,
        cardH = 140 ;

var cardGame = function(PIXI,Width=550,Height=400){
    const cardURL = "./img/card.png" ;
    this.me = new PIXI.Sprite();

    const totalCards = 144 ;
    const deltaY = 1.5 ;


    const margin = 20 ;

    var place1X = cardW/2+margin,
        place1Y = totalCards*deltaY+(Height-totalCards*deltaY)/2 ;

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
        for(var i = 0 ; i<totalCards ; i++)
        {
            var cardItem = new card(PIXI,cardTexture);
            cardList.push(cardItem);
            me.addChild(cardItem.me);
            cardItem.setX(place1X+Math.random()*2);
            cardItem.setY(place1Y-i*deltaY);
        }
    }

    this.enterFrame = function()
    {
        //alert('frame"0')
       for(var i = 0 ; i<cardList.length ; i++)
       {
            cardList[i].enterFrame();
       }
    }

    return this;
}











var card = function(PIXI=null,texture=null)
{
    var me = null ;
    if(PIXI==null)
        return;
    me = this.me = new PIXI.Sprite(texture);
    me.width = cardW ;
    me.height = cardH ;
    me.anchor.x = .5;
    me.anchor.y = .5;
    me.rotation = (Math.random()-.5)/10;



    this.setX = function(value)
    {
        me.x = value ;
    }

    this.setY = function(value)
    {
        me.y = value ;
    }


    this.enterFrame = function()
    {

    }

   return this ;
}