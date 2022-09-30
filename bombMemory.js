class pickCard{
    construct(cardId1, cardId2, card1, card2)
    {
        this.cardId1 = cardId1;
        this.cardId2 = cardId2;
        this.card1 = card1;
        this.card2 = card2;
      
    }

    check(){
            /*alert("Card1 :" + cardId1 + "/ Card2: " + cardId2);*/
            if(this.card1 == this.card2){
                setTimeout("Gewonnen", 100);
               let c1 = document.getElementById(this.cardId1);
                    c1.src = "cards/black.jpg";
                let c2 = document.getElementById(this.cardId2);
                    c2.src = "cards/black.jpg";
    
            } else {
                alert("Nichts");
            }
        
    
       
    }

    win(){
        alert("Gewonnen!");

    }
}

window.onload = function(){

    let cols = 5;
    let rows = 5;
    let tile = 1;
    let counterTile = 0;
    const setCards = {};
    
    let step = 0;
    let card1;
    let card2;
    let cardId1;
    let cardId2;

    for(let c=0; c<cols; c++){
        for(let r=0; r<rows; r++){
            let cards = document.createElement("img");
            let setCardId = c + '' + r;

            cards.setAttribute('src', 'cards/25.jpg')
            cards.setAttribute('class', 'classCards')
            cards.setAttribute('id', setCardId)

            document.getElementById("board").append(cards);

            setCards[setCardId] = tile;
            if (counterTile == 0){
                counterTile++;
            } else {
                tile++;
                counterTile--;
            }
           
        }
    }

    for(let c=0; c<cols; c++){
        for(let r=0; r<rows; r++){
            let id = c + '' + r;
            document.getElementById(id).addEventListener("click", function(e){getCard(e)});
        }
    }

    function getCard(e){
        let cardId = e.target.id;
        let newCard = setCards[cardId] + ".jpg";
        e.target.src = "cards/" + newCard;

        if(step == 0){
            cardId1 = cardId;
            card1 = newCard;
            step++;
        } else {
            cardId2 = cardId;
            card2 = newCard;
            let game = new pickCard(cardId1, cardId2, card1, card2);
            game.check();
            step--;
        }

    }
   /* 
    function check(cardId1, cardId2, card1, card2){
        /*alert("Card1 :" + cardId1 + "/ Card2: " + cardId2);
        if(card1 == card2){
            setTimeout(win, 100);
           let c1 = document.getElementById(cardId1);
                c1.src = "cards/black.jpg";
            let c2 = document.getElementById(cardId2);
                c2.src = "cards/black.jpg";

        } else {
            alert("Nichts");
        }
    }

    function win(){
        alert("Gewonnen!");

    }*/
/*    function getCard(e){
        for(let c=0; c<cols; c++){
            for(let r=0; r<rows; r++){
                let check = c + '' + r;
                if(check == e.target.id){
                    alert("check: " + check + "/ ID: " + e.target.id);
                }
            }
        }
    }*/
/*
    function show(e){
        alert("ID: " + e.target.id + "\nPic: " + e.target.src);
    }*/

}

    
