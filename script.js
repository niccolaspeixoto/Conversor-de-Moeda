const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#select-for");

function convertValues() {
    const inputToConvert = document.querySelector(".inputConvert").value;
    const currencyValeuetoConvert = document.querySelector(".currency-value-to-convert");
    const currencyValeueConverted = document.querySelector(".currency-value-converted");

    const dolarToday = 5.2;
    const euroToday = 5.9;
    const realToday = 1;
    const libraToday = 6.8;

    



    //se a moeda escolihda para converter for dolar, faça isso
    if (currencySelect.value == "dolar") {
        currencyValeueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",}).format(inputToConvert / dolarToday);
    }

    //se a moeda escolihda para converter for euro, faça isso
    if (currencySelect.value == "euro") {
        currencyValeueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",}).format(inputToConvert / euroToday);
    }

    //se a moeda escolihda para converter for real, faça isso
    if (currencySelect.value == "real") {
        currencyValeueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",}).format(inputToConvert / realToday);
    }

    if (currencySelect.value == "libra") {
        currencyValeueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",}).format(inputToConvert / libraToday);
    }

    currencyValeuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",}).format(inputToConvert);

    
}


function changeCurrency() {
    const currencyName = document.querySelector("#currency-name");
    const currencyImg = document.querySelector(".currency-converted");

    if (currencySelectFrom.value == "dolar") {
       currencyName.innerHTML =  "Dólar Americano"
      currencyImg.src = "./assests/dolar.png"
    }      



    if (currencySelect.value == "dolar") {
      currencyName.innerHTML =  "Dólar Americano"
      currencyImg.src = "./assests/dolar.png"
    } 

     if (currencySelect.value == "euro") {
      currencyName.innerHTML =  "Euro"
      currencyImg.src = "./assests/euro.png";
    } 
    
    if (currencySelect.value == "real") {
        currencyName.innerHTML =  "Real Brasileiro"
        currencyImg.src = "./assests/brasil 2.png";
      }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML =  "Libra"
        currencyImg.src = "./assests/libra.png";
      }

      convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)