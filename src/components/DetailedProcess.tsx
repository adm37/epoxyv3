import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const generalSteps = [
  {
    number: "01",
    title: "Vrijblijvende Inspectie",
    description: "Elk project begint met een grondige inspectie van de ondergrond. We meten het vochtgehalte en beoordelen de staat van de vloer om de juiste voorbehandeling te bepalen."
  },
  {
    number: "02",
    title: "Mechanische Voorbereiding",
    description: "Voor een optimale hechting wordt de vloer stofvrij geschuurd of gekogeld. Eventuele scheuren of gaten worden vakkundig gerepareerd met epoxy-mortel."
  },
  {
    number: "03",
    title: "Priming & Hechting",
    description: "We brengen een hoogwaardige epoxy-primer aan die diep in de poriën van de ondergrond dringt. Dit vormt de essentiële brug tussen de ondervloer en de nieuwe epoxyvloer."
  },
  {
    number: "04",
    title: "De Gietlaag",
    description: "De kern van het proces. Afhankelijk van de gekozen dienst brengen we de epoxy aan. Dit gebeurt handmatig met specialistisch gereedschap voor een naadloos resultaat."
  },
  {
    number: "05",
    title: "Afwerking & Bescherming",
    description: "De vloer wordt afgewerkt met een transparante of gekleurde topcoating. Dit beschermt tegen krassen, UV-straling en chemicaliën."
  }
];

const serviceDetails = [
  {
    title: "Epoxy Coating",
    steps: [
      "Schuren van de betonvloer",
      "Aanbrengen van schraaplaag (indien nodig)",
      "Eerste laag epoxy coating",
      "Tweede laag epoxy coating voor extra dikte",
      "Optionele antislip afwerking"
    ]
  },
  {
    title: "Metallic Epoxy",
    steps: [
      "Diamantschuren van de ondergrond",
      "Primerlaag (vaak zwart voor diepte)",
      "Metallic basislaag met pigmenten",
      "Handmatig creëren van marmer-effecten",
      "Hoogglans of zijdemat topcoat"
    ]
  },
  {
    title: "Flake Epoxy",
    steps: [
      "Mechanische voorbereiding",
      "Gekleurde basislaag epoxy",
      "Volledig instrooien met kleurvlokken",
      "Verwijderen van overtollige vlokken",
      "Twee lagen transparante PU-topcoat"
    ]
  }
];

export default function DetailedProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* General Timeline */}
        <div className="mb-32">
          <div className="max-w-3xl mb-16">
            <span className="section-subtitle">Stappenplan</span>
            <h1 className="section-title mb-8">HOE WIJ UW VLOER <br /> <span className="opacity-20">TRANSFORMEREN.</span></h1>
            <p className="text-epoxy-black/60 text-lg">
              Een perfecte epoxyvloer valt of staat bij de voorbereiding. Wij hanteren een strikt proces om de hoogste kwaliteit en duurzaamheid te garanderen.
            </p>
          </div>

          <div className="space-y-12">
            {generalSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-8 md:gap-12 items-start group"
              >
                <div className="text-4xl md:text-6xl font-display font-black text-epoxy-black/10 group-hover:text-epoxy-accent/20 transition-colors shrink-0 pt-2">
                  {step.number}
                </div>
                <div className="pt-4 md:pt-8 border-t border-black/5 w-full">
                  <h3 className="text-2xl font-display font-bold text-epoxy-black mb-4 uppercase tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-epoxy-black/60 text-base max-w-2xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Specifics */}
        <div className="grid lg:grid-cols-3 gap-12">
          {serviceDetails.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card-light p-10 rounded-3xl border border-black/5"
            >
              <h3 className="text-2xl font-display font-bold text-epoxy-black mb-8 uppercase tracking-tighter border-b border-black/5 pb-4">
                {service.title} <br /> <span className="text-sm opacity-40">Proces Details</span>
              </h3>
              <ul className="space-y-6">
                {service.steps.map((step, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-epoxy-accent/10 flex items-center justify-center text-epoxy-accent shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold text-epoxy-black/70 leading-snug">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Extra Info */}
        <div className="mt-32 glass-card-light p-12 rounded-3xl border border-black/5 bg-epoxy-accent/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-epoxy-black mb-6 uppercase tracking-tighter">
                BELANGRIJK OM TE WETEN
              </h3>
              <div className="space-y-6 text-epoxy-black/60">
                <p>
                  <strong>Droogtijd:</strong> Na de laatste laag is de vloer na 24 uur beloopbaar. Voor zware belasting en volledige chemische uitharding adviseren wij 7 dagen te wachten.
                </p>
                <p>
                  <strong>Vloerverwarming:</strong> Onze epoxyvloeren zijn uitstekend te combineren met vloerverwarming. We adviseren de verwarming 48 uur voor aanvang uit te zetten.
                </p>
                <p>
                  <strong>Onderhoud:</strong> Een epoxyvloer is zeer onderhoudsvriendelijk. Regelmatig stofzuigen en dweilen met een PH-neutraal schoonmaakmiddel is voldoende.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5">
              <div className="text-epoxy-accent font-black text-5xl mb-4">24u</div>
              <div className="text-epoxy-black font-bold uppercase tracking-widest text-sm mb-6">Beloopbaar na applicatie</div>
              <div className="h-px bg-black/5 mb-6" />
              <div className="text-epoxy-accent font-black text-5xl mb-4">100%</div>
              <div className="text-epoxy-black font-bold uppercase tracking-widest text-sm">Vloeistofdicht resultaat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
