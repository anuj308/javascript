//  exercise 2  snake water gun game
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
// }