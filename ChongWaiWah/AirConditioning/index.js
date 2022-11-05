

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
        if (temperature > desiredtemp) {
            score = "Turn on the A/C Please";
        } else if (marks > 80) {
            score = 'B';
        } else if (marks > 70) {
            score = 'C';
        } else if (marks > 65) {
            score = 'D';
        } else {
            score = 'F';
        }

     

  //  document.getElementById("text1").innerText =marks;
    document.getElementById("text2").innerText =msg;

  
}