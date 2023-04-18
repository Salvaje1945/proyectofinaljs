// FUNCIÓN PARA ELEMENTOS DEL DOM

function $ (id) {
    return document.querySelector(id)
}

// GENERADOR DE NÚMEROS ALEATORIOS DE 13 CÍFRAS

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function fechaFormato (min, max) {
    let elNumero
    const numBase = random(min, max)
    const numCadena = numBase.toString()
    if (numCadena.length === 1) {
        const cadenaNumCompleto = '0' + numCadena
        elNumero = cadenaNumCompleto
    } else {
        elNumero = numCadena
    }
    return elNumero
}

// const elDia = fechaFormato(1, 31)
// const elMes = fechaFormato(1, 12)
// const elAno = fechaFormato(2020, 2023)
// const laHora = fechaFormato(0, 23)
// const minsYsegs = fechaFormato(0, 59)

// PASAR MOMENT.JS A ESPAÑOL Y DAR FORMATO A LAS FECHAS

moment.locale('es')

const FECHA_FORMATO = 'YYYY-MM-DD HH:mm:ss'

// CATEGORÍAS Y PRODUCTOS

let categorias = [
    {
        id: 1,
        nombre: 'Flores',
        cabecera: 'assets/img/categs/cabecera/flores.jpg',
        mini: 'assets/img/categs/mini/flores.jpg'
    },
    {
        id: 2,
        nombre: 'Arreglos Florales',
        cabecera: 'assets/img/categs/cabecera/arreglos-florales.jpg',
        mini: 'assets/img/categs/mini/arreglos-florales.jpg'
    },
    {
        id: 3,
        nombre: 'Plantas',
        cabecera: 'assets/img/categs/cabecera/plantas.jpg',
        mini: 'assets/img/categs/mini/plantas.jpg'
    },
    {
        id: 4,
        nombre: 'Insumos',
        cabecera: 'assets/img/categs/cabecera/insumos.jpg',
        mini: 'assets/img/categs/mini/insumos.jpg'
    }
]

let productos = [
    // RAMOS DE FLORES
    {
        id: 1,
        idc: 1,
        nombre: 'Rosas rosadas',
        desc: 'Ramo de 6 rosas color rosa sin espinas',
        tipo: 'Ramos básicos',
        precio: 3000,
        vendidos: 3500,
        puntuacion: 5,
        //keywords: 'flores, ramos, ramos básicos, ramos basicos, baratos, rosas, rosadas, rosas rosadas, ramo de rosas, ramos de rosas, regalos, novias, aniversarios, primavera, sin espinas',
        cabecera: 'assets/img/productos/cabecera/rosas-rosas.jpg',
        foto: 'assets/img/productos/foto/ramo-rosas-rosas.jpg'
    },
    {
        id: 2,
        idc: 1,
        nombre: 'Rosas rosadas',
        desc: 'Ramo de 12 rosas color rosa sin espinas',
        tipo: 'Ramos especiales',
        precio: 6000,
        vendidos: 2400,
        puntuacion: 4.2,
        //keywords: 'flores, ramos, ramos especiales, ramos premium, rosas, rosadas, rosas rosadas, ramo de rosas, ramos de rosas, regalos, novias, aniversarios, primavera, sin espinas',
        cabecera: 'assets/img/productos/cabecera/rosas-rosas.jpg',
        foto: 'assets/img/productos/foto/ramo-rosas-rosas.jpg'
    },
    {
        id: 3,
        idc: 1,
        nombre: 'Rosas rojas',
        desc: 'Ramo de 6 rosas coloradas sin espinas',
        tipo: 'Ramos básicos',
        precio: 2500,
        vendidos: 7400,
        puntuacion: 3.2,
        //keywords: 'flores, ramos, ramos básicos, ramos basicos, rosas, rosadas, rosas rosadas, ramo de rosas, ramos de rosas, regalos, novias, aniversarios, primavera, sin espinas',
        cabecera: 'assets/img/productos/cabecera/rosas-rojas.jpg',
        foto: 'assets/img/productos/foto/ramo-rosas-rojas.jpg'
    },
    {
        id: 4,
        idc: 1,
        nombre: 'Rosas rojas',
        desc: 'Ramo de 12 rosas coloradas sin espinas',
        tipo: 'Ramos especiales',
        precio: 5000,
        vendidos: 7900,
        puntuacion: 4.6,
        cabecera: 'assets/img/productos/cabecera/rosas-rojas.jpg',
        foto: 'assets/img/productos/foto/ramo-rosas-rojas.jpg'
    },
    {
        id: 5,
        idc: 1,
        nombre: 'Rosas blancas',
        desc: 'Ramo de 6 rosas blancas sin espinas',
        tipo: 'Ramos básicos',
        precio: 3500,
        vendidos: 2000,
        puntuacion: 5,
        cabecera: 'assets/img/productos/cabecera/rosas-blancas.jpg',
        foto: 'assets/img/productos/foto/ramo-rosas-blancas.jpg'
    },
    {
        id: 6,
        idc: 1,
        nombre: 'Rosas blancas',
        desc: 'Ramo de 12 rosas blancas sin espinas',
        tipo: 'Ramos especiales',
        precio: 7000,
        vendidos: 2654,
        puntuacion: 3.2,
        cabecera: 'assets/img/productos/cabecera/rosas-blancas.jpg',
        foto: 'assets/img/productos/foto/ramo-rosas-blancas.jpg'
    },
    {
        id: 7,
        idc: 1,
        nombre: 'Rosas surtidas',
        desc: 'Ramo de 18 rosas surtidas sin espinas',
        tipo: 'Ramos especiales',
        precio: 9000,
        vendidos: 1654,
        puntuacion: 4,
        cabecera: 'assets/img/productos/cabecera/rosas-surtidas.jpg',
        foto: 'assets/img/productos/foto/ramo-rosas-surtidas.jpg'
    },
    {
        id: 8,
        idc: 1,
        nombre: 'Lilium',
        desc: 'Ramo de 6 Lilium sin espinas',
        tipo: 'Ramos básicos',
        precio: 2500,
        vendidos: 1600,
        puntuacion: 4.9,
        cabecera: 'assets/img/productos/cabecera/lilium.jpg',
        foto: 'assets/img/productos/foto/ramo-lilium.jpg'
    },
    {
        id: 9,
        idc: 1,
        nombre: 'Lilium',
        desc: 'Ramo de 12 Lilium sin espinas',
        tipo: 'Ramos especiales',
        precio: 5000,
        vendidos: 1968,
        puntuacion: 4.3,
        cabecera: 'assets/img/productos/cabecera/lilium.jpg',
        foto: 'assets/img/productos/foto/ramo-lilium.jpg'
    },
    {
        id: 10,
        idc: 1,
        nombre: 'Fresias',
        desc: 'Ramo de 6 fresias sin espinas',
        tipo: 'Ramos básicos',
        precio: 2200,
        vendidos: 5090,
        puntuacion: 3.9,
        cabecera: 'assets/img/productos/cabecera/fresias.jpg',
        foto: 'assets/img/productos/foto/ramo-fresias.jpg'
    },        
    {
        id: 11,
        idc: 1,
        nombre: 'Fresias',
        desc: 'Ramo de 12 fresias sin espinas',
        tipo: 'Ramos especiales',
        precio: 4400,
        vendidos: 6259,
        puntuacion: 4.7,
        cabecera: 'assets/img/productos/cabecera/fresias.jpg',
        foto: 'assets/img/productos/foto/ramo-fresias.jpg'
    },        
    {
        id: 12,
        idc: 1,
        nombre: 'Jazmines',
        desc: 'Ramo de 6 jazmines sin espinas',
        tipo: 'Ramos básicos',
        precio: 3000,
        vendidos: 5010,
        puntuacion: 4,
        cabecera: 'assets/img/productos/cabecera/jazmines.jpg',
        foto: 'assets/img/productos/foto/ramo-jazmines.jpg'
    },
    {
        id: 13,
        idc: 1,
        nombre: 'Jazmines',
        desc: 'Ramo de 12 jazmines sin espinas',
        tipo: 'Ramos especiales',
        precio: 6000,
        vendidos: 6129,
        puntuacion: 5,
        cabecera: 'assets/img/productos/cabecera/jazmines.jpg',
        foto: 'assets/img/productos/foto/ramo-jazmines.jpg'
    },
    {
        id: 14,
        idc: 1,
        nombre: 'Girasoles',
        desc: 'Ramo de 3 girasoles sin espinas',
        tipo: 'Ramos básicos',
        precio: 2900,
        vendidos: 1010,
        puntuacion: 4.1,
        cabecera: 'assets/img/productos/cabecera/girasoles.jpg',
        foto: 'assets/img/productos/foto/ramo-girasoles.jpg'
    },
    {
        id: 15,
        idc: 1,
        nombre: 'Girasoles',
        desc: 'Ramo de 6 girasoles sin espinas',
        tipo: 'Ramos especiales',
        precio: 5800,
        vendidos: 2129,
        puntuacion: 4.3,
        cabecera: 'assets/img/productos/cabecera/girasoles.jpg',
        foto: 'assets/img/productos/foto/ramo-girasoles.jpg'
    },
    // ARREGLOS FLORALES
    {
        id: 16,
        idc: 2,
        nombre: 'Canasta floral',
        desc: 'Canasta de flores estilo campestre. Regalo ideal para todo tipo de ocasión.',
        tipo: 'Regalos',
        precio: 9800,
        vendidos: 3659,
        puntuacion: 5,
        cabecera: 'assets/img/productos/cabecera/arreglos-regalos-canasta.jpg',
        foto: 'assets/img/productos/foto/arreglos-regalos-canasta.jpg'
    },
    {
        id: 17,
        idc: 2,
        nombre: 'Cumpleaños',
        desc: 'Elegante jarrón plástico con motivo de cumpleaños. Incluye 18 hermosas rosas rosadas y tarjeta de felicitación',
        tipo: 'Regalos',
        precio: 19000,
        vendidos: 4695,
        puntuacion: 5,
        cabecera: 'assets/img/productos/cabecera/arreglos-regalos-cumple.jpg',
        foto: 'assets/img/productos/foto/arreglos-regalos-cumple.jpg'
    },
    {
        id: 18,
        idc: 2,
        nombre: 'San Valentín',
        desc: 'Elegante jarrón plástico decorado con motivos románticos. Incluye 18 hermosas rosas surtidas y tarjeta de felicitación. Ideal para regalar en San Valentín o aniversarios.',
        tipo: 'Regalos',
        precio: 21000,
        vendidos: 6854,
        puntuacion: 4.5,
        cabecera: 'assets/img/productos/cabecera/arreglos-regalos-sanvalentin.jpg',
        foto: 'assets/img/productos/foto/arreglos-regalos-sanvalentin.jpg'
    },
    {
        id: 19,
        idc: 2,
        nombre: 'Centro de mesa',
        desc: 'Elegante jarrón blanco de material con 12 hermosas y finas flores surtidas (rosas rosadas, lilium y jazmines).',
        tipo: 'Casamientos',
        precio: 7000,
        vendidos: 10854,
        puntuacion: 3.2,
        cabecera: 'assets/img/productos/cabecera/arreglos-casamiento-centromesa.jpg',
        foto: 'assets/img/productos/foto/arreglos-casamiento-centromesa.jpg'
    },
    {
        id: 20,
        idc: 2,
        nombre: 'Ramo de novia',
        desc: 'Finísimo y elaborado ramo para novia compuesto por 12 rosas rosadas y 12 jazmines importados de la más alta calidad cuidadosamente mezclados con elegante decoración verde.',
        tipo: 'Casamientos',
        precio: 25000,
        vendidos: 4598,
        puntuacion: 4.8,
        cabecera: 'assets/img/productos/cabecera/arreglos-casamiento-ramonovia.jpg',
        foto: 'assets/img/productos/foto/arreglos-casamiento-ramonovia.jpg'
    },
    {
        id: 21,
        idc: 2,
        nombre: 'Altar floral',
        desc: 'Hermoso altar floral para casamientos en exteriores.',
        tipo: 'Casamientos',
        precio: 95000,
        vendidos: 598,
        puntuacion: 4.4,
        cabecera: 'assets/img/productos/cabecera/arreglos-casamiento-altar.jpg',
        foto: 'assets/img/productos/foto/arreglos-casamiento-altar.jpg'
    },
    {
        id: 22,
        idc: 2,
        nombre: 'Cubre cajón',
        desc: 'Fino arreglo floral fúnebre para cobertura de féretro compuesto por 18 rosas blancas importadas de la más alta calidad.',
        tipo: 'Velorios',
        precio: 15000,
        vendidos: 1548,
        puntuacion: 3.7,
        cabecera: 'assets/img/productos/cabecera/arreglos-velorios-cubrecajon.jpg',
        foto: 'assets/img/productos/foto/arreglos-velorios-cubrecajon.jpg'
    },
    {
        id: 23,
        idc: 2,
        nombre: 'Corona americana',
        desc: 'Corona funeraria tipo americana.',
        tipo: 'Velorios',
        precio: 9000,
        vendidos: 2659,
        puntuacion: 4.6,
        cabecera: 'assets/img/productos/cabecera/arreglos-velorios-corona.jpg',
        foto: 'assets/img/productos/foto/arreglos-velorios-corona.jpg'
    },
    {
        id: 24,
        idc: 2,
        nombre: 'Cruz floral',
        desc: 'Elegante y fina cruz cristiana compuesta por rosas blancas y rojas.',
        tipo: 'Velorios',
        precio: 12000,
        vendidos: 4659,
        puntuacion: 4.9,
        cabecera: 'assets/img/productos/cabecera/arreglos-velorios-cruz.jpg',
        foto: 'assets/img/productos/foto/arreglos-velorios-cruz.jpg'
    },
    // PLANTAS
    {
        id: 25,
        idc: 3,
        nombre: 'Ficus',
        desc: 'El ficus es una de las plantas de interior más populares gracias a su forma de arbolito. Además mejora la calidad del aire, y aporta ese toque verde perfecto.',
        tipo: 'Interior',
        precio: 5300,
        vendidos: 3256,
        puntuacion: 5,
        cabecera: 'assets/img/productos/cabecera/plantas-interior.jpg',
        foto: 'assets/img/productos/foto/plantas-interior-ficus.jpg'
    },
    {
        id: 26,
        idc: 3,
        nombre: 'Pothus',
        desc: 'El Pothus (Epipremnum aureum), planta nativa del sudeste asiático, es una liana que tiene la característica de trepar mediante raíces aereas. Sus hojas son de color verde intenso con variaciones, según la planta.',
        tipo: 'Interior',
        precio: 3000,
        vendidos: 2568,
        puntuacion: 5,
        cabecera: 'assets/img/productos/cabecera/plantas-interior.jpg',
        foto: 'assets/img/productos/foto/plantas-interior-pothus.jpg'
    },
    {
        id: 27,
        idc: 3,
        nombre: 'Estrella Federal',
        desc: 'La Euphorbia pulcherrima, llamada popularmente Flor de Pascua o Estrella Federal es reconocida por sus brácteas rojas, rosas, blancas o amarillentas que adornan la parte superior de la planta, y que suelen ser confundidas con flores.',
        tipo: 'Interior',
        precio: 3500,
        vendidos: 4568,
        puntuacion: 4.9,
        cabecera: 'assets/img/productos/cabecera/plantas-interior.jpg',
        foto: 'assets/img/productos/foto/plantas-interior-estrella.jpg'
    },
    {
        id: 28,
        idc: 3,
        nombre: 'Aloe Vera',
        desc: 'El Aloe Vera es una planta suculenta perenne que acumula el agua en sus hojas. Se suele conocer también como acíbar, áloe de Barbados o sábila. Pertenece a la familia de las Xanthorrhoeaceae. Sus hojas son carnosas, alcanzan los 7 cm de grosor y contienen Aloína, que se utiliza en la industria farmacéutica y protege a la planta por su sabor amargo.',
        tipo: 'Exterior',
        precio: 1600,
        vendidos: 2568,
        puntuacion: 4.8,
        cabecera: 'assets/img/productos/cabecera/plantas-exterior.jpg',
        foto: 'assets/img/productos/foto/plantas-exterior-aloe.jpg'
    },
    {
        id: 29,
        idc: 3,
        nombre: 'Azalea simple',
        desc: 'La azalea simple es una de las plantas más utilizadas en jardinería por la belleza de sus flores. Sin embargo también es una de las especies más exigentes. Las azaleas crecen como arbustos y tienen una floración muy abundante en toda la planta. Sus flores son grandes y tienen colores variados, frecuentemente en tonos rojos, rosas y blancos. Por ello son muy usadas como plantas ornamentales.',
        tipo: 'Exterior',
        precio: 3700,
        vendidos: 3589,
        puntuacion: 4.5,
        cabecera: 'assets/img/productos/cabecera/plantas-exterior.jpg',
        foto: 'assets/img/productos/foto/plantas-exterior-azalea.jpg'
    },
    {
        id: 30,
        idc: 3,
        nombre: 'Jazmin chino',
        desc: 'El Jazmin Chino (Jasminum polianthus) es una enredadera de follaje perenne. Posee una floración intensa y perfumada que se produce desde fines del invierno. Las hojas son de color verde oscuro. Sus pimpollos, son de color púrpura oscuro, se tornan rosados a medida que las flores van abriéndose hasta quedar blancas.',
        tipo: 'Exterior',
        precio: 3000,
        vendidos: 2541,
        puntuacion: 3.7,
        cabecera: 'assets/img/productos/cabecera/plantas-exterior.jpg',
        foto: 'assets/img/productos/foto/plantas-exterior-jazminchino.jpg'
    },
    {
        id: 31,
        idc: 3,
        nombre: 'Cactus cerebro',
        desc: 'Cactus con una mutación natural que provoca la pérdida de su simetría radial, dando como resultado crestas que se enroscan sobre sí mismas.',
        tipo: 'Cáctus',
        precio: 980,
        vendidos: 256,
        puntuacion: 4.6,
        cabecera: 'assets/img/productos/cabecera/plantas-cactus.jpg',
        foto: 'assets/img/productos/foto/plantas-cactus-cerebro.jpg'
    },
    {
        id: 32,
        idc: 3,
        nombre: 'Estapelia',
        desc: 'Planta suculenta que forma una mata que avanza hacia los costados, con tallos dentados verticales de hasta 25 cm de alto. Resiste sol, viento, y riegos moderados. Se torna rojiza a pleno sol.',
        tipo: 'Cáctus',
        precio: 890,
        vendidos: 125,
        puntuacion: 4.7,
        cabecera: 'assets/img/productos/cabecera/plantas-cactus.jpg',
        foto: 'assets/img/productos/foto/plantas-cactus-estapelia.jpg'
    },
    {
        id: 33,
        idc: 3,
        nombre: 'Grusonii',
        desc: 'Cactus con espinas amarillas muy marcadas, que crece como un barril de hasta 50 cm de diámetro. Es nativo del noreste de México.',
        tipo: 'Cáctus',
        precio: 6800,
        vendidos: 985,
        puntuacion: 4.5,
        cabecera: 'assets/img/productos/cabecera/plantas-cactus.jpg',
        foto: 'assets/img/productos/foto/plantas-cactus-grusonii.jpg'
    },
    //INSUMOS
    {
        id: 34,
        idc: 4,
        nombre: 'Semillas AS',
        desc: 'Variedades: Acelga verde, Achicoria, Achicoria hoja ancha, Albahaca, Berenjena violeta, Brócoli, Cebolla blanca, Cebolla colorada, Cebolla morada, Escarola, Espinaca, Pepino verde, Perejil, Poroto enano, Tomate cherry, Zanahoria, Zapallo anco.',
        tipo: 'Semillas',
        precio: 300,
        vendidos: 3985,
        puntuacion: 4.1,
        cabecera: 'assets/img/productos/cabecera/insumos-semillas.jpg',
        foto: 'assets/img/productos/foto/insumos-semillas-as.jpg'
    },
    {
        id: 35,
        idc: 4,
        nombre: 'Semillas Letho',
        desc: 'Variedades: Achicoria, Albahaca, Berenjena, Cebolla de verdeo, Cebolla morada, Cilantro, Coliflor, Pimiento, Rabanito, Tomate platense, Tomate redondo, Zanahoria, Zapallo anco, Zapallo redondo de tronco, Zapallo zucchini.',
        tipo: 'Semillas',
        precio: 700,
        vendidos: 2546,
        puntuacion: 4.3,
        cabecera: 'assets/img/productos/cabecera/insumos-semillas.jpg',
        foto: 'assets/img/productos/foto/insumos-semillas-letho.jpg'
    },
    {
        id: 36,
        idc: 4,
        nombre: 'Maceta Blum cilindro con borde',
        desc: 'Las Macetas de Terracota de Blum, se caracterizan por su calidad y diseño, lo que la convierten en líder y referente del mercado nacional de macetas de barro y en la opción ideal, tanto para el jardín como para el interior del hogar.',
        tipo: 'Macetas',
        precio: 760,
        vendidos: 3598,
        puntuacion: 4.9,
        cabecera: 'assets/img/productos/cabecera/insumos-macetas.jpg',
        foto: 'assets/img/productos/foto/insumos-macetas-blumcilindro.jpg'
    },
    {
        id: 37,
        idc: 4,
        nombre: 'Maceta Blum común',
        desc: 'Las Macetas de Terracota de Blum, se caracterizan por su calidad y diseño, lo que la convierten en líder y referente del mercado nacional de macetas de barro y en la opción ideal, tanto para el jardín como para el interior del hogar.',
        tipo: 'Macetas',
        precio: 320,
        vendidos: 5685,
        puntuacion: 4.5,
        cabecera: 'assets/img/productos/cabecera/insumos-macetas.jpg',
        foto: 'assets/img/productos/foto/insumos-macetas-blumcomun.jpg'
    },
    {
        id: 38,
        idc: 4,
        nombre: 'Maceta TA París',
        desc: 'Las macetas TA París son ideales para completar la decoración de interiores y de exteriores ya que están disponibles en una variedad de colores de moda. Son ligeras y fáciles de mover por lo que cambiar la ubicación de tus plantas no será un problema.',
        tipo: 'Macetas',
        precio: 600,
        vendidos: 2354,
        puntuacion: 4.4,
        cabecera: 'assets/img/productos/cabecera/insumos-macetas.jpg',
        foto: 'assets/img/productos/foto/insumos-macetas-taparis.jpg'
    },
    {
        id: 39,
        idc: 4,
        nombre: 'Tierra abonada Loma Verde',
        desc: 'Se utiliza en la plantación plantines, arbustos y arboles. También para cubrir semillas de césped en la siembra. Al colocar el césped en panes alfombra, incorporar en las juntas para facilitar la unión. Se puede utilizar también para mejorar la tierra de la huerta y la de arboles frutales.',
        tipo: 'Tierras',
        precio: 850,
        vendidos: 1265,
        puntuacion: 3,
        cabecera: 'assets/img/productos/cabecera/insumos-tierras.jpg',
        foto: 'assets/img/productos/foto/insumos-tierras-abonada.jpg'
    },
    {
        id: 40,
        idc: 4,
        nombre: 'Compost Neutro Loma Verde',
        desc: 'El Compost Neutro Loma Verde se utiliza para mejorar la calidad de la tierra al incorporar materia orgánica. Aumenta la aireación y la capacidad de retener el agua del suelo, facilitando el desarrollo de las raíces y la disponibilidad de agua para las mismas. Este sustrato tiene un Ph adecuado y está indicado en la preparación del sustrato de maceteros y canteros, y en la plantación de plantines, árboles y arbustos. Así como también para la colocación de césped y la preparación de la huerta.',
        tipo: 'Tierras',
        precio: 350,
        vendidos: 2546,
        puntuacion: 4.9,
        cabecera: 'assets/img/productos/cabecera/insumos-tierras.jpg',
        foto: 'assets/img/productos/foto/insumos-tierras-compostneutro.jpg'
    },
    {
        id: 41,
        idc: 4,
        nombre: 'Humus De Lombriz',
        desc: 'El Humus de Lombriz es un componente orgánico obtenido de la digestión que las lombrices rojas californianas producen ingiriendo residuos naturales. Este sustrato es un excelente restaurador del suelo, ya que va devolviendo a la tierra, los elementos esenciales que utilizan las plantas, y a la vez mejorando la estructura física del mismo.El humus también acelera la germinación, a la vez que el desarrollo aéreo (foliar y floral) y el desarrollo radicular. Para su aplicación se recomiendo esparcir el sustrato directamente sobre la tierra, bien distribuido y regar abundantemente, nunca enterrarlo ya que las bacterias que debe incorporarse al suelo necesitan oxígeno.',
        tipo: 'Tierras',
        precio: 450,
        vendidos: 3254,
        puntuacion: 4.5,
        cabecera: 'assets/img/productos/cabecera/insumos-tierras.jpg',
        foto: 'assets/img/productos/foto/insumos-tierras-humus.jpg'
    },
    {
        id: 42,
        idc: 4,
        nombre: 'Fertifox Activador De Floración',
        desc: 'Fertifox activador de floración aumenta la cantidad y calidad de flores y frutos. Mejora la pigmentación, otorgando colores más intensos. Evita que las flores y frutos caigan prematuramente. Provee una alimentación completa para el ciclo floral. Fertifox activador de floración es recomendado por el fabricante para frutales, rosas, azalea, jazmines, claveles.',
        tipo: 'Fertilizantes',
        precio: 1150,
        vendidos: 1256,
        puntuacion: 4.4,
        cabecera: 'assets/img/productos/cabecera/insumos-fertilizantes.jpg',
        foto: 'assets/img/productos/foto/insumos-fertilizantes-floracion.jpg'
    },
    {
        id: 43,
        idc: 4,
        nombre: 'Fertifox Activador De Follaje',
        desc: 'Fertifox activador de follaje, es un fertilizante líquido ideal para fomentar el crecimiento de hojas, tallos y la floración de todo tipo de plantas de interior y exterior. Mejora el color, textura, resistencia y crecimiento de las plantas. Estimula el crecimiento de brotes sanos. Fertifox activador de follaje provee una completa alimentación que favorece la sanidad vegetal. Los fertilizantes líquidos usados como complemento en fumigaciones para control de plagas en espacios verdes, potencian la acción insecticida y fungicida sin elevar las dosis de aplicación.',
        tipo: 'Fertilizantes',
        precio: 1150,
        vendidos: 1216,
        puntuacion: 2,
        cabecera: 'assets/img/productos/cabecera/insumos-fertilizantes.jpg',
        foto: 'assets/img/productos/foto/insumos-fertilizantes-follaje.jpg'
    },
    {
        id: 44,
        idc: 4,
        nombre: 'Fertifox Potenciado',
        desc: 'Fertifox potenciado es ideal para plantas debilitadas (interior y exterior) y cultivo de alta exigencia (bonsái, orquídeas, cactus, cítricos, césped). La adecuada combinación de nutrientes con hormonas vegetales hacen que Fertifox potenciado: Fertifox potenciado mejora la pigmentación y textura de las hojas y flores, Incentive el crecimiento de raíces y brotes, Provea de una alimentación completa a todo tipo de plantas.',
        tipo: 'Fertilizantes',
        precio: 1150,
        vendidos: 1758,
        puntuacion: 2.1,
        cabecera: 'assets/img/productos/cabecera/insumos-fertilizantes.jpg',
        foto: 'assets/img/productos/foto/insumos-fertilizantes-potenciado.jpg'
    }
]

// BÚSQUEDAS ARTIFICIALES PARA GENERAR "BÚSQUEDAS POPULARES"

const busquedasArtificiales = [
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'velorios A',
        categ: 0,
        fecha: `${fechaFormato(2020, 2023)}-${fechaFormato(1, 12)}-${fechaFormato(1, 31)} ${fechaFormato(0, 23)}:${fechaFormato(0, 59)}:${fechaFormato(0, 59)}`
        //fecha: '2023-02-21 11:11:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'velorios',
        categ: 0,
        fecha: '2022-05-21 18:55:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'velorios',
        categ: 0,
        fecha: '2023-03-09 14:21:06'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'velorios',
        categ: 0,
        fecha: '2023-03-09 14:21:06'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Novia',
        categ: 0,
        fecha: '2023-02-21 11:11:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Novia',
        categ: 0,
        fecha: '2022-05-21 18:55:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Novia',
        categ: 0,
        fecha: '2023-03-09 14:21:06'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Novia',
        categ: 0,
        fecha: '2023-03-09 14:21:06'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Novia',
        categ: 0,
        fecha: '2023-03-09 14:21:06'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Novia',
        categ: 0,
        fecha: '2023-03-09 14:21:06'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'San Valentín',
        categ: 0,
        fecha: '2020-02-21 11:11:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'San Valentín',
        categ: 0,
        fecha: '2021-08-01 08:42:16'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'San Valentín',
        categ: 0,
        fecha: '2019-12-21 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas',
        categ: 0,
        fecha: '2023-04-01 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas',
        categ: 0,
        fecha: '2019-12-21 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'girasoles',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'girasoles',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'girasoles',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'girasoles',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'cactus',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'cactus',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'jazmines',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'jazmines',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'jazmines',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'jazmines',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'jazmines',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas rojas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas rojas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Rosas rojas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Ramo de rosas rosadas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Ramo de rosas rosadas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    },
    {
        id: random(1000000000000, 9999999999999),
        idc: random(1000000000000, 9999999999999),
        terminos: 'Ramo de rosas rosadas',
        categ: 0,
        fecha: '2022-02-11 03:22:33'
    }
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // },
    // {
    //     id: random(1000000000000, 9999999999999),
    //     idc: random(1000000000000, 9999999999999),
    //     terminos: '',
    //     categ: 0,
    //     fecha: '2023-02-21 11:11:33'
    // }
]

// ARRAYS VACÍOS PARA REGISTRO DE USUARIOS

const datosCliente = []

const direCliente = []

const perfilCliente = []

document.addEventListener('DOMContentLoaded', () => {
    if(JSON.parse(localStorage.getItem('Cliente')) != null){
        const estadoSesion = JSON.parse(localStorage.getItem('Cliente'))
        if(estadoSesion[0].sesionactiva === true){
            estaRegistrado()
        } else {
            noEstaRegistrado()
        }
        
    } else {
        noEstaRegistrado()
    }
})

function estaRegistrado() {
    const pag = 'inicio.html'
    const ini = 'inicio'
    fetch(pag)
        .then((url) => {
            return url.text()
        })
        .then((seccion) => {
            $('#secciones').innerHTML = seccion
            mostrarContenidos(ini)
        })
        .catch((err) => {
            console.log(err)
        })
}

function noEstaRegistrado() {

    const pag = 'registro.html'
    fetch(pag)
        .then((url) => {
            //console.log(url.text())
            return url.text()
        })
        .then((seccion) => {
            $('#secciones').innerHTML = seccion
            accionInicial()
        })
        .catch((err) => {
            console.log(err)
        })

}

function elementosRegistro() {

    function nomVacio() {
        if ($('#nombre').value === null || $('#nombre').value === ''){
            $('#nombre').classList.add('error')
            $('#error-nombre').classList.add('activo')
            $('#nombre').onfocus = function() {
                $('#nombre').classList.remove('error')
                $('#error-nombre').classList.remove('activo')
            }
        } else {
            $('#nombre').classList.add('bien')
        }
    }

    function apeVacio() {
        if ($('#apellido').value === null || $('#apellido').value === ''){
            $('#apellido').classList.add('error')
            $('#error-apellido').classList.add('activo')
            $('#apellido').onfocus = function() {
                $('#apellido').classList.remove('error')
                $('#error-apellido').classList.remove('activo')
            }
        } else {
            $('#apellido').classList.add('bien')
        }
    }

    function correoVacio() {
        if ($('#correo').value === null || $('#correo').value === ''){
            $('#correo').classList.add('error')
            $('#error-correo').classList.add('activo')
            $('#correo').onfocus = function() {
                $('#correo').classList.remove('error')
                $('#error-correo').classList.remove('activo')
            }
        } else {
            $('#correo').classList.add('bien')
        }
    }

    function direVacio() {
        if ($('#direccion-calle').value === null || $('#direccion-calle').value === ''){
            $('#direccion-calle').classList.add('error')
            $('#error-direccion').classList.add('activo')
            $('#direccion-calle').onfocus = function() {
                $('#direccion-calle').classList.remove('error')
                $('#error-direccion').classList.remove('activo')
            }
        } else {
            $('#direccion-calle').classList.add('bien')
        }
    }

    function movilVacio() {
        if ($('#movil').value === null || $('#movil').value === ''){
            $('#movil').classList.add('error')
            $('#error-movil').classList.add('activo')
            $('#movil').onfocus = function() {
                $('#movil').classList.remove('error')
                $('#error-movil').classList.remove('activo')
            }
        } else {
            $('#movil').classList.add('bien')
        }
    }

    function passUnoVacio() {
        if ($('#pass1').value === null || $('#pass1').value === ''){
            $('#pass1').classList.add('error')
            $('#passvacio').classList.add('activo')
            $('#pass1').onfocus = function() {
                $('#pass1').classList.remove('error')
                $('#passvacio').classList.remove('activo')
            }
        } else {
            $('#pass1').classList.add('bien')
        }
    }

    function passDosVacio() {
        if ($('#pass2').value === null || $('#pass2').value === ''){
            $('#pass2').classList.add('error')
            $('#passcontrvacio').classList.add('activo')
            $('#pass2').onfocus = function() {
                $('#pass2').classList.remove('error')
                $('#passcontrvacio').classList.remove('activo')
            }
        } else {
            $('#pass2').classList.add('bien')
        }
    }

    function passNoCoin() {
        if ($('#pass1').value != $('#pass2').value){
            $('#pass1').classList.remove('bien')
            $('#pass1').classList.add('error')
            $('#pass2').classList.remove('bien')
            $('#pass2').classList.add('error')
            $('#passnocoin').classList.add('activo')
            $('#passcontrnocoin').classList.add('activo')
            $('#pass2').onfocus = function() {
                $('#pass1').classList.remove('error')
                $('#pass2').classList.remove('error')
                $('#pass2').value = ''
                $('#passnocoin').classList.remove('activo')
                $('#passcontrnocoin').classList.remove('activo')
            }
            $('#pass1').onfocus = function() {
                $('#pass1').classList.remove('error')
                $('#pass2').classList.remove('error')
                $('#pass1').value = ''
                $('#pass2').value = ''
                $('#passnocoin').classList.remove('activo')
                $('#passcontrnocoin').classList.remove('activo')
            }
            
        } else {
            if($('#pass1').value === '' || $('#pass1').value === null || $('#pass2').value === '' || $('#pass2').value === null) {
                passUnoVacio()
                passDosVacio()
            } else {
                $('#pass1').classList.add('bien')
                $('#pass2').classList.add('bien')
            }
        }
    }

    $('#nombre').onblur = nomVacio

    $('#apellido').onfocus = nomVacio
    $('#apellido').onblur = apeVacio
   
    $('#correo').onfocus = function () {
        nomVacio()
        apeVacio()
    }
    $('#correo').onblur = correoVacio

    $('#direccion-calle').onfocus = function () {
        nomVacio()
        apeVacio()
        correoVacio()
    }
    $('#direccion-calle').onblur = direVacio

    $('#movil').onfocus = function () {
        nomVacio()
        apeVacio()
        correoVacio()
        direVacio()
    }
    $('#movil').onblur = movilVacio

    $('#pass1').onfocus = function () {
        nomVacio()
        apeVacio()
        correoVacio()
        direVacio()
        movilVacio()
    }
    $('#pass1').onblur = passUnoVacio

    $('#pass2').onfocus = function () {
        nomVacio()
        apeVacio()
        correoVacio()
        direVacio()
        movilVacio()
        passUnoVacio()
    }

    $('#pass2').onblur = function () {
        passDosVacio()
        passNoCoin()
    }

}

function elementosIngreso() {

    function correoIngVacio() {
        if ($('#correo-ing').value === null || $('#correo-ing').value === ''){
            $('#correo-ing').classList.add('error')
            $('#error-correo-ing').classList.add('activo')
            $('#correo-ing').onfocus = function() {
                $('#correo-ing').classList.remove('error')
                $('#error-correo-ing').classList.remove('activo')
            }
        } else {
            $('#correo-ing').classList.add('bien')
        }
    }

    $('#correo-ing').onblur = correoIngVacio

    function passVacia() {
        if ($('#pass-ing').value === null || $('#pass-ing').value === ''){
            $('#pass-ing').classList.add('error')
            $('#error-pass-ing').classList.add('activo')
            $('#pass-ing').onfocus = function() {
                $('#pass-ing').classList.remove('error')
                $('#error-pass-ing').classList.remove('activo')
            }
        } else {
            $('#pass-ing').classList.add('bien')
        }
    }

    $('#pass-ing').onfocus = correoIngVacio
    $('#pass-ing').onblur = passVacia

}

function hacerElRegistro(evt) {
    evt.preventDefault()
    const id = Date.now()
    const nombre = $('#nombre').value
    const apellido = $('#apellido').value
    const correo = $('#correo').value
    const calle = $('#direccion-calle').value
    let dpto = ''
    const movil = $('#movil').value
    const passUno = $('#pass1').value
    const passDos = $('#pass2').value

    if($('#direccion-dpto').value === '' || $('#direccion-dpto').value === null){
        dpto = 'casa'
    } else {
        dpto = $('#direccion-dpto').value
    }

    let nomOk = false
    let apeOk = false
    let correOk = false
    let direOk = false
    let moviOk = false
    let passUnOk = false
    let passDosOk = false
    let pass = false

    if (nombre === null || nombre === '') {
        $('#nombre').classList.add('error')
        $('#error-nombre').classList.add('activo')
        $('#nombre').onfocus = function () {
            $('#nombre').classList.remove('error')
            $('#error-nombre').classList.remove('activo')
        }
        nomOk = false
    } else {
        $('#nombre').classList.add('bien')
        nomOk = true
    }

    if (apellido === null || apellido === '') {
        $('#apellido').classList.add('error')
        $('#error-apellido').classList.add('activo')
        $('#apellido').onfocus = function () {
            $('#apellido').classList.remove('error')
            $('#error-apellido').classList.remove('activo')
        }
        apeOk = false
    } else {
        $('#apellido').classList.add('bien')
        apeOk = true
    }

    if (correo === null || correo === '') {
        $('#correo').classList.add('error')
        $('#error-correo').classList.add('activo')
        $('#correo').onfocus = function () {
            $('#correo').classList.remove('error')
            $('#error-correo').classList.remove('activo')
        }
        correOk = false
    } else {
        $('#correo').classList.add('bien')
        correOk = true
    }

    if (calle === null || calle === '') {
        $('#direccion-calle').classList.add('error')
        $('#error-direccion').classList.add('activo')
        $('#direccion-calle').onfocus = function () {
            $('#direccion-calle').classList.remove('error')
            $('#error-direccion').classList.remove('activo')
        }
        direOk = false
    } else {
        $('#direccion-calle').classList.add('bien')
        direOk = true
    }

    if (movil === null || movil === '' || isNaN(movil) || (movil.lenght < 13 && movil.lenght >= 14)) {
        $('#movil').classList.add('error')
        $('#error-movil').classList.add('activo')
        $('#movil').onfocus = function () {
            $('#movil').classList.remove('error')
            $('#error-movil').classList.remove('activo')
        }
        moviOk = false
    } else {
        $('#movil').classList.add('bien')
        moviOk = true
    }

    if (passUno != passDos) {
        $('#pass1').classList.add('error')
        $('#pass2').classList.add('error')
        $('#passnocoin').classList.add('activo')
        $('#passcontrnocoin').classList.add('activo')
        $('#pass2').onfocus = function () {
            $('#pass1').classList.remove('error')
            $('#pass2').classList.remove('error')
            passDos = ''
            $('#passnocoin').classList.remove('activo')
            $('#passcontrnocoin').classList.remove('activo')
        }
        $('#pass1').onfocus = function () {
            $('#pass1').classList.remove('error')
            $('#pass2').classList.remove('error')
            passUno = ''
            passDos = ''
            $('#passnocoin').classList.remove('activo')
            $('#passcontrnocoin').classList.remove('activo')
        }
        passUnOk = false
        passDosOk = false
    } else {
        if (passUno === '' || passUno === null || passDos === '' || passDos === null) {
            passUnoVacio()
            passDosVacio()
            passUnOk = false
            passDosOk = false
        } else {
            $('#pass1').classList.add('bien')
            $('#pass2').classList.add('bien')
            passUnOk = true
            passDosOk = true
        }
    }

    if (passUnOk === true && passDosOk === true) {
        pass = true
    } else {
        pass = false
    }

    if (nomOk === true && apeOk === true && correOk === true && direOk === true && moviOk === true && pass === true) {

        Swal.fire({
            title: '<h1 class="contenido__confirm--h1">Por favor, confirme sus datos:</h1>',
            html: `<p class="contenido__confirm--p"><span>Nombre:</span> ${nombre}</p>
            <p class="contenido__confirm--p"><span>Apellido:</span> ${apellido}</p>
            <p class="contenido__confirm--p"><span>Correo:</span> ${correo}</p>
            <p class="contenido__confirm--p"><span>Dirección:</span> ${calle} ${dpto}</p>
            <p class="contenido__confirm--p"><span>Móvil:</span> ${movil}</p>`,
            footer: '<p class="contenido__confirm--pie">Al confirmar acepta nuestros términos y condiciones de uso.</p>',
            width: '90vw',
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: {
                confirmButton: 'contenido__confirm--btn_ok',
                denyButton: 'contenido__confirm--btn_mdf'
            },
            buttonsStyling: false,
            showDenyButton: true,
            //showCancelButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Modificar`,
        }).then((result) => {

            if (result.isConfirmed) {

                const clienteObj = {
                    id: id,
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    movil: movil,
                    pass: passDos,
                    sesionactiva: true
                }

                const direObj = {
                    id: Date.now(),
                    idc: id,
                    calle: calle,
                    dpto: dpto,
                    comentario: '',
                    seleccionada: true
                }

                const perfilObj = {
                    idc: id,
                    apodo: nombre,
                    fechanac: '',
                    sexo: 'Prefiero no decirlo',
                    foto: false
                }

                // const buscaObj = {
                //     id: Date.now(),
                //     idc: id,
                //     claves: '',
                //     categ: '',
                //     fecha: ''
                // } 80603635885

                datosCliente.push(clienteObj)
                direCliente.push(direObj)
                perfilCliente.push(perfilObj)
                //console.log(datosCliente)
                localStorage.setItem('Cliente', JSON.stringify(datosCliente))
                localStorage.setItem('Direcciones', JSON.stringify(direCliente))
                localStorage.setItem('Perfil', JSON.stringify(perfilCliente))
                localStorage.setItem('Busquedas', JSON.stringify(busquedasArtificiales))

                Swal.fire({
                    title: '<h1 class="contenido__confirm--h1">¡Se ha registrado con éxito!</h1>',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3500,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false
                })

                setTimeout(estaRegistrado, 3000)

                //estaRegistrado()

            } else if (result.isDenied) {

                return

            }
        })

    } else {
        return
    }

}

function hacerElIngreso(evt) {
    evt.preventDefault()
    const correo = $('#correo-ing').value
    const pass = $('#pass-ing').value

    let correoOk = false
    let passOk = false

    let datosUsuarioComprobacion = JSON.parse(localStorage.getItem('Cliente'))

    if (datosUsuarioComprobacion[0].correo != correo) {
        $('#correo-ing').classList.remove('bien')
        $('#correo-ing').classList.add('error')
        $('#error-correo-ing2').classList.add('activo')
        $('#correo-ing').onfocus = function () {
            $('#correo-ing').classList.remove('error')
            $('#error-correo-ing2').classList.remove('activo')
        }
        return
    } else {
        correoOk = true
        $('#correo-ing').classList.add('bien')
    }

    if (datosUsuarioComprobacion[0].pass != pass) {
        $('#pass-ing').classList.remove('bien')
        $('#pass-ing').classList.add('error')
        $('#error-pass-ing2').classList.add('activo')
        $('#pass-ing').onfocus = function () {
            $('#pass-ing').classList.remove('error')
            $('#error-pass-ing2').classList.remove('activo')
        }
        return
    } else {
        passOk = true
        $('#pass-ing').classList.add('bien')
    }

    if(correoOk === true && passOk === true){
        datosUsuarioComprobacion[0].sesionactiva = true
        localStorage.setItem('Cliente', JSON.stringify(datosUsuarioComprobacion))

        Swal.fire({
            title: '<h1 class="contenido__confirm--h1">¡Ha ingresado con éxito!</h1>',
            icon: 'success',
            showConfirmButton: false,
            timer: 3500,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        })

        setTimeout(estaRegistrado, 3000)
    } else {
        return
    }

}

function accionInicial() {

    $('#logueo-opciones-login').onclick = function(){
        $('#logueo-contenido-opciones').classList.remove('activo')
        $('#form__ingreso').classList.add('activo')
        ingresar()
    }

    $('#logueo-opciones-reg').onclick = function(){
        $('#logueo-contenido-opciones').classList.remove('activo')
        $('#form__registro').classList.add('activo')
        registrarse()
    }

}

function ingresar() {
    elementosIngreso()
    $('#form__ingreso').addEventListener('submit', hacerElIngreso)
}

function registrarse() {
    elementosRegistro()
    $('#form__registro').addEventListener('submit', hacerElRegistro)
}

function mostrarContenidos (ubicador) { 
    const datosDelCliente = JSON.parse(localStorage.getItem('Cliente'))
    const perfilDelCliente = JSON.parse(localStorage.getItem('Perfil'))
    const diresDelCliente = JSON.parse(localStorage.getItem('Direcciones'))
    const busquedasDelCliente = JSON.parse(localStorage.getItem('Busquedas'))

    if (ubicador === 'inicio') {

        const hambLinks = document.querySelectorAll('.cabeza__menu--user_li a')
        for(let link of hambLinks){
            link.addEventListener('click', pedirPag)
        }

        const hambLinksProds = document.querySelectorAll('#menu__user--prods a')
        for(let link of hambLinksProds){
            link.addEventListener('click', pedirPag)
        }

        const contProdsLinks = document.querySelectorAll('#contenido-productos-bx .contenido__productos--box')
        for(let link of contProdsLinks){
            link.addEventListener('click', pedirPag)
        }

        const contOtrosProdsLinks = document.querySelectorAll('#contenido-otrosprods-bx .contenido__otrosprods--box')
        for(let link of contOtrosProdsLinks){
            link.addEventListener('click', pedirPag)
        }
        
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

        function cerrarSesion(evt) {
            evt.preventDefault()
            cerrarMenuHamb ()
            let datosSesion = JSON.parse(localStorage.getItem('Cliente'))
            datosSesion[0].sesionactiva = false
            localStorage.setItem('Cliente', JSON.stringify(datosSesion))
            Swal.fire({
                title: '<h1 class="contenido__confirm--h1">¡La sesión se ha cerrado con éxito!</h1>',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            })
    
            setTimeout(noEstaRegistrado, 3000)
        }

        function menuNuevaDir() {
            cerrarMenuDir ()
            setTimeout(agregarDireccion, 250)
        }

        function agregarDireccion() {
            $('#cabeza__dir--agr').classList.add('activo')
            $('#cabeza__dir--agr--cer').onclick = function(){
                $('#cabeza__dir--agr').classList.remove('activo')
            }

            function calleVacia() {
                if($('#nuevadir-calle').value === '' || $('#nuevadir-calle').value === null){
                    $('#nuevadir-calle').classList.add('error')
                    $('#nuevadir-calle-error').classList.add('activo')
                    $('#nuevadir-calle').onfocus = function() {
                        $('#nuevadir-calle').classList.remove('error')
                        $('#nuevadir-calle-error').classList.remove('activo')
                    }
                }
            }

            $('#nuevadir-calle').onblur = calleVacia
            $('#nuevadir-dpto').onfocus = calleVacia
            $('#nuevadir-coment').onfocus = calleVacia


            function nuevaDire(evt) {
                evt.preventDefault()
                const dirId = Date.now()
                const dirCalle = $('#nuevadir-calle').value
                const dirDpto = $('#nuevadir-dpto').value
                const dirPredet = $('#nuevadir-predet').checked
                const dirComent = $('#nuevadir-coment').value
                const idCliente = datosDelCliente[0].id
                let elDpto

                if(dirCalle === '' || dirCalle === null){
                    $('#nuevadir-calle').classList.add('error')
                    $('#nuevadir-calle-error').classList.add('activo')
                    $('#nuevadir-calle').onfocus = function() {
                        $('#nuevadir-calle').classList.remove('error')
                        $('#nuevadir-calle-error').classList.remove('activo')
                    }
                    return
                }

                if(dirDpto === '' || dirDpto === null){
                    elDpto = 'Casa'
                } else {
                    elDpto = $('#nuevadir-dpto').value
                }

                const nuevaDireccion = []
 
                let direcciones = diresDelCliente.filter(direccion => direccion.idc === idCliente)
                for(dire of direcciones){
                    if(dirPredet === true) {
                        dire.seleccionada = false
                    }
                    nuevaDireccion.push(dire)
                }
                
                const nuevaDireObj = {
                    id: dirId,
                    idc: idCliente,
                    calle: dirCalle,
                    dpto: elDpto,
                    comentario: dirComent,
                    seleccionada: dirPredet
                }

                nuevaDireccion.push(nuevaDireObj)
                console.log(nuevaDireccion)
                localStorage.setItem('Direcciones', JSON.stringify(nuevaDireccion))

                $('#cabeza__dir--agr').classList.remove('activo')

                setTimeout(function(){
                    const pag = 'inicio.html'
                    const ini = 'inicio'
                    fetch(pag)
                        .then((url) => {
                            return url.text()
                        })
                        .then((seccion) => {
                            $('#secciones').innerHTML = seccion
                            mostrarContenidos(ini)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }, 250)

            }

            $('#agregar-dir-form').addEventListener('submit', nuevaDire)
            
        }

        function abrirBuscador() {
            setTimeout(function () {
                const pag = 'buscador.html'
                const ini = 'buscador'
                fetch(pag)
                    .then((url) => {
                        return url.text()
                    })
                    .then((seccion) => {
                        $('#secciones').innerHTML = seccion
                        mostrarContenidos(ini)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }, 350)
        }
               
        $('#cabeza__menu--btn').onclick = abrirMenuHamb
        $('#hamb-cerrar-sesion').onclick = cerrarSesion
        $('#cabeza__anun--btn').onclick = abrirMenuAnun
        $('#cabeza__anun--cer').onclick = cerrarMenuAnun
        $('#cabeza__dir--btn').onclick = abrirMenuDir
        $('#agregar-nueva-dir').onclick = menuNuevaDir
        $('#abrir-buscador-general').onclick = abrirBuscador
        $('#cabeza__anun--nove').onclick = anunNove
        $('#cabeza__anun--prom').onclick = anunProm

        function mostrarDatoscliente() {

            function datosMenuHamburg() {
                $('#cabeza-menu-user_nom').innerText = `${datosDelCliente[0].nombre} ${datosDelCliente[0].apellido}`

                if(perfilDelCliente[0].foto === false){
                    $('#cabeza-menu-user_pic').src = 'assets/img/users/default.jpg'
                } else {
                    $('#cabeza-menu-user_pic').src = perfilDelCliente[0].foto
                }
            }

            function direccionesCliente() {
                const filtradas = diresDelCliente.filter(direcciones => direcciones.idc === datosDelCliente[0].id && direcciones.seleccionada === false)
                const secundarias = filtradas.sort((a, b) => {
                    const calleA = b.calle.toLowerCase()
                    const calleB = a.calle.toLowerCase()
                    if(calleA > calleB){
                        return -1
                    }
                    if(calleA < calleB){
                        return 1
                    }
    
                    return 0
                })
                let secundOrden = secundarias.slice(0, 3)
                let dirPrincipal = diresDelCliente.filter(direcciones => direcciones.idc === datosDelCliente[0].id && direcciones.seleccionada === true)

                for(let direcciones of dirPrincipal){
                    laDire = document.createElement('li')
                    laDire.id = `inicio-desple-dir${direcciones.id}`
                    laDire.innerHTML = `<div>    
                                            <div class="cabeza__dir-ico">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div>
                                                <h2>${direcciones.calle}</h2>
                                                <p>${direcciones.dpto}</p>
                                            </div>
                                            <div class="cabeza__dir-chk ${direcciones.seleccionada}">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                        </div>`
                    $('#inicio-desple-dir-lista').appendChild(laDire)
                }

                for(let direcciones of secundOrden){
                    laDire = document.createElement('li')
                    laDire.id = `inicio-desple-dir${direcciones.id}`
                    laDire.innerHTML = `<div>    
                                            <div class="cabeza__dir-ico">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div>
                                                <h2>${direcciones.calle}</h2>
                                                <p>${direcciones.dpto}</p>
                                            </div>
                                            <div class="cabeza__dir-chk ${direcciones.seleccionada}">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                        </div>`
                    $('#inicio-desple-dir-lista').appendChild(laDire)
                }

                verLasdires = document.createElement('li')
                verLasdires.id = 'todas-las-direcciones'
                verLasdires.innerHTML = `<div>
                                            <span>
                                                <i class="fa-solid fa-magnifying-glass-location"></i>
                                            </span>
                                            <p>Todas las direcciones</p>
                                        </div>`
                $('#inicio-desple-dir-lista').appendChild(verLasdires)

                $('#cabeza-dir-principal').innerText = `${dirPrincipal[0].calle} ${dirPrincipal[0].dpto}`

                function todasLasDirecciones() {
                    cerrarMenuDir()
        
                    setTimeout(function () {
                        const pag = 'direcciones.html'
                        const ini = 'direcciones'
                        fetch(pag)
                            .then((url) => {
                                return url.text()
                            })
                            .then((seccion) => {
                                $('#secciones').innerHTML = seccion
                                mostrarContenidos(ini)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }, 350)
                }
                $('#todas-las-direcciones').onclick = todasLasDirecciones

                for (const direCambiar of secundOrden) {
                    //console.log($(`#inicio-desple-dir${direCambiar.id}`))
                    $(`#inicio-desple-dir${direCambiar.id}`).onclick = function () {
                        direCambiar.seleccionada = true

                        const nuevaDireccionPrincipal = []

                        let direcciones = diresDelCliente.filter(direccion => direccion.idc === datosDelCliente[0].id && direccion.id != direCambiar.id)
                        for (dire of direcciones) {
                            dire.seleccionada = false
                            nuevaDireccionPrincipal.push(dire)
                        }
                        nuevaDireccionPrincipal.push(direCambiar)
                        localStorage.setItem('Direcciones', JSON.stringify(nuevaDireccionPrincipal))
                        const pag = 'inicio.html'
                        const ini = 'inicio'
                        fetch(pag)
                            .then((url) => {
                                return url.text()
                            })
                            .then((seccion) => {
                                $('#secciones').innerHTML = seccion
                                mostrarContenidos(ini)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                }
            }

            datosMenuHamburg()
            direccionesCliente()
        }

        function mostrarMasVendIdx() {

            function masVendidosIndex(productos) {
                const ordenados = productos.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 7)
            }

            const indexMasVendidos = masVendidosIndex(productos)
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
 
        mostrarDatoscliente()
        mostrarMasVendIdx()

    }

    if (ubicador === 'perfil') {

        const volverInicio = document.querySelectorAll('#perfil__cabeza .cabeza__volver')
        console.log(volverInicio)
        for(let link of volverInicio){
            link.addEventListener('click', pedirPag)
        }

        window.addEventListener('scroll', perfilCabezaScroll)

        function perfilCabezaScroll() {
            if (!$('#perfil')) {
                return
            } else {
                const alturaCabeza = $('#perfil__cabeza').offsetHeight
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
                if (scrollActual > alturaCabeza) {
                    $('#perfil__cabeza').classList.add('scroll')
                } else {
                    if ($('#perfil__cabeza').classList.contains('scroll')) {
                        $('#perfil__cabeza').classList.remove('scroll')
                    }
                }
            }
    
        }

        function mostrarDatoscliente() {
            if(perfilDelCliente[0].foto === false){
                $('#edit-basico-pic').src = 'assets/img/users/default.jpg'
            } else {
                $('#edit-basico-pic').src = perfilDelCliente[0].foto
            }
            $('#edit-basico-nom').innerText = `${datosDelCliente[0].nombre} ${datosDelCliente[0].apellido}`
            $('#edit-basico-mail').innerText = datosDelCliente[0].correo
        }

        function editarFoto() {

            $('#edit-basico-pic-file').click()

            $('#edit-basico-pic-file').addEventListener('change', function () {

                const archivoNuevaFoto = $('#edit-basico-pic-file').files[0]
                const TAMANO_MAXIMO = 300
                const nuevaFoto = new Image()
                nuevaFoto.src = URL.createObjectURL(archivoNuevaFoto)
                nuevaFoto.onload = function () {
                    if (nuevaFoto.width <= TAMANO_MAXIMO && nuevaFoto.height <= TAMANO_MAXIMO) {
                        const lectorArchivos = new FileReader()
                        lectorArchivos.readAsDataURL(archivoNuevaFoto)
                        lectorArchivos.onload = function () {
                            let datPerf = JSON.parse(localStorage.getItem('Perfil'))
                            datPerf[0].foto = lectorArchivos.result
                            localStorage.setItem('Perfil', JSON.stringify(datPerf))
                            const pag = 'perfil.html'
                            const ini = 'perfil'
                            fetch(pag)
                                .then((url) => {
                                    return url.text()
                                })
                                .then((seccion) => {
                                    $('#secciones').innerHTML = seccion
                                    mostrarContenidos(ini)
                                })
                                .catch((err) => {
                                    console.log(err)
                                })
                        }
                    } else {
                        Swal.fire({
                            title: '<h1 class="contenido__confirm--h1">¡Error!</h1>',
                            html: '<p class="contenido__confirm--p">Debe elegir una imagen de 300x300px</p>',
                            icon: 'error',
                            showConfirmButton: false,
                            timer: 3500,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false
                        })
                        return
                    }
                }
            })
        }

        function editarNombre() {
            $('#perfil-despleg-bsc-nom').classList.add('activo')

            $('#basico-nombre').value = datosDelCliente[0].nombre

            $('#basico-apellido').value = datosDelCliente[0].apellido

            $('#basico-apodo').value = perfilDelCliente[0].apodo

            function cerrarEditBasico() {
                $('#perfil-despleg-bsc-nom').classList.remove('activo')
            }

            $('#perfil-despleg-bsc-back-1').onclick = cerrarEditBasico
            $('#perfil-despleg-bsc-back-2').onclick = cerrarEditBasico


            function basicoNomVacio() {
                if($('#basico-form-etiqueta-nom').classList.contains('activo')){
                    $('#basico-form-etiqueta-nom').classList.remove('activo')
                }
                if($('#basico-nombre').value === '' || $('#basico-nombre').value === null){
                    $('#basico-nombre').classList.add('error')
                    $('#basico-form-etiqueta-nom').classList.add('error')
                    $('#basico-nombre').onfocus = function() {
                        $('#basico-nombre').classList.remove('error')
                        $('#basico-form-etiqueta-nom').classList.remove('error')
                        $('#basico-form-etiqueta-nom').classList.add('activo')
                    }
                }
            }

            function basicoApeVacio() {
                if($('#basico-form-etiqueta-ape').classList.contains('activo')){
                    $('#basico-form-etiqueta-ape').classList.remove('activo')
                }
                if($('#basico-apellido').value === '' || $('#basico-apellido').value === null){
                    $('#basico-apellido').classList.add('error')
                    $('#basico-form-etiqueta-ape').classList.add('error')
                    $('#basico-apellido').onfocus = function() {
                        $('#basico-apellido').classList.remove('error')
                        $('#basico-form-etiqueta-ape').classList.remove('error')
                        $('#basico-form-etiqueta-ape').classList.add('activo')
                    }
                }
            }

            $('#basico-nombre').onblur = basicoNomVacio
            $('#basico-nombre').onfocus = function() {
                $('#basico-form-etiqueta-nom').classList.add('activo')
            }
            
            $('#basico-apellido').onblur = basicoApeVacio
            $('#basico-apellido').onfocus = function() {
                $('#basico-form-etiqueta-ape').classList.add('activo')
                basicoNomVacio()
            }

            $('#basico-apodo').onfocus = function() {
                $('#basico-form-etiqueta-apo').classList.add('activo')
                basicoNomVacio()
                basicoApeVacio()
            }
            $('#basico-apodo').onblur = function() {
                $('#basico-form-etiqueta-apo').classList.remove('activo')
            }

            function modificarDatosBasico(evt) {
                evt.preventDefault()
                const nombre = $('#basico-nombre').value
                const apellido = $('#basico-apellido').value
                const apodo = $('#basico-apodo').value

                let nomOk = false
                let apeOk = false

                if (nombre === '' || nombre === null){
                    $('#basico-nombre').classList.add('error')
                    $('#basico-form-etiqueta-nom').classList.add('error')
                    $('#basico-nombre').onfocus = function() {
                        $('#basico-nombre').classList.remove('error')
                        $('#basico-form-etiqueta-nom').classList.remove('error')
                        $('#basico-form-etiqueta-nom').classList.add('activo')
                    }
                    nomOk = false
                } else {
                    nomOk = true
                }

                if (apellido === '' || apellido === null){
                    $('#basico-apellido').classList.add('error')
                    $('#basico-form-etiqueta-ape').classList.add('error')
                    $('#basico-apellido').onfocus = function() {
                        $('#basico-apellido').classList.remove('error')
                        $('#basico-form-etiqueta-ape').classList.remove('error')
                        $('#basico-form-etiqueta-ape').classList.add('activo')
                    }
                    apeOk = false
                } else {
                    apeOk = true
                }

                if (nomOk === true && apeOk === true) {
                    let datClie = JSON.parse(localStorage.getItem('Cliente'))
                    datClie[0].nombre = nombre
                    datClie[0].apellido = apellido
                    localStorage.setItem('Cliente', JSON.stringify(datClie))

                    let datPerf = JSON.parse(localStorage.getItem('Perfil'))
                    datPerf[0].apodo = apodo
                    localStorage.setItem('Perfil', JSON.stringify(datPerf))

                    $('#perfil-despleg-bsc-nom').classList.remove('activo')

                    const pag = 'perfil.html'
                    const ini = 'perfil'
                    fetch(pag)
                        .then((url) => {
                            return url.text()
                        })
                        .then((seccion) => {
                            $('#secciones').innerHTML = seccion
                            mostrarContenidos(ini)
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                } else {
                    return
                }

            }

            $('#basico-form').addEventListener('submit', modificarDatosBasico)

        }

        function editarDatosPersonales() {

            $('#perfil-despleg-personal').classList.add('activo')
            $('#personal-fecha').value = perfilDelCliente[0].fechanac
            $('#personal-sexo').innerHTML = `<option value="${perfilDelCliente[0].sexo}" selected>${perfilDelCliente[0].sexo}</option>
                                            <option>-----------</option>
                                            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                            <option value="Hombre trans">Hombre trans</option>
                                            <option value="Mujer trans">Mujer trans</option>
                                            <option value="Otro">Otro</option>`

            function cerrarEditPers() {
                $('#perfil-despleg-personal').classList.remove('activo')
            }

            $('#perfil-despleg-pers-back-1').onclick = cerrarEditPers
            $('#perfil-despleg-pers-back-2').onclick = cerrarEditPers

            function modifDatosPers(evt) {
                evt.preventDefault()

                const fechaNac = $('#personal-fecha').value
                const seXo = $('#personal-sexo').value

                let datPerf = JSON.parse(localStorage.getItem('Perfil'))
                datPerf[0].fechanac = fechaNac
                datPerf[0].sexo = seXo
                localStorage.setItem('Perfil', JSON.stringify(datPerf))

                $('#perfil-despleg-personal').classList.remove('activo')

                const pag = 'perfil.html'
                const ini = 'perfil'
                fetch(pag)
                    .then((url) => {
                        return url.text()
                    })
                    .then((seccion) => {
                        $('#secciones').innerHTML = seccion
                        mostrarContenidos(ini)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }

            $('#personal-form').addEventListener('submit', modifDatosPers)

        }

        function editarDatosCuenta() {
            $('#perfil-despleg-cuenta').classList.add('activo')

            $('#cuenta-mail').value = datosDelCliente[0].correo
            $('#cuenta-tel').value = datosDelCliente[0].movil

            function cerrarDatosCuenta() {
                $('#perfil-despleg-cuenta').classList.remove('activo')
            }

            $('#perfil-despleg-cuenta-back-1').onclick = cerrarDatosCuenta
            $('#perfil-despleg-cuenta-back-2').onclick = cerrarDatosCuenta

            function modifDatosCta(evt) {
                evt.preventDefault()

                const correo = $('#cuenta-mail').value
                const movil = $('#cuenta-tel').value

                let datClien = JSON.parse(localStorage.getItem('Cliente'))
                datClien[0].correo = correo
                datClien[0].movil = movil
                localStorage.setItem('Cliente', JSON.stringify(datClien))

                $('#perfil-despleg-cuenta').classList.remove('activo')

                const pag = 'perfil.html'
                const ini = 'perfil'
                fetch(pag)
                    .then((url) => {
                        return url.text()
                    })
                    .then((seccion) => {
                        $('#secciones').innerHTML = seccion
                        mostrarContenidos(ini)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }

            $('#cuenta-form').addEventListener('submit', modifDatosCta)
        }

        function editarPass() {
            $('#perfil-despleg-pass').classList.add('activo')

            function cerrarEditPass(){
                $('#perfil-despleg-pass').classList.remove('activo')
            }

            $('#perfil-despleg-pass-back-1').onclick = cerrarEditPass
            $('#perfil-despleg-pass-back-2').onclick = cerrarEditPass

            const passComparacion = datosDelCliente[0].pass

            function campoPassActual() {
                if($('#pass-actual').value != passComparacion){
                    $('#pass-actual').classList.add('error')
                    $('#pass-actual-error').classList.add('activo')
                    $('#pass-actual').onfocus = function() {
                        $('#pass-actual').classList.remove('error')
                        $('#pass-actual-error').classList.remove('activo')
                    }
                } else {
                    $('#pass-actual').classList.add('bien')
                }
            }
            
            $('#pass-actual').onblur = campoPassActual

            function cambiarPass(evt) {
                evt.preventDefault()

                const actualPass = $('#pass-actual').value
                const nuevoPass = $('#pass-nuevo').value

                let passCorrecto = false

                if (actualPass === '' || actualPass === null){
                    $('#pass-actual').classList.add('error')
                    $('#pass-actual').onfocus = function() {
                        $('#pass-actual').classList.remove('error')
                    }
                    return
                } else {
                    if(actualPass != passComparacion){
                        $('#pass-actual').classList.add('error')
                        $('#pass-actual-error').classList.add('activo')
                        $('#pass-actual').onfocus = function() {
                            $('#pass-actual').classList.remove('error')
                            $('#pass-actual-error').classList.remove('activo')
                        }
                        return
                    } else {
                        $('#pass-actual').classList.add('bien')
                        passCorrecto = true
                    }
                }

                if(nuevoPass === '' || nuevoPass === null){
                    $('#pass-nuevo').classList.add('error')
                    $('#pass-nuevo').onfocus = function() {
                        $('#pass-nuevo').classList.remove('error')
                    }
                    return
                } else {
                    $('#pass-nuevo').classList.add('bien')
                }

                if (passCorrecto === true) {

                    let datClien = JSON.parse(localStorage.getItem('Cliente'))
                    datClien[0].pass = nuevoPass
                    localStorage.setItem('Cliente', JSON.stringify(datClien))

                    //$('#perfil-despleg-pass').classList.remove('activo')

                    Swal.fire({
                        title: '<h1 class="contenido__confirm--h1">¡Su contraseña se ha modificado con éxito!</h1>',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3000,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false
                    })

                    let datosSesion = JSON.parse(localStorage.getItem('Cliente'))
                    datosSesion[0].sesionactiva = false
                    localStorage.setItem('Cliente', JSON.stringify(datosSesion))

                    setTimeout(noEstaRegistrado, 3500)

                } else {
                    return
                }

            }

            $('#pass-form').addEventListener('submit', cambiarPass)
        }

        function abrirDirecciones() {
            setTimeout(function () {
                const pag = 'direcciones.html'
                const ini = 'direcciones'
                fetch(pag)
                    .then((url) => {
                        return url.text()
                    })
                    .then((seccion) => {
                        $('#secciones').innerHTML = seccion
                        mostrarContenidos(ini)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }, 350)
        }
        

        function cerrarSesion(evt) {
            evt.preventDefault()
            let datosSesion = JSON.parse(localStorage.getItem('Cliente'))
            datosSesion[0].sesionactiva = false
            localStorage.setItem('Cliente', JSON.stringify(datosSesion))
            Swal.fire({
                title: '<h1 class="contenido__confirm--h1">¡La sesión se ha cerrado con éxito!</h1>',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            })
    
            setTimeout(noEstaRegistrado, 3000)
        }

        function eliminarCuenta() {

            Swal.fire({
                title: '<h1 class="contenido__confirm--h1">¿Está seguro que desea eliminar su cuenta permanentemente?</h1>',
                width: '90vw',
                allowOutsideClick: false,
                allowEscapeKey: false,
                customClass: {
                    confirmButton: 'contenido__confirm--btn_ok',
                    denyButton: 'contenido__confirm--btn_mdf'
                },
                buttonsStyling: false,
                showDenyButton: true,
                //showCancelButton: true,
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
    
                if (result.isConfirmed) {
    
                    localStorage.clear()
    
                    Swal.fire({
                        title: '<h1 class="contenido__confirm--h1">¡Su cuenta se ha eliminado con éxito!</h1>',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 3500,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false
                    })
    
                    setTimeout(noEstaRegistrado, 3000)
    
                    //estaRegistrado()
    
                } else if (result.isDenied) {
    
                    return
    
                }
            })

        }

        $('#edit-basico-nom-btn').onclick = editarNombre

        $('#contenido-edit-personal').onclick = editarDatosPersonales

        $('#contenido-edit-cuenta').onclick = editarDatosCuenta

        $('#contenido-edit-pass').onclick = editarPass

        $('#abrir-direcciones').onclick = abrirDirecciones

        $('#edit-basico-pic-btn').onclick = editarFoto

        $('#perfil-cerrar-sesion').onclick = cerrarSesion

        $('#perfil-eliminar-cuenta').onclick = eliminarCuenta

        mostrarDatoscliente()

    }    

    if (ubicador === 'direcciones') {

        function volverInicio() {
    
            const pag = 'inicio.html'
            const ini = 'inicio'
            fetch(pag)
                .then((url) => {
                    return url.text()
                })
                .then((seccion) => {
                    $('#secciones').innerHTML = seccion
                    mostrarContenidos(ini)
                })
                .catch((err) => {
                    console.log(err)
                })
    
        }

        function gestionarDirecciones() {
            const filtradas = diresDelCliente.filter(direcciones => direcciones.idc === datosDelCliente[0].id && direcciones.seleccionada === false)
            const secundarias = filtradas.sort((a, b) => {
                const calleA = b.calle.toLowerCase()
                const calleB = a.calle.toLowerCase()
                if(calleA > calleB){
                    return -1
                }
                if(calleA < calleB){
                    return 1
                }

                return 0
            })

            let dirPrincipal = diresDelCliente.filter(direcciones => direcciones.idc === datosDelCliente[0].id && direcciones.seleccionada === true)

            function mostrarDirePrincipal() {
                for(let direcciones of dirPrincipal){
                    laDire = document.createElement('li')
                    laDire.id = `direccion-${direcciones.id}`
                    laDire.innerHTML = `<div>    
                                            <div class="contenido__dir--ico">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div>
                                                <h2>${direcciones.calle}</h2>
                                                <p>${direcciones.dpto}</p>
                                            </div>
                                            <div class="contenido__dir--opciones">
                                                <div class="contenido__dir--chk ${direcciones.seleccionada}">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="contenido__dir--act diome">
                                                    <i class="fa-solid fa-pencil" id="editar-direccion-${direcciones.id}"></i>
                                                </div>
                                                <div class="contenido__dir--act">
                                                    <i class="fa-solid fa-trash-can" id="eliminar-direccion-${direcciones.id}"></i>
                                                </div>
                                            </div>
                                        </div>`
                    $('#listar-todas-las-direcciones').appendChild(laDire)
                }
            }

            function mostrarDiresSecundarias() {
                for(let direcciones of secundarias){
                    laDire = document.createElement('li')
                    laDire.id = `direccion-${direcciones.id}`
                    laDire.innerHTML = `<div>    
                                            <div class="contenido__dir--ico">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div>
                                                <h2>${direcciones.calle}</h2>
                                                <p>${direcciones.dpto}</p>
                                            </div>
                                            <div class="contenido__dir--opciones">
                                                <div class="contenido__dir--chk ${direcciones.seleccionada}" id="hacer-principal-direccion-${direcciones.id}">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="contenido__dir--act diome" id="editar-direccion-${direcciones.id}">
                                                    <i class="fa-solid fa-pencil"></i>
                                                </div>
                                                <div class="contenido__dir--act" id="eliminar-direccion-${direcciones.id}">
                                                    <i class="fa-solid fa-trash-can"></i>
                                                </div>
                                            </div>
                                        </div>`
                    $('#listar-todas-las-direcciones').appendChild(laDire)
                }
            }

            function cambiarDirePrincipal() {
                for (const direCambiar of secundarias) {
                    //console.log($(`#inicio-desple-dir${direCambiar.id}`))
                    $(`#hacer-principal-direccion-${direCambiar.id}`).onclick = function () {
                        direCambiar.seleccionada = true
    
                        const nuevaDireccionPrincipal = []
    
                        let direcciones = diresDelCliente.filter(direccion => direccion.idc === datosDelCliente[0].id && direccion.id != direCambiar.id)
                        for (dire of direcciones) {
                            dire.seleccionada = false
                            nuevaDireccionPrincipal.push(dire)
                        }
                        nuevaDireccionPrincipal.push(direCambiar)
                        localStorage.setItem('Direcciones', JSON.stringify(nuevaDireccionPrincipal))
                        const pag = 'direcciones.html'
                        const ini = 'direcciones'
                        fetch(pag)
                            .then((url) => {
                                return url.text()
                            })
                            .then((seccion) => {
                                $('#secciones').innerHTML = seccion
                                mostrarContenidos(ini)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                }
            }
   
            mostrarDirePrincipal()

            mostrarDiresSecundarias()
    
            cambiarDirePrincipal()

        }

        function direccionesAgregar() {
            $('#despleg__dir--agr').classList.add('activo')
            $('#despleg__dir--agr--cer').onclick = function(){
                $('#despleg__dir--agr').classList.remove('activo')
            }
    
            function calleVacia() {
                if($('#nuevadir-calle').value === '' || $('#nuevadir-calle').value === null){
                    $('#nuevadir-calle').classList.add('error')
                    $('#nuevadir-calle-error').classList.add('activo')
                    $('#nuevadir-calle').onfocus = function() {
                        $('#nuevadir-calle').classList.remove('error')
                        $('#nuevadir-calle-error').classList.remove('activo')
                    }
                }
            }
    
            $('#nuevadir-calle').onblur = calleVacia
            $('#nuevadir-dpto').onfocus = calleVacia
            $('#nuevadir-coment').onfocus = calleVacia
    
    
            function nuevaDire(evt) {
                evt.preventDefault()
                const dirId = Date.now()
                const dirCalle = $('#nuevadir-calle').value
                const dirDpto = $('#nuevadir-dpto').value
                const dirPredet = $('#nuevadir-predet').checked
                const dirComent = $('#nuevadir-coment').value
                const idCliente = datosDelCliente[0].id
                let elDpto
    
                if(dirCalle === '' || dirCalle === null){
                    $('#nuevadir-calle').classList.add('error')
                    $('#nuevadir-calle-error').classList.add('activo')
                    $('#nuevadir-calle').onfocus = function() {
                        $('#nuevadir-calle').classList.remove('error')
                        $('#nuevadir-calle-error').classList.remove('activo')
                    }
                    return
                }
    
                if(dirDpto === '' || dirDpto === null){
                    elDpto = 'Casa'
                } else {
                    elDpto = $('#nuevadir-dpto').value
                }
    
                const nuevaDireccion = []
    
                let direcciones = diresDelCliente.filter(direccion => direccion.idc === idCliente)
                for(dire of direcciones){
                    if(dirPredet === true) {
                        dire.seleccionada = false
                    }
                    nuevaDireccion.push(dire)
                }
                
                const nuevaDireObj = {
                    id: dirId,
                    idc: idCliente,
                    calle: dirCalle,
                    dpto: elDpto,
                    comentario: dirComent,
                    seleccionada: dirPredet
                }
    
                nuevaDireccion.push(nuevaDireObj)
                console.log(nuevaDireccion)
                localStorage.setItem('Direcciones', JSON.stringify(nuevaDireccion))
    
                $('#despleg__dir--agr').classList.remove('activo')
    
                setTimeout(function(){
                    const pag = 'direcciones.html'
                    const ini = 'direcciones'
                    fetch(pag)
                        .then((url) => {
                            return url.text()
                        })
                        .then((seccion) => {
                            $('#secciones').innerHTML = seccion
                            mostrarContenidos(ini)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }, 250)
    
            }
    
            $('#agregar-dir-form').addEventListener('submit', nuevaDire)
            
        }

        function accionesDire() {
            const todasLasDires = diresDelCliente.filter(direcciones => direcciones.idc === datosDelCliente[0].id)
            for(const direccion of todasLasDires){
                const idDire = direccion.id
                $(`#editar-direccion-${idDire}`).onclick = function() {
                    editarDire(idDire)
                }
                $(`#eliminar-direccion-${idDire}`).onclick = function() {
                    eliminarDire(idDire)
                }
            }

            function editarDire(laDireccion) {
                console.log(laDireccion)
                $('#despleg__dir--edit').classList.add('activo')
                $('#despleg__dir--edit--cer').onclick = function () {
                    $('#despleg__dir--edit').classList.remove('activo')
                }

                const direParaEditar = diresDelCliente.filter(direcciones => direcciones.id === laDireccion)

                console.log(direParaEditar)
                //console.log()

                const idDireccion = direParaEditar[0].id
                const calleOriginal = direParaEditar[0].calle
                const dptoOriginal = direParaEditar[0].dpto
                const comentOriginal = direParaEditar[0].comentario

                $('#editardir-calle').value = calleOriginal
                $('#editardir-dpto').value = dptoOriginal
                $('#editardir-coment').value = comentOriginal


                function calleVacia() {
                    if ($('#editardir-calle').value === '' || $('#editardir-calle').value === null) {
                        $('#editardir-calle').classList.add('error')
                        $('#editardir-calle-error').classList.add('activo')
                        $('#editardir-calle').onfocus = function () {
                            $('#editardir-calle').classList.remove('error')
                            $('#editardir-calle-error').classList.remove('activo')
                        }
                    }
                }

                $('#editardir-calle').onblur = calleVacia
                $('#editardir-dpto').onfocus = calleVacia
                $('#editardir-coment').onfocus = calleVacia

                function hacerEdicionDire(evt) {
                    evt.preventDefault()

                    const nuevaCalle = $('#editardir-calle').value
                    const nuevoDpto = $('#editardir-dpto').value
                    const nuevoComent = $('#editardir-coment').value

                    let calleOk = false

                    if(nuevaCalle === calleOriginal && nuevoDpto === dptoOriginal && nuevoComent === comentOriginal) {
                        volverAdirecciones()
                    } else {
                        if (nuevaCalle === '' || nuevaCalle === null) {
                            $('#editardir-calle').classList.add('error')
                            $('#editardir-calle-error').classList.add('activo')
                            $('#editardir-calle').onfocus = function () {
                                $('#editardir-calle').classList.remove('error')
                                $('#editardir-calle-error').classList.remove('activo')
                            }
                            calleOk = false
                        } else {
                            $('#editardir-calle').classList.add('bien')
                            calleOk = true
                        }

                        if (calleOk === true) {

                            const listaDireccion = []

                            let direcciones = diresDelCliente.filter(direccion => direccion.idc === datosDelCliente[0].id)
                            for (dire of direcciones) {
                                if (dire.id === idDireccion) {
                                    dire.calle = nuevaCalle
                                    dire.dpto = nuevoDpto
                                    dire.comentario = nuevoComent
                                }
                                listaDireccion.push(dire)
                            }

                            localStorage.setItem('Direcciones', JSON.stringify(listaDireccion))

                            volverAdirecciones()

                        } else {
                            return
                        }

                    }
                    
                    function volverAdirecciones() {
                        $('#despleg__dir--edit').classList.remove('activo')

                        setTimeout(function () {
                            const pag = 'direcciones.html'
                            const ini = 'direcciones'
                            fetch(pag)
                                .then((url) => {
                                    return url.text()
                                })
                                .then((seccion) => {
                                    $('#secciones').innerHTML = seccion
                                    mostrarContenidos(ini)
                                })
                                .catch((err) => {
                                    console.log(err)
                                })
                        }, 250)
                    }
                }

                $('#editar-dir-form').addEventListener('submit', hacerEdicionDire)
            }

            function eliminarDire(laDireccion) {

                const direParaBorrar = diresDelCliente.filter(direcciones => direcciones.id === laDireccion)

                console.log(direParaBorrar)

                const direParaBorrarId = direParaBorrar[0].id
                const direParaBorrarEstadoSelect = direParaBorrar[0].seleccionada

                console.log(direParaBorrarId)

                Swal.fire({
                    title: '<h1 class="contenido__confirm--h1">¿Está seguro que desea eliminar esta dirección?</h1>',
                    width: '90vw',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    customClass: {
                        confirmButton: 'contenido__confirm--btn_ok',
                        denyButton: 'contenido__confirm--btn_mdf'
                    },
                    buttonsStyling: false,
                    showDenyButton: true,
                    //showCancelButton: true,
                    confirmButtonText: 'Confirmar',
                    denyButtonText: `Cancelar`,
                }).then((result) => {
        
                    if (result.isConfirmed) {

                        let listaDireccion = []

                        let direcciones = diresDelCliente.filter(direccion => direccion.idc === datosDelCliente[0].id)
                        for (dire of direcciones) {
                            listaDireccion.push(dire)
                        }

                        const nuevaListaDirecciones = listaDireccion.filter(direccion => direccion.id != direParaBorrarId)

                        let diresOrdenadas = nuevaListaDirecciones.sort((a, b) => {
                            const calleA = b.calle.toLowerCase()
                            const calleB = a.calle.toLowerCase()
                            if(calleA > calleB){
                                return -1
                            }
                            if(calleA < calleB){
                                return 1
                            }
            
                            return 0
                        })

                        if(direParaBorrarEstadoSelect === true) {
                            diresOrdenadas[0].seleccionada = true

                        }

                        localStorage.setItem('Direcciones', JSON.stringify(nuevaListaDirecciones))
        
                        setTimeout(function () {
                            const pag = 'direcciones.html'
                            const ini = 'direcciones'
                            fetch(pag)
                                .then((url) => {
                                    return url.text()
                                })
                                .then((seccion) => {
                                    $('#secciones').innerHTML = seccion
                                    mostrarContenidos(ini)
                                })
                                .catch((err) => {
                                    console.log(err)
                                })
                        }, 250)
        
                    } else if (result.isDenied) {
        
                        return
        
                    }
                })

            }
        }

        $('#volver-inicio-1').onclick = volverInicio
        $('#volver-inicio-2').onclick = volverInicio
        $('#agregar-nueva-dir').onclick = direccionesAgregar

        gestionarDirecciones()
        accionesDire()

    }

    if (ubicador === 'buscador') {

        $('#inicio-volver').onclick = function() {
            const pag = 'inicio.html'
            const ini = 'inicio'
            fetch(pag)
                .then((url) => {
                    return url.text()
                })
                .then((seccion) => {
                    $('#secciones').innerHTML = seccion
                    mostrarContenidos(ini)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        function mostrarUltimasBusquedas() {

            const busquedasRecientes = busquedasDelCliente.filter(busquedas => busquedas.idc === datosDelCliente[0].id)

            if (busquedasRecientes.length === 0) {

                $('#busquedas-recientes').classList.remove('activo')

            } else {

                console.log(busquedasRecientes)

                const busquedasOrdenadas = busquedasRecientes.sort((a, b) => {
                    const fechaA = a.fecha.toLowerCase()
                    const fechaB = b.fecha.toLowerCase()
                    if (fechaA > fechaB) {
                        return -1
                    }
                    if (fechaA < fechaB) {
                        return 1
                    }

                    return 0
                })

                //console.log(busquedasOrdenadas)

                const sieteUltimas = busquedasOrdenadas.slice(0, 7)

                console.log(sieteUltimas)

                console.log('************')

                for (const busqueda of sieteUltimas) {
                    const fechaBusqueda = moment(busqueda.fecha)
                    const diferencia = fechaBusqueda.fromNow()
                    loBuscado = document.createElement('li')
                    loBuscado.id = `busqueda-gral-${busqueda.terminos}`
                    loBuscado.innerHTML = `<p>${busqueda.terminos} (${diferencia})</p>
                                            <span id="eliminar-busqueda-${busqueda.id}"><i class="fa-solid fa-xmark"></i></span>`
                    $('#busquedas-recientes-lista').appendChild(loBuscado)
                }

            }

            
        }

        function accionesBusqueda() {
            const todasLasBusquedas = busquedasDelCliente.filter(busquedas => busquedas.idc === datosDelCliente[0].id)
            for(const busqueda of todasLasBusquedas){
                const idBusca = busqueda.id
                $(`#eliminar-busqueda-${idBusca}`).onclick = function() {
                    eliminarBusqueda(idBusca)
                }
            }

            function eliminarBusqueda(idBusqueda) {

                const listaBusquedas = []

                let busquedas = busquedasDelCliente
                for (busca of busquedas) {
                    if (busca.id != idBusqueda) {
                        listaBusquedas.push(busca)
                    }
                }

                localStorage.setItem('Busquedas', JSON.stringify(listaBusquedas))

                setTimeout(function () {
                    const pag = 'buscador.html'
                    const ini = 'buscador'
                    fetch(pag)
                        .then((url) => {
                            return url.text()
                        })
                        .then((seccion) => {
                            $('#secciones').innerHTML = seccion
                            mostrarContenidos(ini)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }, 10)

            }
        }

        function mostrarBusquedasPopulares(){

            const busquedasPopularesFiltradas = busquedasDelCliente.filter(busquedas => busquedas.categ === 0)

            const objTerminosRepetidos = busquedasPopularesFiltradas.reduce((contador, busqueda) => {
                const terminos = busqueda.terminos.toLowerCase()
                if (!contador[terminos]) {
                    contador[terminos] = 1
                } else {
                    contador[terminos]++
                }
                return contador
            }, {})

            const arrayTerminosRepetidos = Object.entries(objTerminosRepetidos).map(([key, value]) => ({ [key]: value }))

            const terminosRepetidosOrdenado = arrayTerminosRepetidos.sort((a, b) => {
                const valorA = Object.values(a)[0]
                const valorB = Object.values(b)[0]
                return valorB - valorA
            })

            //console.log(terminosRepetidosOrdenado)

            const valoresUnicos = []
            const topCinco = []

            for (let i = 0; i < terminosRepetidosOrdenado.length && topCinco.length < 5; i++) {
                const valor = Object.values(terminosRepetidosOrdenado[i])[0]
                if (!valoresUnicos.includes(valor)) {
                    valoresUnicos.push(valor)
                    topCinco.push(terminosRepetidosOrdenado[i])
                }
            }

            const cincoMayoresValores = topCinco.map(obj => Object.values(obj)[0])

            const losMasBuscados = terminosRepetidosOrdenado.filter(obj => {
                const valor = Object.values(obj)[0]
                return valor >= cincoMayoresValores[4] && valor <= cincoMayoresValores[0]
            })

            for (const buscado of losMasBuscados) {
                const clave = Object.keys(buscado)[0]
                const valor = Object.values(buscado)[0]
                laBusqueda = document.createElement('p')
                laBusqueda.id = `busqueda-gral-${clave}`
                laBusqueda.innerText = `${clave} (${valor})`
                $('#busquedas-populares-contenedor').appendChild(laBusqueda)
            }

        }
        
        function mostrarResultadosBusqueda(terminos) {

            $('#busquedas-recientes').classList.remove('activo')
            $('#busquedas-populares').classList.remove('activo')
            $('#busqueda-general-resultados').classList.add('activo')

            $('#cerrar-resultados-busqueda').onclick = function(){

                setTimeout(function(){
                    const pag = 'buscador.html'
                    const ini = 'buscador'
                    fetch(pag)
                        .then((url) => {
                            return url.text()
                        })
                        .then((seccion) => {
                            $('#busquedas-recientes').classList.add('activo')
                            $('#busquedas-populares').classList.add('activo')
                            $('#busqueda-general-resultados').classList.remove('activo')
                            $('#secciones').innerHTML = seccion
                            mostrarContenidos(ini)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }, 10)

            }

            const losTerminos = terminos.toLowerCase()
            const resultados = []

            for (let i = 0; i < productos.length; i+=1) {
                let nombre = productos[i].nombre.toLowerCase()
                let desc = productos[i].desc.toLowerCase()
                let tipo = productos[i].tipo.toLowerCase()
                if (nombre.includes(losTerminos) || desc.includes(losTerminos) || tipo.includes(losTerminos)) {
                    resultados.push(productos[i])
                }
            }

            if (resultados.length > 0) {

                const resultadosOrdenados = resultados.sort((a, b) => {
                    if (a.idc > b.idc) {
                        return 1
                    }
                    if (a.idc < b.idc) {
                        return -1
                    }

                    if (a.precio < b.precio) {
                        return 1
                    }
                    if (a.precio > b.precio) {
                        return -1
                    }

                    return 0
                })

                //console.log(resultadosOrdenados)

                for (const producto of resultadosOrdenados) {
                    elProd = document.createElement('div')
                    elProd.id = `resultado-producto-${producto.id}`
                    elProd.className = 'busqueda__resultados--box'
                    elProd.innerHTML = `<div class="busqueda__resultados--box_img">
                                            <img class="resultados__box--foto" src="${producto.foto}">
                                            <img class="resultados__box--cabecera" src="${producto.cabecera}">
                                        </div>
                                        <div class="busqueda__resultados--box_txt">
                                            <h2>${producto.nombre}</h2>
                                            <h3><span><i class="fa-solid fa-star"></i></span>${producto.puntuacion}</h3>
                                            <p>$${producto.precio}</p>
                                            <p>Envío $200</p>
                                        </div>`
                    $('#busqueda-resultados').appendChild(elProd)
                }

            } else {
                sinResult = document.createElement('p')
                sinResult.innerText = 'Sin resultados'
                $('#busqueda-resultados').appendChild(sinResult)
            }

        }

        function busquedaGeneral() {
            
            function realizarBusqueda(evt) {
                evt.preventDefault()

                const ahora = moment()
                const idBusqueda = Date.now()
                const clienteIdBusqueda = datosDelCliente[0].id
                const terminosDeBusqueda = $('#buscador-gral-ipt').value
                const categBusqueda = 0
                const fechaDeBusqueda = ahora.format(FECHA_FORMATO)

                const listaBusquedas = []
    
                let busquedas = busquedasDelCliente
                for(busca of busquedas){
                    listaBusquedas.push(busca)
                }
                
                const nuevaBusquedaObj = {
                    id: idBusqueda,
                    idc: clienteIdBusqueda,
                    terminos: terminosDeBusqueda,
                    categ: categBusqueda,
                    fecha: fechaDeBusqueda
                }
    
                listaBusquedas.push(nuevaBusquedaObj)
                //console.log(listaBusquedas)
                localStorage.setItem('Busquedas', JSON.stringify(listaBusquedas))

                $('#buscador-gral-form').reset()

                mostrarResultadosBusqueda(terminosDeBusqueda)

            }

            $('#buscador-gral-form').addEventListener('submit', realizarBusqueda)
            
        }

        

        mostrarUltimasBusquedas()

        mostrarBusquedasPopulares()

        accionesBusqueda()

        busquedaGeneral()



        /*

        function realizarBusqueda(evt){
            evt.preventDefault()
            const ahora = moment()

            const idBusqueda = Date.now()
            const clienteIdBusqueda = datosDelCliente[0].id
            const terminosDeBusqueda = $('#buscador-gral-ipt').value
            const categBusqueda = 0
            const fechaDeBusqueda = ahora.format(FECHA_FORMATO)

            if(JSON.parse(localStorage.getItem('Busquedas')) === null){}

        
            if(JSON.parse(localStorage.getItem('Busquedas')) === null){

                let fecha = new Date()
                const fechaDeBusqueda = fecha.toLocaleString() 
                
                const buscaObj = {
                    id: Date.now(),
                    idc: id,
                    claves: '',
                    categ: '',
                    fecha: fechaDeBusqueda
                }

                localStorage.setItem('Busquedas', JSON.stringify(buscaObj))

            }



        }

        $('#buscador-gral-form').addEventListener('submit', realizarBusqueda)
        
        
        function busquedasRecientes() {
            if(JSON.parse(localStorage.getItem('Busquedas')) === null) {
                return
            } else {
                console.log('acá va la función para mostrar búsquedas recientes')
            }
        }
        
        function verificarBusquedas() {
            if(JSON.parse(localStorage.getItem('Busquedas')) === null){

                let fecha = new Date()
                const fechaDeBusqueda = fecha.toLocaleString() 
                
                const buscaObj = {
                    id: Date.now(),
                    idc: id,
                    claves: '',
                    categ: '',
                    fecha: fechaDeBusqueda
                }

                localStorage.setItem('Busquedas', JSON.stringify(buscaObj))



            }
        }
        */
        


    }

    // RAMOS DE FLORES

    if (ubicador === 'flores') {

        const volverUno = document.querySelectorAll('#flores__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }

        const volverDos = document.querySelectorAll('#flores__volver--2 i')
        console.log(volverDos)
        for(let link of volverDos){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsUno = document.querySelectorAll('#cabeza__subcat--nav_01 img')
        console.log(navSubcatsUno)
        for(let link of navSubcatsUno){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsDos = document.querySelectorAll('#flores__cabeza--menu_links a')
        console.log(navSubcatsDos)
        for(let link of navSubcatsDos){
            link.addEventListener('click', pedirPag)
        }

        window.addEventListener('scroll', floresCabezaMenuDesp)

        function floresCabezaMenuDesp() {
            if (!$('#flores')) {
                return
            } else {
                const alturaCabeza = $('#flores__cabeza').offsetHeight
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
                if (scrollActual > alturaCabeza) {
                    $('#flores__cabeza--menu').classList.add('activo')
                } else {
                    if ($('#flores__cabeza--menu').classList.contains('activo')) {
                        $('#flores__cabeza--menu').classList.remove('activo')
                    }
                }
            }
    
        }

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
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA > nombreB){
                        return -1
                    }
                    if(nombreA < nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
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

        //floresCabezaMenuDesp()
        
        mostrarMasVendFlor()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'especiales') {

        const volverUno = document.querySelectorAll('#flores__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA > nombreB){
                        return -1
                    }
                    if(nombreA < nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
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
                                        <h2>${ramo.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${ramo.puntuacion}</h3>
                                        <p>$${ramo.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'basicos') {

        const volverUno = document.querySelectorAll('#flores__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        function mostrarMasVendBasic() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos básicos')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos básicos')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA > nombreB){
                        return -1
                    }
                    if(nombreA < nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
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
                                        <h2>${ramo.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${ramo.puntuacion}</h3>
                                        <p>$${ramo.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        mostrarMasVendBasic()
    
        mostrarProdsTodos()
    }

    // ARREGLOS FLORALES

    if (ubicador === 'arreglos-florales') {

        const volverUno = document.querySelectorAll('#arreglos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }

        const volverDos = document.querySelectorAll('#arreglos__volver--2 i')
        console.log(volverDos)
        for(let link of volverDos){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsUno = document.querySelectorAll('#cabeza__subcat--nav_01 img')
        console.log(navSubcatsUno)
        for(let link of navSubcatsUno){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsDos = document.querySelectorAll('#arreglos__cabeza--menu_links a')
        console.log(navSubcatsDos)
        for(let link of navSubcatsDos){
            link.addEventListener('click', pedirPag)
        }

        window.addEventListener('scroll', arregCabezaMenuDesp)

        function arregCabezaMenuDesp() {
            if (!$('#arreglos')) {
                return
            } else {
                const alturaCabeza = $('#arreglos__cabeza').offsetHeight
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
                if (scrollActual > alturaCabeza) {
                    $('#arreglos__cabeza--menu').classList.add('activo')
                } else {
                    if ($('#arreglos__cabeza--menu').classList.contains('activo')) {
                        $('#arreglos__cabeza--menu').classList.remove('activo')
                    }
                }
            }
    
        }

        function mostrarMasVendArreg() {
    
            function masVendidosArreg(productos) {
                const filtrados = productos.filter(producto => producto.idc === 2)
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 7)
            }
        
            const arregMasVendidos = masVendidosArreg(productos)
            console.log(arregMasVendidos)
            for (const masVendido of arregMasVendidos) {
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
    
        function mostrarProdsTodos() {
    
            function todosLosArregs(productos) {
                const filtrados = productos.filter(producto => producto.idc === 2)
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const losArreg = todosLosArregs(productos)
            console.log(losArreg)
            for (const arreg of losArreg) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${arreg.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${arreg.foto}">
                                        <img class="prodstodos__box--cabecera" src="${arreg.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${arreg.nombre} (${arreg.tipo})</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${arreg.puntuacion}</h3>
                                        <p>$${arreg.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }

        //floresCabezaMenuDesp()
        
        mostrarMasVendArreg()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'regalos') {

        const volverUno = document.querySelectorAll('#arreglos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todosLosRegalos(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Regalos')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const losRegalos = todosLosRegalos(productos)
            console.log(losRegalos)
            for (const regalo of losRegalos) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${regalo.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${regalo.foto}">
                                        <img class="prodstodos__box--cabecera" src="${regalo.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${regalo.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${regalo.puntuacion}</h3>
                                        <p>$${regalo.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'casamientos') {

        const volverUno = document.querySelectorAll('#arreglos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todosLosCasam(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Casamientos')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const losCasam = todosLosCasam(productos)
            console.log(losCasam)
            for (const casam of losCasam) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${casam.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${casam.foto}">
                                        <img class="prodstodos__box--cabecera" src="${casam.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${casam.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${casam.puntuacion}</h3>
                                        <p>$${casam.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'velorios') {

        const volverUno = document.querySelectorAll('#arreglos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todosLosVel(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Velorios')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const losVelorios = todosLosVel(productos)
            console.log(losVelorios)
            for (const velorio of losVelorios) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${velorio.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${velorio.foto}">
                                        <img class="prodstodos__box--cabecera" src="${velorio.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${velorio.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${velorio.puntuacion}</h3>
                                        <p>$${velorio.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }

    // PLANTAS

    if (ubicador === 'plantas') {

        const volverUno = document.querySelectorAll('#plantas__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }

        const volverDos = document.querySelectorAll('#plantas__volver--2 i')
        console.log(volverDos)
        for(let link of volverDos){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsUno = document.querySelectorAll('#cabeza__subcat--nav_01 img')
        console.log(navSubcatsUno)
        for(let link of navSubcatsUno){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsDos = document.querySelectorAll('#plantas__cabeza--menu_links a')
        console.log(navSubcatsDos)
        for(let link of navSubcatsDos){
            link.addEventListener('click', pedirPag)
        }

        window.addEventListener('scroll', plantasCabezaMenuDesp)

        function plantasCabezaMenuDesp() {
            if (!$('#plantas')) {
                return
            } else {
                const alturaCabeza = $('#plantas__cabeza').offsetHeight
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
                if (scrollActual > alturaCabeza) {
                    $('#plantas__cabeza--menu').classList.add('activo')
                } else {
                    if ($('#plantas__cabeza--menu').classList.contains('activo')) {
                        $('#plantas__cabeza--menu').classList.remove('activo')
                    }
                }
            }
    
        }

        function mostrarMasVendPlants() {
    
            function masVendidosPlants(productos) {
                const filtrados = productos.filter(producto => producto.idc === 3)
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 7)
            }
        
            const plantsMasVendidos = masVendidosPlants(productos)
            console.log(plantsMasVendidos)
            for (const masVendido of plantsMasVendidos) {
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
                $('#plantas__contenido--masvendidos').appendChild(elProd)
            }
        }
    
        function mostrarProdsTodos() {
    
            function todasLasPlants(productos) {
                const filtrados = productos.filter(producto => producto.idc === 3)
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const lasPlants = todasLasPlants(productos)
            console.log(lasPlants)
            for (const plant of lasPlants) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${plant.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${plant.foto}">
                                        <img class="prodstodos__box--cabecera" src="${plant.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${plant.nombre} (${plant.tipo})</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${plant.puntuacion}</h3>
                                        <p>$${plant.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }

        //floresCabezaMenuDesp()
        
        mostrarMasVendPlants()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'interior') {

        const volverUno = document.querySelectorAll('#plantas__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todasLasPlantInte(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Interior')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const lasPlantInte = todasLasPlantInte(productos)
            console.log(lasPlantInte)
            for (const planta of lasPlantInte) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${planta.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${planta.foto}">
                                        <img class="prodstodos__box--cabecera" src="${planta.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${planta.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${planta.puntuacion}</h3>
                                        <p>$${planta.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'exterior') {

        const volverUno = document.querySelectorAll('#plantas__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todasLasPlantExte(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Exterior')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const lasPlantExte = todasLasPlantExte(productos)
            console.log(lasPlantExte)
            for (const planta of lasPlantExte) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${planta.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${planta.foto}">
                                        <img class="prodstodos__box--cabecera" src="${planta.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${planta.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${planta.puntuacion}</h3>
                                        <p>$${planta.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'cactus') {

        const volverUno = document.querySelectorAll('#plantas__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todosLosCactus(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Cáctus')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const losCactus = todosLosCactus(productos)
            console.log(losCactus)
            for (const cactus of losCactus) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${cactus.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${cactus.foto}">
                                        <img class="prodstodos__box--cabecera" src="${cactus.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${cactus.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${cactus.puntuacion}</h3>
                                        <p>$${cactus.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }

    // INSUMOS

    if (ubicador === 'insumos') {

        const volverUno = document.querySelectorAll('#insumos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }

        const volverDos = document.querySelectorAll('#insumos__volver--2 i')
        console.log(volverDos)
        for(let link of volverDos){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsUno = document.querySelectorAll('#cabeza__subcat--nav_01 img')
        console.log(navSubcatsUno)
        for(let link of navSubcatsUno){
            link.addEventListener('click', pedirPag)
        }

        const navSubcatsDos = document.querySelectorAll('#insumos__cabeza--menu_links a')
        console.log(navSubcatsDos)
        for(let link of navSubcatsDos){
            link.addEventListener('click', pedirPag)
        }

        window.addEventListener('scroll', insumosCabezaMenuDesp)

        function insumosCabezaMenuDesp() {
            if (!$('#insumos')) {
                return
            } else {
                const alturaCabeza = $('#insumos__cabeza').offsetHeight
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
                if (scrollActual > alturaCabeza) {
                    $('#insumos__cabeza--menu').classList.add('activo')
                } else {
                    if ($('#insumos__cabeza--menu').classList.contains('activo')) {
                        $('#insumos__cabeza--menu').classList.remove('activo')
                    }
                }
            }
    
        }

        function mostrarMasVendInsum() {
    
            function masVendidosInsum(productos) {
                const filtrados = productos.filter(producto => producto.idc === 4)
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 7)
            }
        
            const insumMasVendidos = masVendidosInsum(productos)
            console.log(insumMasVendidos)
            for (const masVendido of insumMasVendidos) {
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
                $('#insumos__contenido--masvendidos').appendChild(elProd)
            }
        }
    
        function mostrarProdsTodos() {
    
            function todosLosInsum(productos) {
                const filtrados = productos.filter(producto => producto.idc === 4)
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const losInsum = todosLosInsum(productos)
            console.log(losInsum)
            for (const insum of losInsum) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${insum.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${insum.foto}">
                                        <img class="prodstodos__box--cabecera" src="${insum.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${insum.nombre} (${insum.tipo})</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${insum.puntuacion}</h3>
                                        <p>$${insum.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }

        //floresCabezaMenuDesp()
        
        mostrarMasVendInsum()
    
        mostrarProdsTodos()
    }

    if (ubicador === 'semillas') {

        const volverUno = document.querySelectorAll('#insumos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todasLasSem(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Semillas')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const lasSemillas = todasLasSem(productos)
            console.log(lasSemillas)
            for (const semillas of lasSemillas) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${semillas.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${semillas.foto}">
                                        <img class="prodstodos__box--cabecera" src="${semillas.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${semillas.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${semillas.puntuacion}</h3>
                                        <p>$${semillas.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }    

    if (ubicador === 'macetas') {

        const volverUno = document.querySelectorAll('#insumos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todasLasMacetas(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Macetas')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const lasMacetas = todasLasMacetas(productos)
            console.log(lasMacetas)
            for (const maceta of lasMacetas) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${maceta.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${maceta.foto}">
                                        <img class="prodstodos__box--cabecera" src="${maceta.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${maceta.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${maceta.puntuacion}</h3>
                                        <p>$${maceta.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    }  

    if (ubicador === 'tierras') {

        const volverUno = document.querySelectorAll('#insumos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todasLasTierras(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Tierras')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const lasTierras = todasLasTierras(productos)
            console.log(lasTierras)
            for (const tierra of lasTierras) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${tierra.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${tierra.foto}">
                                        <img class="prodstodos__box--cabecera" src="${tierra.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${tierra.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${tierra.puntuacion}</h3>
                                        <p>$${tierra.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    } 

    if (ubicador === 'fertilizantes') {

        const volverUno = document.querySelectorAll('#insumos__volver--1 i')
        console.log(volverUno)
        for(let link of volverUno){
            link.addEventListener('click', pedirPag)
        }
    
        /*
        function mostrarMasVendEsp() {
    
            function masVendidosFlor(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Ramos especiales')
                const ordenados = filtrados.sort((a, b) => b.vendidos - a.vendidos)
                return ordenados.slice(0, 5)
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
                $('#arreglos__contenido--masvendidos').appendChild(elProd)
            }
        }
        */
    
        function mostrarProdsTodos() {
    
            function todosLosFerti(productos) {
                const filtrados = productos.filter(producto => producto.tipo === 'Fertilizantes')
                const ordenados = filtrados.sort((a, b) => {
                    const nombreA = a.nombre.toLowerCase()
                    const nombreB = b.nombre.toLowerCase()
                    if(nombreA < nombreB){
                        return -1
                    }
                    if(nombreA > nombreB){
                        return 1
                    }

                    return 0
                })
                return ordenados
            }
    
            const losFerti = todosLosFerti(productos)
            console.log(losFerti)
            for (const ferti of losFerti) {
                elProd = document.createElement('div')
                elProd.id = `contenido__prodstodos--prod${ferti.id}`
                elProd.className = 'contenido__prodstodos--box'
                elProd.innerHTML = `<div class="contenido__prodstodos--box_img">
                                        <img class="prodstodos__box--foto" src="${ferti.foto}">
                                        <img class="prodstodos__box--cabecera" src="${ferti.cabecera}">
                                    </div>
                                    <div class="contenido__prodstodos--box_txt">
                                        <h2>${ferti.nombre}</h2>
                                        <h3><span><i class="fa-solid fa-star"></i></span>${ferti.puntuacion}</h3>
                                        <p>$${ferti.precio}</p>
                                        <p>Envío $200</p>
                                    </div>`
                $('#contenido-prodstodos').appendChild(elProd)
            }
        }
    
        //floresCabezaMenuDesp()
        
        //mostrarMasVendEsp()
    
        mostrarProdsTodos()
    } 
    
}

function pedirPag(evt) {
    evt.preventDefault()
    const indicadorPag = evt.target.dataset.categ
    const pag = indicadorPag + '.html'

    fetch(pag)
        .then((url)=>{
            return url.text()
        })
        .then((seccion)=>{
            $('#secciones').innerHTML = seccion
            mostrarContenidos(indicadorPag)
        })
        .catch((err)=>{
            console.log(err)
        })
}