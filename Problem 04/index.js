
// Write a JavaScript program to push list inside a div

for(let i=0;i<5;i++){
     const node = document.createElement("li");
     node.innerHTML = `<a> Link ${i}</a>`;
     document.getElementById("list").appendChild(node);
}