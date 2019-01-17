'use strict'

let arr = ['1','2','3','4','5','6','7','8'];

let forLoop = (arr) => {
    for(let number in arr){
        // console.log(number);
    }
}

let whileLoop = (arr) => {
    let i = 0;
    while(i < arr.length){
        // console.log(arr[i]);
        i++;
    }
}


  
function map (arr, cb){
  let result = [];
  for (let i = 0; i<arr.length;i++){
    result.push(cb(arr[i]));
  }
}

map(arr,(idx=>{
  console.log(idx);
}))

function reduce(arr, acc, cur,idx,cb){
  
  for(let i = 0; i<arr.length; i++){

   return cb( idx=>{
      acc = arr[i-1]+arr[i];
      cur = arr[i];
      idx = i;
    })

  }
}

let x = reducer(arr,0,0);
console.log(x);