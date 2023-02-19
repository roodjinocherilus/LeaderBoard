// import _ from 'lodash';
import './style.css';

import scores from './modules/get/score';
import addScore from './modules/post/score';


const scoresList = document.querySelector('.list');
const submitBtn = document.querySelector('.submit');
const refreshButton = document.querySelector('.refresh');
const prompt = document.querySelector('.message');



efreshButton.addEventListener('click', (e) => {
    e.preventDefault();
    scores(scoresList);
  });
  
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const user = document.querySelector('.user').value;
    const score = document.querySelector('.score').value;
    addScore(scoresList, user, score, message);
  });