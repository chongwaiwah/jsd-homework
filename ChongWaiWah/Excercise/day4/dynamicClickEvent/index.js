let button = document.createElement('button')

button.textContent = "button"


function onclick(){
    

}


function changebackground(){
    if ( document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "#154c79";
        document.body.style.color = "white";
        document.body.style.transition = "all 2s";
    
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#154c79";
        document.body.style.transition = "all 2s linear";
    }
   
   
}

setInterval(changebackground,2000)
document.body.style.backgroundColor = "white"


document.body.appendChild(button)

let clickCount = 0;

function tickclick(){
    console.log("tickclick")
    let h2 = document.querySelector("h2");

    clickCount+=1;
    h2.textContent =  "Number of clicks: "+clickCount;

}

function decrement(){

    if (clickCount>0){
     
        let h2 = document.querySelector("h2");

        clickCount-=1;
        h2.textContent =  "Number of clicks: "+clickCount;
    }

}



let btntick = document.createElement("button")
btntick.textContent = "increament";
btntick.addEventListener('click',tickclick);
document.body.appendChild(btntick)


let btndecrement = document.createElement("button")
btndecrement.textContent = "decrement";
btndecrement.addEventListener('click',decrement);
document.body.appendChild(document.createElement("br"))
document.body.appendChild(document.createElement("br"))
document.body.appendChild(btndecrement)

// start with a clickCount of 0
// Anytime the button is clicked with the class of click-count is clicked
//  Increment clickCount by 1
// Change the HTML of a p tag to be "Number of clicks: 1"

