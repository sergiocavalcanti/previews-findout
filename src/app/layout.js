import { Numans, Raleway, } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "@/components/other/header";
import Footer from "@/components/other/footer";

const myriadPro = localFont({
  src: [
    {
      path: './fonts/myriadpro-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/myriadpro-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/myriadpro-boldit.otf',
      weight: '700',
      style: 'italic',
    },
    // {
    //   path: './fonts/myriadpro-boldcond.otf',
    //   weight: '700',
    //   style: 'normal',
    // },
    {
      path: './fonts/myriadpro-boldcondit.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/myriadpro-cond.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/myriadpro-condit.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/myriadpro-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/myriadpro-semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/myriadpro-semiboldit.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-myriad',
  display: 'swap',
})

const numans = Numans({
  variable: "--font-numans",
  weight: "400",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "MRCare",
  description: "Cursos Odontológicos",
  keywords: "-",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${numans.variable} ${raleway.variable} ${myriadPro.variable}`}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
