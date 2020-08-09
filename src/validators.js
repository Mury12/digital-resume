
Vue.prototype.$verificaCNPJ = (value) => {
    value = value.replace(/[^\d]+/g, '')

    if (value == '') return false
    if (value.length != 14) return false

    if (value == "00000000000000" ||
        value == "11111111111111" ||
        value == "22222222222222" ||
        value == "33333333333333" ||
        value == "44444444444444" ||
        value == "55555555555555" ||
        value == "66666666666666" ||
        value == "77777777777777" ||
        value == "88888888888888" ||
        value == "99999999999999")
        return false

    let tamanho = value.length - 2
    let numeros = value.substring(0, tamanho)
    let digitos = value.substring(tamanho)
    let soma = 0
    let pos = tamanho - 7

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--

        if (pos < 2) pos = 9
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

    if (resultado != digitos.charAt(0)) return false

    tamanho = tamanho + 1
    numeros = value.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--

        if (pos < 2) pos = 9
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

    if (resultado != digitos.charAt(1)) return false

    return true
}

Vue.prototype.$verificaCPF = (value) => {
    value = value.replace(/[^\d]+/g, '')

    if (value == '') return false

    if (value.length != 11 ||
        value == "00000000000" ||
        value == "11111111111" ||
        value == "22222222222" ||
        value == "33333333333" ||
        value == "44444444444" ||
        value == "55555555555" ||
        value == "66666666666" ||
        value == "77777777777" ||
        value == "88888888888" ||
        value == "99999999999")
        return false


    let add = 0
    for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i)
    let rev = 11 - (add % 11)
    if (rev == 10 || rev == 11) rev = 0
    if (rev != parseInt(value.charAt(9))) return false
    add = 0
    for (let i = 0; i < 10; i++)	add += parseInt(value.charAt(i)) * (11 - i)
    rev = 11 - (add % 11)
    if (rev == 10 || rev == 11) rev = 0
    if (rev != parseInt(value.charAt(10))) return false

    console.log(value);

    return true
}
