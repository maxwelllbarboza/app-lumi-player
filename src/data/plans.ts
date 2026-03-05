export type PlanName = "Mensal" | "Trimestral" | "Semestral" | "Anual";

export type Plan = {
  name: PlanName;
  duration: string;
  price: number;
  highlight: boolean;
};

export const benefits: string[] = [
  "Qualidade SD / HD / FHD / 4K",
  "Conteúdos digitais em um só app",
  "Aplicativo moderno e leve",
  "Suporte na instalação",
];

export const plans: Plan[] = [
  { name: "Mensal", duration: "1 mês de acesso", price: 25, highlight: false },
  { name: "Trimestral", duration: "3 meses de acesso", price: 59, highlight: true },
  { name: "Semestral", duration: "6 meses de acesso", price: 105, highlight: false },
  { name: "Anual", duration: "12 meses de acesso", price: 200, highlight: false },
];