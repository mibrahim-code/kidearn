import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import ExternalScripts from "./externalscripts/page";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../public/css/owl-theme-fixed.css';



import '../public/css/all.min.css';
import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';
import '../public/css/bootstrap.css';
import '../public/css/bootstrap-select.min.css';
import '../public/css/jarallax.css';
import '../public/css/jquery.magnific-popup.css';
import '../public/css/jquery-ui.css';
import '../public/css/kidearn-custom-rtl.css';
import '../public/css/kidearn-rtl.css';
import '../public/css/kidearn-toolbar.css';
import '../public/css/nouislider.min.css';
import '../public/css/nouislider.pips.css';
import '../public/css/owl.carousel.min.css';
import '../public/css/owl.theme.default.min.css';
import '../public/css/style.css';
import '../public/css/tiny-slider.css';
import '../public/css/headerStyles.css';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home RTL || Kidearn || HTML Template For Kindergarten & Baby Care",
  description:
    "Kidearn is a modern HTML Template for kindergarten, preschool, nursery and primary schools. The template perfectly fits for child care, babysitting, education and children related schools, websites and businesses.",
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  // manifest: "/assets/images/favicons/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
        <head>
         <link
          rel="stylesheet"
          href="/owl-carousel/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/owl-carousel/owl.theme.default.min.css"
        />
        </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
      
        <Header />
        {children}
        <Footer />
        <ExternalScripts />
      </body>
    </html>
  );
}
