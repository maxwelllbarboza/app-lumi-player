const PHONE = "5521972002180";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}