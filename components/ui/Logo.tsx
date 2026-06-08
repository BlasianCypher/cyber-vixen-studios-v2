import Image from "next/image";

export function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const textColor = variant === "dark" ? "text-white" : "text-black";

  return (
    <div className={`group flex items-center gap-3 ${className}`}>
      <Image
        src="/images/cv-logo.png"
        alt=""
        width={96}
        height={96}
        aria-hidden="true"
        priority
        sizes="(min-width: 768px) 48px, 42px"
        className="h-[42px] w-[42px] shrink-0 rounded-xl object-contain shadow-[0_8px_22px_-14px_rgba(17,17,17,0.45)] transition-transform duration-300 ease-out group-hover:scale-105 md:h-12 md:w-12"
      />
      <span className={`font-display text-sm font-semibold tracking-tight md:text-[15px] ${textColor}`}>
        Cyber Vixen Studios
      </span>
    </div>
  );
}
