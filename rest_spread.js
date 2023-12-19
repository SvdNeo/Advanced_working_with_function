let args = [1,2,3,4,5,6];
function sumAll(...args){
    let sum = 0;
    for(let i of args){
        sum += i
    }
    return sum
}
console.log(sumAll(...args))
