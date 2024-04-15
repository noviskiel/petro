const sobreOsElementos = document.querySelector('#sobreOsElementos1');
const sobreOsElementos2 = document.querySelector('#sobreOsElementos2');
const x2 = document.querySelector('#x2');

sobreOsElementos.addEventListener('click', () => {
    sobreOsElementos2.setAttribute('class', 'sobreOsElementos sobreOsElementos-aparecer');
})

x2.addEventListener('click', () => {
    sobreOsElementos2.style.display = 'none';
})