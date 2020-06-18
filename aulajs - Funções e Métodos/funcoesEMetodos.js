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
    }
]

function calculaMediaAlunos(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
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
