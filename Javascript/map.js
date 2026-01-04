// map operator works on arrays and creates a new array by applying a function to each element of the original array.

//for each loop is a function which calls once for each element in an array
// example  
// const a=[1,2,3,4,5];
// a.forEach[(value,index,Array)={
//     //function logic
// }];

// let arr=[11,23,10];
// arr.map((Value)=>{
//     console.log(Value)
// })

//map operator is used to create a new array by performing some operator on each array element
//example   const a=[1,2,3]
//a.map[(value,index,array)=>{
//return value *value;
// }]

// let arr =[23,24,27];
// let a= arr.map((value,index)=>{
//     console.log(value,index)
//     return value + index //index wise value is added 
// })
// console.log(a)


//filter mathod
//filter method creates a new array with all elements that pass the test implemented by the provided function.

//  let arr=[1,12,3,4,5,63,7,8]
// let a = arr.filter((a)=>{
//     return a<10
// })
// console.log(a)

//reduce method
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// let arr=[1,2,3,4,2,1]
// let newarr=arr.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(newarr)

//or

// let arr=[1,2,3,4,2,1,7];
// const reduce_func=(h1,h2)=>{
//     return h1+h2
// }
// let newarr=arr.reduce(reduce_func);
// console.log(newarr);

