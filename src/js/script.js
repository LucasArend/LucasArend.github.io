

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

window.sr = ScrollReveal();
sr.reveal('h1,p,.foto,h5,img,span,.alinhamento', {
  origin:'left',
  duration: 2000
});
/*sr.reveal('.t', {duration: 2500});*/

document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const animatedBoxes = document.getElementsByClassName("bar");
      const windowOffsetTop = window.innerHeight + window.scrollY;

      Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
          const animatedBoxOffsetTop = animatedBox.offsetTop;

          if (windowOffsetTop >= animatedBoxOffsetTop) {
              addClass(animatedBox, "teste");
          }
      });
  });
});

function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
      element.className += " " + className;
  }
}
