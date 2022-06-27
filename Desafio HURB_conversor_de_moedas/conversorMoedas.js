//CONVERSOR DE MOEDAS NODE.JS

const request = require('request')

//https://docs.awesomeapi.com.br/ site aonde os valores das moedas se encontram

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL';

// REQUEST(OPTION, CALLBACK)
const options = {

    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    Headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'

    }
}
const callback_all = function (erro, res, body) {
    let json = JSON.parse(body);
    console.log(json);
}

//DOLAR
const callbackInDollar = function (erro, res, body) {
    let json = JSON.parse(body)
    cotacao = parseFloat(json.USDBRL['bid']).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    dia = json.USDBRL['create_date'];
    console.log(`1 DOLAR = R$ ${cotacao} REAIS, DIA = ${dia}`);
}

//BITCOIN
const callbackInBitcoin = function (erro, res, body) {
    let json = JSON.parse(body)
    //PRECISA ALTERAR O FORMATO DA SAIDA DO VALOR DO BTC QUE EM REAIS PASSA DA CASA DOS 100.000,00 BRL
    cotacao = parseFloat(json.BTCBRL['bid']).toFixed(3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    dia = json.BTCBRL['create_date'];
    console.log(`1 Biticoin = R$ ${cotacao} REAIS, DIA = ${dia}`);
}
request(options, callbackInBitcoin)
request(options, callbackInDollar)
