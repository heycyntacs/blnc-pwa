import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

export default function DashboardHeader() {
  return (
    <header className="p-2">
      <SidebarTrigger />
    </header>
  );
}
