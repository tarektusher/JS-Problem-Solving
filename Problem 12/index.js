//* Constructor Function 
function person(fname,  lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}
const person1 = new person('Tarek', 'Hossain', 23);
console.log(person);
person.prototype.displayName = function(){
    console.log(`Person Name is ${this.fname} and ${this.lname}`);
}

person1.displayName();

//* Class in JS with Constructor 
class stdName {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    displayName (){
        console.log(`::: Person Name is ${this.fname} and ${this.lname} :::`);
    }
}

const student = new stdName("Tarek", "Rahman", 23);
student.displayName();