// creating a clock


let clock = ()=>{
    let c = new Date()
    let date = c.getDate()
    let hrs = c.getHours()
    let min = c.getMinutes()
    let sec = c.getSeconds()
    Dclock.innerHTML=`Date ${date} ${hrs} hours ${min} minutes ${sec} seconds`
    console.log(`Date ${date} ${hrs} hours ${min} minutes ${sec} seconds`)
} 
let Dclock= document.getElementById("clock")
setInterval(clock,1000);

let clock1 = ()=>{
    let c = new Date()
    let date = c.getDate()
    let hrs = c.getHours()
    let min = c.getMinutes()
    let sec = c.getSeconds()
    Dclock1.innerHTML=` ${hrs} : ${min} : ${sec}`
    console.log(`Date ${date} ${hrs} hours ${min} minutes ${sec} seconds`)
} 
let Dclock1= document.getElementById("clock1-new")
setInterval(clock1,1000);
