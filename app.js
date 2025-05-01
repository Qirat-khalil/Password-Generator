

let userinp = prompt("enter your pasword length")

let uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let lowCase = "abcdefghijklmnopqrstuvwxyz";

let speChar = "@#$%^&*!";

let num = "123456789";

let pass = ""
let con = uppCase + lowCase + speChar + num;


for(let i = 0 ; i <= userinp; i++){

   let res = con.charAt(Math.floor(Math.random() * con.length))

   pass += res
   
}
console.log(pass);