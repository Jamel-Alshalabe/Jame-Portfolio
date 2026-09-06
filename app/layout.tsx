import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Jamel Alshalabe — Full Stack Developer',
  description:
    'Full Stack Developer specializing in Laravel, React, and MySQL. Building scalable, secure, and high-performance web applications.',
  openGraph: {
    title: 'Jamel Alshalabe — Full Stack Developer',
    description:
      'Full Stack Developer specializing in Laravel, React, and MySQL.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute right-0 top-[40%] h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
            <div className="absolute left-0 bottom-0 h-[300px] w-[500px] rounded-full bg-teal-500/5 blur-[100px]" />
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
