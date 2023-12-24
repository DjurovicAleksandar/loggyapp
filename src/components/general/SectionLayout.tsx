import { ReactNode } from "react";

interface SectionLayoutProps {
  className?: string;
  children: ReactNode;
}

export default function SectionLayout({
  className,
  children,
}: SectionLayoutProps) {
  return (
    <section
      className={`w-full px-padXMobile md:px-padX py-padYMobile md:py-padY ${className}`}
    >
      {children}
    </section>
  );
}
