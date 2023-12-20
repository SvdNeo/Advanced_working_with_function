let args = [1,2,3,4,5,6];
function sumAll(...args){
    let sum = 0;
    for(let i of args){
        sum += i
    }
    return sum
}
console.log(sumAll(...args))

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
let max = Math.max(...arr1,...arr2)
console.log(max)
console.log([0,...arr1,4,5,6,...arr2])
let copyOfArr1 = [...arr1]
arr1.push(8)
console.log(arr1)
console.log(copyOfArr1)// hence by using spread operator we can copy the array but as it refers to different memory location changes in arr1 will not effect the copy of it

let obj = {a:1,b:2};
let obj2 = {...obj}
obj2.c = 3;
console.log(obj)
console.log(obj2)// similar to array obj2 addresses other memory location thus change in obj2 will not affect obj1

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();
