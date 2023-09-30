//? InnerHTML VS InnerText VS TextContent

function getinnerText() {
     let text = document.getElementById("myP").innerText;
     document.getElementById("demo").innerText = text;
   }
   
   function getinnerHTML() {
     let text = document.getElementById("myP").innerHTML;
     document.getElementById("demo").innerText = text;
   }
   
   function gettextContent() {
     let text = document.getElementById("myP").textContent;
     document.getElementById("demo").innerText = text;
   }

