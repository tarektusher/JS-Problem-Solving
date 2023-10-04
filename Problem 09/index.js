
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