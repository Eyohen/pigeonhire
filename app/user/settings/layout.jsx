import SettingsNavigation from "@/app/components/settingsNavigation";
import Image from "next/image";

export default function SettingsLayout({ children }) {
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-6 items-start">
      <SettingsNavigation />

      <div>
        {children}
      </div>
    </div>
  );
}
