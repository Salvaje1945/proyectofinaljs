// ELEMENTOS DEL DOM

//const $docBody = document.getElementsByTagName('body')

const $contenedorPag = document.querySelector('#contenedor')

const $btnHamb = document.querySelector('#cabeza__menu--btn')

const $menuHamb = document.querySelector('#cabeza__menu')

const $menuHambCrr = document.querySelector('#cabeza__menu--crr')

const $menuAnun = document.querySelector('#cabeza__anun')

const $menuDir = document.querySelector('#cabeza__dir')

const $menuDirDwn = document.querySelector('#cabeza__dir--cerrado')

const $menuDirUp = document.querySelector('#cabeza__dir--abierto')

// VARIABLES

// FUNCIONES

function abrirMenuHamb () {
    $menuHamb.classList.add('activo')
    //$menuHambCrr.classList.add('abierto')
    document.getElementById('cabeza__menu--crr').onclick = cerrarMenuHamb
    //document.getElementById('contenido').onclick = cerrarMenuHamb

}

function cerrarMenuHamb () {
    $menuHamb.classList.remove('activo')
    //$menuHambCrr.classList.remove('abierto')
}

function abrirMenuAnun () {
    $menuAnun.classList.add('activo')
}

function cerrarMenuAnun () {
    $menuAnun.classList.remove('activo')  
}

function abrirMenuDir () {
    $menuDir.classList.add('activo')
    $menuDirDwn.classList.remove('activo')
    $menuDirUp.classList.add('activo')
    //document.getElementById('contenido').onclick = cerrarMenuDir
    //document.getElementById('cabeza__dir').onclick = cerrarMenuDir
    document.getElementById('cabeza__dir--crr').onclick = cerrarMenuDir
}

function cerrarMenuDir () {
    $menuDir.classList.remove('activo')
    $menuDirDwn.classList.add('activo')
    $menuDirUp.classList.remove('activo')
    //document.getElementById('cabeza__dir--btn').onclick = abrirMenuDir
}

// EJECUCIÓN

document.getElementById('cabeza__menu--btn').onclick = abrirMenuHamb
document.getElementById('cabeza__anun--btn').onclick = abrirMenuAnun
document.getElementById('cabeza__anun--cer').onclick = cerrarMenuAnun
document.getElementById('cabeza__dir--btn').onclick = abrirMenuDir



//$btnHamb.addEventListener('click', abrirMenuHamb)
//$contenedorPag.addEventListener('click', cerrarMenuHamb)
