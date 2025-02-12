//Seccion obtener resultados última carrera

const  UltimosResultadosDiv = document.querySelector(".ultimosResultados__resultado");
const obtenerUltimosResultadosBtn = document.querySelector(".btnObtenerUltimosResultados");
const eliminarUltimosResultadosBtn = document.querySelector(".btnEliminarUltimosResultados");


obtenerUltimosResultadosBtn.onclick = function() {
    obtenerConsulta();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerConsulta() {
    const url = "https://ergast.com/api/f1/current/last/results.json";
        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado => mostrarUltimosResultados(resultado.MRData.RaceTable.Races[0]))
}

//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarUltimosResultados(resultados) {
    
    limpiarHTML(UltimosResultadosDiv);

    const contenedorUltimosResultados = document.createElement("div");
    contenedorUltimosResultados.classList.add("ultimosResultados--contenedor");

    //Obtenemos el nombre del cirucito y lo añadimos al HTML
    const circuito = resultados.Circuit;
    const {circuitName} = circuito; 

    const nmCircuitoUltimosResultados = document.createElement("h3");
    nmCircuitoUltimosResultados.classList.add("nmCircuitoUltimosResultados");
    nmCircuitoUltimosResultados.textContent = circuitName;

    contenedorUltimosResultados.appendChild(nmCircuitoUltimosResultados);
    UltimosResultadosDiv.appendChild(contenedorUltimosResultados);

    //Creamos ol en la que mostrar los resultados
    const listaResultados = document.createElement("ul");
    listaResultados.classList.add("listaResultados");

    const clasificacion = resultados.Results

    //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    clasificacion.forEach(piloto => {
        const position = piloto.position;
        const driverGivenName = piloto.Driver.givenName;
        const driverFamilyName = piloto.Driver.familyName;
        const driverNationality = piloto.Driver.nationality;
        const driverEscuderia = piloto.Constructor.name;
        const status = piloto.status;
        const puntos = piloto.points;


        const itemListaResultados = document.createElement("li");
        itemListaResultados.classList.add("itemListaResultados");

        itemListaResultados.textContent = `${position}º ${driverGivenName}  ${driverFamilyName}, ${driverNationality}, ${driverEscuderia}, ${status} ${puntos} points`;
        listaResultados.appendChild(itemListaResultados);        
    });

    contenedorUltimosResultados.appendChild(listaResultados);
    
}

function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

eliminarUltimosResultadosBtn.onclick = function() {
    eliminarUltimosResultados();
}

function eliminarUltimosResultados() {
    UltimosResultadosDiv.firstChild.remove();
}


//Seccion obtener calendario carreras
const  calendarioDiv = document.querySelector(".calendario__resultado");
const obtenerCalendarioBtn = document.querySelector(".btnObtenerCalendario");
const eliminarCalendarioBtn = document.querySelector(".btnEliminarCalendario");


obtenerCalendarioBtn.onclick = function() {
    obtenerConsultaCalendario();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerConsultaCalendario() {
    const url = "https://ergast.com/api/f1/current.json";
        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado =>mostrarCalendario(resultado.MRData.RaceTable.Races))
}

//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarCalendario(resultados) {
console.log(resultados);
limpiarHTML(calendarioDiv);

    const contenedorCalendario = document.createElement("div");
    contenedorCalendario.classList.add("calendario--contenedor");

       //Creamos ul en la que mostrar el calendario
       const listaCalendario = document.createElement("ul");
       listaCalendario.classList.add("listaCalendario");

       //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(calendario => {
        const season = calendario.season;
        const round = calendario.round;
        const raceName = calendario.raceName;
        const date = calendario.date;
        const time = calendario.time;
        const enlace = calendario.url;
        
        
        const itemListaCalendario = document.createElement("li");
        itemListaCalendario.classList.add("itemListaCalendario");

        itemListaCalendario.textContent = `Temporada ${season} Carrera ${round}: ${raceName} --> ${date} ${time}`;
        listaCalendario.appendChild(itemListaCalendario);    
    });
    contenedorCalendario.appendChild(listaCalendario);
   calendarioDiv.appendChild(contenedorCalendario);

}

eliminarCalendarioBtn.onclick = function() {
    eliminarCalendario();
}

function eliminarCalendario() {
    calendarioDiv.firstChild.remove();
}