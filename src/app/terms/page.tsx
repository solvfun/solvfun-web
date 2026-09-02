import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalDocument from "@/components/LegalDocument";
import { termsOfService } from "@/content/legal/terms";

export const metadata = {
  title: "Terms of Service - Solvfun",
  description:
    "The terms that govern your use of the Solvfun self-custodial Solana wallet, including fees, assumption of risk, and dispute resolution.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header logoOnly />
      <main className="px-5 py-16">
        <LegalDocument doc={termsOfService} />
      </main>
      <Footer />
    </>
  );
}
