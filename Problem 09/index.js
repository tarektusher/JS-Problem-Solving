
//? Promise Creating Part 
const myPromise = new Promise((resolve,reject)=>{
     const num = Math.ceil(Math.random()*100);
     if(num%2==0){
          resolve(
               JSON.stringify({
                    Name : 'Tarek',
                    Address : 'Chandpur'
               })
          )
     }
     else{
          reject(`Odd number will not provide you data`);
     }
})

///? Creating Part
const herPromise = new Promise((resolve, reject)=>{
     const val = 10;
     if(val%10 == 0){
          resolve(`She Loves me very much`);
     }
     else{
          reject(`She Loves another person`);
     }
})

//? Promise Consuming Part
herPromise 
     .then((result)=>{
          console.log(result);
     })
     .catch((error) =>{
          console.error(error);
     })

//? Promise Consuming Part 
myPromise
     .then((data)=>{
          return JSON.parse(data);
     })
     .then((data)=>{
          console.log('::: User Data :::',data);
     })
     .catch((error)=>{
          console.error(error); 
     })


//? Multiple Promises

const Promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
const Promise2 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const Promise3 = fetch('https://jsonplaceholder.typicode.com/comments/1');
Promise.all([Promise1, Promise2, Promise3, myPromise])
     .then((result)=>{
          console.log(`::: Promise all`, result);
     })
     .catch((error)=>{
          console.log(`::: Promise all`, error);
     })
Promise.any([Promise1, Promise2, Promise3, myPromise])
     .then((result)=>{
          console.log(`::: Promise any`, result);
     })
     .catch((error)=>{
          console.log(`::: Promise any`, error);
     })
Promise.allSettled([Promise1, Promise2, Promise3, myPromise])
     .then((result)=>{
          console.log(`::: Promise allsettled`, result);
     })
     .catch((error)=>{
          console.log(`::: Promise allsettled`, error);
     })
Promise.race([Promise1, Promise2, Promise3, myPromise])
     .then((result)=>{
          console.log(`::: Promise race`, result);
     })
     .catch((error)=>{
          console.log(`::: Promise race`, error);
     })


//? Callback Function

const function1 = (callback) => {
     setTimeout(function() {
          console.log(`1st Function`);
          callback();
     }, 3000)
}
const function2 = () => {
     console.log(`2nd Function`);
}
function1(function2);

//? Async and Await Part 

const asyncFunc = async() =>{
     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
     console.log(`::: Asychronous Function Data :::`,data);
}
asyncFunc();