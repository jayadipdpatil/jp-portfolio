import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PERSON } from '@/lib/content';

export const metadata = {
  title: `${PERSON.name} — Writer & Marketing Strategist`,
  description: PERSON.tagline,
  openGraph: {
    title: `${PERSON.name} — Writer & Marketing Strategist`,
    description: PERSON.tagline,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
