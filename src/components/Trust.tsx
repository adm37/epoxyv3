import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Award, Star } from "lucide-react";

export default function Trust() {
  const items = [
    { icon: ShieldCheck, text: "VCA Gecertificeerd" },
    { icon: Award, text: "Meesterlijk Vakmanschap" },
    { icon: CheckCircle2, text: "Hoogste Kwaliteit Epoxy" },
    { icon: Star, text: "5-Sterren Service" },
  ];

  return (
    <div className="bg-epoxy-black py-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-epoxy-accent"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
