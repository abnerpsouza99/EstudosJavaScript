// Criando objetos de alunos

const aluno01 = {
    nome: `Abner`,
    nota: 9.8
}

const aluno02 = {
    nome: `João`,
    nota: 7.0
}

const aluno03 = {
    nome: `Maria`,
    nota: 4.0
}

// Criando vetor de alunos

const alunos = [
    {
        nome: `Abner`,
        nota: 10.0
    },
    {
        nome: `Juliana`,
        nota: 9.5
    },
    {
        nome: `Leonardo`,
        nota: 3.5
    }
]

// Utilizando "." após o nome do objeto, acessamos o atributo do mesmo

const mediaAlunosIndividuais  = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log("Média calculada utilizando nota de cada objeto")
console.log("A média dos alunos foi: " + mediaAlunosIndividuais)

// Calculando média das notas através do Array
// Primeira posição do Array sempre é 0

const mediaAlunosVetor = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log("Média calculada utilizando nota de cada posição do Array")
console.log("A média dos alunos foi: " + mediaAlunosVetor)

// Exercício - Construção e Impressão de Objetos

const empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programacao",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`)

// Exercício - Vetores e Objetos

const programador = {
    nome: `Abner`,
    idade: 21,
    tecnologias: [
        { nome: `JavaScript`, especialidade: `Desenvolvimento Web`},
        { nome: `Java`, especialidade: `Desktop`},
        { nome: `Sql`, especialidade: `Banco de Dados`}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
