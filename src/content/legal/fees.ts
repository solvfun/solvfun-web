import type { LegalDoc } from "@/components/LegalDocument";
import { LEGAL_CONTACT_EMAIL, TERMS_URL } from "./shared";

/**
 * 费率公示页。**不是法律文本**，但服务条款 §5 指向它，所以它承担两个法律功能：
 *
 * 1. 满足「费用需在交易前可得」的披露义务（EU UCPD Art.7(4)(c)、Play、FTC）；
 * 2. 给服务条款 §12 的责任上限提供**可确定的计量基准**——上限写的是
 *    「你付给我们的平台费」，用户查不到费率就算不出这个数。
 *
 * ⚠️ 数字全部来自 app 代码，改任何一处都要回代码核对，别凭印象改：
 *
 * | 页面上的数字 | 代码出处 |
 * |---|---|
 * | 平台费 1% | `env_config.dart` `jupReferralFeeBps = 100` |
 * | 免费币对 SOL/USDC/USDT 两两互免 | `swap_fee_config.dart` `SwapFeeConfig.defaults.exemptPairs` |
 * | 「用什么买收什么」 | `swap_fee_policy.dart` `feeMint()` |
 * | 转账/回收不收平台费 | 两条链路均无 feeBps 引用 |
 * | 代付加成 +20% | `swap_economics.dart` `PAYMASTER_MARKUP_BPS = 2000`（三条代付链路共用） |
 * | ATA 租金 ~0.002 SOL | `relay_strategy.dart` 2,039,280 lamports |
 *
 * ⚠️ 与两份法律文本的分工：**数字只写在这里**。服务条款 §5 刻意不含任何费率，
 * 这样调价只改这一页、不用重新发布并重新征得同意的法律文件。
 *
 * 🔴 沿用法律文本的红线：**按类别写，不点名供应商**（不出现 Jupiter/DexScreener
 * 等任何一家）。见隐私政策草稿文首的同条决策。
 */
export const feesDoc: LegalDoc = {
  title: "Fees",
  dateLabel: "Last updated",
  effectiveDate: "September 2, 2026",
  intro: [
    {
      kind: "p",
      text: "Solvfun is a self-custodial wallet: your funds stay in your own wallet at all times. There are no deposit or withdrawal fees, no account or inactivity fees, and no subscription. You pay us only when you trade.",
    },
    {
      kind: "callout",
      text: `This page states our current fees. It is referenced by our [Terms of Service](${TERMS_URL}), and we keep it up to date — but we may change our fees at any time, and a change applies only to transactions made after it takes effect.`,
    },
  ],
  sections: [
    {
      n: 1,
      title: "Trading",
      blocks: [
        {
          kind: "p",
          text: "**Our platform fee is at most 1% of the trade amount, and 1% is the standard rate.** We run promotions during which it is reduced or waived entirely, and some trades are always free (see below). The fee is collected on-chain inside the swap transaction itself and is already reflected in the amount you are quoted before you confirm — there is no separate charge afterwards.",
        },
        {
          kind: "p",
          text: "The fee is taken in the currency you are trading with, never in the token you are buying or selling:",
        },
        {
          kind: "table",
          head: ["What you do", "What we charge", "Taken in"],
          rows: [
            ["Buy a token with SOL, USDC or USDT", "Up to 1% (standard rate 1%)", "The currency you paid with"],
            ["Sell a token for SOL, USDC or USDT", "Up to 1% (standard rate 1%)", "The currency you received"],
            ["Swap between SOL, USDC and USDT", "**Nothing**", "—"],
            ["Wrap or unwrap SOL", "**Nothing**", "—"],
          ],
        },
        {
          kind: "callout",
          text: "**Swapping between SOL, USDC and USDT is free, in both directions.** Moving between the currencies you trade with is preparation for a trade, not a trade — charging for it would be charging you to get ready to pay us.",
        },
        {
          kind: "p",
          text: "**Failed trades cost you no platform fee.** The fee is part of the swap instruction: if the swap does not execute, the fee is not collected either. Network fees for a failed transaction are set by Solana and are outside our control.",
        },
      ],
    },
    {
      n: 2,
      title: "Costs That Are Not Ours",
      blocks: [
        {
          kind: "p",
          text: "Two costs in every Solana transaction are paid to the network, not to us. We do not mark them up and we receive no part of them.",
        },
        {
          kind: "p",
          text: "**Network fee.** Every Solana transaction costs a small network fee, typically a fraction of a cent. A priority tip is added automatically so your trade confirms in seconds rather than waiting behind others.",
        },
        {
          kind: "p",
          text: "**Token account rent — refundable.** The first time you hold a given token, Solana requires a small deposit (about 0.002 SOL) to create the account that holds it. This is a deposit, not a fee: the App's cleanup tool returns it to you when you close accounts for tokens you no longer hold.",
        },
        {
          kind: "p",
          text: "**Liquidity pool fees.** Your trade is executed against automated market makers — pools of tokens published by third parties. Each pool charges its own trading fee, which goes to that pool's liquidity providers, and large trades additionally move the pool's price against you (price impact). **We neither set, receive, nor can change any part of this**: the fee belongs to the pool, applies identically in every app that routes through it, and is already reflected in the amount you are quoted.",
        },
      ],
    },
    {
      n: 3,
      title: "Sending and Receiving",
      blocks: [
        {
          kind: "p",
          text: "**We charge no platform fee on transfers.** Sending tokens costs only the Solana network fee. Receiving costs nothing at all.",
        },
        {
          kind: "p",
          text: "If the recipient does not yet have an account for the token you are sending, Solana charges a one-time account creation fee (about 0.002 SOL) to open it. This is the network's rent model, not a fee of ours.",
        },
        {
          kind: "p",
          text: "Reclaiming rent from token accounts you no longer need is also free of any platform fee — the recovered rent goes back to you.",
        },
      ],
    },
    {
      n: 4,
      title: "If You Run Out of SOL",
      blocks: [
        {
          kind: "p",
          text: "Every Solana transaction needs a little SOL for network fees — including the transaction that would let you buy more SOL. If you do not have enough, we can cover the network fee for you and take repayment from the tokens already in that transaction. Because the repayment has to be fixed before the transaction runs while the network fee itself is still moving, it includes a small margin over what we advance."
        },
        {
          kind: "callout",
          text: "This is offered only when your SOL balance cannot cover the transaction. If you have enough SOL, you pay the network directly and no margin applies.",
        },
      ],
    },
    {
      n: 5,
      title: "What We Never Charge",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Deposits and withdrawals.** The wallet is yours; moving funds in or out is an ordinary blockchain transfer.",
            "**Account, holding, or inactivity fees.** There is no account to begin with.",
            "**Subscriptions or unlock fees.** Every feature in the App is available to everyone.",
            "**Anything for leaving.** Your recovery phrase restores your wallet in other software at any time, at no cost and without asking us.",
          ],
        },
      ],
    },
    {
      n: 6,
      title: "Questions",
      blocks: [
        {
          kind: "p",
          text: `If a fee on one of your transactions does not look right, write to ${LEGAL_CONTACT_EMAIL} with the transaction and we will look into it.`,
        },
        {
          kind: "p",
          text: `The contractual terms governing fees are in Section 5 of our [Terms of Service](${TERMS_URL}).`,
        },
      ],
    },
  ],
};
