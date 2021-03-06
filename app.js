gsap.registerPlugin(ScrollTrigger, TextPlugin)

const tl = gsap.timeline({defaults: {ease: "linear"}});

tl.to('.text', {y:"0%", duration: 0.1, stagger: 0.25});
tl.to('.text1', {duration: 1, text: "// it's up to you..."});
tl.to('.text2', {duration: 1, text: "if(youWant() === true){"});
tl.to('.text3', {duration: 0.7, text: "&nbsp&nbsp youCan();"});
tl.to('.text4', {duration: 0.5, delay: 0.5, text: "}else{"});
tl.to('.text5', {duration: 1, delay: 0.5, text: "youCant();}"});
tl.to('.slider', {y:"-100%", duration: 1, delay: 0.5});
tl.to('.intro', {y:"-100%", duration: 1},"-=1");
tl.fromTo('.page-title, .page-subtitle, nav', {y:"30%", opacity: 0}, {y:"0%", opacity:1, duration: 2 });

gsap.from('.my-pic', {scrollTrigger: {
  trigger: '#about',
  start: "top 45%",
  toggleActions: "play reverse play reverse"}, 
  scale: 0, 
  opacity: 0,
  duration: 1});

gsap.from('.my-description', {scrollTrigger: {
  trigger: '#about',
  start: "top 45%",
  toggleActions: "play reverse play reverse"}, 
  y: "70", 
  opacity: 0,
  delay: 1,
  duration: 1,}, "=-2");

gsap.utils.toArray(".project-left").forEach(project => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      toggleActions: "play reverse play reverse",
      start: "top 75%",
    }
  });

  tl.from(project, {
    x: "-5",
    duration: 0.5,
    opacity: 0
  });
});
gsap.utils.toArray(".project-right").forEach(project => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      toggleActions: "play reverse play reverse",
      start: "top 75%",
    }
  });

  tl.from(project, {
    x: "5",
    duration: 0.5,
    opacity: 0
  });
});
gsap.utils.toArray(".project-description").forEach(project => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: project,
      toggleActions: "play reverse play reverse",
      start: "top 85%",
    }
  });

  tl.from(project, {
    y: "70",
    duration: 0.5,
    delay: 0.2,
    opacity: 0
  });
});

const tlSkills = gsap.timeline({scrollTrigger: {
  trigger: ".skills-subtitle", 
  start: "top 65%",
  end: "bottom -20%",
  toggleActions: "play none none reverse"}});

tlSkills.from('.skills-subtitle', {y:"70px", duration: 0.4, stagger: 0.1, opacity: 0})
tlSkills.from('.skills-list li', {x:"random(-5, 5, 5)", y:"random(-150, 150, 5)", duration: 0.5 ,  opacity: 0})

gsap.from('.contact-list li', {scrollTrigger: {
  trigger: '.contact-list',
  toggleActions: "play reverse play reverse"}, 
  scale: 0, 
  rotate: 360, 
  stagger: 0.1, 
  duration: 0.3})

gsap.from('.page-footer', {scrollTrigger: {
  trigger: '.page-footer',
  toggleActions:"play reverse play reverse"},
  y:"50px", duration: 1})

  

window.addEventListener("scroll",  () => {
  const navFixed = document.querySelector("nav");
  navFixed.classList.toggle("nav-fixed", window.scrollY > 0)
})

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav-links');
const navigationLinks = document.querySelectorAll('.nav-links li');
console.log(navigationLinks);
hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  hamburger.classList.toggle('hamburger-active');
  navigation.classList.toggle('nav-links-mobile-active');
});

navigationLinks.forEach((link) => {

 link.addEventListener('click', () => {
    hamburger.classList.remove('hamburger-active');
    navigation.classList.remove('nav-links-mobile-active');
  });
})

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
  gsap.from('.overlay', {opacity: 0, duration: 0.3});
  gsap.from('.modal', {scale: 0, duration: 0.3});
}

const phone = document.querySelector('.phone');
phone.addEventListener('click', () => {
  openModal('#myPhone')
});

const scroll = new SmoothScroll('a[href*="#"]');