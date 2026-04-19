import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-12 md:max-w-md"
        >
          <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-2xl shadow-black/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-epoxy-accent/10 flex items-center justify-center text-epoxy-accent shrink-0">
                <Cookie className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-epoxy-black uppercase tracking-tight">
                    Cookie Instellingen
                  </h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-epoxy-black/20 hover:text-epoxy-black transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-epoxy-black/60 leading-relaxed mb-6">
                  Wij gebruiken cookies om uw ervaring op onze website te verbeteren en het verkeer te analyseren. 
                  Door op "Accepteren" te klikken, gaat u akkoord met ons gebruik van cookies. Lees meer in onze{" "}
                  <a href="/privacy/" className="text-epoxy-black font-bold underline decoration-epoxy-accent underline-offset-4">
                    Privacyverklaring
                  </a>.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-epoxy-black text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-epoxy-accent hover:text-epoxy-black transition-all"
                  >
                    Accepteren
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 rounded-xl border border-black/5 font-bold text-xs uppercase tracking-widest text-epoxy-black/40 hover:text-epoxy-black transition-all"
                  >
                    Weigeren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
