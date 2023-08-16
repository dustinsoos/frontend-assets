import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar/Navbar";
import { StrictMode } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StrictMode>
          <Navbar />
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
