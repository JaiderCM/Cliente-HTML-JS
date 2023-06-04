class lista extends HTMLElement{
  constructor(){
    super();
    this.nombreTer;
    this.interMenor;
    this.interMayor;
    this.escala;
  }

  static get observerAttributes(){
    return['nombreTer', 'interMenor', 'interMayor', 'escala'];
  }

  attributeChangeCallback(nameAtr, oldValue, newValue){
    switch(nameAtr){
      case "nombreTer":
        this.nombreTer = newValue;
      break;

      case "interMenor":
        this.interMenor = newValue;
      break;
      
      case "interMayor":
        this.interMayor = newValue;
      break;

      case "escala":
        this.escala = newValue;
      break;
    }
  }

  connectedCallback(){
    this.innerHTML = `<div class = "vista" id="Termo">

    <div class="botones">
        <h3> Nombre del Termómetro: </h3>
        <input type="text" id="mostrarNom" value="${this.nombreTer}">
    </div>   

    <div class="botones">
        <h3> La temperatura del Termómetro es: </h3>
        <input type="text" id="grados">
    </div>

    <input type="range" id="temperatura" min="${this.interMenor}" max="${this.interMayor}" step="${this.escala}" value="0">
        <!--<div id="termometro">
            <div id="indicador"></div>
        </div>

    </div>-->

    <div class="vista" id="infoTermo">
        <h3> Estado de conexión <input id="Estado"> </h3>
        <h3>Dirección IP: <input type="number"></h3>
        <h3>Puerto: <input type="number"></h3>
        <div class="botones"><button class="btnConexion"> Conectar </button> <button class="btnConexion"> Desconectar </button></div>
    </div>
</div>`;
  }

}

window.customElements.define("nuevo-termo", lista);


const input = document.getElementById("temperatura");
const indicador = document.getElementById("indicador");

let nombreTer, interMenor, interMayor, escala;

function guardarInfo(){

  const termos=[];

  termos[0] = document.getElementById("nombreTer").value;
  termos[1] = document.getElementById("interMenor").value;
  termos[2] = document.getElementById("interMayor").value;
  termos[3] = document.getElementById("escala").value;

  document.getElementById("mostrarNom").value = termos[0];

    input.setAttribute("min", interMenor);
    input.setAttribute("max", interMayor);
    input.setAttribute("step", escala);

    clear();

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
