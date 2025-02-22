import "./globals.scss";
import { Nunito } from "next/font/google";

import MainContainer from "@/app/components/layout/MainContainer";

const poppins = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Siboli | Portfolio",
  description: "This is my personal portfolio.",
  author: "André Siboli",
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
      <body className={poppins.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
