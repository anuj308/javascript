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