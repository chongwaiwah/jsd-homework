let numbers = [0,1,2,3,4,5,6,7,8,9,10]

let onlyEven_foreach = []
const numsss = (element, index)=>{
    if (element% 2==0){
        onlyEven_foreach.push(element)
        console.log(element)
    }
}

numbers.forEach(numsss)
console.log(onlyEven_foreach)



//filter
let onlyEven = numbers.filter((element) => {
                                    if ( (element % 2 ==0) )
                                    return element;
                             })



console.log(onlyEven)


let countIntegers_list = [4, 2.2, 5, 6, 4.2, 8.2, 4]

function countIntegers(numbers){
   let i = numbers.filter((countIntegers)=> countIntegers %2===0).length
   return i
}

console.log(countIntegers(countIntegers_list))

let words = ["my", "cake", "pudding"]

function length(word) {
 return word.length
}
let wordLength = words.map(length);
console.log(wordLength)


function getSquares(numbers){
    return numbers.map((number) => Math.pow(number,2))
}

console.log( getSquares([2,3,4,6,7,8]))

var inventory = [
    {type:"machine",value:5000},
    {type:"machine",value:650},
    {type:"duck",value:10},
    {type:"furniture",value:1200},
    {type:"machine",value:77},
]

function totalvalue(inventory){
    let totalvalue = inventory
    .filter((item)=> item.type ==="machine")
    .reduce((total,machine) => {
        return (total += machine.value)

    },0)   
   
    return totalvalue
}
console.log("total value machine:"+totalvalue(inventory))

function machinesOverFiveHundred(inventory){

    return inventory
    .filter(item => item.type === 'machine')
    .filter(item => item.value > 500)
  }

  
  console.log(
    machinesOverFiveHundred(inventory)
  )
