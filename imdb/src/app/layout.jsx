import "./globals.css";
import Providers from "./Providers";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Next.js로 IMDB 사이트 구현",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
