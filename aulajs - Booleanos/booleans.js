// Criando programa para calcular média de students, armazenados em um vetor, utilizando funções
// para as operações

const classA = [
    {
        name: `Abner`,
        grade: 3.5
    },
    {
        name: `Leonardo`,
        grade: 4.6
    },
    {
        name: `Adriano`,
        grade: 6.0
    }
]

const classB = [
    {
        name: `Juliana`,
        grade: 10.0
    },
    {
        name: `Maria`,
        grade: 8.9
    },
    {
        name: `Anderson`,
        grade: 3.0
    }
]

function calculateAverageStudents(students) {
    return (students[0].grade + students[1].grade + students[2].grade) / 3
}

function enviaMensagem(average) {
    if (average >= 6) {
        return "a turma foi aprovada!"
    } else {
        return "a turma foi reprovada!"
    }
}

// Continuando o exercício...
// Marcar student como flunked se a grade do mesmo for
// inferior a 5
// Para isso, criei uma função para armazenar os students REPROVADOS

function markAsFlunked(student) {
    // .flunked está criando um atributo novo para o student, para armazenar se ele está flunked
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
    // Serve para apresentar Array de forma organizada no console
    // console.table(student)
}

function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} was FLUNKED`)
    }
}

function studentsFlunkeds(students){
    // Outra forma de fazer o "for"
    for(let student of students){
        markAsFlunked(student);
        sendMessageFlunked(student)
    }
}

const classAverageA = calculateAverageStudents(classA)
const classAverageB = calculateAverageStudents(classB)

const classMessageA = enviaMensagem(classAverageA)
const classMessageB = enviaMensagem(classAverageB)

console.log(`The average of ClassA was ${classAverageA} and ${classMessageA}`)
console.log(`The average of ClassB was ${classAverageB} and ${classMessageB}`)

studentsFlunkeds(classA)
studentsFlunkeds(classB)