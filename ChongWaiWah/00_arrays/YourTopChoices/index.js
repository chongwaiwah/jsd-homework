function run( ){

    let topchoice =[ ["My 1st choice", "dogs"],
                     ["My 2st choice", "books"],
                     ["My 3rd choice", "presidents"],
                     ["My 4th choice", "car"],
                     ["My 5th choice", "house"]              
                   ];
  
    topchoice.forEach(e => {
       console.log(e[0] +" is "+ e[1]);
    });


}

run();