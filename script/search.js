const inputPesquisa = document.querySelector('#inputPesquisa');
const btnPesquisa = document.querySelector('#btnPesquisa');
const imgfiltro_menu2 = document.querySelector('#imgfiltro_menu2');
const pesquisa1 = document.querySelector('#pesquisa1');
const corpo = document.querySelector('body');
let contadorPesquisar = true;

/*btnPesquisa.addEventListener('click', () => {
    if(inputPesquisa.value === '1-NAB-6-SE52'){
        poco.setAttribute('class', 'block');
    }
});*/

imgfiltro_menu2.addEventListener('click', () => {
    if(contadorPesquisar){
        pesquisa1.setAttribute('class', 'block');
        contadorPesquisar = false;
    } else {
        pesquisa1.setAttribute('class', 'pesquisa1-desaparecer');
        contadorPesquisar = true;
    } 
})
