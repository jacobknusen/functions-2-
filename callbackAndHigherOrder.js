////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE
// multiply is 
function multiply(num1, num2, callback ){
   return callback( num1 * num2)// return the callback. (num1 * num2 ) is invoking the callback. giving it a value 
}
// we created a function called mutliply gave 3 params 
// inside the return and call back we told it to times num1 by num2 




 const result = multiply(5, 5, answer => {
  return (`The answer is '  ${answer}`) 
})
console.log(result)



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 
function first(arr, callback){
  return callback[arr[0]]// this is passing in the first element of the arr. 
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER
// call back function is first
 first(names, firstName => {
   console.log('The first name in names is ' + firstName)
 })



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
function last( arr, callback){
  return callback(arr[arr.length - 1])//[arr[arr.length] - 1] well refrences the arr above. then we use the 
                                        //arr.length to get the total - 1 for the very last name in the names array. output The last name in names is Cahlan
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

 last(names, lastName => {
  console.log('The last name in names is ' + lastName)
 })



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 
const contians = (arr, name, callback) => {
  if(arr.includes(name) === true){//this is just saying does the array of names .include (name) 'whatver we passin into the function = name'
    callback(true)// if so callback 'sendback' true
  }else {
    callback(false)// if not retun false
  }
}
const contains = (arr, name, callback) => callback(arr.includes(name))
// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

 contains(names, 'Colt', result => {
   if(result === true){
     console.log('Colt is in the array')
   } else {
    console.log('Colt is not in the array')
  }
 })



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
const uniq = (arr, callback) =>{
  for(let i = 0; i < arr.length; i++){
    for(let y = 0; y < arr.length; y++){
      if (arr[i] === arr[y]){
        arr.splice(y, 1)
      }
    }
  }
  callback(arr)
}
/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
uniq(names, uniqArr => console.log(`The new names array with all the duplicates gone ${uniqArr}`))

  



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 
const each = (arr, callback) => arr.forEach ((el, i ) => callback(el, i))

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two paremeters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE

each(names, (iteam, index) => console.log(`the item at index${index} is ${iteam}`))
//  output 
//the item at index0 is Cahlan
//the item at index1 is Colt
//the item at index2 is Blaine
////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/
//const getUserById = (arr, id, cb) => {
  //for (let i = 0; i < arr.length; i++) {
    //  if (arr[i].id === id) {
    //      return cb(arr[i])
     // }
 // }
//}
 //getUserById = (arr, id, cb) => arr.forEach(elem => elem.id === id ? cb(elem) : null)
// getUserById(users, '16t', user => {
  //console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
//})
// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', user => {
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
// })

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE
const addingFactory = (x) =>{
  return function(y){
    return x + y 
  }
}

const mutliplyfactory = (x) => {
  return function(y){
    return x * y 
  }
}
const dividefactory = (j) => {
  return function (k){
    return j / k 
  }
}
/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE
const addten = addingFactory(10)
const mutliplyten = mutliplyfactory(10)
const divten = dividefactory(10)

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE
console.log(addten(20))
console.log(addten(50))
console.log(mutliplyten(10))
console.log(divten(2))
/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/
const addnumberby50 = addingFactory(50)
const mutliplynumberby100 = mutliplyfactory(100)
const divnumberby50 = dividefactory(50)
// CODE HERE
console.log(`${addnumberby50(100)} this is 100`)
console.log(addnumberby50(5))
console.log(mutliplynumberby100(100))
console.log(divnumberby50(2))