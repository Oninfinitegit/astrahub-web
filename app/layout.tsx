import { PlayerProvider } from "@/modules/player/PlayerProvider";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Astrahub",
  description: "Revolutionlize music with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <PlayerProvider>{children}</PlayerProvider>
      </body>
    </html>
  );
}
