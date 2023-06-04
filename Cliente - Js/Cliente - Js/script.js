class holaMundo extends HTMLElement{
  constructor(){
      super();
      this.a;
      this.b;
      this.c;
      this.d;
  }

  static get observedAttributes(){
      return ['a', "b", "c", "d"];
  }

  attributeChangedCallback(nameAttr, oldValue, newValue){
      switch(nameAttr){
          case "a":
              this.a = newValue;
          break;
          case "b":
              this.b = newValue;
          break;
          case "c":
            this.c = newValue;
          break;
          case "d":
            this.d = newValue;
          break;
      }
  }

  connectedCallback(){
      this.innerHTML = `<div>
      <div class="botones">
      <h3> Nombre del Termómetro: </h3>
      <input type="text" id="mostrarNom" value="${this.a}">
  </div>

  <div class="botones">
      <h3> La temperatura del Termómetro es: </h3>
      <input type="text" id="grados">
  </div>

  <input type="range" id="temperatura" min="${this.b}" max="${this.c}" step="${this.d}" value="0">
  </div></div>`;

  }
}

window.customElements.define("nuevo-termo", holaMundo);


const input = document.getElementById("temperatura");
const indicador = document.getElementById("indicador");

let nombreTer, interMenor, interMayor, escala;

function guardarInfo(){

  const termos=[];

  termos[0] = document.getElementById("nombreTer").value;
  termos[1] = document.getElementById("interMenor").value;
  termos[2] = document.getElementById("interMayor").value;
  termos[3] = document.getElementById("escala").value;

  /*document.getElementById("mostrarNom").value = termos[0];
    input.setAttribute("min", interMenor);
    input.setAttribute("max", interMayor);
    input.setAttribute("step", escala);*/

    

    document.getElementById('Termo').innerHTML += '<nuevo-termo a="'+termos[0]+'" b="'+termos[1]+'" c="'+termos[2]+'" d="'+termos[3]+'"></nuevo-termo>';

    clear();

}

/*input.addEventListener("input", () => {
  document.getElementById("grados").value = input.value;
  const value = input.value;
  indicador.style.height = value + "px";
});*/

function clear(){
  document.getElementById("nombreTer").value = "";
  document.getElementById("interMenor").value = "";
  document.getElementById("interMayor").value = "";
  document.getElementById("escala").value = "";
}
