

function calc( ){

    let msg1 = "";
    let msgtmp = "";
    let multiplynum =9;

    for (let i = 1; i <= 12; i++) {
      
      msgtmp = i +" * "+multiplynum+" = "+ (i*9) ; 
      msg1 += msgtmp + "\n";      
      console.log(msgtmp);      

    }   

    document.getElementById("text1").innerText =msg1;
    
}