import type { APIRoute } from 'astro';
import { SITE_URL, getLlmsEntries } from '../data/site';

export const GET: APIRoute = () => {
  const entries = getLlmsEntries();
  const body = `# Klasse Epoxy
> Klasse Epoxy is gespecialiseerd in epoxy vloeren, metallic epoxy, flake epoxy en vloercoatings voor woningen, garages, showrooms en industriële ruimtes in Nederland.

## Main sections
${entries
  .map((entry) => `- [${entry.title}](${SITE_URL}${entry.path}): ${entry.description}`)
  .join('\n')}

## Key facts
- Bedrijf: Klasse Epoxy
- Specialisaties: epoxy coating, metallic epoxy, flake epoxy, gietvloeren en industriële vloercoating
- Werkgebied: heel Nederland
- Vestigingsplaats: Krommenie
- Contact: info@klasseepoxy.nl | 0752340037
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};