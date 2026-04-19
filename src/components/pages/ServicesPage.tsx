import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const allServices = [
  {
    title: "Epoxy Coating",
    slug: "epoxy-coating",
    description: "Een luxe, naadloze afwerking voor woningen en moderne interieurs. Volledig vloeistofdicht en perfect voor vloerverwarming.",
    image: "https://i.ibb.co/7tCK67SP/19c0692b-773c-47b8-9586-aa73bb06891d.png",
    popular: true
  },
  {
    title: "Metallic Epoxy",
    slug: "metallic-epoxy",
    description: "Exclusieve designvloeren met unieke diepte-effecten die doen denken aan marmer of vloeibaar metaal. Elke vloer is een uniek kunstwerk.",
    image: "https://i.ibb.co/5hXQHXQF/65a662fe-2c67-43a2-b2fc-10886c1211f8.png",
    popular: true
  },
  {
    title: "Flake Epoxy",
    slug: "flake-epoxy",
    description: "Decoratieve vlokkenvloeren die extreem slijtvast en antislip zijn. Ideaal voor showrooms, winkels en garages.",
    image: "https://i.ibb.co/4wXWTCnJ/ccda1e1d-cdc0-482e-91ca-ddac2648669e.png"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-epoxy-black overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://i.ibb.co/KxK89vjx/Epoxy-vloer-www-klasse-epoxy-nl.png" 
              alt="Services Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-epoxy-accent text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <Sparkles className="w-3 h-3" />
              Onze Expertise
            </motion.div>
            <h1 className="text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8 leading-tight">
              ONZE <br /><span className="opacity-40">DIENSTEN.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Van luxe designvloeren voor uw woning tot zwaar belastbare industriële coatings. 
              Ontdek de perfecte epoxy oplossing voor elk type ruimte.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {allServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a href={`/${service.slug}`} className="block h-full border-b border-black/10 pb-12 hover:border-epoxy-accent transition-colors">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {service.popular && (
                        <div className="absolute top-6 right-6 bg-epoxy-accent text-epoxy-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                          Populair
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-display font-black text-epoxy-black mb-4 uppercase tracking-tighter group-hover:text-epoxy-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-epoxy-black/60 leading-relaxed mb-6 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-epoxy-black">
                      Lees Meer <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
