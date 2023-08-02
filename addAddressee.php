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
        <h1>Här kan du lägga till adressat</h1>

        <label for="addressee">Adressat</label>
        <input type="text" name="addressee" id="addressee">

        <br>

        <label for="streetName">Gatunamn och siffra</label>
        <input type="text" name="streetName" id="streetName">

        <br>

        <label for="postalCode">Postnummer</label>
        <input type="text" name="postalCode" id="postalCode">

        <br>

        <label for="town">Ort</label>
        <input type="text" name="town" id="town">

        <br>

        <input type="submit" value="Spara">

        <script src="javascript/addAddresses.js"></script>

    </div>
</body>

</html>