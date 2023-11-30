let q = (n)=>{
    setTimeout((req,res)=>{
        let snd = new Audio('ring.mp3');
        snd.play();
    },n)
}
// for quick seconds
function quickitemsec10(){
    n=10000
    q(n)
}
function quickitemsec20(){
    n=20000
    q(n)
}
function quickitemsec40(){
    n=40000
    q(n)
}
function quickitemsec60(){
    n=60000
    q(n)
}
function quickitemsec120(){
    n=120000
    q(n)
}

// for quick minutes
function quickitemin10(){
    n=1200000
    q(n)
}
function quickitemin20(){
    n=2400000
    q(n)
}
function quickitemin40(){
    n=4800000
    q(n)
}
function quickitemin60(){
    n=6000000
    q(n)
}
function quickitemin120(){
    n=12000000
    q(n)
}

// for quick hrs
function quickitehrs2(){
    n=12000000
    q(n)
}
function quickitehrs4(){
    n=24000000
    q(n)
}
function quickitehrs6(){
    n=36000
    q(n)
}
function quickitehrs12(){
    n=72000000
    q(n)
}
function quickitehrs24(){
    n=148000000
    q(n)
}