/*  import eventos from "./scripts/eventos.js"  */

var url = "https://api.tvmaze.com/shows"

fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
    data.forEach(element => {
        
        var peli = document.createElement('div')
        peli.innerHTML = `
        <div class="poster">
        <img class="img" src="${element.image.medium}">
        </div>
        
        `
        
        peli.setAttribute("class", "show")
        container.appendChild(peli)
        
    });
    console.log(data)
})
.catch(error => console.log(error))



/* var hover = document.getElementsByClassName('img')

for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', function () {
        console.log('hola')
    })
} */

var busqueda = document.getElementById('buscar')
document.addEventListener('keypress', busqueda => {
    if (busqueda.target.matches('#buscar')){
        if (busqueda.key ==="Enter"){
            let show = busqueda.target.value.toLowerCase()

            for (let i = 0; i < container.length; i++) {
                
                const borrar = document.getElementById("container")
                const limpiar = borrar.removeChild()
                limpiar.innerHTML = ""
            }

            let api = `https://api.tvmaze.com/search/shows?q=${show}`
            let res = fetch(api)
            .then(res => res.json())
            .then(dato => {
                dato.forEach(elemento => {
                    var peli = document.createElement('div')
                    peli.innerHTML =
                    `
                    <div class="poster">
                    <img class="img" src="${elemento.show.image.medium}">
                    </div>
                    
                    `
                    
                    peli.setAttribute("class", "show")
                    container.appendChild(peli)
                    
                });
                console.log(dato)
}) 

.catch(err => console.log(err))

            /* console.log(res) */
        }
    }
})