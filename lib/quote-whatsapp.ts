export const QUOTE_WHATSAPP_NUMBERS = ["263711942294", "263785234975"] as const;

const SESSION_KEY = "moniq_quote_whatsapp_number";
const COUNTER_KEY = "moniq_quote_whatsapp_counter";

export function buildQuoteWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getQuoteWhatsAppMessage(message?: string) {
  return message ?? "Hi, I'd like a quote for Moniq Technologies.";
}

export function getAlternatingQuoteWhatsAppNumber() {
  if (typeof window === "undefined") {
    return QUOTE_WHATSAPP_NUMBERS[0];
  }

  const sessionNumber = window.sessionStorage.getItem(SESSION_KEY);
  if (sessionNumber && QUOTE_WHATSAPP_NUMBERS.includes(sessionNumber as (typeof QUOTE_WHATSAPP_NUMBERS)[number])) {
    return sessionNumber;
  }

  const currentCounter = Number(window.localStorage.getItem(COUNTER_KEY) ?? "0");
  const nextNumber = QUOTE_WHATSAPP_NUMBERS[currentCounter % QUOTE_WHATSAPP_NUMBERS.length];

  window.sessionStorage.setItem(SESSION_KEY, nextNumber);
  window.localStorage.setItem(COUNTER_KEY, String(currentCounter + 1));

  return nextNumber;
}
