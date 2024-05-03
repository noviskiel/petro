const btnBacia = document.querySelector('#btnBacia');

//bacia do parana
const icone_bacia_do_panara = document.querySelector('#icone-bacia-do-parana');
const bacia_do_panara = document.querySelector('#bacia-do-parana');
let contador_icone_do_parana = true;

icone_bacia_do_panara.addEventListener('mouseover', () => {

        bacia_do_panara.style.display = 'block';
});
    
icone_bacia_do_panara.addEventListener('mouseout', () => {
    
    if(contador_icone_do_parana){

        bacia_do_panara.style.display = 'none';
    }
});

icone_bacia_do_panara.addEventListener('click', () => {
    
    contador_icone_do_parana = false;
    icone_bacia_do_panara.style.display = 'none';
    abreInfo();
});


//bacia de santos
const icone_bacia_de_santos = document.querySelector('#icone-bacia-de-santos');
const icones_bacias = [icone_bacia_do_panara, icone_bacia_de_santos];

btnBacia.addEventListener('click', () => {

    icones_bacias.map((ic) => {

        if(btnBacia.checked){

            ic.style.display = 'block';
        } else {

            ic.style.display = 'none';
        }
    });
});

const bacias_de_santos = document.querySelector('#bacia-de-santos');
const bacias = [bacia_do_panara, bacias_de_santos];

