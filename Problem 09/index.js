
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

const herPromise = new Promise((resolve, reject)=>{
     const val = 10;
     if(val%10 == 0){
          resolve(`She Loves me very much`);
     }
     else{
          reject(`She Loves another person`);
     }
})

herPromise 
     .then((result)=>{
          console.log(result);
     })
     .catch((error) =>{
          console.error(error);
     })

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