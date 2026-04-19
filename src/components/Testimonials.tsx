import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Mark de Vries",
    date: "2 weken geleden",
    rating: 5,
    text: "Klasse Epoxy begrijpt wat architecten zoeken. De afwerking van hun design gietvloeren is van een ongekend niveau. Zeer aanbevolen voor high-end projecten.",
    avatar: "https://i.pravatar.cc/150?u=mark"
  },
  {
    name: "Sarah Janssen",
    date: "1 maand geleden",
    rating: 5,
    text: "Onze nieuwe woonkamer gietvloer is prachtig. Naadloos, makkelijk schoon te houden en het team werkte ontzettend netjes. De communicatie was ook top!",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Thomas Bakker",
    date: "3 maanden geleden",
    rating: 5,
    text: "De industriële epoxyvloer in mijn werkplaats is onverwoestbaar. Precies wat we nodig hadden voor zware belasting. Snelle service en goede prijs.",
    avatar: "https://i.pravatar.cc/150?u=thomas"
  }
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-32 bg-epoxy-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div>
            <span className="text-epoxy-accent text-xs font-bold uppercase tracking-[0.4em] block mb-4">Google Reviews</span>
            <h2 className="text-5xl md:text-8xl text-white uppercase tracking-tighter">KLANTEN <br /> <span className="opacity-20">ERVARINGEN.</span></h2>
          </div>
          
          <div className="glass-card p-8 rounded-2xl flex items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-display font-black text-white">4.9</div>
              <div className="flex gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-epoxy-accent text-epoxy-accent" />
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">84 Google Reviews</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-epoxy-accent transition-colors">
              Schrijf Review <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl relative group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-white font-bold text-sm uppercase tracking-widest">{review.name}</div>
                    <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{review.date}</div>
                  </div>
                </div>
                <GoogleLogo />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-epoxy-accent text-epoxy-accent" />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-epoxy-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Bekijk op Google <ExternalLink className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
