// Catálogo compartido de BiciFast. Usado por catalogo.html, producto.html y carrito.html.
// Cada color puede tener su propio "images" (array de fotos de esa bici en ese color).
// Si un color no trae "images", la ficha de producto usa la galería general del producto.
// "variants" es para bicis que cambian de precio según el tamaño (aro) — cada variante
// puede traer su propia "image". Cuando existe, la ficha muestra un selector que cambia
// el precio y la foto principal.
const BICIFAST_PRODUCTS = [
  {
    id: "bmx-rayo-grueso",
    name: "BMX Rayo Grueso",
    brand: "BiciFast",
    category: "bmx",
    categoryLabel: "Bicicletas BMX",
    price: 399.90,
    oldPrice: null,
    badge: "Nuevo",
    rating: 4.8,
    reviews: 6,
    short: "BMX de eje grueso con 144 rayos y 4 tubos PETS, ideal para trucos y uso urbano.",
    description: "BMX de eje grueso con 144 rayos y 4 tubos PETS. Resistente y ágil, ideal para trucos y uso urbano intenso.",
    image: "img/productos/bmx/bmx-rayo-grueso-azul-399.90.jpg",
    gallery: ["img/productos/bmx/bmx-rayo-grueso-azul-399.90.jpg"],
    colors: [
      { name: "Azul", hex: "#1e5fbf", accent: "#111111", images: ["img/productos/bmx/bmx-rayo-grueso-azul-399.90.jpg"] },
      { name: "Roja", hex: "#c62828", accent: "#111111", images: ["img/productos/bmx/bmx-rayo-grueso-roja-399.90.jpg"] },
      { name: "Verde", hex: "#4caf50", accent: "#111111", images: ["img/productos/bmx/bmx-rayo-grueso-verde-399.90.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Eje": "Grueso", "Rayos": "144", "Tubos": "4 PETS" },
    installments: "Hasta 6 cuotas sin intereses"
  },
  {
    id: "bmx-triple-suspension",
    name: "BMX Triple Suspensión",
    brand: "BiciFast",
    category: "bmx",
    categoryLabel: "Bicicletas BMX",
    price: 490,
    oldPrice: null,
    badge: "Top Ventas",
    rating: 4.9,
    reviews: 9,
    short: "BMX cuadro cromoli con doble freno de disco, aros de aleación magnesio y asiento tipo gel.",
    description: "BMX con cuadro cromoli, doble sistema de frenos de disco, llantas anchas multipropósito, asiento y timón regulable, aros de aleación magnesio, pedales de aluminio, asiento deportivo tipo gel y 4 pets acerados.",
    image: "img/productos/bmx/bmx-triple-suspension-azul-490-1.jpg",
    gallery: [
      "img/productos/bmx/bmx-triple-suspension-azul-490-1.jpg",
      "img/productos/bmx/bmx-triple-suspension-azul-490-2.jpg"
    ],
    colors: [
      { name: "Azul", hex: "#1e5fbf", accent: "#111111", images: ["img/productos/bmx/bmx-triple-suspension-azul-490-1.jpg", "img/productos/bmx/bmx-triple-suspension-azul-490-2.jpg"] },
      { name: "Naranja", hex: "#e67e22", accent: "#111111", images: ["img/productos/bmx/bmx-triple-suspension-naranja-490-1.jpg", "img/productos/bmx/bmx-triple-suspension-naranja-490-2.jpg"] },
      { name: "Verde", hex: "#4caf50", accent: "#111111", images: ["img/productos/bmx/bmx-triple-suspension-verde-490-1.jpg", "img/productos/bmx/bmx-triple-suspension-verde-490-2.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Cuadro": "Cromoli", "Frenos": "Doble sistema de disco", "Llantas": "Anchas multipropósito", "Asiento y timón": "Regulable", "Aros": "Aleación magnesio", "Pedales": "Aluminio", "Pets": "4 pets acerados" },
    installments: "Hasta 6 cuotas sin intereses"
  },
  {
    id: "phillips-p140",
    name: "Phillips P-140",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 250,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 4,
    short: "Bicicleta infantil con parrilla acolchada, canasta forjada y luces auxiliares.",
    description: "Bicicleta infantil con parrilla acolchada, canasta forjada y auxiliares con luces. Ideal para los primeros pedaleos con seguridad y estilo.",
    image: "img/productos/infantiles/p140-aro12-azul-250.jpg",
    gallery: ["img/productos/infantiles/p140-aro12-azul-250.jpg"],
    colors: [],
    variants: [
      { label: "Aro 12 - Azul", price: 250, image: "img/productos/infantiles/p140-aro12-azul-250.jpg" },
      { label: "Aro 12 - Verde", price: 250, image: "img/productos/infantiles/p140-aro12-verde-250.jpg" },
      { label: "Aro 16", price: 280, image: "img/productos/infantiles/p140-aro16-280.jpg" }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Parrilla": "Acolchada", "Canasta": "Forjada", "Luces": "Auxiliares con luces" },
    installments: null
  },
  {
    id: "phillips-p201",
    name: "Phillips P-201",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 250,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 3,
    short: "Bicicleta infantil con parrilla con respaldar, canasta y asiento con resorte.",
    description: "Bicicleta infantil con parrilla con respaldar, canasta, asiento con resorte y protector de cadena. Diseño seguro y cómodo para niños.",
    image: "img/productos/infantiles/p201-aro12-250.jpg",
    gallery: ["img/productos/infantiles/p201-aro12-250.jpg"],
    colors: [],
    variants: [
      { label: "Aro 12", price: 250, image: "img/productos/infantiles/p201-aro12-250.jpg" },
      { label: "Aro 16", price: 280 },
      { label: "Aro 20", price: 300 }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Parrilla": "Con respaldar", "Canasta": "Incluida", "Asiento": "Con resorte", "Protector": "De cadena" },
    installments: null
  },
  {
    id: "phillips-aro20",
    name: "Phillips Aro 20",
    brand: "Phillips",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 350,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 2,
    short: "Bicicleta aro 20 con suspensión delantera, freno de disco y 18 velocidades.",
    description: "Bicicleta aro 20 con suspensión delantera, freno de disco y sistema de 18 velocidades. Resistente y cómoda para uso diario.",
    image: "img/productos/infantiles/phillips-aro20-350.jpg",
    gallery: ["img/productos/infantiles/phillips-aro20-350.jpg"],
    colors: [],
    sizes: [],
    unavailableSizes: [],
    specs: { "Suspensión": "Delantera", "Freno": "Disco", "Velocidades": "18" },
    installments: null
  },
  {
    id: "phillips-p132",
    name: "Phillips P-132",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 250,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 5,
    short: "Bicicleta infantil con parrilla acolchada, canasta y protector de cadena, en varios tamaños.",
    description: "Bicicleta infantil con parrilla acolchada, canasta y protector de cadena. Disponible en varios tamaños para acompañar el crecimiento de tu hijo.",
    image: "img/productos/infantiles/phillips-p132-aro12-250.jpg",
    gallery: ["img/productos/infantiles/phillips-p132-aro12-250.jpg"],
    colors: [],
    variants: [
      { label: "Aro 12", price: 250, image: "img/productos/infantiles/phillips-p132-aro12-250.jpg" },
      { label: "Aro 16", price: 280, image: "img/productos/infantiles/phillips-p132-aro16-280.jpg" },
      { label: "Aro 20", price: 300, image: "img/productos/infantiles/phillips-p132-aro20-300.jpg" }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Incluye": "Parrilla acolchada, canasta, protector de cadena" },
    installments: null
  },
  {
    id: "phillips-p136",
    name: "Phillips P-136",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 290,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 4,
    short: "Bicicleta infantil con doble suspensión y luces delanteras y auxiliares.",
    description: "Bicicleta infantil con doble suspensión, luces delanteras y auxiliares con luces, para mayor comodidad y visibilidad.",
    image: "img/productos/infantiles/phillips-p136-aro12-280.jpg",
    gallery: ["img/productos/infantiles/phillips-p136-aro12-280.jpg"],
    colors: [],
    variants: [
      { label: "Aro 12", price: 290, image: "img/productos/infantiles/phillips-p136-aro12-280.jpg" },
      { label: "Aro 16", price: 320, image: "img/productos/infantiles/phillips-p136-aro16-320.jpg" }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Suspensión": "Doble", "Luces": "Delanteras y auxiliares con luces" },
    installments: null
  },
  {
    id: "skys-aluminio-360",
    name: "SKYS",
    brand: "SKYS",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 360,
    oldPrice: null,
    badge: "Top Ventas",
    rating: 4.8,
    reviews: 7,
    short: "Montañera de aluminio con suspensión delantera, frenos de disco y asiento tipo gel.",
    description: "Montañera de estructura y aros de aluminio, con suspensión delantera, llantas anchas, mazas de rodaje de aluminio, sistema de frenos de disco, asiento tipo gel deportivo y timbre integrado a la manija.",
    image: "img/productos/montaneras/skys-aluminio-360-negro-1.jpg",
    gallery: [
      "img/productos/montaneras/skys-aluminio-360-negro-1.jpg",
      "img/productos/montaneras/skys-aluminio-360-negro-2.jpg"
    ],
    colors: [
      { name: "Negro / Azul", hex: "#111111", accent: "#1e88e5", images: ["img/productos/montaneras/skys-aluminio-360-negro-1.jpg", "img/productos/montaneras/skys-aluminio-360-negro-2.jpg"] },
      { name: "Rosado", hex: "#c07fd6", accent: "#f06292", images: ["img/productos/montaneras/skys-aluminio-360-rosado-1.jpg", "img/productos/montaneras/skys-aluminio-360-rosado-2.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Estructura": "Aluminio", "Suspensión": "Delantera", "Aros": "Aluminio", "Mazas": "Aluminio", "Frenos": "Disco", "Asiento": "Tipo gel deportivo", "Extras": "Timbre integrado a la manija" },
    installments: "Hasta 6 cuotas sin intereses"
  },
  {
    id: "cross-aro12-equilibrio",
    name: "Cross Aro 12 de Equilibrio",
    brand: "Cross",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 299,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 3,
    short: "Bici de equilibrio sin pedales, cuadro de aleación de magnesio hidroformado, ideal para los primeros pasos en bici.",
    description: "Bicicleta de equilibrio (sin pedales), diseñada para que los niños aprendan a mantener el balance antes de pasar a una bici con pedales. Cuadro de aleación de magnesio hidroformado: liviano y resistente.",
    image: "img/productos/infantiles/cross-aro12-blanca-1.jpg",
    gallery: ["img/productos/infantiles/cross-aro12-blanca-1.jpg", "img/productos/infantiles/cross-aro12-blanca-2.jpg"],
    colors: [
      { name: "Blanca", hex: "#f5f5f5", accent: "#111111", images: ["img/productos/infantiles/cross-aro12-blanca-1.jpg", "img/productos/infantiles/cross-aro12-blanca-2.jpg"] },
      { name: "Violeta", hex: "#8e44ad", accent: "#111111", images: ["img/productos/infantiles/cross-aro12-violeta-1.jpg", "img/productos/infantiles/cross-aro12-violeta-2.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Cuadro": "Aleación de magnesio hidroformado", "Tipo": "Bici de equilibrio (sin pedales)", "Aro": "12" },
    installments: null
  },
  {
    id: "trexx-aro29-doble-suspension",
    name: "Trexx Aro 29 Doble Suspensión",
    brand: "Trex-X",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 750,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 5,
    short: "MTB doble suspensión con cambios Shimano Rapidfire de 21 velocidades y llantas anchas 2.35 Kenda multipropósito.",
    description: "Montañera aro 29 de doble suspensión, equipada con sistema de cambios Shimano Rapidfire de 21 velocidades y llantas anchas 2.35 Kenda multipropósito. Ideal para trocha y uso exigente.",
    image: "img/productos/montaneras/trexx-aro29-azul-1.jpg",
    gallery: ["img/productos/montaneras/trexx-aro29-azul-1.jpg", "img/productos/montaneras/trexx-aro29-azul-2.jpg", "img/productos/montaneras/trexx-aro29-azul-3-cambios.jpg"],
    colors: [
      { name: "Azul", hex: "#1e5fbf", accent: "#111111", images: ["img/productos/montaneras/trexx-aro29-azul-1.jpg", "img/productos/montaneras/trexx-aro29-azul-2.jpg", "img/productos/montaneras/trexx-aro29-azul-3-cambios.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Suspensión": "Doble", "Cambios": "Shimano Rapidfire, 21 velocidades", "Llantas": "Anchas 2.35 Kenda multipropósito", "Aro": "29" },
    installments: null
  },
  {
    id: "fenix-aro29",
    name: "Fénix Aro 29",
    brand: "Fénix",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 599,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 4,
    short: "MTB aro 29 con cuadro hidroformado, 21 velocidades y frenos de disco mecánico.",
    description: "Montañera aro 29 con cuadro hidroformado, sistema de 21 velocidades y frenos de disco mecánico. Ligera y ágil para rutas exigentes.",
    image: "img/productos/montaneras/fenix-roja-1.jpg",
    gallery: ["img/productos/montaneras/fenix-roja-1.jpg", "img/productos/montaneras/fenix-roja-2.jpg"],
    colors: [
      { name: "Roja", hex: "#c62828", accent: "#111111", images: ["img/productos/montaneras/fenix-roja-1.jpg", "img/productos/montaneras/fenix-roja-2.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Cuadro": "Hidroformado", "Velocidades": "21", "Frenos": "Disco mecánico", "Aro": "29" },
    installments: null
  },
  {
    id: "schneider-aro29",
    name: "Schneider Aro 29",
    brand: "Schneider",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 899,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 3,
    short: "MTB full aluminio talla L con sistema de cambios Shimano Altus 8x3 integrado.",
    description: "Montañera aro 29 full aluminio, talla L, con sistema de cambios Shimano Altus 8x3 integrado. Estructura ligera y resistente para rutas largas.",
    image: "img/productos/montaneras/schneider-aro29-amarilla-1.jpg",
    gallery: ["img/productos/montaneras/schneider-aro29-amarilla-1.jpg", "img/productos/montaneras/schneider-aro29-amarilla-2.jpg", "img/productos/montaneras/schneider-aro29-amarilla-3-cambios.jpg"],
    colors: [
      { name: "Amarilla", hex: "#d4d400", accent: "#111111", images: ["img/productos/montaneras/schneider-aro29-amarilla-1.jpg", "img/productos/montaneras/schneider-aro29-amarilla-2.jpg", "img/productos/montaneras/schneider-aro29-amarilla-3-cambios.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Estructura": "Full aluminio", "Talla": "L", "Cambios": "Shimano Altus 8x3 integrado", "Aro": "29" },
    installments: null
  },
  {
    id: "aerofox-aro26-deportiva",
    name: "Aerofox Aro 26 Deportiva",
    brand: "Aerofox",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 290,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 4,
    short: "MTB aro 26 con 18 velocidades tipo moto (gripshift) y aros de aluminio, la opción más accesible.",
    description: "Montañera aro 26 con 18 velocidades tipo moto (gripshift), aros de aluminio y llantas anchas multipropósito. Asiento ligero, pedales de resina y catalina con revestimiento PVC.",
    image: "img/productos/montaneras/aerofox-aro26-azul-1.jpg",
    gallery: ["img/productos/montaneras/aerofox-aro26-azul-1.jpg", "img/productos/montaneras/aerofox-aro26-azul-2.jpg"],
    colors: [
      { name: "Azul", hex: "#1e5fbf", accent: "#111111", images: ["img/productos/montaneras/aerofox-aro26-azul-1.jpg", "img/productos/montaneras/aerofox-aro26-azul-2.jpg"] },
      { name: "Púrpura", hex: "#9c27b0", accent: "#111111", images: ["img/productos/montaneras/aerofox-aro26-purpura-1.jpg", "img/productos/montaneras/aerofox-aro26-purpura-2.jpg"] },
      { name: "Roja", hex: "#c62828", accent: "#111111", images: ["img/productos/montaneras/aerofox-aro26-roja-1.jpg", "img/productos/montaneras/aerofox-aro26-roja-2.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Velocidades": "18, tipo moto (gripshift)", "Aros": "Aluminio", "Llantas": "Anchas multipropósito", "Asiento": "Ligero", "Pedales": "Resina", "Catalina": "Revestimiento PVC", "Aro": "26" },
    installments: null
  },
  {
    id: "aerofox-aro26-mtb",
    name: "Aerofox Aro 26 MTB",
    brand: "Aerofox",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 330,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 5,
    short: "MTB aro 26 con 18 velocidades tipo moto, frenos v-brake de alta precisión y rueda delantera con liberador rápido.",
    description: "Montañera aro 26 con 18 velocidades tipo moto (gripshift), llantas anchas multipropósito de nylon, asiento acolchado tipo gel ancho, frenos v-brake de alta precisión y rueda delantera con liberador manual rápido. Aros doble pared con rayos negros anticorrosión. Garantía de 3 años en chasis y 1 año de servicio técnico.",
    image: "img/productos/montaneras/aerofox-aro26-mtb-amarilla-1.jpg",
    gallery: ["img/productos/montaneras/aerofox-aro26-mtb-amarilla-1.jpg", "img/productos/montaneras/aerofox-aro26-mtb-amarilla-2.jpg"],
    colors: [
      { name: "Amarilla", hex: "#d4d400", accent: "#111111", images: ["img/productos/montaneras/aerofox-aro26-mtb-amarilla-1.jpg", "img/productos/montaneras/aerofox-aro26-mtb-amarilla-2.jpg"] },
      { name: "Verde", hex: "#4caf50", accent: "#111111", images: ["img/productos/montaneras/aerofox-aro26-mtb-verde-1.jpg", "img/productos/montaneras/aerofox-aro26-mtb-verde-2.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Velocidades": "18, tipo moto (gripshift)", "Llantas": "Anchas multipropósito de nylon", "Asiento": "Acolchado tipo gel ancho", "Frenos": "V-brake de alta precisión", "Rueda delantera": "Con liberador manual rápido", "Aros": "Doble pared, rayos negros anticorrosión", "Garantía": "3 años en chasis, 1 año de servicio técnico", "Aro": "26" },
    installments: null
  },
  {
    id: "aerofox-aro26-dama",
    name: "Aerofox Aro 26 Montañera Clásica Dama",
    brand: "Aerofox",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 399,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 3,
    short: "MTB aro 26 para dama, cuadro acerado, 18 velocidades tipo moto y ajuste rápido delantero.",
    description: "Montañera aro 26 clásica para dama, con cuadro acerado, 18 velocidades tipo moto, asiento tipo gel, catalina de acero revestida, pedales con rodajes de vaquelita y aros doble pared de aluminio. Ajuste rápido delantero y sistema de frenos v-brake. Garantía de 3 años en chasis y 1 año de servicio técnico.",
    image: "img/productos/montaneras/aerofox-aro26-dama-rosada-1.jpg",
    gallery: ["img/productos/montaneras/aerofox-aro26-dama-rosada-1.jpg", "img/productos/montaneras/aerofox-aro26-dama-rosada-2.jpg"],
    colors: [
      { name: "Rosada", hex: "#e91e8c", accent: "#111111", images: ["img/productos/montaneras/aerofox-aro26-dama-rosada-1.jpg", "img/productos/montaneras/aerofox-aro26-dama-rosada-2.jpg"] }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Velocidades": "18, tipo moto", "Cuadro": "Acerado", "Asiento": "Tipo gel", "Catalina": "Acero revestida", "Pedales": "Con rodajes de vaquelita", "Aros": "Doble pared, aluminio", "Ajuste delantero": "Rápido", "Frenos": "V-brake", "Garantía": "3 años en chasis, 1 año de servicio técnico", "Aro": "26" },
    installments: null
  }
];

function formatPEN(amount) {
  return "S/ " + amount.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getProductById(id) {
  return BICIFAST_PRODUCTS.find((p) => p.id === id);
}
