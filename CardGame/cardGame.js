const   cardW = 100,
        cardH = 140 ;

var cardGame = function(PIXI,Width=550,Height=400){
    const cardURL = "./img/card.png" ;
    var me = this.me = new PIXI.Sprite();

    const totalCards = 144 ;
    const deltaY = 1.5 ;


    const margin = 20 ;

    var place1X = cardW/2+margin,
        place1Y = totalCards*deltaY+(Height-totalCards*deltaY)/2 ;
    
    var place2X = Width - place1X;

    var cardList = [new card()] ;
    cardList = [] ;
    var topItemOnQue1 = 0 ;
    var que1 = [{x:0,y:0}];
    var que2 = [{x:0,y:0}];
    que1 = [] ;
    que2 = [] ;

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
            topItemOnQue1++ ;
            me.addChild(cardItem.me);


            let x = place1X+Math.random()*2 ;
            let x2 = place2X-Math.random()*2 ;
            let y = place1Y-i*deltaY;

            que1.push({x:x,y:y});
            que2.push({x:x2,y:y});

            cardItem.setX(x);
            cardItem.setY(y);
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


    me.interactive = true;
    me.buttonMode = true;


    me.on('pointerdown',clicked)
    
    function clicked()
    {
        me.addChild(cardList[topItemOnQue1-1].me);
        cardList[topItemOnQue1-1].move(que2[totalCards-topItemOnQue1].x,que2[totalCards-topItemOnQue1].y);
        topItemOnQue1--;
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

    var targetX = 0,
        targetY = 0 ;



    this.setX = function(value)
    {
        targetX = me.x = value ;
    }

    this.setY = function(value)
    {
        targetY = me.y = value ;
    }

    this.move = function(x,y)
    {
        targetX = x ;
        targetY = y ;
    }


    this.enterFrame = function()
    {
        me.x += (targetX-me.x)/5;
        me.y += (targetY-me.y)/5;
    }

   return this ;
}