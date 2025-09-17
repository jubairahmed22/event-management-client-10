import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import NavCart from "@/components/shared/NavCart";
import Footer from "@/components/shared/Footer";
import NavbarDynamic from "@/components/shared/NavbarDynamic";
import NavbarDynamicSidebar from "@/components/shared/NavbarDynamicSidebar";
import { FilterProvider } from "./contexts/FilterContext";
import NavbarDynamicSidebarAllProduct from "@/components/shared/NavbarDynamicSidebarAllProduct";
import NavbarMenu from "@/components/shared/NavbarMenu";
import Script from "next/script";
import NavbarWhatsapp from "@/components/shared/NavbarWhatsapp";

export const metadata: Metadata = {
  title: "My Color Events",
  openGraph: {
    title: "My Color Events",
    images: [
      {
        url: "https://i.ibb.co/m5k121jS/Screenshot-2025-09-04-at-2-14-45-PM-removebg-preview.png",
        width: 800,
        height: 600,
        alt: "My Color Events",
      },
    ],
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
    <head>
      {/* Add the Google Fonts link here */}
       <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9JN7TW10E6`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9JN7TW10E6');
          `}
        </Script>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@400;700&family=Roboto:wght@400;700&family=Space+Mono&family=Montserrat&family=Courier+Prime&family=Poppins:wght@400;700&family=Raleway:wght@400;700&family=Nunito+Sans:wght@400;700&family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&family=Abril+Fatface&family=Pacifico&display=swap"
      />
    </head>
    <body>
      {/* <Navbar /> */}
      {/* <NavbarDynamic></NavbarDynamic> */}
      <FilterProvider>
      {/* <NavbarDynamicSidebar></NavbarDynamicSidebar> */}
      {/* <NavbarDynamicSidebarAllProduct></NavbarDynamicSidebarAllProduct> */}
      <NavbarWhatsapp></NavbarWhatsapp>
      <NavbarMenu></NavbarMenu>
      <NavCart />
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
      </FilterProvider>
      
    </body>
  </html>
  );
}
