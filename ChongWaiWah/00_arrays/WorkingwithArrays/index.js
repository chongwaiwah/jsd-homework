function run( ){

    let rainbowColors =[];
    rainbowColors.push("orange");
    rainbowColors.unshift("red");
    rainbowColors.push("yellow");
    rainbowColors.push( "green", "blue", "indigo",  "violet");
    console.log("length of the array :"+rainbowColors.length);

    if (rainbowColors[1]!=null){
        console.log("the second item: "+rainbowColors[1]);
    }
    console.log("the last item: "+rainbowColors[rainbowColors.length-1]);

    console.log("the index of the string 'blue' :"+
                rainbowColors.findIndex(e => {
                    return e.toLocaleLowerCase() === 'blue';
                })
    );

    let twoColors =[];
    for (let i=1; i<3;i++){
        twoColors.push(rainbowColors[i]);
    }
    console.log("twoColors: "+twoColors);

    

    const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
    const temp = [];
    nums.forEach(e => {
       if ( !temp.includes(e)  ){
          temp.push(e);
       }
    });

    console.log("nums original         : "+nums);
    console.log("nums removed duplicate: "+temp);
    
  //  nums=temp;

    const arrOfArrs = [["inner array first item", "inner array second item"],
                       ["first", "second", "third"]];
    
    console.log("Access 'inner array first item' : " + arrOfArrs[0][0]);
    console.log("Print 'third' by using a dynamic index' : " + 
                 arrOfArrs[1][arrOfArrs[1].length-1]);
                 

    //Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item
    for (let i=0; i<= arrOfArrs[1].length-1;i++){
        console.log(arrOfArrs[1][i]);
    }

    



}