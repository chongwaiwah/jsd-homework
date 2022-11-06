function myfuncBetween(num1,num2,myvalue)
{    
  //find the min and max value
  let min = Math.min.apply(Math, [num1, num2]);
  let max = Math.max.apply(Math, [num1, num2]);
  
  return myvalue >= min && myvalue <= max;
}


function calc( ){
   
    let msg1 = "";
    let msgtmp = "";
    let multiplynum =9;

    for (let i = 60; i <= 90; i++) {      
      let grade = "";

      if (myfuncBetween(80,100,i)) {        
        grade = "A";

      //Grade B
      } else if (myfuncBetween(70,79,i)) {
        grade = "B";

      //Grade C
      } else if (myfuncBetween(69,60,i)) {
        grade = "C";
      }

      msgtmp = "For "+i+ ", you got an "+ grade;
      msg1 += msgtmp +"\n";    
      console.log(msgtmp);  
    }       
    document.getElementById("text1").innerText =msg1;       
}