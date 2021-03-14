/// Languages data ///

const language = {
  english: {
    home: "Home",
    about: "About",
    myDescription: "Hi! <br> My name is Pawel and since I can remember I liked to stack various kinds of blocks. Over time, my fun turned into hobby building and creating with the keyboard, which I made a great friendship with. I work as a Windows System Administrator for several years, but the horizon calls me to try my hand as a professional developer. <br>In my free time, I increase my coding knowledge and also relieve my own microprocessor by devoting myself to a good book, riding on a motorcycle or playing a game. <br><br>Dear Sir or Madam, I encourage you to contact me. We will drink coffee with pleasure and talk about the future.",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    projectRock: "Rock Paper Scissors",
    rockDescription: "My first JS project. It's boring but it works ;)",
    projectAdminPanel: "Administration panel",
    adminPanelDescription: "Project was writed based on provided graphic files. I planed components, sections and created styleguide. I made layout and all elements.",
    projectGroup: "Group project",
    groupDescription: "In bootcamp We had one team project. Four people plus Project Manager participated in the project. It takes 3 weeks and was about completion the home page of the furniture store.",
    projectPortfolioDesc: "My portfolio, One Page Webside.",
    toolsOthers: "Tools & others",
    phone: "My mobile:",
    
  },
  polish: {
    home: "Strona główna",
    about: "O mnie",
    myDescription: "Dzień dobry! <br> Nazywam się Paweł i odkąd pamiętam lubiłem układać różnego rodzaju klocki. Z czasem moje zabawy przerodziły się w hobbystyczne budowanie i tworzenie za pomocą klawiatury, z którą świetnie się zaprzyjaźniłem. Od kilku lat pracuję jako administrator systemów Windows, jednak horyzont wzywa mnie do spróbowania swoich sił w profesjonalnej developerce. <br>W wolnych chwilach pogłębiam wiedzę w kodowaniu, a także odciążam swój własny mikroprocesor oddając się dobrej książce, jeździe na motocyklu lub grze. <br><br>Mili Państwo, zachęcam do kontaktu. Z przyjemnością wypijemy kawę i podywagujemy o przyszłości.",
    projects: "Projekty",
    skills: "Umiejętności",
    contact: "Kontakt",
    projectRock: "Papier Kamień Nożyce",
    rockDescription: "Mój pierwszy projekt w JS. Jest nudny ale działa ;)",
    projectAdminPanel: "Panel administracyjny",
    adminPanelDescription: "Projekt został napisany na podstawie dostarczonych grafik. Zaplanowałem komponenty, sekcje oraz stworzyłem szablon styli (styleguide). Zbudowałem układ strony oraz wszystkie elementy",
    projectGroup: "Projekt grupowy",
    groupDescription: "Podczas bootcamp'u uczestniczyłem w projekcie grupowym. Było nas czterech kursantów plus jeden Project Manager. Projekt trwał 3 tygodnie i polegał na uzupełnieniu strony głownej sklepu meblowego.",
    projectPortfolioDesc: "Moje portfolio. One Page Webside",
    toolsOthers: "Narzędzia i inne",
    phone: "Mój telefon: ",
  }
}

/// GSAP animations ///

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

/// Language change ///

const langEl = document.querySelector('.lang-wrapper');
const langLink = document.querySelectorAll('.lang-wrapper a');
const linkHome = document.querySelector('.link-home'); 
const linkAbout = document.querySelector('.link-about'); 
const linkProjects = document.querySelector('.link-projects'); 
const linkSkills = document.querySelector('.link-skills'); 
const linkContact = document.querySelector('.link-contact'); 
const about = document.querySelector('.about-me'); 
const myDesc = document.querySelector('.my-description p'); 
const myProjects = document.querySelector('.my-projects'); 
const mySkills = document.querySelector('.my-skills'); 
const myContact = document.querySelector('.my-contact'); 
const projectRock = document.querySelector('.rock-paper h3');
const pRockDesc = document.querySelector('.rock-paper p');
const projectAdmin = document.querySelector('.admin-panel h3');
const pAdminDesc = document.querySelector('.admin-panel p');
const projectGroup = document.querySelector('.group-project h3');
const pGroupDesc = document.querySelector('.group-project p');
const pPortfolioDesc = document.querySelector('.portfolio p');
const toolsOthers = document.querySelector('.tools-others');
const myPhone = document.querySelector('.my-phone'); 

langLink.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');
    
    const attr = el.getAttribute('language');
    linkHome.textContent = language[attr].home;
    linkAbout.textContent = language[attr].about;
    linkProjects.textContent = language[attr].projects;
    linkSkills.textContent = language[attr].skills;
    linkContact.textContent = language[attr].contact;
    about.textContent = language[attr].about;
    myDesc.innerHTML = language[attr].myDescription;
    myProjects.textContent = language[attr].projects;
    mySkills.textContent = language[attr].skills;
    myContact.textContent = language[attr].contact;
    projectRock.textContent = language[attr].projectRock;
    pRockDesc.textContent = language[attr].rockDescription;
    projectAdmin.textContent = language[attr].projectAdminPanel;
    pAdminDesc.textContent = language[attr].adminPanelDescription;
    projectGroup.textContent = language[attr].projectGroup;
    pGroupDesc.textContent = language[attr].groupDescription;
    pPortfolioDesc.textContent = language[attr].projectPortfolioDesc;
    toolsOthers.textContent = language[attr].toolsOthers;
    myPhone.textContent = language[attr].phone;

    console.log(attr);
  });
})

/// Hamburger menu ///

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

/// Modals ///

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

/// Other ///

window.addEventListener("scroll",  () => {
  const navFixed = document.querySelector("nav");
  navFixed.classList.toggle("nav-fixed", window.scrollY > 0)
})
const scroll = new SmoothScroll('a[href*="#"]');


