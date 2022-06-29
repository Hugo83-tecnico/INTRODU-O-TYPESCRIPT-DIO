"use strict";
function somaTotal(input1, input2) {
    return input1 + input2;
}
function somaValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
function printaValores(input1, input2) {
    let valor = input1 + input2;
}
//Função usando callback como parametro
function matematica(input1, input2, callback) {
    let resultado = input1 + input2;
    return callback(resultado);
}
function divide(numero) {
    return numero / numero;
}
function multiplica(numero) {
    return numero * numero;
}
console.log(matematica(2, 4, divide));
console.log(matematica(2, 4, multiplica));
