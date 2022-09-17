const formDataContent = {
  available: null,
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  message: document.getElementById('message'),
  userData: {
    name: null,
    email: null,
    message: null,
  },
  storedJson: null,
  storedObject: null,
  toStore: null,
};

if (window.localStorage) {
  formDataContent.available = true;
}

const retrieveStorage = {
  dataRetrieve() {
    formDataContent.storedJson = localStorage.getItem('jsonObj');
    formDataContent.storedObject = JSON.parse(formDataContent.storedJson);
  },

  attributes() {
    formDataContent.name.setAttribute('value', formDataContent.storedObject.name);
    formDataContent.email.setAttribute('value', formDataContent.storedObject.email);
    formDataContent.message.setAttribute('value', formDataContent.storedObject.message);
  },

  addEvents() {
    if (formDataContent.available === true) {
      formDataContent.name.addEventListener('change', retrieveStorage.store);
      formDataContent.email.addEventListener('change', retrieveStorage.store);
      formDataContent.message.addEventListener('change', retrieveStorage.store);
    }
  },

  storeData() {
    formDataContent.userData.name = formDataContent.name.value;
    formDataContent.userData.email = formDataContent.email.value;
    formDataContent.userData.message = formDataContent.message.value;

    formDataContent.toStore = JSON.stringify(formDataContent.userData);
    if (formDataContent.storedJson !== formDataContent.toStore) {
      window.localStorage.setItem('jsonObj', formDataContent.toStore);
    }
  },
};

retrieveStorage.dataRetrieve();
retrieveStorage.attributes();
retrieveStorage.addEvents();