<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-COmpatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bomb Memory</title>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="bombMemory.js"></script>
</head>
<body>
    <div id="header">Bomb Memory</div>

    <div id="board"></div>
    <br>
    <div class="classInfo">Pairs: <span id="pairs">0</span> / Turns: <span id="turns">0</span></div>
   
    <div id="winGame" class="winLoseBox">
        <h1>You win!</h1>
        <p>Pairs: <span id="winPairs">0</span> / Turns: <span id="winTurns">0</span></p>
        <p><a href="index.php" class="newGame">New Game?</a></p>
    </div>

    <div id="loseGame" class="winLoseBox">
        <h1>You lose!</h1>
        <p>Pairs: <span id="losePairs">0</span> / Turns: <span id="loseTurns">0</span></p>
        <p><a href="index.php" class="newGame">New Game?</a></p>
    </div>
</body>
</html>

