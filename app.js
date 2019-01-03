'use strict';
const arr = [1,2,3,4,5,6,7,8,9,10];

function forLoop(arr){
    for(let i =0; i<arr.length; i++){
        console.log(arr[i])
    }
}



function whileLoop(arr){
   let count = 0;
    while(count <= arr.length-1){
        console.log(arr[count])
        count ++;
    }
}

function map(arr){
    const result = [];
    for( let i =0; i<arr.length; i++){
    result.push(cb=()=>{})
    }
}
let filterer = (arr, cb)=>{
    const result= [];
    for(let i=0; i< arr.length; i++){
        if(cb(arr[i], i)){result.push(arr[i])};
        return result;
    }
}
//map takes in an array and returns an arrray with the results of a cb method


// forLoop(arr);
// whileLoop(arr);



const people = ['Kookla','Fran','Ollie'];
let newPeople =['Odie', ...people, 'Garfield'];


const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let {tv,radio,toothbrush,cars} =stuff;

const sate ={
    people: let {}
    stuff: 
}



// const newStuff = {//dont remember how to destructure

// }

let state = {};

const newStuff = {tv,radio, toothbrush, cars};
console.log(newStuff);
let newState = {};