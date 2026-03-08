export const site = {
  name: 'Blackout Network',
  tagline: 'Preparedness gear and emergency planning guides.',
  description:
    'Preparedness website focused on blackout gear, off-grid equipment, emergency supplies, and practical readiness tools.',
  url: 'https://example.com'
};

export const categories = [
  {
    slug: 'power',
    name: 'Power',
    description: 'Solar generators, power banks, lanterns, rechargeable lights, and backup power gear.'
  },
  {
    slug: 'water',
    name: 'Water',
    description: 'Water filters, storage containers, purification tools, and emergency water gear.'
  },
  {
    slug: 'food',
    name: 'Food',
    description: 'Freeze-dried meals, food storage systems, cooking tools, and emergency food solutions.'
  },
  {
    slug: 'medical',
    name: 'Medical',
    description: 'First aid kits, trauma gear, medical storage, and emergency care essentials.'
  },
  {
    slug: 'communication',
    name: 'Communication',
    description: 'Emergency radios, satellite communicators, battery-powered communication tools, and grid-down gear.'
  },
  {
    slug: 'tools',
    name: 'Tools',
    description: 'Multi-tools, flashlights, stoves, fire starters, knives, and core survival equipment.'
  }
];

export const featuredProducts = [
  {
    slug: 'best-solar-generators-home-backup',
    title: 'Best Solar Generators for Home Backup',
    excerpt: 'Our top picks for blackout preparedness, emergency power, and off-grid backup.',
    category: 'power',
    readingTime: '11 min read',
    heroStat: 'Home backup favorite'
  },
  {
    slug: 'best-emergency-radios-blackouts',
    title: 'Best Emergency Radios for Blackouts',
    excerpt: 'Hand-crank, NOAA, battery, and rechargeable radios that matter when the grid goes down.',
    category: 'communication',
    readingTime: '9 min read',
    heroStat: 'Emergency essential'
  },
  {
    slug: 'best-water-filters-emergency-preparedness',
    title: 'Best Water Filters for Emergency Preparedness',
    excerpt: 'Reliable filtration options for home kits, bug out bags, and backup water plans.',
    category: 'water',
    readingTime: '10 min read',
    heroStat: 'Water planning pick'
  },
  {
    slug: 'best-freeze-dried-food-kits',
    title: 'Best Freeze-Dried Food Kits',
    excerpt: 'Shelf-stable emergency meals for families, vehicles, and long-term storage.',
    category: 'food',
    readingTime: '8 min read',
    heroStat: 'Long-storage option'
  },
  {
    slug: 'best-first-aid-kits-families',
    title: 'Best First Aid Kits for Families',
    excerpt: 'From home backup kits to compact car and travel options.',
    category: 'medical',
    readingTime: '8 min read',
    heroStat: 'Family readiness'
  },
  {
    slug: 'best-tactical-flashlights-emergencies',
    title: 'Best Tactical Flashlights for Emergencies',
    excerpt: 'Durable lights for outages, vehicles, range bags, and everyday preparedness.',
    category: 'tools',
    readingTime: '7 min read',
    heroStat: 'Everyday carry pick'
  }
];

export const comparisons = [
  {
    slug: 'jackery-vs-ecoflow',
    title: 'Jackery vs EcoFlow',
    excerpt: 'Which backup power brand is better for blackouts, home emergencies, and off-grid setups?',
    category: 'power',
    winner: 'Depends on speed vs simplicity'
  },
  {
    slug: 'lifestraw-vs-sawyer',
    title: 'LifeStraw vs Sawyer',
    excerpt: 'A practical breakdown of two of the most popular emergency water filtration options.',
    category: 'water',
    winner: 'Sawyer for versatility'
  },
  {
    slug: 'garmin-inreach-vs-zoleo',
    title: 'Garmin inReach vs ZOLEO',
    excerpt: 'Satellite communication options for hiking, remote work, and emergency planning.',
    category: 'communication',
    winner: 'Garmin for ecosystem'
  }
];

export const guides = [
  {
    slug: '72-hour-blackout-kit-checklist',
    title: '72-Hour Blackout Kit Checklist',
    excerpt: 'A simple buying guide for building a practical 3-day outage kit for your household.',
    category: 'power'
  },
  {
    slug: 'how-to-build-a-family-emergency-kit',
    title: 'How to Build a Family Emergency Kit',
    excerpt: 'Cover water, food, power, lighting, communication, and medical basics without overspending.',
    category: 'medical'
  },
  {
    slug: 'best-bug-out-bag-gear-by-budget',
    title: 'Best Bug Out Bag Gear by Budget',
    excerpt: 'Starter, mid-range, and premium gear recommendations for practical preparedness.',
    category: 'tools'
  },
  {
    slug: 'how-much-water-store-per-person',
    title: 'How Much Water Should You Store Per Person?',
    excerpt: 'A practical guide to calculating emergency water storage for homes and vehicles.',
    category: 'water'
  }
];

const articleBodies = {
  defaultSections: [
    {
      heading: 'Why this matters',
      paragraphs: [
        'Preparedness gear is easiest to buy wrong when you focus on hype instead of actual use cases. The best product is the one that fits your home, budget, and emergency plan.',
        'For Blackout Network, we prioritize practical gear that works for outages, storms, rural living, vehicles, and realistic family preparedness.'
      ]
    },
    {
      heading: 'What to look for before buying',
      paragraphs: [
        'Focus on reliability, power source, replacement cost, storage footprint, and how quickly you can actually deploy the gear under stress.',
        'A good preparedness purchase should make your kit simpler, not more complicated.'
      ]
    },
    {
      heading: 'Bottom line',
      paragraphs: [
        'If you want one winner, choose the product that covers your most likely emergency scenario first. Most households need blackout-ready gear before they need specialized wilderness equipment.'
      ]
    }
  ]
};

export const articlePages = {
  'best-solar-generators-home-backup': {
    title: 'Best Solar Generators for Home Backup',
    type: 'best-gear',
    category: 'power',
    intro:
      'Solar generators are one of the most useful pieces of blackout gear for home backup. The right pick depends on whether you need to cover lights and phones, or larger loads like refrigerators and longer outage windows.',
    picks: [
      { name: 'EcoFlow Delta 2', bestFor: 'Fast charging and flexible expansion', price: '$$$', link: '#' },
      { name: 'Jackery Explorer 1000 v2', bestFor: 'Simple home backup', price: '$$$', link: '#' },
      { name: 'Bluetti AC180', bestFor: 'Capacity per dollar', price: '$$$', link: '#' }
    ],
    sections: articleBodies.defaultSections
  },
  'best-emergency-radios-blackouts': {
    title: 'Best Emergency Radios for Blackouts',
    type: 'best-gear',
    category: 'communication',
    intro:
      'A good emergency radio gives you weather updates, charging backup, and one more communication layer when power and internet go down.',
    picks: [
      { name: 'Midland ER310', bestFor: 'Overall home readiness', price: '$$', link: '#' },
      { name: 'RunningSnail Weather Radio', bestFor: 'Budget kits', price: '$', link: '#' },
      { name: 'Eton Sidekick', bestFor: 'Multi-power flexibility', price: '$$', link: '#' }
    ],
    sections: articleBodies.defaultSections
  },
  'best-water-filters-emergency-preparedness': {
    title: 'Best Water Filters for Emergency Preparedness',
    type: 'best-gear',
    category: 'water',
    intro:
      'Water planning is one of the most important parts of any emergency setup. The best filter depends on whether you are stocking home backup, vehicle kits, or portable evacuation gear.',
    picks: [
      { name: 'Sawyer Squeeze', bestFor: 'Versatility', price: '$', link: '#' },
      { name: 'LifeStraw Peak', bestFor: 'Simplicity', price: '$', link: '#' },
      { name: 'Alexapure Pro', bestFor: 'Home storage filtration', price: '$$$', link: '#' }
    ],
    sections: articleBodies.defaultSections
  },
  'best-freeze-dried-food-kits': {
    title: 'Best Freeze-Dried Food Kits',
    type: 'best-gear',
    category: 'food',
    intro:
      'Long shelf life food is useful for storms, layoffs, rural living, and general emergency readiness. Taste matters, but so do calories, protein, and real packaging durability.',
    picks: [
      { name: 'Mountain House Emergency Meals', bestFor: 'Taste and reputation', price: '$$$', link: '#' },
      { name: 'ReadyWise Emergency Supply', bestFor: 'Entry-level variety', price: '$$', link: '#' },
      { name: 'My Patriot Supply Kit', bestFor: 'Long storage focus', price: '$$$', link: '#' }
    ],
    sections: articleBodies.defaultSections
  },
  'best-first-aid-kits-families': {
    title: 'Best First Aid Kits for Families',
    type: 'best-gear',
    category: 'medical',
    intro:
      'Family kits should cover home use, vehicles, and travel. The best setup is usually one primary house kit plus smaller satellite kits.',
    picks: [
      { name: 'Adventure Medical Kits', bestFor: 'Organized family use', price: '$$', link: '#' },
      { name: 'MyMedic MyFAK', bestFor: 'Premium preparedness', price: '$$$', link: '#' },
      { name: 'Johnson & Johnson All-Purpose', bestFor: 'Basic home backup', price: '$', link: '#' }
    ],
    sections: articleBodies.defaultSections
  },
  'best-tactical-flashlights-emergencies': {
    title: 'Best Tactical Flashlights for Emergencies',
    type: 'best-gear',
    category: 'tools',
    intro:
      'Lighting is one of the first pain points in any outage. A dependable flashlight is often a better first purchase than more expensive gear.',
    picks: [
      { name: 'Streamlight ProTac', bestFor: 'Dependability', price: '$$', link: '#' },
      { name: 'Fenix PD36R', bestFor: 'Rechargeable power', price: '$$$', link: '#' },
      { name: 'ThruNite Archer', bestFor: 'Budget everyday kits', price: '$', link: '#' }
    ],
    sections: articleBodies.defaultSections
  },
  'jackery-vs-ecoflow': {
    title: 'Jackery vs EcoFlow',
    type: 'comparisons',
    category: 'power',
    intro: 'Jackery is often the simpler choice for mainstream backup users, while EcoFlow tends to win on charging speed and expansion options.',
    comparison: {
      left: { name: 'Jackery', strengths: ['Simple lineup', 'Beginner-friendly', 'Strong brand recognition'] },
      right: { name: 'EcoFlow', strengths: ['Fast recharge', 'Strong app features', 'Expandable systems'] }
    },
    sections: articleBodies.defaultSections
  },
  'lifestraw-vs-sawyer': {
    title: 'LifeStraw vs Sawyer',
    type: 'comparisons',
    category: 'water',
    intro: 'Both are popular, but the right winner depends on whether you want a quick emergency straw or a more flexible filtration system.',
    comparison: {
      left: { name: 'LifeStraw', strengths: ['Simple use', 'Compact', 'Good for backup kits'] },
      right: { name: 'Sawyer', strengths: ['More versatile', 'Works with pouches', 'Strong value'] }
    },
    sections: articleBodies.defaultSections
  },
  'garmin-inreach-vs-zoleo': {
    title: 'Garmin inReach vs ZOLEO',
    type: 'comparisons',
    category: 'communication',
    intro: 'If you need satellite communication, this usually comes down to app ecosystem, tracking preferences, and subscription fit.',
    comparison: {
      left: { name: 'Garmin inReach', strengths: ['Garmin ecosystem', 'Navigation overlap', 'Proven reputation'] },
      right: { name: 'ZOLEO', strengths: ['Simple messaging', 'Clean experience', 'Strong emergency use case'] }
    },
    sections: articleBodies.defaultSections
  },
  '72-hour-blackout-kit-checklist': {
    title: '72-Hour Blackout Kit Checklist',
    type: 'guides',
    category: 'power',
    intro: 'If your home loses power for three days, your biggest needs are light, communication, water access, shelf-stable food, and charging backup.',
    checklist: ['Water and filtration', 'Battery lighting', 'Power bank or solar generator', 'Emergency radio', 'Shelf-stable meals', 'Medical kit'],
    sections: articleBodies.defaultSections
  },
  'how-to-build-a-family-emergency-kit': {
    title: 'How to Build a Family Emergency Kit',
    type: 'guides',
    category: 'medical',
    intro: 'A family emergency kit should be simple enough that everyone in the house knows where it is and how to use it.',
    checklist: ['Water', 'Food', 'Prescription backup', 'Lighting', 'Power', 'Hygiene and sanitation'],
    sections: articleBodies.defaultSections
  },
  'best-bug-out-bag-gear-by-budget': {
    title: 'Best Bug Out Bag Gear by Budget',
    type: 'guides',
    category: 'tools',
    intro: 'Preparedness does not have to start with premium gear. Start with essentials, then upgrade where failure would hurt most.',
    checklist: ['Backpack', 'Water filter', 'Fire starter', 'Flashlight', 'Knife or multi-tool', 'Compact first aid'],
    sections: articleBodies.defaultSections
  },
  'how-much-water-store-per-person': {
    title: 'How Much Water Should You Store Per Person?',
    type: 'guides',
    category: 'water',
    intro: 'Emergency water planning is easier when you break it into drinking, cooking, hygiene, and backup purification.',
    checklist: ['Daily drinking minimum', 'Cooking reserve', 'Sanitation allowance', 'Portable filtration backup'],
    sections: articleBodies.defaultSections
  }
};

export function getCategory(slug) {
  return categories.find((item) => item.slug === slug);
}

export function getArticlesByCategory(slug) {
  return [...featuredProducts, ...comparisons, ...guides].filter((item) => item.category === slug);
}

export function getArticle(slug) {
  return articlePages[slug];
}

export function getAllArticleSlugsByType(type) {
  return Object.entries(articlePages)
    .filter(([, value]) => value.type === type)
    .map(([slug]) => slug);
}
