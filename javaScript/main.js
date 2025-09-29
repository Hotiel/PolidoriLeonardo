
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>VARIABLES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|
//declarando elementos básicos--------------------------------------------------------------
const main = document.querySelector("main");
const body = document.querySelector("body");
const trap = document.querySelector(".trap")

// declarando botones------------------------------------------------------------------------
const navCheck =  document.getElementById("menu-btn");
const idioma = document.querySelectorAll(".cbidioma");
const tema = document.querySelectorAll(".cbtema");
const navButtons = document.querySelectorAll(".list--item");

//Declarando tarjetas botones--------------------------------------------------------------
const projectsCard = document.querySelector(".projects--card");
const skillsCard = document.querySelector(".skills--card");
const aboutCard = document.querySelector(".about--card");
const contactCard = document.querySelector(".contact--card");
const xpCard = document.querySelector(".extraxp--card");
const titulo1 = document.querySelector(".titulodc1");
const titulo2 = document.querySelector(".titulodc2");

const tarjetas = [projectsCard, skillsCard, aboutCard, contactCard, xpCard];

// Declarando tarjetas contenedoras---------------------------------------------------------
const navCard = document.querySelector(".nav--card");
const dynamicHome = document.querySelector(".dynamic__home");
const dynamicProjects = document.querySelector(".dynamic__projects");
const dynamicSkills =document.querySelector(".dynamic__skills");
const dynamicAbout = document.querySelector(".dynamic__about");
const dynamicContact = document.querySelector(".dynamic__contact")
const dynamicXp = document.querySelector(".dynamic__extraxp")

const dynamics = [dynamicProjects, dynamicAbout, dynamicSkills, dynamicContact, dynamicXp];

//acordeon
const acordeon = document.querySelectorAll(".acblock")


// Idioma -------------------------------------------------------------------------

const projEs = document.querySelector(".projes");
const projEn = document.querySelector(".projen");

const aboutEs = document.querySelector(".aboutes");
const aboutEn = document.querySelector(".abouten");

const bthEs = document.querySelector(".bthes");
const bthEn = document.querySelector(".bthen");

const skillsEs = document.querySelector(".skillses");
const skillsEn = document.querySelector(".skillsen");

const mexEs = document.querySelector(".mexes");
const mexEn = document.querySelector(".mexen");

const dexEs = document.querySelector(".dexes");
const dexEn = document.querySelector(".dexen");



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FUNCIONES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|


// Funciones de manejo del nav
function onMainClick() {
  navCard.classList.remove("cardFlex");
  trap.classList.toggle("cardFlex")
  main.removeEventListener("click", onMainClick);
}
function trapAsist () {trap.classList.toggle("cardFlex")}

function onNavButtonsClick() {
  navCard.classList.remove("cardFlex");
  trap.classList.remove("cardFlex");
  for(let buttton of navButtons){
      buttton.removeEventListener("click", onNavButtonsClick)
  }}

function toggleNav() {
  const navOpen = navCard.classList.toggle("cardFlex");
  if(navOpen){
    main.addEventListener("click", onMainClick);

    for(let buttton of navButtons){
    buttton.addEventListener("click", onNavButtonsClick);}
  }else { 
    main.removeEventListener("click", onMainClick); 
    for(let buttton of navButtons){
      buttton.removeEventListener("click", onNavButtonsClick)
    }
  }
}


// Funciónes de tema-------------------------------------------------------------------------
function toggleTheme() {
  body.classList.toggle("light")
  body.classList.toggle("dark")
}

// Funciones del main-------------------------------------------------------------------------
  function volverAlInicio(){
    let retorno = dynamics.filter((active) => active.classList.contains("cardGrid") || active.classList.contains("cardFlex"));
    if (retorno.length > 0){
    retorno[0].classList.remove("cardGrid");
    retorno[0].classList.remove("cardFlex");
    dynamicHome.classList.toggle("cardGrid");
    titulo1.classList.toggle("cardFlex");
    titulo2.classList.toggle("cardFlex");}
}
function toggleProject () {
  dynamicHome.classList.toggle("cardGrid");
  dynamicProjects.classList.toggle("cardGrid");
    titulo1.classList.toggle("cardFlex");
    titulo2.classList.toggle("cardFlex");
    titulo2.addEventListener("click", (volverAlInicio));
}
function toggleSkills(){
  dynamicHome.classList.toggle("cardGrid");
  dynamicSkills.classList.toggle("cardGrid");
    titulo1.classList.toggle("cardFlex");
    titulo2.classList.toggle("cardFlex");
    titulo2.addEventListener("click", (volverAlInicio));
    
}
function toggleAbout(){
  dynamicHome.classList.toggle("cardGrid");
  dynamicAbout.classList.toggle("cardGrid")
      titulo1.classList.toggle("cardFlex");
      titulo2.classList.toggle("cardFlex");
      titulo2.addEventListener("click", (volverAlInicio));
}
function toggleContact(){
  dynamicHome.classList.toggle("cardGrid");
  dynamicContact.classList.toggle("cardFlex");
    titulo1.classList.toggle("cardFlex");
    titulo2.classList.toggle("cardFlex");
  titulo2.addEventListener("click", (volverAlInicio))
}
function toggleXp(){
  dynamicHome.classList.toggle("cardGrid");
  dynamicXp.classList.toggle("cardGrid");
    titulo1.classList.toggle("cardFlex");
    titulo2.classList.toggle("cardFlex");
  titulo2.addEventListener("click", (volverAlInicio))
}
function ActivateAcordeon () {
acordeon.forEach( (cElement, i) => {
  acordeon[i].addEventListener(`mouseover`, () =>{
    acordeon.forEach( (cElement, i) => {
      acordeon[i].classList.remove("acactive")
    });
    acordeon[i].classList.add("acactive")
  })
});
}
function toggleIdioma () {
  //Cambiar Home
  bthEs.classList.toggle("cardNone");
  bthEn.classList.toggle("cardNone");
  //Cambiar About
  aboutEs.classList.toggle("cardNone");
  aboutEn.classList.toggle("cardNone");
  //Cambiar skills
  skillsEs.classList.toggle("cardNone");
  skillsEn.classList.toggle("cardNone");
  // Cambiar Proyectos
  projEs.classList.toggle("cardNone");
  projEn.classList.toggle("cardNone");
  ActivateAcordeon();
  acordeon[0].classList.add("acactive");
  // Cambiar exxp desktop
  dexEs.classList.toggle("cardNone");
  dexEn.classList.toggle("cardNone");
  //cambiar exxp mobile
  mexEs.classList.toggle("cardNone");
  mexEn.classList.toggle("cardNone");
}







//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EVENTOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|
// NavToggle
navCheck.addEventListener(`change`, (toggleNav));
navCheck.addEventListener(`change`, (trapAsist));
//ThemeToggle
for (let button of tema){button.addEventListener(`change`, (toggleTheme))};
for (let button of idioma){button.addEventListener(`change`, (toggleIdioma))};


// homeToggle
projectsCard.addEventListener(`click`, (toggleProject));
skillsCard.addEventListener(`click`, (toggleSkills));
aboutCard.addEventListener(`click`, (toggleAbout));
contactCard.addEventListener(`click`, (toggleContact));
xpCard.addEventListener(`click`, (toggleXp));
navButtons[0].addEventListener(`click`, volverAlInicio);
titulo2.addEventListener(`clic`, (volverAlInicio));
ActivateAcordeon()





