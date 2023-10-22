// Variable 
// 	• Const
// 	• Var - bug- if a var is defined inside a if, then also it will overright the  var in whole code 
// 	• Let - but let this problem in same case both the let  will be different can let do not overright
// 	Can't create to variable with same name
// Primivite data types -nnssbbu
// 	1. Null
// 	2. Number
// 	3. String
// 	4. Symbol
// 	5. Boolean
// 	6. Bigint
// a +=5,-=,==,*=,/=,%=,**=
// 	7. Undefined
// To know the data type :- console.log(typeof variable)
// Object
// Variable={anuj:true,ritik:false}
// Console.log(variable[anuj]}
// Variable['name2']=chotu

// chapter-2 expression and condision
// operator 
// arithmetic operator
// +,-,*,/,**,%,++,--
// assignment operator
// a +=5,-=,*=,/=,%=,**=
// comparision operator
// ==,!=,--give true if value is equal,===,!== give false if one is int and other is string ,>,<
// let a = 5
// let b = "5"
// console.log(a==b) //true
// console.log(a===b) //false
// Logical operator & --and , || -- or
// true & true = true  , true & False = False , True || False = True , True || True = True ,False || False = True
// ! - logical not - ullta 
// consle.log(!True)
// console.log(!False)
// (operands)3  (operator)+ (operands)4 = (results)7
// comment :- single line // ,multiple line /* this is a multiple line comment */

// conditional expression 
// if , if else ,else
// promt , alert , number.parserInt(variable) - convert string to number 
// if if else example
// let a = prompt("what your age?");
// a= Number.parseInt(a)
// if (a<0){

//     alert("this is invalid age");
// }
// else if(a<9){
//     alert("you are a kid ");
// }
// else if(a<18 & a>9){
//     alert("you can drive after 18");
// }
// else if(a>18){
//     alert("you can drive");
// }
// console.log("done")
// console.log("you can ",(a>18? "drive":"not drive"))
// switch 
// example
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
// 
// chapter - 3  for loop
// for (statement 1 ;statememt 2;statement 3)
// statement 1 run one time
// statement 2 is the condision
// statement 3 run every time
// for(i=0;i<10;i++){
//     console.log(i)
// }
// program to find print the fartor of the number  and sum of it
// let a = prompt("Enter the number")
// a = Number.parseInt(a)
// let sum = 0
// for(i=1;i<=a;i++){
//     if (a%i==0){
//         console.log(i)
//         sum +=i}
// }
// console.log("sum =",sum)
// for in loop 
// let object ={
//         math: 12,
//         physics: 12,
//         html: 22,
//         python: 30,
//         eng_graphic :28,
//         soft_skills :20
// }
// for(i in object){
//     console.log(i)
// }
// for( i of "anuj"){
//     console.log(i)
// }
// while loop 
// wap to print all number from 1 to the user in input number
// let a = prompt("enter number")
// a = Number.parseInt(a)
// let i = 0
// while(i<=a){
//     console.log(i)
//     i++;
// }
//  do while loop - it execute atleast one time
// let a = prompt("enter number")
// a = Number.parseInt(a)
// let i = 0
// do{
//     console.log(i)
//     i++;=
// }while(i<=a)
// 
// function 
// function avg(x,y){
//     return x+y/2
//     console.log("Done")
// }
// let a = 10
// let b = 14
// let c = 47
// console.log("average of a & c is",avg(a,c))
// console.log("average of a & b is",avg(a,b))
// console.log("average of b & c is",avg(b,c))
// 
// introduction to strings
// can be made with single - '' , double quote ""
// index in strings
// backtic `` imp used when in string hve to use "" or ''
// let a = 1
// let b = 3
// let c = 4
// let sentence
// console.log(sentence = `${a} + ${b} = ${c}`)
// escape sequence charater
// let an = "can't"
// // let an = 'can't' show error
// use backslash before '
// an = 'can\'t'
// console.log(an)

// string methods
// let Name = "  ANUj kumar Sharma"
// let secondname = "Chotu"
// console.log(Name.length)
// console.log(Name.toLowerCase())
// console.log(Name.toUpperCase())
// console.log(Name.slice(1,7))
// console.log(Name.slice(1))
// console.log(Name.replace(" ","     " ))
// console.log(Name.replace("A","O" ))
// console.log(Name.concat("is a ", "full stack devloper"))
// console.log(Name.trim())

// google the syntax 
// there are more methods
// string is immuatable


// Introduction to arrays 
// are basicly like lists in python 
// also has indexing 
// variable.length - no of element present in list
// add new element - arrays[index]=value
// change the element also -arrays[ changing element index]=value

// let marks=[98,76,9,26,57,44,52,30,10,80]
// for (let i=0;i<marks.length;i++){
//     console.log(marks[i])
// }
// methods of arrary
// 

// let a = [1,2,3]
// let a1 = [10,11,12,13]
// // // arrays to string toString
// // let b=a.toString() 
// // console.log(b,typeof b)
// // // to add text between the element
// let c = a.join(" and ")
// // console.log(c,typeof c)
// // // remove a element from last like in this 3 is removed 
// // a.pop()
// // // pop return the pop element
// // d = a.pop()
// // console.log(c,d)
// // push return the new element and also push return the new array length
// let e = a.push(100)
// console.log(a,e)
// // shift remove the first element and return it  
// let f = a.shift()
// console.log(f,a)
// // unshift add the new element in beginning and return the array length
// let g = a.unshift(0)
// console.log(g,a)
// // delete delete the operator but the lenght of arrays do not change
// console.log(delete a[3],a)
// // concat join arrays
// let h = a.concat(a1)
// console.log(h)

// // sort method sort arrays alphabatically and can be compare by a function
// let compare = (a,b)=>{
//     return a - b
// }
// let num = [ 543,54,487,2,46,98,42]
// // num.sort()
// num.sort(compare)
// console.log(num)

// // reverse
// num.reverse()
// console.log(num)

// // splice is used to add element to the arrays
// // splice(start,no of element to remove,element to add)
// let num1=[1,243,445,66,78,90,29]
// // num1.splice(1,2,111,222,333,444) 
// let removevalues = num1.splice(1,2,111,222,333,444) 
// console.log(num1)
// // the remove values is arrray
// console.log(removevalues)
// console.log(typeof removevalues)

// // slice num1.slice(start,end) end is not included
// let num2=[1,243,445,66,78,90,29]
// num2.slice(2,4)
// console.log(num2)

// // loops in arrays
// let  num3 = [1 ,23 ,445,78,44,37,98]
// // for(let i = 0;i<num3.length;i++){
// //     console.log(num3[i])
// // }

// // for each
// num3.forEach((element) => {
//     console.log(element*element) 
// });

// // array.from
// let name = "anuj"
// let arr= Array.from(name)
// console.log(arr)

// // for..  of  better than for each or shortcut
// for(let item of num3){
//     console.log(item)
// }
// // for.. in give then key of num3 array , array is an object 
// for(let i in num3){
//     console.log(i)
// }


// // map filter reduce    ----
// let arr=[23,46,87,29]
// // arr.map((value)=>{
// //     console.log(value)
// // })
// // in map a new array is made and we can return with adding values 
// let a = arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     // return value + index
//     return value + 1
// })
// console.log(a)

// // array filter method
// let arr2=[2,9,56,304,30,67]
// let a2 = arr2.filter((a)=>{
//     return a>100
// }) 
// console.log(a2,arr2)

// // reduce method 
// let arr3 = [2,34,54,98]
// // let a3 = arr3.reduce((a1,a2)=>{
// //     return a1 + a2
// // })
// // console.log(a3)
// // output 188
// let add = ((a1,a2)=>{
//         return a1 + a2
//     })  
// let a3 = arr3.reduce(add)
// console.log(a3)

// script two ways
// 1) script tag 
// advantages of using separate script file using src attribute of script tag
// separtion of concerns
// browser caching 
// <script src="script.js"></script>
// <script src="script1.js">
// console.log("this message will be ingonored ")</script> src file js will be runed 
// <script src="script2.js"></script>
// 2) linking of js file

// console method 
// console.log(console)
// console.error("this is a error") so it will be displayed in red
// console.assert(45>53) failed then it show error
// console.assert(45>20) true then ok 
// console.clear() - It clear the console 
// console.table(object) then the object values will be shown in a table 
// console.warn("do not waste time") it is used to show warning in a code
// console.info("the text") it is similar to console.log but in this this code will come in info section

// alert , prompt , confirm read notes
// is not use in fronted as we don't know the exact location of it coming in differnt browser
// ,we can't modify is much , script is paused so that user can interact - so after a alert prompt confirm then 
// the js will run, it do not look good also
// alert("it works")
// let a = prompt("enter value")
// document.write(a)
// prompt is allways a string so to convert to interger write
// a = Number.parseInt(a)
// can give a default value to prompt 
// let b = prompt("enter value","10")
// confirm
// let write = confirm("is 2 + 2 is 4")
// if(write){
//     document.write("true")
// }else{
//     document.write("false")
// }

// window object method
// windows.console.log()
// windows.alert()

// document object model(dom) is the full html document in javascript object -document 
// can use all css styles by this 
// document.body - shows th body in an object
// document.body.style.background="green" it changes the background of the web page

// bowser object model (bom) is the additional object that is provided by the browser(host enviroment)
// funtion like alert,prompt,confirm are example of it 
// the host enviroment a give additional object example 
// location.href="https://isro.gov" 


// chapter - 7 walking the DOM
// html to js object , 
// object tree - html document 
// <html> is root , <head>,<body> etc are it children, <P> , <h1> ,text 
// types of node
// 1)text node  is the leaf of the tree, space between element in html are text node
// 2)element node
// 3)comment node

// auto correction - browser auto correct if there is a mistake 

// document.body, document.documentElement,document.head give html , head , body tags
// document.title gives a string

// children of an element
// element.firstchild() = element.childNodes[0]
// element.lastChild() = element.childNodes[element.childNodes.length-1]
//element.childNodes() 
// childNodes look like a arry but it is not so array method won't work on it  but we can make by array.from()

// sibling and parent
// left sibling and right sibling
// variable=document.body.firstChild
// varible.parentNode
// variable.parentElement
// variable.firstChild.nextSibling
// here we can getting text,comment ndocument run it 
// document.body.firstElementchild
// document.body.lastElementchild
// document.body.nextElementchild
// document.body.previousElementchild

// table based navigation

// t= document.body.firstElementChild.firstElementChild
// console.log(t)
// console.lof(t.rows)
// console.lof(t.caption)
// console.log(t.head)
// console.log(t.head.firsstElementChild)
// console.log(t.foot)
// console.log(t.bodies)

// console.log(t.rows[0].rowIndex)
// console.log(t.bodies.firstElementChild.cellIndex)notes check it if it work 


// searching the Dom

// let id = document.getElementbyId("")

//let ctitle = document.getElementByClassName("")   
// ctitle.style.color="red"

// document.getElementByName("") name arttribute

// let c = document.querySelector("c")

// let ctitles = document.querySelectorALL("ctitles")
// ctitles[0].style.color ="red"
// ctitles[1].style.color ="blue"
// ctitles[2].style.color ="greeen"
// console.log(ctitles)
// document.querySelector("this").style.color=""
// document.querySelector("this").style.background=""
// console.log(document.querySelector("card-title").getElementsByTagName("a"))

// // Element - return one Element
// // elements - return all the element
// // querySelector - return one element
// // querySelectorALL - return all element


// matches closest and contains 

console.log(Elem.matches("")) 
// check if the element matches the given css
console.log(elem.closest(""))
// look for the nearest ancestor that matches the given selector
console.log(elem.contains(""))
// return true if elemB is inside elemA(a descendant of elemA) or when elemA = elemB