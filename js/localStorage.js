const formDataContent = {
    available: null,
    formName: document.getElementById('name'),
    formEmail: document.getElementById('email'),
    formMessage: document.getElementById('message'),
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
        formDataContent.formName.setAttribute('value', formDataContent.storedObject.formName);
        formDataContent.formEmail.setAttribute('value', formData.storedObject.formEmail);
        formDataContent.formMessage.setAttribute('value', formData.storedObject.formMessage);
    },

    addEvents() {
        if (formDataContent.available === true) {
            formDataContent.formName.addEventListener('change', retrieveStorage.store);
            formDataContent.formEmail.addEventListener('change', retrieveStorage.store);
            formDataContent.formMessage.addEventListener('change', retrieveStorage.store);
        }
    },

    storeData() {
        formDataContent.userData.name = formDataContent.formName.value;
        formDataContent.userData.email = formDataContent.formEmail.value;
        formDataContent.userData.message = formDataContent.formMessage.value;

        formDataContent.toStore = JSON.stringify(formDataContent.userData);
        if (formDataContent.storedJson !== formDataContent.toStore) {
            window.localStorage.setItem('jsonObj', formDataContent.toStore);
        }
    },
  };

  retrieveStorage.dataRetrieve();
  retrieveStorage.attributes();
  retrieveStorage.addEvents();