'use strict';

const arr = [1,2,3,4,5,6,8,9,10];
const ages =[1,2,3,4,5,6,7,8,9,10]

//traditional
for (let i = 0; i<arr.length; i ++){
  console.log('traditional ', arr[i]);
}

//non traditional
for (let i in arr){
  console.log('for i in ', arr[i]);
}

//while
let idx = 0
while(idx<arr.length){
  console.log('while loop ', arr[idx]);
  idx ++;
}
idx = 0;
do{
  console.log('do while ', arr[idx])
  idx ++;
}
while(idx<9)
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
  const filterResult =[];

  for(let i in arr){
    if(cb(arr[i])){
      filterResult.push(arr[i]);
    }
  }
  console.log(filterResult);
  return filterResult;
}


filter(arr,age=>age>3);

//reduce applies a call back on each element and returns an accumulated result of that cb
function reduce (arr, cb){
let accum = null;

for(let i in arr){

  accum = cb(accum, arr[i]);
}
console.log(accum);
return accum;

}

function cbReduce(total, num){
return total + num;
}

reduce(arr,cbReduce);


//------------Objects--------------//

const people = ['Kookla','Fran','Ollie'];
// const newPeople = ['Odie',...people,'Garfield'];

const newPeople =['Odie', ...people, 'Garfield'];


console.log(newPeople);
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}


const{tv,radio,toothbrush,cars} = stuff;

cars.push('new car');


console.log(stuff);

const state ={people: people, stuff: stuff};

const newState={people: ['new Odie', ...state.people, 'new Garfield'],
stuff: state.stuff,
}

console.log(newState);





