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


// chapter - 10  network request and storing data 

// fetch api
// here fetch give a promise , p is promise
// we use fetch to get or send data from network
// we can get data in one form only or we can use only one body reading method like .json() - parse the information as json,
// response.text()- read and return the text
// , response.formData(),response.blob(),

// response headers - response.headers
// resuest headers - is in option -

// syntax of fetch api is fetch(url,options)

// let p = fetch('https://api.weatherbit.io/v2.0/current?lat=35.7721&lon=-78.63861&key=XXX&units=I')
// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// },{headers:{
//     Authentication:'secret'
// }}).then((value)=>{
//     console.log(value)
// })

// post request in fetch 

// // in option use method: POST
// json.stringify() - javascript object to string
// json.parse()

// let options = {
//     method: 'POST',
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'growth',
//         body: 'jObs',
//         userId: 178,
//     })
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// now in async function 

// const createtodo = async (todo) => {
//     let options = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },body: JSON.stringify(todo)        
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     response = await p.json(todo)
//     return response
// }
// const getTodo = async (id)=>{
//     let u = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     let l = await u.json()
//     return l 
// }
// const mainfunc = async ()=>{
//     let todo = {
//         title: 'growth',
//         body: 'jObs',
//         userId: 178,
//     }
//     let todr = await createtodo(toodo)
//     console.log(todor)
//     console.log( await getTodo(5))
// }

// mainfunc()

// cookie in javascript
// it is a small string of data stored directly in the browser

// we can acces cookie by typing in console alert(document.cookie) - contains key=value pairs delimited by a ';'

// cookie are set by web browser using set - cookie HTTP-header. next time when the request is sent to the same domian,the browser send 
// the cookie using the cookie HTTP-header . that way the server knows who sent the request

// document.cookie="name=anuj986"
// document.cookie="name2=anuj9345886"
// console.log(document.cookie)

// the write operation doesn't touch other cookies.
// data store in key , values pair separeted with ';'

// let k = prompt("enter key")
// let v = prompt("enter values")
// document.cookie=`${encodeURIComponent(k)}=${encodeURIComponent(v)}`
// console.log(document.cookie)

// by this special charater are encoded 
// encodeuricomponent() - to emcode
// decodeuricomponent()- to decode 

// cookie options - are several option which are provided after key = value to set call like this 

// document.cookie("user=aandjs;path=/a;expires=Tue,29 dec 09:23:34 GMT")

// Note
// 1) the name= value pair , after encodeURIcomponent,should not exceed 4kb
// 2) the total no of cookie is limited to 20 +(exact number is browser dependent)


// local storage - 
// is a web storage object which are not sent to server with each request
// this data survives a full page refresh and even a full browerser restart

// localStorage.setItem("name","javascript")

// let key=prompt("enter key for localstorage")
// let value=prompt("enter values for localstorage")

// localStorage.setItem(key,value)

// console.log(`the value of ${key} is ${localStorage.getItem(key)}`)

// if(key=="red" || key=="blue"){
//     localStorage.removeItem(key)
// }

// if(key==="0"){
//     localStorage.clear()
// }

// console.log(localStorage.length)

// // console.log(localStorage.key(index))
// console.log(localStorage.key(1))
// console.log(localStorage.key(2))
// console.log(localStorage.key(3))

// // we can get or set value like an object
// localStorage.one=1
// alert(localStorage.one)
// delete localStorage.one

// note
// 1)both key and value must be string
// 2) we can use two JSON method to store object in javascript
// JSON.stringify(object) - convert object to JSON string
// JSON.parse(string) - convert string to object(must be a valid json)


// session storage

// use less than localstorage. propertiea and method are same but
// 1)The sessionstorage exixts only within the current browser tab another tab with same page will have a different storage
// 2)data survives page refersh, but not closing/opening the tab

// sessionStorage.clear()
// sessionStorage.setItem("name","sun")
// sessionStorage.removeItem("name")
// sessionStorage.getItemItem("name")

// Storage event
// when data get updated in localstorage or sessionstorage, storage event triggers with these properties:
// 1)key - 
// 2)old value - previous value
// 3)new value - new value
// 4)url - page url
// 5)storagearea- local or session storage

// we can listen the onstorage event of window which is triggred when update are made to same storage

// window.onstorage = (e)=>{
//     alert("changed")
//     console.log(e)
// }


// chapter - 11   object oriented programing 

// is for make thinks easier
// four pillar:-
// abstraction- hiding of internal detail like in a mixer don't worry about how it work but when you call runmixer it will work
// encapsulation - combining multiple thing in one entity
// inheritance - you know
// polymorphism - one thing has many form

// prototypes and inheritance

// in programming we often take something and then extend t. for example we might want to create a user  object and "admin" and "guest" will
// be slightly modified variants of it

// prototypes
// js object have a special property called prototype that is either null or  reference another object

// when we try to read a property from a prototype and its missing , javascript automatically takes it  from the prototype. this is called
// "prototype inheritance"
// let o = {
//     name:"anuj",
//     language:"javascript",
//     run:()=>{
//         alert("self run")
//     }
// }
// console.log(o)

// let p = {
//     run:()=>{
//         alert("run")
//     }
// }
// o.__proto__= p
// p.__proto__ = {
//     name1:"tanu"
// }
// console.log(o.name)
// console.log(o.name1)
// o.run()


// // classes and object
// //   a class is an extensiable program-code trmplate for 'creating object
// // syntax 
// class RailwayForm{
//     submit(){
//         alert( this.Name + " your form is submitted for train no : "+ this.trainno)
//     }
//     cancel(){
//         alert(this.Name + " your form is cancelled for train no : "+ this.trainno)
//     }
//     fill(givenname,trainno){
//         this.Name= givenname
//         this.trainno = trainno
//     }

// }
// let anujForm = new RailwayForm()
// let ritikForm = new RailwayForm()

// // forms to fill for anuj
// anujForm.fill("anuj",134344)
// ritikForm.fill("ritik",189944)
// anujForm.submit()

// // forms to fill for ritik
// ritikForm.submit()
// ritikForm.cancel()

// construtor 
// it is called eveytime a object is runed
// every class has a construtor

// read mdn docs for more info and knowledge

// class RailwayForm{
//     constructor(givenName,trainno,address){
//         this.Name= givenName
//         this.trainno = trainno
//         this.address = address
//     }
//     submit(){
//         alert( this.Name + " your form is submitted for train no : "+ this.trainno)
//     }
//     cancel(){
//         this.trainno = 0
//         alert(this.Name + " your form is cancelled for train no : "+ this.trainno)
//     }
//     preview(){
//         alert(this.Name + " your form has train no " + this.trainno + " and your address is " +this.address) 
//     }


// }
// let anujForm = new RailwayForm("anuj",346447,"costa vihar , odisha - 547896")
// let ritikForm = new RailwayForm("ritik",67890,"bihar - 788115")


// // no need to fill forms 
// // anujForm.fill()

// // forms for ritik
// ritikForm.preview()
// ritikForm.submit()
// ritikForm.cancel()
// ritikForm.preview()

// inheritance & extends keywords
// // class inheritance is a way for one class to extend another class. this is done by using the extends keywords

// // extend keyword is used to extend another class
// //              class child extends parent

// class animal{
//     constructor(Name,color){
//         this.Name = Name
//         this.color = color
//     }
//     shout(){
//         console.log(`${this.Name} is shouting`)
//     }
//     run(){
//         console.log(`${this.Name} is runing `)
//     }
// }

// class Monkey extends animal{
//     eatbanana(){
//         console.log(`${this.Name} is eating banana`)
//     }
// }
// class puppy extends animal{
//     bark(){
//         console.log(`${this.Name} is barking`)
//     }
// }
// let m = new Monke("shy","white") 
// m.shout()
// m.run()
// m.eatbanana()
// let p = new puppy("tiger","black")
// p.shout()
// p.run()
// p.bark()

// method overriding - if we create our own implementation of run, it will not  be taken from the animal class
// this is called method overriding

// super keyword - when we override a method, we don't want the method of the previous class to go in vain 
// we can execute  it using  super keyword

// another example - 

// // overriding constructor - if a class extends another class and has no construtor,then below constructor is auto generated
// // construtor in inheriting classes must call super(...) and do it  before using this 
// // we can also use super.method() in a child method to call parent method
// class employee {
//     constructor(name){
//         this.name = name
//         console.log(`${name} programer is here`)
//         // console.log(`employconstructor is here`)
//     }
//     login() {
//         console.log(`Employee has logged in `)
//     }
//     logout() {
//         console.log(`Employee has logged out`)
//     }
//     requestleaves(x) {
//         console.log(`Employee has requested ${x} leaves - Auto approved`)
//     }
// }
// class programer extends employee {
//     // constructor(...args){ -- if there is no constructor i the  child class, this is created automatically
//     //     super(...args)
//     // }
//     constructor(name){
//         super(name)
//         console.log(`this is a newly writen constructor`)

//     }

//     requestleaves(x) {
//         // console.log(`Employee has requested ${x+1} leaves`)
//         super.requestleaves(x+1)
//         console.log(`one extra`)
//     }
// }

// let a = new programer("anuj")
// a.login()
// a.logout()
// a.requestleaves(3)

// static methods
// it is used to implement function that belong to a class as a whole  and not to any particular object
// static method is not available for individual objects

// class animal{
//     constructor(Name){
//         this.Name = animal.capitalize(Name)
//     }
//     run(){
//         console.log(`${this.Name} is runing `)
//     }
//     static capitalize(Name){
//         return Name.charAt(0).toUpperCase() + Name.substr(1,Name.lenght)
//     }
// }

// let b = new animal("yash")
// b.run()

// getter & setters
// classes may include getter and setter to get & set the computer properties

// class Animal{
//     constructor(Name){
//         this._name = Name
//     }
//     fly(){
//         console.log(`i am flying`)
//     }
//     get Name(){
//         return this._name
//     }
//     set Name(newName){
//         this._name = newName
//     }
// }

// let f = new Animal("jack")
// f.fly()
// console.log(f.Name)
// f.Name ="bruno"
// console.log(f.Name)

// let e = 454

// class dog extends Animal{
//     bark(){
//         console.log("barking ")
//     }
// }
// let y = new dog()

// // instances of 
// // the instances of operator allows to check whether an object belongs to a certain class
// // syntax  (object instanceof class)
// // it returns true if obgject belongs to the class or any other class inheriting from it 
// console.log(f instanceof Animal)
// console.log(y instanceof Animal)
// console.log(e instanceof Animal)


// chapter - 12 advanced javascript
// there are  some javascript  concepts  which made the life of a devloper extremly simple. we will dicuss some of those in this chapter
// IIFE - immediately invoked function expression is a javascript function that run as soon as it is defined

// let p = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(446)
//         },3000)
//     })
// }
// (async ()=>{
//     let a = await p()
//     console.log(a)
//     let b = await p()
//     console.log(b)
// })();

// destructuring 

// let arr = [2, 3, 4, 9, 7,89,65]

// let [a,b,c]= arr
// let [a, b, c, ...rest] = arr
// let [a, , , ...rest] = arr
// let [a, ,b , ...rest] = arr

// console.log(a,b, rest)

// global and local scope

// hositing in js
// hoisting refer to the process where by the interpreter apperars to move the declaration to the top of the code 
// before execution
// javascript hoist declaration, not initialization so the variable will be undefined until the line where its initialise reach   
// it work in var but not in let, const
// in var variable is hosited
// the function will work as all the 

// console.log(a)
// greet()
// function greet(){
//     console.log("Good morning ritik")
// }
// var a = 9;
// console.log(a)


// function expression and class expresion are not hoisted down will not work for let,const,var
// greet()
// var greets = function(){
//     console.log("Good morning ritik")
// }

// ---------------------------------------------------------------------------------------------------------
// so to avoid bugs allways declare all variable at the beginning of every scope
// -------------------------------------------------------------------------------------------------


// closures imp
// it is a function with its lexical environment

// function ritik() {
//     var name = 'ritik';//name is a local variable created by ritik
//     function displayname() {
//         // displayname is a inner function,closure
//         console.log(name); //use variable declared in parent function
//     }
//     // name = "anuj"
//     return displayname;
// }
// let r = ritik()
// r()

// function returnfun() {
//     const x = () => {
//         a = 1
//         console.log(a)
//         const y = () => {
//             a = 2
//             console.log(a)
//             const z = () => {
//                 a = 3
//                 console.log(a)
//             }
//             z()
//         }
//         y()
//     }
//     return x
// }
// q = returnfun()
// q()


// // arrow function   more 

 
// // const sayHello = ()=>{
// //     console.log("Hello")
// // }
// // without brackets as it is in line
// const sayHello = (name)=> console.log("Hello "+ name);

// sayHello("anuj",)

// // this will not work
// const t = {
//     name:"Anuj",
//     role:"js developer",
//     exp:200,
//     show: function(){
//         setTimeout(function(){
//             console.log(this) // gives a window object this.name will not work
//             console.log(`The name is ${this.name}\n The role is ${this.role}`)
//         },2000)
//     }
// }
// t.show()
// // but arrow function has "lexcical this" that why in "this" it will take this from parent
// const x = {
//     name:"Anuj",
//     role:"js developer",
//     exp:200,
//     show: function(){
//         setTimeout( ()=>{
//             console.log(`The name is ${this.name}\n The role is ${this.role}`)
//         },2000)
//     }
// }
// x.show()


// js in backend
// npm , yarn is a packages manager

// npm init
// node modules - contains all the modules
// packages.json - store alll the detail of dependency
// npm install node modules -- npm will install all the modules writen in packages.json

// there are many modules in node js 
// npm i pdf-node

// modules in js

// modules.export

// express in js

// regular expression in js 99 video
// regexr.com

// const regex = /very/g
// const text = "very IS  very" 
// console.log(text.replace(regex,"VERY"))

// there is more go to website and video

// event  loop  - watch video