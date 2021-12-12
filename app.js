var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector(".textInput")
var textOutput = document.querySelector("#textOutput")
// var textOutput = document.querySelector(".output")


var serverUrl = "https://api.funtranslations.com/translate/minion.json"
function getURl(text) {
    return serverUrl + "?text=" + text;
}
function getOutput() {
    input = textInput.value;
    fetch(getURl(input))
        .then(response => response.json())
        .then(json => {
            var translate = json.contents.translated;
            textOutput.innerHTML = translate
        })
        .catch(errorOccured)
console.log("you clicked")
 
}
btnTranslate.addEventListener("click", getOutput)

function errorOccured(error) {
    console.log("error occured " + error)
    alert("Something went wrong with the server... .Please try again after sometime");
}