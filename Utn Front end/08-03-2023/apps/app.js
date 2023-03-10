const puedeVerPelicula = (edad,tieneAutorizacion) => {
    let entrada = edad>=15 || tieneAutorizacion == true
    if(entrada){
        console.log("Puede ver la pelicula")
    }else{
        console.log("No puede ver la pelicula")
    }
}
puedeVerPelicula(14,false)
puedeVerPelicula(15,true)