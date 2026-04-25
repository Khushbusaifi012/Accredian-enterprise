import type { PropsWithChildren } from "react";

export function SectionHeading({
  title,
  subtitle,
  children,
  align = "center",
}: PropsWithChildren<{
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}>) {
  const a = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${a}`}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}

