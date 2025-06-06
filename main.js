/*========================================================================= EMAIL JS =========================================================================*/
const contactForm=document.getElementById('contact-form),
    contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
    e.preventDefault()
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('','','','')
}
contactForm.addEventListener('submit', sendEmail)


/*===================================================================== SHOW SCROLL UP =======================================================================*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementByID('scroll-up')
    /*======when the scroll is higher than 350 viewpoint height, and thh======*/
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


/*================================================================= SCROLL SECTIONS ACTIVE LINK ==============================================================*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*================================================================== SCROLL REVEAL ANIMATION ================================================================*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    /*====reset:true, //Animations repeat======*/
})
sr.reveal('.perfil, .contact__form')
sr.reveal('info',{origin:'left',delay:800})
sr.reveal('.skills',{origin:'left',delay:1000})
sr.reveal('.about',{origin:'right',delay:1200})
sr.reveal('.projects__card', .services__card',{interval:100})



/*================================================================= Interactive 3D box control  =============================================================*/
        const box = document.getElementById('magicBox');
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotate = { x: 0, y: 0 };

        box.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };

            rotate.x += deltaMove.y * 0.5;
            rotate.y += deltaMove.x * 0.5;
            
            box.style.transform = `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Touch events for mobile
        box.addEventListener('touchstart', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            e.preventDefault();
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const deltaMove = {
                x: e.touches[0].clientX - previousMousePosition.x,
                y: e.touches[0].clientY - previousMousePosition.y
            };

            rotate.x += deltaMove.y * 0.5;
            rotate.y += deltaMove.x * 0.5;
            
            box.style.transform = `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`;
            
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            e.preventDefault();
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
        });



/*=============================================================== Particles.js initialization  ==============================================================*/
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 } }
            }
        });




/*========================================================= hover effect of underline of our services ========================================================*/
document.querySelector('.services h2').addEventListener('click', function() {
  this.classList.toggle('active');
});











/*================================ Add this to your main.js file===================*/

/*=============================== 3D Page Scroll Effects===========================*/
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const body = document.body;
  
  /*========================== Apply subtle 3D tilt based on scroll  ===================*/
  body.style.transform = `
    rotateX(${scrollPosition * 0.05}deg)
    rotateY(${scrollPosition * 0.02}deg)
  `;
  
  /*====================== Parallax effect for sections=======================================*/
  document.querySelectorAll('.section').forEach((section, index) => {
    const offset = section.offsetTop;
    const diff = scrollPosition - offset;
    section.style.transform = `translateZ(${-diff * 0.1}px)`;
    section.style.opacity = 1 - Math.abs(diff * 0.002);
  });
});

/*======================= Enhanced Magic Box Interaction========================================*/
const magicBox = document.querySelector('.magic-box');
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

magicBox.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousMousePosition = { x: e.clientX, y: e.clientY };
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const deltaMove = {
    x: e.clientX - previousMousePosition.x,
    y: e.clientY - previousMousePosition.y
  };
  
  magicBox.style.transform = `
    rotateX(${deltaMove.y * 0.5}deg)
    rotateY(${-deltaMove.x * 0.5}deg)
    scale(1.1)
  `;
  
  previousMousePosition = { x: e.clientX, y: e.clientY };
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  magicBox.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});

/*======================================= 3D Project Card Flips=============================================*/
document.querySelectorAll('.projects__card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});

/*=================== 3D Hover Effects for Skills=========================*/
document.querySelectorAll('.skills__item').forEach(skill => {
  skill.addEventListener('mousemove', (e) => {
    const rect = skill.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    skill.style.transform = `
      rotateX(${(y - centerY) * 0.1}deg)
      rotateY(${(x - centerX) * -0.1}deg)
      scale(1.15)
    `;
  });
  
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});