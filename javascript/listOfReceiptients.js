$(document).ready(function () {
    $.getJSON("resources/json/addresses_copy.json", function (jsonStream) {
        /*         console.log(jsonStream.adressee['0']['0'].name) // "Skånemejerier"
         */

        var listInfo = [];

        for (var i = 0; i < Object.keys(jsonStream.adressee['0']).length; i++) {
            // check if co is set
            if (jsonStream.adressee['0'][`${i}`].address['0'].co) {

                // shortening adresseeIndex when c/o
                var coNumber = jsonStream.adressee['0'][`${i}`].
                    address['0'].co

                // fill in the values
                listInfo = [{
                    "name": jsonStream.adressee['0'][`${i}`].name,
                    "adress": [{
                        "coName": jsonStream.adressee['0'][`${coNumber}`].name,
                        "street": jsonStream.adressee['0'][`${coNumber}`].address['0'].street,
                        "streetnumber": jsonStream.adressee['0'][`${coNumber}`].address['0'].streetnumber,
                        "postalcode": jsonStream.adressee['0'][`${coNumber}`].address['0'].postalcode,
                        "city": jsonStream.adressee['0'][`${coNumber}`].address['0'].city
                    }]
                }];

                console.log(listInfo);

                // console.log c/o name and city
                console.log(jsonStream.adressee['0'][`${i}`].name +
                    ", c/o: " +
                    // name of c/o
                    jsonStream.adressee['0'][`${coNumber}`].name +
                    ", " +
                    // city from c/o - adress
                    jsonStream.adressee['0'][`${coNumber}`].address['0'].city
                );

                // printout div
                $("#adressList").
                    append(`
                        <div class="addressee">
                            <h3>${listInfo['0']['name']}</h3>
                            <h5>c/o ${listInfo['0'].adress['0']['coName']}, ${listInfo['0'].adress['0']['city']}</h5>
                        </div>
                    `);
            } else {
                listInfo = [{
                    "name": jsonStream.adressee['0'][`${i}`].name,
                    "adress": [{
                        "street": jsonStream.adressee['0'][`${i}`].address['0'].street,
                        "streetnumber": jsonStream.adressee['0'][`${i}`].address['0'].streetnumber,
                        "postalcode": jsonStream.adressee['0'][`${i}`].address['0'].postalcode,
                        "city": jsonStream.adressee['0'][`${i}`].address['0'].city
                    }]
                }];

                console.log(listInfo);

                // console name & city
                console.log(jsonStream.adressee['0'][`${i}`].name +
                    ", " + jsonStream.adressee['0'][`${i}`].address['0'].city);

                // printout div
                $("#adressList").
                    append(`
                        <div class="addressee">
                            <h3>${listInfo['0']['name']}</h3>
                            <h5>${listInfo['0'].adress['0']['city']}</h5>
                        </div>
                    `);
            }
        }
    });
})