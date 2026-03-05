import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Gostei muito dos conteúdos e agora não quero parar de assistir. Suporte muito bom!",
    name: "Maria Ester",
    role: "Cliente",
  },
  {
    text: "Qualidade excelente, funciona muito bem. Com certeza continuarei assinando.",
    name: "Tiago Costa",
    role: "Cliente",
  },
];

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          O que nossos <span className="gradient-text">clientes dizem</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Avaliações reais de quem já usa.</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
