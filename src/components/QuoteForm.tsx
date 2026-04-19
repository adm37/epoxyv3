import { Send } from "lucide-react";

export default function QuoteForm() {
  return (
    <div className="glass-card-light p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/5">
      <form className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Naam *</label>
            <input required className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="Voornaam" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Achternaam *</label>
            <input required className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="Achternaam" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">E-mailadres *</label>
            <input required type="email" className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="naam@voorbeeld.nl" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Telefoonnummer *</label>
            <input required type="tel" className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="06 12345678" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Bedrijf (Optioneel)</label>
            <input className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="Bedrijfsnaam" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Website (Optioneel)</label>
            <input className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="www.voorbeeld.nl" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Adres *</label>
            <input required className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="Straat, nr, postcode, plaats" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Aantal m2 *</label>
            <input required type="number" className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black" placeholder="m2" />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 block">Soort Dienst *</label>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {["Epoxy coating", "Metallic Epoxy", "Flake Epoxy"].map((service) => (
              <label key={service} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer sr-only" name="service" value={service} />
                  <div className="w-5 h-5 border-2 border-black/10 rounded group-hover:border-epoxy-accent peer-checked:bg-epoxy-accent peer-checked:border-epoxy-accent transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                  </div>
                </div>
                <span className="text-xs font-bold text-epoxy-black/60 group-hover:text-epoxy-black transition-colors uppercase tracking-widest">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Aanvullende informatie *</label>
          <textarea required className="w-full bg-black/5 border-b border-black/10 py-4 px-2 outline-none focus:border-epoxy-accent transition-colors text-epoxy-black min-h-[120px]" placeholder="Vertel ons meer over uw project..." />
        </div>
        
        <button className="btn-dark w-full py-6 flex items-center justify-center gap-4 text-lg">
          Verstuur Aanvraag
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
