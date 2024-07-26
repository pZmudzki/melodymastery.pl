import { type ReactNode } from "react";

function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <h2 className={`${className} font-bold tracking-[0.3em] text-2xl`}>
      {children}
    </h2>
  );
}

export default SectionLabel;
