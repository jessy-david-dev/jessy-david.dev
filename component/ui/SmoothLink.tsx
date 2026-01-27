"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface SmoothLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmoothLink({
  href,
  children,
  className,
  onClick,
}: SmoothLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Si on clique sur "/" (Accueil)
    if (href === "/") {
      if (pathname === "/") {
        // On est déjà sur l'accueil, scroll vers le haut
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // On est sur une autre page, naviguer vers l'accueil
        router.push("/");
      }
      onClick?.();
      return;
    }

    // Si c'est une ancre (#section)
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");

      if (pathname === "/") {
        // On est sur l'accueil, smooth scroll vers la section
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // On est sur une autre page, naviguer vers l'accueil + ancre
        router.push(`/${href}`);
      }
      onClick?.();
      return;
    }

    // Sinon, navigation normale
    router.push(href);
    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
