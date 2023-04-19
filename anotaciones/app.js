function validarNombre(nombre) {
    let regex = /^[a-zA-Z]+$/;
    return regex.test(nombre) && nombre.length <= 30;
}

function validarNumero(numero) {
    let regex = /^[0-9]+$/;
    return regex.test(numero) && numero.length <= 10;
}