

function calc( ){
    
    let iage = prompt("Enter you age ", "");

    let msg ="";
    if (iage >= 35) {
        msg = 'You can vote AND hold any place in government!';
    } else if (iage >= 25) {
        msg = 'You can vote AND run for the Senate!';
    } else if (iage >= 18) {
        msg = 'You can vote!';        
    } else {
        msg = 'You can\'t vote yet';
    }

    document.getElementById("text1").innerText ="Your Age :"+iage;
    document.getElementById("text2").innerText =msg;
    console.log(msg);

  
}