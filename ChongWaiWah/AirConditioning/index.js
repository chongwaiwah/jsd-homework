

function calc( ){

    let strFunction = prompt("Airconditioner is working ? (Y/N)", "Y");
    let bfunction = (strFunction.toUpperCase() == 'Y') ;
    let temperature = prompt("Enter current temperature (0-50)", "30");
    let desiredtemp = prompt("Enter current  desired temperature (0-50)", "24");
    let msg="";

    if (bfunction){
        if (temperature > desiredtemp) {
            msg = "Turn on the A/C Please";
        } 
    }else{
        if (temperature > desiredtemp) {
            msg = "Turn on the A/C Please";
        } else{
            msg = "Fix the A/C whenever you have the chance... It's cool...";
        }
    }
    console.log(msg);

    document.getElementById("text1").innerText =bfunction;
    document.getElementById("text2").innerText =temperature;
    document.getElementById("text3").innerText =msg;

  
}