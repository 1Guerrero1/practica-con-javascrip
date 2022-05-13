window.onload=inicio;

/* Varias maneras de acceder a los botones 
document.getElementById("boton1")
document.getElementsByTagName("button")[0]
document.getElementsByClassName("boton")[0]
document.querySelector("#boton1")
document.querySelector("button")[0]
document.querySelector(".boton")
document.querySelectorAll(".boton")[0]
*/
function inicio(){
    document.querySelectorAll(".boton")[0].onclick=accion1;
    document.querySelectorAll(".boton")[1].onclick=accion2;
    document.querySelectorAll(".boton")[2].onclick=accion3;
    document.querySelectorAll(".boton")[3].onclick=accion4;
}

function accion1(){
    document.querySelector(".caja").innerHTML="Saludos";
}

function accion2(){
    document.querySelector(".caja").innerHTML="<img src='img/logo.svg'>";
}

function accion3(){
    document.querySelector(".caja").insertAdjacentHTML ("beforeend","<button>Botón</button>");
}

function accion4(){
    document.querySelector(".caja").innerHTML="";
}