/*
1 meter = 3.281 feet   / 1feet = 0.305 meter
1 liter = 0.264 gallon / 1 gallon = 3.788 liter
1 kilogram = 2.204 pound / 1 pound = 0.453  kiligram
/* 
let convertParaLenght = document.getElementsByClassName("length-convert")
let convertParaVolume = document.getElementsByClassName("volume-convert")
let convertParaMass = document.getElementsByClassName("mass-convert")
 */

let convParaLength = document.getElementById("lengths")
let convParaVolume =  document.getElementById("volumes")
let convParaMass = document.getElementById("mass")

//let inputVal = document.getElementsByClassName("input-val")



function convertUnits(){
    
    let inputVal = document.getElementById("input-val").value 
    console.log("Hi")
   
    
  
   convParaLength.textContent = ""
   convParaVolume.textContent = ""
   convParaMass.textContent = ""
    
    
   convParaLength.textContent =  `${inputVal} meters = ${(inputVal*3.281).toFixed(3)} feet |  ${inputVal} feet = ${(inputVal*0.305).toFixed(3)} meters`
   
   convParaVolume.textContent =  `${inputVal} liter = ${(inputVal*0.264).toFixed(3)} gallon |  ${inputVal} gallon = ${inputVal*3.788} liter` 
   
   convParaMass.textContent =  `${inputVal} kilogram = ${(inputVal*2.204).toFixed(3)} pound |  ${inputVal} pound = ${(inputVal*0.453).toFixed(3)} kilogram`
   /* 
   //toDEfault() 
  convParaLength.innerHTML = ""
   convParaVolume.innerHTML = ""
   convParaMass.innerHTML = "" */
   
  // reset()
   //document.getElementById(elementID).innerHTML = "";

}
 /* 
function reset(){
    inputVal = 20
} */