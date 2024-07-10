const url = "https://api.nasa.gov/planetary/apod?api_key=Gm7HAycs19YJuWjKs3xJtrT9Ky0Is7i5NYg6g3vo&count=6";

/*Con count controlamos el limite de elemntos que traemos de la API*/

async function listaImagenes(){
    try{
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();

        datosImagenes.forEach(imagen => {
            const contenido = `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
                </li>`

            card.innerHTML += contenido;
        });
    }
    catch(error){
        console.log(error);
    }
}

listaImagenes();

/* function listaImagenes(){
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes);

        const card = document.querySelector("[data-ul]");

        datosImagenes.forEach(imagen => {
            const contenido = `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>`

            card.innerHTML += contenido;
        });
    })
    .catch(error => console.log(error));
}

listaImagenes(); */