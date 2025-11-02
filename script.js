const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("#select-for");
const currencySelectFrom = document.querySelector("#select-from");

function convertValues() {
  //função que funciona somente a partir da segundo select da section.
  const InputConvert = document.querySelector(".inputConvert").value;
  const CurrencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor em real
  const CurrencyValueConverted = document.querySelector(
    ".currency-value-converted"
  ); //valor em dolar

  const { dolarToday, euroToday, realToday, libraToday } = changingCurrencyValues();

  // Atualiza o valor em Reais

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
    }).format(InputConvert / realToday);

  if (currencySelect.value == "Libra") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(InputConvert / libraToday);
  }
}

function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const currencyImg = document.querySelector(".currency-converted");

  if (currencySelect.value == "Dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assests/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assests/euro.png";
  }

  if (currencySelect.value == "Real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assests/brasil 2.png";
  }

  if (currencySelect.value == "Libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assests/libra.png";
  }

  convertValues();
}

function firstPart() {
  const InputConvert = document.querySelector(".inputConvert").value;
  const CurrencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor da primeira moeda

  const { dolarToday, euroToday, realToday, libraToday } = changingCurrencyValues();

  if (currencySelectFrom.value == "Dolar") {
    //se o select for "dolar", entra aqui
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(InputConvert);
  }

  if (currencySelectFrom.value == "euro") {
    //se o select for "euro", entra aqui
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(InputConvert);
  }

  if (currencySelectFrom.value == "Real")
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(InputConvert);

  if (currencySelectFrom.value == "Libra") {
    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(InputConvert);
  }
}

function changeSelectFrom() {
  const currencyNamefirst = document.getElementById("currencyToConvert");
  const currencyToConvertImg = document.querySelector(".currency-to-convert");

  if (currencySelectFrom.value == "Real") {
    currencyNamefirst.innerHTML = "Real Brasileiro";
    currencyToConvertImg.src = "./assests/brasil 2.png";
  }

  if (currencySelectFrom.value == "Dolar") {
    currencyNamefirst.innerHTML = "Dólares";
    currencyToConvertImg.src = "./assests/dolar.png";
  }

  if (currencySelectFrom.value == "euro") {
    currencyNamefirst.innerHTML = "Euro";
    currencyToConvertImg.src = "./assests/euro.png";
  }

  if (currencySelectFrom.value == "Libra") {
    currencyNamefirst.innerHTML = "Libra";
    currencyToConvertImg.src = "./assests/libra.png";
  }
  firstPart();
}

function changingCurrencyValues() {
  let dolarToday;
  let euroToday;
  let realToday;
  let libraToday;

  if (currencySelectFrom.value == "Real") {
    dolarToday = 5.2;
    euroToday = 5.9;
    realToday = 1;
    libraToday = 6.3;
  }

  if (currencySelectFrom.value == "Dolar") {
    dolarToday = 1;
    euroToday = 0.86;
    realToday = 5.2;
    libraToday = 0.76;
  }

  if (currencySelectFrom.value == "euro") {
    dolarToday = 1.32;
    euroToday = 1;
    realToday = 6.23;
    libraToday = 0.88;
  }

  if (currencySelectFrom.value == "Libra") {
    dolarToday = 1.32;
    euroToday = 1.13;
    realToday = 7.07;
    libraToday = 1;
  }

  return {
    dolarToday,
    euroToday,
    realToday,
    libraToday
  };
}

// Adicionando evento de input para atualizar o valor em tempo real
const inputElement = document.querySelector(".inputConvert");
inputElement.addEventListener("input", firstPart);

currencySelectFrom.addEventListener("change", changeSelectFrom);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
