var lista_usuarios = []
onload = async () => {
    lista_usuarios = await fetch("public/usuarios.json")
    .then((text) => text.json())
    .then((json_data) => lista_usuarios = json_data)
    .catch((e) => console.error(e))

    document.getElementById("login-button")
    .addEventListener("click", login_usuario)
    console.log(lista_usuarios)
}

function login_usuario() {
    let codigo_input = document.getElementById("user-code").value
    let clave_input = document.getElementById("password").value

    let posicion = lista_usuarios
    .findIndex((usuario) => usuario.codigo == codigo_input && usuario.clave == clave_input)

    if (posicion == -1) {
        document.getElementById("error-message").className = "error-vsible"
    } else {
        let tipo_usuario = lista_usuarios[posicion].tipo
        switch (tipo_usuario) {
            case "estudiante":
                location.href = "pages/landing/estudiante.html"
                break;
            case "profesor":
                location.href = "pages/landing/profesor.html"
                break;
            case "admin":
                location.href = "pages/landing/admin.html"
                break;

            }
    }
}
