import { type ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  noWidthLimit?: boolean;
};

function SectionContainer({
  id,
  children,
  className,
  noWidthLimit,
}: SectionContainerProps) {
  return (
    <section id={id} className={`${className}`}>
      <div
        className={`${
          noWidthLimit ? "" : "container mx-auto 2xl:max-w-[1280px]"
        } relative`}
      >
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;
