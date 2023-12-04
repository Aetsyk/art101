const ENDPOINT = "https://api.nasa.gov/planetary/apod";
const apikey = "fI8ggLd1NHvafQaBmgF9v5iH4OCRvPOC8BdVK3xN";

function ajaxSuccess(data){
    $("#output").append("<h2>" + data.title + "</h2>");
    $("#output").append("<p><b>" + data.date + "</b></p>");
    $("#output").append("<p>" + data.explanation + "</p>");
    $("#output").append("<img src='" + data.url + "'>");
    if (data.copyright) {
        $("#output").append("<p>Copyright: " + data.copyright + "</p>");
    }
}

function ajaxError(request,error){
	console.log("Oops:", request, error);
}

// add button event listener
$("#get-em").click(function(){
    $("#output").html("");
  
	// construct ajax object
	const ajax_params = {
        url: ENDPOINT,
        data: {api_key: apikey},
        type: "GET",
        dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
	}

    $.ajax(ajax_params);
})
