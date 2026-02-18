// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== TYPING EFFECT =====
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const phrases = [
    'Full Stack Developer',
    'AI Engineer',
    'Cloud Enthusiast',
    'Problem Solver'
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  setTimeout(type, 1000);
}

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseFloat(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = current.toFixed(target % 1 === 0 ? 0 : 2);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toFixed(target % 1 === 0 ? 0 : 2);
        }
      };
      
      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll('.level-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const level = bar.getAttribute('data-level');
      setTimeout(() => {
        bar.style.width = level + '%';
      }, 200);
      skillObserver.unobserve(bar);
    }
  });
}, observerOptions);

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== 3D CARD TILT EFFECT (Excluding Projects) =====
const cards3d = document.querySelectorAll('.card-3d-wrapper, .skill-cube');

cards3d.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
    
    setTimeout(() => {
      contactForm.style.display = 'block';
      formSuccess.style.display = 'none';
      contactForm.reset();
    }, 5000);
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== SCROLL ANIMATIONS =====
const animateOnScroll = document.querySelectorAll('.timeline-card, .stat-card, .featured-card');
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

animateOnScroll.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  scrollObserver.observe(el);
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-bg, .page-header');
  
  parallaxElements.forEach(el => {
    if (el) {
      el.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});

console.log('Portfolio loaded successfully!');
