const memberContainer = document.querySelector('.members-card');

async function getEquipo() {
    try {
        if (!memberContainer) return;

        memberContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Cargando el equipo, por favor espera...</p>
            </div>
        `;

        const response = await fetch('https://programacion3-tp3.onrender.com/equipo');
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        renderEquipo(data);
    } catch (error) {
        memberContainer.innerHTML = `<p>Error al cargar el equipo.</p>`;
        console.error(`Error al obtener el equipo: ${error}`);
    }
}

function renderEquipo(lista) {
    memberContainer.innerHTML = '';

    lista.forEach((miembro) => {
        const div = document.createElement('div');
        div.classList.add('member-card');
        div.id = `id-${miembro.id}`;

        div.innerHTML = `
            <div class="member-content">
                <h3 class="member-name">${miembro.nombre}</h3>
                <p class="member-role">${miembro.rol}</p>
            </div>
        `;

        memberContainer.append(div);
    });
}

getEquipo();
