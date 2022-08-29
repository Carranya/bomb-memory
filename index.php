<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bomb Memory</title>
</head>
<body>
<?php
    include "game2.php";

    for($rows=0; $rows<5; $rows++)
    {
        for($cols=0; $cols<5; $cols++)
        {
            echo "<button name='choosen' value='" . $card[$rows][$cols] . "' style='width: 50px; height: 50px'>" . $card[$rows][$cols] . "</button>";
        }
        echo "<br>";
    }
?>
</body>
</html>
