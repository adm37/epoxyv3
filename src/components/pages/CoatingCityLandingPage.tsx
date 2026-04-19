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
export default function CoatingCityLandingPage({ slug = "" }: Props) {
  const citySlug = slug.replace("epoxy-coating-vloer-", "");
  const cityName = formatCityName(citySlug);

  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-epoxy-black overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://i.ibb.co/KxK89vjx/Epoxy-vloer-www-epoxyelite-nl.png" 
              alt={`Epoxy Coating ${cityName}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-epoxy-accent text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <MapPin className="w-3 h-3" />
              Lokaal Specialist in {cityName}
            </motion.div>
            <h1 className="text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8">
              EPOXY COATING <br />
              <span className="text-epoxy-accent">{cityName.toUpperCase()}.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Zoekt u een strakke, duurzame en voordelige vloerafwerking in {cityName}? Onze <strong>epoxy coatings</strong> zijn de ideale oplossing voor woningen, garages en commerciële ruimtes.
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
              Hoogwaardige epoxy coating voor uw project in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                In een dynamische omgeving als {cityName} is een sterke en onderhoudsvriendelijke vloer geen overbodige luxe. Of het nu gaat om een 
                moderne woonkamer, een strakke kantoorruimte of een intensief gebruikte garage in {cityName}; een <strong>epoxy coating</strong> biedt 
                de perfecte uitkomst. Klasse Epoxy is uw gecertificeerde partner voor het aanbrengen van duurzame coatingsystemen die jarenlang meegaan.
              </p>
              <p>
                Een epoxy coating is een dunne, maar uiterst sterke laag die over een bestaande ondervloer wordt aangebracht. In tegenstelling tot een 
                volledige gietvloer, behoudt een coating de structuur van de ondervloer terwijl het alle beschermende eigenschappen van epoxy biedt. 
                In {cityName} adviseren wij deze oplossing vaak aan klanten die een vloeistofdichte en stofvrije vloer wensen tegen een zeer 
                competitieve prijs.
              </p>

              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">De voordelen van Epoxy Coating in {cityName}</h3>
              <p>
                Kiezen voor een epoxy coating van Klasse Epoxy in {cityName} betekent kiezen voor zekerheid. Onze coatings zijn volledig naadloos, 
                waardoor vuil en bacteriën geen kans krijgen om zich te nestelen. Dit maakt de vloer uitermate hygiënisch en eenvoudig te reinigen. 
                Voor bedrijven in {cityName} die moeten voldoen aan strenge HACCP-normen, is een epoxy coating vaak de meest efficiënte oplossing.
              </p>
              <p>
                Daarnaast is de coating chemisch resistent en vloeistofdicht. Olie, vetten en zuren trekken niet in de vloer, wat essentieel is voor 
                garages en werkplaatsen in de regio {cityName}. Bovendien is de vloer verkrijgbaar in vrijwel elke RAL-kleur, waardoor we de vloer 
                perfect kunnen afstemmen op uw interieur of huisstijl.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-epoxy-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="sr-only">Voordelen van Epoxy Coating</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Shield className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Slijtvast & Sterk</h3>
                <p className="text-white/50 leading-relaxed">
                  Onze coatings in {cityName} zijn bestand tegen zware mechanische belasting en intensief loopverkeer, ideaal voor elke omgeving.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Droplets className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">100% Vloeistofdicht</h3>
                <p className="text-white/50 leading-relaxed">
                  Geen vlekken meer van olie of water. Een epoxy coating beschermt uw ondervloer in {cityName} optimaal tegen indringing.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Zap className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Snelle Installatie</h3>
                <p className="text-white/50 leading-relaxed">
                  Dankzij onze efficiënte technieken in {cityName} kan uw vloer vaak al binnen 48 uur weer volledig in gebruik worden genomen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section 2 */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              Het proces: Van inspectie tot resultaat in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                Het aanbrengen van een kwalitatieve epoxy coating in {cityName} is een proces dat precisie vereist. Bij Klasse Epoxy volgen we een 
                vastgesteld stappenplan om de hoogste kwaliteit te garanderen.
              </p>
              <ol className="list-decimal pl-6 space-y-4 font-medium text-black">
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Inspectie & Voorbereiding:</h3> We beginnen met een grondige analyse van de ondervloer in uw pand in {cityName}.
                  Eventuele scheuren worden gerepareerd en de vloer wordt geschuurd of gestraald voor optimale hechting.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Primerlaag:</h3> Een speciale primer zorgt voor een vloeistofdichte afsluiting en een sterke verbinding tussen de
                  ondervloer en de epoxy.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">De Coating:</h3> Dit is het moment waarop uw vloer in {cityName} zijn kleur en karakter krijgt. De epoxy wordt
                  handmatig uitgegoten en geëgaliseerd door onze experts.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Topcoating:</h3> Een transparante of gekleurde topcoat beschermt de vloer tegen krassen en UV-straling,
                  zodat de kleur jarenlang behouden blijft.
                </li>
              </ol>
              <p>
                Gedurende het gehele proces houden we u in {cityName} op de hoogte van de voortgang. Wij streven naar minimale overlast en een 
                maximaal resultaat dat uw verwachtingen overtreft.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-black mb-12 uppercase tracking-tighter">Veelgestelde vragen over Epoxy Coating in {cityName}</h2>
            <div className="space-y-6">
              {[
                { q: `Wat is het verschil tussen een gietvloer en een coating?`, a: `Een gietvloer is enkele millimeters dik en egaliseert de vloer volledig. Een coating is een dunnere laag die de structuur van de ondervloer volgt, maar wel dezelfde beschermende eigenschappen biedt tegen een lagere prijs in ${cityName}.` },
                { q: `Is epoxy coating geschikt voor buiten?`, a: `Standaard epoxy is niet UV-bestendig en kan buiten verkleuren. Voor buitentoepassingen in ${cityName} adviseren wij een polyurethaan coating of een speciale UV-bestendige epoxy.` },
                { q: `Hoe lang moet de vloer drogen?`, a: `Na 24 uur is de vloer in ${cityName} meestal weer beloopbaar. Na 7 dagen is de vloer volledig chemisch uitgehard en zwaar belastbaar.` },
                { q: `Kan ik zelf een epoxy coating aanbrengen?`, a: `Hoewel er doe-het-zelf pakketten bestaan, raden wij voor een duurzaam en strak resultaat in ${cityName} altijd aan om een professional in te schakelen. De voorbehandeling van de ondervloer is cruciaal voor de levensduur.` }
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
              Uw vloer in {cityName} transformeren?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
              Kies voor de kwaliteit van Klasse Epoxy. Ontvang vandaag nog een vrijblijvende offerte voor uw epoxy coating project in {cityName}.
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
