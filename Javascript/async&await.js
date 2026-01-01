//Async function can be made using the async keyword before the function definition
//example:
// async function Dipendra() {
// return 7;
//  } 

// async function Dipendra() {
//     return 5
// }
// Dipendra().then((x)=>{
//     alert(x)
// })

async function Dipendra1() {
    
    let kathmanduweather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Degree")
        },1000)//1000 = 1second
    })

    let Dhangadhiweather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("25 Degree")
        },2000)//2000 = 2 second
    })
    //Step1
    // kathmanduweather.then(alert)
    // Dhangadhiweather.then(alert)
    //Step 2
    console.log("wait a second weather is loading")
    let kathmanduw = await kathmanduweather
    console.log("wait a second weather is loading")
    let Dhangadhiw = await Dhangadhiweather
    return [kathmanduw,Dhangadhiw]
}
console.log("welcome to the weather control ")
let a = Dipendra1()
console.log(a)