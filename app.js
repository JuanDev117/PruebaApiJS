const api = "https://rickandmortyapi.com/api/character"


async function getpersonajes(){
    try{ const responde = await fetch(api)
        const personajes = await responde.json()
      const resultado= document.getElementById('resultado');
      resultado.innerHTML = '';
      personajes.results.forEach(personaje => {
        resultado.innerHTML += `personaje: ${personaje.name}<br>`;})
        console.log(personajes)
    } catch (error){
        console.log(error)
    }

}
getpersonajes()