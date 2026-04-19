import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">
              Privacy <span className="text-epoxy-accent">Beleid</span>
            </h1>
            <p className="text-black/40 font-bold uppercase tracking-widest text-xs">
              Laatst bijgewerkt: 13 april 2026
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none text-black/70 space-y-12 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">1. Inleiding</h2>
              <p>
                Klasse Epoxy respecteert uw privacy en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. In dit privacybeleid leggen we uit welke gegevens we verzamelen, waarom we dat doen en hoe we hiermee omgaan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">2. Gegevens die wij verzamelen</h2>
              <p>
                Wanneer u gebruik maakt van onze diensten of contact met ons opneemt via de website, kunnen wij de volgende gegevens verzamelen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Naam en contactgegevens (zoals e-mailadres en telefoonnummer)</li>
                <li>Adresgegevens (voor het uitvoeren van projecten en offertes)</li>
                <li>Informatie over uw vloerproject en specifieke wensen</li>
                <li>IP-adres en surfgedrag op onze website (geanonimiseerd via cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">3. Doeleinden van gegevensverwerking</h2>
              <p>
                Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Het opstellen en versturen van vrijblijvende offertes</li>
                <li>Het uitvoeren van de overeengekomen werkzaamheden</li>
                <li>Om contact met u op te nemen naar aanleiding van uw vragen</li>
                <li>Het verbeteren van onze website en dienstverlening</li>
                <li>Voldoen aan wettelijke verplichtingen (zoals belastingwetgeving)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">4. Bewaartermijn</h2>
              <p>
                Klasse Epoxy bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Indien er geen overeenkomst tot stand komt, worden uw gegevens na 12 maanden verwijderd, tenzij er een wettelijke bewaarplicht geldt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">5. Delen met derden</h2>
              <p>
                Wij verkopen uw gegevens niet aan derden. Wij delen uw gegevens uitsluitend met derden als dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Denk hierbij aan onderaannemers of leveranciers die betrokken zijn bij uw project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">6. Cookies</h2>
              <p>
                Onze website maakt gebruik van functionele en analytische cookies om de gebruikerservaring te verbeteren. Analytische cookies worden geanonimiseerd gebruikt via Google Analytics, waardoor uw privacy gewaarborgd blijft.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">7. Uw rechten</h2>
              <p>
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door Klasse Epoxy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">8. Beveiliging</h2>
              <p>
                Wij nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Onze website is beveiligd met een SSL-certificaat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">9. Contact</h2>
              <p>
                Heeft u vragen over ons privacybeleid? Neem dan contact met ons op via info@klasseepoxy.nl.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
