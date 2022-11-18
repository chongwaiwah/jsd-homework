//query strings
let apikey='98738c61'
let url = 'https://www.omdbapi.com/'//'https://www.omdbapi.com/?i=tt3896198&apikey=98738c61'
let queryStrings = `?apikey=98738c61&t=jaws}`//'?i=tt3896198&apikey=98738c61'

console.log(url+queryStrings)

const colOne = document.querySelector('.col-1')
const colTwo = document.querySelector('.col-2')



fetch(url+queryStrings)
.then((response)=>{
    return response.json()
})
.then((data)=> {

    let { Title: title, Year: year, Poster: urlPoster } = data
    colOne.innerHTML = `
     <h2>Title - ${title}</h2>
     <p>Year Released - ${year}</p>
     `
     colTwo.innerHTML = `
     <img src=${urlPoster}>
    `

    console.log(title, year, urlPoster)
    
   //  return response.json()

})
.then((data)=>{
    console.table(data)
})
.catch(()=>{
    console.log('there is an errors')
})


console.log(colOne,colTwo)

let title = []