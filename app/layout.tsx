import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import { CurrencyProvider } from './contexts/CurrencyContext';

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Impala Transfer - Güvenli ve Konforlu Transfer Hizmeti",
  description: "İstanbul'da havalimanı, şehir içi ve şehirler arası profesyonel transfer hizmeti. VIP araçlar, deneyimli şoförler, 7/24 hizmet.",
  keywords: "istanbul transfer, havalimanı transfer, vip transfer, şehir içi transfer, profesyonel transfer",
  openGraph: {
    title: "Impala Transfer - Güvenli ve Konforlu Transfer Hizmeti",
    description: "İstanbul'da havalimanı, şehir içi ve şehirler arası profesyonel transfer hizmeti.",
    type: "website",
  }
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="tr">
      <body className={outfit.className}>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}