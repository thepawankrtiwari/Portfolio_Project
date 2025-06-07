const sideBar= document.querySelector('.sidebar');
const menu= document.querySelector('.menu-icon');
const close= document.querySelector('.close-icon');

//sidebar elements

menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
})

close.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar")
  sideBar.classList.add("close-sidebar")
})

 // Get references
  const scrollBtn = document.getElementById('scrollToTopBtn');
  const contactSection = document.getElementById('contact-sec');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const contactTop = contactSection.offsetTop;

    // Show button when user scrolls near or past contact section top
    if (scrollY + windowHeight >= contactTop + 100) { // 100px offset for early showing
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });