
//? Create a Div Element using DOM and Set className for this element

const new_div = document.createElement('div');
//? First Class Name
new_div.classList.add('new-div');
document.body.appendChild(new_div);
//? Second Class Name 
new_div.className +=' Tarek-div';


//? Remove a Existing Class Name from an element using DOM
// new_div.classList.remove('Tarek-div');

new_div.classList.toggle('new-div , Tarek-div');
