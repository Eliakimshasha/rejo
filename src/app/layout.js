"use client";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { usePathname } from "next/navigation";
import { metadata } from "../../components/Metadata";

<metadata />;

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body>
        {!path.startsWith("/payments") && <Header />}
        <div className={` ${path.startsWith("/payments")? "mt-0":"mt-14"} bg-white `}>{children}</div>
        {!path.startsWith("/routes") && !path.startsWith("/payments") && (
          <Footer />
        )}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
