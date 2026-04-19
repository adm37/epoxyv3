import { PaintRoller, Instagram, Facebook, Music2 as Tiktok } from "lucide-react";
import { SITE_URL } from "../data/site";

export default function Footer() {
  const sitemapUrl = `${SITE_URL}/sitemap/`;
  const cities = [
    "Almere", "Amstelveen", "Amsterdam", "Den Haag", "Haarlem", 
    "Hoofddorp", "Purmerend", "Rotterdam", "Utrecht", "Zaandam"
  ];

  return (
    <footer className="bg-epoxy-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <PaintRoller className="text-black w-5 h-5" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white">
                KLASSE<span className="text-epoxy-accent"> EPOXY</span>
              </span>
            </div>
            <p className="text-white/30 text-xs max-w-xs leading-relaxed uppercase tracking-widest font-bold mb-6">
              Uw partner voor <strong>epoxy vloeren</strong>, <strong>gietvloer design</strong> en <strong>industriële vloercoating</strong>. 
              Gevestigd in Krommenie, werkzaam door heel Nederland.
            </p>
            <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <div>Heiligeweg 105B, Krommenie</div>
              <div>+31 (0) 20 123 4567</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-16">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Navigatie</h4>
              <ul className="space-y-3 text-[10px] font-bold text-white uppercase tracking-widest">
                <li><a href="/" className="hover:text-epoxy-accent transition-colors">Home</a></li>
                <li><a href="/werkwijze/" className="hover:text-epoxy-accent transition-colors">Werkwijze</a></li>
                <li><a href="/portfolio/" className="hover:text-epoxy-accent transition-colors">Portfolio</a></li>
                <li><a href="/faq/" className="hover:text-epoxy-accent transition-colors">FAQ</a></li>
                <li><a href={sitemapUrl} className="hover:text-epoxy-accent transition-colors">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Diensten</h4>
              <ul className="space-y-3 text-[10px] font-bold text-white uppercase tracking-widest">
                <li><a href="/epoxy-coating/" className="hover:text-epoxy-accent transition-colors">Epoxy Coating</a></li>
                <li><a href="/metallic-epoxy/" className="hover:text-epoxy-accent transition-colors">Metallic Epoxy</a></li>
                <li><a href="/flake-epoxy/" className="hover:text-epoxy-accent transition-colors">Flake Epoxy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
              <ul className="space-y-3 text-[10px] font-bold text-white uppercase tracking-widest">
                <li><a href="/contact/" className="hover:text-epoxy-accent transition-colors">Contactpagina</a></li>
                <li><a href="mailto:info@klasseepoxy.nl" className="hover:text-epoxy-accent transition-colors normal-case tracking-normal">info@klasseepoxy.nl</a></li>
                <li><a href="tel:+31201234567" className="hover:text-epoxy-accent transition-colors">+31 (0) 20 123 4567</a></li>
              </ul>
              <div className="mt-6 flex gap-4" aria-label="Social placeholders verborgen voor SEO totdat echte profielen zijn toegevoegd">
                <span className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/30"><Instagram className="w-4 h-4" /></span>
                <span className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/30"><Facebook className="w-4 h-4" /></span>
                <span className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/30"><Tiktok className="w-4 h-4" /></span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 h-48 rounded-2xl overflow-hidden glass-card border border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.859664426543!2d4.7675971!3d52.4997086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5f02c5f7c5f7d%3A0x7d7d7d7d7d7d7d7d!2sHeiligeweg%20105B%2C%201561%20DG%20Krommenie!5e0!3m2!1snl!2snl!4v1712850000000!5m2!1snl!2snl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klasse Epoxy Locatie"
            ></iframe>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">
          <div>© 2026 Klasse Epoxy. Alle rechten voorbehouden.</div>
          <div className="flex gap-8">
            <a href="/privacy/" className="hover:text-epoxy-accent transition-colors">Privacy</a>
            <a href="/algemene-voorwaarden/" className="hover:text-epoxy-accent transition-colors">Algemene voorwaarden</a>
            <a href={sitemapUrl} className="hover:text-epoxy-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
