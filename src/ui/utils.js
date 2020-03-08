let onResponse = null;

export const writeComputerMessage = message => {
  const newMessage = '<li><div class="message cpu-message">' + message + '</li>';
  document.getElementById('history-list').insertAdjacentHTML('beforeend', newMessage);
  scrollToBottom();
};

const scrollToBottom = () => {
  const historyList = document.getElementsByClassName('history')[0];
  historyList.scrollTop = historyList.scrollHeight;
};

export const clearMessage = () => document.getElementById('message-to-send').value = '';
export const clearHistory = () => document.getElementById('history-list').innerHTML = '';

export const waitForResponse = () => {
  return new Promise(function(resolve) {
    onResponse = resolve;
  });
};

const writeUserMessage = message => {
  const newMessageElement = '<li><div class="message my-message">' + message + '</li>';
  document.getElementById('history-list').insertAdjacentHTML('beforeend', newMessageElement);
  scrollToBottom();
};

export const userSpeak = () => {
  const userMessage = document.getElementById('message-to-send').value;
  writeUserMessage(userMessage);
  clearMessage();
  if (onResponse) {
    onResponse(userMessage);
  }
};

export const onKeyDownTextArea = event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (event.currentTarget.value.length > 0) {
      userSpeak();
    }
  }
};
