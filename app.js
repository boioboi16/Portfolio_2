let logo = document.getElementById("logo");
let loader = document.querySelector(".loader");
let main = document.querySelector(".main");
let hamburger = document.querySelector(".hamburger");
let lines = document.querySelectorAll(".line");
let nav = document.querySelector(".nav");
function init(){
  setTimeout(()=>{
    
    logo.classList.add("invi");
    // logo.style.display='none';
    
    
    setTimeout(()=>{
      
      
      
      main.classList.add("disp");
      loader.style.display='none';
     
    },1000)
    },3000);
  
    
}
init();

hamburger.addEventListener('click',()=>{
  lines.forEach(line=>{
    line.classList.toggle("animate");

  })
  nav.classList.toggle("open");
})




