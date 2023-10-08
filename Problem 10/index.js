//! Set Items in localstorage
localStorage.setItem('test',1);
localStorage.setItem('test1',20);
localStorage.setItem('test2',1342);
localStorage.setItem('test3',100);
alert(localStorage.getItem('test1'));



//! For setting key
localStorage.test = 2;
//! For getting key
alert( localStorage.test ); // 2
//! For removing key
delete localStorage.test;


//! Get items Using Loop 
for(let i=0; i<localStorage.length; i++) {
     let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
}

