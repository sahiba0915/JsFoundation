/* 1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable sum. */

let i = 1
let sum = 0
while(i <= 5){
    sum = sum + i
    i++
}

console.log(sum)

/* 2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`. */

let countdown = []
j = 5

while(j >= 1){
  countdown.push(j)
  j--
}

console.log(countdown)



/* 3. Write a `do-while` loop that prompts the user to enter their favorite tea type until they enter `stop`. Store each tea type in an array name `teaCollection`. */
// Note run this in browser as nodejs doesn't support prompt function.

// let teaCollection = []
// let teaNames

// do {
//     teas = prompt(`Enter your favorite tea (type "stop" to finish)`)

//     if(teas !== "stop"){
//         teaCollection.push(teas)
//     }
    
// } while (teas !== "stop");

// console.log(teaCollection)

/* 4. Write a `do-while` loop that adds numbers from 1 to 3 and store the result in varaible named `total`. */

let k = 1
let total = 0

do {
    total = total + k 
    k++
} while (k <= 3);

console.log(total)

/* 6. Write a `for` loop that multiplies each element in the array `[2, 4 , 6] by 2 and stores results in a new array names `multipliedNumbers`. */

let multipliedNumbers = []

let numbers = [2, 4, 6]

for(let l = 0; l < numbers.length; l++){
    multiply = numbers[l] * 2
    multipliedNumbers.push(multiply)
}

console.log(multipliedNumbers)



/* 5. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"] and stores each city in a new array names `cityList`. */


let cityList = []

let cities = ["Paris", "New York", "Tokyo", "London"]

for(let l = 0; l < cities.length; l++){
    city = cities[l]
    cityList.push(city)
}

console.log(cityList)

/* 6. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolog tea"]` and stops the loop when it finds chai. store all the teas before "chai" in a new array named `selectedTeas`. */

let selectedTeas = []
let teas = ["green tea", "black tea", "chai", "oolog tea"]

for (let k = 0; k <= teas.length; k++) {
    if(teas[k] === "chai"){
        break;
    }
    selectedTeas.push(teas[k])
}

console.log(selectedTeas)

/* 7. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `Paris`. Store all the other cities in a new array named `visitedCities`. */

let visitedCities = []
let otherCity = ["London", "New York", "Paris", "Berlin"]

for (let k = 0; k < otherCity.length; k++) {
    if(otherCity[k] === "Paris"){
        continue;
    }
    visitedCities.push(otherCity[k])
}

console.log(visitedCities)

/* 8. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stops when the number `4` is found. Store the numbers before `4` in an array and named `smallNumbers`. */

let smallNumbers = []
let number = [1,2,3,4,5] 

for (const num of number) {
    if (num === 4) {
        break
    }
    smallNumbers.push(num)
}

console.log(smallNumbers)

/* 8. Write a `for-of` loop that loops through the array `["green tea", "black tea", "herbal tea", "oolog tea"]` and skips `herbal tea`. Store all the other teas in a new array named `preferredTeas`. */

let preferredTeas = []
let teaList = ["green tea", "black tea", "herbal tea", "oolog tea"]

for (const tea of teaList) {
    if(tea === "herbal tea"){
        continue
    }
    preferredTeas.push(tea)
}

console.log(preferredTeas)

/* 9. Use a `for-in` loop to loop through an object containing city populations. Stop the loop when population of `Berlin` is found and store all the previous cities populations in a new object named `cityPopulations`.
let citiesPopulation = {
   "London": 890000,
   "New York": 8400000,
   "Paris": 2400000,
    "Berlin": 350000
}*/

let cityNewPopulations = {}
let citiesPopulation = {
    London: 890000,
    "New York": 8400000,
    Paris: 2400000,
    Berlin: 350000
 }

 for (const i in citiesPopulation) {
    if(i === "Berlin"){
        break
    }
    cityNewPopulations[i] = citiesPopulation[i]
 }

 console.log(cityNewPopulations)

 /* 10. Use a `for-in` loop to loop through an object containing city populations. Skip any city with a poulation below 3 million and store rest in a new object named `largeCities`.
let worldCities = {
   Sydney: 5000000,
   Tokyo: 9000000,
   Berlin: 3500000,
   Paris: 220000
}*/

let worldCities = {
    Sydney: 5000000,
    Tokyo: 2000000,
    Berlin: 3500000,
    Paris: 2200000
 }

 let largeCities = {}

 for (const i in worldCities) {
    if(worldCities[i] < 3000000) {
        continue
    }
    largeCities[i] = worldCities[i]
 }

 console.log(largeCities)

  /* 11. Use a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. Stop the loop when "chai" is found , and store all the previous tea types in an array named "availableTeas".*/

  let availableTeas = []

  let teasTypes = ["earl grey", "green tea", "chai", "oolong tea"]

  teasTypes.forEach(teas => {
    if(teas !== "chai"){
        availableTeas.push(teas)
    }
  });

  console.log(availableTeas)


/* 12. Write a "for" loop that iterates through the array [2, 5, 7, 9] . Skip the value "7" and multiply rest by 2. Store the results in a new array named "doubledNumbers". */

let doubledNumbers = []
let oldNumber = [2, 5, 7, 9]

for (let k = 0; k < oldNumber.length; k++) {
    const numbers = oldNumber[k];
    if(numbers === 7){
        continue
    }
    doubledNumbers.push(numbers * 2)
}

console.log(doubledNumbers)

/* 13. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasine tea", "herbal tea"]`. and stop when the length of the current tea name is greater than 10. Store the result in a new array named `shortTeas`.*/

let shortTeas = []
let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]

for (const tea of myTeas) {
    if(tea.length > 10){
        break
    }
    shortTeas.push(tea)
}

console.log(shortTeas)

/* 14. Write a function sumOfN(n) that returns the sum of the first n natural numbers. */

function sumOfN(n) {
    let sum = 0;
   for (let i = 1; i <= n; i++) {
     sum += i;
   }
   return sum;
 }

 /* 15. Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4. */

 function printMultiplicationTable(n) {
    let newArr = [];
    for (let i = 1; i <= 10; i++) {
      newArr.push(`${n} * ${i} = ${n * i}`);
    }
    return newArr
  }

/* 16. Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str. */

function countVowels(str) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU"; 
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) { 
        vowelCount++;
      }
    }
    
    return vowelCount;
}


