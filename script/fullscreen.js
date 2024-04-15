const btnFullscreen = document.querySelector('#btnFullscreen');
const mapa = document.querySelector('#mapa');
const imgFiltro = document.querySelector('#imgFiltro');
let contador2 = true;

btnFullscreen.addEventListener('click', () => {
    if(contador2){
        mapa.requestFullscreen();
        imgFiltro.setAttribute('class', 'img__filtro block');
        contador2 = false;
    } else {
        document.exitFullscreen();
        imgFiltro.setAttribute('class', 'img__filtro');
        filtro2.setAttribute('class', 'filtro2');
        contador2 = true;
    }
})
