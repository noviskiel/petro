function sobeMenu(id){
    var seuId = id; 
    var menuSobe = document.getElementById("menuSobe");

    if(seuId=="mapa"){
        menuSobe.style.top = "0";

    }else if(seuId=="menu"){
        menuSobe.style.removeProperty('top');;
    }

    if(menuSobe.style.height == "100vh"){
        menuSobe.style.height = "0px";
     

    }else{
        menuSobe.style.height = "100vh";

    }
}
function filtro(id){
    var nome = document.getElementById(id); 

    if( nome.style.height == "auto"){
        nome.style.height = "0px";

    }else{
        nome.style.height = "auto";

    }
}