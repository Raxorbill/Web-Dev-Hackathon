import { SpaceItem, BespokeStep, CraftStep, WhyReason, Milestone } from '../types';

export const SPACES_DATA: SpaceItem[] = [
  {
    id: 'living',
    name: 'LIVING ROOM',
    subtitle: 'Quiet luxury & bespoke proportions',
    description: 'Bespoke sculptural sofas, architectural coffee tables, and tailored entertainment consoles designed to command presence while inviting effortless comfort.',
    image: 'https://i.postimg.cc/3xdyTqVr/sofa.png',
    aspects: ['Custom Sectionals & Sofas', 'Handcrafted Center Tables', 'Acoustic TV Media Walls', 'Accent Bergère Chairs']
  },
  {
    id: 'bedroom',
    name: 'BEDROOM',
    subtitle: 'Sanctuary of restful elegance',
    description: 'Statement upholstered headboards, solid seasoned timber bed frames, walk-in dressing suites, and integrated nightstands sculpted for serene tranquility.',
    image: '/images/bedroom/bedroom.png',
    aspects: ['Master Bespoke Beds', 'Custom Walk-in Wardrobes', 'Vanity Dressing Consoles', 'Ambient Nightstand Suites']
  },
  {
    id: 'dining',
    name: 'DINING',
    subtitle: 'The epicenter of hospitality',
    description: 'Hand-selected solid walnut and teak dining tables paired with ergonomic upholstered seating designed for intimate family dinners and grand hosting.',
    image: '/images/dining/dining.png',
    aspects: ['Hand-Carved Dining Tables', 'Ergonomic Velvet Seating', 'Display Sideboards & Credenzas', 'Bar & Wine Enclosures']
  },
  {
    id: 'bespoke',
    name: 'BESPOKE RESIDENCES',
    subtitle: 'Tailored architectural commissions',
    description: 'Custom architectural joinery, wall paneling, reading alcoves, and signature bespoke pieces sculpted for distinguished private residences.',
    image: '/images/reasons/space.png',
    aspects: ['Private Residence Commissions', 'Architectural Paneling', 'Tailored Alcoves & Lounges', 'Signature Showpieces']
  }
];

export const BESPOKE_STEPS: BespokeStep[] = [
  {
    number: '01',
    title: 'YOU IMAGINE',
    subtitle: 'Tell us what you want.',
    description: 'Every commission begins with dialogue. We listen to how you inhabit your home, your aesthetic leanings, spatial challenges, and lifestyle nuances.',
    visualType: 'grid'
  },
  {
    number: '02',
    title: 'WE DESIGN',
    subtitle: 'Your vision begins to take shape.',
    description: 'Our design artisans translate your aspirations into precise architectural sketches, millimeter-accurate 3D proportions, and curated tactile material swatches.',
    visualType: 'sketch'
  },
  {
    number: '03',
    title: 'WE CRAFT',
    subtitle: 'Skilled craftsmanship brings it to life.',
    description: 'In our dedicated atelier, veteran master woodworkers shape seasoned timber, hand-carve fine reliefs, and stitch premium Italian upholstery with unyielding precision.',
    image: '/images/craft/craft-process.png',
    visualType: 'photo'
  },
  {
    number: '04',
    title: 'YOU LIVE',
    subtitle: 'Furniture created specifically for your space.',
    description: 'Delivered, white-glove installed, and perfectly situated in your residence. A legacy centerpiece that transforms room volume into an indelible personal sanctuary.',
    image: '/images/bespoke/bespoke-home.png',
    visualType: 'photo'
  }
];

export const CRAFT_STEPS: CraftStep[] = [
  {
    number: '01',
    title: 'PREMIUM MATERIALS',
    subtitle: 'The foundation of true endurance',
    description: 'We source exclusively seasoned high-density teak, mahogany, and fine walnut, matched with full-grain leather, Belgian linens, and muted brass hardware designed to age with grace.',
    image: '/images/reasons/metarials.png',
    materials: ['Kiln-Dried Hardwood', 'High-Density Foam Layers', 'Imported Premium Velvets', 'Solid Muted Brass Hardware']
  },
  {
    number: '02',
    title: 'SKILLED CRAFTSMANSHIP',
    subtitle: 'Centuries of heritage in every joint',
    description: 'Traditional mortise-and-tenon joinery executed by master artisans who have honed hand-carving techniques across decades, ensuring indestructible structural integrity.',
    image: '/images/reasons/craft.png',
    materials: ['Mortise & Tenon Joinery', 'Artisan Hand-Carving', 'Multi-Stage Sanding', 'Hand-Polished Natural Oils']
  },
  {
    number: '03',
    title: 'MADE FOR YOUR SPACE',
    subtitle: 'Millimeter precision for architectural harmony',
    description: 'Standard showroom pieces force you to compromise your room flow. Every Heaven Furniture piece is customized to your exact room dimensions and lighting balance.',
    image: '/images/reasons/space.png',
    materials: ['On-Site Laser Measurement', 'Spatial Flow Optimization', 'Custom Depth & Height Tuning', 'Bespoke Color Matching']
  },
  {
    number: '04',
    title: 'MADE TO LAST',
    subtitle: 'Heirloom quality across generations',
    description: 'Protected by climate-resilient organic sealants tailored for the coastal humidity of Chattogram, retaining its lustre, tactile warmth, and ergonomic perfection for decades.',
    image: '/images/reasons/trust.png',
    materials: ['Anti-Warp Kiln Treatment', 'Weather-Resilient Topcoats', 'Double-Reinforced Frame Joints', 'Lifetime Craft Guarantee']
  }
];

export const WHY_REASONS: WhyReason[] = [
  {
    number: '01',
    title: 'FREE DESIGN CONSULTATION',
    summary: 'Personal interior consultation at our showroom or directly at your residence.',
    detail: 'Our seasoned interior design specialists review your floor plans, analyze lighting, and suggest bespoke finishes without any upfront obligation.',
    image: '/images/reasons/plan.png'
  },
  {
    number: '02',
    title: 'BUILT FOR YOUR SPACE',
    summary: 'No standard sizing constraints; calibrated to your exact architectural layout.',
    detail: 'Whether you possess a high-ceiling penthouse in Khulshi or a contemporary apartment in Agrabad, every piece is measured to flow seamlessly within your layout.',
    image: '/images/reasons/space.png'
  },
  {
    number: '03',
    title: 'PREMIUM MATERIALS',
    summary: 'Kiln-dried seasoned timbers, imported upholstery, and bespoke metalwork.',
    detail: 'We reject veneers and composite substitutes, prioritizing dense teak, rich mahogany, and hand-rubbed organic finishes.',
    image: '/images/reasons/metarials.png'
  },
  {
    number: '04',
    title: 'DELIVERY & INSTALLATION',
    summary: 'White-glove placement, precision leveling, and debris clearance included.',
    detail: 'Our dedicated in-house logistics team handles transport, uncrating, room assembly, and final micro-inspections across Chattogram and nationwide.',
    image: '/images/reasons/craft.png'
  },
  {
    number: '05',
    title: 'FLAGSHIP SHOWROOM & LIFETIME TRUST',
    summary: 'Visit our two-story flagship destination at Agrabad Access Road.',
    detail: 'Experience our master craftsmanship in person. Over 500+ private residences and premier commercial projects furnished across Chattogram and nationwide.',
    image: 'https://i.postimg.cc/R0tN3HMn/showroom.png'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '2020',
    title: 'Atelier Founded',
    description: 'Established with a focus on bespoke hand-crafted luxury furniture.'
  },
  {
    year: '2021',
    title: 'Agrabad Flagship',
    description: 'Inaugurated our premier showroom on Agrabad Access Road.'
  },
  {
    year: '2024–2025',
    title: 'International Furniture Fair',
    description: 'Featured exhibitor at the prestigious International Furniture Fair, Chattogram.'
  },
  {
    year: '2025',
    title: 'Chamber of Commerce',
    description: 'Honored as official member of the Chattogram Chamber of Commerce & Industry.'
  },
  {
    year: '2026',
    title: 'BFIOA Recognition',
    description: 'Acknowledged nationwide by Bangladesh Furniture Industry Owners Association.'
  }
];
