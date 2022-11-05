

function calc(){
    let radius = prompt("Please enter radius", "3");
    document.getElementById("text1").innerText = parseInt( radius);
   
   
    let circumference = Math.PI * 2* parseInt( radius);
    let area = Math.PI * radius*radius;
    document.getElementById("text2").innerText = "The circumference is " + circumference.toFixed(4);


    document.getElementById("text3").innerText = "The area is " + area.toFixed(4);
    



}