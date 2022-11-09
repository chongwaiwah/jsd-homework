// const heading = document.querySelector("h1");
// const subheading = document.querySelector("h2");
// const para = document.querySelector("p");
// const listitem = document.querySelector("li");
// const anchor = document.querySelector(".container a");

// const alllistitems = document.querySelectorAll("li");
// console.log(alllistitems);
// const paras = document.querySelectorAll("p");
// console.log(paras[1].innerHTML);

// console.log(document.querySelector("img"));
// let image =document.querySelector("img");
// let currentsrc = image.getAttribute("src");
// anchor.setAttribute("href","https://www.apple.com");
// console.log(anchor.getAttribute("id"));
// anchor.innerHTML="Google!"

// let input = document.querySelector("input")
// let currvalue = input.value;

// let headingstyle = getComputedStyle(heading);
// heading.style.color="red";
// heading.style.fontSize="100px";

// image.getAttribute("height")="5000px";

// image.getAttribute("weight")="300px";
// image.style.objectFit ="fit";




// let logo= document.querySelector('.lnXdpd');
// let src_value =  logo.getAttribute('src');
// logo.setAttribute('srcset', '');
// logo.src="https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"



// let button =document.querySelector('.FPdoLc.lJ9FBc .gNO89b');
// button.value - "Yahoo!"


// Visit Google's website in Chrome, and open up the console.
// Find the Google logo and store it in a variable using DOM traversal
// Save the current src attribute into a variable
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
// Hint: You may need to figure out how to remove the srcset attribute for this!
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead

// const h2 = document.querySelector("h2");
// let h3 = document.createElement('h3');
// h3.textContent = "Als Created by IS";
// h3.style.fontSize = "30px"
// h3.style.color = "green"

// document.body.insertBefore(h3,h2);

const heading = document.querySelector("h1");
const subheading = document.querySelector("h2");
function onClick(theobject)
{
    console.log(theobject+ " The page was clicked");
}

heading.addEventListener("click",onClick.bind(null,"heading"));
subheading.addEventListener("click",onClick.bind(null,"subheading"));

let input = document.querySelector("input");
// function onKeypress(value1)
// {
//     console.log("The user typing : "+ value1);
// }

// input.addEventListener("keyup",onKeypress.bind(input, input.value));

let list = document.querySelector("list");

// input.addEventListener("keypress", function(e) {
//     var curval = e.srcElement.value;
//     var newchar = String.fromCharCode(e.charCode || e.keyCode);
//     setTimeout(() => {
//         console.log("The user typing("+newchar+") : "+ curval );
//     }, 2000);
    
// }, false);


let image =document.querySelector("img");

function onMouseMove(event){
    let x = event.clientX;
    let y = event.clientYd;
    image.style.left = x+"px";
    image.style.right = y+"px";
    console.log("the mouse was moving",event);
}

//document.body.addEventListener("mousemove",onMouseMove)