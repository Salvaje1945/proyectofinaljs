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

const $menuAnunBtnAnim = document.querySelector('#cabeza__anun--btn_anim')

const $menuAnunInfoNove = document.querySelector('#cabeza__anun--nove_info')

const $menuAnunInfoProm = document.querySelector('#cabeza__anun--prom_info')

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

function abrirMenuAnun () {
    $menuAnun.classList.add('activo')
    anunNove()
}

function cerrarMenuAnun () {
    $menuAnun.classList.remove('activo')  
}

function anunNove () {
    if($menuAnunInfoProm.classList.contains('activo') && $menuAnunBtnAnim.classList.contains('promociones')){
        $menuAnunInfoProm.classList.remove('activo')
        $menuAnunInfoNove.classList.add('activo')
        $menuAnunBtnAnim.classList.remove('promociones')
        $menuAnunBtnAnim.classList.add('novedades')
    }
}

function anunProm () {
    if($menuAnunInfoNove.classList.contains('activo') && $menuAnunBtnAnim.classList.contains('novedades')){
        $menuAnunInfoNove.classList.remove('activo')
        $menuAnunInfoProm.classList.add('activo')
        $menuAnunBtnAnim.classList.remove('novedades')
        $menuAnunBtnAnim.classList.add('promociones')
    }
}

// EJECUCIÓN

document.getElementById('cabeza__menu--btn').onclick = abrirMenuHamb
document.getElementById('cabeza__anun--btn').onclick = abrirMenuAnun
document.getElementById('cabeza__anun--cer').onclick = cerrarMenuAnun
document.getElementById('cabeza__dir--btn').onclick = abrirMenuDir
document.getElementById('cabeza__anun--nove').onclick = anunNove
document.getElementById('cabeza__anun--prom').onclick = anunProm




//$btnHamb.addEventListener('click', abrirMenuHamb)
//$contenedorPag.addEventListener('click', cerrarMenuHamb)
