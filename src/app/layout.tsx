// "use client";
import NextTopLoader from "nextjs-toploader";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar/Navbar";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
// import { headers } from "next/headers";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumox Studio",
  description:
    "Welcome to LUMOX, the first project on the market that provides games in every available mode: educational, story, logic, adventure, sports, strategy, simulation and arcade. All scheduled games to launch are in multiplayer mode to bring the global gaming community together in one place!",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const initialState = cookieToInitialState(config, headers().get("cookie"));
  // initialState={initialState}
  return (
    <html lang="en">
      <body className={`${inter.className} ${josefin.className} relative`}>
        <Web3ModalProvider>
          <Toaster position="top-center" />
          <NextTopLoader
            color="#F808C1"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #F808C1,0 0 5px #F808C1"
            zIndex={1600}
            //showAtBottom={false}
          />
          <Navbar />
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
