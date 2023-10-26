// // searching the Dom

// $0 
// $1
// $0.innerHtMl="anuj"


// let aid1 = document.getElementById("aid1")
// console.log(aid1)
// aid1.style.color="black"
// aid1.style.background="blue"
// aid1.style.margin="30px 30px"
// aid1.style.padding="20px"
// aid1.style.border="2px solid black"



// let a1 = document.getElementsByClassName("a1")   
// console.log(a1)
// a1[0].style.color="red"
// a1[0].style.background="green"
// a1[0].style.margin="30px 30px"
// a1[0].style.padding="20px"
// a1[0].style.border="2px solid black"


// name not working
// let n = document.getElementsByName("name") 
// // let n = document.getElementById("name") 
// n.style.border="2px solid red"

// let aa = document.querySelectorAll(".aa")
// aa[0].style.color ="red"
// aa[1].style.color ="blue"
// aa[2].style.color ="green"
// console.log(aa)

// let bb = document.querySelector("#bb")
// bb.style.color="brown"   
// document.querySelector("this").style.background="green"
// let lnk = document.querySelector(".a1").getElementsByTagName("a")
// console.log(lnk)

// document.getElementByTagName("")


// matches closest and contains 


// aid1 is id and a11 is class
// let aid1 = document.getElementById("aid1")
// console.log(aid1)
// console.log(aid1.matches(".a11"))
// console.log(aid1.matches(".a1"))

// console.log(aid1.closest("#aid1"))
// console.log(aid1.closest(".a1"))


// let text = document.getElementById("text")
// console.log(text)
// console.log(text.contains(aid1))    


// in matches ,contains , closest use getElementByid("") only
// contains do not use double quotes



// chapter - 8 event and other Dom properties ---------------------------------------------------------------------------


// console.log() gives the element dom tree
// console.dir() gives element as an object  with properties


// tagName is used to read tag name of an element - only exist for element nodes
// nodeName is defined for all nodes(comment,text)

// let x = document.getElementsByTagName("span")
// console.log(x)
// let y = document.getElementsByTagName("span")
// console.dir(y)
// console.log(document.getFirstChildNodeName)
// console.log(document.getFirstElementChildName)

// innerHTML only valid for element nodes , outerHTML

// title.innerHTML
// title.innerHTML=<b>sharma</b>
// title.outerHTML
// title.OuterHTML=<u>sharma</u>


// data or nodevalue for text pr comment nodes
// document.firstChid.data
// document.firstChid.nodeValue

// text content - gives text content 
// console.log(document.body.textContent)

// hidden attribute in tag <span id="1s" hidden></span>
// element.hidden = false - that element will be displayed


// attribute method

// element.hasAttribute("attribute") gives true or false
// element.getAttribute("attribute") gives the value of the attribute
// element.setAttribute("attribute","value") use to set the attribute
// element.removeAttribute("attribute") remove the attribute
// element.attribute - gives the collection of all the attribute

// let time = document.getElementById("time")
// console.log(time)
// console.dir(time)
// let a1 = time.hasAttribute("class")
// console.log(a1)
// console.log(time.hasAttribute("border"))

// let a2 = time.getAttribute("class")
// console.log(a2)
// console.log(time.getAttribute("hidden"))

// time.setAttribute("style","color:red")
// time.setAttribute("hidden","true")

// time.removeAttribute("hidden")
// console.log(time.attributes)


// data- attribute
// data set
// if element is data-one element.dataset.one
// let time = document.getElementById("time")
// console.log(time.dataset)
// console.log(time.dataset.game)
// console.log(time.dataset.player)


// insert  methods

// let first = document.getElementById("first")

// // first.innerHTML= first.innerHTML + '<h1>insert Methods</h1>';

// let div = document.createElement("div"); ------------
// div.innerHTML = '<h1>insert Methods</h1>';

// first.append(div);
// first.prepend(div);
// first.after(div);
// first.before(div);
// first.replaceWith(div);

// first.append(div); this append at the end of the element(node)(first)
// first.prepend(div); this append at the begining of the element(first)
// first.after(div); this append after first or outside of div
// first.before(div);this append before the first or  outside the div
// first.replaceWith(div); in this first is replaced by div 


// insertAdjacent HTML/ text/ ELement
//  insertAdjacent HTML has four method
// let first = document.getElementById("first")
// first.insertAdjacentHTML('beforebegin','<h1 class="test">beforebegin</h1>')
// first.insertAdjacentHTML('beforeend','<h1 class="test">beforeend</h1>')
// first.insertAdjacentHTML('afterbegin','<h1 class="test">afterbegin</h1>')
// first.insertAdjacentHTML('afterend','<h1 class="test">afterend</h1>')

// first.remove() remove the first(element)
// first.remove()

// classname - will replace the original class with the new class 
// ,elem.classList.remove("") - will remove the defined class
// , elem.classList.toggle  - will do reverse of what is there like if red then remove red; red not exist then add the red
// elem.classlist - will give all the classes  
// elem.classList.add will add the class
// console.log(first.classList.contains("red")) contains checks for given class and then return true/false 
// any code which return  with true or false should be in console.log()

// first.className="red"
// console.log(first.classList)
// first.classList.remove("red")
// first.classList.toggle("red")
// first.classList.add("black")
// console.log(first.classList.contains("red"))


// setTimeOut and setInterval

// document.write("Hello")
// // setTimeout
// let a = setTimeout(function(){alert("i am inside settimeout")},2000)
// // gives time id 
// console.log(a) 
// const sum = (a,b,c)=>{
//     console.log("sum of a + b")
//     console.log(a+b+c)
// }
// setTimeout(function,delay,argument1,argument2..)
// setTimeout(sum,2000,2,3,4) means to run it in 2000 mili second 
// setTimeout(sum,2000,2,3,4) 
// setInterval(sum,2000,2,3,4) means to run it in every 2000 mili second or 2 seconds
//let time =  setInterval(sum,2000,2,3,4) 
 
// clearTimeout(a) is used to cancel the executing in case we change our mind
// clearTimeout(a)

// clearInterval(time) is used to clear the executing of setInterval
// clearInterval(time)

// browser event 

// is a signal that something has happend 
// important    dom event are:
// mouse events - click, right click , mousewheel up/down,mousehover,mouseup,mousedown
// keyboard events - keydown , keyup
// form event  - submit, focus etc
// document event - DomVontentloaded

// handing event 
// 1) in html attribute
// 2) in javascript page

// let container = document.getElementsByClassName("container")[0]
// console.log(container)
// container.onclick = ()=>{
//     let b = document.getElementsByClassName("btn")[0]  
//     b.innerHTML= b.innerHTML + "<b> Once more </b>"
// }

// adding a handler with javascript will overwrite the 

// addEventListener and removeEventListener

// let x = function(e) {
//     alert("hello world1")
// }
// let y = function(e) {
//     alert("hello world2")
// }
// let z = prompt("enter a number",2)
// btn.addEventListener('click',x) 
// btn.addEventListener('click',y)
// if(z=="2"){
//     btn.removeEventListener('click',x)
// }

// event object 
// when an event happens, the browser create  an event object,puts details into it and passes it as an argument to the handles

// event.clientX, event.clientY gives the coordinate of the cursor
// event.type, gives the event type
// event.target give the event element

// let s = function(event){
//     console.log(event.target)
//     console.log(event.currentTarget)
//     console.log(event)
//     console.log(event.type)
//     console.log(event.clientX)
//     console.log(event.clientY)
//     // alert("Hello world")
// }
// btn.addEventListener('click',s)


// chapter - 9 callback , promises , async/await

// // syncornous programing
// let a = prompt("your name")
// let b = prompt("your age")
// console.log(`${a} is ${b} years old.`)

// // asyncornous programing
// console.log("start")
// setTimeout(()=>{
//     console.log("in between")
// },2000)
// console.log("end")

// callback function 


// function loadscript(src,callback){
//     script=document.createElement("script")
//     script.src=src;
//     document.body.appendChild(script)
//     script.onload = function(){
//         console.log(`script loaded ${src}`)
//         callback(null,src);
//     }
//     script.onerror = function(){
//         console.log(` error loading script ${src}`)
//         callback(new Error("error loading  script") );
//     }
// }
// function loaded(error,src){
//     if(error){
//         console.log(error)
//         return
//     }
//     alert(`loaded src-`+ src)

// }
// loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',loaded)
// // error script below
// // loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/tstrap.bundle.min.js',loaded)


// callback hell and pyramid of doom more on this ,if we want to load a script 1 then 2,3,4,5 we write like this 
// but this is like a pyramid and not readable so  and we are giving all control to chintu what if he write wrong code in function and 
// for this error is generated then harry will be fired. so we don't use callback all the time  
// solution -  promises 

// loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//     if(error){
//         console.log(error)
//         sendEmergencycalltoceo()
//         return
//     } 
//     loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//         if(error){
//             console.log(error)
//             sendEmergencycalltoceo()
//             return
//         } 
//         loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//             if(error){
//                 console.log(error)
//                 sendEmergencycalltoceo()
//                 return
//             } 
//             loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//                 if(error){
//                     console.log(error)
//                     sendEmergencycalltoceo()
//                     return
//                 } 
//                 loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//                     if(error){
//                         console.log(error)
//                         sendEmergencycalltoceo()
//                         return
//                     } 
//                     loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//                         if(error){
//                             console.log(error)
//                             sendEmergencycalltoceo()
//                             return
//                         } 
//                         loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//                             if(error){
//                                 console.log(error)
//                                 sendEmergencycalltoceo()
//                                 return
//                             } 
//                             loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){
//                                 if(error){
//                                     console.log(error)
//                                     sendEmergencycalltoceo()
//                                     return
//                                 } 
//                                 loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function loaded(error,src){})
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// promise is 'Promise of code execution'
// in this a promise is made and if it  failed or executed it 
// resolve , reject predefined in js engine
// promise is used for parallel execution
// resolve and reject is the callback provided by javascript they are:-
// 1)resolve(value) - if job is finished sucessfully 
// 2)reject(error) - if job is fails
// promise object return by new new promise constuctor has these properties
// 1) state - initially pending then change to 'fuilfiled' when resolve is called or 'rejected' when reject is called
// 2) result - initially undefined then change to value if resolved - resolved(value) or error then reject(error) when rejected  

// promise p is capital after new 

// let promise1 = new Promise(function(resolve,reject){
//     console.log("promise1 is pending ")
//     alert("alert in promise1")
//     setTimeout(()=>{
//         console.log("i am  set time out in promise1")
//         resolve(56)
//     },3000);
// });

// console.log(promise1)    

// console.log("good morning ")

// let promise2 = new Promise(function(resolve,reject){
//     alert("alert in promise2")
//     setTimeout(()=>{
//         console.log("i am  set time out in promise2")
//         reject( new Error(" i am a error"))
//     },4000); 
// });

// console.log(promise2)


// // we can get final result from a promise  then , catch 
// // then
// // to get the value
// promise1.then((value)=>{
//     console.log(value)
// })
// promise1.then(alert);

// // to catch the error
// // promise2.catch((error)=>{
// //     console.log("it  a small error")
// // })
// // promise2.catch(alert); ...

// in .then() also can catch error if we write error function   


// promise chaining 
// .then() add one more promise in it 
// we can write custom promise also  and every .then() has resolve of new promise 

// promise2.then((value)=>{
//     console.log(value)},(error)=>{
//     console.log(error)
//             return new Promise((resolve,reject)=>{
//                 console.log("chaining")
//                 resolve(56)})
// }).then((value)=>{
//     console.log(value)
//     return 3
// }).then((value)=>{
//     console.log(value)
//     console.log("we are done ")})

// quiz loadscript from promise

// const loadscript=(src)=> {
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.type="text/javascript"
//         script.src=src 
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             resolve("script loaded")} 
//         script.onerror = ()=>{
//             reject(0)}
//     })
// }

// let p1 = loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js")

// p1.then((value)=>{
//     console.log(value)
//     return loadscript("https://code.jquery.com/jquery-3.3.1.slim.min.js")
// }).then((value)=>{
//     console.log("second script loaded")
// }).catch((error)=>{
//     console.log(error)
//     console.log(" it is an error")
// })


// multiple handler in promise 
// all handler run independently

// let p1 = new Promise((resolve,reject)=>{
//     console.log("query is pending ")
//     setTimeout(()=>{
//         console.log("it is resolved")
//         resolve(1)
//     },3000)
// })

// p1.then((value)=>{
//     console.log(value)
//     alert("resolved")
// })

// p1.then(()=>{
//     alert("yeah")
// })


// promise API

// 1) promise.all([])

// let p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve("promise 1 resolved")
//             reject(new Error("promise 1 iis having a error"))
//         },1000)
//     }
// )
// let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise 2 resolved")
//         },2000)
//     }
// )
// let p3 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise 3 resolved")
//         },3000)
//     }
// )
// // let promise_all = Promise.all([p1,p2,p3])
// // promise_all.then((value)=>{
// //     console.log(value)
// // })

// // but if  in one promise a rejected is then promise_all will shown error and it won't show other promise value 

// // promise.allSettled() will give indiviual status and value
// // let promise_all = Promise.allSettled([p1,p2,p3])
// // promise_all.then((value)=>{
// //     console.log(value)
// // })

// // promise.race() in this which ever promise resolved first will be displyed
// // let promise_all = Promise.race([p1,p2,p3])
// // promise_all.then((value)=>{ 
//     //     console.log(value)
//     // })
    
// // promise.resolve()

// // let a1 = Promise.resolve(6)
// // a1.then((value)=>{
// //     console.log(value)
// //     })

// // promise.reject

// // let a2 = Promise.reject( new Error("a2 reject error"))

// // promise.any() - wait for the first promise to get resolved and if its not error then it is the outcome anf if its error then check scecond 
// // promise similarly and if all promise are error then gives aggregate error

// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
//     }) 

// async / Await

// async can make any function a promise 
// by using await we can pause the function until the promise is fullfiled - can be used in the case 
// example
// async function anuj(){
//     let delhiweather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("delhi 27 deg")
//         },2000)
//     })
    
//     let bangoloreweather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("bangolore 21 deg")
//         },4000)
//     })
//     // delhiweather.then(alert)
//     // bangoloreweather.then(alert)
//     console.log("feacthing delhi weater please wait....")
//     let delhiW = await delhiweather
//     console.log("fetched delhi weater" + delhiW)
//     console.log("feacthing bangolore weater please wait....")
//     let bangoloreW = await bangoloreweather
//     console.log("fetched delhi weater" + bangoloreW)
//     return[delhiW,bangoloreW]
// }
// console.log("Bharat weather station")
// // anuj()

// // anuj().then((value)=>{
// //     console.log(value)
// // })
// const cherry = async ()=>{
//     console.log("i am cherry function")
// }

// const main9 = async ()=>{
//     let a = await  anuj()
//     let b = await cherry()
// }
// main9()


// // error handling in javascript 
// // there is an error then we can catch it so script won't stop because of error 
// // the error will be a console log statement 

// // try catch syntax
// try{
//     console.log(Time)
// }
// catch(error){
//     console.log(error)
//     console.log("it a small error")
// }

// // it work like this 
// // 1)first the code in try is executed 
// // 2)if there is no error,catch is ignored else catch is executed

// // try catch works synchronously
// // if an exception happens in scheduled code,like in setTimeout(),then try..catch won't catch it 
// // because the function itself is executed later,when the engine has already left try ..contruct
// try{
//     setTimeout(()=>{
//         console.log(Time)
//     },1000)
// }
// catch(error){
//     console.log(error)
//     console.log("it a small error")
// }


// error object 

// try{
//     time
// }
// catch(error){
//     console.log(error)
//     console.log(error.name)
//     console.log(error.message)
// }
// we can throw our own custom error by throw syntax
// search error in javascript mdn - there are many error 

// const f = ()=>{
// try{
//     let a = 0;
//     // throw new Error("this is a error so  ")
//     // throw new ReferenceError("this is a an refrence error and it written in meassage  ")
//     // console.log(p)
//     return 
// }
// catch(error){
//     console.log(error)
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }
// finally{
//     console.log("close the file")
//     // exit the loop
//     // write in log file
// }
// }
// f()
// console.log("end")

// finally will run after try catch and if it exixt it will run  in all cases: like
// after try if there were no error , after catch if there are error 
// if there is an error in catch then program should stop but finally will be runed
// if there is retun in try ,finally is executed just before the control return to outer code

