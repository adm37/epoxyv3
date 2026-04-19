import { motion } from "motion/react";
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Award, MapPin, Clock, Zap, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

// Helper to capitalize city name
const formatCityName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface Props { slug?: string; }
export default function CityLandingPage({ slug = "" }: Props) {
  const citySlug = slug.replace("epoxy-vloer-", "");
  const cityName = formatCityName(citySlug);

  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-20">
        {/* City Hero Section */}
        <section className="relative py-32 bg-epoxy-black overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://i.ibb.co/KxK89vjx/Epoxy-vloer-www-klasse-epoxy-nl.png" 
              alt={`Epoxy vloer ${cityName}`} 
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
            <motion.h1 className="text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8">
              EPOXY VLOER <br />
              <span className="text-epoxy-accent">{cityName.toUpperCase()}.</span>
            </motion.h1>
            <motion.p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Zoekt u een duurzame, naadloze en moderne vloeroplossing in {cityName}? 
              Klasse Epoxy is uw gecertificeerde partner voor hoogwaardige epoxy gietvloeren, 
              industriële coatings en exclusief vloerdesign.
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="btn-dark">Gratis Offerte Aanvragen</a>
              <a href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                Bekijk Onze Projecten <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Trust />
        {/* Long Form Content Section 1: Intro & Local Context */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              De perfecte epoxy vloer voor uw project in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-12 leading-relaxed">
              <p className="mb-10">
                In een stad als {cityName}, waar architectuur en innovatie hand in hand gaan, is de keuze voor de juiste vloer cruciaal. 
                Of u nu een modern grachtenpand in het centrum van {cityName} wilt renoveren, een strakke nieuwbouwwoning in de buitenwijken 
                voorziet van een designvloer, of een industriële werkplaats in de regio {cityName} wilt verduurzamen; een epoxy vloer van 
                Klasse Epoxy biedt de ultieme combinatie van esthetiek en functionaliteit.
              </p>
              <p className="mb-10">
                Onze epoxyvloeren zijn niet zomaar vloeren; het zijn naadloze kunstwerken die speciaal zijn ontworpen om de tand des tijds te doorstaan. 
                In {cityName} zien we een groeiende vraag naar vloeren die zowel hygiënisch als slijtvast zijn. Epoxy is van nature vloeistofdicht, 
                wat het de ideale keuze maakt voor keukens, badkamers en commerciële ruimtes waar hygiëne een absolute prioriteit is.
              </p>
              <div className="pt-12">
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight mb-8">Waarom kiezen voor Klasse Epoxy in {cityName}?</h3>
                <p>
                  Als lokale specialist in de regio {cityName} begrijpen wij de specifieke behoeften van onze klanten. Wij werken uitsluitend met 
                  de hoogste kwaliteit harsen en pigmenten, waardoor we een garantie van 1 jaar kunnen bieden op de kleurvastheid en structurele 
                  integriteit van uw vloer. Onze vakmensen hebben jarenlange ervaring met het leggen van gietvloeren in diverse omstandigheden, 
                  van monumentale panden met uitdagende ondervloeren tot grootschalige industriële hallen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Break: Benefits Grid */}
        <section className="py-24 bg-epoxy-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="sr-only">Voordelen van onze epoxyvloeren</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Zap className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Extreem duurzaam</h3>
                <p className="text-white/50 leading-relaxed">
                  Onze epoxyvloeren in {cityName} zijn bestand tegen zware mechanische belasting, chemicaliën en intensief loopverkeer. 
                  Ideaal voor zowel woningen als commerciële omgevingen.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Droplets className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">100% Naadloos</h3>
                <p className="text-white/50 leading-relaxed">
                  Geen voegen, geen vuilophoping. Een epoxy vloer creëert een strakke, hygiënische eenheid die uw ruimte in {cityName} 
                  optisch vergroot en onderhoudsvriendelijk maakt.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border border-white/5">
                <Star className="text-epoxy-accent w-12 h-12 mb-8" />
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Design vrijheid</h3>
                <p className="text-white/50 leading-relaxed">
                  Kies uit honderden RAL-kleuren, betonlook afwerkingen of unieke metallic effecten. Wij realiseren uw droomvloer 
                  op maat in {cityName}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Long Form Content Section 2: Technical & Process */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              Het proces: Van advies tot oplevering in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                Het aanbrengen van een epoxy vloer is een ambachtelijk proces dat precisie en geduld vereist. Bij Klasse Epoxy hanteren we een 
                strikt 5-stappenplan om de hoogste kwaliteit te garanderen voor elk project in {cityName}.
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
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Schraaplaag (Optioneel):</h3> Voor een perfect egaal resultaat brengen we een schraaplaag aan die kleine oneffenheden 
                  volledig wegwerkt.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">De Gietlaag:</h3> Dit is het moment waarop uw vloer in {cityName} zijn kleur en karakter krijgt. De epoxy wordt 
                  handmatig uitgegoten en geëgaliseerd door onze experts.
                </li>
                <li>
                  <h3 className="inline text-lg font-bold text-epoxy-accent uppercase">Topcoating:</h3> Een transparante of gekleurde topcoat beschermt de vloer tegen krassen en UV-straling, 
                  zodat de kleur jarenlang behouden blijft.
                </li>
              </ol>
              <p>
                Gedurende dit proces houden we u in {cityName} nauwgezet op de hoogte. We begrijpen dat een verbouwing impact heeft op uw dagelijks leven 
                of bedrijfsvoering, daarom werken we efficiënt en laten we de werkplek altijd netjes achter.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-black mb-12 uppercase tracking-tighter">Veelgestelde vragen over epoxyvloeren in {cityName}</h2>
            <div className="space-y-6">
              {[
                { q: `Wat kost een epoxy vloer in ${cityName}?`, a: `De prijs van een epoxy vloer hangt af van de oppervlakte, de staat van de ondervloer en de gewenste afwerking. In de regio ${cityName} hanteren wij zeer competitieve tarieven. Vraag een gratis offerte aan voor een exacte prijsopgave.` },
                { q: `Is een epoxy vloer geschikt voor vloerverwarming?`, a: `Ja, epoxyvloeren geleiden warmte uitstekend. Het is een van de beste keuzes in combinatie met vloerverwarming, wat we veel zien bij moderne woningen in ${cityName}.` },
                { q: `Hoe lang duurt het leggen van de vloer?`, a: `Gemiddeld duurt het proces 4 tot 5 dagen, inclusief droogtijd tussen de verschillende lagen. Na de laatste laag is de vloer na 24 uur beloopbaar en na 7 dagen volledig chemisch uitgehard.` },
                { q: `Is epoxy glad als het nat is?`, a: `Standaard epoxy kan glad zijn als het nat is, maar wij kunnen een antislip-coating toevoegen. Dit raden we vaak aan voor badkamers of werkplaatsen in ${cityName} waar veiligheid voorop staat.` }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">{item.q}</h3>
                  <p className="text-black/60 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local CTA Section */}
        <section className="py-24 bg-epoxy-accent text-epoxy-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 uppercase">
              Klaar voor een nieuwe vloer in {cityName}?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
              Sluit u aan bij honderden tevreden klanten in {cityName}. Ontvang vandaag nog een vrijblijvende offerte op maat.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="bg-black text-white px-12 py-5 font-bold uppercase tracking-tighter hover:scale-105 transition-transform">
                Offerte Aanvragen
              </a>
              <a href="tel:0752340037" className="border-2 border-black px-12 py-5 font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all">
                Bel Direct: 0752340037
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
