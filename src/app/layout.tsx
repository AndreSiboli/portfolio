import "@/styles/globals.scss";
import { Nunito } from "next/font/google";

import MainContainer from "@/components/layout/MainContainer";

const nunito = Nunito({
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
      <body className={nunito.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
