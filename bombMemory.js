

window.onload = function () {

    let cols = 5;
    let rows = 5;
    let board;
    const setCards = {};
    const countPic = {};
    const hostLink = "http://localhost/zody/bomb-memory/cards/";
    const picType = ".jpg";
    const cardBack = "back";
    const emptyCard = "empty";
    const bombCard = "13";


    let step = 0;
    let card1;
    let card2;
    let cardId1;
    let cardId2;
    let turns = 0;
    const maxTurns = 30;
    let pair = 0;
    const totalPair = 12;





    // Functions

    function randomPic(setCardId) {
        let randPic = (Math.floor(Math.random() * 13)) + 1;
        if (countPic[randPic] > 1) {
            randomPic(setCardId);
        } else {
            countPic[randPic]++;
            setCards[setCardId] = randPic;
        }
    }

    function getCard(e) {
        let cardId = e.target.id;
        if (e.target.src != hostLink + emptyCard + picType) {
            let newCard = setCards[cardId] + picType;
            e.target.src = "cards/" + newCard;

            if (e.target.src == hostLink + bombCard + picType) {
                setTimeout(rotateBoard, 1000);
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
        pair++;

        if (pair == totalPair) {
            setTimeout(winGame, 100)
        }

        countTurns();
        //rotateBoard();
    }

    function notPaired(cardId1, cardId2) {
        let c1 = document.getElementById(cardId1);
        c1.src = "cards/" + cardBack + picType;
        let c2 = document.getElementById(cardId2);
        c2.src = "cards/" + cardBack + picType;
        countTurns();
    }

    function countTurns() {
        turns++;
        document.getElementById("turns").innerHTML = turns;
        if (turns == maxTurns) {
            loseGame();
        }
    }

    function loseGame() {
        alert("You lose");
    }

    function winGame() {
        alert("You win");
    }

    function rotateBoard(id) {
        board = document.getElementById("board");
        let randdeg = Math.floor(Math.random() * 4);
        let deg = ((randdeg * 90) + 90);
        board.style.transform = "rotate(" + deg + "deg)";
    }



    // Start Game

    for (let i = 1; i <= 12; i++) {
        countPic[i] = 0;
    }
    countPic[13] = 1;

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            let cards = document.createElement("img");
            let setCardId = c + '' + r;

            cards.setAttribute('src', 'cards/' + cardBack + picType);
            cards.setAttribute('class', 'classCards');
            cards.setAttribute('id', setCardId);

            document.getElementById("board").append(cards);

            randomPic(setCardId);

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