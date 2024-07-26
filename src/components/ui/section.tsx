import { type ReactNode } from "react";

type sectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

function section({ id, children, className }: sectionProps) {
  return (
    <section id={id} className={`container mx-auto ${className}`}>
      {children}
    </section>
  );
}

export default section;
