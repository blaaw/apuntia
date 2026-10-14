onload = () => {
    mostrarVistaGeneral()
    mostrarProfesores()
}

function cargarEjecutar(url, funcion) {
    fetch(url)
        .then(texto => texto.json())
        .then(json => funcion(json))
        .catch(e => console.error(e))
}

function mostrarVistaGeneral() {
    let listasCargar = ["estudiantes", "profesores", "clases", "apuntes", "descargas"]
    listasCargar.forEach(lista => {
        cargarEjecutar(`../../public/${lista}.json`, listaJSON => {
           document.querySelector("#vista-general div")
            .insertAdjacentHTML("beforeend",
                `<div class="overview-totales">Total de ${lista}</div>
                <div class="overview-totales">${listaJSON.length}</div>`
            )
        })
    })
}

function mostrarProfesores() {
    cargarEjecutar("../../public/profesores.json", profesores => {
        let likedProfesores = [...profesores]
            .sort((a,b) => b.likes - a.likes)
            .slice(0,3)

        likedProfesores.forEach(profesor => {
            document.querySelector("#profesores .section-content")
                .insertAdjacentHTML("beforeend",
                    `<div class="overview-totales"><img src="${profesor.foto}> ${profesor.nombre}</div>
                    <div class="overview-totales">${profesor.likes} likes</div>
                    `
                )
        })
    })
}
