<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For print</title>
    <link rel="shortcut icon" href="resources/media/favicon.png">
    <script src="https://code.jquery.com/jquery-3.7.0.js"
        integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="javascript/qrcode.min.js"></script>

    <link rel="stylesheet" href="css/printLabel.css" />

    <!--     <link rel="stylesheet" media="print" href="css/printLabel.css" />
 -->
</head>

<body>
    <div id="miscInfo">
        <p id="miscField1">
        </p>
        <p id="miscField2"></p>
        <p id="miscField3"></p>
    </div>
    <div id="receiver">
        <p id="receiverName">test</p>
        <p id="receiverCo"></p>
        <p id="receiverStreet"></p>
        <p id="receiverStreetNumber"></p>
        <p id="receiverPostalCode"></p>
        <p id="receiverCity"></p>
        <div id="qrReceiverAdressGoogleMaps"></div>
    </div>

    <div id="qrCompleteLabel">

    </div>

    <div id="sender">
        <p id="senderName"></p>
        <p id="senderCo"></p>
        <p id="senderStreet"></p>
        <p id="senderStreetNumber"></p>
        <p id="senderPostalCode"></p>
        <p id="senderCity"></p>
    </div>

    <div id="barcodeWaybill">

    </div>

    <div id="barcodePalletNr"></div>

    <script src="javascript/printLabel.js"></script>

</body>

</html>