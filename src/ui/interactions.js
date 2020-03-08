import { clearHistory, clearMessage, onKeyDownTextArea, waitForResponse, writeComputerMessage, writeUserMessage } from './utils';

const hablar = message => writeComputerMessage(message);

export const preguntar = async (pregunta) => {
  hablar(pregunta);
  return waitForResponse();
};

export const inicioJuego = () => {
  clearMessage();
  clearHistory();
};

export const finJuego = () => setTimeout(() => inicioJuego(), 2000);


export const registerEvents = () => {
  document.getElementById('message-to-send').addEventListener('keydown', onKeyDownTextArea);
  document.getElementById('send-button').addEventListener('click', writeUserMessage);
};
