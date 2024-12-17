// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Meilia",
    age: 22,
    country: "West Jakarta"
}

function logData() {
    console.log(person.name + "is" + person.age + "years old and and lives in" + person.country)
}

logData()

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

let age = 42

if (age < 6) {
    console.log("free") 
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log ("student discount")
} else if (age < 27) {
    console.log ("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- ") + largeCountries[i]
}

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

let dayOfMonth = 13
let weekday = "Tuesday"

if (dayOfMonth === 13 && weekday === "Tuesday")
    console.log("😱")


// Create a function that returns a random item from the array

let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())




