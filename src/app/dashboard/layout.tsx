import { AppSidebar } from "@/components/common/app-sidebar";
import DashboardHeader from "@/components/common/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return redirect("/");

  return (
    <SidebarProvider className="bg-sidebar">
      <AppSidebar />
      <SidebarInset className="md:rounded-xl md:m-4">
        <DashboardHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
