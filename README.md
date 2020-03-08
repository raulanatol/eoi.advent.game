# EOI ADVENT game

Around 1975, Will Crowther, a programmer and an amateur caver, wrote the first text adventure game, Adventure (originally called ADVENT because a filename could only be six characters long in the operating system he was using, and later named Colossal Cave Adventure).

![cca](docs/cca.png)

![colossal](docs/colossal.png)

## Instrucciones

- El jugador tiene que estar dispuesto a jugar (preguntárselo).
- Debemos garantizar que el jugador es mayor de 13 años (no queremos que tenga pesadillas 😈)
- Seguidamente tenemos que hacer una introducción de la historia y contexto del juego. (objetivo inicial abrir un cofre) pero no vemos la llave.
- El guión le tiene que permitir llegar hasta la habitación y mirar en la mesa (que es donde está la llave)
- Deberá poder cogerla e ir a la caja para abrir el cofre.
- Fin del juego


## ¿Cómo ejecutarlo?

```shell script
npm install
npm run dev
```

## Ampliaciones I

- El jugador al abrir la caja encuentra una lámpara. (¿la frotas?).
- Al frotarla tiene una posibilidad de:
  - 80% de que salga un genio 🧞‍♂️.
  - 20% de probabilidades de que no pase nada.
- El genio nos concederá 1 deseo.
  - Si le pedimos más deseos se enfadará y nos retará a un duelo.
  - Se le pedimos cualquier otra cosa nos la concederá y habremos ganado el juego.

### Duelo

- Tendremos 3 opciones LUCHAR, PAGAR, CORRER
- Si luchamos:
    - Somos fuertes?
    - Somos listos?
    - Solo ganaremos si somos ambas cosas.
- Si pagamos:
    - Tenemos dinero?
    - Tenemos Bitcoins?
    - Solo ganamos si tenemos ambas cosas.
- Si corremos:
    - Somos rápidos?
    - Solo ganamos si somos rápidos.
