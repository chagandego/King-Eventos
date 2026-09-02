import { site } from "@/content/site";

/**
 * Gera um link do WhatsApp (wa.me) com mensagem automática pré-preenchida.
 * @param message Texto que aparece já digitado na conversa.
 * @param number  Número no formato internacional sem símbolos (padrão: o da empresa).
 */
export function whatsappLink(message: string, number: string = site.whatsapp.number): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
