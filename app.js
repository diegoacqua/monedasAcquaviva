let form = document.getElementById("form");
form.addEventListener("submit", prueba);

let div = document.getElementById("container");

function prueba(e) {
  e.preventDefault();
  let datos = e.target;
  let pesos = datos.children[0].value;
  let moneda = datos.children[1].value;
  conversor(pesos, moneda);
}

function conversor(cantidad, moneda) {
  if (!isNaN(cantidad)) {
    switch (moneda) {
      case "dolar":
        let dolar = cantidad * 0.0076 + " dolares!";
        return imprimir(dolar);
      case "yen":
        let yen = cantidad * 1.01 + " yenes!";
        return imprimir(yen);
      case "euro":
        let euro = cantidad * 0.0074 + " euros!";
        return imprimir(euro);
      case "libra esterlina":
        let libra = cantidad * 0.006 + " libras esterlinas!";
        return imprimir(libra);
      case "sol":
        let sol = cantidad * 0.03 + " soles!";
        return imprimir(sol);
      default:
        return alert("ingrese una moneda valida");
    }
  }
}

function imprimir(resultado) {
  let p = document.createElement("p");
  p.innerHTML = `Tendrias ${resultado}`;
  div.appendChild(p);
}

// let calcPrevios = [];

// function conversor(cantidad) {
//   if (!isNaN(cantidad)) {
//     let moneda = prompt(
//       "Ingrese la moneda a la que desea convertir:\nDolar\nYen\nEuro\nLibra Esterlina\nSol"
//     ).toLowerCase();
//     switch (moneda) {
//       case "dolar":
//         let dolar = cantidad * 0.0076 + " dolares!";
//         calcPrevios.push(dolar);
//         return "Tendrias " + dolar;
//       case "yen":
//         let yen = cantidad * 1.01 + " yenes!";
//         calcPrevios.push(yen);
//         return "Tendrias " + yen;
//       case "euro":
//         let euro = cantidad * 0.0074 + " euros!";
//         calcPrevios.push(euro);
//         return "Tendrias " + euro;
//       case "libra esterlina":
//         let libra = cantidad * 0.006 + " libras esterlinas!";
//         calcPrevios.push(libra);
//         return "Tendrias " + libra;
//       case "sol":
//         let sol = cantidad * 0.03 + " soles!";
//         calcPrevios.push(sol);
//         return "Tendrias " + sol;
//       default:
//         return "ingrese una moneda valida";
//     }
//   } else {
//     return "Ingrese un numero";
//   }
// }

// let pesos = Number(prompt("Ingrese la cantidad de pesos que quiere convertir"));
// alert(conversor(pesos));

// let nuevo = prompt(
//   "Desea hacer otro calculo? \n Y = si\n N = no"
// ).toLowerCase();

// do {
//   if (nuevo == "y") {
//     pesos = Number(prompt("Ingrese la cantidad de pesos que quiere convertir"));
//     alert(conversor(pesos));
//     nuevo = prompt(
//       "Desea hacer otro calculo? \n Y = si\n N = no"
//     ).toLowerCase();
//   }
// } while (nuevo == "y");

// if (nuevo != "y") {
//   let previo = prompt(
//     "Desea ver sus calculos previos? \n Y = si\n N = no"
//   ).toLowerCase();
//   if (previo == "y") {
//     for (const cuenta of calcPrevios) {
//       alert("Tu calculo anterior fue " + cuenta);
//     }
//   } else {
//     alert("Que tenga un buen dia!");
//   }
// }
