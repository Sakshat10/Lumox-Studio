import SmoothScroller from "@/components/shared/SmoothScroller";
import StudioNavigation from "@/components/studio/shared/StudioNavigation";
import StudioSidebar from "@/components/studio/shared/StudioSidebar";
import Footer from "@/sections/home/Footer";

import { Inter, Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#101010] ${inter.className} ${josefin.className} text-white">
      <SmoothScroller />

      <div className="hidden lg:block">
        <StudioNavigation />

        <div className="flex">
          <div className="w-1/5 h-screen sticky top-0 left-0">
            <StudioSidebar className="w-full h-full" />
          </div>
          <div className="w-full">
            {children}
            <Footer />
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        {children}
        <StudioNavigation />
        <Footer />
      </div>
    </main>
  );
}
