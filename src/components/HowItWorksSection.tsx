const steps = [
  {
    step: "01",
    title: "Download the App",
    description:
      "Grab the APK straight from our site. Google Play and iOS coming soon.",
  },
  {
    step: "02",
    title: "Create or Import Wallet",
    description:
      "Generate a new Solana wallet in seconds, or import an existing one with your seed phrase.",
  },
  {
    step: "03",
    title: "Start Trading",
    description:
      "Fund your wallet and start swapping meme coins instantly with Solana-speed transactions.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="heading-lg mb-4 text-3xl sm:text-4xl">
            Get Started in <span className="text-brand">3 Steps</span>
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            From download to your first trade in under a minute.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-brand/40 to-transparent sm:block" />
              )}

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand/20 bg-brand-soft">
                <span className="font-[family-name:var(--font-brand)] text-xl font-bold text-brand">
                  {item.step}
                </span>
              </div>
              <h3 className="heading-md mb-2 text-lg text-text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
