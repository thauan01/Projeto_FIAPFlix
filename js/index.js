let listaDeFilmes = [
    'https://2.bp.blogspot.com/-Hm5_gy7OX20/VLLnE-_VJeI/AAAAAAAAAs0/pxX6ZoRZpAY/s1600/Interestelar-download-filme-dublado-torrent.jpg',
    'https://image.tmdb.org/t/p/w342/ojyrQRIQ6f0hHFpJoXTAeUx0ynX.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/La_vita_%C3%A8_bella.jpg/200px-La_vita_%C3%A8_bella.jpg'
]
let listaDeTitulos = [
    'Interestelar',
    'Efeito Borboleta',
    'A vida é Bela'
]

//! DOM - Document Object Model
let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')
//criando o laço for
for (i; i < listaDeFilmes.length; i++){
    catalogo.innerHTML += `<div class='filme'>
    <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}</figcaption>
    </div>`
}


