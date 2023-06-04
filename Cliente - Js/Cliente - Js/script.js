/*let a, b, c;
a=3;
b="Mi hola mundo";
alert(b);
console.log("Digite el valor para la variable c: ");
c=prompt();


function mostrarValores(){
    alert(a + b + c);
}

mostrarValores();
*/

const input = document.getElementById("temperatura");
const indicador = document.getElementById("indicador");

let nombreTer, interMenor, interMayor, escala;

function guardarInfo(){
    nombreTer = document.getElementById("nombreTer").value;
    interMenor = document.getElementById("interMenor").value;
    interMayor = document.getElementById("interMayor").value;
    escala = document.getElementById("escala").value;

    document.getElementById("mostrarNom").value = nombreTer;

    input.setAttribute("min", interMenor);
    input.setAttribute("max", interMayor);
    input.setAttribute("step", escala);

}

input.addEventListener("input", () => {
  document.getElementById("grados").value = input.value;
  const value = input.value;
  indicador.style.height = value + "px";
});

function clear(){
  document.getElementById("nombreTer").value = "";
  document.getElementById("interMenor").value = "";
  document.getElementById("interMayor").value = "";
  document.getElementById("escala").value = "";
}
