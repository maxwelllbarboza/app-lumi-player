import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";

const PHONE = "5521972002180";

const getWhatsAppLink = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

// ✅ sem termos proibidos
const benefits = [
  "Qualidade SD / HD / FHD / 4K",
  "Conteúdos digitais em um só app",
  "Aplicativo moderno e leve",
  "Suporte na instalação",
];

type Plan = {
  name: "Mensal" | "Trimestral" | "Semestral" | "Anual";
  duration: string;
  price: number;
  highlight: boolean;
};

const plans: Plan[] = [
  { name: "Mensal", duration: "1 mês de acesso", price: 25, highlight: false },
  { name: "Trimestral", duration: "3 meses de acesso", price: 59, highlight: true },
  { name: "Semestral", duration: "6 meses de acesso", price: 105, highlight: false },
  { name: "Anual", duration: "12 meses de acesso", price: 200, highlight: false },
];

type Device =
  | "Smart TV LG"
  | "Smart TV Samsung"
  | "Roku TV"
  | "TV Box"
  | "Celular/Tablet"
  | "Computador";

type Payment = "Pix" | "Cartão" | "Não sei ainda";

function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function buildSubscribeMessage(args: {
  plan: Plan;
  name: string;
  device: Device;
  payment: Payment;
}) {
  const { plan, name, device, payment } = args;

  return `Olá! Quero assinar o Lumi Player.

Plano escolhido: ${plan.name}
Valor do plano: ${brl(plan.price)}
Duração: ${plan.duration}

Nome: ${name}
Aparelho: ${device}
Pagamento: ${payment}`;
}

function buildTestMessage(args: { name: string; device: Device }) {
  const { name, device } = args;

  return `Olá! Gostaria de solicitar um TESTE do Lumi Player.

Nome: ${name}
Aparelho: ${device}`;
}

export default function Planos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState<"subscribe" | "test">("subscribe");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const [name, setName] = useState("");
  const [device, setDevice] = useState<Device>("Smart TV LG");
  const [payment, setPayment] = useState<Payment>("Pix");

  const canSubmit = useMemo(() => {
    const trimmed = name.trim();
    if (trimmed.length < 2) return false;
    if (!device) return false;
    if (mode === "subscribe" && !selectedPlan) return false;
    return true;
  }, [name, device, mode, selectedPlan]);

  const openSubscribe = (plan: Plan) => {
    setMode("subscribe");
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const openTest = () => {
    setMode("test");
    setSelectedPlan(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const submit = () => {
    if (!canSubmit) return;

    const msg =
      mode === "subscribe" && selectedPlan
        ? buildSubscribeMessage({
            plan: selectedPlan,
            name: name.trim(),
            device,
            payment,
          })
        : buildTestMessage({
            name: name.trim(),
            device,
          });

    window.open(getWhatsAppLink(msg), "_blank", "noopener,noreferrer");
    closeModal();
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
                {/* ✅ Abre modal com plano + valor */}
                <button
                  type="button"
                  onClick={() => openSubscribe(plan)}
                  className="btn-glow block w-full text-center text-sm"
                >
                  ASSINAR
                </button>

                {/* ✅ Abre modal de teste */}
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

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* overlay */}
          <button
            type="button"
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Fechar"
          />

          {/* panel */}
          <div className="relative w-full max-w-lg rounded-3xl border border-white/12 bg-[#060812] p-6 shadow-[0_25px_90px_rgba(0,0,0,.7)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold">
                  {mode === "subscribe" ? "Finalizar assinatura" : "Solicitar teste"}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Preencha rapidinho para montar a mensagem no WhatsApp.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5 text-white/70" />
              </button>
            </div>

            {mode === "subscribe" && selectedPlan && (
              <div className="mt-5 rounded-2xl border border-orange-400/15 bg-orange-500/10 p-4">
                <div className="text-sm font-extrabold text-white/90">
                  Plano: {selectedPlan.name} • {brl(selectedPlan.price)}
                </div>
                <div className="mt-1 text-xs text-white/60">{selectedPlan.duration}</div>
              </div>
            )}

            <div className="mt-5 grid gap-4">
              <div>
                <label className="text-xs font-bold text-white/70">Seu nome</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maxwell"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-orange-400/30"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-white/70">Aparelho que vai usar</label>
                <select
                  value={device}
                  onChange={(e) => setDevice(e.target.value as Device)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/30"
                >
                  <option>Smart TV LG</option>
                  <option>Smart TV Samsung</option>
                  <option>Roku TV</option>
                  <option>TV Box</option>
                  <option>Celular/Tablet</option>
                  <option>Computador</option>
                </select>
              </div>

              {mode === "subscribe" && (
                <div>
                  <label className="text-xs font-bold text-white/70">Forma de pagamento</label>
                  <select
                    value={payment}
                    onChange={(e) => setPayment(e.target.value as Payment)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/30"
                  >
                    <option>Pix</option>
                    <option>Cartão</option>
                    <option>Não sei ainda</option>
                  </select>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold text-white/80 hover:bg-white/10"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={submit}
                disabled={!canSubmit}
                className="rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-black hover:brightness-110 disabled:opacity-50 disabled:hover:brightness-100"
              >
                Enviar no WhatsApp
              </button>
            </div>

            <p className="mt-4 text-xs text-white/45">
              Dica: quanto mais completo, mais rápido o atendimento.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}