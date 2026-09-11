import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col p-3 md:m-auto md:w-1/2"
      >
        <h1 className="p-11 text-center text-2xl">CLIENT TRACKER</h1>
        <main className="flex-1">{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
