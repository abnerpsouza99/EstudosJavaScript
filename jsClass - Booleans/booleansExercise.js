// Exercises of fixation about booleans, code organization and other JavaScript concepts
// Create a object with name, transactions (a empty array) and balance (start in 0)

const user = {
    name: `Abner`,
    transactions: [],
    balance: 0
}

// Create a function for add a new transaction in transactions array.

function createTransaction(transaction){

    user.transactions.push(transaction)
    if(transaction.type == "credit"){
        user.balance = user.balance + transaction.value
    }
    if(transaction.type == "debit"){
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type){
    let higherTransaction = {type: type, value: 0}
    for(let transaction of user.transactions){
        if(transaction.type == type && transaction.value > higherTransaction.value){
            higherTransaction = transaction
        }
    }

    return console.log(higherTransaction)
}

function getAverageTransactionValue(){
    let sum = 0
    let average
    for(let transaction of user.transactions){
        sum = sum + transaction.value         
    }

    average = sum / user.transactions.length

    return console.log(`The average of transactions was ${average}`)
}
function getTransactionsCount(){
    // for return the object in function, the same needed to be created
    let count = {debit: 0, credit: 0}
    for(let transaction of user.transactions){
        if(transaction.type == "credit"){
            count.credit++
        }
        if(transaction.type == "debit"){
            count.debit++
        }
    }
    console.log(count)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // Expected response: 60

getHigherTransactionByType("credit"); // Expected response: { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // Expected response: { type: 'debit', value: 80 }

getAverageTransactionValue(); // Expected response: 70

getTransactionsCount(); // Expected response: { credit: 2, debit: 2 }





