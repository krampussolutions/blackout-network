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
  description: site.description,
  verification: {
    other: {
      'impact-site-verification': '622d4555-090a-4e50-9ea6-91f8055fad57'
      'impact-site-verification' value='91e8ba8b-68c8-4bd2-ad74-b27bbdbecb4b'
    }
  }
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