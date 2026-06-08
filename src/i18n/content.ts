// All translatable page copy for Blooming Marvellous, in EN / ES / DE.
// The `es` and `de` objects are typed `typeof en`, so missing keys fail the build.
// ES/DE drafted to a professional standard - should be proofed by a native speaker before launch.

import type { Locale } from './ui';

const en = {
  meta: {
    home: {
      title: 'Blooming Marvellous | Florist in La Marina, Costa Blanca',
      description:
        'Bespoke flower arrangements for every occasion, hand-made by Lorena with free local delivery across La Marina and the Costa Blanca South.',
    },
    flowers: {
      title: 'Our Flowers | Blooming Marvellous',
      description:
        'Bespoke bouquets and arrangements for weddings, sympathy, birthdays, anniversaries and every day - made just for you on the Costa Blanca.',
    },
    about: {
      title: 'About Lorena | Blooming Marvellous',
      description:
        'Meet Lorena, the florist behind Blooming Marvellous - a local boutique florist on the Costa Blanca with a personal touch in every arrangement.',
    },
    delivery: {
      title: 'Free Local Delivery | Blooming Marvellous',
      description:
        'Free flower delivery across La Marina, San Fulgencio, Guardamar, Torrevieja and the Costa Blanca South. Same-day delivery for local orders.',
    },
    contact: {
      title: 'Contact | Blooming Marvellous',
      description:
        'Order flowers with ease - by WhatsApp, phone or email. Blooming Marvellous, Urbanización Oasis, La Marina, Alicante.',
    },
  },

  shared: {
    orderWhatsapp: 'Order on WhatsApp',
    seeFlowers: 'See our flowers',
    call: 'Call us',
    email: 'Email us',
    contactUs: 'Contact us',
    freeDeliveryShort: 'Free local delivery',
    hoursTBC: 'Please get in touch for our latest opening hours.',
    mapSoon: 'Find us in Urbanización Oasis, La Marina - map coming soon.',
  },

  occasions: {
    weddings: { title: 'Weddings & Events', blurb: 'Romantic, considered florals for the day that matters most - from bouquets to venue styling.' },
    sympathy: { title: 'Sympathy & Funerals', blurb: 'Gentle, dignified tributes made with care, to say what words can’t.' },
    birthdays: { title: 'Birthdays', blurb: 'Bright, joyful bouquets and baskets to make someone’s day bloom.' },
    anniversaries: { title: 'Anniversaries', blurb: 'Timeless arrangements to mark the milestones you’ll always remember.' },
    celebrations: { title: 'Mother’s Day & Celebrations', blurb: 'Seasonal, show-stopping flowers for the moments worth celebrating.' },
    everyday: { title: 'Everyday Bouquets', blurb: 'Just because. Fresh, seasonal stems to brighten any ordinary day.' },
  },

  home: {
    heroLine1: 'Beautiful flowers.',
    heroLine2: 'Made for moments',
    heroLine3Script: 'that matter.',
    heroSub:
      'Bespoke arrangements made by hand with a personal touch, and delivered free across La Marina and the Costa Blanca South.',
    valueProps: {
      fresh: { title: 'Fresh & Seasonal Flowers' },
      personal: { title: 'Personalised Service' },
      delivery: { title: 'Same Day Delivery' },
      occasion: { title: 'Perfect for Every Occasion' },
    },
    introEyebrow: 'Your local florist',
    introHeading: 'Flowers made with a personal touch',
    introBody:
      'Blooming Marvellous is a boutique florist on the Costa Blanca South. Every arrangement is created by hand by Lorena - never off-the-shelf - using fresh, seasonal flowers and that little bit of extra care that makes all the difference.',
    occasionsEyebrow: 'Flowers for all occasions',
    occasionsHeading: 'Whatever the moment, we’ll make it bloom',
    featuredEyebrow: 'Bespoke, made just for you',
    featuredHeading: 'The care is in the detail',
    featuredBody:
      'Tell us the occasion, the colours, the feeling - and Lorena will design something truly personal. From a single thoughtful bouquet to a tribute in someone’s favourite team colours, no request is too small or too special.',
    deliveryEyebrow: 'Free local delivery',
    deliveryHeading: 'Delivered free, right to the door',
    deliveryBody:
      'We deliver free across La Marina and the surrounding Costa Blanca South, with same-day delivery available for local orders.',
    orderEaseScript: 'Order with ease',
    orderEaseLine: 'Online & by phone',
    testimonialsEyebrow: 'Loved locally',
    testimonialsHeading: 'What our customers say',
    finalScript: 'Make someone’s day',
    finalHeading: 'Order today and make it bloom',
    finalSub: 'Message us on WhatsApp or give us a call - we’d love to make something beautiful for you.',
  },

  flowers: {
    heroEyebrow: 'Our Flowers',
    heroHeading: 'Bespoke flowers, made just for you',
    heroSub:
      'Every bouquet and arrangement is designed by hand using fresh, seasonal flowers - chosen for your occasion, your colours and your story.',
    introHeading: 'Never off-the-shelf',
    introBody:
      'We don’t do generic. Tell us what you have in mind and we’ll create something personal, whether it’s a hand-tied bouquet, a statement arrangement or styling for a special day.',
    occasionsHeading: 'Flowers for every occasion',
    occasionsSub: 'A few of the moments we love to create for - but if you have something else in mind, just ask.',
    galleryHeading: 'A little of our work',
    gallerySub: 'A taste of recent arrangements. Follow us on social media to see the latest.',
    ctaHeading: 'Found something you love?',
    ctaSub: 'Message us on WhatsApp or get in touch and we’ll bring it to life.',
  },

  about: {
    heroEyebrow: 'About',
    heroHeading: 'Meet Lorena',
    heroSub: 'The florist behind Blooming Marvellous.',
    storyHeading: 'A local florist with a personal touch',
    storyBody: [
      'Blooming Marvellous began with a simple belief: that flowers should feel personal. Every arrangement is made by hand by Lorena, here on the Costa Blanca, using fresh and seasonal blooms.',
      'It’s never about pulling a ready-made bouquet off a shelf. It’s about listening - to the occasion, the person, the feeling - and creating something that says exactly what you want it to say.',
      'That care shows. When a customer asked for a tribute in West Ham colours for the anniversary of her brother’s passing, the result moved her to call it “second to none.” Whether it’s a celebration or a goodbye, your moment is treated as if it were our own.',
    ],
    valuesHeading: 'What we’re about',
    values: {
      bespoke: { title: 'Bespoke', desc: 'Designed by hand for you - never off-the-shelf.' },
      fresh: { title: 'Fresh & Seasonal', desc: 'Beautiful blooms, chosen fresh for every order.' },
      personal: { title: 'Personal', desc: 'A real local florist who listens and cares.' },
      local: { title: 'Free Local Delivery', desc: 'Delivered free across the Costa Blanca South.' },
    },
    bannerCaption: 'Hand-made on the Costa Blanca, with love.',
    testimonialsHeading: 'Kind words from our customers',
    finalHeading: 'Let’s make something beautiful',
    finalSub: 'Tell us about your occasion - we’d love to help.',
  },

  delivery: {
    heroEyebrow: 'Delivery',
    heroHeading: 'Free local delivery, made personal',
    heroSub:
      'We deliver beautiful flowers free across La Marina and the Costa Blanca South - with same-day delivery for local orders.',
    stepsHeading: 'How to order',
    steps: {
      one: { title: 'Choose your occasion', desc: 'Browse our flowers or simply tell us what it’s for.' },
      two: { title: 'Message or call', desc: 'Get in touch on WhatsApp or by phone with your idea, colours and budget.' },
      three: { title: 'We hand-make it', desc: 'Lorena designs your arrangement with fresh, seasonal flowers.' },
      four: { title: 'Free local delivery', desc: 'We deliver it free, straight to the door - same day for local orders.' },
    },
    areasHeading: 'Where we deliver',
    areasSub: 'Free delivery across the Costa Blanca South, including:',
    areasNote: 'Not sure if we reach you? Just ask - we’re always happy to help.',
    hoursHeading: 'Opening hours',
    finalHeading: 'Ready to order?',
    finalSub: 'Message us on WhatsApp or give us a call - free local delivery across the Costa Blanca South.',
  },

  contact: {
    heroEyebrow: 'Contact',
    heroHeading: 'Get in touch',
    heroSub: 'Order with ease - by WhatsApp, phone or email. We’d love to hear from you.',
    methodsHeading: 'Order with ease',
    whatsappLabel: 'WhatsApp',
    callLabel: 'Call',
    emailLabel: 'Email',
    detailsHeading: 'Find us',
    hoursLabel: 'Opening hours',
    addressLabel: 'Address',
    formHeading: 'Send us a message',
    form: {
      name: 'Your name',
      email: 'Your email',
      occasion: 'Occasion',
      occasionDefault: 'Select an occasion',
      message: 'Your message',
      submit: 'Send message',
    },
    finalNote: 'Prefer to talk? Message us on WhatsApp or call - we reply personally and quickly.',
  },

  footer: {
    tagline: 'Bespoke flowers for the moments that matter - hand-made on the Costa Blanca, delivered free locally.',
    navHeading: 'Explore',
    contactHeading: 'Get in touch',
    followHeading: 'Follow us',
    rights: 'All rights reserved.',
    langHeading: 'Language',
  },
};

const es: typeof en = {
  meta: {
    home: {
      title: 'Blooming Marvellous | Floristería en La Marina, Costa Blanca',
      description:
        'Arreglos florales a medida para cada ocasión, hechos a mano por Lorena con entrega local gratuita en La Marina y la Costa Blanca Sur.',
    },
    flowers: {
      title: 'Nuestras Flores | Blooming Marvellous',
      description:
        'Ramos y arreglos a medida para bodas, condolencias, cumpleaños, aniversarios y el día a día - hechos para ti en la Costa Blanca.',
    },
    about: {
      title: 'Sobre Lorena | Blooming Marvellous',
      description:
        'Conoce a Lorena, la florista de Blooming Marvellous - una floristería boutique local en la Costa Blanca con un toque personal en cada arreglo.',
    },
    delivery: {
      title: 'Entrega Local Gratuita | Blooming Marvellous',
      description:
        'Entrega de flores gratuita en La Marina, San Fulgencio, Guardamar, Torrevieja y la Costa Blanca Sur. Entrega el mismo día en pedidos locales.',
    },
    contact: {
      title: 'Contacto | Blooming Marvellous',
      description:
        'Pide flores con facilidad - por WhatsApp, teléfono o email. Blooming Marvellous, Urbanización Oasis, La Marina, Alicante.',
    },
  },

  shared: {
    orderWhatsapp: 'Pide por WhatsApp',
    seeFlowers: 'Ver nuestras flores',
    call: 'Llámanos',
    email: 'Escríbenos',
    contactUs: 'Contáctanos',
    freeDeliveryShort: 'Entrega local gratuita',
    hoursTBC: 'Contáctanos para conocer nuestro horario actual.',
    mapSoon: 'Encuéntranos en Urbanización Oasis, La Marina - mapa próximamente.',
  },

  occasions: {
    weddings: { title: 'Bodas y Eventos', blurb: 'Flores románticas y cuidadas para el día más importante - desde ramos hasta decoración del lugar.' },
    sympathy: { title: 'Condolencias y Funerales', blurb: 'Homenajes delicados y dignos, hechos con cariño, para decir lo que las palabras no pueden.' },
    birthdays: { title: 'Cumpleaños', blurb: 'Ramos y cestas alegres y luminosas para alegrarle el día a alguien.' },
    anniversaries: { title: 'Aniversarios', blurb: 'Arreglos atemporales para celebrar los momentos que siempre recordarás.' },
    celebrations: { title: 'Día de la Madre y Celebraciones', blurb: 'Flores de temporada espectaculares para los momentos que merece la pena celebrar.' },
    everyday: { title: 'Ramos para el Día a Día', blurb: 'Porque sí. Flores frescas y de temporada para alegrar cualquier día.' },
  },

  home: {
    heroLine1: 'Flores preciosas.',
    heroLine2: 'Para los momentos',
    heroLine3Script: 'que importan.',
    heroSub:
      'Arreglos a medida hechos a mano con un toque personal, y entregados gratis en La Marina y la Costa Blanca Sur.',
    valueProps: {
      fresh: { title: 'Flores Frescas y de Temporada' },
      personal: { title: 'Servicio Personalizado' },
      delivery: { title: 'Entrega el Mismo Día' },
      occasion: { title: 'Perfecto para Cada Ocasión' },
    },
    introEyebrow: 'Tu floristería local',
    introHeading: 'Flores hechas con un toque personal',
    introBody:
      'Blooming Marvellous es una floristería boutique en la Costa Blanca Sur. Cada arreglo lo crea a mano Lorena - nunca prefabricado - con flores frescas y de temporada y ese cuidado especial que marca la diferencia.',
    occasionsEyebrow: 'Flores para todas las ocasiones',
    occasionsHeading: 'Sea cual sea el momento, lo haremos florecer',
    featuredEyebrow: 'A medida, hecho solo para ti',
    featuredHeading: 'El cuidado está en el detalle',
    featuredBody:
      'Cuéntanos la ocasión, los colores, la emoción - y Lorena diseñará algo verdaderamente personal. Desde un ramo cuidado hasta un homenaje en los colores de un equipo favorito, ninguna petición es demasiado pequeña ni demasiado especial.',
    deliveryEyebrow: 'Entrega local gratuita',
    deliveryHeading: 'Entregado gratis, hasta tu puerta',
    deliveryBody:
      'Entregamos gratis en La Marina y toda la Costa Blanca Sur, con entrega el mismo día disponible para pedidos locales.',
    orderEaseScript: 'Pide con facilidad',
    orderEaseLine: 'Online y por teléfono',
    testimonialsEyebrow: 'Queridos en la zona',
    testimonialsHeading: 'Lo que dicen nuestros clientes',
    finalScript: 'Alégrale el día a alguien',
    finalHeading: 'Pide hoy y hazlo florecer',
    finalSub: 'Escríbenos por WhatsApp o llámanos - nos encantará crear algo precioso para ti.',
  },

  flowers: {
    heroEyebrow: 'Nuestras Flores',
    heroHeading: 'Flores a medida, hechas solo para ti',
    heroSub:
      'Cada ramo y arreglo se diseña a mano con flores frescas y de temporada - elegidas para tu ocasión, tus colores y tu historia.',
    introHeading: 'Nunca prefabricado',
    introBody:
      'No hacemos nada genérico. Cuéntanos lo que tienes en mente y crearemos algo personal, ya sea un ramo atado a mano, un arreglo espectacular o la decoración de un día especial.',
    occasionsHeading: 'Flores para cada ocasión',
    occasionsSub: 'Algunos de los momentos que nos encanta crear - pero si tienes otra idea, solo pregúntanos.',
    galleryHeading: 'Un poco de nuestro trabajo',
    gallerySub: 'Una muestra de arreglos recientes. Síguenos en redes sociales para ver lo último.',
    ctaHeading: '¿Has encontrado algo que te encanta?',
    ctaSub: 'Escríbenos por WhatsApp o contáctanos y le daremos vida.',
  },

  about: {
    heroEyebrow: 'Sobre Nosotros',
    heroHeading: 'Conoce a Lorena',
    heroSub: 'La florista detrás de Blooming Marvellous.',
    storyHeading: 'Una floristería local con un toque personal',
    storyBody: [
      'Blooming Marvellous nació de una idea sencilla: que las flores deben sentirse personales. Cada arreglo lo hace a mano Lorena, aquí en la Costa Blanca, con flores frescas y de temporada.',
      'Nunca se trata de coger un ramo prefabricado de una estantería. Se trata de escuchar - la ocasión, la persona, la emoción - y crear algo que diga exactamente lo que quieres decir.',
      'Ese cuidado se nota. Cuando una clienta pidió un homenaje en los colores del West Ham para el aniversario del fallecimiento de su hermano, el resultado le pareció “insuperable”. Ya sea una celebración o una despedida, tu momento se trata como si fuera nuestro.',
    ],
    valuesHeading: 'Lo que nos define',
    values: {
      bespoke: { title: 'A Medida', desc: 'Diseñado a mano para ti - nunca prefabricado.' },
      fresh: { title: 'Fresco y de Temporada', desc: 'Flores preciosas, elegidas frescas para cada pedido.' },
      personal: { title: 'Personal', desc: 'Una floristería local de verdad que escucha y se preocupa.' },
      local: { title: 'Entrega Local Gratuita', desc: 'Entregado gratis por toda la Costa Blanca Sur.' },
    },
    bannerCaption: 'Hecho a mano en la Costa Blanca, con cariño.',
    testimonialsHeading: 'Palabras de nuestros clientes',
    finalHeading: 'Creemos algo precioso',
    finalSub: 'Cuéntanos tu ocasión - nos encantará ayudarte.',
  },

  delivery: {
    heroEyebrow: 'Entrega',
    heroHeading: 'Entrega local gratuita, con un toque personal',
    heroSub:
      'Entregamos flores preciosas gratis en La Marina y la Costa Blanca Sur - con entrega el mismo día para pedidos locales.',
    stepsHeading: 'Cómo pedir',
    steps: {
      one: { title: 'Elige tu ocasión', desc: 'Mira nuestras flores o simplemente dinos para qué es.' },
      two: { title: 'Escribe o llama', desc: 'Contáctanos por WhatsApp o teléfono con tu idea, colores y presupuesto.' },
      three: { title: 'Lo hacemos a mano', desc: 'Lorena diseña tu arreglo con flores frescas y de temporada.' },
      four: { title: 'Entrega local gratuita', desc: 'Lo entregamos gratis, hasta tu puerta - el mismo día en pedidos locales.' },
    },
    areasHeading: 'Dónde entregamos',
    areasSub: 'Entrega gratuita por toda la Costa Blanca Sur, incluyendo:',
    areasNote: '¿No sabes si llegamos hasta ti? Solo pregúntanos - estaremos encantados de ayudar.',
    hoursHeading: 'Horario',
    finalHeading: '¿Listo para pedir?',
    finalSub: 'Escríbenos por WhatsApp o llámanos - entrega local gratuita por toda la Costa Blanca Sur.',
  },

  contact: {
    heroEyebrow: 'Contacto',
    heroHeading: 'Ponte en contacto',
    heroSub: 'Pide con facilidad - por WhatsApp, teléfono o email. Nos encantará saber de ti.',
    methodsHeading: 'Pide con facilidad',
    whatsappLabel: 'WhatsApp',
    callLabel: 'Llamar',
    emailLabel: 'Email',
    detailsHeading: 'Encuéntranos',
    hoursLabel: 'Horario',
    addressLabel: 'Dirección',
    formHeading: 'Envíanos un mensaje',
    form: {
      name: 'Tu nombre',
      email: 'Tu email',
      occasion: 'Ocasión',
      occasionDefault: 'Selecciona una ocasión',
      message: 'Tu mensaje',
      submit: 'Enviar mensaje',
    },
    finalNote: '¿Prefieres hablar? Escríbenos por WhatsApp o llámanos - respondemos personalmente y rápido.',
  },

  footer: {
    tagline: 'Flores a medida para los momentos que importan - hechas a mano en la Costa Blanca, con entrega local gratuita.',
    navHeading: 'Explora',
    contactHeading: 'Contacto',
    followHeading: 'Síguenos',
    rights: 'Todos los derechos reservados.',
    langHeading: 'Idioma',
  },
};

const de: typeof en = {
  meta: {
    home: {
      title: 'Blooming Marvellous | Blumengeschäft in La Marina, Costa Blanca',
      description:
        'Maßgeschneiderte Blumengestecke für jeden Anlass, von Hand gefertigt von Lorena, mit kostenloser lokaler Lieferung in La Marina und an der Costa Blanca Süd.',
    },
    flowers: {
      title: 'Unsere Blumen | Blooming Marvellous',
      description:
        'Maßgeschneiderte Sträuße und Gestecke für Hochzeiten, Trauerfälle, Geburtstage, Jubiläen und jeden Tag - für Sie gefertigt an der Costa Blanca.',
    },
    about: {
      title: 'Über Lorena | Blooming Marvellous',
      description:
        'Lernen Sie Lorena kennen, die Floristin hinter Blooming Marvellous - ein lokales Boutique-Blumengeschäft an der Costa Blanca mit persönlicher Note in jedem Gesteck.',
    },
    delivery: {
      title: 'Kostenlose Lokale Lieferung | Blooming Marvellous',
      description:
        'Kostenlose Blumenlieferung in La Marina, San Fulgencio, Guardamar, Torrevieja und an der Costa Blanca Süd. Lieferung am selben Tag bei lokalen Bestellungen.',
    },
    contact: {
      title: 'Kontakt | Blooming Marvellous',
      description:
        'Bestellen Sie Blumen ganz einfach - per WhatsApp, Telefon oder E-Mail. Blooming Marvellous, Urbanización Oasis, La Marina, Alicante.',
    },
  },

  shared: {
    orderWhatsapp: 'Per WhatsApp bestellen',
    seeFlowers: 'Unsere Blumen ansehen',
    call: 'Anrufen',
    email: 'E-Mail schreiben',
    contactUs: 'Kontakt aufnehmen',
    freeDeliveryShort: 'Kostenlose lokale Lieferung',
    hoursTBC: 'Bitte kontaktieren Sie uns für unsere aktuellen Öffnungszeiten.',
    mapSoon: 'Sie finden uns in der Urbanización Oasis, La Marina - Karte folgt in Kürze.',
  },

  occasions: {
    weddings: { title: 'Hochzeiten & Events', blurb: 'Romantische, durchdachte Blumen für den wichtigsten Tag - vom Strauß bis zur Veranstaltungsdekoration.' },
    sympathy: { title: 'Trauer & Beerdigungen', blurb: 'Sanfte, würdevolle Gestecke, mit Sorgfalt gefertigt, um zu sagen, was Worte nicht können.' },
    birthdays: { title: 'Geburtstage', blurb: 'Fröhliche, leuchtende Sträuße und Körbe, um jemandem den Tag zu verschönern.' },
    anniversaries: { title: 'Jubiläen', blurb: 'Zeitlose Gestecke für die Meilensteine, an die Sie sich immer erinnern werden.' },
    celebrations: { title: 'Muttertag & Feiern', blurb: 'Saisonale, beeindruckende Blumen für die Momente, die es zu feiern lohnt.' },
    everyday: { title: 'Sträuße für jeden Tag', blurb: 'Einfach so. Frische, saisonale Blumen, um jeden gewöhnlichen Tag zu verschönern.' },
  },

  home: {
    heroLine1: 'Wunderschöne Blumen.',
    heroLine2: 'Für Momente,',
    heroLine3Script: 'die zählen.',
    heroSub:
      'Maßgeschneiderte Gestecke, von Hand gefertigt mit persönlicher Note und kostenlos geliefert in La Marina und an der Costa Blanca Süd.',
    valueProps: {
      fresh: { title: 'Frische & Saisonale Blumen' },
      personal: { title: 'Persönlicher Service' },
      delivery: { title: 'Lieferung am selben Tag' },
      occasion: { title: 'Perfekt für jeden Anlass' },
    },
    introEyebrow: 'Ihr lokales Blumengeschäft',
    introHeading: 'Blumen mit persönlicher Note',
    introBody:
      'Blooming Marvellous ist ein Boutique-Blumengeschäft an der Costa Blanca Süd. Jedes Gesteck wird von Lorena von Hand gefertigt - nie von der Stange - mit frischen, saisonalen Blumen und der besonderen Sorgfalt, die den Unterschied macht.',
    occasionsEyebrow: 'Blumen für alle Anlässe',
    occasionsHeading: 'Was auch immer der Moment ist, wir lassen ihn erblühen',
    featuredEyebrow: 'Maßgeschneidert, nur für Sie',
    featuredHeading: 'Die Sorgfalt steckt im Detail',
    featuredBody:
      'Sagen Sie uns den Anlass, die Farben, das Gefühl - und Lorena gestaltet etwas wirklich Persönliches. Von einem durchdachten Strauß bis zu einem Gedenkgesteck in den Farben des Lieblingsvereins: kein Wunsch ist zu klein oder zu besonders.',
    deliveryEyebrow: 'Kostenlose lokale Lieferung',
    deliveryHeading: 'Kostenlos geliefert, direkt vor die Tür',
    deliveryBody:
      'Wir liefern kostenlos in La Marina und der umliegenden Costa Blanca Süd, mit Lieferung am selben Tag bei lokalen Bestellungen.',
    orderEaseScript: 'Bestellen leicht gemacht',
    orderEaseLine: 'Online & telefonisch',
    testimonialsEyebrow: 'Lokal beliebt',
    testimonialsHeading: 'Was unsere Kunden sagen',
    finalScript: 'Bereiten Sie jemandem Freude',
    finalHeading: 'Bestellen Sie heute und lassen Sie es erblühen',
    finalSub: 'Schreiben Sie uns per WhatsApp oder rufen Sie an - wir gestalten gerne etwas Schönes für Sie.',
  },

  flowers: {
    heroEyebrow: 'Unsere Blumen',
    heroHeading: 'Maßgeschneiderte Blumen, nur für Sie',
    heroSub:
      'Jeder Strauß und jedes Gesteck wird von Hand gestaltet - mit frischen, saisonalen Blumen, ausgewählt für Ihren Anlass, Ihre Farben und Ihre Geschichte.',
    introHeading: 'Nie von der Stange',
    introBody:
      'Nichts Gewöhnliches. Sagen Sie uns, was Ihnen vorschwebt, und wir gestalten etwas Persönliches - ob handgebundener Strauß, beeindruckendes Gesteck oder die Dekoration für einen besonderen Tag.',
    occasionsHeading: 'Blumen für jeden Anlass',
    occasionsSub: 'Einige der Momente, für die wir gerne gestalten - aber wenn Sie etwas anderes im Sinn haben, fragen Sie einfach.',
    galleryHeading: 'Ein wenig von unserer Arbeit',
    gallerySub: 'Ein Einblick in aktuelle Gestecke. Folgen Sie uns in den sozialen Medien für das Neueste.',
    ctaHeading: 'Etwas gefunden, das Ihnen gefällt?',
    ctaSub: 'Schreiben Sie uns per WhatsApp oder nehmen Sie Kontakt auf - wir erwecken es zum Leben.',
  },

  about: {
    heroEyebrow: 'Über uns',
    heroHeading: 'Lernen Sie Lorena kennen',
    heroSub: 'Die Floristin hinter Blooming Marvellous.',
    storyHeading: 'Ein lokales Blumengeschäft mit persönlicher Note',
    storyBody: [
      'Blooming Marvellous begann mit einer einfachen Überzeugung: Blumen sollten sich persönlich anfühlen. Jedes Gesteck wird von Lorena von Hand gefertigt, hier an der Costa Blanca, mit frischen und saisonalen Blüten.',
      'Es geht nie darum, einen fertigen Strauß aus dem Regal zu nehmen. Es geht ums Zuhören - auf den Anlass, die Person, das Gefühl - und darum, etwas zu schaffen, das genau das sagt, was Sie ausdrücken möchten.',
      'Diese Sorgfalt zeigt sich. Als eine Kundin zum Todestag ihres Bruders ein Gedenkgesteck in den Farben von West Ham wünschte, nannte sie das Ergebnis „unübertroffen“. Ob Feier oder Abschied - Ihr Moment wird behandelt, als wäre es unser eigener.',
    ],
    valuesHeading: 'Wofür wir stehen',
    values: {
      bespoke: { title: 'Maßgeschneidert', desc: 'Von Hand für Sie gestaltet - nie von der Stange.' },
      fresh: { title: 'Frisch & Saisonal', desc: 'Wunderschöne Blüten, frisch für jede Bestellung ausgewählt.' },
      personal: { title: 'Persönlich', desc: 'Ein echtes lokales Blumengeschäft, das zuhört und sich kümmert.' },
      local: { title: 'Kostenlose Lokale Lieferung', desc: 'Kostenlos geliefert in der gesamten Costa Blanca Süd.' },
    },
    bannerCaption: 'Von Hand gefertigt an der Costa Blanca, mit Liebe.',
    testimonialsHeading: 'Liebe Worte unserer Kunden',
    finalHeading: 'Lassen Sie uns etwas Schönes gestalten',
    finalSub: 'Erzählen Sie uns von Ihrem Anlass - wir helfen Ihnen gerne.',
  },

  delivery: {
    heroEyebrow: 'Lieferung',
    heroHeading: 'Kostenlose lokale Lieferung, mit persönlicher Note',
    heroSub:
      'Wir liefern wunderschöne Blumen kostenlos in La Marina und an der Costa Blanca Süd - mit Lieferung am selben Tag bei lokalen Bestellungen.',
    stepsHeading: 'So bestellen Sie',
    steps: {
      one: { title: 'Wählen Sie Ihren Anlass', desc: 'Stöbern Sie in unseren Blumen oder sagen Sie uns einfach, wofür sie sind.' },
      two: { title: 'Schreiben oder anrufen', desc: 'Kontaktieren Sie uns per WhatsApp oder Telefon mit Ihrer Idee, Farben und Budget.' },
      three: { title: 'Wir fertigen von Hand', desc: 'Lorena gestaltet Ihr Gesteck mit frischen, saisonalen Blumen.' },
      four: { title: 'Kostenlose lokale Lieferung', desc: 'Wir liefern kostenlos, direkt vor die Tür - am selben Tag bei lokalen Bestellungen.' },
    },
    areasHeading: 'Wohin wir liefern',
    areasSub: 'Kostenlose Lieferung in der gesamten Costa Blanca Süd, darunter:',
    areasNote: 'Nicht sicher, ob wir Sie erreichen? Fragen Sie einfach - wir helfen gerne.',
    hoursHeading: 'Öffnungszeiten',
    finalHeading: 'Bereit zu bestellen?',
    finalSub: 'Schreiben Sie uns per WhatsApp oder rufen Sie an - kostenlose lokale Lieferung in der gesamten Costa Blanca Süd.',
  },

  contact: {
    heroEyebrow: 'Kontakt',
    heroHeading: 'Kontakt aufnehmen',
    heroSub: 'Bestellen Sie ganz einfach - per WhatsApp, Telefon oder E-Mail. Wir freuen uns auf Sie.',
    methodsHeading: 'Bestellen leicht gemacht',
    whatsappLabel: 'WhatsApp',
    callLabel: 'Anrufen',
    emailLabel: 'E-Mail',
    detailsHeading: 'So finden Sie uns',
    hoursLabel: 'Öffnungszeiten',
    addressLabel: 'Adresse',
    formHeading: 'Senden Sie uns eine Nachricht',
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      occasion: 'Anlass',
      occasionDefault: 'Anlass auswählen',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
    },
    finalNote: 'Lieber sprechen? Schreiben Sie uns per WhatsApp oder rufen Sie an - wir antworten persönlich und schnell.',
  },

  footer: {
    tagline: 'Maßgeschneiderte Blumen für die Momente, die zählen - von Hand gefertigt an der Costa Blanca, kostenlos lokal geliefert.',
    navHeading: 'Entdecken',
    contactHeading: 'Kontakt',
    followHeading: 'Folgen Sie uns',
    rights: 'Alle Rechte vorbehalten.',
    langHeading: 'Sprache',
  },
};

export const content: Record<Locale, typeof en> = { en, es, de };

export function useContent(locale: Locale): typeof en {
  return content[locale];
}
