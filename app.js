class Conversion {
  constructor(cantidad, moneda) {
    this.cantidad = cantidad;
    this.moneda = moneda;
  }
}

let calcPrevios = [];

let form = document.getElementById("form");
let div = document.getElementById("container");
let divPrevios = document.getElementById("previos");
let btn = document.getElementById("btn");

form.addEventListener("submit", prueba);
btn.addEventListener("click", xd);

function prueba(e) {
  e.preventDefault();
  let datos = e.target;
  let pesos = datos.children[1].value;
  let moneda = datos.children[3].value;
  conversor(pesos, moneda);
}

function conversor(cantidad, moneda) {
  if (!isNaN(cantidad)) {
    switch (moneda) {
      case "dolares":
        let dolar = cantidad * 0.0076;
        return imprimir(dolar, moneda);
      case "yenes":
        let yen = cantidad * 1.01;
        return imprimir(yen, moneda);
      case "euros":
        let euro = cantidad * 0.0074;
        return imprimir(euro, moneda);
      case "libras esterlinas":
        let libra = cantidad * 0.006;
        return imprimir(libra, moneda);
      case "soles":
        let sol = cantidad * 0.03;
        return imprimir(sol, moneda);
      default:
        return alert("ingrese una moneda valida");
    }
  }
}

function imprimir(resultado, moneda) {
  let p = document.createElement("p");
  p.innerHTML = `Tendrias ${resultado} ${moneda}`;
  div.appendChild(p);
  calcPrevios.push(new Conversion(resultado, moneda));
  const convertirEnString = JSON.stringify(calcPrevios);
  localStorage.setItem("calcPrevio", convertirEnString);
  console.log(calcPrevios);
}

function xd() {
  let calcPrevio = JSON.parse(localStorage.getItem("calcPrevio"));
  console.log(calcPrevio);
  let p = document.createElement("p");
  for (const calculo of calcPrevio) {
    p.innerHTML = `${calculo.cantidad} ${calculo.moneda}`;
    divPrevios.appendChild(p);
  }
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
