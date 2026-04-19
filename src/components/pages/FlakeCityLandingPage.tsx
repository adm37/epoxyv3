import { motion } from "motion/react";
import { Shield, Zap, Droplets, Sparkles, CheckCircle2, ArrowRight, Star, Clock, Award, MapPin, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

const formatCityName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface Props { slug?: string; }
export default function FlakeCityLandingPage({ slug = "" }: Props) {
  const citySlug = slug.replace("flake-epoxy-vloer-", "");
  const cityName = formatCityName(citySlug);

  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-epoxy-black overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://i.ibb.co/p6pRwB7c/Epoxy-flake-coating-www-klasse-epoxy-nl.png" 
              alt={`Flake Epoxy vloer ${cityName}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-epoxy-accent text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <MapPin className="w-3 h-3" />
              Lokaal Specialist in {cityName}
            </motion.div>
            <h1 className="text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8">
              FLAKE EPOXY <br />
              <span className="text-epoxy-accent">{cityName.toUpperCase()}.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Zoekt u een decoratieve en extreem slijtvaste vloer in {cityName}? Onze <strong>flake epoxyvloeren</strong> zijn de perfecte keuze voor zowel woningen als commerciële ruimtes.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="btn-dark">Gratis Offerte Aanvragen</a>
              <a href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                Bekijk Portfolio <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Trust />

        {/* SEO Content Section 1 */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              De perfecte flake epoxy vloer voor uw pand in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                In {cityName} zien we een groeiende trend in het gebruik van decoratieve vloeroplossingen die niet alleen mooi zijn, maar ook bestand zijn tegen intensief gebruik. 
                De <strong>flake epoxy vloer</strong>, ook wel bekend als vlokkenvloer, is hierbij een absolute favoriet. Of u nu een moderne garage in het centrum van {cityName} 
                wilt inrichten, een hygiënische vloer zoekt voor uw praktijkruimte, of een unieke uitstraling wilt geven aan uw woonkamer; Klasse Epoxy is uw lokale expert.
              </p>
              <p>
                Wat een flake epoxy vloer zo uniek maakt, is de mogelijkheid om de vloer volledig naar uw smaak aan te passen. Door het instrooien van gekleurde vlokken in de 
                vloeibare epoxyhars ontstaat er een levendig patroon dat doet denken aan terrazzo of graniet. In {cityName} adviseren wij onze klanten vaak om te kiezen voor 
                een flake vloer vanwege de uitstekende antislip-eigenschappen en het feit dat stof en vuil minder zichtbaar zijn op het gemêleerde oppervlak.
              </p>

              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">Waarom kiezen voor Flake Epoxy in {cityName}?</h3>
              <p>
                De voordelen van flake epoxy voor uw project in {cityName} zijn talrijk. Ten eerste is de vloer extreem slijtvast. De vlokken zorgen voor een extra 
                beschermlaag die bestand is tegen mechanische belasting, zoals het rijden met voertuigen of het schuiven van zware meubels. Dit maakt het de ideale 
                vloer voor showrooms en werkplaatsen in de regio {cityName}.
              </p>
              <p>
                Ten tweede is de vloer volledig naadloos en vloeistofdicht. In een vochtig klimaat als dat van Nederland is dit een groot voordeel. Vocht kan niet 
                in de vloer trekken, waardoor schimmelvorming en structurele schade worden voorkomen. Bovendien is de vloer zeer hygiënisch; bacteriën en vuil 
                hebben geen kans om zich te nestelen in voegen of kieren, wat essentieel is voor zorginstellingen en horecagelegenheden in {cityName}.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-epoxy-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="sr-only">Voordelen van Flake Epoxy</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Shield className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Antislip Veiligheid</h3>
                <p className="text-white/50 leading-relaxed">
                  De vlokkenstructuur zorgt voor een natuurlijke antislip-werking, wat de veiligheid in uw ruimte in {cityName} aanzienlijk verhoogt, 
                  zelfs als de vloer nat is.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Palette className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Eindeloze Kleuren</h3>
                <p className="text-white/50 leading-relaxed">
                  Kies uit een breed scala aan vlokkenmixen om de perfecte sfeer te creëren die past bij de architectuur van uw pand in {cityName}.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Zap className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Snel Belastbaar</h3>
                <p className="text-white/50 leading-relaxed">
                  Dankzij onze efficiënte werkwijze in {cityName} is uw nieuwe flake vloer binnen enkele dagen volledig belastbaar, 
                  zodat u snel weer aan de slag kunt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section 2 */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              Het installatieproces in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                Bij Klasse Epoxy hanteren we een strikt protocol voor het aanbrengen van flake epoxyvloeren in {cityName}. Dit garandeert een resultaat dat 
                niet alleen visueel prachtig is, maar ook technisch perfect.
              </p>
              <ol className="list-decimal pl-6 space-y-4 font-medium text-black">
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Voorbereiding:</h3> De ondervloer in uw pand in {cityName} wordt stofvrij geschuurd en eventuele oneffenheden worden hersteld.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Basiscoating:</h3> We brengen een hoogwaardige epoxy basislaag aan in de door u gekozen kleur.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Instrooien:</h3> Terwijl de basislaag nog nat is, worden de vlokken handmatig en gelijkmatig ingestrooid over het gehele oppervlak in {cityName}.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Verwijderen overtollige vlokken:</h3> Na droging worden de loszittende vlokken verwijderd en wordt de vloer licht geschuurd voor een egaal resultaat.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Topcoating:</h3> We sluiten af met een transparante, slijtvaste topcoat die de vlokken insluit en de vloer zijn uiteindelijke glans en bescherming geeft.
                </li>
              </ol>
              <p>
                Dit proces zorgt ervoor dat uw vloer in {cityName} jarenlang meegaat zonder aan kwaliteit in te boeten. Onze vakmensen hebben oog voor detail 
                en zorgen voor een strakke afwerking tot in de kleinste hoekjes.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-black mb-12 uppercase tracking-tighter">Veelgestelde vragen over Flake Epoxy in {cityName}</h2>
            <div className="space-y-6">
              {[
                { q: `Wat kost een flake epoxy vloer in ${cityName}?`, a: `De prijs is afhankelijk van de oppervlakte en de staat van de ondervloer. Gemiddeld liggen de kosten in ${cityName} tussen de €60 en €90 per m2. Vraag een offerte aan voor een exacte prijs.` },
                { q: `Is de vloer makkelijk schoon te maken?`, a: `Ja, dankzij het naadloze oppervlak is stofzuigen en dweilen met een mild schoonmaakmiddel voldoende om uw vloer in ${cityName} schoon te houden.` },
                { q: `Hoe lang gaat de vloer mee?`, a: `Een flake epoxy vloer van Klasse Epoxy heeft een levensduur van minimaal 20 jaar, mits deze goed wordt onderhouden.` },
                { q: `Kan de vloer over een bestaande tegelvloer?`, a: `In veel gevallen is dit mogelijk in ${cityName}, mits de tegels goed vastliggen en de vloer correct wordt voorbehandeld met een speciale primer.` }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">{item.q}</h3>
                  <p className="text-black/60 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-epoxy-accent text-epoxy-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 uppercase">
              Klaar voor een flake vloer in {cityName}?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
              Ontvang vandaag nog een vrijblijvende offerte op maat voor uw project in {cityName}.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="bg-black text-white px-12 py-5 font-bold uppercase tracking-tighter hover:scale-105 transition-transform">
                Offerte Aanvragen
              </a>
              <a href="tel:+31201234567" className="border-2 border-black px-12 py-5 font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all">
                Bel Direct
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
