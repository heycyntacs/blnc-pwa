import { AppSidebar } from "@/components/common/app-sidebar";
import DashboardHeader from "@/components/common/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
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
