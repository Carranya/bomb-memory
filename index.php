<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bomb Memory</title>
    <style>
        .main img
        {
            width: 80px;
            height: 80px;
        }
    </style>
</head>
<body>
<div class="main">
<?php
    include "game2.php";

    for($rows=0; $rows<5; $rows++)
    {
        for($cols=0; $cols<5; $cols++)
        {
            $image = $card[$rows][$cols] . ".jpg";
            echo "<button name='choosen' value='" . $card[$rows][$cols] . "' style='width: 100px; height: 100px'><img src='img/" . $image . "'></img></button>";
        }
        echo "<br>";
    }
?>
</div>
</body>
</html>
