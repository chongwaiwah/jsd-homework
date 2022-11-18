console.log("")
let img = document.querySelector("img")

function handleclick(){
    console.log(this)
}

img.addEventListener('this',handleclick)
