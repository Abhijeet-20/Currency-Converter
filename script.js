const currency1 = document.querySelector('#currency1');
const firstnum = document.querySelector('#first');

const currency2 = document.querySelector('#currency2');
const scndnum = document.querySelector('#second');

const exchangeRate = document.querySelector('#exchangeRate');


const apikey = "d7a0b04f566dafa5440c36d3";
const apiUrl = "https://v6.exchangerate-api.com/v6/d7a0b04f566dafa5440c36d3/latest/";
update();

async function update(){
    const response = await fetch(apiUrl + `${currency1.value}`);
    var data = await response.json();
    // console.log(data);
    const rate = data.conversion_rates[currency2.value];
    // console.log(rate);

    exchangeRate.innerHTML = `1 ${currency1.value} = ${rate + " " +currency2.value}`;

    scndnum.value = (firstnum.value*rate).toFixed(2);
}

currency1.addEventListener("change",update);
currency2.addEventListener("change",update);
firstnum.addEventListener("input", update);
