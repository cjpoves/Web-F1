const  pilotosTemporadaDiv = document.querySelector(".pilotosTemporada__resultado");
const obtenerpilotosTemporadaBtn = document.querySelector(".btnObtenerPilotosTemporada");
const eliminarpilotosTemporadaBtn = document.querySelector(".btnEliminarPilotosTemporada");



obtenerpilotosTemporadaBtn.onclick = function() {
    obtenerpilotosTemporada();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerpilotosTemporada() {
    const temporada = document.querySelector("#temporada").value;
   const url = `https://ergast.com/api/f1/${temporada}/drivers.json`;
   console.log(url);

        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado => mostrarPilotosTemporada(resultado.MRData.DriverTable.Drivers))
}

//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarPilotosTemporada(resultados) {
    
    limpiarHTML(pilotosTemporadaDiv);
    console.log(resultados)

    const contenedorPilotosTemporada = document.createElement("div");
    contenedorPilotosTemporada.classList.add("pilotosTemporada--contenedor");

    //Creamos ol en la que mostrar los resultados
    const listaPilotosTemporada = document.createElement("ul");
    listaPilotosTemporada.classList.add("listaPilotosTemporada");

    //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(pilotosTemporada => {
        const driverGivenName = pilotosTemporada.givenName;
        const driverFamilyName = pilotosTemporada.familyName;
        const driverNationality = pilotosTemporada.nationality;
        const dateOfBirth = pilotosTemporada.dateOfBirth;


        const itemListaPilotosTemporada = document.createElement("li");
        itemListaPilotosTemporada.classList.add("itemListaPilotosTemporada");

        itemListaPilotosTemporada.textContent = `${driverGivenName} ${driverFamilyName}, ${driverNationality}, ${dateOfBirth}`;
        listaPilotosTemporada.appendChild(itemListaPilotosTemporada);        
    });

    contenedorPilotosTemporada.appendChild(listaPilotosTemporada);
    pilotosTemporadaDiv.appendChild(contenedorPilotosTemporada);
}

function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

eliminarpilotosTemporadaBtn.onclick = function() {
    eliminarpilotosTemporada();
}

function eliminarpilotosTemporada() {
    pilotosTemporadaDiv.firstChild.remove();
}

//Seccion pilotos ganadores mundial
const  pilotosGanadoresMundialDiv = document.querySelector(".pilotosGanadoresMundial__resultado");
const obtenerPilotosGanadoresMundialBtn = document.querySelector(".btnObtenerPilotosGanadoresMundial");
const eliminarPilotosGanadoresMundialBtn = document.querySelector(".btnEliminarPilotosGanadoresMundial");


obtenerPilotosGanadoresMundialBtn.onclick = function() {
    obtenerPilotosGanadoresMundial();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerPilotosGanadoresMundial() {
    const url = "https://ergast.com/api/f1/driverstandings/1/drivers.json?limit=100";
        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado =>(mostrarPilotosGanadoresMundial(resultado.MRData.DriverTable.Drivers)))
}


//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarPilotosGanadoresMundial(resultados) {
limpiarHTML(pilotosGanadoresMundialDiv);
console.log(resultados)
    const contenedorPilotosGanadoresMundial = document.createElement("div");
    contenedorPilotosGanadoresMundial.classList.add("pilotosGanadoresMundial--contenedor");

       //Creamos ul en la que mostrar el calendario
       const listaPilotosGanadoresMundial = document.createElement("ul");
       listaPilotosGanadoresMundial.classList.add("listaPilotosGanadoresMundial");

       //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(pilotosGanadoresMundial => {
        const givenName = pilotosGanadoresMundial.givenName;
        const familyName = pilotosGanadoresMundial.familyName;
        const nationality = pilotosGanadoresMundial.nationality;
        const dateOfBirth = pilotosGanadoresMundial.dateOfBirth;
        
        const itemListaPilotosGanadoresMundial = document.createElement("li");
        itemListaPilotosGanadoresMundial.classList.add("itemListaPilotosGanadoresMundial");

        itemListaPilotosGanadoresMundial.textContent = `${givenName} ${familyName},  ${nationality}, ${dateOfBirth}`;
        listaPilotosGanadoresMundial.appendChild(itemListaPilotosGanadoresMundial);    
    });
    contenedorPilotosGanadoresMundial.appendChild(listaPilotosGanadoresMundial);
    pilotosGanadoresMundialDiv.appendChild(contenedorPilotosGanadoresMundial);

}

eliminarPilotosGanadoresMundialBtn.onclick = function() {
    eliminarMundialActualConstructores();
}

function eliminarMundialActualConstructores() {
    pilotosGanadoresMundialDiv.firstChild.remove();
}