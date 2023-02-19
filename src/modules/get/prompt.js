const showPrompt = (message, classRemove, classAdd, innerHTML) => {
  message.classList.remove(classRemove);
  message.classList.add(classAdd);
  message.innerHTML = innerHTML;
  setTimeout(() => {
    message.classList.remove(classAdd);
    message.innerHTML = '';
  }, 3000);
};

export default showPrompt;