import type { LegalDoc } from "@/components/LegalDocument";
import { FEES_URL, LEGAL_CONTACT_EMAIL, LEGAL_ENTITY, PRIVACY_URL } from "./shared";

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  effectiveDate: "September 2, 2026",
  intro: [
    {
      kind: "p",
      text: `These Terms of Service ("Terms") govern your use of the Solvfun mobile application ("the App"), a product of ${LEGAL_ENTITY} ("we", "us"). By downloading or using the App you agree to these Terms. If you do not agree, do not use the App.`,
    },
    {
      kind: "p",
      text: `Our [Privacy Policy](${PRIVACY_URL}) explains how the App handles data. It forms part of these Terms and is incorporated by reference.`,
    },
    {
      kind: "callout",
      text: "**Please read Section 3 (Self-Custody), Section 7 (Assumption of Risk) and Section 12 (Limitation of Liability) carefully. They affect your legal rights.**",
    },
    {
      kind: "legalese",
      text: "**ARBITRATION NOTICE.** SECTION 14 CONTAINS A BINDING ARBITRATION AGREEMENT AND A CLASS ACTION WAIVER. UNLESS YOU OPT OUT WITHIN THIRTY (30) DAYS AS DESCRIBED THERE, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY INDIVIDUAL ARBITRATION, AND YOU WAIVE YOUR RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN A CLASS ACTION.",
    },
  ],
  sections: [
    {
      n: 1,
      title: "What Solvfun Is — and Is Not",
      blocks: [
        {
          kind: "p",
          text: "Solvfun is a **self-custodial software wallet** for the Solana blockchain. It lets you generate and manage cryptographic keys on your own device, view public blockchain data, and construct transactions — including token swaps routed through third-party protocols — that **you alone sign and authorize**.",
        },
        { kind: "p", text: "In particular:" },
        {
          kind: "ul",
          items: [
            "**We never hold or control your assets.** We hold no key, no co-signing power over your funds, and no permission that would let us move, freeze, or reverse anything you own.",
            "**We are not a counterparty to your transactions.** We do not operate an order book, quote prices as principal, match you with a buyer or seller, or take the other side of any trade. Transactions are built on your device, signed by your key, and settled by third-party protocols on the public blockchain.",
            "**We do not accept your assets for transmission to anyone else.** Amounts that reach us — our platform fee, and repayment of any network fees we advance for you (Section 5) — are settled on-chain inside your own transaction as consideration for the service. They are not funds held, pooled, or forwarded on your behalf.",
            "**We give no advice.** Nothing in the App is investment, financial, legal, or tax advice.",
            "**We do not operate the protocols you trade on.** Swaps and other on-chain actions are executed by smart contracts published by third parties, which we neither control nor maintain.",
          ],
        },
        {
          kind: "callout",
          text: "**The App is provided for informational and entertainment purposes only.** Nothing in it — including token listings, rankings, trending or newly-launched feeds, search results, price charts, and safety indicators — is investment, financial, legal, or tax advice, or a recommendation or solicitation to buy or sell any asset. The order in which tokens appear is generated automatically from third-party market data; it is **not** a selection, endorsement, or rating by us. Every trading decision you make is your own.",
        },
      ],
    },
    {
      n: 2,
      title: "Eligibility",
      blocks: [
        {
          kind: "p",
          text: "You must be at least 18 years old and legally able to enter into these Terms, and you may not be located in or otherwise connected to a Restricted Jurisdiction (Section 9).",
        },
      ],
    },
    {
      n: 3,
      title: "Self-Custody; Your Keys, Your Exit",
      blocks: [
        {
          kind: "ul",
          items: [
            "Your private keys and recovery phrase are generated and stored **only on your device** (and, if you opt in, in an encrypted backup in your own cloud storage account). **We never have them and can never recover them.**",
            "You are solely responsible for safeguarding your device, PIN, recovery phrase, and backup password, and for verifying all transaction details (recipient addresses, amounts, tokens, slippage) before signing.",
            "Blockchain transactions are **irreversible**. We cannot cancel, reverse, or refund any transaction.",
          ],
        },
        {
          kind: "callout",
          text: "**If you lose your recovery phrase and your device, your assets are permanently lost.** No one — including us — can restore access.",
        },
        {
          kind: "p",
          text: "**You are never locked in.** Your wallet is generated from a standard recovery phrase on a standard derivation path. That phrase alone restores the same addresses and the same assets in other wallet software — without us, without this App, and without anyone's permission. The App includes an offline guide to doing so, which keeps working when every network feature is unavailable.",
        },
        {
          kind: "callout",
          text: "It follows that **your assets do not depend on our continued existence**. If our services stop responding, if the App is withdrawn from an app store, or if we cease operating altogether, nothing happens to what you hold: it is on the blockchain, under a key only you have, and you can move it from any compatible wallet. We accept no obligation to keep the App, any feature, or any of our services running, and we are not liable for losses attributed to their unavailability.",
        },
      ],
    },
    {
      n: 4,
      title: "Third-Party Services and Protocols",
      blocks: [
        {
          kind: "p",
          text: "The App relies on third-party services and protocols we do not control, including decentralized exchange and aggregation protocols, market-data providers, and blockchain node infrastructure. We do not guarantee their availability, accuracy, or continued operation, and we are not responsible for losses caused by their failure, inaccuracy, discontinuation, or your use of them.",
        },
        {
          kind: "p",
          text: "Token safety indicators in the App (for example, honeypot or risk warnings) are best-effort signals derived from third-party data. They may be wrong or incomplete and are **not** a guarantee that any token is safe.",
        },
      ],
    },
    {
      n: 5,
      title: "Fees",
      blocks: [
        {
          kind: "p",
          text: `**Platform fee.** Some transactions made through the App include a platform fee, collected automatically on-chain as part of the transaction itself. Our current fees, including which transactions are free, are published on our [fees page](${FEES_URL}). We may change our fees, introduce promotional or zero-fee periods, and change which transactions are subject to a fee, at any time and at our sole discretion. Any change applies only to transactions made after the change takes effect.`,
        },
        {
          kind: "p",
          text: "**Network fees.** Independently of our fee, every Solana transaction costs network fees, and creating a token account requires a small refundable on-chain deposit (rent). These are determined by the Solana network and the relevant protocols — they are **not set by, and do not go to, us**. You normally pay them from your own SOL balance.",
        },
        {
          kind: "p",
          text: "**Gas sponsorship.** If you do not hold enough SOL for network fees, the App may offer to advance them for you. The advance is repaid, together with a margin over the amount advanced to absorb fee volatility, from the tokens in the same transaction you sign. Sponsorship is optional and is offered only when your SOL balance is insufficient.",
        },
        {
          kind: "p",
          text: "**Estimates.** Quoted prices, rates, and fee amounts shown before you confirm are **estimates only** and may differ from the amounts actually paid at execution. Third-party protocols may apply their own charges or price impact.",
        },
      ],
    },
    {
      n: 6,
      title: "Taxes",
      blocks: [
        {
          kind: "p",
          text: "You are solely responsible for determining and paying any taxes that apply to your transactions. We do not withhold, report, or advise on taxes.",
        },
      ],
    },
    {
      n: 7,
      title: "Assumption of Risk",
      blocks: [
        { kind: "p", text: "By using the App you acknowledge and accept that:" },
        {
          kind: "ul",
          items: [
            "Digital assets — **especially meme tokens** — are extremely volatile and speculative; their value can and often does go to zero;",
            'Newly launched tokens carry elevated risks, including fraud ("rug pulls"), honeypots, malicious code, and total loss of liquidity;',
            "Blockchain networks can be congested, forked, or attacked; transactions may fail, be delayed, or execute at a worse price than quoted (slippage, MEV);",
            "Software — including this App, the protocols it interacts with, and the Solana network itself — may contain bugs or vulnerabilities;",
            "Regulatory treatment of digital assets is uncertain and may change.",
          ],
        },
        {
          kind: "callout",
          text: "**You use the App at your own risk and are solely responsible for your trading decisions. Never trade more than you can afford to lose.**",
        },
      ],
    },
    {
      n: 8,
      title: "Acceptable Use; Feedback You Send Us",
      blocks: [
        {
          kind: "p",
          text: "You agree not to use the App to violate any law, including sanctions, anti-money-laundering, and counter-terrorist-financing laws; to interact with addresses or protocols subject to sanctions; to infringe others' rights; or to interfere with, reverse engineer (except as permitted by law), or disrupt the App or the services it relies on.",
        },
        {
          kind: "p",
          text: "**Feedback.** If you send us a message or a screenshot through the App's feedback feature, you confirm that you are entitled to share what you send, and you grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free licence to store it, reply to it, and use it to support you and to improve the App. Do not send content that is unlawful, infringing, or that belongs to someone else. We may remove content that breaches this paragraph. How we handle feedback is described in our Privacy Policy.",
        },
        {
          kind: "callout",
          text: "**Never send us your recovery phrase or a private key** — not in feedback, not by email, not in any other channel. We will never ask for them, and anyone who does is attempting to steal your funds.",
        },
      ],
    },
    {
      n: 9,
      title: "Restricted Jurisdictions",
      blocks: [
        {
          kind: "p",
          text: "You may not use the App if you are located in, incorporated in, a resident of, or a national of: (a) any country or region subject to comprehensive sanctions administered by the U.S. Office of Foreign Assets Control (OFAC), the United Nations, or the European Union; (b) any jurisdiction where use of the App or trading in digital assets is prohibited by applicable law; or (c) any jurisdiction we exclude from distribution.",
        },
        {
          kind: "p",
          text: "You represent that you are not a sanctioned person and do not act on behalf of one. The App being downloadable in a territory does not constitute an offer of services where such services would be unlawful.",
        },
      ],
    },
    {
      n: 10,
      title: "Intellectual Property",
      blocks: [
        {
          kind: "p",
          text: `The App, including its design, code, and branding, is owned by us and protected by applicable law. We grant you a personal, non-exclusive, non-transferable, revocable license to use the App for its intended purpose. Open-source components remain under their own licenses.`,
        },
      ],
    },
    {
      n: 11,
      title: "Disclaimer of Warranties",
      blocks: [
        {
          kind: "legalese",
          text: 'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY OF DATA (INCLUDING PRICES AND QUOTES), AND UNINTERRUPTED OR ERROR-FREE OPERATION. NO SERVICE LEVEL IS PROMISED.',
        },
        {
          kind: "legalese",
          text: "THE APP IS PROVIDED FOR INFORMATIONAL AND ENTERTAINMENT PURPOSES ONLY. WE DO NOT PROVIDE FINANCIAL, INVESTMENT, OR TRADING ADVICE OR RECOMMENDATIONS, AND NOTHING IN THE APP SHOULD BE RELIED ON AS SUCH.",
        },
      ],
    },
    {
      n: 12,
      title: "Limitation of Liability",
      blocks: [
        {
          kind: "legalese",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW: (a) WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DIGITAL ASSETS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE APP — INCLUDING LOSSES CAUSED BY MARKET MOVEMENTS, FAILED OR DELAYED TRANSACTIONS, THIRD-PARTY SERVICES, MALICIOUS TOKENS, OR LOSS OF YOUR RECOVERY PHRASE; AND (b) OUR AGGREGATE LIABILITY FOR ALL CLAIMS SHALL NOT EXCEED THE GREATER OF (i) THE TOTAL PLATFORM FEES YOU PAID TO US THROUGH THE APP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, AS DETERMINED FROM OUR RECORDS, AND (ii) ONE HUNDRED U.S. DOLLARS (USD 100).",
        },
        {
          kind: "legalese",
          text: "SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THOSE JURISDICTIONS THESE LIMITS APPLY TO THE FULLEST EXTENT PERMITTED.",
        },
      ],
    },
    {
      n: 13,
      title: "Indemnification",
      blocks: [
        {
          kind: "p",
          text: "You will indemnify and hold us harmless from claims, damages, and expenses (including reasonable legal fees) arising from your breach of these Terms, your violation of law, or your use of the App.",
        },
      ],
    },
    {
      n: 14,
      title: "Governing Law; Binding Arbitration; Class Action Waiver",
      blocks: [
        {
          kind: "callout",
          text: "**Please read this section carefully. It requires you to resolve disputes with us through binding arbitration on an individual basis and limits the ways you can seek relief from us.**",
        },
        {
          kind: "p",
          text: "These Terms, and any dispute arising out of or relating to them or the App, are governed by the laws of the State of Wyoming, U.S.A., without regard to conflict-of-law rules. The U.S. Federal Arbitration Act governs the interpretation and enforcement of this Section 14.",
        },
        {
          kind: "p",
          text: `**Informal resolution first.** Before starting arbitration, you agree to send a written description of your dispute to ${LEGAL_CONTACT_EMAIL} and give us thirty (30) days to resolve it informally.`,
        },
        {
          kind: "p",
          text: '**Binding arbitration.** Any dispute not resolved informally shall be finally resolved by binding arbitration administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules then in effect. The arbitration shall be conducted in English before a single arbitrator and may be conducted by videoconference; any in-person hearing shall take place in the State of Wyoming unless the AAA rules or applicable law require a location more convenient to you. Judgment on the arbitration award may be entered in any court of competent jurisdiction.',
        },
        {
          kind: "legalese",
          text: "**CLASS ACTION AND JURY TRIAL WAIVER.** ALL DISPUTES MUST BE BROUGHT ON AN INDIVIDUAL BASIS ONLY. YOU AND WE EACH WAIVE THE RIGHT TO A TRIAL BY JURY AND THE RIGHT TO PARTICIPATE IN ANY CLASS ACTION, CLASS-WIDE OR CONSOLIDATED ARBITRATION, OR REPRESENTATIVE PROCEEDING. THE ARBITRATOR MAY AWARD RELIEF ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF. IF THE CLASS ACTION WAIVER IS HELD UNENFORCEABLE AS TO A PARTICULAR CLAIM, THAT CLAIM — AND ONLY THAT CLAIM — SHALL PROCEED IN COURT, AND ALL REMAINING CLAIMS SHALL BE ARBITRATED.",
        },
        {
          kind: "p",
          text: "**Batch arbitration.** If 25 or more claimants submit demands for arbitration raising substantially similar claims within a 90-day period, those demands shall be resolved in batches of no more than 50 claimants each, with a single arbitrator per batch, and the parties shall cooperate with the AAA to implement this process. Any applicable limitation period is tolled for claims awaiting their batch.",
        },
        {
          kind: "p",
          text: "**Exceptions.** Either party may (a) bring an individual claim in small-claims court, or (b) seek injunctive or other equitable relief in a court of competent jurisdiction to protect its intellectual property.",
        },
        {
          kind: "p",
          text: `**30-day opt-out.** You may opt out of this arbitration agreement by emailing ${LEGAL_CONTACT_EMAIL} within thirty (30) days of first accepting these Terms, stating your name and your intent to opt out of arbitration. Opting out does not affect any other provision of these Terms.`,
        },
        {
          kind: "p",
          text: "**Mandatory local law.** If you are a consumer, nothing in these Terms deprives you of the protection of provisions that cannot be derogated from under the law of the country in which you have your habitual residence, nor of the right to bring proceedings before the courts of that country where mandatory law gives you that right. To the extent the choice of Wyoming law, the arbitration agreement, or the class action waiver is unenforceable against you under that law, it does not apply to you and the remainder of these Terms stays in effect.",
        },
      ],
    },
    {
      n: 15,
      title: "Term and Termination",
      blocks: [
        {
          kind: "p",
          text: "These Terms take effect when you first download or use the App and remain in effect for as long as you use it. You may end them at any time by ceasing to use the App and uninstalling it. We may suspend, discontinue, or limit the App or any of its features at any time.",
        },
        {
          kind: "p",
          text: "Because the App is self-custodial, termination does not affect your assets: your keys remain on your device and can be restored in other wallet software supporting the same standard, as described in Section 3. Sections 3, 5, 6, 10 to 14, and 18 survive any termination of these Terms.",
        },
      ],
    },
    {
      n: 16,
      title: "Changes to These Terms",
      blocks: [
        {
          kind: "p",
          text: "We may update these Terms by posting a new version on this page and updating the effective date. Material changes will be noted in the App's release notes. Continued use of the App after a change takes effect constitutes acceptance; if you do not agree to a change, stop using the App.",
        },
      ],
    },
    {
      n: 17,
      title: "App Stores",
      blocks: [
        {
          kind: "p",
          text: "If you obtain the App through a third-party app store, your use is also subject to that store's own terms, and you must comply with them.",
        },
        {
          kind: "p",
          text: "**Apple.** The following applies if you obtained the App from the Apple App Store. These Terms are between you and us only — not with Apple — and Apple is not responsible for the App or its content. Apple has no obligation to provide maintenance or support for the App. If the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any; to the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App. Apple is not responsible for addressing any claim by you or a third party relating to the App, including product liability claims, any claim that the App fails to conform to a legal or regulatory requirement, and claims arising under consumer protection or similar legislation. Apple is not responsible for investigating, defending, settling, or discharging any third-party claim that the App infringes intellectual property rights. You represent that you are not located in a country subject to a U.S. Government embargo or designated as a terrorist-supporting country, and that you are not listed on any U.S. Government list of prohibited or restricted parties. **Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.**",
        },
      ],
    },
    {
      n: 18,
      title: "Miscellaneous",
      blocks: [
        {
          kind: "p",
          text: "If any provision is held unenforceable, the remainder stays in effect. These Terms, together with the Privacy Policy incorporated above, are the entire agreement between you and us regarding the App. Our failure to enforce a provision is not a waiver.",
        },
        {
          kind: "p",
          text: "**Force majeure.** We are not liable for any failure or delay in providing the App caused by events beyond our reasonable control, including blockchain network congestion, forks, or outages; failures of third-party services, protocols, or infrastructure; network or internet disruptions; changes in law or government action; and natural disasters.",
        },
        {
          kind: "p",
          text: "**Assignment.** You may not assign or transfer these Terms or any rights under them. We may assign them to an affiliate, or in connection with a merger, acquisition, reorganization, or sale of all or substantially all of our assets.",
        },
      ],
    },
    {
      n: 19,
      title: "Contact",
      blocks: [
        { kind: "p", text: `**Solvfun** is a product of ${LEGAL_ENTITY}, a Wyoming limited liability company.` },
        { kind: "p", text: `Email: ${LEGAL_CONTACT_EMAIL}` },
      ],
    },
  ],
};
