import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">
              Algemene <span className="text-epoxy-accent">Voorwaarden</span>
            </h1>
            <p className="text-black/40 font-bold uppercase tracking-widest text-xs">
              Laatst bijgewerkt: 11 april 2026
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none text-black/70 space-y-12 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">1. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van Klasse Epoxy, 
                gevestigd te Amsterdam, hierna te noemen "Opdrachtnemer". Door het accepteren van een offerte of het 
                verstrekken van een opdracht, verklaart de klant (hierna: "Opdrachtgever") akkoord te gaan met deze voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">2. Offertes en Totstandkoming Overeenkomst</h2>
              <p>
                Alle offertes van Opdrachtnemer zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Een overeenkomst 
                komt pas tot stand na schriftelijke bevestiging door Opdrachtnemer of zodra Opdrachtnemer is begonnen met 
                de uitvoering van de werkzaamheden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">3. Voorbereiding en Ondervloer</h2>
              <p>
                De Opdrachtgever is verantwoordelijk voor een geschikte ondervloer. De ondervloer dient droog, vormvast, 
                vrij van vet, vuil en losse delen te zijn. Opdrachtnemer is niet aansprakelijk voor gebreken die voortvloeien 
                uit een gebrekkige ondervloer, optrekkend vocht of werking van de constructie. Indien de ondervloer bij 
                aanvang niet voldoet, heeft Opdrachtnemer het recht de werkzaamheden op te schorten op kosten van Opdrachtgever.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">4. Uitvoering en Omgevingsfactoren</h2>
              <p>
                Tijdens de uitvoering van de werkzaamheden dient de ruimte stofvrij, winddicht en op een constante temperatuur 
                tussen de 15°C en 20°C te zijn. Opdrachtgever dient zorg te dragen dat er geen andere personen in de ruimte 
                aanwezig zijn tijdens het aanbrengen en drogen van de vloer. Schade door stof, insecten of onbevoegde betreding 
                valt volledig onder het risico van Opdrachtgever.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">5. Kleur en Esthetiek</h2>
              <p>
                Geringe kleurafwijkingen ten opzichte van monsters of eerdere leveringen zijn technisch onvermijdbaar en 
                geven geen recht op reclamatie. Bij metallic epoxyvloeren is het eindresultaat afhankelijk van de artistieke 
                vrijheid van de applicateur; patronen kunnen nooit exact worden gereproduceerd.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">6. Betaling</h2>
              <p>
                Tenzij anders overeengekomen, hanteert Opdrachtnemer de volgende betalingscondities: 50% bij opdrachtverstrekking 
                en 50% direct na oplevering. Bij overschrijding van de betalingstermijn is Opdrachtgever van rechtswege in verzuim 
                en is een vertragingsrente van 1% per maand verschuldigd, evenals alle buitengerechtelijke incassokosten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">7. Garantie en Aansprakelijkheid</h2>
              <p>
                Opdrachtnemer verleent garantie op de hechting van de vloer voor een periode van 5 jaar, mits de onderhoudsvoorschriften 
                strikt zijn opgevolgd. De aansprakelijkheid van Opdrachtnemer is te allen tijde beperkt tot het bedrag dat door de 
                aansprakelijkheidsverzekering wordt uitgekeerd, dan wel tot maximaal het factuurbedrag van de betreffende opdracht. 
                Gevolgschade, zoals gederfde winst of stagnatieschade, is uitdrukkelijk uitgesloten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">8. Annulering</h2>
              <p>
                Bij annulering door Opdrachtgever binnen 14 dagen voor aanvang van de werkzaamheden is Opdrachtgever een 
                schadeloosstelling verschuldigd van 30% van de totale aanneemsom. Bij annulering binnen 48 uur is dit 75%.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">9. Toepasselijk Recht</h2>
              <p>
                Op alle rechtsbetrekkingen tussen Opdrachtnemer en Opdrachtgever is uitsluitend het Nederlands recht van toepassing. 
                Geschillen zullen worden voorgelegd aan de bevoegde rechter te Amsterdam.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
