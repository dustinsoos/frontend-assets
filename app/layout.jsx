import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { StrictMode } from "react";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Assets",
  description:
    "Empowering Frontend Developers with Essential Resources for a Journey of Coding Excellence",
  icons: {
    icon: ["/favicons/favicon-32x32.png"],
    apple: ["/favicons/apple-touch-icon.png"],
    androidSmall: ["/favicons/android-chrome-192x192.png"],
    androidBig: ["/favicons/android-chrome-512x512.png"],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <StrictMode>
          <Navbar />
          {children}
          <Footer />
        </StrictMode>
      </body>
    </html>
  );
}
