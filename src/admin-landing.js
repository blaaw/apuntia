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
                `<article class="stat-card">
                    <span class="stat-label">Total de ${lista}</span>
                    <strong class="stat-value">${listaJSON.length}</strong>
                </article>`
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
                    `<article class="prof-card">
                        <img class="prof-photo" src="${profesor.foto}" alt="Foto de ${profesor.nombre}">
                        <div class="prof-info">
                            <span class="prof-name">${profesor.nombre}</span>
                            <span class="prof-likes">${profesor.likes} likes</span>
                        </div>
                    </article>`
                )
        })
    })
}
