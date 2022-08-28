<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Puzzle</title>
</head>
<body>
    <form action='game.php' method='post'>

<?php

include "numbers.php";


if(isset($_POST['feld']))
{
    $feld = $_POST['feld'];
    $tile[$feld] = "_";
    $input = "$" . "tile[" . $feld . "]='_';";

    file_put_contents("numbers.php", $input, FILE_APPEND);
}

$j=0;

for($i=0; $i<81; $i++)
{
    if($j >=9)
    {
        $j=0;
        echo "<br>";
    }

     echo "<button name='feld' value='$i'>$tile[$i]</button>";
    $j++;
}




?>
</form>
</body>
</html>