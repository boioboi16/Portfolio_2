let logo = document.getElementById("logo");
let loader = document.querySelector(".loader");
let main = document.querySelector(".main");
let hamburger = document.querySelector(".hamburger");
let lines = document.querySelectorAll(".line");
let nav = document.querySelector(".nav");
let nav_elements = document.querySelectorAll(".nav ul li");
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

// nav_elements.forEach((element)=>{

// })

// new Glider(document.querySelector('.glider'), {
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   draggable: true,
//   // dots: '.dots',
//   arrows: {
//     prev: '.glider-prev',
//     next: '.glider-next'
//   }
// });

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:70,
  nav:false,
  stagePadding:0,
  // lazyLoad:true,
  autoWidth:true,
  center:true,
  // itemMargin:20,
  responsive:{
      0:{
          items:1
      },
      // 400:{
      //   itmes:2
      // },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
