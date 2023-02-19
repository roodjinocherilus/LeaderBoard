// import _ from 'lodash';
import './style.css';

import scores from './modules/get/score';
import addScore from './modules/post/score';


const scoresList = document.querySelector('.list');
const submitBtn = document.querySelector('.submit');
const refreshBtn = document.querySelector('.refresh');
const prompt = document.querySelector('.message');



refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scores(scoresList);
  });
  
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = document.querySelector('.user').value;
    const score = document.querySelector('.score').value;
    addScore(scoresList, user, score, prompt);
  });