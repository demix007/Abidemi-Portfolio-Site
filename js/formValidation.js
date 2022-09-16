const validateEmail = {
  form: document.getElementById('contactForm'),
  email: document.getElementById('email'),
  errorMessage: null,
};

const validationLogic = {
  start() {
    validateEmail.form.addEventListener('submit', (e) => {
      if (validateEmail.email.value.toLowerCase() !== validateEmail.email.value) {
        e.preventDefault();
        validationLogic.error();
      }
    });
  },

  error() {
    validateEmail.form
      .appendChild(document.createElement('P'))
      .setAttribute('id', 'error');
    validateEmail.errorMessage = document.getElementById('error');
    validateEmail.errorMessage.innerText = 'Please, use only lowercase letters for your email!';
  },
};
validationLogic.start();