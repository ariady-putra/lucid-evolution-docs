"use client";

import { useEffect, useState } from "react";
import { useTheme } from "nextra-theme-docs";
import Image from "next/image";

export default function Logo() {
  const { resolvedTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(() => false);
  // setMounted to circumvent SSR Hydration issue
  useEffect(() => {
    setMounted(() => true);
  }, []);

  return <Image
    src={
      !mounted ? "/lucid-evolution-docs/al-logo.png" :
        resolvedTheme === "light" ? "/lucid-evolution-docs/al-logo-dark.png" :
          resolvedTheme === "dark" ? "/lucid-evolution-docs/al-logo.png" :
            systemTheme === "light" ? "/lucid-evolution-docs/al-logo-dark.png" :
              "/lucid-evolution-docs/al-logo.png"}
    alt="Anastasia Labs Logo"
    className="mr-4"
    width="200"
    height="46"
  />;
}
