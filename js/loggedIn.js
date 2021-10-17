import {
  getFromLocalStorage,
  saveToLocalStorage,
} from './libs/localStorageHelpers.js';

const loggedInName = document.querySelector('.userName');

loggedInName.innerHTML = `<h1>Hello ${getFromLocalStorage('userName')} </h1>`;
