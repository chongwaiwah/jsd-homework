




function convertToF(celsius){
    let fahrenheit = (celsius *9/5) +32;
    return fahrenheit;
}

function convertToC(fahrenheit){
    let celsius = (fahrenheit - 32)*5/9;
    return celsius;
}

function calc( bcelcious){

    let question="";
    let icel=0;
    let ifah=0;
    if (bcelcious){
        question ="Please enter Fahrenheit";
    }else{
        question ="Please enter Celsius";
    }

    let ivalue = prompt(question, "");
   if (bcelcious){
     icel= ivalue;
     ifah = convertToF(ivalue);
   }else{
     icel= convertToC(ivalue);
     ifah = ivalue;
   }


    document.getElementById("text2").innerText = parseFloat( icel).toFixed(2)+ "\u00b0F";
   
    document.getElementById("text3").innerText = parseFloat( ifah).toFixed(2)+ "\u00b0C";

}