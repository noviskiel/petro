const bacia = document.querySelector('#bacia');
const btnBacia = document.querySelector('#btnBacia');

btnBacia.addEventListener('click', () => {

    if(btnBacia.checked){

        bacia.style.display = 'block';
    } else {
        bacia.style.display = 'none';
    }
});
