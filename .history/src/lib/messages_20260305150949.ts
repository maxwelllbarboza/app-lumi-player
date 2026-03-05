import type { Plan } from "@/data/plans";
import { brl } from "@/lib/format";

export type Device =
  | "Smart TV LG"
  | "Smart TV Samsung"
  | "Roku TV"
  | "TV Box"
  | "Celular/Tablet"
  | "Computador";

export type Payment = "Pix" | "Cartão" | "Não sei ainda";

export function buildSubscribeMessage(args: {
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

export function buildTestMessage(args: { name: string; device: Device }) {
  const { name, device } = args;

  return `Olá! Gostaria de solicitar um TESTE do Lumi Player.

Nome: ${name}
Aparelho: ${device}`;
}