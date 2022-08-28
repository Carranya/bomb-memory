<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Puzzle</title>
</head>
<body>
    <form action="game.php" method="post">
        <?php

            file_put_contents('numbers.php', '<?php ');

            for($i=0; $i<81; $i++)
            {
                
                    $rand = random_int(0,9);
                    $input = "$" . "tile[$i]=$rand;";
                    file_put_contents('numbers.php', $input, FILE_APPEND);  
            }

            /* file_put_contents('numbers.php', "?>", FILE_APPEND); */

        ?>
        <input type='submit' value='Start'>
    </form>
</body>
</html>