// Mobile menu from html by using its id
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click', () => { // add event listener to the mobile menu
  const desktopMenu = document.getElementById('desktop-menu'); // gets the desktop menu
  // Swap class mames of mobile and desktop menus
  mobileMenu.classList.toggle('active');
  desktopMenu.classList.toggle('active');
});

// DOM MANIPULATION PROJECTS SECTION
// STORES CARDS DATA AS AN ARRAY OF OBJECT
const projects = [
  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techstack: ['HTML', 'Ruby', 'Bootstrap'],
    button: '#',
    live_btn: 'https://www.google.com',
    source_btn: 'https://github.com/ndohshanuella',

  },
  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techstack: ['HTML', 'Ruby', 'Bootstrap'],
    button: '#',
    live_btn: '#',
    source_btn: '#',

  },
  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techstack: ['HTML', 'Ruby', 'Bootstrap'],
    button: '#',
    live_btn: '#',
    source_btn: 'https://github.com/ndohshanuella',

  },
  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techstack: ['HTML', 'Ruby', 'Bootstrap'],
    button: '#',
    live_btn: '#',
    source_btn: 'https://github.com/ndohshanuella',

  },
  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techstack: ['HTML', 'Ruby', 'Bootstrap'],
    button: '#',
    live_btn: '#',
    source_btn: 'https://github.com/ndohshanuella',

  },
  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    techstack: ['HTML', 'Ruby', 'Bootstrap'],
    button: '#',
    live_btn: 'https://portfolio-lyart-tau-80e95f094y.vercel.app/',
    source_btn: 'https://github.com/ndohshanuella',

  },
];
function openModal(project) {
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-title').innerHTML = project.title;
  document.getElementById('modal-description').innerHTML = project.description;
  const modalTechStack = document.getElementById('modal-tech');
  modalTechStack.innerHTML = '';
  project.techstack.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.innerHTML = tech;
    modalTechStack.appendChild(techItem);
  });

  // render buttons

  const modalButtonContainer = document.getElementById('modal-button');
  modalButtonContainer.innerHTML = '';
  const livebutton = document.createElement('button');
  livebutton.type = 'button';
  livebutton.title = ' see project';
  livebutton.className = 'live-btn';
  livebutton.textContent = 'see live';

  modalButtonContainer.appendChild(livebutton);

  livebutton.addEventListener('click', () => {
    window.location.href = project.live_btn;
  });
  // the second button
  //
  const sourcebutton = document.createElement('button');
  sourcebutton.type = 'buttons';
  sourcebutton.title = ' see project';
  sourcebutton.className = 'live-btn';
  sourcebutton.textContent = 'see source';

  modalButtonContainer.appendChild(sourcebutton);

  sourcebutton.addEventListener('click', () => {
    window.location.href = project.source_btn;
  });

  modal.style.display = 'block';
}
document.getElementById('close-modal').onclick = function () {
// FUNCTION TO CREATE A CARD
  function createCard(project) {
  // Create card div

    const card = document.createElement('div');
    card.classList.add('sim_card');
    const cardTitle = document.createElement('h3');
    cardTitle.innerHTML = project.title;
    card.appendChild(cardTitle);
    const cardParagraph = document.createElement('p');
    cardParagraph.innerHTML = project.description;
    card.appendChild(cardParagraph);
    const cardList = document.createElement('ul');
    project.techstack.forEach((project) => {
      const cardItem = document.createElement('li');
      cardItem.innerHTML = project;
      cardList.appendChild(cardItem);
    });
    // button

    card.appendChild(cardList);
    const cardButton = document.createElement('button');
    cardButton.innerHTML = 'See Project';
    cardButton.type = 'button';

    cardButton.addEventListener('click', () => {
      openModal(project);
    });

    card.appendChild(cardButton);
    return card;
  }
  // Render the cards in the div called sim_cards
  function displayCards() {
    const cardsContainer = document.querySelector('.sim_cards');
    (projects || []).forEach((project) => {
      const projectcard = createCard(project);
      cardsContainer.appendChild(projectcard);
    });
  }
  document.addEventListener('DOMContentLoaded', displayCards);

  // pop up modal

  document.getElementById('project-modal').style.display = 'none';
};
