//write your code here

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

//Funcion que recibe un array y devuelve una posición aleatoria del mismo.
//  Para esto, "Math.random" genera un num rnd, el cual se multiplica por el
//largo del array, para finalmente redondearlo para abajo con .floor.
const generarAleatorio = (arr) => arr[Math.floor(Math.random() * arr.length)];

// FUNCION QUE SETEA UNA VARIABLE CON UN STRING DE LOS LLAMADOS A LA FUNCION GENERAR ALEATORIO Y LA DEVUELVE.
const generarExcusa = () => {
  let excusa =
    generarAleatorio(who) +
    " " +
    generarAleatorio(action) +
    " " +
    generarAleatorio(what) +
    " " +
    generarAleatorio(when);

  document.getElementById("excuse").innerHTML = excusa;
};
generarExcusa();
