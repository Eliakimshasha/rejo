'use client'
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { usePathname } from "next/navigation";
import { metadata } from "../../components/Metadata";



<metadata/>

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mt-14 bg-white ">
          {children}
        </div>
        {!path.startsWith('/routes') && (<Footer />) }
        
      </body>

    </html>
  );
}
