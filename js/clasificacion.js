//Seccion obtener puntos mundial pilotos
const  mundialActualPilotosDiv = document.querySelector(".mundialActualPilotos__resultado");
const obtenerMundialActualPilotosBtn = document.querySelector(".btnObtenerMundialActualPilotos");
const eliminarMundialActualPilotosBtn = document.querySelector(".btnEliminarMundialActualPilotos");


obtenerMundialActualPilotosBtn.onclick = function() {
    obtenerConsultaMundialActualPilotos();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerConsultaMundialActualPilotos() {
    const url = "https://ergast.com/api/f1/current/driverStandings.json";
        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado =>(mostrarMundialActualPilotos(resultado.MRData.StandingsTable.StandingsLists[0].DriverStandings)))
}

//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarMundialActualPilotos(resultados) {
limpiarHTML(mundialActualPilotosDiv);

    const contenedorMundialPilotosActual = document.createElement("div");
    contenedorMundialPilotosActual.classList.add("MundialPilotosActual--contenedor");

       //Creamos ul en la que mostrar el calendario
       const listaMundialPilotosActual = document.createElement("ul");
       listaMundialPilotosActual.classList.add("listaMundialPilotosActual");

       //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(mundialPilotos => {
        const position = mundialPilotos.position;
        const givenName = mundialPilotos.Driver.givenName;
        const familyName = mundialPilotos.Driver.familyName;
        const constructor = mundialPilotos.Constructors[0].name;
        const points = mundialPilotos.points;
        const wins = mundialPilotos.wins;
        
        
        const itemListaMundialPilotosActual = document.createElement("li");
        itemListaMundialPilotosActual.classList.add("itemListaMundialPilotosActual");

        itemListaMundialPilotosActual.textContent = `${position}º ${givenName} ${familyName}, ${constructor}, ${points} puntos ${wins} victorias`;
        listaMundialPilotosActual.appendChild(itemListaMundialPilotosActual);    
    });
    contenedorMundialPilotosActual.appendChild(listaMundialPilotosActual);
    mundialActualPilotosDiv.appendChild(contenedorMundialPilotosActual);

}

eliminarMundialActualPilotosBtn.onclick = function() {
    MundialActualPilotos();
}

function MundialActualPilotos() {
    mundialActualPilotosDiv.firstChild.remove();
}

function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}


//Seccion obtener puntos mundial constructores
const  mundialActualConstructoresDiv = document.querySelector(".mundialActualConstructores__resultado");
const obtenerMundialActualConstructoresBtn = document.querySelector(".btnObtenerMundialActualConstructores");
const eliminarMundialActualConstructoresBtn = document.querySelector(".btnEliminarMundialActualConstructores");


obtenerMundialActualConstructoresBtn.onclick = function() {
    obtenerConsultaMundialActualConstructores();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerConsultaMundialActualConstructores() {
    const url = "https://ergast.com/api/f1/current/constructorStandings.json";
        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado =>(mostrarMundialActualConstructores(resultado.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)))
}


//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarMundialActualConstructores(resultados) {
limpiarHTML(mundialActualConstructoresDiv);

    const contenedorMundialConstructoresActual = document.createElement("div");
    contenedorMundialConstructoresActual.classList.add("mundialConstructoresActual--contenedor");

       //Creamos ul en la que mostrar el calendario
       const listaMundialConstructoresActual = document.createElement("ul");
       listaMundialConstructoresActual.classList.add("listaMundialConstructoresActual");

       //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(mundialConstructores => {
        const position = mundialConstructores.position;
        const constructorName = mundialConstructores.Constructor.name;
        const constructoNationality = mundialConstructores.Constructor.nationality;
        const points = mundialConstructores.points;
        const wins = mundialConstructores.wins;
        
        
        const itemListaMundialConstructoresActual = document.createElement("li");
        itemListaMundialConstructoresActual.classList.add("itemListaMundialPilotosActual");

        itemListaMundialConstructoresActual.textContent = `${position}º ${constructorName},  ${constructoNationality}, ${points} puntos ${wins} victorias`;
        listaMundialConstructoresActual.appendChild(itemListaMundialConstructoresActual);    
    });
    contenedorMundialConstructoresActual.appendChild(listaMundialConstructoresActual);
    mundialActualConstructoresDiv.appendChild(contenedorMundialConstructoresActual);

}

eliminarMundialActualConstructoresBtn.onclick = function() {
    eliminarMundialActualConstructores();
}

function eliminarMundialActualConstructores() {
    mundialActualConstructoresDiv.firstChild.remove();
}

function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}