// Add a script tag to the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "list-item". Add a style tag that sets a rule for "list-item" to make the color "red".
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

let thebody = document.querySelector('body');
thebody.style.fontFamily = "Arial, sans-serif";

let list =document.querySelectorAll('li');
list.forEach(e => {
    let txt = e.textContent;
    
    if  (txt.toLowerCase().includes("nickname")) {
        e.textContent =   e.textContent + " MY nick name" ;
    }  if  (txt.toLowerCase().includes("hometown")) { 
        e.textContent = e.textContent + " MY hometown " ;
    }  if  (txt.toLowerCase().includes("fav")) { 
        e.textContent = e.textContent + " dreaming " ;
    }else{
        e.textContent = e.textContent
    }
 
});

let img = document.createElement("img");
img.style.height="100px"
img.style.width="100px"
img.srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
let h1 =document.querySelectorAll('h1');

document.body.append(img);
