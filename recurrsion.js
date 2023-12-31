function pow(x,n){
    if(n==1){
        return x
    }
    else{
        return x*pow(x,n-1)
    }
}
console.log(pow(2,3))

//task 1 
//using recursion
function sumTo(n){
    if(n==1){
        return n
    }
    else{
        return n+sumTo(n-1)
    }
}
console.log(sumTo(4))


//using for loop
function sum2To(n){
    let sum =0
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum
}
console.log(sum2To(4))

//using Arithmetic Progression
function sum3To(n){
    return n*(n+1)/2
}
console.log(sum3To(4))

//factorial
function fact(n){
    if(n==1){
        return n
    }else{
        return n * fact(n-1)
    }

}
console.log(fact(5))

//fibonacci
function fib(n){
    if(n<=1){
        return n
    }else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(5))// it consumes lot of time to calculate larger values 

function fibb(n){
    let x=1;
    let y=1
    for(let i=3;i<=n;i++){
        let z= x+y
        x=y
        y=z

    }
    return y
}
console.log(fibb(77))

//task4 linked list 
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list){
    
    while(list){
        console.log(list.value)
        list = list.next

    }
}
printList(list)

function printList1(list){
    console.log(list.value)
    if(list.next){
        return printList1(list.next)
    }

}
printList1(list)

//task reversing the linked list


// function reverseLinkedList(list) {
//     let arr = [];
//     let temp = list;
//     while(temp){
//         arr.push(temp.value)
//         temp=temp.next
//     }
//     for(let i=arr.length-1;i>=0;i--){
//         console.log(arr[i])
//     }
// }
// reverseLinkedList(list)

function reverseLinkedList1(list){
    
    if(list.next){
         reverseLinkedList1(list.next)
    }
    console.log(list.value)
}
reverseLinkedList1(list)