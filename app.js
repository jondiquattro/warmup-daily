'use strict';
const arr = [1,2,3,4,5,6,7,8,9,10];


for(let i =0; i<arr.length; i++){
    console.log(arr[i])
}


let count = 0;
while(count <= arr.length-1){
    console.log(arr[count]);
    count ++;
}

const result = words.filter(word => word.length > 6)

function arrFilter (idx, cb, arr){
for(let i = 0; i< arr.length; i++){
    const result = [];
    if(cb(arr[i]) === true){
        result.push(arr[i])
    }
    return result;
}
}





