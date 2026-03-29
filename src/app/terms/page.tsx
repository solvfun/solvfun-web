import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use - Solvfun",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-5 py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="heading-xl mb-4 text-4xl">Terms of Use</h1>
          <p className="mb-10 text-sm text-text-tertiary">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using the Solvfun application, you
                agree to be bound by these Terms of Use. If you do not agree to
                these terms, do not use the application. These terms constitute a
                legally binding agreement between you and Solvfun.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Description of Service
              </h2>
              <p>
                Solvfun is a self-custodial mobile wallet application that allows
                users to store, manage, and trade Solana-based tokens. The
                application provides tools for interacting with the Solana
                blockchain, including token swaps, wallet management, and transaction
                signing. Solvfun does not custody user funds or control access to
                user wallets.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                User Responsibilities
              </h2>
              <p>
                You are solely responsible for maintaining the security of your
                private keys and seed phrases. You acknowledge that losing access to
                your seed phrase may result in permanent loss of your funds. You
                agree to use the application in compliance with all applicable laws
                and regulations. You are responsible for all activity that occurs
                under your wallet.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Intellectual Property
              </h2>
              <p>
                The Solvfun application, including its design, code, logos, and
                content, is protected by intellectual property laws. You may not
                copy, modify, distribute, or create derivative works based on the
                application without our express written permission. All trademarks
                and branding are the property of Solvfun.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Disclaimers
              </h2>
              <p>
                The application is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express or
                implied. We do not guarantee uninterrupted or error-free operation.
                Trading cryptocurrency involves substantial risk of loss. Meme coins
                are highly volatile and speculative. We do not provide financial
                advice, and nothing in the application should be construed as such.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Solvfun shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages, including but not limited to loss of funds, data, or
                profits, arising from your use of the application. Our total
                liability shall not exceed the amount you paid for the application.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will
                be effective when posted on our website or within the application.
                Your continued use of the application after changes are posted
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Contact
              </h2>
              <p>
                If you have questions about these Terms of Use, please contact us
                through our official channels listed on our website.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
