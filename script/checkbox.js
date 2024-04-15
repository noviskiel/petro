const btnPocos = document.querySelector('#btnPocos');
const btnBaica = document.querySelector('#btnBacia');

btnPocos.addEventListener('click', () => {
    if(btnPocos.checked){
        poco.setAttribute('class', 'block');
    } else {
        poco.setAttribute('class', 'none');
    }
});

btnBaica.addEventListener('click', () => {
    if(btnBaica.checked){
        abreInfo();
    }
});

