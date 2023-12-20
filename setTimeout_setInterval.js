// setTimeout(() => {
//     console.log("hello")
// }, 1000);



// function pdt(a,b){
//     return a*b
// }
// setTimeout(pdt,4000)

let tim = setTimeout(() => {
    console.log("i am not coming")
}, 1000);

let timed = setInterval(() => {
    console.log("Bring it on!")
}, 5000);
clearInterval(timed)


//Nested setTimeout
let timer = setTimeout(function tick(){
    console.log("times up!")
    timer = setTimeout(tick,2000)
},2000)

