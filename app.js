let inpBox = document.querySelector("#inp-box1 input");
let inpSlider = document.querySelector("#slider");
let copyIcon = document.querySelector(".copy-i")
let slideValue = document.querySelector("#sli-value");
let uprcase = document.querySelector("#upercase");
let lowcase = document.querySelector("#lowercase");
let numCheck = document.querySelector("#num");
let sym = document.querySelector("#symbol");
let genbut = document.querySelector(".btt");



  inpSlider.addEventListener("input", function () {
    slideValue.innerText = inpSlider.value;
  });

  genbut.addEventListener("click",function(){
   
     let uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

     let lowCase = "abcdefghijklmnopqrstuvwxyz";

     let speChar = "@#$%^&*!+-*/{}[}()=";

     let numChar = "123456789";

     let allchr =""
     if (uprcase.checked) allchr += uppCase;
     if (lowcase.checked) allchr += lowCase;
     if (numCheck.checked) allchr += numChar;
     if (sym.checked) allchr += speChar;

     if (allchr.length === 0) {
        alert("Please select at least one checkbox.");
        return;
      }

     let pass = ""

     let length = inpSlider.value

     for(let i = 0 ; i < length; i++){

       let res = Math.floor(Math.random() * allchr.length)

      pass += allchr.charAt (res);
    
    }
     inpBox.value = pass;
  })


  copyIcon.addEventListener("click", () => {
  
    if(inpBox.value != "" || inpBox.value.length >= 1){
    
     navigator.clipboard.writeText(inpBox.value)
      // copyIcon.title = "Copied"
     
      copyIcon.style.color = "blue";
    }
  })

