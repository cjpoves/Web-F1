const  pilotosEscuderiaDiv = document.querySelector(".pilotosEscuderia__resultado");
const obtenerpilotosEscuderiaBtn = document.querySelector(".btnObtenerPilotosEscuderia");
const eliminarpilotosEscuderiaBtn = document.querySelector(".btnEliminarPilotosEscuderia");



obtenerpilotosEscuderiaBtn.onclick = function() {
    obtenerpilotosEscuderia();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerpilotosEscuderia() {
    const pilotoEscuderia = document.querySelector("#pilotoEscuderia").value;
   const url = `https://ergast.com/api/f1/constructors/${pilotoEscuderia}/drivers.json?limit=100`;

        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado => mostrarPilotosEscuderia(resultado.MRData.DriverTable.Drivers))
}

//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarPilotosEscuderia(resultados) {
    
    limpiarHTML(pilotosEscuderiaDiv);
    

    const contenedorPilotosEscuderia = document.createElement("div");
    contenedorPilotosEscuderia.classList.add("pilotosEscuderia--contenedor");

    //Creamos ol en la que mostrar los resultados
    const listaPilotosEscuderia = document.createElement("ul");
    listaPilotosEscuderia.classList.add("listaPilotosEscuderia");

    //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(pilotosEscuderia => {
        const driverGivenName = pilotosEscuderia.givenName;
        const driverFamilyName = pilotosEscuderia.familyName;
        const driverNationality = pilotosEscuderia.nationality;
        const dateOfBirth = pilotosEscuderia.dateOfBirth;


        const itemListaPilotosEscuderia = document.createElement("li");
        itemListaPilotosEscuderia.classList.add("itemListaPilotosEscuderia");

        itemListaPilotosEscuderia.textContent = `${driverGivenName} ${driverFamilyName}, ${driverNationality}, ${dateOfBirth}`;
        listaPilotosEscuderia.appendChild(itemListaPilotosEscuderia);        
    });

    contenedorPilotosEscuderia.appendChild(listaPilotosEscuderia);
    pilotosEscuderiaDiv.appendChild(contenedorPilotosEscuderia);
}

function limpiarHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

eliminarpilotosEscuderiaBtn.onclick = function() {
    eliminarpilotosEscuderia();
}

function eliminarpilotosEscuderia() {
    pilotosEscuderiaDiv.firstChild.remove();
}

//Seccion pilotos ganadores mundial
const  escuderiasGanadoresMundialDiv = document.querySelector(".escuderiasGanadoresMundial__resultado");
const obtenerEscuderiasGanadoresMundialBtn = document.querySelector(".btnObtenerEscuderiasGanadoresMundial");
const eliminarEscuderiasGanadoresMundialBtn = document.querySelector(".btnEliminarEscuderiasGanadoresMundial");


obtenerEscuderiasGanadoresMundialBtn.onclick = function() {
    obtenerEscuderiasGanadoresMundial();
}

//Funcion para conectar con la Api para obtener últimos resultados
function obtenerEscuderiasGanadoresMundial() {
    const url = "https://ergast.com/api/f1/constructorStandings/1/constructors.json";
        fetch (url) 
    .then (respuesta => respuesta.json())
    .then (resultado =>(mostrarEscuderiasGanadoresMundial(resultado.MRData.ConstructorTable.Constructors)))
}


//Funcion para mostrar resultados de la ultima carrera en el html
function mostrarEscuderiasGanadoresMundial(resultados) {
limpiarHTML(escuderiasGanadoresMundialDiv);
    const contenedorEscuderiasGanadoresMundial = document.createElement("div");
    contenedorEscuderiasGanadoresMundial.classList.add("escuderiasGanadoresMundial--contenedor");

       //Creamos ul en la que mostrar el calendario
       const listaEscuderiasGanadoresMundial = document.createElement("ul");
       listaEscuderiasGanadoresMundial.classList.add("listaEscuderiasGanadoresMundial");

       //Iteramos sobre lel array de objetos de la API que cada objeto es un piloto para añadirlo como li a la ol
    resultados.forEach(escuderiasGanadoresMundial => {
        const name = escuderiasGanadoresMundial.name;
        const nationality = escuderiasGanadoresMundial.nationality;
        
        const itemListaEscuderiasGanadoresMundial = document.createElement("li");
        itemListaEscuderiasGanadoresMundial.classList.add("itemListaPilotosGanadoresMundial");

        itemListaEscuderiasGanadoresMundial.textContent = `${name}, ${nationality}`;
        listaEscuderiasGanadoresMundial.appendChild(itemListaEscuderiasGanadoresMundial);    
    });
    contenedorEscuderiasGanadoresMundial.appendChild(listaEscuderiasGanadoresMundial);
    escuderiasGanadoresMundialDiv.appendChild(contenedorEscuderiasGanadoresMundial);

}

eliminarEscuderiasGanadoresMundialBtn.onclick = function() {
    eliminarEscuderiasGanadoresMundial();
}

function eliminarEscuderiasGanadoresMundial() {
    escuderiasGanadoresMundialDiv.firstChild.remove();
}