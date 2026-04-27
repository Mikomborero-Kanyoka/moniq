"use client";

import { useEffect, useState } from "react";
import {
  buildQuoteWhatsAppUrl,
  getAlternatingQuoteWhatsAppNumber,
  getQuoteWhatsAppMessage,
  QUOTE_WHATSAPP_NUMBERS,
} from "@/lib/quote-whatsapp";

export function useQuoteWhatsApp(message?: string) {
  const [number, setNumber] = useState<(typeof QUOTE_WHATSAPP_NUMBERS)[number]>(
    QUOTE_WHATSAPP_NUMBERS[0]
  );

  useEffect(() => {
    setNumber(getAlternatingQuoteWhatsAppNumber());
  }, []);

  return {
    number,
    href: buildQuoteWhatsAppUrl(number, getQuoteWhatsAppMessage(message)),
  };
}
