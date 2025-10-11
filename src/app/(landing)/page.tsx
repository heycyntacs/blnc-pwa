import { AUTH_PROVIDERS } from "@/constants";
import AuthButton from "./_components/auth-button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4 flex-col">
      <h1 className="text-3xl font-bold">Pera</h1>
      <AuthButton provider={AUTH_PROVIDERS.GOOGLE} />
    </div>
  );
}
