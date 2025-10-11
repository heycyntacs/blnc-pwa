"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

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
    <div className="flex justify-center flex-col gap-4">
      <div className="flex items-center">Hello, {data.user.name}!</div>
      <Button onClick={handleLogout}>Sign out</Button>
    </div>
  );
}
