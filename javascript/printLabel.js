$(document).ready(function () {
    $.getJSON("resources/json/addresses.json", function (jsonStream) {
        /* receiver begins here */
        $("#receiverName").text(jsonStream.adressee.Skanemejerier.name);
        $("#receiverStreet").text(jsonStream.adressee.Skanemejerier.address.street + " " + jsonStream.adressee.Skanemejerier.address.streetnumber);
        var pretty_postalcode = jsonStream.adressee.Skanemejerier.address.postalcode.replace(/(\d{3})(\d{2})/gi, '$1 $2');
        $("#receiverPostalCode").text(pretty_postalcode);
        $("#receiverCity").text(jsonStream.adressee.Skanemejerier.address.city);

        /* qr-code for address */
        /* https://davidshimjs.github.io/qrcodejs/ */
        var recAddressQRinfo =
            "https://www.google.com/maps/place/" +
            jsonStream.adressee.Skanemejerier.address.street + "+" + jsonStream.adressee.Skanemejerier.address.streetnumber
            + ",+" + jsonStream.adressee.Skanemejerier.address.postalcode;

        new QRCode(document.getElementById("qrReceiverAdressGoogleMaps"), recAddressQRinfo);

        /* Sender begins here */
        $("#senderName").text(jsonStream.adressee.Frigoscandia.name);
        $("#senderStreet").text(jsonStream.adressee.Frigoscandia.address.street + " " + jsonStream.adressee.Frigoscandia.address.streetnumber);
        pretty_postalcode = jsonStream.adressee.Frigoscandia.address.postalcode.replace(/(\d{3})(\d{2})/gi, '$1 $2');
        $("#senderPostalCode").text(pretty_postalcode);
        $("#senderCity").text(jsonStream.adressee.Frigoscandia.address.city);
    });
});

/*
Boplatsgatan 9, 25151
https://www.google.com/maps/place/Boplatsgatan+9,+213+76+Malm%C3%B6
 */
