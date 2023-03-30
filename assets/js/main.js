function obtenerMasVendidos(productos) {
    const ordenados = productos.sort((a, b) => b.vendidos - a.vendidos)
    return ordenados.slice(0, 7)
}

const masVendidos = obtenerMasVendidos(productos)
console.log(masVendidos)
for (const masPopular of masVendidos) {
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
