import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const localStorageKey = '"feedback-form-state"';
// console.log(form.email);
// console.log('hello');
const savedSettings = localStorage.getItem(localStorageKey);
if (savedSettings) {
  const parsedSettings = JSON.parse(savedSettings);
  form.elements.email.value = parsedSettings.Email ?? '';
  form.elements.message.value = parsedSettings.Message ?? '';
} else {
  form.elements.email.value = '';
  form.elements.message.value = '';
}

form.addEventListener(
  'input',
  _.throttle(() => {
    const settingsText = {
      Email: form.elements.email.value,
      Message: form.elements.message.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(settingsText));
  }, 500)
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  console.log({
    Email: form.elements.email.value,
    Message: form.elements.message.value,
  });
  form.reset();
});
