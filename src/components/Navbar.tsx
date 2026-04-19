import { motion } from "motion/react";
import { Menu, X, PaintRoller } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten" },
    { name: "Werkwijze", href: "/werkwijze" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <PaintRoller className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter text-white">
              KLASSE<span className="text-epoxy-accent"> EPOXY</span>
            </span>
          </motion.div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-white/70 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/offerte"
            className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-epoxy-accent transition-colors"
          >
            Offerte
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-white/10 px-6 py-10 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-white uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/offerte"
            onClick={() => setIsOpen(false)}
            className="bg-white text-black w-full py-4 font-bold uppercase tracking-tighter text-center"
          >
            Offerte Aanvragen
          </a>
        </motion.div>
      )}
    </nav>
  );
}
