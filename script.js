//SELECCIONA UN NÚMERO ALEATORIO ENTRE 1 Y 100

let numAleatorio = Math.floor(Math.random() * 100) + 1;
let input = document.getElementById("numIngresado");
let pista = document.getElementById("pista");


input.focus();
//SE EJECUTA AL HACER CLICK EN EL BOTÓN
function chequear() {
  
  let numIngresado = input.value;
  let numEntrada = parseInt(numIngresado);
  console.log(numAleatorio);
  console.log(numIngresado);
  console.log(numEntrada);

  if (numEntrada < 1 || numEntrada > 100 || isNaN(numEntrada)) {
    pista.textContent = "el número debe estar entre 1 y 100";
    return;
  }

  if (numEntrada == numAleatorio) {
    pista.textContent = "FELICIDADES! HABEIS ATINADO!!";
    input.disabled = true;
  }


  if (numEntrada < numAleatorio){
    pista.textContent = "Un poco más alto"
  }
  if (numEntrada > numAleatorio){
    pista.textContent = "Un poco más bajo"
  }

  input.focus();

}
