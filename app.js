
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// This variable contains the URL of the translation API
var serverURL = "https://api.funtranslations.com/translate/yoda.json"

// This function takes an input string and returns the URL of the translation API with the input string encoded as a query parameter
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

// This function is called if there is an error with the API request
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

// This function is called when the user clicks the Translate button
function clickHandler() {
    var inputText = txtInput.value; // Get the input text from the user
    
    // Send a request to the translation API with the input text
    fetch(getTranslationURL(inputText))
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {
            var translatedText = json.contents.translated; // Extract the translated text from the JSON response
            outputDiv.innerText = translatedText; // Display the translated text to the user
           })
        .catch(errorHandler) // Call the errorHandler function if there is an error with the API request
};

// Add an event listener to the Translate button so that clickHandler is called when the button is clicked
btnTranslate.addEventListener("click", clickHandler)
