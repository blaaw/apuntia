let listasCargar = ["estudiantes", "profesores", "clases", "apuntes", "descargas"]
onload = () => {
    listasCargar.forEach(lista => {
        cargarEjecutar(`../../public/${lista}.json`, listaJSON => {
           console.log(listaJSON) 
           console.log(listaJSON.length) 

           document.querySelector(".overview-section div")
            .insertAdjacentHTML("beforeend",
                `<div class="overview-totales">Total de ${lista}</div>
                <div class="overview-totales">${listaJSON.length}</div>`
            )
        })
    })
}
function cargarEjecutar(url, funcion) {
    fetch(url)
        .then(texto => texto.json())
        .then(json => funcion(json))
        .catch(e => console.error(e))
}
