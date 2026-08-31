import { siteConfig } from "@/config/site";

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M17.523 2.226a.75.75 0 010 1.06l-1.97 1.97A7.462 7.462 0 0119.5 11.5h-15a7.462 7.462 0 013.947-6.244l-1.97-1.97a.75.75 0 011.06-1.06l2.19 2.19a7.431 7.431 0 014.546 0l2.19-2.19a.75.75 0 011.06 0zM7 9.5a1 1 0 112 0 1 1 0 01-2 0zm8 0a1 1 0 112 0 1 1 0 01-2 0zM4.5 12.5A1.5 1.5 0 003 14v4a1.5 1.5 0 003 0v-4a1.5 1.5 0 00-1.5-1.5zm15 0a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 003 0v-4a1.5 1.5 0 00-1.5-1.5zM6 12.5v7a2 2 0 002 2h1v2.5a1.5 1.5 0 003 0V21.5h0v2.5a1.5 1.5 0 003 0V21.5h1a2 2 0 002-2v-7H6z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 9.479l2.71-2.712 5.007 2.846a1.012 1.012 0 010 1.768l-5.007 2.846-2.71-2.712L14.5 12l-.001-1.707zM5.025.443l9.352 5.318-2.56 2.56L5.025.443zm0 23.114L11.817 15.68l2.56 2.56L5.025 23.557z" />
  </svg>
);

const buttonBase =
  "group relative flex flex-1 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl px-6 py-4 font-[family-name:var(--font-ui)] text-lg font-semibold transition-all duration-300 hover:scale-[1.02]";

const variantClass = {
  filled: "bg-brand text-text-on-brand",
  outline: "border border-brand bg-transparent text-brand",
} as const;

type Variant = keyof typeof variantClass;

function DownloadLinkButton({
  icon,
  label,
  href,
  variant,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  variant: Variant;
}) {
  return (
    <a
      href={href}
      className={`${buttonBase} ${variantClass[variant]}`}
      rel="noopener"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ComingSoonButton({
  icon,
  label,
  variant,
}: {
  icon: React.ReactNode;
  label: string;
  variant: Variant;
}) {
  return (
    <div className={`${buttonBase} ${variantClass[variant]}`}>
      {/* Default content */}
      <div className="flex items-center gap-3 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
        {icon}
        <span>{label}</span>
      </div>
      {/* Coming Soon overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="text-base font-semibold">Coming Soon</span>
      </div>
    </div>
  );
}

export default function DownloadButtons() {
  const { apk, googlePlay } = siteConfig.downloads;

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
      {apk.enabled ? (
        <DownloadLinkButton
          icon={<AndroidIcon />}
          label={apk.label}
          href={apk.href}
          variant="filled"
        />
      ) : (
        <ComingSoonButton
          icon={<AndroidIcon />}
          label={apk.label}
          variant="filled"
        />
      )}
      {googlePlay.enabled ? (
        <DownloadLinkButton
          icon={<GooglePlayIcon />}
          label={googlePlay.label}
          href={googlePlay.href}
          variant="outline"
        />
      ) : (
        <ComingSoonButton
          icon={<GooglePlayIcon />}
          label={googlePlay.label}
          variant="outline"
        />
      )}
    </div>
  );
}
