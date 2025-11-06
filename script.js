const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputConvert = document.querySelector(".inputConvert").value;
    const currencyValeuetoConvert = document.querySelector(".currency-value-to-convert");
    const currencyValeueConverted = document.querySelector(".currency-value-converted");


    const dolarToday = 5.2;

    const convertedValue = inputConvert / dolarToday;

    currencyValeuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputConvert);

    currencyValeueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(convertedValue);

    
}


convertButton.addEventListener("click", convertValues)