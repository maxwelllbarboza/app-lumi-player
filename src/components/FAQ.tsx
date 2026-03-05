import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "POSSO TESTAR ANTES DE ASSINAR?",
    a: "Sim. Disponibilizamos um teste gratuito para que você possa conhecer o serviço e testar na sua internet.",
  },
  {
    q: "COMO FUNCIONA O PAGAMENTO?",
    a: "Trabalhamos com planos mensais, trimestrais, semestrais e anuais.",
  },
  {
    q: "POSSO CANCELAR?",
    a: "Sim. Não existe fidelidade.",
  },
  {
    q: "POSSO USAR EM MAIS DE UM DISPOSITIVO?",
    a: "Sim. Você pode acessar em vários dispositivos, porém assistir simultaneamente depende da quantidade de pontos adquiridos.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Tire suas dúvidas.</p>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="card-dark border px-6">
              <AccordionTrigger className="text-left font-bold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
