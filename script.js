const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#select-for");


function convertValues() {
  const InputConvert = document.querySelector(".inputConvert").value;
  const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor em real
  const CurrencyValueConverted = document.querySelector( ".currency-value-converted"); //valor em dolar

  const dolarToday = 5.2;
  const euroToday = 5.9;
  const realToday = 1;

  // Atualiza o valor em Reais
  CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(InputConvert);



  if (currencySelect.value == "Dolar") {
    //se o select for "dolar", entra aqui
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(InputConvert / dolarToday);
  }

  if (currencySelect.value == "euro") {
    //se o select for "euro", entra aqui
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(InputConvert / euroToday);
  }

  if (currencySelect.value == "Real")
  CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(InputConvert / realToday) 
}


function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const currencyImg = document.querySelector(".currency-converted")
    
  if (currencySelect.value == "Dolar"){
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assests/dolar.png"
  }

  if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assests/euro.png"
  }

  if (currencySelect.value == "Real"){
    currencyName.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assests/brasil 2.png"
  }

  convertValues()
}



currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
