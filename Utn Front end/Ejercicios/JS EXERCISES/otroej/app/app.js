// const gritar = (frase) => {
//     let fraseConSigno = `${frase}!!!`
//     console.log(fraseConSigno)
// }
// gritar("RIVER TE AMO")
const obtenerNumbreCompletp = (nombre, apellido) => {
    let nombrecompleto = `${nombre} ${apellido}`
    return nombrecompleto    
}

const saludar = (nombrecompleto) => {
    let saludo = `Hola ${nombrecompleto}`
    return saludo
}
const salugrito = (saludo) => {
    let grito = `${saludo}!!!!!`
    return grito
}
let nombregenerado = obtenerNumbreCompletp("Joaquin","Belmetiuk")
let saludoGenerado = saludar(nombregenerado)
console.log(salugrito(saludoGenerado))
console.log(obtenerNumbreCompletp("joa","quincho"))