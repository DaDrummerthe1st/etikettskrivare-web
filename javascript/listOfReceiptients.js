$(document).ready(function () {
    $.getJSON("resources/json/addresses_copy.json", function (jsonStream) {
        for (var i = 0; i < Object.keys(jsonStream.adressee).length; i++) {
            console.log(jsonStream.adressee[`${i}`].name +
                ", " + jsonStream.adressee[`${i}`].address.city)
        }
    });
})