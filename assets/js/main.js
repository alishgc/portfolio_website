/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


////
const carousel = document.querySelector('.carousel');
        const dots = document.querySelectorAll('.dot');
        let index = 0;
        const totalSlides = document.querySelectorAll('.logo-container').length;
        let slideInterval;

        function showSlide(i) {
            index = (i + totalSlides) % totalSlides; // Ensure index is within range
            carousel.style.transform = `translateX(${-index * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            showSlide(index + 1);
        }

        function prevSlide() {
            showSlide(index - 1);
        }

        function updateDots() {
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
        }

        function currentSlide(i) {
            showSlide(i);
        }

        function startCarousel() {
            slideInterval = setInterval(nextSlide, 2000); // Slide every 2 seconds
        }

        function pauseCarousel() {
            clearInterval(slideInterval);
        }

        window.onload = startCarousel;



// POP UP JS
// List of image sources and corresponding links
// List of image sources and corresponding links
const images = [
    { src: "assets/img/popup_img/your-image1.png", link: "https://alishgc.com.np/" },
    { src: "assets/img/popup_img/your-image2.jpg", link: "https://alishgc.com.np/" },
  ];
  
  // Track the current image index
  let currentImageIndex = 0;
  
  // Get elements
  const popup = document.getElementById('popup');
  const currentImage = document.getElementById('currentImage');
  const imageLink = document.getElementById('imageLink');
  const closeButton = document.querySelector('.close-btn');
  
  // Function to show the next image with its link
  function showNextImage() {
    if (currentImageIndex < images.length) {
      currentImage.src = images[currentImageIndex].src;
      imageLink.href = images[currentImageIndex].link; // Set the link
      popup.style.display = 'flex'; // Show popup
    } else {
      popup.style.display = 'none'; // Hide popup when all images are shown
    }
  }
  
  // Close button event listener
  closeButton.addEventListener('click', () => {
    currentImageIndex++; // Move to the next image
    if (currentImageIndex < images.length) {
      showNextImage(); // Show the next image
    } else {
      popup.style.display = 'none'; // Hide the popup after the last image
    }
  });
  
  // Close popup when clicking outside the image, one image at a time
  popup.addEventListener('click', (event) => {
    if (event.target === popup) { // Check if the click is outside the image
      currentImageIndex++; // Increment to the next image
      if (currentImageIndex < images.length) {
        showNextImage(); // Show the next image
      } else {
        popup.style.display = 'none'; // Hide popup after the last image
      }
    }
  });
  
  // Initial call to show the first image
  showNextImage();
  