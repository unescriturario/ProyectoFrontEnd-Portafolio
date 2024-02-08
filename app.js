/////PRIMER PUNTO
let imagen = document.getElementById('imagen')


imagen.addEventListener('mouseover', () => { imagen.src = "Images/Foto2.jpeg" })



imagen.addEventListener('mouseout', () => { imagen.src = "Images/Foto1.jpg" })

/////SEGUNDO PUNTO

let cajaSaberMasUno = document.getElementById('cajaSaberMasUno')
let btnCloseUno = document.getElementById('btnCloseUno')
let cajaVisibleUno = document.getElementById('cajaVisibleUno')

cajaSaberMasUno.addEventListener('click', () => {
    cajaVisibleUno.style.display = 'inline'
})

btnCloseUno.addEventListener('click', () => {
    cajaVisibleUno.style.display = 'none'
})

let cajaSaberMasDos = document.getElementById('cajaSaberMasDos')
let btnCloseDos = document.getElementById('btnCloseDos')
let cajaVisibleDos = document.getElementById('cajaVisibleDos')

cajaSaberMasDos.addEventListener('click', () => {
    cajaVisibleDos.style.display = 'inline'
})

btnCloseDos.addEventListener('click', () => {
    cajaVisibleDos.style.display = 'none'
})

let cajaSaberMasTres = document.getElementById('cajaSaberMasTres')
let btnCloseTres = document.getElementById('btnCloseTres')
let cajaVisibleTres = document.getElementById('cajaVisibleTres')

cajaSaberMasTres.addEventListener('click', () => {
    cajaVisibleTres.style.display = 'inline'
})

btnCloseTres.addEventListener('click', () => {
    cajaVisibleTres.style.display = 'none'
})

let cajaSaberMasCuatro = document.getElementById('cajaSaberMasCuatro')
let btnCloseCuatro = document.getElementById('btnCloseCuatro')
let cajaVisibleCuatro = document.getElementById('cajaVisibleCuatro')

cajaSaberMasCuatro.addEventListener('click', () => {
    cajaVisibleCuatro.style.display = 'inline'
})

btnCloseCuatro.addEventListener('click', () => {
    cajaVisibleCuatro.style.display = 'none'
})

let cajaSaberMasCinco = document.getElementById('cajaSaberMasCinco')
let btnCloseCinco = document.getElementById('btnCloseCinco')
let cajaVisibleCinco = document.getElementById('cajaVisibleCinco')

cajaSaberMasCinco.addEventListener('click', () => {
    cajaVisibleCinco.style.display = 'inline'
})

btnCloseCinco.addEventListener('click', () => {
    cajaVisibleCinco.style.display = 'none'
})

let cajaSaberMasSexto = document.getElementById('cajaSaberMasSexto')
let btnCloseSexto = document.getElementById('btnCloseSexto')
let cajaVisibleSexto = document.getElementById('cajaVisibleSexto')

cajaSaberMasSexto.addEventListener('click', () => {
    cajaVisibleSexto.style.display = 'inline'
})

btnCloseSexto.addEventListener('click', () => {
    cajaVisibleSexto.style.display = 'none'
})

/////////TERCER PUNTO

document.getElementById('formularioLlenado').addEventListener('submit', function (evento) {

    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let numero = document.getElementById('numero').value;
    let email = document.getElementById('email').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;


    if (!nombre || !numero || !email || !asunto || !mensaje) {
        document.getElementById('formularioFallido').style.display = 'inline'
    }

    document.getElementById('formularioExitoso').style.display = 'inline';

    document.getElementById('nombre').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('email').value = "";
    document.getElementById('asunto').value = "";
    document.getElementById('mensaje').value = "";


})

////CUARTO PUNTO////ESTO FUE LO MAS CERCANO QUE PUDE LLEGAR
///DESPUES DE MUCHAS LAGRIMAS Y MILES DE TUTORIALES EN INTERNET

let slider = document.querySelector('.habilidadesSeisCajas');
let sliderDivs = document.querySelectorAll('.habilidadesSeisCajas div');
let anterior = document.getElementById('anterior');
let siguiente = document.getElementById('siguiente');

let index = 0;
let numElementosVisibles = 3;
let slideWidth = slider.offsetWidth / numElementosVisibles;

function divSlider(direccion) {
    index += direccion;

    if (index < 0) {
        index = sliderDivs.length - numElementosVisibles;
    } else if (index >= sliderDivs.length - numElementosVisibles + 1) {
        index = 0;
    }
    let desplazamiento = -index * slideWidth;
    slider.style.transform = `translateX(${desplazamiento}px)`;
}
divSlider(0);




