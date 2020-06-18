// SE O IMC maior ou igual a 30 : Carlos você está acima do peso!
// SE O IMC menor que 29.9 : Carlos você não está acima do peso.

const nome = 'Carlos'
const peso = 84
const altura = 1.88

const imc = peso / (altura * altura)

if (imc >= 30){
    console.log(`${nome} você está acima do peso!`)
}else{
    if(imc < 29.9){
        console.log(`${nome} você não está acima do peso.`)
    }
}



// Cálculo fictício de aposentadoria

const nomeAposentado = 'Abner'
const sexo = 'M'
const idade = 21
const contribuicao = 7

if(sexo == 'M'){
    if(contribuicao + idade >= 95){
        if(idade >= 35){
            console.log(`${nomeAposentado} você pode se aposentar!`)
        }else{
            console.log(`${nomeAposentado} você não pode se aposentar!`)
        }
    } else{
        console.log(`${nomeAposentado} você não pode se aposentar!`)
    }
}else{
    if(sexo == 'F'){
        if(contribuicao + idade >= 85){
            if(idade >= 30){
                console.log(`${nomeAposentado} você pode se aposentar!`)
            }else{
                console.log(`${nomeAposentado} você não pode se aposentar!`)
            }
        }else{
            console.log(`${nomeAposentado} você não pode se aposentar!`)
        }
    }else{
        console.log("Sexo informado inválido!")
    }
} 