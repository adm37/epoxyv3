import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import QuoteForm from "./QuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-epoxy-accent/5 blur-[150px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="section-subtitle">Contact</span>
            <h2 className="section-title mb-12">OFFERTE <br /> <span className="opacity-20">AANVRAGEN.</span></h2>
            
            <p className="text-epoxy-black/60 text-lg mb-12 max-w-md">
              Wilt u meer weten over de <strong>epoxyvloer prijs</strong> of een <strong>design gietvloer</strong> laten leggen? 
              Neem contact op voor een vrijblijvend adviesgesprek.
            </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full glass-card-light flex items-center justify-center text-epoxy-black shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Bel ons</div>
                    <div className="text-xl font-display font-bold text-epoxy-black">0752340037</div>
                  </div>
                </div>
                
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full glass-card-light flex items-center justify-center text-epoxy-black shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Email ons</div>
                    <div className="text-xl font-display font-bold text-epoxy-black">info@klasseepoxy.nl</div>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full glass-card-light flex items-center justify-center text-epoxy-black shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Bezoek ons</div>
                    <div className="text-xl font-display font-bold text-epoxy-black">Heiligeweg 105B, Krommenie</div>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
        </div>
      </div>
    </section>
  );
}
