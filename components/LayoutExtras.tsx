"use client";

import { usePathname } from "next/navigation";
import ReadySection from "@/components/ReadySection";

export default function LayoutExtras() {
  const pathname = usePathname();
  if (pathname === "/customised") return null;
  return <ReadySection />;
}
