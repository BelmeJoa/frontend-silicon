
let $title = document.getElementById('title');
let $parrafo = document.getElementById('parrafo')

function title() {
    $title.innerHTML = 'Funciones en JavaScript'
}
title();

const crearNombreCompleto = (name,surname) => {
    name= prompt('nick')
    surname = prompt('surname')
    return `${name} ${surname}`
}
let nombrecompleto = crearNombreCompleto()
const renderizarHTML = () => {
    $parrafo.innerHTML = nombrecompleto
} 
renderizarHTML()
