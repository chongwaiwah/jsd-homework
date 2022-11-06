function calc(){
    let iage = prompt("Please enter your age", "");
    document.getElementById("text1").innerText = parseInt( iage);
   
    let imaxage = prompt("Please enter your Maximum age", "");
    document.getElementById("text2").innerText = parseInt( imaxage);

    let imaxamount = prompt("Please enter your estimated amount perday", "3");
    document.getElementById("text3").innerText = parseInt( imaxamount);
    
    let imax = (imaxage-iage)* parseInt( imaxamount)*365;
    let msg ="You will need "+ imax +" to last you until the ripe old age of "+imaxage;
    document.getElementById("text4").innerText = msg;

    console.log(msg);

}