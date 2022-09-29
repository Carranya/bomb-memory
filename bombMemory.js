window.onload = function(){

    cols = 5;
    rows = 5;
    tile = 1;
    counterTile = 0;
    let content = "";

    for(let c=0; c<cols; c++){
        for(let r=0; r<rows; r++){
            let cards = document.createElement("img");

            cards.setAttribute('src', 'img/' + tile + '.jpg')
            cards.setAttribute('class', 'classCards')
            cards.setAttribute('id', c + '' + r)

            document.getElementById("board").appendChild(cards);
            if (counterTile == 0){
                counterTile++;
            } else {
                tile++;
                counterTile--;
            }
           
        }
    }
}