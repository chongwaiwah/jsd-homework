function pluralizeWord(singularWord, pluralWord, count) {
  if ( count<=0 ){
    return "no more "+pluralWord;
  }
  return count > 1 ? count+" "+ pluralWord : count+" "+singularWord;
}

function capitalize(str){
  return str[0].toUpperCase()+str.slice(1)
}



function calc( ){
    
    let msg1 = "";    
    let msgtmp = "";    

    for (let i = 99; i >= 0; i--) {           

      let msgpra1 = "of beer on the wall";
      let msgpra2 = (i > 0) ? "Take one down and pass it around," : 
                              "Go to the store and buy some more, " + 
                              pluralizeWord("bottle","bottles",99)+ " "+
                              msgpra1;      
      

      msgtmp = capitalize( pluralizeWord("bottle","bottles",i)) + " "+
               msgpra1 + ", " + pluralizeWord("bottle","bottles",i) + " of beer."+
               "\n"+
               capitalize(msgpra2) ;

      msgtmp = ( i > 0) ? msgtmp + " "+ pluralizeWord("bottle","bottles",i-1) + " "+
                          msgpra1 + ".\n":
                          msgtmp  + ".\n";
      

      msg1 += msgtmp +"\n";    
      console.log(msgtmp);  

    }   
    
    document.getElementById("text1").innerText =msg1;       
}