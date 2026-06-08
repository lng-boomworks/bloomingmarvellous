// Invariant business facts for Blooming Marvellous.
// Translatable copy lives in src/i18n/content.ts - this file is locale-agnostic.

export const site = {
  brand: 'Blooming Marvellous',
  owner: 'Lorena',
  domain: 'https://bloomingmarvellousflowers.com',

  // Contact - WhatsApp is the mobile; the landline is the call-only number
  phoneDisplay: '+34 966 84 84 87',
  phoneHref: 'tel:+34966848487',
  whatsappDisplay: '+34 618 06 39 33',
  whatsappHref: 'https://wa.me/34618063933',
  email: 'lorena@bloomingmarvellousflowers.com',

  address: {
    street: 'Calle Virgen de la Asunción',
    area: 'Urbanización Oasis, La Marina',
    region: 'Alicante',
    country: 'Spain',
  },

  // {{MAP_EMBED_URL}} - replace with a real Google Maps embed before launch
  mapEmbed: '{{MAP_EMBED_URL}}',
  // {{OPENING_HOURS}} - pending from owner
  openingHours: '{{OPENING_HOURS}}',

  social: {
    // NOTE: verify handles before launch - poster shows @bloomingmarvellous.lamarina
    instagram: 'https://www.instagram.com/blooming_marvellous_florist/',
    facebook: 'https://www.facebook.com/bloomingmarvellouslamarina',
    pinterest: '{{PINTEREST_URL}}', // {{PINTEREST_URL}} - handle not yet supplied
    handle: '@bloomingmarvellous.lamarina',
  },
} as const;

// Delivery coverage area (Costa Blanca South). Free in La Marina, small charge for other areas. Names are proper nouns - shared across locales.
export const deliveryAreas = [
  'La Marina',
  'San Fulgencio',
  'Guardamar del Segura',
  'Ciudad Quesada',
  'Rojales',
  'Torrevieja',
  'Santa Pola',
  'Elche',
  'Alicante',
] as const;

// Occasion ids - labels/blurbs are localised in content.ts. Images are placeholders.
export const occasionIds = [
  'weddings',
  'sympathy',
  'birthdays',
  'anniversaries',
  'celebrations',
  'everyday',
] as const;
export type OccasionId = (typeof occasionIds)[number];

export const occasionImages: Record<OccasionId, string> = {
  weddings: '/images/weddings-events.jpg',
  sympathy: '/images/sympathy-funerals.jpg',
  birthdays: '/images/birthdays.jpg',
  anniversaries: '/images/anniversaries.jpg',
  celebrations: '/images/mothers-day.jpg',
  everyday: '/images/everyday-occasions.jpg',
};

// Real Facebook reviews (verbatim). English quotes kept across locales - they are authentic.
// Andrea's quote normalises the brand spelling "Lorena" (review wrote "Lorraine").
export interface Review {
  quote: string;
  author: string;
  date: string;
}

export const reviews: Record<string, Review> = {
  vivien: {
    quote: 'Absolutely stunning flowers delivered to me yesterday, thank you so much - they are beautiful x',
    author: 'Vivien Moore Laing',
    date: 'March 2025',
  },
  katie: {
    quote: 'Excellent service and beautiful arrangement, thanks again.',
    author: 'Katie Griffiths',
    date: 'March 2024',
  },
  linda: {
    quote: 'Thank you to Blooming Marvellous for my beautiful bouquet, delivered on behalf of my daughter on Mother’s Day.',
    author: 'Linda Reed',
    date: 'March 2024',
  },
  martin: {
    quote: 'Reliable, prompt and brilliant service.',
    author: 'Martin Harrow',
    date: 'November 2023',
  },
  elise: {
    quote: 'Amazing flowers, wouldn’t use anyone else! Thank you! xx',
    author: 'Elise Jones',
    date: 'October 2022',
  },
  angie: {
    quote: 'Ordered this beautiful basket arrangement for my mum for her birthday - what an amazing display it is too! My mum loved them.',
    author: 'Angie Davis',
    date: 'April 2022',
  },
  andrea: {
    quote: 'The care and effort Lorena puts into her work is second to none! I asked her to make something for the anniversary of my brother’s passing with West Ham colours. She has exceeded herself! Highly recommend.',
    author: 'Andrea Quintero',
    date: 'June 2022',
  },
};
