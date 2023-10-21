// // exercise - 1 guess the number from 1 to 100, genarate a ramdom number,score = 100 - (no of guess),program should be terminated once
// //  the number is guess
a = Math.floor(Math.random() * 100) + 1;
let i
let n = 0
let score
let z = true
while (z) {
    do {
        i = prompt("Guess the number between 1 to 100")
        i = Number.parseInt(i)
        if (i == a) {
            alert("your Guess is correct")
            console.log("your Guess is correct")
        }
        else {
            console.log("your Guess is incorrect")
        }
        if (i > a) {
            alert("guess is greater than original number")
            console.log("guess is greater than original number ")
        }
        else if (i < a) {
            alert("guess is less than the original number")
            console.log("guess is less than the original number")
        }
        n++
        score = 100 - n
    } while (i != a);
    alert(`you have score ${score} points`)
    console.log(`you have score ${score} points`)
    z = confirm("Do you want to play again")
}
