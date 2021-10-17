import { saveToLocalStorage } from './libs/localStorageHelpers.js';
import { testEmailAddress, testText } from './libs/validation.js';

const login = document.querySelector('#loginForm');
const errorLabel = document.querySelector('.error');

login.onsubmit = async () => {
  event.preventDefault();
  let email = document.querySelector('#email').value.trim();
  let password = document.querySelector('#password').value.trim();

  if (testEmailAddress(email) && testText(password, 3)) {
    try {
      const { data } = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password: password,
      });

      saveToLocalStorage('jwt', data.jwt);
      saveToLocalStorage('user', data.user);
      saveToLocalStorage('userName', data.user.username);

      window.location.href = './loggedIn.html';
    } catch (error) {
      errorLabel.classList.remove('hide');
    }
  } else {
    errorLabel.classList.remove('hide');
    console.log('error');
  }
};
