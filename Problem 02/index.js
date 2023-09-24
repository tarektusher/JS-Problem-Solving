// Write a JavaScript function to get the values of First and Last names of the following form.

let getFormInfo = () =>{
     let element1= document.getElementById('fname');
     let fname = element1.value;
     let element2 = document.getElementById('lname');
     let lname = element2.value;
     console.log(fname,lname);
     let tag1 = document.createElement('h1');
     tag1.innerText = "First Name : "+fname;
     let tag2 = document.createElement('h1');
     tag2.innerText = "Last Name : "+lname;
     document.body.appendChild(tag1);
     document.body.appendChild(tag2);
}