"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [pathname, searchParams]);
}
