enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Costureira
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 21,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade : 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica','Logica']

}

const monica: Estudante ={
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica', 'Gestao Financeira']
}

function listar(lista:string[]){
    for(const item of lista){
        console.log('-', item);
    }
}

listar(monica.materias);