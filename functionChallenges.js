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
