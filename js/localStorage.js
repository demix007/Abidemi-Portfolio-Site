const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

let formData = {
  name: '',
  email: '',
  message: '',
};

const saveToLocalStorage = () => {
  localStorage.setItem('form_data', JSON.stringify(formData));
};

name.addEventListener('change', () => {
  formData.name = name.value;
  saveToLocalStorage();
});
email.addEventListener('change', () => {
  formData.email = email.value;
  saveToLocalStorage();
});
message.addEventListener('change', () => {
  formData.message = message.value;
  saveToLocalStorage();
});

window.onload = () => {
  if (localStorage.getItem('form_data') !== null) {
    formData = JSON.parse(localStorage.getItem('form_data'));
    name.value = formData.name;
    email.value = formData.email;
    message.value = formData.message;
  }
};