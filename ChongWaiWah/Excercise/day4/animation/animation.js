// let img = document.querySelector("img")
// let opacity = getComputedStyle(img).opacity;


// function decreaseOpacity(){
//     opacity = getComputedStyle(img).opacity;
//     console.log(" img.style.opacity  :"+ img.style.opacity);
    
//     img.style.opacity = opacity-0.05;
// }


// setInterval(() => {
//     decreaseOpacity()
//     console.log("decreate opacity was called")
// }, 1000);

// Example 1
// let width = 300;
// function increaseWidth () {
//     width += 5
//     console.log(width)
// }

// increaseWidth();

// Example 2
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   console.log(width)
//   setTimeout(increaseWidth, 100)
  
// }

// increaseWidth();

// Example 3
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   img.style.width = width + "px" // or 
//   setTimeout(increaseWidth, 100)
// }

// increaseWidth();

// Example 4
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   img.style.width = `${width}px` // interpolation 
//   setTimeout(increaseWidth, 100)
// }

// increaseWidth();

// Example 5
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 5;
//   img.style.width = `${width}px`
//      if (width < 600){
//         setTimeout(increaseWidth, 2000)
//      }
  
// }

// increaseWidth();

// Example 6
// let img = document.querySelector("img");
// let width = 300;

// function increaseWidth() {
//   width += 1;
//   img.style.width = `${width}px`
//      if (width < 600){
//         setTimeout(increaseWidth, 1000/60)
//      }
  
// }

// increaseWidth();


// Set up a variable called width and set it to 300
// Select the img the DOM node and change its width style to be 300px using the variable above
// Create a function that increases that width by 5 at a time
//   Update the img's width based on variable "width"
//      Note: You will need to add px at the end (use concatenation or interpolation)
//     Stop calling the function when the width is 600
// Call the function once every 100ms

// let width = 300;
// let img = document.querySelector("img")
// img.style.width = "300px"

// function increaseWidth(){
  
//     img.style.width = width +"px";
//     width+=5;
//     setInterval(() => {
//         if (width < 600){
//             setTimeout(increaseWidth, 1000/60)
//         }
//     },100)
//     console.log(width)

// }

// increaseWidth();



