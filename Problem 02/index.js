
let getFormValue = () =>{
     let val = document.getElementsByClassName('.frm');
     for(let i=0 ; i<val.length; i++){
          if(val.element[i].value != 'Submit'){
               let element = document.createElement('h1');
               element.innerText = val.element[i].value;
               document.body.appendChild(element);
          }
     }
}