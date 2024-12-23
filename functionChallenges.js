/* 1. Write a function named `makeTea` that takes one parameter `typeOfTea` and returns a string like `Making green tea` when called with `green tea` . Store the result in a new variable named `teaOrder`. */

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}

let teaOrder = makeTea("green tea")
console.log(teaOrder)

/* 2. Create a function named `orderTea` that takes a parameter  `teaType`. Inside this function create another function named `confirmOrder` that returns a message like `Order Confirmed  for Chai`. Call `confirmOrder` from within `orderTea` and return the result. */

function orderTea(teaType) {
    function confirmOrder() {
        return `Order Confirmed for ${teaType}`
    }
    return confirmOrder()
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation)


/* 3. Write an arrow function name `calculateTotal` that takes two parameters: "price ad "qunatity". The fuction should return total cost by multiplying `price` and `quantity`. Store the result in a variable named `totalCost` */

const calculateTotal = (price, quantity) =>  price * quantity

let totalCost = calculateTotal(200 , 2)
console.log(totalCost)


/* 4. Write a function named `processTeaOrder` that takes another function , `makeTea` , as a parameter and calls it with the argument `earl grey`. return the result of callig `makeTea`. */


function makeTea(typeofTea) {
  return `makeTea: ${typeofTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey")
}

let processedOrder = processTeaOrder(makeTea)
console.log(processedOrder)


/* 5. Write a function named `createTeamaker` that returns another function .The returned function should take one parameter , `teaType`, and return a message like `Making green tea`. Store the returned function in a variable named `teaMaker` and call it with `green tea`. */

function createTeamaker() {
    return function(teaType){
        return `Making ${teaType}`
    }
}
 let teaMaker = createTeamaker()
 console.log(teaMaker("green tea"))

/* 6. Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number". */

 function stringToNumber(input) {
    const number = Number(input);
    return isNaN(number) ? "Not a number" : number;
}

const number = stringToNumber("20")
console.log(number)

/* 7. Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.*/

function flipBoolean(input) {
    let conversion = !Boolean(input)
    return conversion
}

const convertedResult = flipBoolean(true)
console.log(convertedResult)

/*8. Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"*/

function whatAmI(input) {
    return `I am ${typeof(input)}`
}

const convertedType = whatAmI(true)
console.log(convertedType)

/*9. Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.*/

function isItTruthy(input) {
    return input ? "It's truthy!" : "It's falsey!";
    
}

const result = isItTruthy(1)
console.log(result)
