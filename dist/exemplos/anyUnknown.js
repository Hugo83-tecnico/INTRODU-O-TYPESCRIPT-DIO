"use strict";
// Diferenças entre any e unknown
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "teste";
unknownValor = 5;
let stringTeste2 = 'agora vai';
let teste1 = 5;
/*
function jogaErro( erro:string, codigo:number): never{
    throw {error:erro , code: codigo};

}
*/
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
//console.log(jogaErro('deu bug',500));
console.log(teste1);
console.log("teste.....");
console.log("teste...........");
