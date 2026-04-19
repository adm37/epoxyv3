import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Wat is de gemiddelde epoxyvloer prijs per m2?",
    answer: "De prijs is afhankelijk van de oppervlakte, de staat van de ondergrond en het gekozen design. Gemiddeld varieert dit tussen de €60 en €120 per m2. Neem contact op voor een exacte offerte."
  },
  {
    question: "Wat is het verschil tussen metallic epoxy en flake epoxy?",
    answer: "Metallic epoxy gebruikt pigmenten die een marmerachtig, glanzend effect creëren met veel diepte. Flake epoxy bevat gekleurde vlokken die in de natte laag worden gestrooid, wat zorgt voor een gespikkeld uiterlijk en extra grip. Metallic is vaak artistieker, terwijl Flake vaker industrieel of in garages wordt gebruikt."
  },
  {
    question: "Hoe lang duurt het leggen van een gietvloer?",
    answer: "Het proces duurt gemiddeld 4 tot 5 dagen, inclusief voorbereiding, applicatie en droogtijd. Na 24-48 uur is de vloer beloopbaar, maar we raden aan om 7 dagen te wachten voordat de vloer zwaar belast wordt."
  },
  {
    question: "Is een metallic epoxyvloer krasbestendig?",
    answer: "Epoxy is van nature zeer hard en duurzaam. Hoewel het krasbestendig is, is het niet krasvast. We werken onze metallic vloeren vaak af met een hoogwaardige topcoating om de krasbestendigheid te maximaliseren en de glans te behouden."
  },
  {
    question: "Is een epoxyvloer geschikt voor vloerverwarming?",
    answer: "Ja, onze gietvloeren geleiden warmte uitstekend en zijn elastisch genoeg om de temperatuurverschillen op te vangen zonder te scheuren. Het rendement van uw vloerverwarming blijft optimaal."
  },
  {
    question: "Kan een flake epoxyvloer buiten worden toegepast?",
    answer: "Standaard epoxy is niet UV-bestendig en kan vergelen in de zon. Voor buitentoepassingen zoals balkons of terrassen gebruiken we speciale UV-bestendige harsen (zoals polyaspartic) in combinatie met flakes om een duurzaam resultaat te garanderen."
  },
  {
    question: "Hoe onderhoud ik mijn nieuwe gietvloer?",
    answer: "Een epoxyvloer is naadloos en vloeistofdicht, wat onderhoud zeer eenvoudig maakt. Regelmatig stofzuigen en dweilen met een mild, PH-neutraal schoonmaakmiddel is voldoende. Vermijd agressieve chemicaliën of schuursponsjes."
  },
  {
    question: "Kan ik een epoxyvloer over een bestaande tegelvloer laten leggen?",
    answer: "Ja, dat is vaak mogelijk mits de tegels goed vastliggen. We schuren de tegels op en brengen een speciale primer aan om een perfecte hechting te garanderen. Dit bespaart u de kosten en overlast van het slopen van de oude vloer."
  },
  {
    question: "Hoe glad is een epoxyvloer?",
    answer: "Een standaard epoxyvloer kan glad zijn als deze nat is. Bij flake vloeren zorgen de vlokken voor een natuurlijke antislip. Voor metallic vloeren kunnen we een onzichtbare antislip-korrel toevoegen aan de toplaag voor extra veiligheid zonder het design aan te tasten."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title">VEELGESTELDE <br /> <span className="opacity-20">VRAGEN.</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-xl font-display font-bold text-epoxy-black uppercase tracking-tighter group-hover:text-epoxy-accent transition-colors">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-epoxy-accent" />
                ) : (
                  <Plus className="w-5 h-5 text-black/20 group-hover:text-epoxy-accent transition-colors" />
                )}
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="pb-8 text-epoxy-black/60 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
