function pluralizeWord(singularWord, pluralWord, count) {
    if ( count<=0 ){
      return "no more "+pluralWord;
    }
    return count > 1 ? count+" "+ pluralWord : count+" "+singularWord;
}

function containsOnlyUppercase(str) {
    return /^[A-Z]+$/.test(str);
}

function calc( ){

    let inputmsg = prompt("Enter your message ", "");
    let result = "";
    

    if (inputmsg.includes("?") ) {
        result = "Sure."
    } else if (containsOnlyUppercase(inputmsg)) {
        result = "Woah, chill out!";
    } else if (inputmsg == "") {
        result = "Fine. Be that way!";
    } else  {
        result = "Whatever.";
    }     

    console.log(result);
    document.getElementById("text1").innerText =result;    
    
    
  
}