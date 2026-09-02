import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalDocument from "@/components/LegalDocument";
import { feesDoc } from "@/content/legal/fees";

export const metadata = {
  title: "Fees - Solvfun",
  description:
    "What Solvfun charges: platform fee on trades, which trades are free, Solana network costs, and gas sponsorship.",
  alternates: {
    canonical: "/fees",
  },
};

export default function FeesPage() {
  return (
    <>
      <Header logoOnly />
      <main className="px-5 py-16">
        <LegalDocument doc={feesDoc} />
      </main>
      <Footer />
    </>
  );
}
