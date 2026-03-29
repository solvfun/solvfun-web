import Image from "next/image";

interface SolvfunLogoProps {
  iconSize?: number;
  textClass?: string;
}

export default function SolvfunLogo({
  iconSize = 28,
  textClass = "text-xl",
}: SolvfunLogoProps) {
  return (
    <span
      className={`font-[family-name:var(--font-brand)] ${textClass} font-bold text-[#E7E4DC] inline-flex items-baseline group`}
    >
      Sol
      <span className="relative inline-flex self-center ml-[-5.66px] mr-[-4px]">
        {/* Glow behind the V */}
        <span
          className="absolute inset-0 blur-md rounded-full bg-brand/50 animate-[logo-pulse_2.5s_ease-in-out_infinite]"
          aria-hidden
        />
        <Image
          src="/logo-v.png"
          alt="V"
          width={iconSize}
          height={iconSize}
          className="relative -top-[1px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
        />
      </span>
      fun
    </span>
  );
}
