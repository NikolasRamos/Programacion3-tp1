const cardContainer = document.querySelector('#card-container');
const buscador = document.querySelector('#buscador');
let todosLosJuegos = [];

// Muestra los juegos
function renderizarJuegos(lista) {
    cardContainer.innerHTML = '';

    lista.forEach((juego) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.id = `id-${juego.id}`;

        div.innerHTML = `       
            <div class="contenedor-img">
                <img class="card-img"
                    src="${juego.img}"
                    alt="${juego.nombre}"
                />
            </div>
            <div class="card-titulo"><h3>${juego.nombre}</h3></div>
            <div class="card-valor"><h3>${juego.precio}</h3></div>
            <div class="card-descripcion"><h3>${juego.descripcion}</h3></div>
            <div class="card-genero"><h3>${juego.genero}</h3></div>
        `;
        cardContainer.append(div);
    });
}

// Loader
async function getJuegos() {
    try {
        if (!cardContainer) return;
        
        cardContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Cocinando los datos, por favor espera...</p>
            </div>
        `;

        const response = await fetch('https://programacion3-tp3.onrender.com/juegos');
        const data = await response.json();
        
        todosLosJuegos = data;
        renderizarJuegos(todosLosJuegos);

    } catch (error) {
        cardContainer.innerHTML = `<p>Error al cargar los juegos.</p>`;
        console.log(`Error, no se pudieron traer los datos: ${error}`);
    }
}

buscador.addEventListener('input', (e) => {
    const busqueda = e.target.value.toLowerCase().trim();

    const filtrados = todosLosJuegos.filter(juego => {

        if (!isNaN(busqueda) && busqueda !== "") {
            return juego.id.toString() === busqueda;
        } 
        
        return juego.nombre.toLowerCase().includes(busqueda);
    });

    renderizarJuegos(filtrados);
});

getJuegos();