function test(){
    //summing 2 and 3
    console.log(2+3);
    alert('test');
}
const date = new Date();
    document.getElementById("text1").innerText = date.getFullYear();

function calcyearDOB(){
    console.log("calling calcyearDOB()")
    
    const date = new Date();
    document.getElementById("text1").innerText = date.getFullYear();
    let iyear = date.getFullYear();
    let iage = Number( document.getElementById("age").value);
    console.log(iage)
    let  iyearborn = iyear - iage;
    if (iyearborn>0){
        
        document.getElementById("text2").innerText = "Your Year of Born :" + iyearborn ;
    }else{
        document.getElementById("text2").innerText ="" ;
    }
    
}


function calcAge(){
    console.log("calling calcAge()")
    
    const date = new Date();
    document.getElementById("text1").innerText = date.getFullYear();
    let iyear = date.getFullYear();
    let ibirthyear = parseInt ( document.getElementById("age").value);
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


function convertSTRINGtoNUMBER(){

    let myvalue = "4";
    let ivalue = Number(myvalue);
    console.log("Convert string to number "+ ivalue+ " datatype :"+typeof(ivalue) );    

    let q2 = ivalue.toString();
    console.log("Convert number to string "+ q2+ " datatype :"+typeof(q2));    

    console.log("Make string upper case 'Hello Kitty' "+ "Hello Kitty".toUpperCase());    

    let q4 = "Hello second charactor "  
    console.log(q4+ "Hello".substring(1, 2));   

    let q5 = "Hello concate charactor "  
    let str1 = "Hello ";
    let str2 = " World";
    console.log(q5+ str1 + str2);   

    let q6val = 5;
    let q6 = "number of power of "+5  ;
    let ansq6= Math.pow(q6val,2);
    console.log(q6+" is "+ ansq6);   
    
    let q7val = 64;
    let q7 = "number of square "+q7val  ;
    let ansq7 = Math.sqrt(10);
    console.log(q7+ " is "+ ansq7);   

}

let myvalue = "4";
let ivalue = Number(myvalue);
console.log("Convert string to number "+ ivalue+ " datatype :"+typeof(ivalue) );    

console.log("Convert number to string "+ ivalue.toString());    
console.log("Make string upper case 'Hello Kitty' "+ "Hello Kitty".toUpperCase());    

