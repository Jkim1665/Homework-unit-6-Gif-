$(document).ready(function () { // make this as starting point. 
    // create an array of animal names
    var animals = ["cat", "dog", "hamster", "horse", "wolf", "lion", "gorilla", "python", "monkey"];

    var button;
    var newAnimal = "";

    // create a button for each animal in that array
    var buttonGenerator = function () {

        $("#animalButtons").empty();

        // document.getElementById("animalButtons") === $("#animalButtons");
        for (i = 0; i < animals.length; i++) {

            button = $("<button type=" + "button" + ">" + animals[i] + "</button>").addClass("btn btn-warning").attr("data", animals[i]);
            $("#animalButtons").append(button);
        };
    }


    $("animalButtons").on('click', ".btn", function () {
        var animal = $(this).attr("data")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=0cEFzKvm6DVHaNOVaN29D71JTqvHushh";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;
                // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
                //look at the response that the api gives u back 
                ``
                // 5. Under every gif, display its rating (PG, G, so on).
                //    * This data is provided by the GIPHY API.
                //    * Only once you get images displaying with button presses should you move on to the next step.
                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div>");

                    var p = $("<p>");
                    p.text(results[i].rating);
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    var animalImage = $("<img>");

                    // add states of static and dynamic
                    animalImage.attr("src", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-animate", results[i].images.fixed_height.url)
                    animalImage.attr("data-state", "still")
                    animalImage.addClass("gif");.

                    //image is appended to the div
                    animalDiv.append(animalImage);
                    // rating is appended to the div
                    animalDiv.append(p);
                    // new images will be placed at the beginning (top)
                    $("#gifs-appear-here").prepend(animalDiv);
                }
            })
        })
        // 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
       $("#gifs-appear-here").on("click", ".gif", function(event) {
           event.preventDefault();

           //whats the current state of the clicked gif?
           var state = $(this).attr("data-state");

           if(state === "still") {
               $(this).attr("src", $(this).attr("data-animate"));
               $(this).attr("data-state", "animate");
           } else {
               $(this).attr("src", $(this).attr("data-still"));
               $(this).attr("data-state", "still");
           }
        })
        
        $(".submit").on("click", function (event) {
            event.preventDefault();
        
            console.log("submit");

            newAnimal = $("#animal-input").val().trim();
            animals.push(newAnimal);
            console.log(animals)
            buttonGenerator();
        });
        
        buttonGenerator();












