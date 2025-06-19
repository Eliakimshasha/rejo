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
        {!["authentication", "payments"].some((route) =>
          path.startsWith(`/${route}`)
        ) && <Header />}
        <div
          className={` ${
            ["authentication", "payments"].some((route) =>
          path.startsWith(`/${route}`)
        ) ? "mt-0" : "mt-14"
          } bg-white `}
        >
          {children}
        </div>
        {!["authentication", "payments", "routes"].some((route) =>
          path.startsWith(`/${route}`)
        ) &&
          <Footer />
        }
        {/* <Footer /> */}
      </body>
    </html>
  );
}
