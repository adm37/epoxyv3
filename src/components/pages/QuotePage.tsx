import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function QuotePage() {
  return (
    <div className="min-h-screen selection:bg-epoxy-accent selection:text-epoxy-black bg-white">
      <Navbar />
      
      <main className="pt-32 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle">Offerte</span>
            <h1 className="section-title mb-6">VRAAG UW <br /> <span className="opacity-20">OFFERTE AAN.</span></h1>
            <p className="text-epoxy-black/60 text-lg max-w-2xl mx-auto">
              Vul het onderstaande formulier in en ontvang binnen 24 uur een vrijblijvende prijsopgave voor uw project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "Binnen 24u reactie",
              "Gratis advies",
              "Vrijblijvende offerte",
              "Vakmanschap"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 justify-center py-3 px-4 glass-card-light rounded-full">
                <CheckCircle2 className="w-4 h-4 text-epoxy-accent" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-epoxy-black/60">{benefit}</span>
              </div>
            ))}
          </div>

          <QuoteForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
