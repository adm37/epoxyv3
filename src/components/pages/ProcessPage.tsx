import Navbar from "@/components/Navbar";
import DetailedProcess from "@/components/DetailedProcess";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ProcessPage() {
  return (
    <div className="min-h-screen selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      <main className="pt-20">
        <DetailedProcess />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
