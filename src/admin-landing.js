let listasCargar = ["estudiantes", "profesores", "clases", "apuntes", "descargas"]
onload = () => {
    listasCargar.forEach(lista => {
        cargarEjecutar(`../../public/${lista}.json`, listaJSON => {
           console.log(listaJSON) 
           console.log(listaJSON.length) 
        })
    })
}
function cargarEjecutar(url, funcion) {
    fetch(url)
        .then(texto => texto.json())
        .then(json => funcion(json))
        .catch(e => console.error(e))
}
