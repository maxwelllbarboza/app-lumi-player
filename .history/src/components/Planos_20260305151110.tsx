import { useState } from "react";
import { Check } from "lucide-react";
import PlanModal from "@/components/PlanModal";
import { benefits, plans, type Plan } from "@/data/plans";

export default function Planos() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"subscribe" | "test">("subscribe");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const openSubscribe = (plan: Plan) => {
    setMode("subscribe");
    setSelectedPlan(plan);
    setOpen(true);
  };

  const openTest = () => {
    setMode("test");
    setSelectedPlan(null);
    setOpen(true);
  };

  return (
    <section id="planos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Escolha seu <span className="gradient-text">Plano</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Ativação rápida, configuração simples e suporte na instalação.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-dark flex flex-col relative ${
                plan.highlight ? "border-primary animate-glow-pulse" : ""
              }`}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
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
                <button
                  type="button"
                  onClick={() => openSubscribe(plan)}
                  className="btn-glow block w-full text-center text-sm"
                >
                  ASSINAR
                </button>

                <button
                  type="button"
                  onClick={openTest}
                  className="btn-glow-outline block w-full text-center text-sm"
                >
                  TESTE GRÁTIS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PlanModal
        open={open}
        mode={mode}
        plan={selectedPlan}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}