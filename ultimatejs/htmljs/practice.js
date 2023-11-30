// chapter - 7 

// question 1 create a navbar and change the element to red

// let nav = document.getElementById("navbar")
// console.log(nav)
// nav.firstElementChild.firstElementChild.style.color="red"

// question 2 create a table without tbody and check from view page source if tbody is there or not

// question 3 create element with 3 child and make first and last element color to green
// let items = document.querySelectorAll(".items")
// console.log(items)
// items[0].style.color="green"
// items[2].style.color="green"

// question - 4 to make ul li element backgroundcolor red

// let list = document.getElementById("list")
// console.log(list)

// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//     element.style.background="red";
// })

// question 5 what look for the farthest ancestor that matches a given selector
// closest contains matches none of these
// answer none of these

// pratice - 8 

// question 2
// question 3
// let google= document.getElementById("google")
// google.addEventListener('click',()=>{
//     window.location = "https://google.com/"
// })
// twitter.addEventListener('click',()=>{
//     window.location = "https://twitter.com/"
// })
// easy.addEventListener('click',()=>{
//     window.location = "https://www.easemytrip.com/"
// })
// travel.addEventListener('click',()=>{
//     window.location = "https://travellpu.wordpress.com/"
// })
// let twitter= document.getElementById("twitter")
// let travel= document.getElementById("travel")
// let easy= document.getElementById("easy")

// question 5

// let bulb = document.getElementById("bulb")
// let btn = document.getElementById("btn")
// btn.addEventListener('click',()=>{
//     bulb.classList.toggle("yellow")
// })



// pratice - 9

// // question 1 loadscript function from promise and use .then() to display an alert
// const loadscript = async (src) =>{
//     return new Promise((resolve,reject)=>{
//        let script = document.createElement("script")
//        script.src=src
//        script.onload = ()=>{
//         resolve(src)
//        }
//        document.body.appendChild(script)
//    })
// }

// const work2 = async ()=>{
//     let a = await loadscript("https://code.jquery.com/jquery-3.3.1.slim.min.js")
//     console.log(a)
// }
// work2()

// question - 2 same with async and await

// question 3 create promise which reject after 3 seconds use an async/await to get its value use a try catch to handle its error
// let p = () => {
//     return new Promise((_resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("its an error"))
//         }, 3000)
//     })          
// }
// let worl = async () => {
//     try {
//         let x = await p()
//         console.log(x)
//     }
//     catch (err) {
//         console.log(err)
//         console.log("over")
//     }
// }
// worl()

// question 4  write a program using promise.all() inside an async/await to await 3 promise. compare its results with the case where we await 
// these promise one by one.


// let p1 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1)
//         }, 1000)
//     })
// }

// let p2 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2)
//         }, 2000)
//     })
// }
// let p3 = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(3)
//         }, 2000)
//     })
// }
// const p = async () => {
//     // console.time("p")
//     // let p12 = await p1() //fetch 10 product from database
//     // let p22 = await p2() //fetch 10 more
//     // let p32 = await p3() //fetch yet another 10 more
//     // console.log(p12, p22, p32)
//     // console.timeEnd("p")
//     console.time("p")
//     let p12 = p1()
//     let p22 = p2()
//     let p32 = p3()
//     let p1p2p3 = await Promise.all([p12,p22,p32])
//     console.log(p1p2p3)
//     console.timeEnd("p")
//     // Promise.all([p1,p2,p3])
// }
// p()


// pratice - 10 

// question - 1
// coding contest website in exersice

// question -2  create a note saving app which stores your note to localstorage
// let a = true
// while (a) {
//     let note_name = prompt("Enter the Note title")
//     let note = prompt("Enter the Note")
//     console.log(localStorage.setItem(note_name, note))
//     let w = localStorage.getItem(note_name)
//     // alert(`your note is ${w}`)
//     // console.log(w)
//     // console.log(localStorage)
//     let a = confirm("Do you want to write another Note?")
//     if(a){
//         continue
//     }
//     else{
//         break;
//     }
// }

// question -3  repeat last question and fetch  the note which was saved
// question -4 is to delete the note in previous question

// let n = localStorage.getItem("note")
// alert("your note is " + n)

// let p = prompt("Enter your note")
// if(p){
//     localStorage.setItem("note",p)
//     let d = confirm("Do you want to delete the note?")
//     if(d){
//         console.log(localStorage.removeItem("note"))
//         alert("Note deleted Succesfully")
//     }
// } 

// pratice - 11

// // question 1 is to create a javascript class to create a complex number. create  a constructor to set 
// // the real and complex part
// // question -2 write a method to add two complex number in the above class
// question - 5 use getters & setters to set and get the real and imaginary parts of the complex number
// class complex_number {
//     constructor(real, imaginary) {
//         this._real = real
//         this._imaginary = imaginary
//     }
//     get real() {
//         return this._real
//     }

//     get imaginary() {
//         return this._imaginary
//     }

//     set real(newreal) {
//         this._real = newreal
//     }
//     set imaginary(newimaginary) {
//         this._imaginary = newimaginary
//     }

//     add(num) {
//         this._real = this._real + num.real
//         this._imaginary = this._imaginary + num.imaginary
//         console.log(`the addition of complex number is ${this._real} + ${this._imaginary}i`)

//     }
// }

// let first_number = new complex_number(23, 5)
// let second_number = new complex_number(3, 8)
// console.log(first_number.real,first_number.imaginary)
// first_number.real = 10
// first_number.imaginary = 10
// first_number.add(second_number)

// console.log(`${first_number.real} + ${first_number.imaginary}i`)


// question 3 create a class student from a class human override  a method & see changes

// class human{
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`${this.name} is sleeing`)
//     }
//     play(x){
//         console.log(`${this.name} is playing for ${x} hrs`)
//     }
// }

// class student extends human{
//     self_study(){
//         console.log(`${this.name} is doing self study`)
//     }
//     lecture(){
//         console.log(`${this.name} is attending lectures`)
//     }
//     play(x){
//         console.log(`${this.name} is playing for ${x - 1} hrs`)
//     }
// }

// let m = new student("mohit")
// m.play(4)

// // question 4 see if student is an instance of human using instanceof keyword
// console.log(m instanceof human) 



// practice set 12

// question 1
// write a program to print the following after 2 seconds delay
// Hello
// world


// const set = function(){
//     setTimeout(()=>{
//         console.log("Hello\nWorld")
//     },2000)
// }
// set()


// // question 2
// // write a js program to find average of numbers in an arrary using spread syntax

// let arr = [1,24,5,6,4,33]
// let d = arr.length

// let  avg  = async (...arr)=>{
//     return new Promise((req,res)=>{
//         let c = 0
//         for (i=0;i<d;i++){
//             c = c + i
//         }
//         // console.log(c)
//         // console.log(d)
//         console.log(c/d)
//     })
// }
// let x = async ()=>{
//     let c = await avg()
//     console.log(c)
// }
// x()

// question 3
// write a js function which resolve a promise after n seconds.the function takes n as the parameter use an iife to execute the function 
// with different values of n

// let s = async (n)=>{
//     return new Promise((req,res)=>{
//         setTimeout((req,res)=>{
//             console.log("i am resolving")
//         },n)
//     })
// }

// (async (n=2)=>{
//     let  e = await s(n)
//     console.log(e)
// })()

// question 4
// write a simple intrest calculator using javascript

// const si = (p,r,t)=>{
//     return new Promise((req,res)=>{
//         let cal = p*r*t/100
//         console.log("simple intrest: ",cal)
//     })
// }
// si(20000,10,1)