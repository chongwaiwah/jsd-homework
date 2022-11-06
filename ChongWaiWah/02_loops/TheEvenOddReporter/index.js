

function calc( ){

    let num1 = 20;
    let msg1 = "";
    
    for (let i = 1; i <= num1; i++) {
        
      //EVEN number
      if (i % 2 == 0){
        console.log(i +" is Even number");
        msg1 += i +" is Even number \n";
      }else {
        //ODD number
        console.log(i +" is ODD number");
        msg1 += i +" is ODD number \n";
      }        
    }    

    document.getElementById("text1").innerText =msg1;
    
    
  
}