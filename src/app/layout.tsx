import "@/styles/pages/globals.scss";
import { Nunito } from "next/font/google";
import { Metadata } from "next";

import MainContainer from "@/components/layout/MainContainer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Siboli | Portfolio",
  description: "This is my personal portfolio.",
  authors: [{ name: "André Siboli", url: "https://github.com/AndreSiboli" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${nunito.variable}`}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
