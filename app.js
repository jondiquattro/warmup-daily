'use strict';

const arr = [1,2,3,4,5];
const ages =[1,2,3,4,5,6,7]

// traditional
for(let i = 0; i<arr.length; i++){
  // console.log(`traditional for loop ${arr[i]}`);
}

for (let i in arr){
  // console.log(`non traditional ${arr[i]}`)
}

let idx = 0;

while(idx<10){
  // console.log(`while loop ${arr[idx]}`);
  idx ++;
}

do {
  // console.log(`do while ${arr[idx - 10]}`);
  idx ++;
}
while(idx<20);
//------------Arrays---------------//

function map (arr, cb){
  let result = [];
  for (let i = 0; i<arr.length;i++){
    result.push(cb(arr[i]));
  }
}

map(arr,(idx=>{
  // console.log(idx);
}))


function filter (arr,cb){
  const result =[];

  for (let i in arr){
    if(cb(arr[i])){result.push(arr[i])};
  }
  console.log(result)
  return result;
}


// filter(arr,age=>age>3);

function reduce (arr, cb){
  let accum =null;
  for (let i in arr){
    accum = cb(accum,arr[i]);
  }
  console.log(accum);
}
function cbReduce(total, num){
return total + num;
}

reduce(arr,cbReduce);


//------------Objects--------------//

const people = ['Kookla','Fran','Ollie'];


const newPeople = ['Odie',...people,'Garfield'];
// console.log(newPeople);

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const {tv,radio,toothbrush, cars} = stuff;

cars.push('new Car');

// console.log(stuff);

const state ={people: people, stuff: stuff};

const newState={people: ['new Odie', ...state.people, 'new Garfield'],
stuff: state.stuff,
}

// console.log(newState);

