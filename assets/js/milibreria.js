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
        tipo: 'Cactus',
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
        tipo: 'Cactus',
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
        tipo: 'Cactus',
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

let datosCliente = []

document.addEventListener('DOMContentLoaded', () => {
    if(JSON.parse(localStorage.getItem('Cliente')) != null){
        estaRegistrado()
    } else {
        console.log('hola')
        const pag = 'registro.html'
        fetch(pag)
        .then((url)=>{
            //console.log(url.text())
            return url.text()
        })
        .then((seccion)=>{
            $('#secciones').innerHTML = seccion
            registrarse()
        })
        .catch((err)=>{
            console.log(err)
        })
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

const hacerElRegistro = (evt) => {
    evt.preventDefault()
    const nombre = $('#nombre').value
    const apellido = $('#apellido').value
    const correo = $('#correo').value
    const direccion = $('#direccion').value

    Swal.fire('Registrado con éxito')
    
    const clienteObj = {
        id: Date.now(),
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        direccion: direccion
    }
    datosCliente.push(clienteObj)

    console.log(datosCliente)
    localStorage.setItem('Cliente', JSON.stringify(datosCliente))
    estaRegistrado()
}


function registrarse() {
    
    $('#form__registro').addEventListener('submit', hacerElRegistro)
}

function mostrarContenidos (ubicador) { 

    if (ubicador === 'inicio') {

        const linksProds = document.querySelectorAll('#menu__user--prods a')
        for(let link of linksProds){
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
                
        $('#cabeza__menu--btn').onclick = abrirMenuHamb
        $('#cabeza__anun--btn').onclick = abrirMenuAnun
        $('#cabeza__anun--cer').onclick = cerrarMenuAnun
        $('#cabeza__dir--btn').onclick = abrirMenuDir
        $('#cabeza__anun--nove').onclick = anunNove
        $('#cabeza__anun--prom').onclick = anunProm

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

        mostrarMasVendIdx()

    }

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
                const ordenados = filtrados.sort((a, b) => a.id - b.id)
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
                const ordenados = filtrados.sort((a, b) => a.id - b.id)
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

    
