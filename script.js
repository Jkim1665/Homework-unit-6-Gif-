$(document).ready(function () { // make this as starting point. 
    // create an array of animal names
    var animals = ["cat", "dog", "hamster", "horse", "wolf", "lion", "gorilla", "python", "monkey"];


    // create a button for each animal in that array
    function createButton() {
        // document.getElementById("animalButtons") === $("#animalButtons");
        for (var i = 0; i < animals.length; i++) {
            console.log(animals[i]);

            $("#animalButtons").append('<button>' + animals[i] + '</button>');
        }
    }
    createButton();

    function pullImages() {
        $("animalButtons").on('click', function () {
            var animal = $(this).attr("data")
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=0cEFzKvm6DVHaNOVaN29D71JTqvHushh";
        
            $.ajax({
                url:queryURL,
                method:"GET"
            })
            .then(function(response) { 
                var results = response.data;
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
//look at the response that the api gives u back 
``        
// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.
                for (var i = 0; i < 10; i++) {
                    var gifDiv = $("<div class='item'>");
        
                    var rating = results[i].rating;
        
                    var p = $("<p>").text("Rating: " + rating);
        
                    var animalImage = $("<img>");
                    animalImage.attr("src", results[i].images.fixed_height.url);
        
                    gifDiv.prepend(p);
                    gifDiv.prepend(animalImage);
        
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            })
        });
    }
// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    function animateGIF() {
        $(document).on('click', ".item", function () {

            // go from static --> dynamic 

            // when clicked again go from dynamic --> static
    })
};







// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
//look at the response that the api gives u back 





// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
$("#animalButtons").on("click", function(event) {
    event.preventDefault();

    var newButton = $("#animal-input").val().trim();

    // Create a new variable that will hold a "<p>" tag.
    // Then give it an ID in the following form:
    // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
    // Then append the to-do "value" as text to this <p> element.
    var newItem = $("<p>");

    newItem.append(" " + animalButtons);

    $("#animalButtons").append(newItem);

    // Clear the textbox when done
    $("#animal-input").val("");

  });
});