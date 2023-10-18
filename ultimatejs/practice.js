// chapter 2 pratice set
// Q 1 
// let a = prompt("what is your age?")
// if (a>10 & a<20){
//     console.log("age is between 10 and 20")
// }
// else{
//     console.log("your age in not in between 10 and 20")
// }
// Q 2  run in console of web browser
// let a = prompt("what is your age?")
// a = Number.parseInt(a)
// switch (a){
//     case 10 :
//         console.log("age is 10")
//         break;
//     case 20 :
//         console.log("age is 20")
//         break;
//     case 30 :
//         console.log("age is 30")
//         break;
//     case 40 :
//         console.log("age is 40")
//     default:
//         console.log("this id default")
// }
// Q 3 run in web browser
// let a = prompt("enter number?")
// if (a%2==0 & a%3==0){
//     console.log("number is divisiable by 2 and 3")
// } 
// else{
//     console.log("number in not divisiable by 2 and 3")
// }
// Q 4 run in web browser
// let a = prompt("enter number?")
// a = Number.parseInt(a)
// if (a%2==0){
//     console.log("number is divisiable by 2")
// }
// else if (a%3==0){
//     console.log("number is divisiable by 3")
// }
// Q 5 
// let a = prompt("age?")
// console.log("you can",(a>18? "drive":"not drive"))

// pratice - 3 loops
// q 1 wap to print mark of student in an object
// let mark = {
//     rohan:80,
//     anuj:90,
//     ritik:97
// }
// // for(let key in mark){
// //     console.log("the mark of " + key + "are " + mark[key])
// // }
// for(let i = 0 ; i<Object.keys(mark).length ; i++){
//     console.log("the marks of "+ Object.keys(mark)[i] + "are" + mark[Object.keys(mark)[i]])
// }
// question 4 to print try again until user enter the correct Number
// let n = 9
// let a
// a = Number.parseInt(a)
// while(a!=n){
//     let a = prompt("enter correct number?")
//     console.log("try again")
//     if (a==n){
//         console.log("correct number")
//         break;
//     }
// }
// question 5 write a function to find mean of 5 numbers
// function mean(a,b,c,d,e){
//     return a+b+c+d+e/5
// }
// console.log("mean of 1 2 3 4 5 } is",mean(1,2,3,4,5))
// from taking input from user
// imp prompt is always a string so to convert to integer we use Number.parse(a)
// function mean(x,y,z,w,s){
//     return (x + y + z + w + s)/5
// }
// let a = prompt("enter first number")
// let b = prompt("enter second number")
// let c = prompt("enter third number")
// let d = prompt("enter fourth number")
// let e = prompt("enter fifth number")
// a = Number.parseInt(a) 
// b = Number.parseInt(b) 
// c = Number.parseInt(c) 
// d = Number.parseInt(d) 
// e = Number.parseInt(e) 
// console.log(`mean of ${a} ${b} ${c} ${d} ${e} is`,mean(a,b,c,d,e)

// pratice - 4
// question 1
// console.log("har\"".length)
// question 2
// stringvariable.includes(word) gives true or false
// let a = "time is runing "
// console.log(a.includes("Time"))
// console.log(a.includes("time"))
// variable.startsWith("start word") it also give true or false
// let a = "time is runing "
// console.log(a.startsWith("time"))
// // variable .endsWith("end word") it also give true or false
// console.log(a.endsWith("runing"))
// question 3 wap to convert strig to lowercase
// let a = "Time is Runing "
// console.log(a.toLowerCase())
// question 4 extract amount from a
// let a = "Please give Rs 1000"
// console.log(a.slice(15,19))
// // question 5 change 4 th charater of the string
// console.log(a.replace("1000","10000000"))