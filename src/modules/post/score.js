import showPrompt from "../get/prompt.js";
import scores from "../get/score.js";


const postScore = async (scores, user, score, message) => {
    if (user === '' || score === '') {
      showPrompt(message, 'success', 'error', 'Please fill in all fields');
    } else {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hjQ1d7tYqYfYNIn76Anu/scores/', {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.ok) {
        scores(scores);
      } else {
        showPrompt(message, 'success', 'error', 'Something went wrong');
      }
      document.querySelector('.user').value = '';
      document.querySelector('.score').value = '';
  
      const json = await response.json();
      showPrompt(message, 'error', 'success', json.result);
    }
  };

  export default postScore;