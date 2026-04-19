import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-epoxy-accent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-display font-black text-epoxy-black leading-none mb-4 uppercase tracking-tighter">
            KLAAR VOOR EEN <br /> NIEUWE VLOER?
          </h2>
          <p className="text-epoxy-black/60 font-bold uppercase tracking-widest text-sm">
            Vraag vandaag nog een vrijblijvende offerte aan.
          </p>
        </div>
        <div>
          <a
            href="/offerte/"
            className="bg-epoxy-black text-white px-12 py-6 font-black uppercase tracking-tighter text-xl flex items-center gap-4 hover:bg-white hover:text-black transition-colors"
          >
            START NU
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
