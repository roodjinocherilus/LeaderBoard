import showPrompt from '../get/prompt.js';

const createGame = async (gameName, message) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: gameName,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await response.json();
  showPrompt(message, 'error', 'success', json.result);
};

export default createGame;