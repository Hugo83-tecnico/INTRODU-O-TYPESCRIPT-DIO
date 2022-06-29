// Atribuições dos Elementos HTML AS VARIAVEIS

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLInputElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLInputElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;


let somaValor = 0;                                                  // Variavel somaValor guarda a soma dos valores da variavel soma 

campoSaldo.innerHTML = '0';                                         // Iniciamos o valor do campo saldo com valor 0 do tipo string

function somarAoSaldo(soma:number) {                                // Função chamada para somar o saldo
    campoSaldo.innerHTML = '';                                      // Limpamos o campo saldo para novo valor
    if(typeof soma === 'number')                                    // Verificação do tipo da variavel recebida
        somaValor += soma;                                          // A variavel somaValor incrementa os valores da variavel soma
        campoSaldo.innerHTML = somaValor.toString();                // Antes de informar o valor de saida , o mesmo e convertido em string
}

function limparSaldo() {                                            // Função chamada para limpar as variaveis soma.value, somaValor e campoSaldo.innerHTML
    soma.value = '';
    somaValor = 0;
    campoSaldo.innerHTML = '';                                
}

botaoAtualizar.addEventListener('click', function () {              // Evento botão faz a chamada da função somarAoSaldo
    if(Number(soma.value)){                                         // Fazemos uma verificação se há valor no campo soma 
        somarAoSaldo(Number(soma.value));                           
    }else{                                                          // Se o campo soma estiver limpo a chamada vai correr, não sera incrementado nenhuma valor
        somarAoSaldo(Number(soma.value));
    }

});

botaoLimpar.addEventListener('click', function () {                // Evento botão faz a cha,ada da função limparSaldo 
    limparSaldo();
});
