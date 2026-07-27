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
    short: "BMX con triple suspensión, frenos de disco y aros mag de aleación.",
    description: "BMX con triple suspensión (horquilla delantera, amortiguador trasero y tija con resorte), frenos de disco y aros mag de aleación para máxima resistencia en saltos y trucos.",
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
    specs: { "Suspensión": "Triple (horquilla, amortiguador trasero y tija)", "Frenos": "Disco", "Aros": "Mag de aleación" },
    installments: "Hasta 6 cuotas sin intereses"
  },
  {
    id: "phillips-p140",
    name: "Phillips P140",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 250,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 4,
    short: "Bicicleta infantil con parrilla alcochada, canasta forjada y luces auxiliares.",
    description: "Bicicleta infantil con parrilla alcochada, canasta forjada y auxiliares con luces. Ideal para los primeros pedaleos con seguridad y estilo.",
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
    specs: { "Parrilla": "Alcochada", "Canasta": "Forjada", "Luces": "Auxiliares con luces" },
    installments: null
  },
  {
    id: "phillips-p201",
    name: "Phillips P201",
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
    sizes: [],
    unavailableSizes: [],
    specs: { "Parrilla": "Con respaldar", "Canasta": "Incluida", "Asiento": "Con resorte", "Protector": "De cadena" },
    installments: null
  },
  {
    id: "phillips-aro20",
    name: "Phillips Aro 20",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 350,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 2,
    short: "Bicicleta aro 20 para niños más grandes, resistente y cómoda.",
    description: "Bicicleta aro 20 pensada para niños más grandes que buscan dar el salto desde las bicis más chicas. Resistente y cómoda para uso diario.",
    image: "img/productos/infantiles/phillips-aro20-350.jpg",
    gallery: ["img/productos/infantiles/phillips-aro20-350.jpg"],
    colors: [],
    sizes: [],
    unavailableSizes: [],
    specs: { "Aro": "20\"" },
    installments: null
  },
  {
    id: "phillips-p132",
    name: "Phillips P132",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 250,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 5,
    short: "Bicicleta infantil con parrilla alcochada, canasta y protector de cadena, en varios tamaños.",
    description: "Bicicleta infantil con parrilla alcochada, canasta y protector de cadena. Disponible en varios tamaños para acompañar el crecimiento de tu hijo.",
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
    specs: { "Incluye": "Parrilla alcochada, canasta, protector de cadena" },
    installments: null
  },
  {
    id: "phillips-p136",
    name: "Phillips P136",
    brand: "Phillips",
    category: "ninos",
    categoryLabel: "Bicicletas Infantiles",
    price: 280,
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
      { label: "Aro 12", price: 280, image: "img/productos/infantiles/phillips-p136-aro12-280.jpg" },
      { label: "Aro 16", price: 320, image: "img/productos/infantiles/phillips-p136-aro16-320.jpg" }
    ],
    sizes: [],
    unavailableSizes: [],
    specs: { "Suspensión": "Doble", "Luces": "Delanteras y auxiliares" },
    installments: null
  },
  {
    id: "skys-aluminio-360",
    name: "SKYS Aluminio 360",
    brand: "SKYS",
    category: "mtb",
    categoryLabel: "Bicicletas Montañeras (MTB)",
    price: 360,
    oldPrice: null,
    badge: "Top Ventas",
    rating: 4.8,
    reviews: 7,
    short: "Montañera de cuadro de aluminio con frenos de disco y llanta gruesa todo terreno.",
    description: "Montañera de cuadro de aluminio con frenos de disco y llanta gruesa para todo terreno. Resistente y ligera para uso diario o aventura.",
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
    specs: { "Cuadro": "Aluminio", "Frenos": "Disco", "Llanta": "Gruesa todo terreno" },
    installments: "Hasta 6 cuotas sin intereses"
  }
];

function formatPEN(amount) {
  return "S/ " + amount.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getProductById(id) {
  return BICIFAST_PRODUCTS.find((p) => p.id === id);
}
