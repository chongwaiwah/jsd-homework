

function calc(){

    let radius = prompt("Please enter radius", "3");
    document.getElementById("text1").innerText = parseInt( radius);   
   
    let circumference = Math.PI * 2* parseInt( radius);
    let area = Math.PI * radius*radius;
    let msg1 = "The circumference is " + circumference.toFixed(4);
    let msg2 = "The area is " + area.toFixed(4);
    
    document.getElementById("text2").innerText =msg1;
    console.log(msg1);

    document.getElementById("text3").innerText = msg2;
    console.log(msg2);
}