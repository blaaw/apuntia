var lista_usuarios = []
onload = async () => {
    lista_usuarios = await fetch("public/usuarios.json")
    .then((text) => text.json())
    .then((json_data) => lista_usuarios = json_data)
    .catch((e) => console.error(e))

    console.log(lista_usuarios)
}

function login_usuario() {
    let codigo_input = document.getElementById("user-code").value
    let clave_input = document.getElementById("password").value

    
}
