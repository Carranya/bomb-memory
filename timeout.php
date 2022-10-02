<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>

    let cols = 5;
    let rows = 5;

    const setCards = {};
    const countPic = {};

    for(let i=1; i<=12; i++){
      countPic[i] = 0;
    }
    countPic[13] = 1;

   for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
     
            let setCardId = c + '' + r;

            randomPic(setCardId);
    

        }
    }
    
  

    function randomPic(setCardId){
      let randPic = (Math.floor(Math.random() * 13)) + 1;
            //alert(randPic);
      if(countPic[randPic] > 1){
        randomPic(setCardId);
      } else {
        countPic[randPic]++;
        setCards[setCardId] = randPic;
      }
    }

    

  </script>


  <div id="show"></div>
</body>
</html>