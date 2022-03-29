const old_currency = document.getElementById('select__old');
const old_amount = document.getElementById('input');
const new_amount = document.getElementById('result');
const new_currency = document.getElementById('select__new');


old_amount.addEventListener("change",getCurrencies, false);
new_currency.addEventListener("change",getCurrencies, false);

async function getCurrencies(){
    const settings = await{
        "async": true,
        "crossDomain": true,
        "url": "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have="+old_currency.value+"&want="+new_currency.value+"&amount="+old_amount.value,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter-by-api-ninjas.p.rapidapi.com",
            "x-rapidapi-key": "4f40b3c849msha279e1e8456b1bcp19b589jsnfb8f0102277e"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        new_amount.value = response.new_amount;
    });

}

