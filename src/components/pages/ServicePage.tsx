import { motion } from "motion/react";
import { Shield, Zap, Droplets, Sparkles, CheckCircle2, ArrowRight, Star, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

const serviceData = {
  "epoxy-coating": {
    title: "Epoxy Coating",
    subtitle: "Duurzame & Strakke Vloerafwerking",
    description: "De ideale oplossing voor wie op zoek is naar een sterke, vloeistofdichte en onderhoudsvriendelijke vloer zonder de dikte van een volledige gietvloer.",
    image: "https://i.ibb.co/KxK89vjx/Epoxy-vloer-www-klasse-epoxy-nl.png",
    icon: Sparkles
  },
  "metallic-epoxy": {
    title: "Metallic Epoxy",
    subtitle: "Exclusief Design & Luxe Uitstraling",
    description: "Transformeer uw ruimte in een kunstwerk met onze metallic epoxyvloeren. Unieke diepte-effecten en een marmerachtige glans voor een high-end interieur.",
    image: "https://i.ibb.co/MDt4dzSx/metallic-epoxy-www-klasse-epoxy-nl.png",
    icon: Zap
  },
  "flake-epoxy": {
    title: "Flake Epoxy",
    subtitle: "Decoratief & Extreem Slijtvast",
    description: "Een robuuste vloeroplossing met een speels karakter. Onze vlokkenvloeren zijn antislip, naadloos en bestand tegen de zwaarste belasting.",
    image: "https://i.ibb.co/p6pRwB7c/Epoxy-flake-coating-www-klasse-epoxy-nl.png",
    icon: Shield
  }
};

const cities = [
  "Alkmaar", "Almere", "Alphen aan den Rijn", "Amersfoort", "Amstelveen", 
  "Amsterdam", "Apeldoorn", "Arnhem", "Assen", "Bergen op Zoom", 
  "Breda", "Capelle aan den IJssel", "Delft", "Den Haag", "Deventer", 
  "Dordrecht", "Drachten", "Ede", "Eindhoven", "Emmen", 
  "Enschede", "Gouda", "Groningen", "Haarlem", "Haarlemmermeer", 
  "Harderwijk", "Heerlen", "Helmond", "Hengelo", "Hilversum", 
  "Hoofddorp", "Hoogeveen", "Katwijk", "Leeuwarden", "Leiden", 
  "Lelystad", "Middelburg", "Nieuwegein", "Nijmegen", "Oss", 
  "Purmerend", "Roosendaal", "Rotterdam", "'s-Hertogenbosch", "Schiedam", 
  "Sittard-Geleen", "Sneek", "Spijkenisse", "Tilburg", "Utrecht", 
  "Velsen", "Venlo", "Vlaardingen", "Vlissingen", "Westland", 
  "Woerden", "Zaandam", "Zaanstad", "Zeist", "Zoetermeer", 
  "Zwolle"
];

interface Props { slug?: string; }
export default function ServicePage({ slug = "epoxy-coating" }: Props) {
  const data = serviceData[slug as keyof typeof serviceData] || serviceData["epoxy-coating"];

  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-epoxy-black overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-epoxy-accent text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <data.icon className="w-3 h-3" />
              {data.subtitle}
            </motion.div>
            <h1 className="text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8">
              {data.title} <span className="text-epoxy-accent">Expertise.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              {data.description} Ontdek waarom Klasse Epoxy de nummer één keuze is voor {data.title.toLowerCase()} in Nederland.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="btn-dark">Vrijblijvende Offerte</a>
              <a href="#informatie" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                Lees Meer <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Trust />

        {/* SEO Content Section */}
        <section id="informatie" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              Alles wat u moet weten over {data.title}
            </h2>
            
            <div className="prose prose-lg max-w-none text-black/70 space-y-8 leading-relaxed">
              <p>
                Bij Klasse Epoxy begrijpen we dat de keuze voor een nieuwe vloer een belangrijke investering is. <strong>{data.title}</strong> is een van de meest 
                veelzijdige en duurzame oplossingen die momenteel op de markt zijn. Of het nu gaat om een particuliere woning, een commerciële ruimte of 
                een industriële omgeving, onze {data.title.toLowerCase()} biedt de perfecte balans tussen esthetiek en functionaliteit.
              </p>

              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">De Voordelen van {data.title}</h3>
              <p>
                Waarom kiezen zoveel mensen voor {data.title}? De redenen zijn uiteenlopend, maar de kern blijft hetzelfde: ongeëvenaarde kwaliteit. 
                Onze vloeren zijn volledig naadloos, wat betekent dat er geen kieren of voegen zijn waar vuil en bacteriën zich kunnen ophopen. 
                Dit maakt de vloer niet alleen hygiënisch, maar ook extreem onderhoudsvriendelijk. Een simpele dweilbeurt is vaak voldoende om de 
                vloer in topconditie te houden.
              </p>
              <p>
                Daarnaast is {data.title} vloeistofdicht en chemisch resistent. Dit is een cruciaal voordeel voor ruimtes zoals keukens, garages en 
                werkplaatsen. Gemorste vloeistoffen trekken niet in de vloer, waardoor vlekken tot het verleden behoren. Bovendien is de vloer 
                UV-bestendig, wat betekent dat de kleur die u vandaag kiest, over tien jaar nog steeds even levendig is.
              </p>

              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">Het Installatieproces van Klasse Epoxy</h3>
              <p>
                Het aanbrengen van {data.title} is een nauwkeurig proces dat vakmanschap vereist. Wij beginnen altijd met een grondige inspectie 
                van de ondervloer. Een goede hechting is immers de basis van een duurzame vloer. De ondervloer wordt geschuurd of gestraald om 
                een optimale textuur te creëren. Vervolgens brengen we een primerlaag aan die de vloer vloeistofdicht afsluit.
              </p>
              <p>
                Na de voorbereiding volgt de eigenlijke {data.title.toLowerCase()}. Afhankelijk van uw keuze (coating, metallic of flake) 
                worden de materialen met uiterste precisie aangebracht. Bij metallic epoxy gebruiken we artistieke technieken om diepte te creëren, 
                terwijl we bij flake epoxy de vloer gelijkmatig instrooien met kleurvlokken voor een decoratief effect. We sluiten af met een 
                hoogwaardige topcoating die de vloer beschermt tegen krassen en slijtage.
              </p>

              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">Onderhoudstips voor een Lange Levensduur</h3>
              <p>
                Hoewel onze vloeren extreem duurzaam zijn, helpt een goed onderhoud om de levensduur nog verder te verlengen. Wij adviseren om 
                zand en vuil regelmatig te verwijderen, omdat dit als schuurpapier kan werken. Gebruik bij het dweilen altijd een PH-neutraal 
                schoonmaakmiddel. Vermijd agressieve chemicaliën, hoewel de vloer hiertegen bestand is, kan het op de lange termijn de glans 
                van de topcoat beïnvloeden.
              </p>

              <h3 className="text-2xl font-bold text-black uppercase tracking-tight mt-12">Duurzaamheid en Milieu</h3>
              <p>
                Bij Klasse Epoxy staat duurzaamheid centraal. Onze harsen zijn emissiearm en bevatten geen schadelijke oplosmiddelen. Dit zorgt 
                voor een gezond binnenklimaat in uw woning of bedrijfspand. Bovendien gaat een {data.title.toLowerCase()} decennia mee, 
                waardoor de ecologische voetafdruk over de gehele levensduur zeer laag is in vergelijking met andere vloertypen.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links Section (City Pages) */}
        <section className="py-24 bg-gray-50 border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-black mb-12 uppercase tracking-tighter">Onze Werkgebieden voor {data.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {cities.map(city => (
                  <a
                    key={city}
                    href={`/${slug}-vloer-${city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                    className="bg-white p-4 rounded-xl border border-black/5 font-bold text-[10px] uppercase tracking-widest hover:border-epoxy-accent hover:text-epoxy-accent transition-all shadow-sm"
                  >
                    {data.title} {city}
                  </a>
                ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-black mb-12 uppercase tracking-tighter">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              {[
                { q: `Hoe lang gaat een ${data.title} mee?`, a: `Bij normaal gebruik en goed onderhoud gaat een ${data.title.toLowerCase()} van Klasse Epoxy minimaal 20 tot 30 jaar mee.` },
                { q: `Is de vloer geschikt voor vloerverwarming?`, a: `Absoluut. Epoxy is een uitstekende warmtegeleider, waardoor uw ruimte efficiënt en gelijkmatig wordt verwarmd.` },
                { q: `Hoe lang duurt de installatie?`, a: `Het volledige proces duurt gemiddeld 4 tot 5 dagen, inclusief de noodzakelijke droogtijden tussen de verschillende lagen.` },
                { q: `Is de vloer krasbestendig?`, a: `Onze vloeren zijn zeer hard en krasvast, maar niet krasvrij. Met de juiste topcoat en basisvloerbescherming (zoals viltjes onder meubels) blijft de vloer jarenlang als nieuw.` }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-black/5">
                  <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">{item.q}</h4>
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
              Kies voor de elite in {data.title}
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
              Sluit u aan bij honderden tevreden klanten. Ontvang vandaag nog een vrijblijvende offerte voor uw project.
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
