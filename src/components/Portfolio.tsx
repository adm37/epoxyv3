import { motion } from "motion/react";

const projects = [
  { title: "Garage", category: "Amsterdam", image: "https://i.ibb.co/rGrx7hpY/portfolio-metallic-epoxy-vloer-2-www-klasse-epoxy-nl.png" },
  { title: "Auto Detailing", category: "Beverwijk", image: "https://i.ibb.co/RpBtHYD2/portfolio-metallic-epoxy-vloer-www-klasse-epoxy-nl.png" },
  { title: "Villa", category: "Bussum", image: "https://i.ibb.co/YF3nxSg3/metallic-epoxy-3-www-klasse-epoxy-nl.png" },
  { title: "Garage", category: "Eindhoven", image: "https://i.ibb.co/WW3WkxWy/metallic-epoxy-4-www-klasse-epoxy-nl.png" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">NAADLOZE <br/> PROJECTEN.</h2>
          </div>
          <p className="text-epoxy-black/30 text-sm max-w-xs uppercase tracking-widest font-bold leading-relaxed">
            Bekijk onze gerealiseerde <strong>epoxy vloer design</strong> projecten en laat u inspireren door onze <strong>gietvloeren</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={`${project.title}-${project.category}-${i}`}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer border border-black/5"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="text-epoxy-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-4xl font-display font-bold text-epoxy-black tracking-tighter mb-2">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
