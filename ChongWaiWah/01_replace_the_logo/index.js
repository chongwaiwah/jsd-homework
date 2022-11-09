// Visit Google's website in Chrome, and open up the console.
// Find the Google logo and store it in a variable using DOM traversal
// Save the current src attribute into a variable
// Modify the source of the logo IMG so that it's a Yahoo logo instead
 
 let logo= document.querySelector('.lnXdpd');
 let src_value =  logo.getAttribute('src');
 logo.setAttribute('srcset', '');
 logo.src="https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"


//  Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead
 let button =document.querySelector('.FPdoLc.lJ9FBc .gNO89b');
 button.value - "Yahoo!"