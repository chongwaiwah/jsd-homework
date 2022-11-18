console.log('connected')

const person = {
  firstName: 'Jacques',
  lastName: 'Cousteau',
  sayHi: function () {
    console.log('Hi, I am Jacques')
  },
  sayHello: function () {
    console.log('Hello, I am Jacques')
  },
}
person.sayHi()

console.clear()

function receiveCallBack(callback) {
  console.log(callback())
  // console.log('the callback was run')
}

function myFirstCallBack() {
  console.log('function as argument')
}

receiveCallBack(myFirstCallBack)
// myFirstCallBack()

console.clear()

function delay(cb, time) {
  let timeInMS = 1000 * time
  setTimeout(cb, timeInMS)
  //  console.log(timeInMS, time)
}

function animate() {
  console.log('Animate was called')
}

// delay(animate, 1)
// delay(animate, 2)

function forEach(array, callback) {
  // iterate through each item
  // start at 0
  // add 1 to index each time
  // keep going until we reach array.length
  for (let i = 0; i < array.length; i++) {
    const currentLetter = array[i]
    callback(currentLetter)
  }
}

let letters = ['a', 'b', 'c', 'd']

function processLetter(letter) {
  console.log(letter)
}

forEach(letters, processLetter)

console.clear()

forEach([1, 2, 3, 4], function (num) {
  console.log(`${num} multiplied by 3 is ${num * 3}`)
})

console.clear()

let todos = ['Learn JS', 'learn AJAX', 'Learn React']

forEach(todos, function (todo) {
  console.log(todo)
})

let global = 'Global'
global = 'Global'

function createNewScope(){
    let local = 'local'
    console.log(global,local)
    if (true){
        let localIf = 'very local'
        console.log(global,local,localIf)
    }
}

createNewScope()

function hoistingEx(){
    console.log("this is weird")
}

function hoistingEx2(){
    console.log("this not is weird")

}

let hoist = hoistingEx
hoist()

//secure function higher security , value cant be tap
console.clear()
function scoreGame(){
    let score =0
    return function scoreSum(){
        score +=1
        console.log(score)        
    }
}
let scoreLatest = scoreGame()
scoreLatest()

console.clear()

function createbank(){
    let balance = 0100

    function deposit(myr){
        return balance + myr
    }

    function withdraw(myr){
        return balance -= myr
    }

    function logoutAccount(){
        
        console.log("user logged out")        
        return "user logged out"
    }


    return {
        // deposit:deposit,
        // withdraw:withdraw,
        // logoutAccount:logoutAccount
          deposit,
         withdraw,
         logoutAccount,
    }

}

let bank = createbank()
console.log(bank.deposit(20))
console.log(bank.withdraw(50))
console.log(bank.logoutAccount())

// letters.forEach(letter,() => {
//     console.log(letter)
// })

function add(...nums){
    console.log(nums)

    nums.forEach((num => {
        console.log(num)
    } ))
}

add(1,2,3,4)

function createGreeting(prefix){
    return function(name){
        console.log(prefix + ", " + name);
    }
}

let hi = createGreeting("hi")
hi('test')
let selamatPagi = createGreeting('Selamat pagi')


selamatPagi('Aiman')



let arr = 'abcdefg'.split('')
const strarr = (element, index)=>{
    console.log( `${index} . ${element} `)
}
arr.forEach(strarr)

let arr2 = 'aBcDeFg'.split('')
let filteredCapitalLetter = arr2.filter((element) => {
    return element === element.toUpperCase()
})

console.log(filteredCapitalLetter);


let letters1 = ["a", "b", "c", "d", "e"];
function uppercaseLetter(let) {
 return let.toUpperCase();
}
let upperCased = letters1.map(uppercaseLetter);
console.log(upperCased);

let numbers = [1, 2, 3, 4, 5, 6];
function timesByFive(num) {
 return num * 5;
}
let multiplied = numbers.map(timesByFive);
console.log(multiplied);




let nums = [1, 2, 3, 4, 5, 6];
function addNumbersTogether(currentTotal, currentNumber) {
 let newTotal = currentTotal + currentNumber;
 return newTotal;
}
let total = nums.reduce(addNumbersTogether, 0);
console.log(total)