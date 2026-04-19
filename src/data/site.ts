import { faqs } from './faqs';

export const SITE_URL = (process.env.SITE_URL || 'https://klasse-epoxy.nl').replace(/\/$/, '');
export const SITE_NAME = 'Klasse Epoxy';
export const DEFAULT_TITLE = 'Epoxy Vloeren | Klasse Epoxy';
export const DEFAULT_DESCRIPTION =
  'Klasse Epoxy realiseert duurzame epoxy vloeren, metallic epoxy en flake epoxy voor woningen, garages, showrooms en industriële ruimtes in heel Nederland.';
export const DEFAULT_OG_IMAGE =
  'https://i.ibb.co/KxK89vjx/Epoxy-vloer-www-klasse-epoxy-nl.png';
export const PHONE_DISPLAY = '+31 (0) 20 123 4567';
export const PHONE_E164 = '+31201234567';
export const EMAIL = 'info@klasse-epoxy.nl';
export const ADDRESS = {
  streetAddress: 'Heiligeweg 105B',
  postalCode: '1561 DG',
  addressLocality: 'Krommenie',
  addressCountry: 'NL',
};
export const GEO = {
  latitude: 52.4997086,
  longitude: 4.7675971,
};

export const staticPages = [
  {
    path: '/',
    title: 'Epoxy Vloeren - Professionele Vloercoatings',
    description:
      'Professionele epoxy vloeren voor garage, woonkamer, badkamer en industrie. Metallic en flake effecten beschikbaar.',
  },
  {
    path: '/diensten',
    title: 'Onze Diensten - Epoxy Vloeren',
    description:
      'Ontdek onze professionele epoxy vloerdiensten: epoxy coating, metallic epoxy en flake epoxy voor woningen, bedrijven en garages.',
  },
  {
    path: '/werkwijze',
    title: 'Onze Werkwijze - Epoxy Vloeren',
    description:
      'Ontdek ons professionele proces voor het leggen van epoxy vloeren. Van offerte tot oplevering, stap voor stap uitgelegd.',
  },
  {
    path: '/portfolio',
    title: 'Portfolio - Epoxy Vloeren',
    description:
      'Bekijk ons portfolio van professionele epoxy vloeren. Van metallic effecten tot flake vloeren in garages, woonkamers en bedrijven.',
  },
  {
    path: '/faq',
    title: 'Veelgestelde Vragen - Epoxy Vloeren',
    description:
      'Antwoorden op veelgestelde vragen over epoxy vloeren, prijzen, onderhoud, installatie en het aanvraagproces.',
  },
  {
    path: '/contact',
    title: 'Contact - Epoxy Vloeren',
    description:
      'Neem contact op met Klasse Epoxy voor advies, prijzen en offertes voor epoxy vloeren, metallic epoxy en flake epoxy.',
  },
  {
    path: '/offerte',
    title: 'Offerte Aanvragen - Epoxy Vloeren',
    description:
      'Vraag vrijblijvend een offerte aan voor uw epoxy vloer project. Binnen 24 uur reactie en gratis advies van Klasse Epoxy.',
  },
  {
    path: '/privacy',
    title: 'Privacy Beleid - Epoxy Vloeren',
    description:
      'Lees hoe Klasse Epoxy persoonsgegevens verwerkt en beschermt binnen het privacybeleid van de website.',
  },
  {
    path: '/algemene-voorwaarden',
    title: 'Algemene Voorwaarden - Epoxy Vloeren',
    description:
      'Algemene voorwaarden voor offertes, opdrachten en leveringen van Klasse Epoxy.',
  },
] as const;

export const serviceSlugs = ['epoxy-coating', 'metallic-epoxy', 'flake-epoxy'] as const;

export const keywordSlugs = [
  'epoxy-vloer-coating', 'epoxy-vloer', 'epoxy-gietvloer', 'epoxy-coating-garage',
  'garagevloer-epoxy-coating', 'epoxy-vloer-garage', 'epoxy-coating-beton',
  'betoncoating-epoxy', 'betonvloer-coaten', 'epoxy-coating-badkamer',
  'badkamervloer-epoxy', 'waterdichte-vloer-badkamer', 'epoxy-douchevloer',
  'epoxy-coating-buiten', 'buitenvloer-epoxy', 'terras-epoxy-coating',
  'oprit-epoxy', 'uv-bestendige-coating', 'industriële-epoxy-coating',
  'industriële-vloercoating', 'magazijn-vloer-epoxy', 'werkplaats-vloer-coating',
  'esd-vloer-epoxy', 'epoxy-coating-prijs', 'epoxy-coating-kosten',
  'epoxy-vloer-offerte',
  'metallic-epoxy-vloer', 'metallic-epoxyvloer', 'metallic-vloer-epoxy',
  'glanzende-epoxy-vloer', 'metallic-gietvloer', 'gietvloer-metallic', 'metallic-gietvloer-prijs',
  'metallic-epoxy-prijs', 'metallic-epoxy-vloer-prijs-per-m2', 'metallic-epoxy-kosten',
  'metallic-gietvloer-prijs-per-m2', 'metallic-epoxy-offerte', 'metallic-epoxy-pigment',
  'metallic-pigmentpoeder-epoxy', 'mica-pigment-epoxy', 'epoxy-metallic-poeder',
  'metallic-kleurpigment-epoxy', 'metallic-epoxy-vloer-leggen', 'metallic-epoxy-woonkamer',
  'metallic-vloer-woonkamer', 'metallic-epoxy-interieur', 'metallic-gietvloer-woning',
  'metallic-epoxy-kleuren', 'metallic-epoxy-goud', 'metallic-epoxy-zilver',
  'metallic-epoxy-koper', 'metallic-epoxy-brons', 'metallic-epoxy-grijs',
  'metallic-epoxy-antraciet', 'metallic-epoxy-marmerlook', 'epoxy-marmereffect-vloer',
  'marmer-vloer-epoxy', 'epoxy-vloer-marmer-uitstraling', 'metallic-epoxy-garage',
  'metallic-garagevloer-epoxy', 'metallic-epoxy-antislip-garage', 'metallic-epoxy-showroom',
  'metallic-vloer-winkel', 'metallic-epoxy-kantoor', 'metallic-vloer-horeca',
  'metallic-epoxy-hotel', 'metallic-epoxy-vloer-onderhoud', 'metallic-epoxy-vloer-schoonmaken',
  'metallic-epoxy-krasbestendig', 'metallic-epoxy-vloer-voordelen', 'metallic-epoxy-vloer-uitharden',
  'metallic-epoxy-woonkamer', 'metallic-epoxy-badkamer', 'metallic-epoxy-met-glitter',
  'metallic-epoxy-dieptewerking-effect', 'metallic-epoxy-lichtspel-vloer', 'metallic-epoxy-vloer-industrieel',
  'metallic-epoxy-effect-uitleg',
  'flake-epoxy-vloer', 'epoxy-vloer-flakes', 'flakes-epoxy-vloer', 'flakesvloer', 'flakes-vloer', 'flake-vloer-epoxy',
  'epoxy-flakesvloer', 'chipsvloer', 'chips-vloer-epoxy', 'epoxy-chipsvloer', 'chipsvloer-prijs', 'vlokkenvloer',
  'epoxy-vlokken', 'vloer-met-vlokken', 'epoxy-met-vlokken', 'kleurvlokken-epoxy', 'kleurchips-epoxy',
  'kleurvlokken-gietvloer', 'vinyl-flakes-epoxy', 'flake-epoxy-garage', 'chipsvloer-garage', 'vlokkenvloer-garage',
  'epoxy-flakes-garagevloer', 'flake-epoxy-prijs', 'flakesvloer-prijs-per-m2', 'chipsvloer-kosten', 'vlokkenvloer-prijs',
  'flake-epoxy-kleuren', 'epoxy-vlokken-kleuren', 'kleurvlokken-mixen', 'gietvloer-met-vlokken', 'gietvloer-flakes',
  'gietvloer-kleurvlokken', 'gietvloer-vlokken-instrooien', 'flake-epoxy-showroom', 'chipsvloer-winkel',
  'flakesvloer-kantoor', 'flakes-vloer-horeca', 'epoxy-vloer-flakes-antislip', 'flake-epoxy-full-broadcast',
  'kleurvlokken-goud-zilver-epoxy', 'vinyl-flakes-epoxy-vloer', 'epoxy-vloer-met-vlokken-camouflage',
  'gietvloer-met-kleurvlokken-kosten', 'epoxy-vlokken-grijs-beige', 'flakesvloer-onderhoud', 'chipsvloer-schoonmaken',
  'epoxy-vlokken-bandsporen-garage', 'flake-epoxy-woonkamer', 'flake-epoxy-entree', 'flake-epoxy-magazijn',
  'flake-epoxy-terrazzo-look', 'epoxy-vlokken-terrazzolook', 'flake-epoxy-sealer-topcoat',
] as const;

export const cities = [
  'alkmaar', 'almere', 'alphen-aan-den-rijn', 'amersfoort', 'amstelveen',
  'amsterdam', 'apeldoorn', 'arnhem', 'assen', 'bergen-op-zoom',
  'breda', 'capelle-aan-den-ijssel', 'delft', 'den-haag', 'deventer',
  'dordrecht', 'drachten', 'ede', 'eindhoven', 'emmen',
  'enschede', 'gouda', 'groningen', 'haarlem', 'haarlemmermeer',
  'harderwijk', 'heerlen', 'helmond', 'hengelo', 'hilversum',
  'hoofddorp', 'hoogeveen', 'katwijk', 'leeuwarden', 'leiden',
  'lelystad', 'middelburg', 'nieuwegein', 'nijmegen', 'oss',
  'purmerend', 'roosendaal', 'rotterdam', 's-hertogenbosch', 'schiedam',
  'sittard-geleen', 'sneek', 'spijkenisse', 'tilburg', 'utrecht',
  'velsen', 'venlo', 'vlaardingen', 'vlissingen', 'westland',
  'woerden', 'zaandam', 'zaanstad', 'zeist', 'zoetermeer', 'zwolle',
] as const;

export const citySlugs = [
  ...cities.map((city) => `epoxy-vloer-${city}`),
  ...cities.map((city) => `metallic-epoxy-vloer-${city}`),
  ...cities.map((city) => `flake-epoxy-vloer-${city}`),
  ...cities.map((city) => `epoxy-coating-vloer-${city}`),
];

export function toAbsoluteUrl(pathname: string) {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return `${SITE_URL}${cleanPath}`;
}

export function slugToTitle(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function pageFromStatic(pathname: string) {
  return staticPages.find((page) => page.path === pathname);
}

export function getStaticPathsList() {
  return staticPages.map((page) => page.path);
}

export function getAllPublicPaths() {
  return Array.from(new Set([
    ...getStaticPathsList(),
    ...serviceSlugs.map((slug) => `/${slug}`),
    ...keywordSlugs.map((slug) => `/${slug}`),
    ...citySlugs.map((slug) => `/${slug}`),
  ]));
}

export function getSlugSeo(slug: string) {
  if (serviceSlugs.includes(slug as (typeof serviceSlugs)[number])) {
    const label = slugToTitle(slug);
    return {
      title: `${label} - Epoxy Vloeren`,
      description: `Ontdek ${label.toLowerCase()} van Klasse Epoxy. Duurzame, naadloze en onderhoudsvriendelijke vloersystemen voor woningen, garages en bedrijven.`,
      schemaType: 'Service',
    };
  }

  if (slug.startsWith('metallic-epoxy-vloer-')) {
    const city = slugToTitle(slug.replace('metallic-epoxy-vloer-', ''));
    return {
      title: `Metallic Epoxy Vloer ${city} - Epoxy Vloeren`,
      description: `Klasse Epoxy realiseert metallic epoxy vloeren in ${city}. Luxe designvloeren met diepte, glans en een exclusieve uitstraling voor woningen en bedrijven.`,
      schemaType: 'Service',
    };
  }

  if (slug.startsWith('flake-epoxy-vloer-')) {
    const city = slugToTitle(slug.replace('flake-epoxy-vloer-', ''));
    return {
      title: `Flake Epoxy Vloer ${city} - Epoxy Vloeren`,
      description: `Klasse Epoxy realiseert flake epoxy vloeren in ${city}. Decoratieve, slijtvaste en antislip vloeroplossingen voor garages, showrooms en bedrijfsruimtes.`,
      schemaType: 'Service',
    };
  }

  if (slug.startsWith('epoxy-coating-vloer-')) {
    const city = slugToTitle(slug.replace('epoxy-coating-vloer-', ''));
    return {
      title: `Epoxy Coating Vloer ${city} - Epoxy Vloeren`,
      description: `Klasse Epoxy levert epoxy coating vloeren in ${city}. Sterke, naadloze en vloeistofdichte coatings voor woningen, garages en industriële toepassingen.`,
      schemaType: 'Service',
    };
  }

  if (slug.startsWith('epoxy-vloer-')) {
    const city = slugToTitle(slug.replace('epoxy-vloer-', ''));
    return {
      title: `Epoxy Vloer ${city} - Epoxy Vloeren`,
      description: `Klasse Epoxy realiseert hoogwaardige epoxy vloeren in ${city}. Naadloze, duurzame en onderhoudsvriendelijke vloeren voor woningen, werkplaatsen en commerciële ruimtes.`,
      schemaType: 'Service',
    };
  }

  const keywordLabel = slugToTitle(slug);
  return {
    title: `${keywordLabel} - Epoxy Vloeren`,
    description: `Lees alles over ${keywordLabel.toLowerCase()} van Klasse Epoxy. Praktische uitleg, toepassingen, voordelen en advies voor epoxy vloeren en coatings.`,
    schemaType: 'WebPage',
  };
}

export function getPageMeta(pathname: string, title?: string, description?: string) {
  if (pathname !== '/' && pathname !== '') {
    const staticPage = pageFromStatic(pathname);
    if (staticPage) {
      return {
        title: title || staticPage.title,
        description: description || staticPage.description,
        schemaType: pathname === '/contact' ? 'ContactPage' : pathname === '/diensten' ? 'CollectionPage' : 'WebPage',
      };
    }

    const slug = pathname.replace(/^\//, '');
    return {
      ...getSlugSeo(slug),
      title: title || getSlugSeo(slug).title,
      description: description || getSlugSeo(slug).description,
    };
  }

  const home = pageFromStatic('/')!;
  return {
    title: title || home.title,
    description: description || home.description,
    schemaType: 'WebSite',
  };
}

export function getBreadcrumbItems(pathname: string, title: string) {
  const items = [{ name: 'Home', path: '/' }];

  if (pathname === '/' || pathname === '') {
    return items;
  }

  const segments = pathname.replace(/^\//, '').split('/').filter(Boolean);
  let currentPath = '';

  for (const segment of segments) {
    currentPath += `/${segment}`;
    items.push({
      name: currentPath === pathname ? title : slugToTitle(segment),
      path: currentPath,
    });
  }

  return items;
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'nl-NL',
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    telephone: PHONE_E164,
    logo: DEFAULT_OG_IMAGE,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}#localbusiness`,
    name: SITE_NAME,
    image: DEFAULT_OG_IMAGE,
    url: SITE_URL,
    email: EMAIL,
    telephone: PHONE_E164,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
}

export function getBreadcrumbSchema(pathname: string, title: string) {
  const items = getBreadcrumbItems(pathname, title);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(pathname: string, title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
    serviceType: title,
    url: toAbsoluteUrl(pathname),
  };
}

export function getWebPageSchema(pathname: string, title: string, description: string, type = 'WebPage') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: toAbsoluteUrl(pathname),
    inLanguage: 'nl-NL',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getPageSchemas(pathname: string, title: string, description: string, schemaType?: string) {
  const schemas = [
    getWebsiteSchema(),
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getBreadcrumbSchema(pathname, title),
  ];

  if (pathname === '/' || schemaType === 'WebSite') {
    schemas.push(getWebPageSchema(pathname, title, description, 'WebPage'));
    schemas.push(getFaqSchema());
    return schemas;
  }

  if (pathname === '/faq') {
    schemas.push(getWebPageSchema(pathname, title, description, 'FAQPage'));
    schemas.push(getFaqSchema());
    return schemas;
  }

  if (pathname === '/contact') {
    schemas.push(getWebPageSchema(pathname, title, description, 'ContactPage'));
    return schemas;
  }

  if (schemaType === 'Service') {
    schemas.push(getWebPageSchema(pathname, title, description, 'Service')); 
    schemas.push(getServiceSchema(pathname, title, description));
    return schemas;
  }

  if (pathname === '/diensten') {
    schemas.push(getWebPageSchema(pathname, title, description, 'CollectionPage'));
    return schemas;
  }

  schemas.push(getWebPageSchema(pathname, title, description));
  return schemas;
}

export function getLlmsEntries() {
  const mainPages = staticPages.map((page) => ({
    title: page.title,
    path: page.path,
    description: page.description,
  }));

  const servicePages = serviceSlugs.map((slug) => ({
    title: getSlugSeo(slug).title,
    path: `/${slug}`,
    description: getSlugSeo(slug).description,
  }));

  return [...mainPages, ...servicePages];
}