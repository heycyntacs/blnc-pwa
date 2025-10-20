"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface AuthButtonProps {
  provider: {
    provider: string;
    name: string;
  };
  className?: string;
}

export default function AuthButton({ provider, className }: AuthButtonProps) {
  const { data, isPending } = authClient.useSession();

  const handleLogin = () => {
    authClient.signIn.social({
      provider: provider.provider,
      callbackURL: "/dashboard",
    });
  };

  const handleLogout = () => {
    authClient.signOut();
  };

  if (!data) {
    return (
      <Button
        onClick={handleLogin}
        disabled={isPending}
        className={cn("gap-1", className)}
      >
        {isPending && <Loader2 className="animate-spin" />}
        Sign in with<span className="capitalize">{provider.name}</span>
      </Button>
    );
  }

  return (
    <Button onClick={handleLogout} variant="secondary">
      Sign out
    </Button>
  );
}
