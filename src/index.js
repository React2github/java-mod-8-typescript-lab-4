var numberInput = document.getElementById("spacesNumber");
var stringInput = document.getElementById("stringToPrepend");
var prependButton = document.getElementById("prependButton");
prependButton.addEventListener("click", function () {
    var numInputArray = numberInput.value.split(", ");
    var stringInputArray = stringInput.value.split(", ");
    var result = prepend(numInputArray, stringInputArray);
    console.log(result);
});
function prepend(numInputArray, stringInputArray) {
    var numSpaces = numInputArray.map(function (str) {
        return Number(str);
    });
    var wordsArray = stringInputArray.map(function (str) {
        return String(str);
    });
    var result = "";
    for (var i = 0; i < wordsArray.length; i++) {
        var inputString = wordsArray[i];
        var spacesNumber = numSpaces[i];
        var spacesString = "";
        for (var i_1 = 0; i_1 < spacesNumber; i_1++) {
            spacesString += "&nbsp";
        }
        result += spacesString + inputString;
    }
    var resultString = result;
    return resultString;
}
