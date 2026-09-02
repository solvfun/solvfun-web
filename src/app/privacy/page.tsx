import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalDocument from "@/components/LegalDocument";
import { privacyPolicy } from "@/content/legal/privacy";

export const metadata = {
  title: "Privacy Policy - Solvfun",
  description:
    "How Solvfun handles your data: keys never leave your device, no accounts, and a plain-language account of every service that sees anything.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header logoOnly />
      <main className="px-5 py-16">
        <LegalDocument doc={privacyPolicy} />
      </main>
      <Footer />
    </>
  );
}
