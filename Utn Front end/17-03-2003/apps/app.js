const API_CHARACTERS = fetch("https://rickandmortyapi.com/api/character")
API_CHARACTERS.then((data)=>{
    return data.json()
}).then((data)=>{
    const $container = document.getElementById("container")
    const characters = data.results;
    for (let i = 0 ; i<characters.length;i++){

        $container.innerHTML  += `
        <h1>${characters[i].name}</h1>`
    }
})
.catch((err)=>{
    console.log(err)
})

let array = ["hoola","DOS",4 ,9,8,10]
array.splice(3,1)
console.log(array)