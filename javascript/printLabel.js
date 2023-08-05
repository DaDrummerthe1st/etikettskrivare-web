$(document).ready(function () {
    $.getJSON("resources/json/addresses.json", function (jsonStream) {
        $("#receiverName").text(jsonStream.adressee.Skanemejerier.name);
    })
})