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

// pratice -5

// quetion 1 to take input from user and add number in the array
// let a1 = prompt("enter first number")
// let a2 = prompt("enter second number")
// let a3 = prompt("enter third number")
// let a4 = prompt("enter four number")
// let arr = []
// let b1 = arr.push(a1)
// let b2 = arr.push(a2)
// let b3 = arr.push(a3)
// let b4 = arr.push(a4)
// console.log(b1)
// console.log(b2)
// console.log(b3)
// console.log(b4)
// console.log(arr)

// // question 2 is to add number till 0 is addded , run in web browser
// let arr = []
// let a1
// do{
//     a1 = prompt("enter first number")
//     a1=Number.parseInt(a1)
//     let b1 = arr.push(a1)
//     console.log(b1)
// }while(a1!=0);
// console.log(arr)

// // question 3 filter numberdivisiable by 10 from the array

// let f = arr.filter((n)=>{
//     w = n%10==0
//     return w
// })
// console.log(f)

// // question 4 create a array of square of given number
// let arr4 = [3,7,8,6,2,4,9]
// let q = arr4.map((e)=>{
//     return e*e
// }) 
// console.log(q)

// // question 5 by reduce calculated the factorial of given natural number
// let arr = [1,2,3,4,5,6]
// let a = arr.reduce((a1,a2)=>{
//     return a1*a2
// })
// console.log(a)


// // exerice - 1 guess the number from 1 to 100, genarate a ramdom number,score = 100 - (no of guess),program should be terminated once
// //  the number is guess

// let a = Math.floor(Math.random()*100)+1;
// let i
// let n = 0
// let score
// do{
// i = prompt("Guess the number between 1 to 100")
// i = Number.parseInt(i)
// if (i==a){
//     console.log("your Guess is correct")
// }
// else{
//     console.log("your Guess is incorrect")
// }
// if (i>a){
//     console.log("guess is greater than original number ")
// }
// else if(i<a){
//     console.log("guess is less than the original number")
// }
// n++
// score = 100 - n
// }while(i!=a);
// console.log(`you have score ${score} points`)

// chapter - 6 
// // question 1 wap using prompt functionto take input of age as a value from the user and use alert to tell him if
// // he can drive
// let d = prompt("what your age?")
// if(d>18){
//     alert("you can drive")
// }
// else{
//     alert("you can't drive")
// }

// question 2 ask i q 1 if user want to see the prompt again by confirm
// let d = prompt("what your age?")
// if(d>18){
//     alert("you can drive")
// }
// else{
//     alert("you can't drive")
// }
// let c = confirm("do you want to it again?")
// if(c){
//     let d = prompt("what your age?")
//     if(d>18){
//         alert("you can drive")
//     }
//     else{
//         alert("you can't drive")
//     }
// }

// using loop is best 


// let drive = ((age)=>{
//     return age>=18? true: false
// })

// let runagain = true
// while(runagain){
//     let age = prompt("what is your age?")
//     if(drive(age)){
//         alert("you can drive")
//     }
//     else{
//         alert("you can't drive")
//     }
//     runagain = confirm("do you want to do it again")  
// }

// // question 3 log error if age enter is negative
// let d = prompt("what your age?")
// if(d<0){
//     console.error("age can't be  is negative")
// }
// if(d>18){
//     alert("you can drive")
// }
// else{
//     alert("you can't drive")
// }
// let c = confirm("do you want to it again?")
// if(c){
//     let d = prompt("what your age?")
//     if(d<0){
//         console.error("age can't be  is negative")
//     }
//     if(d>18){
//         alert("you can drive")
//     }
//     else{
//         alert("you can't drive")
//     }
// }

// let drive = ((age)=>{
//     return age>=18? true: false
// })

// or using loop it make program short and better

// let runagain = true
// while(runagain){
//     let age = prompt("what is your age?")
//     if(age<0){
//         console.error("age can't be negative")
//     }
//     if(drive(age)){
//         alert("you can drive")
//     }
//     else{
//         alert("you can't drive")
//     }
//     runagain = confirm("do you want to do it again")  
// }

// // question 4 is to change the url to google if user enter number greater than 4
// let n = prompt("enter number")
// n = Number.parseInt(n)
// if(n>4){
//     location.href="https://google.com"
// }

// // question 5 change the backgroundcolor as user enter the prompt
// let u = prompt("backgroundcolor(red,yellow,green)-")
// if(u=="red"){
//     document.body.style.background="red"
// }
// else if(u=="green"){
//     document.body.style.background="green"
// }
// else if(u=="yellow"){
//     document.body.style.background="yellow"
// }


// exerice 2  snake water gun game
// use javascript to create a game of snake water & gun.the game should ask you to enter 
// s ,w , g. the computer should ramdomly generate s ,w ,g and declare win or loss using alert use confirm and promt 
// when required

// let arr = ['S','W','G']
// let W = 0
// let L = 0
// let D = 0
// let score
// let i = 0
// let a1 = confirm("Do you want to play Snake, Water & Gun")
// let a2 = prompt("choose Rounds:- 3 or 10")
// a2 = Number.parseInt(a2)
// while(i<a2){
//     let r = arr[Math.floor(Math.random()*arr.length)]
//     let a = prompt("choose:- Snake - S, Water - W, Gun -G")
//     if(r=="S" && a=="W"){
//         alert("You Win")
//         W++
//     }
//     else if(r=="S" && a=="S"){
//         alert("Draw")
//         D++
//     }
//     else if(r=="S" && a=="G"){
//         alert("You Lose")
//         L++
//     }
//     if(r=="W" && a=="W"){
//         alert("Draw")
//         D++
//     }
//     else if(r=="W" && a=="S"){
//         alert("You Lose")
//         L++
//     }
//     else if(r=="W" && a=="G"){
//         alert("You Win")
//         W++
//     }
//     if(r=="G" && a=="W"){
//         alert("You Lose")
//         L++
//     }
//     else if(r=="G" && a=="S"){
//         alert("You Win")
//         W++
//     }
//     else if(r=="G" && a=="G"){
//         alert("Draw")
//         D++
//     }
//     alert("Next Round")
//     i++
// }
// score = W + D - L
// console.log(`Your score is ${score}`)



// // by function
// function swg(r,a) {
//     if (r == "S" && a == "W") {
//         alert("You Win")
//         W++
//     }
//     else if (r == "S" && a == "S") {
//         alert("Draw")
//         D++
//     }
//     else if (r == "S" && a == "G") {
//         alert("You Lose")
//         L++
//     }
//     if (r == "W" && a == "W") {
//         alert("Draw")
//         D++
//     }
//     else if (r == "W" && a == "S") {
//         alert("You Lose")
//         L++
//     }
//     else if (r == "W" && a == "G") {
//         alert("You Win")
//         W++
//     }
//     if (r == "G" && a == "W") {
//         alert("You Lose")
//         L++
//     }
//     else if (r == "G" && a == "S") {
//         alert("You Win")
//         W++
//     }
//     else if (r == "G" && a == "G") {
//         alert("Draw")
//         D++
//     }
// }

// let arr = ['S', 'W', 'G']
// let W = 0
// let L = 0
// let D = 0
// let score
// let z = true
// let a1 = confirm("Do you want to play Snake, Water & Gun")
// while(z){
//     let a2 = prompt("choose Rounds:- 3 or 10")
//     a2 = Number.parseInt(a2)
//     let i = 0
//     while (i < a2) {
//         let r = arr[Math.floor(Math.random() * arr.length)]
//         let a = prompt("choose:- Snake - S, Water - W, Gun -G")
//         console.log(swg(r,a))
//         if (a2 == 3) {
//             if (i == 2) {
//                 score = W + D
//                 alert("3 Rounds are over and Thank you for playing")
//                 alert(`Your score is ${score}`)
//                 break;
//             }
//             alert("Next Round")
//         }
//         if (a2 == 10) {
//             if (i == 9) {
//                 score = W + D
//                 alert(`10 Rounds are over and Your score is ${score}`)
//                 alert("Thank you for playing")
//                 break;
//             }
//         }
//         i++
//     }
//     score = W + D
//     console.log(`Your score is ${score}`)
//     z = confirm("Do you want to play again")
//     if(false){
//         break;
//     }
// }