export interface ServiceItem {
  id: string;
  name: string;
  category: 'beauty' | 'hair-beard' | 'spa' | 'bridal';
  subCategory?: string;
  image: string;
  description: string;
  duration: string;
  popular?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  image: string;
  tag: string;
}

export const SALON_INFO = {
  name: "SCISSOR",
  subtitle: "UNISEX SALON",
  tagline: "Your Style. Your Signature.",
  welcomeNote: "WELCOME TO SCISSOR",
  heroDescription: "Premium Hair, Beauty & Grooming Experience for Everyone.",
  phone: "083182 48504",
  phoneRaw: "+918318248504",
  address: "Kasia, Kushinagar, Uttar Pradesh - 274402",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kasia+Kushinagar+Uttar+Pradesh+274402",
  hours: "7:00 AM – 8:00 PM (Sunday Open)",
  whatsapp: "918318248504",
  rating: "4.8/5",
  reviewsCount: "172+ Reviews",
  badge: "Women-Owned Business",
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "172+", label: "Happy Customers" },
    { value: "100%", label: "Satisfaction" }
  ],
  about: {
    badge: "ABOUT SCISSOR",
    titleLine1: "More Than a Salon,",
    titleLine2: "It's an Experience",
    description: "SCISSOR Unisex Salon is a modern beauty destination in Kasia, Kushinagar. We believe in enhancing your natural beauty with creativity, care and professional expertise.",
    highlights: [
      {
        title: "Unisex Salon - for Men & Women",
        desc: "Dedicated styling zones and privacy-focused suites for all clients."
      },
      {
        title: "Experienced & Certified Professionals",
        desc: "Master stylists and cosmetologists trained in contemporary trends."
      },
      {
        title: "Advanced Techniques & Premium Products",
        desc: "International grade hair, skin and grooming products only."
      },
      {
        title: "Warm Ambience & Hygienic Environment",
        desc: "100% sanitized tools, soothing music, and luxurious comfort."
      }
    ]
  }
};

export const FEATURES = [
  {
    id: "pro",
    title: "PROFESSIONAL",
    description: "Expert stylists & beauty specialists"
  },
  {
    id: "products",
    title: "PREMIUM PRODUCTS",
    description: "High quality products for the best care"
  },
  {
    id: "hygiene",
    title: "HYGIENE FIRST",
    description: "Clean, safe & comfortable space"
  },
  {
    id: "satisfaction",
    title: "CUSTOMER SATISFACTION",
    description: "Your happiness is our priority"
  }
];

export const BEAUTY_SERVICES: ServiceItem[] = [
  {
    id: "hair-styling",
    name: "Hair Styling & Care",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80",
    description: "Blow-dry, straightening, glamorous curls, party hair dos, and custom occasion styling.",
    duration: "45 mins"
  },
  {
    id: "blow-dry",
    name: "Blow Dry & Heat Styling",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    description: "Volumizing blow dry, sleek straight finish, soft bouncy waves, and anti-frizz heat protection.",
    duration: "30 mins"
  },
  {
    id: "eyebrow-threading",
    name: "Eyebrow Threading & Beautification",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    description: "Precise eyebrow threading, shaping, forehead/upper lip, arch contouring & eyebrow tint beautification.",
    duration: "20 mins",
    popular: true
  },
  {
    id: "eyelashes",
    name: "Eyelashes & Lash Lift",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=600&q=80",
    description: "Classic and volume eyelash extensions, keratin lash lift, tinting, and lash care.",
    duration: "45 mins"
  },
  {
    id: "facials",
    name: "Facials & Skin Rejuvenation",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    description: "Hydra facial, O3+ whitening, Gold & Diamond glow facial, anti-aging therapies.",
    duration: "60 mins",
    popular: true
  },
  {
    id: "tanning-detan",
    name: "De-Tan & Body Glow Therapy",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1512290903671-17adc819446d?auto=format&fit=crop&w=600&q=80",
    description: "Sun tan removal for face, neck, arms & full body with organic bleach and glowing polishing.",
    duration: "35 mins"
  },
  {
    id: "bridal-services",
    name: "Bridal & Pre-Bridal Packages",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    description: "Luxury HD Bridal makeup, Haldi/Mehendi party looks, pre-bridal glow care & saree draping.",
    duration: "120 mins",
    popular: true
  },
  {
    id: "acrylic-nails",
    name: "Acrylic Nails & Extensions",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
    description: "Acrylic extensions, gel overlays, French ombre tips, chrome finish and 3D nail art.",
    duration: "60 mins"
  },
  {
    id: "pedicure",
    name: "Luxury Pedicure & Foot Spa",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80",
    description: "Relaxing foot soak, dead skin exfoliation, heel crack therapy, soothing massage & nail buffing.",
    duration: "45 mins"
  },
  {
    id: "permanent-makeup",
    name: "Permanent Makeup & Microblading",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    description: "Semi-permanent eyebrow microblading, lip blush pigmentation, and lash-line enhancement.",
    duration: "90 mins"
  },
  {
    id: "permanent-hair-removal",
    name: "Permanent Hair Removal",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    description: "Advanced painless laser hair reduction and precision electrolysis treatments for face & body.",
    duration: "45 mins"
  },
  {
    id: "waxing-body",
    name: "Body Waxing & Brazilian Waxing",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    description: "Rica chocolate wax, liposoluble Brazilian peel-off wax, smooth full-body hair removal.",
    duration: "35 mins"
  },
  {
    id: "balayage",
    name: "Balayage & Hair Highlights",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    description: "Hand-painted French balayage, ombre gradients, caramel highlights, toner & gloss treatment.",
    duration: "120 mins"
  },
  {
    id: "hair-extensions",
    name: "Hair Extensions",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80",
    description: "100% natural human hair extensions — tape-in, clip-on, keratin bond & micro-ring fusion.",
    duration: "90 mins"
  },
  {
    id: "box-braids",
    name: "Box Braids & Creative Braids",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80",
    description: "Knotless box braids, cornrows, feed-in braids, Bohemian curls and artistic braiding styles.",
    duration: "120 mins"
  },
  {
    id: "spa-relaxation",
    name: "Full Body Massage & Spa",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    description: "Full body Swedish & aromatherapy massage, steam bath, stress-relief pressure therapy.",
    duration: "60 mins"
  }
];

export const MEN_SERVICES: ServiceItem[] = [
  {
    id: "haircuts",
    name: "Haircuts & Styling",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    description: "Signature fade, taper cuts, textured crop, buzz cut, and modern executive styling.",
    duration: "30 mins",
    popular: true
  },
  {
    id: "shaving",
    name: "Classic Shave & Hot Towel",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    description: "Traditional straight-edge razor shaving, hot towel steam, and soothing aftershave balm.",
    duration: "25 mins"
  },
  {
    id: "beard-styling",
    name: "Beard Styling & Lineup",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    description: "Sharp straight-razor lineup, shaping, beard trim, and hot lather contouring.",
    duration: "25 mins",
    popular: true
  },
  {
    id: "dreadlocks",
    name: "Dreadlocks & Locs Care",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    description: "Custom dreadlock creation, interlocking, palm rolling, re-twist and locs maintenance.",
    duration: "90 mins"
  },
  {
    id: "hair-beard-care",
    name: "Hair & Beard Spa Care",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
    description: "Nourishing beard oil treatment, deep conditioning hair wash, and anti-dandruff therapy.",
    duration: "35 mins"
  },
  {
    id: "hair-coloring",
    name: "Hair & Beard Coloring",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
    description: "Natural black coverage, ash highlights, global coloring, and beard gray blending.",
    duration: "50 mins"
  },
  {
    id: "beard-grooming",
    name: "Beard Grooming & Steam",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    description: "Steam softness treatment, mustache shaping, essential oil massage, and beard balm.",
    duration: "30 mins"
  },
  {
    id: "head-massage",
    name: "Head Massage (Champi)",
    category: "hair-beard",
    image: "https://images.unsplash.com/photo-1512290900672-1f02e71f2562?auto=format&fit=crop&w=600&q=80",
    description: "Relaxing Ayurvedic champi with cooling herbal oils, pressure point therapy & neck release.",
    duration: "30 mins"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "SCISSOR Salon Studio & Lounge",
    tag: "Interior",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g2",
    title: "Modern Hair Wash & Spa Zone",
    tag: "Equipment",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g3",
    title: "Reception & Product Display",
    tag: "Lobby",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g4",
    title: "Luxury Barber & Grooming Lounge",
    tag: "Men's Suite",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g5",
    title: "Private Beauty & Facial Room",
    tag: "Treatment",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g6",
    title: "Artistic Hair Transformations",
    tag: "Styling",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
  }
];

export const INSTAGRAM_THUMBNAILS = [
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80"
];

