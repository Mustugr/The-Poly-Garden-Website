export type Language = "en" | "es";

type Section = {
  nav: {
    home: string;
    gallery: string;
    order: string;
    about: string;
    faq: string;
    contact: string;
    orderCta: string;
  };
  home: {
    eyebrow: string;
    title: string;
    sub: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    storyEyebrow: string;
    storyTitle: string;
    storyBody: string;
    storyLink: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredSub: string;
    processEyebrow: string;
    processTitle: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    step4Title: string;
    step4Body: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    ctaBannerTitle: string;
    ctaBannerSub: string;
    ctaBannerButton: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    sub: string;
    filters: {
      all: string;
      cake: string;
      cupcakes: string;
      desserts: string;
      floral: string;
    };
  };
  order: {
    eyebrow: string;
    title: string;
    sub: string;
    sections: {
      client: string;
      details: string;
      design: string;
      allergies: string;
      notes: string;
      privacy: string;
    };
    fields: {
      name: string;
      phone: string;
      email: string;
      date: string;
      time: string;
      method: string;
      pickup: string;
      delivery: string;
      address: string;
      product: string;
      cake: string;
      cupcakes: string;
      desserts: string;
      floralCake: string;
      size: string;
      flavor: string;
      filling: string;
      finish: string;
      theme: string;
      colors: string;
      cakeText: string;
      decoStyle: string;
      sugarFlowers: string;
      chocFlowers: string;
      minimal: string;
      luxuryFloral: string;
      allergiesPlaceholder: string;
      notesPlaceholder: string;
    };
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
  };
  about: {
    eyebrow: string;
    title: string;
    sub: string;
    body1: string;
    body2: string;
    body3: string;
    values: { title: string; body: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    emailLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    areaLabel: string;
    areaValue: string;
    followLabel: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    hours: string;
    hoursValue: string;
    rights: string;
  };
};

export const dictionary: Record<Language, Section> = {
  en: {
    nav: {
      home: "Home",
      gallery: "Gallery",
      order: "Order",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      orderCta: "Order a Cake",
    },
    home: {
      eyebrow: "Custom Cakes & Desserts",
      title: "The Poly Garden Sugar",
      sub: "Sugar",
      tagline:
        "Hand-crafted cakes for life's sweetest moments — delivered across NY & NJ.",
      ctaPrimary: "Start Your Order",
      ctaSecondary: "View Gallery",
      storyEyebrow: "Our Story",
      storyTitle: "Each cake, a small garden in bloom.",
      storyBody:
        "Made by Ivelisse Schuwerer in her kitchen studio, every cake is built with intention — from delicate sugar petals to silk-smooth buttercream finishes. We believe celebrations deserve more than dessert; they deserve a centerpiece.",
      storyLink: "Read more about Ivelisse",
      featuredEyebrow: "Signature Pieces",
      featuredTitle: "A few favorites from the studio",
      featuredSub:
        "Browse a curated selection — every piece is custom-made to order.",
      processEyebrow: "How It Works",
      processTitle: "From inquiry to first slice",
      step1Title: "Inquiry",
      step1Body: "Share the details — date, occasion, vision, dietary needs.",
      step2Title: "Quote & Design",
      step2Body: "We send a tailored quote and design proposal within 48 hours.",
      step3Title: "Deposit",
      step3Body: "A 50% deposit secures your date on the calendar.",
      step4Title: "Pickup or Delivery",
      step4Body: "Fresh, beautiful, and right on time — across NY & NJ.",
      testimonialsEyebrow: "Kind Words",
      testimonialsTitle: "From our table to yours",
      ctaBannerTitle: "Ready to make your celebration unforgettable?",
      ctaBannerSub:
        "Tell us about your event — we'll design a cake worth remembering.",
      ctaBannerButton: "Begin Your Order",
    },
    gallery: {
      eyebrow: "Our Work",
      title: "Gallery",
      sub: "A garden of past creations — for inspiration, not as a fixed menu.",
      filters: {
        all: "All",
        cake: "Cakes",
        cupcakes: "Cupcakes",
        desserts: "Desserts",
        floral: "Floral Cakes",
      },
    },
    order: {
      eyebrow: "Custom Order Form",
      title: "Tell us about your celebration",
      sub: "Share the details below and we'll respond with a tailored quote within 48 hours. Minimum 7 days notice required for cakes; 14+ days for tiered & wedding cakes.",
      sections: {
        client: "Client Information",
        details: "Order Details",
        design: "Design Concept",
        allergies: "Allergies / Restrictions",
        notes: "Additional Notes",
        privacy:
          "Your details are kept private and used only to fulfill your order.",
      },
      fields: {
        name: "Full Name",
        phone: "Phone",
        email: "Email",
        date: "Pickup / Delivery Date",
        time: "Time",
        method: "Method",
        pickup: "Pickup",
        delivery: "Delivery",
        address: "Delivery Address",
        product: "Product",
        cake: "Cake",
        cupcakes: "Cupcakes",
        desserts: "Desserts",
        floralCake: "Floral Cake",
        size: "Size / Servings",
        flavor: "Flavor",
        filling: "Filling",
        finish: "Frosting / Finish",
        theme: "Theme / Occasion",
        colors: "Colors",
        cakeText: "Cake Text",
        decoStyle: "Decoration Style",
        sugarFlowers: "Sugar flowers",
        chocFlowers: "Chocolate flowers",
        minimal: "Minimal",
        luxuryFloral: "Luxury floral",
        allergiesPlaceholder: "Nut allergies, gluten, dairy, etc.",
        notesPlaceholder: "Inspiration links, special requests…",
      },
      submit: "Send Inquiry",
      submitting: "Sending…",
      successTitle: "Thank you — your inquiry is in the oven.",
      successBody:
        "Ivelisse will review your details and reply within 48 hours with a quote and next steps.",
      errorTitle: "Something went wrong.",
      errorBody:
        "Please try again, or email hello@thepolygardensugar.com directly.",
    },
    about: {
      eyebrow: "About",
      title: "Meet Ivelisse",
      sub: "Founder & cake artist behind The Poly Garden Sugar.",
      body1:
        "The Poly Garden Sugar began as a private love affair with sugar craft — long evenings of shaping petals, perfecting buttercream, and learning the quiet patience that floral cakes demand.",
      body2:
        "Today, Ivelisse Schuwerer designs custom cakes and desserts for weddings, quinceañeras, birthdays, baby showers, and quiet milestones in between. Each piece is built to order from her studio, serving clients across New York and New Jersey.",
      body3:
        "Working bilingually in English and Spanish, she keeps the process personal — a real conversation about your celebration, before a single petal is piped.",
      values: [
        {
          title: "Made to Order",
          body: "Nothing pre-made. Every cake is designed and baked for you.",
        },
        {
          title: "Floral Craftsmanship",
          body: "Hand-shaped sugar and chocolate flowers, petal by petal.",
        },
        {
          title: "Bilingual Service",
          body: "Comfortable and clear — in English or in Spanish.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Frequently Asked",
      items: [
        {
          q: "How far in advance should I order?",
          a: "We recommend at least 7 days notice for standard cakes and cupcakes, and 14+ days for tiered cakes, wedding cakes, or anything with extensive sugar florals. Last-minute requests are considered subject to availability.",
        },
        {
          q: "Do you deliver?",
          a: "Yes — we deliver across New York and New Jersey. Delivery fees are calculated based on distance and are added to your final quote. Pickup is also available from the studio.",
        },
        {
          q: "How does pricing work?",
          a: "Custom cakes are priced based on size, complexity of design, flavors, and floral work. After you submit an inquiry, you'll receive a tailored quote within 48 hours — no surprises.",
        },
        {
          q: "Do you require a deposit?",
          a: "Yes. A 50% non-refundable deposit secures your date on our calendar. The remaining balance is due 3 days before pickup or delivery.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept Cash, Zelle, and Card. Payment instructions are sent with your quote.",
        },
        {
          q: "Can you accommodate allergies and dietary restrictions?",
          a: "We work with most allergies — please share details on the order form. Our kitchen handles common allergens (nuts, dairy, gluten, eggs), so we cannot guarantee 100% allergen-free environments.",
        },
        {
          q: "Do you offer tastings?",
          a: "Tastings are available for wedding cake clients by appointment. Reach out and we'll set up a time.",
        },
        {
          q: "Can I see flavors and fillings?",
          a: "Absolutely. Common flavors include Vanilla Bean, Tres Leches, Chocolate, Red Velvet, Lemon, and Almond. Custom flavors are welcome — just ask.",
        },
      ],
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "We'd love to hear from you",
      sub: "For inquiries, custom orders, or just to say hello.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Studio Hours",
      hoursValue: "Tue – Sat · By appointment",
      areaLabel: "Service Area",
      areaValue: "New York · New Jersey",
      followLabel: "Follow Along",
    },
    footer: {
      tagline: "Custom cakes & desserts · NY & NJ",
      quickLinks: "Quick Links",
      contact: "Contact",
      hours: "Hours",
      hoursValue: "Tue – Sat, by appointment",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      gallery: "Galería",
      order: "Ordenar",
      about: "Nosotros",
      faq: "Preguntas",
      contact: "Contacto",
      orderCta: "Ordenar Pastel",
    },
    home: {
      eyebrow: "Pasteles y Postres a Medida",
      title: "The Poly Garden Sugar",
      sub: "Sugar",
      tagline:
        "Pasteles artesanales para los momentos más dulces — entrega en NY y NJ.",
      ctaPrimary: "Comenzar Pedido",
      ctaSecondary: "Ver Galería",
      storyEyebrow: "Nuestra Historia",
      storyTitle: "Cada pastel, un pequeño jardín en flor.",
      storyBody:
        "Elaborado por Ivelisse Schuwerer en su estudio, cada pastel se construye con intención — desde delicados pétalos de azúcar hasta acabados de buttercream impecables. Creemos que las celebraciones merecen más que un postre; merecen una pieza central.",
      storyLink: "Conocer a Ivelisse",
      featuredEyebrow: "Piezas Destacadas",
      featuredTitle: "Algunos favoritos del estudio",
      featuredSub:
        "Una selección curada — cada pieza es hecha a la medida.",
      processEyebrow: "Cómo Funciona",
      processTitle: "De la consulta a la primera rebanada",
      step1Title: "Consulta",
      step1Body:
        "Comparte los detalles — fecha, ocasión, visión, restricciones.",
      step2Title: "Cotización y Diseño",
      step2Body:
        "Enviamos una cotización personalizada y propuesta en 48 horas.",
      step3Title: "Depósito",
      step3Body: "Un depósito del 50% asegura tu fecha en el calendario.",
      step4Title: "Recogida o Entrega",
      step4Body: "Fresco, hermoso y a tiempo — en todo NY y NJ.",
      testimonialsEyebrow: "Palabras Amables",
      testimonialsTitle: "De nuestra mesa a la tuya",
      ctaBannerTitle: "¿Lista para una celebración inolvidable?",
      ctaBannerSub:
        "Cuéntanos de tu evento — diseñaremos un pastel digno de recordar.",
      ctaBannerButton: "Comenzar Pedido",
    },
    gallery: {
      eyebrow: "Nuestro Trabajo",
      title: "Galería",
      sub: "Un jardín de creaciones pasadas — para inspiración, no como menú fijo.",
      filters: {
        all: "Todo",
        cake: "Pasteles",
        cupcakes: "Cupcakes",
        desserts: "Postres",
        floral: "Pasteles Florales",
      },
    },
    order: {
      eyebrow: "Formulario de Pedido",
      title: "Cuéntanos sobre tu celebración",
      sub: "Comparte los detalles a continuación y responderemos con una cotización personalizada en 48 horas. Mínimo 7 días de anticipación para pasteles; 14+ días para pasteles de boda o de pisos.",
      sections: {
        client: "Información del Cliente",
        details: "Detalles del Pedido",
        design: "Concepto de Diseño",
        allergies: "Alergias / Restricciones",
        notes: "Notas Adicionales",
        privacy:
          "Tus datos son privados y se usan solo para procesar tu pedido.",
      },
      fields: {
        name: "Nombre Completo",
        phone: "Teléfono",
        email: "Correo",
        date: "Fecha de Recogida / Entrega",
        time: "Hora",
        method: "Método",
        pickup: "Recogida",
        delivery: "Entrega",
        address: "Dirección de Entrega",
        product: "Producto",
        cake: "Pastel",
        cupcakes: "Cupcakes",
        desserts: "Postres",
        floralCake: "Pastel Floral",
        size: "Tamaño / Porciones",
        flavor: "Sabor",
        filling: "Relleno",
        finish: "Glaseado / Acabado",
        theme: "Tema / Ocasión",
        colors: "Colores",
        cakeText: "Texto del Pastel",
        decoStyle: "Estilo de Decoración",
        sugarFlowers: "Flores de azúcar",
        chocFlowers: "Flores de chocolate",
        minimal: "Minimalista",
        luxuryFloral: "Floral de lujo",
        allergiesPlaceholder: "Alergias a nueces, gluten, lácteos, etc.",
        notesPlaceholder: "Enlaces de inspiración, peticiones especiales…",
      },
      submit: "Enviar Consulta",
      submitting: "Enviando…",
      successTitle: "Gracias — tu consulta está en el horno.",
      successBody:
        "Ivelisse revisará los detalles y responderá en 48 horas con una cotización y los siguientes pasos.",
      errorTitle: "Algo salió mal.",
      errorBody:
        "Por favor intenta de nuevo, o escribe a hello@thepolygardensugar.com directamente.",
    },
    about: {
      eyebrow: "Sobre Nosotros",
      title: "Conoce a Ivelisse",
      sub: "Fundadora y artista pastelera detrás de The Poly Garden Sugar.",
      body1:
        "The Poly Garden Sugar comenzó como un romance privado con el arte del azúcar — largas tardes moldeando pétalos, perfeccionando buttercream y aprendiendo la paciencia callada que los pasteles florales exigen.",
      body2:
        "Hoy, Ivelisse Schuwerer diseña pasteles y postres a medida para bodas, quinceañeras, cumpleaños, baby showers y los pequeños hitos en medio. Cada pieza se construye desde su estudio, atendiendo a clientes en Nueva York y Nueva Jersey.",
      body3:
        "Trabajando de forma bilingüe en inglés y español, mantiene el proceso personal — una conversación real sobre tu celebración, antes de que se forme un solo pétalo.",
      values: [
        {
          title: "Hecho a Pedido",
          body: "Nada prefabricado. Cada pastel es diseñado y horneado para ti.",
        },
        {
          title: "Artesanía Floral",
          body: "Flores de azúcar y chocolate moldeadas a mano, pétalo a pétalo.",
        },
        {
          title: "Servicio Bilingüe",
          body: "Cómodo y claro — en inglés o español.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Con cuánta anticipación debo ordenar?",
          a: "Recomendamos al menos 7 días de anticipación para pasteles y cupcakes estándar, y 14+ días para pasteles de pisos, bodas o con trabajo floral extenso. Pedidos de último minuto sujetos a disponibilidad.",
        },
        {
          q: "¿Hacen entregas?",
          a: "Sí — entregamos en todo Nueva York y Nueva Jersey. El costo de entrega se calcula según la distancia y se añade a la cotización final. La recogida también está disponible en el estudio.",
        },
        {
          q: "¿Cómo funcionan los precios?",
          a: "Los pasteles a medida se cotizan según tamaño, complejidad del diseño, sabores y trabajo floral. Después de enviar una consulta, recibirás una cotización personalizada en 48 horas — sin sorpresas.",
        },
        {
          q: "¿Requieren depósito?",
          a: "Sí. Un depósito del 50% no reembolsable asegura tu fecha. El balance restante se paga 3 días antes de la recogida o entrega.",
        },
        {
          q: "¿Qué métodos de pago aceptan?",
          a: "Aceptamos Efectivo, Zelle y Tarjeta. Las instrucciones de pago se envían con tu cotización.",
        },
        {
          q: "¿Pueden manejar alergias y restricciones?",
          a: "Trabajamos con la mayoría de alergias — por favor incluye los detalles en el formulario. Nuestra cocina maneja alérgenos comunes (nueces, lácteos, gluten, huevos), así que no podemos garantizar un ambiente 100% libre de alérgenos.",
        },
        {
          q: "¿Ofrecen degustaciones?",
          a: "Las degustaciones están disponibles para clientes de pasteles de boda con cita previa. Contáctanos y coordinaremos.",
        },
        {
          q: "¿Puedo ver los sabores y rellenos?",
          a: "Por supuesto. Sabores comunes incluyen Vainilla, Tres Leches, Chocolate, Red Velvet, Limón y Almendra. Sabores personalizados son bienvenidos — solo pregunta.",
        },
      ],
    },
    contact: {
      eyebrow: "Contáctanos",
      title: "Nos encantaría escucharte",
      sub: "Para consultas, pedidos a medida, o solo para saludar.",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      hoursLabel: "Horario del Estudio",
      hoursValue: "Mar – Sáb · Con cita previa",
      areaLabel: "Área de Servicio",
      areaValue: "Nueva York · Nueva Jersey",
      followLabel: "Síguenos",
    },
    footer: {
      tagline: "Pasteles y postres a medida · NY y NJ",
      quickLinks: "Enlaces",
      contact: "Contacto",
      hours: "Horario",
      hoursValue: "Mar – Sáb, con cita previa",
      rights: "Todos los derechos reservados.",
    },
  },
};

export type Dict = Section;
