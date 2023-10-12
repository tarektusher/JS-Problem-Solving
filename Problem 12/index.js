//* Creating Object
let a = {name : 'Tarek', age : 24};
let b = {name : 'Tarek', age : 24};

//? Comparing Object using JSON.stringfy()

console.log(JSON.stringify(a) == JSON.stringify(b));

//! _.isEqual() is using Lodash Library
// console.log(_.isEqual(a,b));


//? Accessing Object property
console.log(a.name,a.age);
//? Another Approach
console.log(b["name"],b["age"]);

//* Nested Object and Object Method

let stdName = {
    name : 'Tarek',
    Id : 33,
    marks : {
        JS : 80,
        CPP : 99,
        JAVA : 33,
        C : 90
    },
    status : function(){
        console.log('Tarek is Passed in his semester final');
    }
}
console.log(stdName);
console.log(stdName.marks);
stdName.status();


