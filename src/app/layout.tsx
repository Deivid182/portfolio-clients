import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: "David PM",
  description: "¿Necesitas un sitio web personalizado? Soy Desarrollador Web Full Stack ¡Conoce mi trabajo!",
  icons: {
    icon: '/code.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-ellipse-first antialiased bg-[#151515]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
