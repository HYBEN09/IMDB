import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import { Header } from "@/components/Header/Header   ";

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
          {/* Navbar */}
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
