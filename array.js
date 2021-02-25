var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1)
vegetables.pop()
console.log(vegetables)

// 2)
fruit.pop()
console.log(fruit)

// 3)
var whichOne = fruit.indexOf('orange')
console.log(whichOne)

// 4)
fruit.push('2')
console.log(fruit)

// 5)
var veggies = vegetables.length
console.log(veggies)

// 6)
var third = vegetables.push('3')
console.log(third)

// 7)
var twoArrays = fruit.concat(vegetables)
console.log(twoArrays)

//8)
var updated = twoArrays.splice(4,2)
console.log(updated)

// 9)
var switched = twoArrays.reverse()
console.log(switched)

// 10)
var finalArray = switched.join(' ')
console.log(finalArray)
