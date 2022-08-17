const numberInput = document.getElementById("spacesNumber") as HTMLInputElement;
const stringInput = document.getElementById("stringToPrepend") as HTMLInputElement;
const prependButton = document.getElementById("prependButton") as HTMLButtonElement;



prependButton!.addEventListener("click", function () {
const numInputArray = numberInput.value.split(", ");
const stringInputArray = stringInput.value.split(", ");

    let result = prepend(numInputArray, stringInputArray);
    console.log(result)

});


function prepend<T>(
numInputArray: T[],
stringInputArray: T[]
) {
let numSpaces = numInputArray.map(str => {
return Number(str);
})
let wordsArray = stringInputArray.map(str => {
return String(str);
})
    let result = "";
    for (let i=0; i < wordsArray.length; i++) {
        let inputString = wordsArray[i];
         let spacesNumber = numSpaces[i];

    let spacesString: String = ""
    for (let i=0; i < spacesNumber; i++) {
        spacesString += "&nbsp";
    }
    result += spacesString + inputString;
    }
    let resultString: String = result;

    return resultString
}