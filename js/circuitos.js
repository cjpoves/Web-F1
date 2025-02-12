const  circuitosTemporadaDiv = document.querySelector(".circuitosTemporada__resultado");
const obtenerCircuitosTemporadaBtn = document.querySelector(".btnObtenerCircuitosTemporada");
const eliminarCircuitosTemporadaBtn = document.querySelector(".btnEliminarCircuitosTemporada");



obtenerCircuitosTemporadaBtn.onclick = function() {
    obtenerCircuitosTemporada();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerCircuitosTemporada() {
    const circuitos = document.querySelector("#circuitos").value;
   const url = `https://ergast.com/api/f1/${circuitos}/circuits.json`;

        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado => mostrarCircuitosTemporada(resultado.MRData.CircuitTable.Circuits))
}

//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarCircuitosTemporada(resultados) {
    
    limpiarHTML(circuitosTemporadaDiv);

    const contenedorCircuitosTemporada = document.createElement("div");
    contenedorCircuitosTemporada.classList.add("circuitosTemporada--contenedor");

    //Creamos ol en la que mostrar los resultados
    const listaCircuitosTemporada = document.createElement("ul");
    listaCircuitosTemporada.classList.add("listaCircuitosTemporada");

    //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(circuitosTemporada => {
        const circuitName = circuitosTemporada.circuitName;
        const country = circuitosTemporada.Location.country;
        const locality = circuitosTemporada.Location.locality;


        const itemListaCircuitosTemporada = document.createElement("li");
        itemListaCircuitosTemporada.classList.add("itemListaCircuitosTemporada");

        itemListaCircuitosTemporada.textContent = `${circuitName}, ${country}, ${locality}`;
        listaCircuitosTemporada.appendChild(itemListaCircuitosTemporada);        
    });

    contenedorCircuitosTemporada.appendChild(listaCircuitosTemporada);
    circuitosTemporadaDiv.appendChild(contenedorCircuitosTemporada);
}

function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

eliminarCircuitosTemporadaBtn.onclick = function() {
    eliminarCircuitosTemporada();
}

function eliminarCircuitosTemporada() {
    circuitosTemporadaDiv.firstChild.remove();
}


//Seccion Circuitos F1
const  circuitosDiv = document.querySelector(".circuitos__resultado");
const obtenerCircuitosBtn = document.querySelector(".btnObtenerCircuitos");
const eliminarCircuitosBtn = document.querySelector(".btnEliminarCircuitos");


obtenerCircuitosBtn.onclick = function() {
    obtenerCircuitos();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerCircuitos() {
    const url = "https://ergast.com/api/f1/circuits.json?limit=100";
        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado =>(mostrarCircuitos(resultado.MRData.CircuitTable.Circuits)))
}


//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarCircuitos(resultados) {
limpiarHTML(circuitosDiv);
    const contenedorCircuitos = document.createElement("div");
    contenedorCircuitos.classList.add("circuitos--contenedor");

       //Creamos ul en la que mostrar el calendario
       const listaCircuitos = document.createElement("ul");
       listaCircuitos.classList.add("listaCircuitos");

       //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(circuitos => {
        const circuitName = circuitos.circuitName;
        const locality = circuitos.Location.locality;
        const country = circuitos.Location.country;

        
        const itemListaCircuitos = document.createElement("li");
        itemListaCircuitos.classList.add("itemListaCircuitos");

        itemListaCircuitos.textContent = `${circuitName}, ${locality}, ${country}`;
        listaCircuitos.appendChild(itemListaCircuitos);    
    });
    contenedorCircuitos.appendChild(listaCircuitos);
    circuitosDiv.appendChild(contenedorCircuitos);

}

eliminarCircuitosBtn.onclick = function() {
    eliminarCircuitos();
}

function eliminarCircuitos() {
    circuitosDiv.firstChild.remove();
}