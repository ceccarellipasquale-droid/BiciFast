// Catálogo compartido de BiciFast. Usado por catalogo.html, producto.html y carrito.html.
const BICIFAST_PRODUCTS = [
  {
    id: "tarmac-sl8-pro",
    name: "Tarmac SL8 Pro",
    brand: "S-Works",
    category: "ruta",
    categoryLabel: "Bicicletas de Ruta",
    price: 32000,
    oldPrice: 34500,
    badge: "Nuevo",
    rating: 4.9,
    reviews: 41,
    short: "La bici de carrera definitiva: aerodinámica, ligera y con una calidad de rodaje antes imposible.",
    description: "La bici de carrera definitiva, combinando aerodinámica, peso ligero y una calidad de rodaje antes imposible. Pensada para quienes buscan podio.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxMMj0JjnzbphaMz4P98Tto2MNnlEJ5RR6aqnez41MR6cg7O4r_ozILE8hkSe4QoVkXEv9IdBOUGjhMXxpM0nexOP-xVrC5MsfocKqQZg21B5tAJISPkq4hav_wKppeGhb8wEYFNujbXBJEiMcg808ImRYckpTyA4szL0EAG187ixAlOnlrjbBXnK2ZfoxJgdOfD5lMq0kUzUAQWOYC-pR6cZgCDRJvkbQ3w_TPJn40k2q4nxCcg",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxMMj0JjnzbphaMz4P98Tto2MNnlEJ5RR6aqnez41MR6cg7O4r_ozILE8hkSe4QoVkXEv9IdBOUGjhMXxpM0nexOP-xVrC5MsfocKqQZg21B5tAJISPkq4hav_wKppeGhb8wEYFNujbXBJEiMcg808ImRYckpTyA4szL0EAG187ixAlOnlrjbBXnK2ZfoxJgdOfD5lMq0kUzUAQWOYC-pR6cZgCDRJvkbQ3w_TPJn40k2q4nxCcg"
    ],
    colors: [
      { name: "Matte Carbon / Lime", hex: "#111111", accent: "#cdf200" },
      { name: "Rojo Racing", hex: "#2a2a2a", accent: "#ff3b3b" },
      { name: "Blanco Perla", hex: "#e0e3e4", accent: null }
    ],
    sizes: ["S", "M", "L", "XL"],
    unavailableSizes: [],
    specs: {
      "Cuadro": "Carbono FACT 12r, geometría aero",
      "Horquilla": "Carbono FACT, aero integrada",
      "Frenos": "Shimano Dura-Ace Hydraulic Disc",
      "Transmisión": "Shimano Dura-Ace Di2 12v"
    },
    installments: "Hasta 12 cuotas sin intereses"
  },
  {
    id: "aspero-grx-rx820",
    name: "Áspero GRX RX820",
    brand: "Cervélo",
    category: "ruta",
    categoryLabel: "Gravel / Ruta",
    price: 15800,
    oldPrice: 18500,
    badge: "-15%",
    rating: 4.7,
    reviews: 23,
    short: "Bicicleta de grava profesional para carreras de resistencia y alto rendimiento.",
    description: "Bicicleta de grava de nivel profesional, diseñada para resistencia y alto rendimiento en cualquier superficie.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBroWmOaI4qxNKSQFPT4aAbsrgnSwkHUL1emSbaOtIAGuE_uS5AQ7U9_GNUDLP_oeZXG2ixEXm2p_7JC1U13VR8_2obfoKK5YU_kF4rFhG63BxoQIyeupZEmtJI5tXiW4j5ragNG1m5DkACUSzu7-jOlU2MJTVOVis7AR5OvrR32TOPF_LCdqsg08713gScA9KMwJ-blSlizpMMbRbl3p0OFIOJ2HcmWDQwH2UGr3C07Qd1nsB_9Q",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBroWmOaI4qxNKSQFPT4aAbsrgnSwkHUL1emSbaOtIAGuE_uS5AQ7U9_GNUDLP_oeZXG2ixEXm2p_7JC1U13VR8_2obfoKK5YU_kF4rFhG63BxoQIyeupZEmtJI5tXiW4j5ragNG1m5DkACUSzu7-jOlU2MJTVOVis7AR5OvrR32TOPF_LCdqsg08713gScA9KMwJ-blSlizpMMbRbl3p0OFIOJ2HcmWDQwH2UGr3C07Qd1nsB_9Q"
    ],
    colors: [
      { name: "Grafito", hex: "#2a2a2a", accent: "#bec6e0" }
    ],
    sizes: ["S", "M", "L"],
    unavailableSizes: ["XL"],
    specs: {
      "Cuadro": "Carbono, geometría gravel endurance",
      "Horquilla": "Carbono con montaje de accesorios",
      "Frenos": "Shimano GRX Hydraulic Disc",
      "Transmisión": "Shimano GRX RX820 1x12"
    },
    installments: "Hasta 12 cuotas sin intereses"
  },
  {
    id: "apex-carbon-29",
    name: 'BiciFast Apex Carbon 29"',
    brand: "BiciFast",
    category: "mtb",
    categoryLabel: "MTB Pro Series",
    price: 12499,
    oldPrice: 14999,
    badge: "Top Ventas",
    rating: 4.9,
    reviews: 128,
    short: "Nuestra montañera insignia: cuadro de carbono, suspensión Fox y frenos Shimano XT.",
    description: "Nuestra montañera insignia. Cuadro de carbono OMR de 29\", suspensión Fox Factory y grupo Shimano XT para dominar cualquier terreno.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9D_wBAR0frWve_koKkXcFfiNbUApk-jmqcpKJ7dmDHE9DdSFST9zS15WtCFmVuhdi-aaixRPfOS9zohyL7L41h4YzSd0qbku6P8b9ex1NjZOKsNQwRzVt_6T7rdl0VnzAiB_eUJT0lFsLgf2QM-B0kBxdb--3SlmB5UcggNcOdVDiObE7ufJ7EipdW-qRNlPaxmYGLNe82nDZ6F7KzyDtFU-T75d5ra8R_b6f-Y6g8hpXc3kGw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz9D_wBAR0frWve_koKkXcFfiNbUApk-jmqcpKJ7dmDHE9DdSFST9zS15WtCFmVuhdi-aaixRPfOS9zohyL7L41h4YzSd0qbku6P8b9ex1NjZOKsNQwRzVt_6T7rdl0VnzAiB_eUJT0lFsLgf2QM-B0kBxdb--3SlmB5UcggNcOdVDiObE7ufJ7EipdW-qRNlPaxmYGLNe82nDZ6F7KzyDtFU-T75d5ra8R_b6f-Y6g8hpXc3kGw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAl5099QV1NdUiwEVe_wn_l4F5QXl6_S-Tn8Bvw_CGsE-FKSRjIv_0FWUaEDQbLDRWVEpe6sUhgeQt0eD_mVkFg9xwbN8uwlqrQtVM8dqyoj7Og-NIvd5ovaK0JqyjIin4EnZllRzyVPmdH9JyLvMTYLCN-eWUf3jFL6FUD5aJoDgWZiRDgB3v2T-uBLF1bUJAFkxC6CFypXjApAr5pv-VfouAbu-gtiB6q59X3xXcqJ7-DXrixnA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwPSru4G81K9erA3ErVPbqD_7rv4s-QletRZTV_jW7su_xDrWiCntAumW07YGQDOobqqRmnES7sjoG0ncuTkKdUwyQXVNTzH7V2esGY9PjlVsc9b4JBTYaowcCEOCa_LFCMm0wmp_6lDrd6SFWxiZjgYnBhvItAPdbgIZuCWdERSixJZK8soJtUSVVSAwZbGgepvQHh68uzx18JPNPfMXN2aphjuUI1bS5XIWwhNgS7Gipdq2uyQ"
    ],
    colors: [
      { name: "Matte Carbon / Lime", hex: "#111111", accent: "#cdf200" },
      { name: "Rojo Racing", hex: "#2a2a2a", accent: "#ff3b3b" },
      { name: "Blanco Perla", hex: "#e0e3e4", accent: null }
    ],
    sizes: ["S", "M", "L", "XL"],
    unavailableSizes: ["XL"],
    specs: {
      "Cuadro": 'Carbono OMR 29", boost 12x148',
      "Horquilla": "Fox 34 Float SC Factory 100 FIT4",
      "Frenos": "Shimano XT M8100 Hydraulic Disc",
      "Transmisión": "Shimano XT M8100 SGS Shadow Plus"
    },
    installments: "Hasta 12 cuotas sin intereses"
  },
  {
    id: "casco-aero-pro",
    name: "Casco BiciFast Aero Pro",
    brand: "BiciFast",
    category: "accesorios",
    categoryLabel: "Cascos",
    price: 450,
    rating: 4.8,
    reviews: 64,
    short: "Casco aerodinámico de gama alta con ventilación optimizada.",
    description: "Casco aerodinámico de gama alta con ventilación optimizada para largas distancias a alta velocidad.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTKYs06ID0jCrSGp9wvimsGwGgeHbIVU2zkYd_HamUhP_mHOsqGzWYADRMrydKzZC4ZLO5QGVTdqNBQzGLOPIUyb6s8lAMSxDG_Zfxrqfw5tWzikVKghT0rSUEHVqejElfH1h7jS6Sc-nxx963zCOUbih97cGIuUq8_o3fkE6kTB3Z98L6fkraruOdKuc_9w3uRTIYA9uMCLnZdOgSLqoL-AIWRIV6xi-jOtbroF8dPZ6RcrLhTQ",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTKYs06ID0jCrSGp9wvimsGwGgeHbIVU2zkYd_HamUhP_mHOsqGzWYADRMrydKzZC4ZLO5QGVTdqNBQzGLOPIUyb6s8lAMSxDG_Zfxrqfw5tWzikVKghT0rSUEHVqejElfH1h7jS6Sc-nxx963zCOUbih97cGIuUq8_o3fkE6kTB3Z98L6fkraruOdKuc_9w3uRTIYA9uMCLnZdOgSLqoL-AIWRIV6xi-jOtbroF8dPZ6RcrLhTQ"
    ],
    colors: [{ name: "Negro Mate", hex: "#111111", accent: "#cdf200" }],
    sizes: ["S", "M", "L"],
    unavailableSizes: [],
    specs: {},
    installments: null
  },
  {
    id: "lentes-vz1",
    name: "Lentes Fotocromáticos VZ1",
    brand: "BiciFast",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 320,
    rating: 4.6,
    reviews: 37,
    short: "Lentes con lunas fotocromáticas que se adaptan a la luz ambiental.",
    description: "Lentes de ciclismo con lunas fotocromáticas que se adaptan automáticamente a la luz ambiental.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp_dNLVM-74WhXFSfUeqgrjnQpmiUNw86R2IM8EbZmKbDMhDWS3SLIXvcJBwTWRHZKV0_dzApUQpK_DyIrTTJL-BHUOfInR4kIv28TXjVi1p6jBy-9HySOOm44XagHPpcluVAudt71ZvLomaHCpxZbScx9rq3t8hmIxokDgeDZYJHvWWX9K0U28IjdQuye_--F2VT69bN6INaOENP_agc-HZbJgDyX9WIES8AaVzJYEB92kW9X4A",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp_dNLVM-74WhXFSfUeqgrjnQpmiUNw86R2IM8EbZmKbDMhDWS3SLIXvcJBwTWRHZKV0_dzApUQpK_DyIrTTJL-BHUOfInR4kIv28TXjVi1p6jBy-9HySOOm44XagHPpcluVAudt71ZvLomaHCpxZbScx9rq3t8hmIxokDgeDZYJHvWWX9K0U28IjdQuye_--F2VT69bN6INaOENP_agc-HZbJgDyX9WIES8AaVzJYEB92kW9X4A"
    ],
    colors: [{ name: "Iridiscente", hex: "#2a2a2a", accent: "#bec6e0" }],
    sizes: [],
    unavailableSizes: [],
    specs: {},
    installments: null
  },
  {
    id: "guantes-grip-tech",
    name: "Guantes MTB Grip Tech",
    brand: "BiciFast",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 120,
    rating: 4.5,
    reviews: 19,
    short: "Guantes técnicos con acolchado protector y agarre reforzado.",
    description: "Guantes técnicos con acolchado protector y agarre reforzado para largas jornadas en montaña.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbdWhFkNrxIoRYET5b56yXGHpHBbBJhBQV0L-FiSPogWWSRw_Dj08lvY-6N1Tl0KTaMAo-4XQCE8VRFimrgTykDA6nvFUZaJQl7zq1BKh_kDRGE4L_OfdJDV4AGwUmo0SQk8eWnqv-Jn4y69USqDKsCCTkvx4Y_aZuvw4X2an5sPJEWGk8OAJ_PGXbRfOr8SDlsBhU1uk1cmSNSOvkNd-nJQ3lhD3veelA-lyYXa3zc_Z3BsVA_A",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbdWhFkNrxIoRYET5b56yXGHpHBbBJhBQV0L-FiSPogWWSRw_Dj08lvY-6N1Tl0KTaMAo-4XQCE8VRFimrgTykDA6nvFUZaJQl7zq1BKh_kDRGE4L_OfdJDV4AGwUmo0SQk8eWnqv-Jn4y69USqDKsCCTkvx4Y_aZuvw4X2an5sPJEWGk8OAJ_PGXbRfOr8SDlsBhU1uk1cmSNSOvkNd-nJQ3lhD3veelA-lyYXa3zc_Z3BsVA_A"
    ],
    colors: [{ name: "Negro / Lima", hex: "#111111", accent: "#cdf200" }],
    sizes: ["S", "M", "L", "XL"],
    unavailableSizes: [],
    specs: {},
    installments: null
  },
  {
    id: "red-axs-power",
    name: "Red AXS Power Meter",
    brand: "SRAM",
    category: "componentes",
    categoryLabel: "Componentes",
    price: 4500,
    rating: 4.8,
    reviews: 12,
    short: "Grupo de transmisión inalámbrico con medidor de potencia integrado.",
    description: "Grupo de transmisión inalámbrico de alta gama con medidor de potencia integrado, precisión de nivel profesional.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaH8-85pCPxfibGxItqd5L1HcvHGhpVPlfH0bIkYmtjjEBVMydvPhkgLPjjeTIE5WDDOJq2IYjS039x4uVistkX4Zpg9A_-EGp19OpyboSlnV7AFjSlehzvhg3UACcREAZl0r6bny6l6Ipufk2AmT0fYqRCe8fwaP2Y4iasK6upd9LIh7BdKxYE-w1nOfeFSBAFMAEDVJKrY3UwbCpGGZeIbJ1ngHT9RdgkXb5gmCLSCDQes4v3A",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaH8-85pCPxfibGxItqd5L1HcvHGhpVPlfH0bIkYmtjjEBVMydvPhkgLPjjeTIE5WDDOJq2IYjS039x4uVistkX4Zpg9A_-EGp19OpyboSlnV7AFjSlehzvhg3UACcREAZl0r6bny6l6Ipufk2AmT0fYqRCe8fwaP2Y4iasK6upd9LIh7BdKxYE-w1nOfeFSBAFMAEDVJKrY3UwbCpGGZeIbJ1ngHT9RdgkXb5gmCLSCDQes4v3A"
    ],
    colors: [{ name: "Negro", hex: "#111111", accent: null }],
    sizes: [],
    unavailableSizes: [],
    specs: {},
    installments: "Hasta 6 cuotas sin intereses"
  },
  {
    id: "eclipse-spherical",
    name: "Eclipse Spherical",
    brand: "Giro",
    category: "accesorios",
    categoryLabel: "Cascos",
    price: 950,
    rating: 4.7,
    reviews: 28,
    short: "Casco de tecnología esférica MIPS para máxima protección y ventilación.",
    description: "Casco con tecnología esférica MIPS integrada para máxima protección sin sacrificar ventilación ni peso.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQEeQmN5G7brXUxku7MV7hbGkOqWCRh5PoLbXfRRPNehbVXtZPzyc5p0JS_LyMlLS1kUKuteEcXGtma6GwU7rOSSuikYXu_SC0RMZ6ra0yKOpd_kwdxFx12ESZYVIRUIwZcRgTYxYujMptEZyT6DCx2pwAFC37rdh1qeN-RNfdaZfKyuViaA6PlPpIvogOQX7ftc5nMofq8N0TkNiDiPs2-xZQbpuw6kcC2ak7WUcOofDkCIU79w",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQEeQmN5G7brXUxku7MV7hbGkOqWCRh5PoLbXfRRPNehbVXtZPzyc5p0JS_LyMlLS1kUKuteEcXGtma6GwU7rOSSuikYXu_SC0RMZ6ra0yKOpd_kwdxFx12ESZYVIRUIwZcRgTYxYujMptEZyT6DCx2pwAFC37rdh1qeN-RNfdaZfKyuViaA6PlPpIvogOQX7ftc5nMofq8N0TkNiDiPs2-xZQbpuw6kcC2ak7WUcOofDkCIU79w"
    ],
    colors: [{ name: "Blanco Mate", hex: "#e0e3e4", accent: null }],
    sizes: ["S", "M", "L"],
    unavailableSizes: [],
    specs: {},
    installments: null
  }
];

function formatPEN(amount) {
  return "S/ " + amount.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getProductById(id) {
  return BICIFAST_PRODUCTS.find((p) => p.id === id);
}
