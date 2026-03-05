import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import type { Plan } from "@/data/plans";
import type { Device, Payment } from "@/lib/messages";
import { buildSubscribeMessage, buildTestMessage } from "@/lib/messages";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { brl } from "@/lib/format";

type Mode = "subscribe" | "test";

type Props = {
  open: boolean;
  mode: Mode;
  plan: Plan | null;
  onClose: () => void;
};

const DEVICES: Device[] = [
  "Smart TV LG",
  "Smart TV Samsung",
  "Roku TV",
  "TV Box",
  "Celular/Tablet",
  "Computador",
];

const PAYMENTS: Payment[] = ["Pix", "Cartão", "Não sei ainda"];

export default function PlanModal({ open, mode, plan, onClose }: Props) {
  const [name, setName] = useState("");
  const [device, setDevice] = useState<Device>("Smart TV LG");
  const [payment, setPayment] = useState<Payment>("Pix");
  const [mounted, setMounted] = useState(false);

  // Animação de entrada/saída sem lib
  useEffect(() => {
    if (!open) {
      setMounted(false);
      return;
    }
    setMounted(true);
  }, [open]);

  // Fecha com ESC + trava scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Reset quando abre (opcional)
  useEffect(() => {
    if (!open) return;
    setName("");
    setDevice("Smart TV LG");
    setPayment("Pix");
  }, [open]);

  const canSubmit = useMemo(() => {
    const trimmed = name.trim();
    if (trimmed.length < 2) return false;
    if (mode === "subscribe" && !plan) return false;
    return true;
  }, [name, mode, plan]);

  const submit = () => {
    if (!canSubmit) return;

    const msg =
      mode === "subscribe" && plan
        ? buildSubscribeMessage({
            plan,
            name: name.trim(),
            device,
            payment,
          })
        : buildTestMessage({
            name: name.trim(),
            device,
          });

    window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* overlay */}
      <button
        type="button"
        onClick={onClose}
        className={[
          "absolute inset-0 bg-black/70 backdrop-blur-sm",
          "transition-opacity duration-200",
          mounted ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-label="Fechar"
      />

      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={[
          "relative w-full max-w-lg rounded-3xl border border-white/12 bg-[#060812] p-6",
          "shadow-[0_25px_90px_rgba(0,0,0,.7)]",
          "transition-all duration-200",
          mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.98]",
        ].join(" ")}
      >
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
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5 text-white/70" />
          </button>
        </div>

        {mode === "subscribe" && plan && (
          <div className="mt-5 rounded-2xl border border-orange-400/15 bg-orange-500/10 p-4">
            <div className="text-sm font-extrabold text-white/90">
              Plano: {plan.name} • {brl(plan.price)}
            </div>
            <div className="mt-1 text-xs text-white/60">{plan.duration}</div>
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
            {name.trim().length > 0 && name.trim().length < 2 && (
              <p className="mt-2 text-xs text-red-300/80">
                Digite pelo menos 2 letras.
              </p>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-white/70">Aparelho</label>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value as Device)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/30"
            >
              {DEVICES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {mode === "subscribe" && (
            <div>
              <label className="text-xs font-bold text-white/70">Pagamento</label>
              <select
                value={payment}
                onChange={(e) => setPayment(e.target.value as Payment)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/30"
              >
                {PAYMENTS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
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
          Dica: aperte <b>ESC</b> para fechar.
        </p>
      </div>
    </div>
  );
}