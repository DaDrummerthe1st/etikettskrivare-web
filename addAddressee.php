<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://code.jquery.com/jquery-3.7.0.js"
        integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>

    <link rel="shortcut icon" href="resources/media/favicon.png">
    <title>Lägg till adressat</title>

</head>

<body>
    <div id="addAddress">
        <form action="#" method="post">
            <h1>Här kan du lägga till adressat</h1>
            <label for="name">Namn</label>
            <input type="text" name="name" id="name">
            <br />
            <label for="streetName">Gatunamn</label>
            <input type="text" name="streetName" id="streetName">
            <br />
            <label for="streetnumber">Gatnummer</label>
            <input type="number" name="streetnumber" id="streetnumber">
            <br />
            <label for="postalCode">Postnummer</label>
            <input type="number" name="postalCode" id="postalCode">
            <br />
            <label for="town">Ort</label>
            <input type="text" name="town" id="town">
            <br />
            <input type="submit" value="Spara">
        </form>
    </div>

<script>
    document.getElementById("name").value = "standard name";
    document.getElementById("streetName").value = "standard street";
    document.getElementById("streetnumber").value = "12";
    document.getElementById("postalCode").value = "12345";
    document.getElementById("town").value = "standard town";
</script>

<?php

$jsonDatabase = "resources/json/addresses.json";

// protect data and erase unwanted characters
// https://stackoverflow.com/questions/2109325/how-do-i-strip-all-spaces-out-of-a-string-in-php

// create an object with all user input
$unsafeInput = new stdClass();
$unsafeInput->name = $_POST["name"];
$unsafeInput->streetName = $_POST["streetName"];
$unsafeInput->streetnumber = $_POST["streetnumber"];
$unsafeInput->postalCode = $_POST["postalCode"];
$unsafeInput->town = $_POST["town"];

/* echo var_dump($unsafeInput);
echo get_object_vars($unsafeInput); */

$jsonEncodeNewAdressee = json_encode($unsafeInput);
echo $jsonEncodeNewAdressee;

// open file for writing only, pointer at the end. Create if not exist
$openedFile = fopen($jsonDatabase, "a");

fwrite($openedFile, $jsonEncodeNewAdressee);

// close file
fclose($openedFile);

// TODO When writing code to append to JSON:
// https://stackoverflow.com/questions/7895335/append-data-to-a-json-file-with-php#answer-21725885
// Use fopen in a try / catch / finally - manner
// https://www.php.net/manual/en/language.exceptions.php

// One way of preventing double additions to the JSON-database
$_POST = [];

?>
</body>

</html>