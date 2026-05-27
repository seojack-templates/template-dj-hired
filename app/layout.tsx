import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://dj-hired.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Pulse Events DJ',
    description: 'High-energy neon template for DJs and event hosts with audio-visualizer UI, event services, and a booking system.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Pulse Events DJ',
        description: 'High-energy neon template for DJs and event hosts with audio-visualizer UI, event services, and a booking system.',
        url: BASE_URL,
        siteName: 'Pulse Events DJ',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_dj_hired.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pulse Events DJ',
        description: 'High-energy neon template for DJs and event hosts with audio-visualizer UI, event services, and a booking system.',
        images: ['https://cdn.seojack.website/templates/tpl_dj_hired.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pulse Events DJ',
    description: 'High-energy neon template for DJs and event hosts with audio-visualizer UI, event services, and a booking system.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_dj_hired.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}