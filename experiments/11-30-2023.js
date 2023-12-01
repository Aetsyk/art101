const url1 = "https://pokeapi.co/api/v2/berry/1";
const url2 = "https://jservice.io/api/random";

$.ajax({
    url: url2, // the endpoint, the source of our data
    type: "GET",
    dataType: "json" // type of data we expect back
})
    
.done(function(result) { // runs if we receive something
    console.log(result);
})
    
.fail(function(jqXHR, textStatus, errorThrown) { // runs if we don't
    console.log("Error:", textStatus, errorThrown);
});