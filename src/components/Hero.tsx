import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/UFJjKL6Eduo?autoplay=1&mute=1&loop=1&playlist=UFJjKL6Eduo&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
          title="Epoxy Floor Video Background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="video-overlay" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-[140px] leading-[0.85] mb-10 text-white text-glow"
        >
          EPOXY <br />
          <span className="text-epoxy-accent">VLOER.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light tracking-wide"
        >
          De specialist in naadloze <strong>epoxy gietvloeren</strong> en exclusief <strong>epoxy vloer design</strong>. 
          Duurzaamheid ontmoet moderne esthetiek in elke laag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a href="/portfolio" className="btn-dark flex items-center gap-3">
            Bekijk Onze Projecten
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="/offerte" className="btn-dark flex items-center gap-3">
            Offerte Aanvragen
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
