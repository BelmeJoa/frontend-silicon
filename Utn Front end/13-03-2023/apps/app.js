// // Array js
// let listadealumnos =["Joa","Coco", "Juan","Jose"];

// // console.log(listadealumnos)
// // let datos = [undefined,null,NaN,[1, 2],{nombre:"papo"}]
// //posicion y elemento 
// //pos desde el 0
// //elemt representacion del datos, ocupa un lugar unico
// //length cuantos elementos tiene una array
// // let frutas = ["banana","pera","uva"]
// // console.log(frutas.length)
// let movie = ["Mi pobre angelito","Titanic"]
// console.log(movie,movie.length)
// let titanic=movie[1]
// console.log(titanic)
// movie[2]="Rocky"
// movie="Argentina,1985"
// // Metodos en array
// const comidas = ["Canelones", "Ñoquis"]
// //push agrgar en la ult pos
// comidas.push("Asado")
// comidas.pop()
// console.log(comidas)
// listadealumnos.push("Alberto")
// listadealumnos.unshift("Marcelinho")
// for (let i=0;i<listadealumnos.length;i++){
//     console.log(`En la pos ${i+1} se encuentra ${listadealumnos[i]}`)
// }
let nums=[1,2,3,4,5,6,7,8,9]
const buscarnromayor=(array) =>{
    let nromayor=array[0]
    for(i=0;i<array.length;i++){
        if(array[i]>nromayor)
        nromayor=array[i]
    }
    console.log(`El numero mayor es ${nromayor}`)
}
buscarnromayor(nums)
const sumarElementos = (array) => {
    let numero = 0
    for(i=0;i<array.length;i++){
        numero= array[i] + numero
    }
    console.log(numero)
}
sumarElementos(nums)
const buscarnum =(array,n)=>{
    haynro=0
    for(i=0;i<array.length;i++){
        if(n===array[i]){
            let haynro=1
            console.log(1)
        }
    }
    if(haynro===0){
        console.log(-1)
    }
    
}
buscarnum(nums,12)