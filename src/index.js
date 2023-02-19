// import _ from 'lodash';
import './style.css';

const scoresList = document.querySelector('.list');
const submitBtn = document.querySelector('.submit');
const refreshButton = document.querySelector('.refresh');
const prompt = document.querySelector('.message');
const userField = document.querySelector('.user');
const scoreField = document.querySelector('.score');



const form = document.querySelector('form-score');
form.addEventListener('click', (e) => {
  if (e.target.matches('.submit-btn')) {
    e.preventDefault();
    addScore(scoresList, userField.value, scoreField.value, message);
  } else if (e.target.matches('.refresh')) {
    e.preventDefault();
    getScores(scoresList);
  }
});

function addScore(list, user, score, message) {
    const html = `<li>${user}: ${score}</li>`;
    list.insertAdjacentHTML('beforeend', html);
    prompt.textContent = 'Score added successfully';
  }
  