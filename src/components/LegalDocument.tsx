import { Fragment, type ReactNode } from "react";

/**
 * 法律文本的排版块。刻意做得很窄——只覆盖隐私政策与服务条款真正用到的
 * 五种形态，不做通用 markdown 渲染器。
 */
export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  /** 需要读者停下来看的段落（自托管、不可逆、风险自担这类）。 */
  | { kind: "callout"; text: string }
  /** 免责/责任上限那种整段大写的法律条款，用小字号避免大写字母糊成一片。 */
  | { kind: "legalese"; text: string };

export type LegalSection = {
  /** 章节号。跨文档引用（"see Section 8"）靠它，改动时两边要一起改。 */
  n: number;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  effectiveDate: string;
  /** 日期前的标签。法律文本用默认的 "Effective date"，费率页用 "Last updated"。 */
  dateLabel?: string;
  /** 正文前的引言，不带章节号。 */
  intro: LegalBlock[];
  sections: LegalSection[];
};

/**
 * 处理三种行内标记，都不值得为之引一个 markdown 依赖：
 *
 * - `**加粗**`——法律文本里加粗有语义（"never"、"irreversible"），不能丢；
 * - `[文字](url)`——**正文里一律不要出现裸 URL**。读者要的是「这里可以点」，
 *   不是一串 https://。跨文档引用（条款↔隐私↔费率）全走这个；
 * - 裸邮箱——自动转 mailto。争议通知地址与数据权利行使地址都是它，
 *   让人一键写信比让人复制粘贴更可能真的收到信。
 *
 * ⚠️ 指向本页自己的链接**不要写**——读者已经在这一页了，直接说「本政策 / 本条款」。
 */
function renderInline(text: string): ReactNode {
  const pattern =
    /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|[\w.+-]+@[\w-]+\.[\w.]+)/g;
  return text.split(pattern).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      return (
        <a key={i} href={link[2]} className={linkClass}>
          {link[1]}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} className={linkClass}>
          {part}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const linkClass =
  "text-brand underline underline-offset-2 decoration-brand/40 transition-colors hover:text-brand-hover hover:decoration-brand-hover";

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="mb-4 last:mb-0">{renderInline(block.text)}</p>;

    case "ul":
      return (
        <ul className="mb-4 list-disc space-y-2 pl-5 last:mb-0 marker:text-text-tertiary">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );

    case "table":
      // 表格在窄屏放不下，让它自己横向滚动，而不是把整页撑出横向滚动条。
      return (
        <div className="mb-4 overflow-x-auto last:mb-0">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border-default">
                {block.head.map((h, i) => (
                  <th
                    key={i}
                    className="px-3 py-2.5 text-left font-semibold text-text-primary first:pl-0 last:pr-0"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-border-subtle last:border-0">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-3 py-2.5 align-top first:pl-0 last:pr-0"
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout":
      return (
        <div className="mb-4 rounded-xl border border-border-default bg-bg-card px-4 py-3.5 last:mb-0">
          <p className="text-text-primary">{renderInline(block.text)}</p>
        </div>
      );

    case "legalese":
      return (
        <p className="mb-4 text-sm leading-relaxed text-text-secondary last:mb-0">
          {renderInline(block.text)}
        </p>
      );
  }
}

export default function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="heading-xl mb-4 text-4xl">{doc.title}</h1>
      <p className="mb-10 text-sm text-text-tertiary">
        {doc.dateLabel ?? "Effective date"}: {doc.effectiveDate}
      </p>

      <div className="text-text-secondary leading-relaxed">
        <div className="mb-12">
          {doc.intro.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="space-y-10">
          {doc.sections.map((section) => (
            <section key={section.n} id={`section-${section.n}`}>
              <h2 className="heading-md mb-3 text-xl text-text-primary">
                {section.n}. {section.title}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
