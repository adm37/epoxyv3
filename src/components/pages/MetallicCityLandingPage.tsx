import { motion } from "motion/react";
import { Star, ArrowRight, MapPin, Zap, Droplets, Sparkles, Palette, Layers, Shield } from "lucide-react";
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
export default function MetallicCityLandingPage({ slug = "" }: Props) {
  const citySlug = slug.replace("metallic-epoxy-vloer-", "");
  const cityName = formatCityName(citySlug);

  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-epoxy-black overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://i.ibb.co/MDt4dzSx/metallic-epoxy-www-klasse-epoxy-nl.png" 
              alt={`Metallic Epoxy vloer ${cityName}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-epoxy-accent text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <Sparkles className="w-3 h-3" />
              Exclusief Design in {cityName}
            </motion.div>
            <motion.h1 className="text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8 max-w-4xl">
              METALLIC EPOXY <br />
              <span className="text-epoxy-accent">{cityName.toUpperCase()}.</span>
            </motion.h1>
            <motion.p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Creëer een unieke, luxueuze uitstraling met onze <strong>metallic epoxyvloeren</strong> in {cityName}. 
              Een naadloos design met diepte-effecten die doen denken aan marmer of vloeibaar metaal.
            </motion.p>
            <div className="flex flex-col md:flex-row gap-6">
              <a href="#contact" className="btn-dark">Ontvang een Design Voorstel</a>
              <a href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                Bekijk Portfolio <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Trust />

        {/* Section 1: Introduction to Metallic Epoxy */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              De ultieme designvloer voor uw woning of kantoor in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                Bent u op zoek naar een vloer die niet alleen functioneel is, maar ook een echt statement maakt in uw interieur in {cityName}? 
                Dan is een <strong>metallic epoxy vloer</strong> de perfecte keuze. Deze vloeren staan bekend om hun unieke, glanzende afwerking 
                en de mogelijkheid om diepte en beweging te creëren die met geen enkele andere vloer mogelijk is. In {cityName} zien we deze 
                vloeren steeds vaker terug in moderne lofts, luxe showrooms en high-end kantoren.
              </p>
              <p>
                Het geheim van de metallic epoxy vloer zit in de toevoeging van speciale metallic pigmenten aan de transparante epoxyhars. 
                Tijdens het aanbrengen in uw pand in {cityName} worden deze pigmenten door onze vakmensen bewerkt met speciale technieken, 
                waardoor er natuurlijke stromingen, aders en kleurnuances ontstaan. Geen enkele metallic vloer is hetzelfde; u krijgt een 
                volledig uniek kunstwerk onder uw voeten.
              </p>
              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">Waarom kiezen voor Metallic Epoxy in {cityName}?</h3>
              <p>
                Naast de verbluffende esthetiek biedt metallic epoxy alle praktische voordelen van een standaard epoxyvloer. Het is 
                volledig naadloos, vloeistofdicht en extreem gemakkelijk schoon te houden. Voor woningen in {cityName} is het bovendien 
                een uitstekende warmtegeleider, waardoor het perfect samengaat met vloerverwarming. De glans van de vloer reflecteert 
                het licht in uw ruimte, waardoor zelfs kleinere kamers in {cityName} groter en lichter aanvoelen.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="sr-only">Kenmerken van Metallic Epoxy</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Palette, title: "Uniek Design", desc: "Elke vloer in " + cityName + " is een uniek handgemaakt meesterwerk." },
                { icon: Layers, title: "Diepte-effect", desc: "3D-effecten die uw interieur een ongekende luxe geven." },
                { icon: Shield, title: "Slijtvast", desc: "Bestand tegen krassen en intensief gebruik in " + cityName + "." },
                { icon: Droplets, title: "Hygiënisch", desc: "Naadloos en vloeistofdicht, ideaal voor elk huishouden." }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
                  <feature.icon className="text-epoxy-accent w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: The Art of Installation */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              Het ambachtelijke proces in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                Het leggen van een metallic epoxy vloer in {cityName} is een proces dat vraagt om artistiek inzicht en technische perfectie. 
                Bij Klasse Epoxy hebben we dit proces geperfectioneerd om tot de meest indrukwekkende resultaten te komen.
              </p>
              <div className="space-y-12 mt-12">
                <div>
                  <h3 className="text-xl font-bold text-black uppercase mb-4">1. Kleurkeuze en Ontwerp</h3>
                  <p>
                    Alles begint bij uw visie. In onze showroom of tijdens een adviesgesprek in {cityName} kiezen we de basiskleuren en de 
                    metallic pigmenten. Wilt u een rustige betonlook met een subtiele zilveren glans, of gaat u voor een dramatisch 
                    marmer-effect met goud en zwart? De mogelijkheden in {cityName} zijn eindeloos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black uppercase mb-4">2. Perfecte Ondergrond</h3>
                  <p>
                    Een metallic vloer is genadeloos voor oneffenheden. Daarom besteden we in {cityName} extra veel tijd aan het egaliseren 
                    en voorbereiden van de ondervloer. We brengen een zwarte of witte basislaag aan die de uiteindelijke metallic kleuren 
                    extra laat 'poppen'.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black uppercase mb-4">3. De Artistieke Gieting</h3>
                  <p>
                    Dit is waar de magie gebeurt. De metallic epoxy wordt uitgegoten over uw vloer in {cityName}. Terwijl de hars nog vloeibaar is, 
                    gebruiken onze applicateurs technieken zoals 'swirling' en 'veining' om de gewenste patronen te creëren. Dit vereist 
                    snelheid en een getraind oog voor compositie.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black uppercase mb-4">4. Hoogwaardige Afwerking</h3>
                  <p>
                    Om de diepte van de metallic pigmenten te beschermen en te accentueren, brengen we in {cityName} een kristalheldere, 
                    UV-bestendige topcoat aan. U kunt hierbij kiezen voor een hoogglans afwerking voor maximale reflectie, of een 
                    zijdeglans afwerking voor een subtielere, moderne look.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Break */}
        <section className="py-20 bg-epoxy-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-4 uppercase">
                Wilt u de metallic vloer in het echt zien?
              </h2>
              <p className="text-white/60 text-lg">
                Bezoek onze showroom of vraag een proefmonster aan specifiek voor uw project in {cityName}.
              </p>
            </div>
            <a href="#contact" className="btn-dark whitespace-nowrap">Plan een Adviesgesprek</a>
          </div>
        </section>

        {/* Section 3: Maintenance and Durability */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              Onderhoud en levensduur in {cityName}
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                Een veelgehoorde vraag van onze klanten in {cityName} is of zo'n mooie, glanzende vloer niet heel kwetsbaar is. 
                Het tegendeel is waar. Metallic epoxy is een van de hardste vloerafwerkingen die er bestaat. De topcoat die we 
                aanbrengen in {cityName} is speciaal ontwikkeld om krasbestendig te zijn en zijn glans jarenlang te behouden.
              </p>
              <p>
                Het onderhoud in {cityName} is verrassend eenvoudig. Omdat de vloer naadloos is, kan er geen vuil of stof achterblijven 
                in kieren. Regelmatig stofzuigen met een zachte borstel en dweilen met een PH-neutraal schoonmaakmiddel is voldoende 
                om uw vloer in topconditie te houden. In commerciële ruimtes in {cityName} raden we aan om periodiek een nieuwe 
                waslaag of polymeer aan te brengen voor extra bescherming.
              </p>
              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">Duurzaamheid voor de toekomst</h3>
              <p>
                Bij Klasse Epoxy in {cityName} denken we ook aan het milieu. Onze epoxyharsen zijn nagenoeg oplosmiddelvrij en hebben 
                een zeer lage emissie van vluchtige organische stoffen (VOS). Dit betekent dat de luchtkwaliteit in uw woning in 
                {cityName} optimaal blijft, zowel tijdens als na de installatie. Bovendien gaat een epoxyvloer decennia mee, 
                wat het een zeer duurzame investering maakt vergeleken met vloeren die elke 10 jaar vervangen moeten worden.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-black mb-12 uppercase tracking-tighter">Veelgestelde vragen over Metallic Epoxy in {cityName}</h2>
            <div className="space-y-6">
              {[
                { q: `Is een metallic epoxy vloer duurder dan een gewone gietvloer?`, a: `Ja, vanwege de extra arbeidsintensieve technieken en de kostbare metallic pigmenten ligt de prijs per m2 in ${cityName} iets hoger dan bij een standaard epoxyvloer. Echter, de unieke uitstraling is voor veel klanten de investering meer dan waard.` },
                { q: `Kan ik zelf de patronen bepalen?`, a: `U kunt de kleuren en de algemene 'vibe' (bijvoorbeeld druk of rustig) bepalen. Omdat het een handmatig proces is, kunnen we in ${cityName} nooit een exact patroon kopiëren, maar we kunnen wel heel dicht bij uw referentiebeelden komen.` },
                { q: `Is de vloer koud aan de voeten?`, a: `Epoxy neemt de temperatuur van de omgeving aan. In een goed geïsoleerd huis in ${cityName} voelt de vloer niet koud aan. In combinatie met vloerverwarming is het zelfs een van de meest comfortabele vloeren die er zijn.` },
                { q: `Hoe zit het met de garantie in ${cityName}?`, a: `Wij bieden een standaard garantie van 1 jaar op de hechting en de kleurvastheid van onze metallic vloeren in ${cityName}. Wij staan achter ons vakmanschap en de kwaliteit van onze materialen.` }
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
              Transformeer uw ruimte in {cityName}
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
              Kies voor de exclusiviteit van Metallic Epoxy. Onze experts in {cityName} staan klaar om uw droomvloer te realiseren.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="bg-black text-white px-12 py-5 font-bold uppercase tracking-tighter hover:scale-105 transition-transform">
                Vraag een Design Offerte aan
              </a>
              <a href="tel:0752340037" className="border-2 border-black px-12 py-5 font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all">
                Bel voor Advies: 0752340037
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
