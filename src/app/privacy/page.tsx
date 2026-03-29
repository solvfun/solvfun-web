import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Solvfun",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-5 py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="heading-xl mb-4 text-4xl">Privacy Policy</h1>
          <p className="mb-10 text-sm text-text-tertiary">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Information Collection
              </h2>
              <p>
                Solvfun is a self-custodial wallet application. We do not collect,
                store, or have access to your private keys, seed phrases, or wallet
                passwords. We may collect anonymized usage analytics to improve the
                app experience, including crash reports, feature usage patterns, and
                general device information. No personally identifiable information is
                tied to this data.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Use of Information
              </h2>
              <p>
                Any information we collect is used solely to improve the performance,
                reliability, and user experience of the Solvfun application. We do
                not sell, rent, or share your information with third parties for
                marketing purposes. Aggregated, anonymized data may be used to
                understand overall usage trends.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Data Security
              </h2>
              <p>
                Your private keys and seed phrases are generated and stored locally
                on your device using hardware-backed encryption where available. We
                implement industry-standard security measures for any data we do
                process. However, no method of electronic storage is 100% secure, and
                we cannot guarantee absolute security of data transmitted to us.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Third-Party Services
              </h2>
              <p>
                Solvfun may interact with third-party services such as Solana RPC
                providers, token metadata services, and price feed APIs. These
                services have their own privacy policies, and we encourage you to
                review them. We are not responsible for the privacy practices of
                third-party services.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify
                users of any material changes by posting the updated policy within
                the app or on our website. Your continued use of Solvfun after
                changes are posted constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                Contact
              </h2>
              <p>
                If you have any questions or concerns about this privacy policy,
                please contact us through our official channels listed on our
                website.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
