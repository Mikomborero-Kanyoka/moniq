"use client";

import { useQuoteWhatsApp } from "@/hooks/use-quote-whatsapp";

type QuoteLinkProps = {
  className?: string;
  children: React.ReactNode;
  message?: string;
};

export function QuoteLink({ className, children, message }: QuoteLinkProps) {
  const { href } = useQuoteWhatsApp(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
