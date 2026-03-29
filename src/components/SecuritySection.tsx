export default function SecuritySection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-border-subtle bg-bg-card">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                Security First
              </div>
              <h2 className="heading-lg mb-4 text-3xl sm:text-4xl">
                Your Keys.{" "}
                <span className="text-brand">Your Crypto.</span>
              </h2>
              <p className="mb-6 leading-relaxed text-text-secondary">
                Solvfun is a fully self-custodial wallet. Your seed phrase and
                private keys are generated locally and stored in your
                device&apos;s secure storage (iOS Keychain / Android Keystore).
                All transaction signing happens on-device — we never touch
                your keys.
              </p>
              <ul className="space-y-3">
                {[
                  "Keys encrypted via iOS Keychain / Android Keystore",
                  "Transaction signing happens entirely on-device",
                  "Private keys are never uploaded to any server",
                  "Export your seed phrase anytime — no lock-in",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center">
                {/* Animated rings */}
                <div className="absolute inset-0 animate-ping rounded-full border border-brand/10 [animation-duration:3s]" />
                <div className="absolute inset-4 animate-ping rounded-full border border-brand/15 [animation-duration:3s] [animation-delay:0.5s]" />
                <div className="absolute inset-8 rounded-full border border-brand/20" />
                {/* Shield icon */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand-soft">
                  <svg
                    className="h-12 w-12 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
