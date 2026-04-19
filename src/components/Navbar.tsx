import { Menu, X, PaintRoller } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten/" },
    { name: "Werkwijze", href: "/werkwijze/" },
    { name: "Portfolio", href: "/portfolio/" },
    { name: "FAQ", href: "/faq/" },
    { name: "Contact", href: "/contact/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <PaintRoller className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter text-white">
              KLASSE<span className="text-epoxy-accent"> EPOXY</span>
            </span>
          </div>
        </a>

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
            href="/offerte/"
            className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-epoxy-accent transition-colors"
          >
            Offerte
          </a>
        </div>

        <details className="group md:hidden relative">
          <summary className="list-none cursor-pointer text-white">
            <span className="group-open:hidden inline-flex"><Menu /></span>
            <span className="hidden group-open:inline-flex"><X /></span>
          </summary>

          <div className="absolute right-0 top-[calc(100%+1rem)] w-[min(22rem,calc(100vw-3rem))] bg-black border border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl shadow-black/40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-white uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/offerte/"
              className="bg-white text-black w-full py-4 font-bold uppercase tracking-tighter text-center"
            >
              Offerte Aanvragen
            </a>
          </div>
        </details>
      </div>
    </nav>
  );
}
