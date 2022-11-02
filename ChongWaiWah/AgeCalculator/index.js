
function calcAge(){
    console.log("calling calcAge()")
    
    const date = new Date();
    document.getElementById("text1").innerText = date.getFullYear();
    let iyear = date.getFullYear();

    let ibirthyear = prompt("Enter your year of born ", "0");
    console.log(iyear)
    console.log(ibirthyear)

    let  iage = iyear - ibirthyear;
    console.log(iage)

    if (iage>0 && iage<=200){        
        document.getElementById("text2").innerText = "Your age either " + iage +" or " + (iage-1).toString() ;
    }else{
        document.getElementById("text2").innerText = "Invalid input" ;
    }
    
}

