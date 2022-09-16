const projectPopup = {
  bodyDOM: document.getElementsByTagName('body')[0],
  clickButton: document.getElementsByClassName('projectButton'),
  projectTitle: 'Multi Post Stories',
  projectDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  aboutProject: null,
  imageSrc: 'img/popup.jpg',
  popupImage: null,
  projectTechnology: null,
  parent: null,
  popup_container: null,
  modal_container: null,
  duplicateTechnology: null,
  desc_butt: null,
  projectHeader: null,
  modalProjectTitle: null,
  popupCloseButton: null,
  modalButtons: null,
  projectLiveButton: null,
  projectSourceButton: null,
  imageContainer: null,
};

const modalPopup = {
  start() {
    for (let i = 0; i < projectPopup.clickButton.length; i += 1) {
      projectPopup.clickButton[i].addEventListener('click', modalPopup.getParent);
    }
  },

  getParent() {
    projectPopup.parent = this.parentElement;
    modalPopup.popup(projectPopup.parent);
  },

  close() {
    projectPopup.bodyDOM.removeChild(projectPopup.modal_container);
    if (projectPopup.bodyDOM.className === 'no_scroll') {
      projectPopup.bodyDOM.className = 'scroll';
    } else {
      projectPopup.bodyDOM.className = 'scroll';
    }
  },

  popup(parent) {
    projectPopup.bodyDOM
      .appendChild(document.createElement('DIV'))
      .setAttribute('id', 'modal_container');
    projectPopup.modal_container = document.getElementById('modal_container');
    projectPopup.modal_container
      .appendChild(document.createElement('DIV'))
      .setAttribute('id', 'popup_container');
    projectPopup.popup_container = document.getElementById('popup_container');

    projectPopup.popup_container
      .appendChild(document.createElement('DIV'))
      .setAttribute('id', 'projectHeader');
    projectPopup.projectHeader = document.getElementById('projectHeader');
    // Header //
    projectPopup.projectHeader
      .appendChild(document.createElement('H3'))
      .setAttribute('id', 'modal_project_title');
    projectPopup.modalProjectTitle = document.getElementById('modal_project_title');
    projectPopup.modalProjectTitle.innerText = projectPopup.projectTitle;

    projectPopup.projectHeader
      .appendChild(document.createElement('SPAN'))
      .setAttribute('id', 'modalClose');
    projectPopup.popupCloseButton = document.getElementById('modalClose');
    projectPopup.popupCloseButton.innerHTML = '<i class="fas fa-times"></i>';
    projectPopup.popupCloseButton.addEventListener('click', modalPopup.close);
    // Technologies //
    projectPopup.projectTechnology = parent.getElementsByTagName('UL');
    projectPopup.duplicateTechnology = projectPopup.projectTechnology[0].cloneNode(true);
    projectPopup.popup_container
      .appendChild(projectPopup.duplicateTechnology)
      .setAttribute('id', 'modalTech');
    projectPopup.duplicateTechnology.className = '';
    // Image and Description Ccontainer //
    projectPopup.popup_container
      .appendChild(document.createElement('DIV'))
      .setAttribute('id', 'image_container');
    projectPopup.imageContainer = document.getElementById('image_container');

    projectPopup.imageContainer
      .appendChild(document.createElement('img'))
      .setAttribute('id', 'popupImage');
    projectPopup.popupImage = document.getElementById('popupImage');
    projectPopup.popupImage.setAttribute('src', projectPopup.imageSrc);

    projectPopup.imageContainer
      .appendChild(document.createElement('DIV'))
      .setAttribute('id', 'desc_butt');
    projectPopup.desc_butt = document.getElementById('desc_butt');

    projectPopup.desc_butt
      .appendChild(document.createElement('P'))
      .setAttribute('id', 'modalDesc');
    projectPopup.aboutProject = document.getElementById('modalDesc');
    projectPopup.aboutProject.innerText = projectPopup.projectDescription;
    // Buttons //
    projectPopup.desc_butt
      .appendChild(document.createElement('DIV'))
      .setAttribute('id', 'modalButtons');
    projectPopup.modalButtons = document.getElementById('modalButtons');

    projectPopup.modalButtons
      .appendChild(document.createElement('BUTTON'))
      .setAttribute('id', 'modalButtonLive');
    projectPopup.projectLiveButton = document.getElementById('modalButtonLive');
    projectPopup.modalButtons
      .appendChild(document.createElement('BUTTON'))
      .setAttribute('id', 'modalButtonSource');
    projectPopup.projectSourceButton = document.getElementById('modalButtonSource');
    projectPopup.projectLiveButton.setAttribute('class', 'btn1');
    projectPopup.projectSourceButton.setAttribute('class', 'btn1');
    projectPopup.projectLiveButton.innerHTML = '   <a href="#">See Live    <i class="fas fa-power-off"></i></a>';
    projectPopup.projectSourceButton.innerHTML = '   <a href="#">See Source    <i class="fab fa-github"></i></a>';
    // stop scroll //
    if (projectPopup.bodyDOM.className === 'scroll') {
      projectPopup.bodyDOM.className = 'no_scroll';
    } else {
      projectPopup.bodyDOM.className = 'no_scroll';
    }
  },
};

modalPopup.start();
