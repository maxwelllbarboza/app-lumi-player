import { Play, CreditCard, Tv } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521972002180";

const steps = [
  {
    icon: Play,
    title: "TESTE GRÁTIS",
    desc: "Primeiro disponibilizamos um teste grátis para que você conheça nosso produto e realmente comprove a qualidade do serviço.",
    step: "01",
  },
  {
    icon: CreditCard,
    title: "ESCOLHA SEU PLANO",
    desc: "Depois de testar, basta escolher o plano ideal para você: mensal, trimestral, semestral ou anual.",
    step: "02",
  },
  {
    icon: Tv,
    title: "APROVEITE",
    desc: "Após ativar seu acesso, é só aproveitar milhares de conteúdos disponíveis.",
    step: "03",
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Como <span className="gradient-text">funciona?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Simples, rápido e sem complicação.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div key={s.step} className="card-dark text-center group">
              <div className="text-5xl font-black gradient-text mb-4">{s.step}</div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-glow inline-block">
            SOLICITAR TESTE GRATUITO
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
