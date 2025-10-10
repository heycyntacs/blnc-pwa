"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
export default function GoogleButton() {
  const { data, isPending, error } = authClient.useSession();

  const handleClick = () => {
    authClient.signIn.social({
      provider: "google",
    });
  };

  const handleLogout = () => {
    authClient.signOut();
  };

  if (!data) {
    return (
      <Button onClick={handleClick} disabled={isPending}>
        {isPending && <Loader2 className="animate-spin" />}
        Sign in with Google
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
