import { Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521972002180";

const benefits = [
  "Qualidade SD / HD / FHD / 4K",
  "Filmes e séries",
  "Canais variados",
  "Servidores de alta performance",
];

const plans = [
  { name: "Mensal", duration: "1 mês de acesso", price: "25", highlight: false },
  { name: "Trimestral", duration: "3 meses de acesso", price: "59", highlight: true },
  { name: "Semestral", duration: "6 meses de acesso", price: "105", highlight: false },
  { name: "Anual", duration: "12 meses de acesso", price: "200", highlight: false },
];

const Planos = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Escolha seu <span className="gradient-text">Plano</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Pacote completo com tudo incluso.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-dark flex flex-col relative ${
                plan.highlight ? "border-primary animate-glow-pulse" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  MAIS POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">Plano {plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.duration}</p>
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-4xl font-black gradient-text">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow block text-center text-sm">
                  ASSINAR
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow-outline block text-center text-sm">
                  TESTE GRÁTIS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;
