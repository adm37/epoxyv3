import Navbar from "@/components/Navbar";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ContactPage() {
  return (
    <div className="min-h-screen selection:bg-epoxy-accent selection:text-epoxy-black bg-white">
      <Navbar />
      
      <main className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="section-subtitle">Contact</span>
            <h1 className="section-title mb-6">NEEM CONTACT <br /> <span className="opacity-20">MET ONS OP.</span></h1>
            <p className="text-epoxy-black/60 text-lg max-w-2xl mx-auto">
              Heeft u vragen over onze diensten of wilt u advies over uw vloerproject? 
              Ons team staat klaar om u te helpen.
            </p>
          </div>

          <ContactInfo />

          <div className="mt-20 w-full h-[450px] rounded-3xl overflow-hidden glass-card-light border border-black/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.859664426543!2d4.7675971!3d52.4997086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5f02c5f7c5f7d%3A0x7d7d7d7d7d7d7d7d!2sHeiligeweg%20105B%2C%201561%20DG%20Krommenie!5e0!3m2!1snl!2snl!4v1712850000000!5m2!1snl!2snl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klasse Epoxy Locatie"
            ></iframe>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
