// create a todo list app capable  of storing your todo's in local storage. add an option to create, delete and access
// all the todo , try to make UI as good as possiable

let list1 = document.getElementById("list1")
console.log(list1.innerHTML = `${localStorage.getItem("todo1")}`)
let add1 = document.getElementById("add1")
let addtodo1 = async () => {
    let a1 = prompt("Enter your first task")
    if (a1) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('todo1', a1)
            list1.innerHTML = `${a1}`
            resolve("Added to do list 1 content sucessfully")
        }).then((v) => {
            console.log(v)
        })
    }
}
add1.addEventListener('click', addtodo1)

let delete1 = document.getElementById("delete1")
let deletetodo1 = async () => {
    return new Promise((resolve, reject) => {
        localStorage.removeItem('todo1')
        list1.innerHTML = ``
        resolve("Deleted to do list 1 content sucessfully")
    }).then((v) => {
        console.log(v)
    })
}
delete1.addEventListener('click', deletetodo1)

// second items

let list2 = document.getElementById("list2")
console.log(list2.innerHTML = `${localStorage.getItem("todo2")}`)
let add2 = document.getElementById("add2")
let addtodo2 = async () => {
    let a2 = prompt("Enter your first task")
    if (a2) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('todo2', a2)
            list2.innerHTML = `${a2}`
            resolve("Added to do list 2 content sucessfully")
        }).then((v) => {
            console.log(v)
        })
    }
}
add2.addEventListener('click', addtodo2)

let delete2 = document.getElementById("delete2")
let deletetodo2 = async () => {
    return new Promise((resolve, reject) => {
        localStorage.removeItem('todo2')
        list2.innerHTML = ``
        resolve("Deleted to do list 2 content sucessfully")
    }).then((v) => {
        console.log(v)
    })
}
delete2.addEventListener('click', deletetodo2)


// third items

let list3 = document.getElementById("list3")
console.log(list3.innerHTML = `${localStorage.getItem("todo3")}`)
let add3 = document.getElementById("add3")
let addtodo3 = async () => {
    let a3 = prompt("Enter your third task")
    if (a3) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('todo3', a3)
            list3.innerHTML = `${a3}`
            resolve("Added to do list 3 content sucessfully")
        }).then((v) => {
            console.log(v)
        })
    }
}
add3.addEventListener('click', addtodo3)

let delete3 = document.getElementById("delete3")
let deletetodo3 = async () => {
    return new Promise((resolve, reject) => {
        localStorage.removeItem('todo3')
        list3.innerHTML = ``
        resolve("Deleted to do list 3 content sucessfully")
    }).then((v) => {
        console.log(v)
    })
}
delete3.addEventListener('click', deletetodo3)

// fourth items

let list4 = document.getElementById("list4")
console.log(list4.innerHTML = `${localStorage.getItem("todo4")}`)
let add4 = document.getElementById("add4")
let addtodo4 = async () => {
    let a4 = prompt("Enter your first task")
    if (a4) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('todo4', a4)
            list4.innerHTML = `${a4}`
            resolve("Added to do list 4 content sucessfully")
        }).then((v) => {
            console.log(v)
        })
    }
}
add4.addEventListener('click', addtodo4)

let delete4 = document.getElementById("delete4")
let deletetodo4 = async () => {
    return new Promise((resolve, reject) => {
        localStorage.removeItem('todo4')
        list4.innerHTML = ``
        resolve("Deleted to do list 4 content sucessfully")
    }).then((v) => {
        console.log(v)
    })
}
delete4.addEventListener('click', deletetodo4)

// fifth item5
let list5 = document.getElementById("list5")
console.log(list5.innerHTML = `${localStorage.getItem("todo5")}`)
let add5 = document.getElementById("add5")
let addtodo5 = async () => {
    let a5 = prompt("Enter your first task")
    if (a5) {
        return new Promise((resolve, reject) => {
            localStorage.setItem('todo5', a5)
            list5.innerHTML = `${a5}`
            resolve("Added to do list 5 content sucessfully")
        }).then((v) => {
            console.log(v)
        })
    }
}
add5.addEventListener('click', addtodo5)

let delete5 = document.getElementById("delete5")
let deletetodo5 = async () => {
    return new Promise((resolve, reject) => {
        localStorage.removeItem('todo5')
        list5.innerHTML = ``
        resolve("Deleted to do list 5 content sucessfully")
    }).then((v) => {
        console.log(v)
    })
}
delete5.addEventListener('click', deletetodo5)

// dark mode
let darkmode = async () => {
    return new Promise((resolve, reject) => {
        document.body.style.backgroundColor = "black"
        let main = document.getElementById("main")
        main.style.backgroundColor = "black";
        let heading = document.getElementById("heading")
        heading.style.color = "white";
        let btn = document.getElementsByClassName("btn")
        for (i in btn) {
            btn[i].style.color = "white";
            btn[i].style.backgroundColor = "black";
        }
        resolve("changed theme to Dark")
    }).then((v) => {
        console.log(v)
    }).catch((e) => {
        console.log("small error but color is executed" + e)
    })
}
let itemsdark = async()=>{
    return new Promise((resolve,reject)=>{
        let items = document.getElementsByClassName("items")
        for(o in items){
            items[o].style.color="white";
            items[o].style.backgroundColor="black";
        }
        resolve("items theme changed to dark")
    }).then(()=>{
        console.log()
    }).catch((e)=>{
        console.log("read and solve why the error is coming" + e)
    })

}
let maindark = async()=>{
    let dm = await darkmode()
    let di = await itemsdark()
    console.log(dm,di)

}
let dark = document.getElementById("dark")
dark.addEventListener('click', maindark)

// normal mode

let Normal = document.getElementById("Normal")
let normalmode = ()=>{
    location.reload()
}
Normal.addEventListener('click',normalmode)