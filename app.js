const api = "https://rickandmortyapi.com/api/character";
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function getPersonajeAleatorio() {
    try {
      
        const personajeId = getRandomInt(1, 826);
        
        const response = await fetch(`${api}/${personajeId}`);
        const personaje = await response.json()
        ;  const resultado = document.getElementById('resultado');
        
        if (personaje.error) {
            resultado.innerHTML = `<p>Personaje no encontrado. Intentando de nuevo...</p>`;
            getPersonajeAleatorio(); 
            return;
        }
        
        resultado.innerHTML = `
            <div class="personaje-card">
                <img src="${personaje.image}" alt="${personaje.name}">
                <h3>${personaje.name}</h3>
            </div>
        `;
        
    } catch (error) {
        console.log('Error:', error);
        document.getElementById('resultado').innerHTML = `<p>Ocurrió un error al obtener el personaje</p>`;
    }
}



////ffff