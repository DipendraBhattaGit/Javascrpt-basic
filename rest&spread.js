

// //rest operator 
// // ... is used in rest operator to denote it
// //it is used in array and object to handle undefinite number

// function addsum(a,b,c,...other)
// {
//     console.log(other[1]); //arguments after c will be stored in other as array
//     return a+b+c;
// }
// const res=addsum("the summ is:",1,2,3,5,6,7);
// console.log(res);


//spread operator 
// ...is used to expand iterables into individual elements
// var names=["john","doe","smith"];
// function getNames(name1,name2,name3){
// console.log(name1,name2,name3)
// }
// getNames(...names)//getNames(names[0],names[1],names[2])
// getNames(names)// gives all the defined element of the array 



// //spread in object
// var students={
//     name:"john",
//     age:23,
//     city:["newyork","boston"]
// };
// const age =students.age;//output is 23(only age)
// //const { age }=students;//output is all defined const age
// console.log(age);

//rest in object
// const{age,...rest}=students; //in output age is cancel because of rest operator other are displayed
// console.log(rest)


//spread
// var newstudent={
//     ...students,
//     age:"29" //the age is updated to 29
// }
// console.log(newstudent)