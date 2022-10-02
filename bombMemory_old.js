

window.onload = function () {

    let cols = 5;
    let rows = 5;
    let tile = 1;
    let counterTile = 0;
    let board;
    const setCards = {};
    const hostLink = "http://localhost/zody/bomb-memory/cards/";
    const picType = ".jpg";
    const cardBack = "25";
    const emptyCard = "empty";
    const bombCard = "13";


    let step = 0;
    let card1;
    let card2;
    let cardId1;
    let cardId2;
    let turns = 0;
    let pair = 0;
    const totalPair = 12;

  



    // Functions

    function getCard(e) {
        let cardId = e.target.id;
        if (e.target.src != hostLink + emptyCard + picType) {
            let newCard = setCards[cardId] + picType;
            e.target.src = "cards/" + newCard;

            if (e.target.src == hostLink + bombCard + picType) {
                setTimeout(loseGame, 1000);
            }

            if (step == 0) {
                cardId1 = cardId;
                card1 = newCard;
                step++;
            } else {
                cardId2 = cardId;
                card2 = newCard;
                check(cardId1, cardId2, card1, card2);
                step--;
                if (pair == totalPair) {
                    alert("You win!");
                }
            }

            
            
        }

    }

    function check(cardId1, cardId2, card1, card2) {
        if (card1 == card2) {
            setTimeout(function () { paired(cardId1, cardId2) }, 1000);

        } else {
            setTimeout(function () { notPaired(cardId1, cardId2) }, 1000);
        }
    }

    function paired(cardId1, cardId2) {
        let c1 = document.getElementById(cardId1);
        c1.src = "cards/" + emptyCard + picType;
        c1.setAttribute("class", "classEmptyCards");
       
        let c2 = document.getElementById(cardId2);
        c2.src = "cards/" + emptyCard + picType;
        c2.setAttribute("class", "classEmptyCards");

        turns++;
        pair++;
        document.getElementById("turns").innerHTML = turns;
        rotateBoard();
    }

    function notPaired(cardId1, cardId2) {
        let c1 = document.getElementById(cardId1);
        c1.src = "cards/" + cardBack + picType;
        let c2 = document.getElementById(cardId2);
        c2.src = "cards/" + cardBack + picType;
        turns++;
        document.getElementById("turns").innerHTML = turns;
        rotateBoard();
    }

    function loseGame(){
        alert("You lose");
    }

    function rotateBoard(){
        board = document.getElementById("board");
            let randdeg = Math.floor(Math.random()*4);
            let deg = ((randdeg * 90) + 90);
            board.style.transform = "rotate(" + deg + "deg)";
    }

    // Start Game
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            let cards = document.createElement("img");
            let setCardId = c + '' + r;

            cards.setAttribute('src', 'cards/' + cardBack + picType);
            cards.setAttribute('class', 'classCards');
            cards.setAttribute('id', setCardId);

            document.getElementById("board").append(cards);

            setCards[setCardId] = tile;
            if (counterTile == 0) {
                counterTile++;
            } else {
                tile++;
                counterTile--;
            }

        }
    }

    // If player clicked on card
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            let id = c + '' + r;
            document.getElementById(id).addEventListener("click", function (e) { getCard(e) });
        }
    }


}