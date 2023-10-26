
let h1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let htext1 = document.getElementById("hack1")
            htext1.innerHTML = `Initialising hack program`
            resolve("done 1")
        }, 1000)
    })
}
let h2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let htext2 = document.getElementById("hack2")
            htext2.innerHTML = `Hacking realme X7`
            resolve("done 2")
        }, 2000)
    })
}
let h3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let htext3 = document.getElementById("hack3")
            htext3.innerHTML = `Username found tRyat_67`
            resolve("done 3")
        }, 2000)
    })
}
let h4 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let htext4 = document.getElementById("hack4")
            htext4.innerHTML = `Copying whatshap data `
            resolve("done 4")
        }, 2000)
    })
}
let h5 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let htext5 = document.getElementById("hack5")
            htext5.innerHTML = `Copying instagram data `
            resolve("done 5")
        }, 2000)
    })
}
let h6 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let htext6 = document.getElementById("hack6")
            htext6.innerHTML = `accessing private files `
            resolve("done 6")
        }, 3000)
    })
}
let h7 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let htext7 = document.getElementById("hack7")
            htext7.innerHTML = `Copying private files `
            resolve("done 4")
        }, 2000)
    })
}

const hacked = async ()=>{
    let a1 = await h1()
    let a2 = await h2()
    let a3 = await h3()
    let a4 = await h4()
    let a5 = await h5()
    let a6 = await h6()
    let a7 = await h7()
    console.log(a1,a2,a3,a4,a5,a6,a7)
}
hacked()