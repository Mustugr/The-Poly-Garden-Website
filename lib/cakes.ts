export type Category = "cake" | "cupcakes" | "desserts" | "floral";

export type CakeItem = {
  id: string;
  category: Category;
  src: string;
  alt: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  span?: "tall" | "wide" | "normal";
};

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const cakes: CakeItem[] = [
  {
    id: "ivory-tier",
    category: "floral",
    src: u("photo-1535254973040-607b474cb50d"),
    alt: "Three-tier ivory wedding cake with delicate sugar flowers",
    title: { en: "Ivory Bloom", es: "Floración Marfil" },
    description: {
      en: "Three-tier vanilla bean cake dressed in hand-piped sugar peonies.",
      es: "Pastel de tres pisos de vainilla con peonías de azúcar pintadas a mano.",
    },
    span: "tall",
  },
  {
    id: "rose-garden",
    category: "floral",
    src: u("photo-1578985545062-69928b1d9587"),
    alt: "Pastel rose-colored cake with luxurious floral decoration",
    title: { en: "Rose Garden", es: "Jardín de Rosas" },
    description: {
      en: "Almond cake with raspberry preserve and a crown of edible roses.",
      es: "Pastel de almendra con mermelada de frambuesa y corona de rosas.",
    },
  },
  {
    id: "vanilla-cupcakes",
    category: "cupcakes",
    src: u("photo-1599785209707-a456fc1337bb"),
    alt: "Tray of vanilla buttercream cupcakes",
    title: { en: "Vanilla Bouquet", es: "Ramo de Vainilla" },
    description: {
      en: "Buttercream cupcakes — perfect for showers and gatherings.",
      es: "Cupcakes de buttercream — ideales para baby showers y reuniones.",
    },
  },
  {
    id: "macarons",
    category: "desserts",
    src: u("photo-1569864358642-9d1684040f43"),
    alt: "Tower of pastel macarons",
    title: { en: "Pastel Macarons", es: "Macarons en Pastel" },
    description: {
      en: "French macarons in seasonal palettes — built into towers on request.",
      es: "Macarons franceses en paletas de temporada — torres a pedido.",
    },
  },
  {
    id: "chocolate-mirror",
    category: "cake",
    src: u("photo-1565958011703-44f9829ba187"),
    alt: "Glossy chocolate mirror-glaze cake with gold accents",
    title: { en: "Midnight Mirror", es: "Espejo de Medianoche" },
    description: {
      en: "Dark chocolate cake with mirror glaze and 24k gold leaf.",
      es: "Pastel de chocolate oscuro con glaseado espejo y hoja de oro 24k.",
    },
    span: "wide",
  },
  {
    id: "tiered-classic",
    category: "cake",
    src: u("photo-1535141192574-5d4897c12636"),
    alt: "Classic two-tier white wedding cake",
    title: { en: "Classic White", es: "Blanco Clásico" },
    description: {
      en: "Two tiers of vanilla & raspberry — minimal, timeless, refined.",
      es: "Dos pisos de vainilla y frambuesa — minimal, atemporal, refinado.",
    },
  },
  {
    id: "birthday-pink",
    category: "cake",
    src: u("photo-1606890737304-57a1ca8a5b62"),
    alt: "Pink birthday cake with delicate piping",
    title: { en: "Soft Petal", es: "Pétalo Suave" },
    description: {
      en: "Strawberry shortcake with soft pink buttercream piping.",
      es: "Pastel de fresa con buttercream rosa pálido.",
    },
  },
  {
    id: "macaron-set",
    category: "desserts",
    src: u("photo-1486427944299-d1955d23e34d"),
    alt: "Mixed dessert platter with truffles and tartlets",
    title: { en: "Garden Set", es: "Set de Jardín" },
    description: {
      en: "Mixed dessert platter — macarons, mini tarts, and chocolate truffles.",
      es: "Mesa de postres — macarons, mini tartas y trufas de chocolate.",
    },
  },
  {
    id: "blush-tier",
    category: "floral",
    src: u("photo-1622896784083-cc051313dbab"),
    alt: "Blush pink tiered cake with sugar peonies",
    title: { en: "Blush", es: "Rubor" },
    description: {
      en: "Soft blush exterior with hand-shaped peonies and ranunculus.",
      es: "Exterior rosa pálido con peonías y ranúnculos hechos a mano.",
    },
    span: "tall",
  },
  {
    id: "lemon-cupcakes",
    category: "cupcakes",
    src: u("photo-1519869325930-281384150729"),
    alt: "Lemon-flavored cupcakes with citrus zest",
    title: { en: "Citrus Garden", es: "Jardín Cítrico" },
    description: {
      en: "Lemon-poppy cupcakes with cream cheese rosettes.",
      es: "Cupcakes de limón con amapola y rosetones de queso crema.",
    },
  },
  {
    id: "tres-leches",
    category: "desserts",
    src: u("photo-1488477181946-6428a0291777"),
    alt: "Tres leches cake with whipped cream and berries",
    title: { en: "Tres Leches", es: "Tres Leches" },
    description: {
      en: "Classic tres leches with fresh berries and chantilly.",
      es: "Tres leches clásico con berries frescos y chantilly.",
    },
  },
  {
    id: "ganache-pearl",
    category: "cake",
    src: u("photo-1602351447937-745cb720612f"),
    alt: "Chocolate ganache cake topped with chocolate pearls",
    title: { en: "Ganache Pearl", es: "Perla de Ganache" },
    description: {
      en: "Layered chocolate cake under a glossy ganache, finished with pearls.",
      es: "Pastel de chocolate por capas con ganache brillante y perlas.",
    },
  },
];

export const featuredCakes = cakes.slice(0, 3);
