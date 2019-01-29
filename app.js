'use strict'

let arr = ['1','2','3','4','5','6','7','8','9','10'];

for(let i in arr){
  console.log(arr[i]);
}

for(let i =0; i<arr.length; i++){
  console.log('traditional for loop ',arr[i]);
}


let count = 0;
while(count < arr.length){
  console.log('traditional while loop',arr[count]);
  count ++;
}

do{
  console.log('do while loop', arr[count - 10])
  count ++;
}
while(count<20);



//---------------------------------------//

const people = ['Kookla','Fran','Ollie'];

const newPeople =['Odie', ...people, 'Garfield'];
console.log(newPeople);

//-------------------//
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const  {tv,radio,toothbrush,cars}=stuff;

cars.push('Porsche')
const newStuff = stuff;

console.log(newStuff);


let state = {people: [...people], stuff: stuff};
console.log('state',state);