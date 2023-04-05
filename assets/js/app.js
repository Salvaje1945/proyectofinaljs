// FUNCIÓN PARA ELEMENTOS DEL DOM

function $ (id) {
    return document.querySelector(id)
}

// CATEGORÍAS Y PRODUCTOS

const categorias = [
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

const productos = [
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

const datosCliente = []

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
        .then((url)=>{
            return url.text()
        })
        .then((seccion)=>{
            $('#secciones').innerHTML = seccion
            mostrarContenidos(ini)
        })
        .catch((err)=>{
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

    $('#nombre').onblur = nomVacio

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

    $('#correo').onfocus = nomVacio
    $('#correo').onblur = correoVacio

    function direVacio() {
        if ($('#direccion').value === null || $('#direccion').value === ''){
            $('#direccion').classList.add('error')
            $('#error-direccion').classList.add('activo')
            $('#direccion').onfocus = function() {
                $('#direccion').classList.remove('error')
                $('#error-direccion').classList.remove('activo')
            }
        } else {
            $('#direccion').classList.add('bien')
        }
    }

    $('#direccion').onfocus = function () {
        nomVacio()
        correoVacio()
    }
    $('#direccion').onblur = direVacio

    function movilVacio() {
        if ($('#movil').value === null || $('#movil').value === '' || isNaN(Number($('#movil').value)) || ($('#movil').value.lenght < 13 && $('#movil').value.lenght >= 14)){
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

    $('#movil').onfocus = function () {
        nomVacio()
        correoVacio()
        direVacio()
    }
    $('#movil').onblur = movilVacio

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

    $('#pass1').onfocus = function () {
        nomVacio()
        correoVacio()
        direVacio()
        movilVacio()
    }
    $('#pass1').onblur = passUnoVacio

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
            $('#pass1').classList.add('error')
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

    $('#pass2').onfocus = function () {
        nomVacio()
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
    const nombre = $('#nombre').value
    const correo = $('#correo').value
    const direccion = $('#direccion').value
    const movil = Number($('#movil').value)
    const passUno = $('#pass1').value
    const passDos = $('#pass2').value

    let nomOk = false
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

    if (direccion === null || direccion === '') {
        $('#direccion').classList.add('error')
        $('#error-direccion').classList.add('activo')
        $('#direccion').onfocus = function () {
            $('#direccion').classList.remove('error')
            $('#error-direccion').classList.remove('activo')
        }
        direOk = false
    } else {
        $('#direccion').classList.add('bien')
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

    if (nomOk === true && correOk === true && direOk === true && moviOk === true && pass === true) {

        //Swal.fire('Registrado con éxito')

        Swal.fire({
            title: '<h1 class="contenido__confirm--h1">Por favor, confirme sus datos:</h1>',
            html: `<p class="contenido__confirm--p"><span>Nombre:</span> ${nombre}</p>
            <p class="contenido__confirm--p"><span>Correo:</span> ${correo}</p>
            <p class="contenido__confirm--p"><span>Dirección:</span> ${direccion}</p>
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
                    id: Date.now(),
                    nombre: nombre,
                    correo: correo,
                    direccion: direccion,
                    movil: movil,
                    pass: passDos,
                    sesionactiva: true
                }

                datosCliente.push(clienteObj)
                //console.log(datosCliente)
                localStorage.setItem('Cliente', JSON.stringify(datosCliente))

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

    if (ubicador === 'inicio') {

        const hambLinksProds = document.querySelectorAll('#menu__user--prods a')
        for(let link of hambLinksProds){
            link.addEventListener('click', pedirPag)
        }

        const contProdsLinks = document.querySelectorAll('#contenido-productos-bx .contenido__productos--box')
        for(let link of contProdsLinks){
            //console.log(link)
            /*link.addEventListener('click', (evt)=>{
                console.dir(evt.target)
            })*/
            link.addEventListener('click', pedirPag)
        }

        const contOtrosProdsLinks = document.querySelectorAll('#contenido-otrosprods-bx .contenido__otrosprods--box')
        for(let link of contOtrosProdsLinks){
            //console.log(link)
            /*link.addEventListener('click', (evt)=>{
                console.dir(evt.target)
            })*/
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
        
                
        $('#cabeza__menu--btn').onclick = abrirMenuHamb
        $('#hamb-cerrar-sesion').onclick = cerrarSesion
        $('#cabeza__anun--btn').onclick = abrirMenuAnun
        $('#cabeza__anun--cer').onclick = cerrarMenuAnun
        $('#cabeza__dir--btn').onclick = abrirMenuDir
        $('#cabeza__anun--nove').onclick = anunNove
        $('#cabeza__anun--prom').onclick = anunProm

        function mostrarDatoscliente() {
            $('#cabeza-menu-user_nom').innerText = datosDelCliente[0].nombre
            $('#cabeza-dir-principal').innerText = datosDelCliente[0].direccion
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

const linksProds = document.querySelectorAll('#menu__user--prods a')

for(let link of linksProds){
    link.addEventListener('click', pedirPag)
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

    
