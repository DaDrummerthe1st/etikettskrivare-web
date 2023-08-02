<?php
// Get a file into an array.  In this example we'll go through HTTP to get
// the HTML source of a URL.
$jsonFile = file_get_contents('../json/addresses.json');

/* print($jsonFile); */

/* // Loop through our array, show HTML source as HTML source; and line numbers too.
foreach ($jsonFile as $line_num => $line) {
    echo "Line #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
} */
/*
// Using the optional flags parameter
$trimmed = file('somefile.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES); */

$adresseesArray = json_decode($jsonFile);

/* print_r($adresseesArray);
 */
foreach($adresseesArray as $adressee) {
    print_r($adressee);
}

print_r($adresseesArray["1"]);
?>