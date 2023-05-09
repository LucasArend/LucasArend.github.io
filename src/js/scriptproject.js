// const nodeList = document.querySelectorAll(".itemflex");
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             console.log(entry.isIntersecting);
//             for (let i = 0; i < nodeList.length; i++) {
//                 if(i%2 === 0){
//                     setTimeout(() => {  nodeList[i].classList.add("fadeInLeft") }, 250 * (i+1));
                    
//                 }
//                 else{
//                     setTimeout(() => {  nodeList[i].classList.add("fadeInRight") }, 250 * i);
//                 }
//             }
//         }
//     })
// }) 


// observer.observe(document.querySelector(".gridflex"))

const animationLeft = (entries) => {
    entries.forEach(entry => {
         entry.target.classList.toggle("fadeInLeft", entry.isIntersecting);
    });
  };

  const animationRight = (entries) => {
    entries.forEach(entry => {
         entry.target.classList.toggle("fadeInRight", entry.isIntersecting);
    });
  };
  
  const ObsLeft = new IntersectionObserver(animationLeft);
  const Obsright = new IntersectionObserver(animationRight);
  const obsOptions = {};


  const ELs_inViewportLeft = document.querySelectorAll('.itemflexleft');
  ELs_inViewportLeft.forEach(EL => {
            ObsLeft.observe(EL, obsOptions);
    
  });
  
  const ELs_inViewport = document.querySelectorAll('.itemflexright');
  ELs_inViewport.forEach(EL => {
        Obsright.observe(EL, obsOptions);
    
  });

//    function abrir(id) {
//     document.getElementById(id).style.display='block';
// };

// function fechar(id) {
//      document.getElementById(id).style.display='none';
//  };

$(function(){
  $("#buttonAges").click(function(e){       
      e.stopPropagation();
      $("#Ages").show();
      $("body").click(function(e){
          if(e.target.id != "Ages")
          {
              $("#Ages").hide();
              $("body").unbind("click");
          }
      });
  });
  
});

 (function () {

     const target = document.querySelector(".target");
     const links = document.querySelectorAll(".mynav .abas a");
     const colors = ["rgb(209, 190, 53)"];/*, "orange", "firebrick", "gold", "magenta", "black", "darkblue"*/
   
     function mouseenterFunc() {
       if (!this.parentNode.classList.contains("active")) {
         for (let i = 0; i < links.length; i++) {
           if (links[i].parentNode.classList.contains("active")) {
             links[i].parentNode.classList.remove("active");
           }
           links[i].style.opacity = "0.25";
         }
   
         this.parentNode.classList.add("active");
         this.style.opacity = "1";
   
         const width = this.getBoundingClientRect().width;
         const height = this.getBoundingClientRect().height;
         const left = this.getBoundingClientRect().left + window.pageXOffset;
         const top = this.getBoundingClientRect().top + window.pageYOffset;
         const color = colors[Math.floor(Math.random() * colors.length)];
   
         target.style.width = `${width}px`;
         target.style.height = `${height}px`;
         target.style.left = `${left}px`;
         target.style.top = `${top}px`;
         target.style.borderColor = color;
         target.style.transform = "none";
       }
     }
   
     for (let i = 0; i < links.length; i++) {
       /*links[i].addEventListener("click", e => e.preventDefault());*/
       links[i].addEventListener("mouseenter", mouseenterFunc);
     }
   
     function resizeFunc() {
       const active = document.querySelector(".mynav li.active");
   
       if (active) {
         const left = active.getBoundingClientRect().left + window.pageXOffset;
         const top = active.getBoundingClientRect().top + window.pageYOffset;
   
         target.style.left = `${left}px`;
         target.style.top = `${top}px`;
       }
     }
   
     window.addEventListener("resize", resizeFunc);
   
   })();
