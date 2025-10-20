"use client";

import React from "react";
import AuthButton from "./auth-button";
import { AUTH_PROVIDERS } from "@/constants";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

export default function Header() {
  const { data: session } = authClient.useSession();
  const pathname = usePathname();

  if (pathname !== "/") return;

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <Logo />
      </div>
      {!session ? (
        <AuthButton provider={AUTH_PROVIDERS.GOOGLE} />
      ) : pathname === "/" ? (
        <Button asChild>
          <Link href="/dashboard">Go to dashboard</Link>
        </Button>
      ) : null}
    </nav>
  );
}
