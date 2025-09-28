
window.sr = ScrollReveal({reset:true})


sr.reveal('.header, .text , .efeito-img-topo , .Container-intro ,.Container-about, .Container-skills, .Container-projets, .Container-footer, #footer, .Container-contato')({
  duration:1000,
  rotate:{x:0,y:80,z:0},
  distance:'50px',
  origin: "bottom",

})


function menuShow(){
  let menuMobile = document.querySelector('.mobile-menu');
  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/icons/nav-bar.png";
  } else {
      menuMobile.classList.add('open');
       document.querySelector('.icon').src = "assets/icons/close-bar.png";
    }
  }
