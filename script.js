// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1000);
});

// ===== TYPING EFFECT =====
const typingText = document.querySelector('.typing-text');
const phrases = [
  'Full Stack Developer',
  'AI Engineer',
  'Cloud Enthusiast',
  'Problem Solver'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500; // Pause before next phrase
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after page load
setTimeout(typeEffect, 1500);

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

// ===== SKILL PROGRESS BARS ANIMATION =====
const skillsSection = document.querySelector('.skills-section');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !skillsAnimated) {
      animateSkills();
      skillsAnimated = true;
    }
  });
}, { threshold: 0.3 });

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

function animateSkills() {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    setTimeout(() => {
      bar.style.width = progress + '%';
    }, 200);
  });
}

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
let countersAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersAnimated) {
      animateCounters();
      countersAnimated = true;
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

function animateCounters() {
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = current.toFixed(2);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toFixed(2);
      }
    };

    updateCounter();
  });
}

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  
  // Show success message (you can customize this)
  alert('Thank you for your message! I will get back to you soon.');
  
  // Reset form
  contactForm.reset();
  
  // In a real application, you would send this data to a server
  // Example:
  // fetch('/api/contact', {
  //   method: 'POST',
  //   body: formData
  // }).then(response => response.json())
  //   .then(data => console.log(data));
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===== PROJECT CARDS TILT EFFECT =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ===== CURSOR TRAIL EFFECT (Optional) =====
const createCursorTrail = () => {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll('.cursor-circle');
  
  if (circles.length === 0) return;
  
  circles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
  });
  
  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
      
      circle.x = x;
      circle.y = y;
      
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
};

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightNavLink);

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  // Add any initialization code here
  console.log('Portfolio loaded successfully!');
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
  highlightNavLink();
}));
