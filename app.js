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
btn.addEventListener("click", imprimirPrev);

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
        return swal({
          title: "Error",
          text: "Ingrese una moneda valida",
          icon: "error",
          button: "Continuar",
        });
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
  swal({
    title: "Listo",
    text: "El calculo ya esta hecho",
    icon: "success",
    button: "Continuar",
  });
}

function imprimirPrev() {
  let calcPrevio = JSON.parse(localStorage.getItem("calcPrevio"));
  console.log(calcPrevio);
  for (const calculo of calcPrevio) {
    divPrevios.innerHTML += `<p>${calculo.cantidad} ${calculo.moneda}</p>`;
    divPrevios.append();
  }
  Toastify({
    text: "Aqui estan tus calculos previos",
    duration: 2000,
    close: true,
  }).showToast();
}
