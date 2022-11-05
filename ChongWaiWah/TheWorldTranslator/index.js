

function calc( bcelcious){
    const lang = [
        { language: "English", word: "Hello World" },
        { language: "Malay", word: "Hai dunia" },
        { language: "French", word: "Bonjour le monde" }
    ];
   


    let ivalue = prompt("Enter Language [english,malay,french]", "English");
  
    lang.forEach(e => {
    
        if (e.language.toUpperCase()== ivalue.toUpperCase()){
            document.getElementById("text1").innerText =  e.language;
            document.getElementById("text2").innerText =  e.word;
            return;

        }
    
      });


  
}