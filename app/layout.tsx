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
  title: "Estúdio Ely – Color Grading",
  description: "Estúdio especializado em color grading e correção de cores para produções audiovisuais",
  icons: {
    icon: "https://estudioely.com.br/wp-content/uploads/2025/03/cropped-favicon-270x270.png",
    shortcut: "https://estudioely.com.br/wp-content/uploads/2025/03/cropped-favicon-270x270.png",
    apple: "https://estudioely.com.br/wp-content/uploads/2025/03/cropped-favicon-270x270.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${pacifico.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
