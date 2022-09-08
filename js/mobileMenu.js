const body = document.getElementById('body');
const menuIcon = document.getElementsByTagName('i')[0];
const menu = document.getElementById('menu');
const myName = document.getElementById('my_name');
const portfolio = document.getElementsByTagName('li')[0];
const about = document.getElementsByTagName('li')[1];
const contact = document.getElementsByTagName('li')[2];
const envelopeIcon = document.getElementsByTagName('li')[3];

function mobileMenu() {
  body.classList.toggle('scroll');
  body.classList.toggle('no_scroll');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
  myName.classList.toggle('logo');
  myName.classList.toggle('hide_logo');
  menu.classList.toggle('desktop-menu');
  menu.classList.toggle('mobile-menu');
  envelopeIcon.className = 'hide';
}

function toggle() {
  if (menu.className === 'mobile-menu') {
    menu.className = 'desktop-menu';
  } else {
    menu.className = 'desktop-menu';
  }

  if (menuIcon.className === 'fa fa-times') {
    menuIcon.className = 'fa fa-bars';
  } else {
    menuIcon.className = 'fa fa-bars';
  }

  if (myName.className === 'hide_logo') {
    myName.className = 'logo';
  } else {
    myName.className = 'logo';
  }

  if (body.className === 'no_scroll') {
    body.className = 'scroll';
  } else {
    body.className = 'scroll';
  }
}

menuIcon.addEventListener('click', mobileMenu);
portfolio.addEventListener('click', toggle);
about.addEventListener('click', toggle);
contact.addEventListener('click', toggle);