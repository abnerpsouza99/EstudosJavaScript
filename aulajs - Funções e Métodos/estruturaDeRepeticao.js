// Criando programa para calcular média de alunos, armazenados em um vetor, utilizando funções
// para as operações

const alunosTurmaA = [
    {
        nome: `Abner`,
        nota: 3.5
    },
    {
        nome: `Leonardo`,
        nota: 4.6
    },
    {
        nome: `Adriano`,
        nota: 6.0
    }
]

const alunosTurmaB = [
    {
        nome: `Juliana`,
        nota: 10.0
    },
    {
        nome: `Maria`,
        nota: 8.9
    },
    {
        nome: `Anderson`,
        nota: 3.0
    },
    {
        nome: `Rose`,
        nota: 8.7
    }
]

function calculaMediaAlunos(alunos) {
    // let permite mudar o valor da variável
    // Variáveis criadas dentro de algum escopo do projeto, podem ser usadas somente dentro do mesmo
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length;
    return media;
}

const mediaTurmaA = calculaMediaAlunos(alunosTurmaA)
const mediaTurmaB = calculaMediaAlunos(alunosTurmaB)

function enviaMensagem(media) {
    if (media >= 6) {
        return "a turma foi aprovada!"
    } else {
        return "a turma foi reprovada!"
    }
}

const mensagemTurmaA = enviaMensagem(mediaTurmaA)
const mensagemTurmaB = enviaMensagem(mediaTurmaB)

console.log(`A média da Turma A foi ${mediaTurmaA} e ${mensagemTurmaA}`)
console.log(`A média da Turma B foi ${mediaTurmaB} e ${mensagemTurmaB}`)


// Exercícios - Array, Estrutura de Repetição e Escopo

// Criar Array "usuários" para armazenar nome e tecnologias
const usuarios = [
    { nome: `Carlos`, tecnologias: ["HTML", "CSS"] },
    { nome: `Jasmine`, tecnologias: ["JavaScript", "CSS"] },
    { nome: `Tuane`, tecnologias: ["HTML", " Node.js"] }
]

// Percorrer a lista e trazer os usuários e suas tecnologias
for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

// Busca por tecnologia
// Verificar SE o usuário trabalha com CSS ou não

function verificaSeTrabalhaComCSS(usuarios) {

    // Variável criada para armazenar o retorno da função
    let verificaUsuarioCSS = false

    // Percorrendo Array de tecnologias
    for (let j = 0; j < usuarios.tecnologias.length; j++) {
        if (usuarios.tecnologias[j] === "CSS") {
            verificaUsuarioCSS = true
        } else {
            verificaUsuarioCSS = false
        }
    }

    return verificaUsuarioCSS
}

// Percorre o Array de usuarios, aplicando a função

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = verificaSeTrabalhaComCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}


// Exercício - Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

const pessoas = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function somaNumeros(numeros) {
    let soma = 0
    for (let x = 0; x < numeros.length; x++) {
        soma = soma + numeros[x]
    }
    return soma
}

function calculaSaldo(receitas, despesas) {

    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas

}

for (let i = 0; i < pessoas.length; i++) {
    const resultado = calculaSaldo(pessoas[i].receitas, pessoas[i].despesas)

    if (resultado == true && resultado > 0) {
        console.log(`${pessoas[i].nome} possui saldo positivo de ${resultado}`)
    } else {
        console.log(`${pessoas[i].nome} possui saldo negativo de ${resultado}`)
    }
}


