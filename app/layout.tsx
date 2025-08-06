import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Basarbox',
  description: 'Verwalte deinen Kleiderbasar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <Link href="/">Start</Link> |{' '}
          <Link href="/verkaeufer">Verkäufer</Link> |{' '}
          <Link href="/veranstalter">Veranstalter</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
