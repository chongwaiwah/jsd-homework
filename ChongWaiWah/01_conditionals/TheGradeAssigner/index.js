

function calc( ){
    
    let marks = prompt("Enter marks 1-100", "");
    let score ="";

    if (marks > 90) {
        score = 'A';
    } else if (marks > 80) {
        score = 'B';
    } else if (marks > 70) {
        score = 'C';
    } else if (marks > 65) {
        score = 'D';
    } else {
        score = 'F';
    }
    
    let msg = 'You got a ' + score +" for marks: "+marks ;
    console.log(msg);

    document.getElementById("text1").innerText =marks;
    document.getElementById("text2").innerText =score;
    document.getElementById("text3").innerText =msg;  
}