const jsonAdressObj = "resources/addresses.json"

$(document).ready(function () {
    $("input[type='submit']").on("click", function () { // works!
        /*
        $.getJSON(jsonAdressObj, function (data) {
            console.log(data.name); // Prints: Harry
            console.log(data.stopsign); // Prints: 14
        }).fail(function () {
            console.log("A JSON-parse error has occurred.");
        });
        /*    $.getJSON(jsonAdressObj, function (data) {
                // now data is JSON converted to an object / array for you to use.
                alert(data[1].cast) // Tim Robbins, Morgan Freeman, Bob Gunton
    
                var newMovie = { cast: 'Jack Nicholson', director: "JOakim Reuterborg" } // a new movie object
    
                // add a new movie to the set
                data.push(newMovie);
    
            });
        */
    })
})