// Single source of truth for the page content.
export const brand = 'ONDE'

// Replace with the team WhatsApp number (country code, no + or spaces).
export const whatsapp = '22900000000'

export const offer = {
  label: 'Cyber Monday',
  discount: '-46 %',
  // End of Cyber Monday 2026, Benin time
  endsAt: '2026-12-01T00:00:00+01:00',
}

export const product = {
  name: 'ONDE One',
  headline: 'Le silence, en édition Cyber Monday.',
  tagline:
    'Casque sans fil à réduction de bruit active. 40 heures d’autonomie, un son précis, et un confort qu’on oublie. Au prix Cyber Monday, tant qu’il en reste.',
  oldPrice: 129000,
  price: 69900,
  stockLeft: 38,
  stockTotal: 200,
  rating: 4.8,
  reviewCount: 1284,
  cta: 'Je profite de -46 %',
  unit: 'casque',
  images: {
    hero: { src: '/images/hero.webp', alt: 'Casque ONDE One noir mat posé sur un fond sombre, éclairé de côté' },
    features: [
      { src: '/images/feature-1.webp', alt: 'Gros plan sur l’oreillette du casque ONDE One et son coussin en mousse à mémoire de forme' },
      { src: '/images/feature-2.webp', alt: 'Casque ONDE One plié dans son étui de transport rigide' },
    ],
  },
}

export const specs = [
  { value: '40', unit: 'h', label: 'd’autonomie' },
  { value: '-35', unit: 'dB', label: 'de bruit en moins' },
  { value: '10', unit: 'min', label: 'de charge = 5 h d’écoute' },
  { value: '250', unit: 'g', label: 'seulement' },
]

export const features = [
  {
    title: 'Le bruit s’arrête. La musique commence.',
    text: 'Six micros analysent le bruit autour de vous 50 000 fois par seconde pour l’effacer : moteurs, bureau ouvert, marché de Dantokpa. Un geste sur l’oreillette et le mode Transparence vous rend le monde.',
    points: ['Réduction de bruit active hybride', 'Mode Transparence', 'Appels clairs, même dans le vent'],
  },
  {
    title: 'Fait pour vous suivre partout.',
    text: 'Pliable, léger, livré dans un étui rigide. Bluetooth 5.3 multipoint : passez du téléphone à l’ordinateur sans rien reconnecter.',
    points: ['Bluetooth 5.3 multipoint', 'Charge USB-C rapide', 'Étui rigide inclus'],
  },
]

export const reviews = [
  {
    name: 'Koffi A.',
    city: 'Cotonou',
    rating: 5,
    text: 'Je travaille en open space, c’est le jour et la nuit. La batterie tient toute la semaine.',
  },
  {
    name: 'Mariam B.',
    city: 'Parakou',
    rating: 5,
    text: 'Même qualité que mon ancien casque à 180 000 FCFA. Livré en 48 h, très bien emballé.',
  },
  {
    name: 'Jean-Paul S.',
    city: 'Porto-Novo',
    rating: 4,
    text: 'Très confortable pour les longs trajets. La réduction de bruit dans le zem est impressionnante.',
  },
]

export const guarantees = [
  { title: 'Garantie 2 ans', text: 'Échange immédiat en cas de panne.' },
  { title: 'Livraison 48 h', text: 'Offerte partout au Bénin.' },
  { title: 'Essai 30 jours', text: 'Pas convaincu ? Remboursé.' },
  { title: 'Paiement sécurisé', text: 'Mobile Money, carte ou à la livraison.' },
]

export const faq = [
  {
    q: 'Le prix de -46 % dure combien de temps ?',
    a: 'Jusqu’à la fin du Cyber Monday, ou dès que les 200 casques de l’offre sont vendus. Ensuite, le casque repasse à 129 000 FCFA.',
  },
  {
    q: 'Est-il compatible avec mon téléphone ?',
    a: 'Oui : iPhone, Android, ordinateur, tablette, et tout appareil Bluetooth. Un câble jack 3,5 mm est aussi fourni.',
  },
  {
    q: 'Quand vais-je le recevoir ?',
    a: 'Sous 48 h à Cotonou, Porto-Novo et Abomey-Calavi, sous 3 à 5 jours ailleurs au Bénin. La livraison est offerte.',
  },
  {
    q: 'Et s’il tombe en panne ?',
    a: 'Il est garanti 2 ans. Envoyez-nous un message sur WhatsApp, nous l’échangeons sans frais.',
  },
  {
    q: 'Puis-je payer à la livraison ?',
    a: 'Oui. Vous pouvez aussi payer par MTN MoMo, Moov Money ou carte bancaire.',
  },
]
