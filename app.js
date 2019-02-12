'use strict';

const arr = [1,2,3,4,5,6,8,9];
const ages =[1,2,3,4,5,6,7,8,9]

// traditional
for(let i = 0; i<arr.length; i++){
  console.log(`traditional for loop ${arr[i]}`);
}

for (let i in arr){

  console.log(`non traditional ${arr[i]}`)
}

let idx = 0;

while(idx<10){

  console.log(`while loop ${arr[idx]}`);
  idx ++;
}

do {
  console.log(`do while ${arr[idx - 10]}`);
  idx ++;
}
while(idx<20);

//------------Arrays---------------//
//map applies a call back to each index and returns an array of all the results
function map(arr, cb){
  const mapArr =[];
  for (let i in arr){
    mapArr.push(cd(arr[i]));
  }

}

// map(ages,()=>{

// });
//filter applies a cb containing a test, and returns each element that passes the test

function filter (arr,cb){
  const filterArr =[];

  for(let i in arr){
    if(cb(arr[i])){
      filterArr.push(arr[i]);

    }
  }
  console.log(filterArr);
  return filterArr;
}


filter(arr,age=>age>3);

//reduce applies a call back on each element and returns an accumulated result of that cb
function reduce (arr, cb){
let accumulator = null;

for(let i in arr){

  accumulator = cb(accumulator, arr[i]);
}
console.log(accumulator);
return accumulator;

}

function cbReduce(total, num){
return total + num;
}

reduce(arr,cbReduce);


//------------Objects--------------//

const people = ['Kookla','Fran','Ollie'];
const newPeople = ['Odie',...people,'Garfield'];


console.log(newPeople);
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}
const {tv,radio,toothbrush, cars} = stuff;
cars.push('new Car');


console.log(stuff);

const state ={people: people, stuff: stuff};

const newState={people: ['new Odie', ...state.people, 'new Garfield'],
stuff: state.stuff,
}

// console.log(newState);





