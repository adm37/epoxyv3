import { motion } from "motion/react";
import { Shield, Zap, Droplets, Sparkles } from "lucide-react";

const services = [
  {
    title: "Epoxy Coating",
    slug: "epoxy-coating",
    description: "Een strakke en duurzame afwerking voor uw woonkamer of kantoor. Onze epoxy coatings zijn naadloos, hygiënisch en perfect voor vloerverwarming.",
    icon: Sparkles,
    image: "/epoxy coating - klasse epoxy.png"
  },
  {
    title: "Metallic Epoxy",
    slug: "metallic-epoxy",
    description: "Exclusieve designvloeren met unieke diepte-effecten die doen denken aan marmer of vloeibaar metaal. De perfecte balans tussen kunst en functionaliteit.",
    icon: Zap,
    image: "/metallic epoxy - klasse epoxy.png",
    popular: true
  },
  {
    title: "Flake Epoxy",
    slug: "flake-epoxy",
    description: "Decoratieve en extreem slijtvaste vloeren ingestrooid met kleurvlokken. Ideaal voor zowel design interieurs als intensief gebruikte ruimtes.",
    icon: Shield,
    image: "/flake epoxy - klasse epoxy.png"
  }
];

export default function Services() {
  return (
    <section id="diensten" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 max-w-3xl">
          <div>
            <span className="section-subtitle">Waarom Klasse Epoxy?</span>
            <h2 className="section-title mb-8">KWALITEIT DIE <br /> <span className="opacity-20">BLIJFT LIGGEN.</span></h2>
            <p className="text-epoxy-black/60 text-lg leading-relaxed mb-8">
              Wij zijn niet zomaar vloerenleggers. Wij zijn ambachtslieden die gespecialiseerd zijn in het creëren van 
              <strong> naadloze meesterwerken</strong>. Onze epoxyvloeren zijn ontworpen om een leven lang mee te gaan, 
              met een focus op zowel esthetiek als extreme duurzaamheid.
            </p>
            <ul className="space-y-4">
              {[
                "100% Vloeistofdicht & Hygiënisch",
                "Naadloze afwerking van wand tot wand",
                "UV-bestendig & Kleurvast",
                "Eenvoudig in onderhoud"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-epoxy-black">
                  <div className="w-1.5 h-1.5 bg-epoxy-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <span className="section-subtitle">Onze Expertise</span>
          <h2 className="section-title">EPOXY VLOEREN VOOR <br /> <span className="opacity-20">ELKE RUIMTE.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden glass-card-light p-10 hover:border-epoxy-accent/50 transition-all duration-500"
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-epoxy-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-bl-xl z-20">
                  Populair
                </div>
              )}
              <h3 className="text-3xl font-display font-bold text-epoxy-black mb-6 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-epoxy-black/60 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <a href={`/${service.slug}/`} className="text-[10px] font-bold uppercase tracking-widest text-epoxy-black border-b border-epoxy-black/20 pb-1 hover:border-epoxy-accent transition-colors">
                Ontdek Meer
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
