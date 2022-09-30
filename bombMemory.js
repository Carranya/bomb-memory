window.onload = function(){

    let cols = 5;
    let rows = 5;
    let tile = 1;
    let counterTile = 0;
    const setCards = {};
    
    let step = 0;
    let card1;
    let card2;

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
            card1 = newCard;
            step++;
        } else {
            card2 = newCard;
            check(card1, card2);
            step--;
        }

    }
    
    function check(card1, card2){
        /*alert("Card1 :" + card1 + "/ Card2: " + card2);*/
        if(card1 == card2){
            setTimeout(win, 100);

        } else {
            alert("Nichts");
        }
    }

    function win(){
        alert("Gewonnen!");

    }
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

    
