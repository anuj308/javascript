// create a javascript program capable of generating a password which contains atleast one lowercase,one uppercaase and one speacial 
// charater. create a password class to achive the same


class password{
    constructor(){
        this.pass= ""
    };
    strongpassword(len){
        let char = "abcdefghijklmnopqrstwxyzvu";
        let num = "1234567890";
        let special = "!@#$$%^&*()";
        let i=0;
        while(i<len){
            this.pass += char[Math.floor(Math.random()* char.length)]
            this.pass += num[Math.floor(Math.random()* num.length)]
            this.pass += special[Math.floor(Math.random()* special.length)]
            i+=3
        }
        console.log("welcome to password generator")
        console.log(`Strong apssword :- ${this.pass}`)
    }
    weakpassword(len){
        let charw = "abcdefghijklmnopqrstwxyzvu";
        let numw = "1234567890";
        let j=0;
        while(j<len){
            this.pass += charw[Math.floor(Math.random()* charw.length)]
            this.pass += numw[Math.floor(Math.random()* numw.length)]
            j+=2
        }
        console.log("welcome to password generator")
        console.log(`Weak password :- ${this.pass}`)
    }
}
let ritik = new password()
console.log(ritik.strongpassword(7))
console.log(ritik.weakpassword(7))