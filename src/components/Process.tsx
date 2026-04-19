import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Vrijblijvend Advies",
    description: "We bespreken uw wensen, de ondergrond en kiezen samen het perfecte epoxy design voor uw ruimte."
  },
  {
    number: "02",
    title: "Voorbereiding",
    description: "De ondergrond wordt stofvrij gemaakt en voorbehandeld voor een optimale hechting van de epoxyvloer."
  },
  {
    number: "03",
    title: "Vakkundige Applicatie",
    description: "Onze specialisten brengen de gietvloer naadloos aan met oog voor elk detail en de gewenste afwerking."
  },
  {
    number: "04",
    title: "Oplevering",
    description: "Na uitharding controleren we de vloer gezamenlijk. U ontvangt direct uw garantiecertificaat."
  }
];

export default function Process() {
  return (
    <section id="werkwijze" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="section-subtitle">Onze Werkwijze</span>
          <h2 className="section-title">VAN ONTWERP TOT <br /> <span className="opacity-20">REALISATIE.</span></h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
            >
              <div className="text-8xl font-display font-black text-epoxy-black/5 absolute -top-12 -left-4">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-epoxy-black mb-4 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-epoxy-black/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
