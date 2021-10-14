import {
  getFromLocalStorage,
  saveToLocalStorage,
} from './libs/localStorageHelpers.js';
import { testEmailAddress, testText } from './libs/validation.js';

const login = document.querySelector('#loginForm');

login.onsubmit = async () => {
  event.preventDefault();
  let email = document.querySelector('#email').value.trim();
  let password = document.querySelector('#password').value.trim();

  if (testEmailAddress(email) && testText(password, 5)) {
    try {
      console.log('passed');
      const { data } = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password: password,
      });
      saveToLocalStorage('jwt', data.jwt);
      saveToLocalStorage('user', data.user);

      //   window.location.href = './profile.html';
    } catch (error) {}
  } else {
  }
};
