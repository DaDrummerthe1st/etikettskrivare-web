$(document).ready(function () {
    $.getJSON("resources/json/addresses.json", function (jsonStream) {
        /* receiver begins here */
        $("#receiverName").text(jsonStream.adressee.Skanemejerier.name);
        $("#receiverStreet").text(jsonStream.adressee.Skanemejerier.address.street + " " + jsonStream.adressee.Skanemejerier.address.streetnumber);
        var pretty_postalcode = jsonStream.adressee.Skanemejerier.address.postalcode.replace(/(\d{3})(\d{2})/gi, '$1 $2');
        $("#receiverPostalCode").text(pretty_postalcode);
        $("#receiverCity").text(jsonStream.adressee.Skanemejerier.address.city);

        /* Sender begins here */
        $("#senderName").text(jsonStream.adressee.Frigoscandia.name);
        $("#senderStreet").text(jsonStream.adressee.Frigoscandia.address.street + " " + jsonStream.adressee.Frigoscandia.address.streetnumber);
        pretty_postalcode = jsonStream.adressee.Frigoscandia.address.postalcode.replace(/(\d{3})(\d{2})/gi, '$1 $2');
        $("#senderPostalCode").text(pretty_postalcode);
        $("#senderCity").text(jsonStream.adressee.Frigoscandia.address.city);

    })
})