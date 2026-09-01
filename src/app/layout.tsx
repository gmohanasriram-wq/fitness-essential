import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fitness Essentials — Premium Training Facility · Kodungaiyur, Chennai',
  description:
    'A premium fitness facility in Kodungaiyur, Chennai. Disciplined training environment, curated equipment, and a commitment to consistency.',
  openGraph: {
    title: 'Fitness Essentials — Premium Training Facility · Kodungaiyur, Chennai',
    description:
      'A premium fitness facility in Kodungaiyur, Chennai. Disciplined training environment, curated equipment, and a commitment to consistency.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Essentials — Premium Training Facility · Kodungaiyur, Chennai',
    description:
      'A premium fitness facility in Kodungaiyur, Chennai. Disciplined training environment, curated equipment, and a commitment to consistency.',
  },
  robots: { index: false, follow: false },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Gym',
  name: 'Fitness Essentials',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kodungaiyur',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  description:
    'A premium fitness facility in Kodungaiyur, Chennai. Disciplined training environment, curated equipment, and a commitment to consistency.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
