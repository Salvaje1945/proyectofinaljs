// FUNCIONES

function abrirMenuHamb () {
    $('#desplegable__backdrop').classList.add('activo')
    $('#cabeza__menu').classList.add('activo')
    $('#cabeza__menu--crr').onclick = cerrarMenuHamb
}

function cerrarMenuHamb () {
    $('#cabeza__menu').classList.remove('activo')
    $('#desplegable__backdrop').classList.remove('activo')
}

function abrirMenuDir () {
    $('#desplegable__backdrop').classList.add('activo')
    $('#cabeza__dir').classList.add('activo')
    $('#cabeza__dir--cerrado').classList.remove('activo')
    $('#cabeza__dir--abierto').classList.add('activo')
    $('#cabeza__dir--crr').onclick = cerrarMenuDir
}

function cerrarMenuDir () {
    $('#desplegable__backdrop').classList.remove('activo')
    $('#cabeza__dir').classList.remove('activo')
    $('#cabeza__dir--cerrado').classList.add('activo')
    $('#cabeza__dir--abierto').classList.remove('activo')
}

function abrirMenuAnun () {
    $('#cabeza__anun').classList.add('activo')
    anunNove()
}

function cerrarMenuAnun () {
    $('#cabeza__anun').classList.remove('activo')  
}

function anunNove () {
    if($('#cabeza__anun--prom_info').classList.contains('activo') && $('#cabeza__anun--btn_anim').classList.contains('promociones')){
        $('#cabeza__anun--prom_info').classList.remove('activo')
        $('#cabeza__anun--nove_info').classList.add('activo')
        $('#cabeza__anun--btn_anim').classList.remove('promociones')
        $('#cabeza__anun--btn_anim').classList.add('novedades')
    }
}

function anunProm () {
    if($('#cabeza__anun--nove_info').classList.contains('activo') && $('#cabeza__anun--btn_anim').classList.contains('novedades')){
        $('#cabeza__anun--nove_info').classList.remove('activo')
        $('#cabeza__anun--prom_info').classList.add('activo')
        $('#cabeza__anun--btn_anim').classList.remove('novedades')
        $('#cabeza__anun--btn_anim').classList.add('promociones')
    }
}

// EJECUCIÓN

$('#cabeza__menu--btn').onclick = abrirMenuHamb
$('#cabeza__anun--btn').onclick = abrirMenuAnun
$('#cabeza__anun--cer').onclick = cerrarMenuAnun
$('#cabeza__dir--btn').onclick = abrirMenuDir
$('#cabeza__anun--nove').onclick = anunNove
$('#cabeza__anun--prom').onclick = anunProm