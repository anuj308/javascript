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


