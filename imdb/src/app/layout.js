import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Next.js로 IMDB 사이트 구현",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
