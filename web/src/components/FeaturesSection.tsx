const features = [
  {
    title: "Self-Custody Wallet",
    description:
      "Your keys, your coins. Private keys are generated and stored only on your device — never on our servers.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Meme Coin Trading",
    description:
      "Discover and trade the hottest meme coins on Solana. Swap any SPL token with minimal slippage.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Lightning Speed",
    description:
      "Built natively on Solana for sub-second transaction finality. No waiting, no lag — trade at the speed of thought.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Truly Yours, Always",
    description:
      "Your mnemonic and private keys belong to you. Export them anytime and use in any Web3 wallet — no lock-in, no strings attached.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="heading-lg mb-4 text-3xl sm:text-4xl">
            Why <span className="text-brand">Solvfun</span>?
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Everything you need to trade meme coins on Solana, with security you can trust.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border-subtle bg-bg-card p-6 transition-all duration-300 hover:border-brand/30 hover:bg-bg-elevated hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-xl bg-brand-soft p-3 text-brand transition-colors duration-300 group-hover:bg-brand/15">
                {feature.icon}
              </div>
              <h3 className="heading-md mb-2 text-lg text-text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
