const root = document.getElementById('root');

window.addEventListener("load", (event) => {
    fetchApi()
  });
let numero = 18

    function fetchApi(){
        for(let i = 1; i < numero; i++){
        fetch(`https://rickandmortyapi.com/api/character/${i}`)
        .then(response => response.json())
        .then(data => {
        pintarCaracteres(data)
    });
    
    }
}

function pintarCaracteres(data) {
    const divCaracter = document.createElement('div');
    divCaracter.classList.add('div-caracter')

    const img = document.createElement('img')
    img.classList.add('img-caracter')
    img.src = data.image

    const name = document.createElement('h5')
    name.textContent = data.name

    const gender = document.createElement('p');
    gender.textContent = data.gender

    const origin = document.createElement('p');
    gender.textContent = data.origin.name

    const created = document.createElement('p');
    created.textContent = data.created

    divCaracter.append(img)
    divCaracter.append(name)
    divCaracter.append(gender)
    divCaracter.append(origin)
    divCaracter.append(created)
    root.append(divCaracter)

}
