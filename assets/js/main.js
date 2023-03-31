if($('#inicio')){

// MOSTRAR LOS MÁS VENDIDOS

    function mostrarMasVendIdx() {

        function masVendidosIndex(productos) {
            const ordenados = productos.sort((a, b) => b.vendidos - a.vendidos)
            return ordenados.slice(0, 7)
        }
    
        const indexMasVendidos = masVendidosIndex(productos)
        //console.log(indexMasVendidos)
        for (const masPopular of indexMasVendidos) {
            elProd = document.createElement('div')
            elProd.id = `contenido__populares--prod${masPopular.id}`
            elProd.className = 'contenido__populares--box'
            elProd.innerHTML = `<div class="contenido__populares--box_img">
                                    <img class="populares__box--foto" src="${masPopular.foto}">
                                    <img class="populares__box--cabecera" src="${masPopular.cabecera}">
                                </div>
                                <div class="contenido__populares--box_txt">
                                    <h2>${masPopular.nombre}</h2>
                                    <h3><span><i class="fa-solid fa-star"></i></span>${masPopular.puntuacion}</h3>
                                    <p>$${masPopular.precio}</p>
                                    <p>Envío $200</p>
                                </div>`
            $('#contenido-populares').appendChild(elProd)
        }
    }
    
    // EJECUCIÓN
    
    mostrarMasVendIdx()
}
/*
if($('#flores')){

    function mostrarMasVendFlor() {

        function masVendidosFlor(productos) {
            const filtrados = productos.filter(producto => producto.idc === 1)
            const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
            return ordenados.slice(0, 7)
        }
    
        const floresMasVendidos = masVendidosFlor(productos)
        console.log(floresMasVendidos)
        for (const masVendido of floresMasVendidos) {
            elProd = document.createElement('div')
            elProd.id = `contenido__populares--prod${masVendido.id}`
            elProd.className = 'contenido__masvendidos--box'
            elProd.innerHTML = `<div class="contenido__masvendidos--box_img">
                                    <div class="masvendidos__box--img_ico">
                                        <span><i class="fa-regular fa-heart"></i></span>
                                    </div>
                                    <img class="masvendidos__box--img_foto" src="${masVendido.foto}">
                                </div>
                                <div class="contenido__masvendidos--txt">
                                    <h1>${masVendido.nombre}</h1>
                                    <div class="masvendidos__txt--bttm">
                                        <p>$${masVendido.precio}</p>
                                        <div>
                                            <span><i class="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>`
            $('#flores__contenido--masvendidos').appendChild(elProd)
        }
    }

    function mostrarProdsTodos() {

        function todosLosRamos(productos) {
            const filtrados = productos.filter(producto => producto.idc === 1)
            //const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
            return filtrados
        }

        const losRamos = todosLosRamos(productos)
        console.log(losRamos)
        for (const ramo of losRamos) {
            elProd = document.createElement('div')
            elProd.id = `contenido__prodstodos--prod${ramo.id}`
            elProd.className = 'contenido__prodstodos--box'
            elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                    <img class="prodstodos__box--foto" src="${ramo.foto}">
                                    <img class="prodstodos__box--cabecera" src="${ramo.cabecera}">
                                </div>
                                <div class="contenido__prodstodos--box_txt">
                                    <h2>${ramo.nombre} (${ramo.tipo})</h2>
                                    <h3><span><i class="fa-solid fa-star"></i></span>${ramo.puntuacion}</h3>
                                    <p>$${ramo.precio}</p>
                                    <p>Envío $200</p>
                                </div>`
            $('#contenido-prodstodos').appendChild(elProd)
        }
    }
    
    // EJECUCIÓN
    
    mostrarMasVendFlor()

    mostrarProdsTodos()
}
*/

