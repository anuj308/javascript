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

let n = localStorage.getItem("note")
alert("your note is " + n)

let p = prompt("Enter your note")
if(p){
    localStorage.setItem("note",p)
    let d = confirm("Do you want to delete the note?")
    if(d){
        console.log(localStorage.removeItem("note"))
        alert("Note deleted Succesfully")
    }
} 

