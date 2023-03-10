// const dejarAvanzar = () =>{
//     let color = prompt("de que color esta el semaforo?").toLocaleLowerCase()
//     console.log(color)
//     if (color ==="verde") {
//         alert("Puede avanzar")
//        } else if(color==="amarillo" || color==="rojo") {
//             alert("No puede pasar")
//         }
//         else{
//             alert("Error ingrese un color correcto")
//         }
// }
// dejarAvanzar()
//// Escribir una función que tome un número entero n como argumento y 
//genere una tabla de multiplicar del 1 al 10 para n utilizando un bucle "for".
const multiplicarTabla = (num) => {
    for(i=1 ; i<=10 ; i=i+1){
        resultado= num*i
        console.log(`${num} * ${i} = ${resultado}}`)
    }
}
multiplicarTabla(3)
