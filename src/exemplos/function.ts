type input = number | string;

function somaTotal(input1:number,input2:number):number{ // :number garante que o retorno é number
    return input1 + input2;
}
function somaValores(input1:input ,input2:input){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();

    }else{
        return input1 + input2;
    }
}

function printaValores(input1:number, input2:number):void {
    let valor = input1 + input2;
}

//Função usando callback como parametro

function matematica(input1:number, input2: number, callback:(numero:number)=>number):number{
    let resultado = input1 + input2;
    return callback(resultado);
}

function divide(numero:number){
    return numero/numero;
}

function multiplica(numero:number){
    return numero * numero;
}

console.log(matematica(2, 4, divide))
console.log(matematica(2, 4, multiplica))
