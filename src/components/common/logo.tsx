import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return <span className={cn("font-outfit font-bold", className)}>blnc</span>;
}
