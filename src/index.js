import { finJuego, inicioJuego, preguntar, registerEvents } from './ui/interactions';

registerEvents();

const game = async () => {
  inicioJuego();

  // Example
  // const respuesta1 = await preguntar('¿Quieres jugar?');
  // if (respuesta1.toLowerCase() === 'si') {
  //   const respuesta2 = await preguntar('Vamos a ello, Año de nacimiento?');
  //   console.log('A', respuesta2);
  // } else {
  //   console.log('Otra vez será');
  // }

  finJuego();
};

game().catch(console.error);
