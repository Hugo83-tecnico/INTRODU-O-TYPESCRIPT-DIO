let btn1 = document.getElementById("button");
let entrada1 = document.getElementById("input1") as HTMLInputElement;
let entrada2 = document.getElementById("input2") as HTMLInputElement;

function adicionaNumero(numero1:number, numero2:number, devePrintar:boolean, frase:string){
    let resultado = numero1 + numero2
    if(devePrintar){
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}

let devePrintar = true;
let frase = 'O valor é';

if (btn1){

    btn1.addEventListener('click',function(){
        if(entrada1 && entrada2){
            console.log(adicionaNumero(Number(entrada1.value), Number(entrada2.value), devePrintar, frase));
        }

});

}