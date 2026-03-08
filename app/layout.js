import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site-data';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Preparedness Gear Reviews`,
    template: `%s | ${site.name}`
  },
  description: site.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
