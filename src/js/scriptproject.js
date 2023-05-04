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

   function abrir(id) {
    document.getElementById(id).style.display='block';
};

function fechar(id) {
     document.getElementById(id).style.display='none';
 };

