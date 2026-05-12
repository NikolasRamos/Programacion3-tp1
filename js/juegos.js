const cardContainer = document.querySelector('#card-container')

async function getJuegos() {
    try {
        const response = await fetch('https://programacion3-tp3.onrender.com/juegos')
        const data = await response.json()
        console.log(response)
        console.log(data)

        data.forEach((juegos) => {
            const div = document.createElement('div')
            div.classList.add('card')

            div.innerHTML = `
            <div class="contenedor-img">
                <img class="card-img"
                    src="${juegos.img}"
                    alt="${juegos.nombre}"
                />
            </div>
            <div class="card-titulo"><h3>$ ${juegos.nombre}</h3></div>
            <div class="card-valor"><h3>$ ${juegos.precio}</h3></div>
            <div class="card-descripcion"><h3>${juegos.desc}</h3></div>
            `

            cardContainer.append(div)
        });

    } catch (error) {
        console.log(`Error, no se pudieron traer los datos de los juegos ${error}`)
    }
}

getJuegos()