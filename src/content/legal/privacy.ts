import type { LegalDoc } from "@/components/LegalDocument";
import { LEGAL_CONTACT_EMAIL, LEGAL_ENTITY, TERMS_URL } from "./shared";

/**
 * 隐私政策。**每一句事实陈述都必须回 app 代码核实**——已经踩过三次
 * 「文本超前于代码」：①本地日志说「不传输任何地方」（实际 logger.e/w 转发
 * Crashlytics）；②说「绝不把地址发给分析服务商」（crashlytics_log_output 的红线
 * 明写公开链上数据允许上报）；③云备份写死 Google Drive（iOS 实际走 iCloud）；
 * ④曾写「你复制的地址和交易 ID 会自动清除」——`SensitiveClipboard` 只被
 * 助记词页与私钥页调用，地址/交易 ID 走普通 `Clipboard.setData` 不清除
 * （该段已整段删除：剪贴板内容不传输，本就不是 GDPR 义务，写它只有风险没有收益）。
 *
 * ⚠️ ④是**压缩措辞时自己写坏的**——原句有「敏感的」这个限定词，为了利落删掉，
 * 含混的话就变成了明确的假话。**改写时删限定词 = 制造不实陈述**，务必回代码复核。
 *
 * 写法两条铁律：
 * - **免责句可以绝对，承诺句一律留余地。** 私钥不离设备 = 真的，保持绝对；
 *   自己的保留期/算法/安全措施/埋点字段 = 一律写判定标准或类别，别写死数字，
 *   否则每次调参政策就失真。
 * - 🔴 **按类别披露，不点名供应商、不写实现细节。** 行情数据源与接口指纹是
 *   商业机密；法律只要求 categories of recipients（GDPR Art.13 / CCPA）。
 *   尤其不许写「被限流时改走我方转发」这类句子——那是向上游自证，封号级风险。
 *
 * ⚠️ **§4 里「你的设备无法直接连上某个提供方时也可能代为转发」那半句不许删**
 * （2026-09-02 用户两次提出想删，已解释）。它对应 `jup_proxy.js` 的真实转发路径：
 * 用户 IP 与查询内容到达我方服务器，这是独立于代付的一条数据流（代付只在余额
 * 不足时发生、传待签交易；转发在查行情时就发生、传查询请求），现有句子覆盖不到。
 * 措辞已经压到最低调：主语是「你的设备」，只说连不上、不说为什么连不上。
 * **要删只能连功能一起删**——文本与代码必须一致，二选一。
 *
 * ⚠️ 2026-09-01 按用户要求从 17 节砍到 14 节。删掉的是非义务的教育性内容
 * （公开链科普独立成节、剪贴板细节、重复的安慰话）；**剩下每一节都对应一条
 * GDPR/CCPA 明文义务或 Play 审核项，别再往下砍。** 交叉引用已随重编号逐条核对。
 */
export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  effectiveDate: "September 2, 2026",
  intro: [
    {
      kind: "p",
      text: `Solvfun ("the App", "we", "us") is a self-custodial Solana wallet, a product of ${LEGAL_ENTITY}. This policy explains what the App handles, what never leaves your device, and what third parties process when you use it.`,
    },
    { kind: "p", text: `Contact: ${LEGAL_CONTACT_EMAIL}` },
  ],
  sections: [
    {
      n: 1,
      title: "The Short Version",
      blocks: [
        {
          kind: "ul",
          items: [
            "**We never have your keys.** Your private keys, recovery phrase, wallet PIN, and backup password are generated and held only on your device. We cannot receive, access, or recover them.",
            "**No accounts.** There is no sign-up and no KYC. We do not know your name, and we do not sell personal information.",
            "**Your wallet does not depend on us.** Your recovery phrase restores it in other wallet software at any time, whether or not our services are running.",
            "Three things do reach infrastructure we control: messages you send us through in-app feedback (Section 6), short-lived records created when we cover a transaction's network fee for you (Section 4), and pseudonymous analytics and crash reports (Section 5).",
            "Third-party services necessarily see your **IP address** and the **public wallet addresses** you query (Section 3).",
          ],
        },
      ],
    },
    {
      n: 2,
      title: "What Stays on Your Device",
      blocks: [
        {
          kind: "p",
          text: "The App keeps what it needs **on your device** rather than on our servers: your wallet key material, stored encrypted; your settings; and whatever it caches to stay fast. It also keeps diagnostic logs you can view inside the App — these stay local, except that error and warning entries go to our crash-reporting provider so failures can be diagnosed (Section 5).",
        },
        {
          kind: "callout",
          text: "Uninstalling deletes this local data. **If you have not backed up your recovery phrase, uninstalling permanently destroys access to your wallet. We cannot recover it for you.**",
        },
      ],
    },
    {
      n: 3,
      title: "Third-Party Services",
      blocks: [
        {
          kind: "p",
          text: "To show market data and execute trades, the App connects directly from your device to third-party providers. Like any internet service, they receive your **IP address**, standard request metadata, and the content of the request — typically public wallet addresses or token identifiers. We do not send them your identity; we never have it.",
        },
        {
          kind: "table",
          head: ["Category", "What it sees"],
          rows: [
            ["Blockchain nodes — reading on-chain data, broadcasting your signed transactions", "IP, wallet address(es), signed transactions"],
            ["Market-data and trading providers — prices, charts, token information, quotes and routing", "IP, wallet address(es), tokens and trade parameters"],
            ["Google (Firebase) — notifications, remote configuration, analytics and crash reporting (Section 5)", "IP, device and app information, a random app-instance identifier"],
            ["Our support platform — in-app feedback threads (Section 6)", "IP, the message and screenshots you send"],
            ["Hosting and edge-network providers — our website, app downloads, and the service in Section 4", "IP, standard request metadata"],
          ],
        },
        {
          kind: "p",
          text: "Transactions are signed **on your device**; only the signed transaction is transmitted, and it is destined for the public blockchain anyway. Solana is a public, permanent ledger: your addresses, balances, and transaction history are visible to anyone by design, independently of this App, and nothing in this policy can apply to data recorded on it.",
        },
        {
          kind: "p",
          text: "These providers process data under their own privacy policies.",
        },
      ],
    },
    {
      n: 4,
      title: "Our Own Services",
      blocks: [
        {
          kind: "p",
          text: `**Paying network fees for you.** If you do not hold enough SOL for a transaction's network fee, the App can ask a service we operate to co-sign it and cover that fee, which you repay in the same transaction ([Terms of Service](${TERMS_URL}), Section 5); the same service may relay a request when your device cannot reach a provider directly. Either way it sees your **IP address** and the request involved — a public wallet address, or the transaction to be co-signed — but **never your private key**, which cannot leave your device. It keeps short-lived records of this, tied to a wallet address or an IP address, to prevent abuse and to account for the fees it covers; they expire **within days** and are never shared or used to profile you.`,
        },
        {
          kind: "p",
          text: "**App downloads.** If you install or update the App from our website rather than an app store, our download service receives your IP address and standard request metadata, as any web server does.",
        },
        {
          kind: "p",
          text: "Neither service creates an account for you.",
        },
      ],
    },
    {
      n: 5,
      title: "Notifications, Analytics and Crash Reporting",
      blocks: [
        {
          kind: "p",
          text: "The App uses Firebase (Google) to deliver push notifications, to fetch operational settings so we can respond to outages without shipping a new version, and to collect pseudonymous usage analytics and crash reports. Each of these transmits your IP address and basic device and app information to Google.",
        },
        {
          kind: "p",
          text: "The analytics categories are: which screens and features you use; your app version, device and operating system; how the App was installed; whether an action such as a trade succeeded or why it failed, with the token it concerned and its approximate value; and, for crashes, stack traces and device state.",
        },
        {
          kind: "p",
          text: "This is tied to a **random identifier generated when you install the App**, not to your identity. **The App does not use your device's advertising ID** or any identifier that follows you across other apps. Analytics events do not carry your wallet addresses, balances, or holdings, and we do not profile you. Diagnostic messages sent with a crash or error report may, however, contain **public blockchain identifiers** — a wallet address, transaction signature, token address, or amount — because that is what makes a failure diagnosable. Such data is already public on the Solana ledger (Section 3), and we use it only to fix the failure.",
        },
        {
          kind: "callout",
          text: "**Your private keys and recovery phrase are never sent anywhere, in any report.** Any diagnostic message mentioning key material is discarded in full before transmission. The App has no in-app switch to turn analytics off; uninstalling stops collection, and reinstalling generates a new random identifier not linked to the previous one.",
        },
      ],
    },
    {
      n: 6,
      title: "In-App Feedback",
      blocks: [
        {
          kind: "p",
          text: 'The App has an optional "Help & feedback" screen where you can message the developer. Threads are stored on a support platform we control, are private to you and us, and are never published.',
        },
        {
          kind: "ul",
          items: [
            "**Stored:** what you write, screenshots you attach, our replies, and basic diagnostic context (app version, build, platform, OS, device model, language) with the random identifier from Section 5.",
            "**Not attached:** your wallet addresses, balances, holdings, keys or recovery phrase. Nothing about your wallet is added automatically, and threads are not linked to any blockchain identity. What you choose to send is up to you — a screenshot may show balances or addresses, so check before sending, and never paste your recovery phrase.",
            "**Identity:** submitting creates an anonymous, credential-less session so only your device can read your own threads. No email, no password.",
            "**Retention:** we keep a thread only while it is useful for support and product decisions, then delete it. You can ask us to delete yours at any time.",
          ],
        },
      ],
    },
    {
      n: 7,
      title: "Optional Cloud Backup",
      blocks: [
        {
          kind: "p",
          text: "If you back up your recovery phrase, it is **encrypted on your device** with a key derived from a password you choose, using current industry-standard algorithms that we may update over time, **before** it is uploaded. It goes to the app-private area of **your own cloud storage account** — which provider depends on your device and on what the App supports — not to our servers. The provider's sign-in is used solely to reach that area; the App does not read your other files, contacts, or messages, and you can delete backups from inside the App or through your provider's settings.",
        },
        {
          kind: "p",
          text: "We never see your backup, your backup password, or your cloud account credentials. Your cloud provider processes this under its own privacy policy.",
        },
      ],
    },
    {
      n: 8,
      title: "Camera and Photos",
      blocks: [
        {
          kind: "p",
          text: "The camera is used only to scan QR codes, on-device. Photos are read or written only when you pick or save a specific image; there is no gallery scanning, and the App requests no photo-library permission.",
        },
      ],
    },
    {
      n: 9,
      title: "Retention and Deletion",
      blocks: [
        {
          kind: "ul",
          items: [
            "**Records from the service in Section 4:** expire automatically within days; we do not extend or archive them.",
            `**Feedback threads:** kept only while useful, then deleted. Ask us at ${LEGAL_CONTACT_EMAIL} to delete yours sooner; write from within the thread so we can identify it, since we have no other way to link it to you.`,
            "**Analytics and crash data:** retained by Google for a limited period set in its console, currently months rather than years.",
            "**Local data and cloud backups:** delete by uninstalling, or through your cloud provider. Uninstalling also discards your anonymous feedback session, so you lose access to past threads.",
            "**Blockchain data:** public and permanent; neither we nor anyone else can delete it.",
            "**If we stop operating:** nothing you need in order to keep your assets is held by us.",
          ],
        },
      ],
    },
    {
      n: 10,
      title: "Your Rights (GDPR, UK GDPR, CCPA and similar laws)",
      blocks: [
        {
          kind: "p",
          text: `We hold very little about you, so most rights (access, rectification, erasure, portability) apply to data already under your direct control — on your device or in your own cloud account. For what we do hold: write to ${LEGAL_CONTACT_EMAIL} about **feedback threads** and we will provide a copy or delete them. The **records in Section 4** are short-lived and keyed to a blockchain address, and **analytics data** to a random install identifier — we have no mechanism to look you up in either. Requests about data held by third-party providers, including Google, should go to them.`,
        },
        {
          kind: "p",
          text: "**Legal basis (GDPR).** Where GDPR applies, processing is based on performance of the service you request (Art. 6(1)(b)) and our legitimate interest in keeping the App secure, functional, and free from abuse (Art. 6(1)(f)).",
        },
        {
          kind: "p",
          text: '**No sale, no targeted advertising, no profiling.** We do not sell or share your personal information, do not use it for targeted or cross-context behavioral advertising, and do not use it for profiling or automated decisions producing legal or similarly significant effects. U.S. state privacy laws give you the right to opt out of each of these — here there is nothing to opt out of. No common standard yet governs "Do Not Track" signals, and the App does not respond to them.',
        },
        {
          kind: "p",
          text: `You may contact us at ${LEGAL_CONTACT_EMAIL} with any privacy question, and you have the right to lodge a complaint with your local data protection authority.`,
        },
      ],
    },
    {
      n: 11,
      title: "Children",
      blocks: [
        {
          kind: "p",
          text: "The App is not directed at children and is intended only for users aged 18 or older. We do not knowingly collect information from children.",
        },
      ],
    },
    {
      n: 12,
      title: "Security",
      blocks: [
        {
          kind: "p",
          text: "Key material is stored using the platform's hardware-backed keystore where the device provides it, sensitive screens are configured to block screenshots and recording, and network connections are made over TLS. These measures are appropriate to the risk, but no security measure is absolute.",
        },
        {
          kind: "callout",
          text: "Protect your device, your PIN, and above all your recovery phrase — anyone who has it controls your funds, and we can never restore it for you.",
        },
      ],
    },
    {
      n: 13,
      title: "International Data Transfers",
      blocks: [
        {
          kind: "p",
          text: "We are based in the United States and the services above operate globally, so the limited data described here — principally your IP address and public wallet addresses — is processed in the United States and may be processed elsewhere, under data protection laws that may differ from those of your own country. Where data leaves the European Economic Area, the United Kingdom, or Switzerland, the providers we rely on do so under the European Commission's Standard Contractual Clauses or another lawful transfer mechanism.",
        },
      ],
    },
    {
      n: 14,
      title: "Changes and Contact",
      blocks: [
        {
          kind: "p",
          text: "We will post any changes on this page and update the effective date above; material changes will be highlighted in the App's release notes.",
        },
        { kind: "p", text: `**Solvfun** is a product of ${LEGAL_ENTITY}, a Wyoming limited liability company. Email: ${LEGAL_CONTACT_EMAIL}` },
      ],
    },
  ],
};
