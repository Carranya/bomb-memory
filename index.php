<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width; initial-scale=1.0">
    <title>Button Puzzle</title>
</head>
<body>
    <form action="game.php" method="post">
        <?php

            $numbers = array();
            for($i=0; $i<9; $i++)
            {
                for($j=0; $j<9; $j++)
                {
                    $rand = random_int(0,9);
                    echo "<button name='tile$i$j' value='$rand'>$rand</button>";
                    $numbers[$i][$j] = $rand;
                }
                echo "<br>";
            }
            echo "<input type='hidden' name='numbers' value='$numbers'>";
        ?>
    </form>
</body>
</html>