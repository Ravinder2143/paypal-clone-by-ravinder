import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Fotter from "./components/Footer";
export const metadata: Metadata = {
  title: "PayPal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        <Navbar/>
        {children}
        <Fotter/>
      </body>
    </html>
  );
}
