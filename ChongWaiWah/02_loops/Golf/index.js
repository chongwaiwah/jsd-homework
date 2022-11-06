function calc( ){

    let str = 5
    let result = "";

    for (let i = 1; i <= 8; i++) {         

        for (let par = 3; par <= 5; par++) {         
            
            if (i == 1) {
                msg = "Hole in one";
            } else if (i <= par - 2) {
                msg = "Eagle";
            } else if (i == par - 1) {
                msg = "Birdie";
            } else if (i == par) {
                msg = "Par";
            } else if (i == par + 1) {
                msg = "Bogey";
            } else if (i == par + 2) {
                msg = "Double Bogey";
            } else if (i == par + 3) {
                msg = "Not sure";
            }else{
                msg = "";
            }       

            msg = i+ " score "+par+" par : "+ msg+"\n";
            result += msg ;
            console.log(msg);
        }        
        
    }     
    document.getElementById("text1").innerText =result;
}