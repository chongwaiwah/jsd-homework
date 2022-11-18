// setTimeout(() => {
//     console.log('setTimer 1 is running')
// }, 2000)
// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log('setTimer 2 is running')
// }, 2000);
// console.log(3)
// console.log(4)
// console.log(5)

let h2 = document.querySelector('h2')

// function myExecutor(resolve, reject) {
//     if (resolve) {
//         console.log('inside dot then', resolve)
//     } else {
//         console.log('his will run the .catch method', reject)
//        reject("This will run the .catch method");
//     }
// }

// let myPromise = new Promise(myExecutor);


// function rejectHandler(){
//     console.log("reject handler ")
// }
// function successHandler(){
//     console.log("success Handler ")

// }



// console.log(myPromise)
// myPromise.then(
//     successHandler()
// )
// .catch((msg)=>{
//     console.log("There is an error! "+msg)
// }
// )

// console.log(myPromise)



// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


//working 
// function delay(timeout){
//     return new Promise((resolve,reject) => setTimeout(() => {
//         reject()
//     }, timeout)).catch((msg) => 
//         console.log('catch')
        
//     )
// }

// function afterASecond(){
//     console.log('finish load')
// }

// delay(1000).then(afterASecond)


console.clear()
h2.innerHTML = "Ready"
let request = new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/todos')
console.log(request,request.readyState)
request.send()
h2.innerHTML = "Sending"
request.addEventListener("readystatechange",()=>{
        console.log(request,request.readyState)
        h2.innerHTML = request.readyState
    if (request.readyState === 4){
        h2.innerHTML = "Finish"
        console.log(request.responseText.length)
   //    console.log(request.responseText)
        let data = JSON.parse(request.response)
        console.log(data)
        data.forEach(e => {
            console.log(e.title)
        });
    }
})


//https://www.omdbapi.com/?i=tt3896198&apikey=98738c61
