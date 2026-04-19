import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Bel ons",
      value: "+31 (0) 20 123 4567",
      description: "Maandag t/m Vrijdag, 09:00 - 18:00"
    },
    {
      icon: Mail,
      label: "Email ons",
      value: "info@klasseepoxy.nl",
      description: "We reageren binnen 24 uur"
    },
    {
      icon: MapPin,
      label: "Bezoek ons",
      value: "Heiligeweg 105B, Krommenie",
      description: "Alleen op afspraak"
    },
    {
      icon: Clock,
      label: "Openingstijden",
      value: "09:00 - 18:00",
      description: "Zaterdag & Zondag gesloten"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {contactDetails.map((detail) => (
        <div key={detail.label} className="glass-card-light p-8 rounded-3xl flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-epoxy-accent/10 flex items-center justify-center text-epoxy-black shrink-0">
            <detail.icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">{detail.label}</div>
            <div className="text-xl font-display font-bold text-epoxy-black mb-1">{detail.value}</div>
            <div className="text-xs text-epoxy-black/40 font-bold uppercase tracking-wider">{detail.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
