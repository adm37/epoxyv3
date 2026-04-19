import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      <main className="pt-20">
        <Portfolio />
        
        <section className="py-24 bg-epoxy-black text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-epoxy-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Uniek Vakmanschap</span>
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase leading-none mb-8">
                  ELKE VLOER EEN <br /> <span className="text-epoxy-accent">MEESTERWERK.</span>
                </h2>
              </div>
              <div className="space-y-6 text-white/60 text-sm leading-relaxed uppercase tracking-wider font-medium">
                <p>
                  Bij Klasse Epoxy beschouwen we elke metallic epoxyvloer als een uniek kunstwerk. Het is belangrijk om te weten dat geen twee vloeren exact hetzelfde zijn.
                </p>
                <p>
                  Het uiteindelijke design wordt gevormd door de interactie tussen de pigmenten, de vloeiing van de hars en de handmatige technieken van onze applicateurs tijdens het drogingsproces.
                </p>
                <p>
                  Factoren zoals temperatuur, luchtvochtigheid en de specifieke bewegingen van de spatel zorgen voor een organisch patroon dat nooit 100% gereproduceerd kan worden. Dit garandeert u een exclusieve vloer die nergens anders ter wereld identiek bestaat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
