import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title">VEELGESTELDE <br /> <span className="opacity-20">VRAGEN.</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-b border-black/10 py-2">
              <summary className="list-none w-full py-6 flex justify-between items-center text-left cursor-pointer">
                <span className="text-xl font-display font-bold text-epoxy-black uppercase tracking-tighter group-hover:text-epoxy-accent transition-colors pr-6">
                  {faq.question}
                </span>
                <span className="shrink-0">
                  <Plus className="w-5 h-5 text-black/20 group-open:hidden group-hover:text-epoxy-accent transition-colors" />
                  <Minus className="hidden w-5 h-5 text-epoxy-accent group-open:block" />
                </span>
              </summary>
              <div className="pb-8 text-epoxy-black/60 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
