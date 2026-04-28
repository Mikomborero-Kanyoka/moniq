import { QuoteLink } from "@/components/quote-link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PricingSection } from "@/components/pricing-section";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  image: string;
  showPricing?: boolean;
};

export function ServicePage({
  eyebrow,
  title,
  description,
  highlights,
  ctaLabel,
  image,
  showPricing = false,
}: ServicePageProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="relative h-[40vh] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-sky-400">{eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-2xl font-serif font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {description}
              </p>
              <div className="mt-8">
                <QuoteLink
                  className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  {ctaLabel}
                </QuoteLink>
              </div>
            </div>

            <aside className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-lg font-semibold text-foreground md:text-xl">What Moniq Covers</h2>
              <ul className="mt-5 space-y-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {showPricing && <PricingSection />}
      </main>
      <Footer />
    </div>
  );
}
