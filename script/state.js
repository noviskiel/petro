const estado = document.querySelector('#estado');
let contador = true;

estado.addEventListener('click', () => {
    if(contador){
        poco.setAttribute('class', 'block');
        contador = false;
    } else {
        poco.setAttribute('class', 'none');
        contador = true;
    }
});
