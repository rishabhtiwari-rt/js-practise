// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

 addTwoNumbers(4,3)
// sum = addTwoNumbers(4,3)
// console.log("result is: ",sum)

// console.log(addTwoNumbers(4, 3))
// result = addTwoNumbers(2,3)
// console.log(result)


// function loginUserMessage(username = "kunal"){
//     if(!username){
//         console.log("Please enter a valid username")
//         return
//     }
//     return `Welcome back, ${username}!`
// }

// console.log(loginUserMessage("rohit_sharma"))


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a valid username")
        return
    }
    return `Welcome back, ${username}!`
}

// console.log(loginUserMessage())
// loginUserMessage()

function calculateCartPrice(val1, val2,...num1){
return num1
}

// console.log(calculateCartPrice(200, 400, 500, 700))

const user = {
    userName: "rishabh",
    price : 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.prices}`)
}

// handleObject({
//     userName: "dario",
//     prices: 499
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
} 

console.log(returnSecondValue(myNewArray))