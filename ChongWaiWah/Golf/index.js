

function calc( ){

    
    let strokes = prompt("Enter you Golf strokes ", "0");


    if (strokes == 1) {
        msg = "Hole in one";
    } else if (strokes <= par - 2) {
        msg = "Eagle";
    } else if (strokes == par - 1) {
        msg = "Birdie";
    } else if (strokes == par) {
        msg = "Par";
    } else if (strokes == par + 1) {
        msg = "Bogey";
    } else if (strokes == par + 2) {
        msg = "Double Bogey";
    } else if (strokes == par + 3) {
        msg = "Not sure";
    }else{
        msg = "";
    }

	
    
 


    document.getElementById("text1").innerText ="Your Strokes :"+strokes;
    document.getElementById("text2").innerText =msg;

  
}