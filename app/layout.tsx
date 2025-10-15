import type { Metadata } from "next";
import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://estudioely.com.br'),
  title: {
    default: "Estúdio Ely – Color Grading Profissional | Pós-Produção Audiovisual",
    template: "%s | Estúdio Ely"
  },
  description: "Estúdio especializado em color grading e correção de cores para cinema, TV, streaming e publicidade. Mais de 25 anos de experiência em pós-produção audiovisual com DaVinci Resolve.",
  keywords: ["color grading", "correção de cores", "pós-produção", "audiovisual", "cinema", "DaVinci Resolve", "finalização", "colorista", "Ely Silva", "streaming", "publicidade"],
  authors: [{ name: "Estúdio Ely" }],
  creator: "Estúdio Ely",
  publisher: "Estúdio Ely",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://estudioely.com.br',
    siteName: 'Estúdio Ely',
    title: 'Estúdio Ely – Color Grading Profissional',
    description: 'Estúdio especializado em color grading e correção de cores para cinema, TV, streaming e publicidade.',
    images: [
      {
        url: 'https://estudioely.com.br/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Estúdio Ely - Color Grading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estúdio Ely – Color Grading Profissional',
    description: 'Estúdio especializado em color grading e correção de cores para produções audiovisuais',
    images: ['https://estudioely.com.br/og-image.png'],
  },
  icons: {
    icon: "https://estudioely.com.br/wp-content/uploads/2025/03/cropped-favicon-270x270.png",
    shortcut: "https://estudioely.com.br/wp-content/uploads/2025/03/cropped-favicon-270x270.png",
    apple: "https://estudioely.com.br/wp-content/uploads/2025/03/cropped-favicon-270x270.png",
  },
  verification: {
    google: 'seu-codigo-google-search-console',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${pacifico.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
