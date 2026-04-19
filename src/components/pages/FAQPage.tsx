import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function FAQPage() {
  return (
    <div className="min-h-screen selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      <main className="pt-20">
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
