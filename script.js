const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const InputConvert = document.querySelector(".inputConvert").value

    const dolarToday = 5.2

    const convertedValue = InputConvert / dolarToday
    console.log(convertedValue)
}


convertButton.addEventListener("click", convertValues)