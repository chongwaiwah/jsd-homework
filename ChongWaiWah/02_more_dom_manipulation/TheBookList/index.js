const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
  ];

//   Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// If you have read it, make the text color green. If you haven't, make the text color red.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page

let ul = document.createElement("ul");

//document.body.append(ul);
ul.setAttribute('id', 'theList');


books.forEach(e => {
  let p = document.createElement("p")
  if (e.alreadyRead){
    p.style.color = "red";
  }else{
    p.style.color = "green";
  }
  p.textContent = e.title + " author by "+e.author;
  var li = document.createElement('li');     // create li element.
  li.append(p);
  ul.appendChild(li);  

});

document.body.append(ul);