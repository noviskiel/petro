const icone_bacia = document.querySelector('#icone-bacia');
const btnBacia = document.querySelector('#btnBacia');
const bacia = document.querySelector('#bacia');
let contador_icone_bacia = true;

btnBacia.addEventListener('click', () => {

    if(btnBacia.checked){

        icone_bacia.style.display = 'block';
    } else {
        icone_bacia.style.display = 'none';
    }
});

icone_bacia.addEventListener('mouseover', () => {

        bacia.style.display = 'block';
});

icone_bacia.addEventListener('mouseout', () => {

    bacia.style.display = 'none';
});

