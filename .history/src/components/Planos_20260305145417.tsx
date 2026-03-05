import { Check, Sparkles, ShieldCheck } from "lucide-react";

const PHONE = "5521972002180";

const getWhatsAppLink = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

// ✅ texto sem termos proibidos
const benefits = [
  "Qualidade SD / HD / FHD / 4K",
  "Conteúdos digitais em um só app",
  "Aplicativo moderno e leve",
  "Suporte na instalação",
];

// Ajuste os preços aqui
const plans = [
  { name: "Mensal", duration: "1 mês de acesso", price: 25, highlight: false },
  { name: "Trimestral", duration: "3 meses de acesso", price: 59, highlight: true },
  { name: "Semestral", duration: "6 meses de acesso", price: 105, highlight: false },
  { name: "Anual", duration: "12 meses de acesso", price: 200, highlight: false },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Planos() {
  return (
    <section id="planos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Escolha seu <span className="gradient-text">Plano</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 md:mb-16 text-lg">
          Ativação rápida, configuração simples e suporte completo.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const msgAssinar = `Olá! Quero assinar o plano ${plan.name} do Lumi Player.\n\nMeu aparelho é: ____`;
            const msgTeste =
              "Olá! Gostaria de solicitar um TESTE do Lumi Player para experimentar antes de assinar.\n\nMeu aparelho é: ____";

            return (
              <div
                key={plan.name}
                className={[
                  "card-dark flex flex-col relative overflow-hidden",
                  "transition-transform duration-200 hover:-translate-y-1",
                  plan.highlight ? "border-primary animate-glow-pulse" : "",
                ].join(" ")}
              >
                {/* brilho premium no card destacado */}
                {plan.highlight && (
                  <div
                    aria-hidden
                    className="absolute -inset-24 opacity-60 blur-3xl
                    bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,.18),transparent_60%)]"
                  />
                )}

                {plan.highlight && (
                  <div
                    className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black
                    border border-primary/25 bg-primary/10 text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Sparkles className="h-4 w-4" />
                    MAIS POPULAR
                  </div>
                )}

                <div className="relative">
                  <h3 className="text-xl font-black mb-1">
                    Plano <span className="gradient-text">{plan.name}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">{plan.duration}</p>

                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">por </span>
                    <span className="text-4xl font-black gradient-text">
                      {brl(plan.price)}
                    </span>
                  </div>

                  {/* mini confiança */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Suporte na instalação
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      Configuração simples
                    </span>
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
                    {/* ✅ WhatsApp verde + mensagem do plano */}
                    <a
                      href={getWhatsAppLink(msgAssinar)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-sm font-extrabold rounded-2xl px-4 py-3
                      bg-[#25D366] text-black hover:brightness-110 transition
                      shadow-[0_18px_35px_rgba(37,211,102,.18)]"
                    >
                      ASSINAR NO WHATSAPP
                    </a>

                    {/* ✅ Teste com texto de teste */}
                    <a
                      href={getWhatsAppLink(msgTeste)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow-outline block text-center text-sm font-extrabold rounded-2xl px-4 py-3"
                    >
                      PEDIR TESTE
                    </a>

                    <p className="text-center text-xs text-muted-foreground">
                      Resposta rápida e orientação completa.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Observação pequena */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Dica: ao chamar, informe seu aparelho (LG, Samsung, Roku ou TV Box) para agilizar.
        </p>
      </div>
    </section>
  );
}