import type { Metadata } from 'next'
import { Oswald, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Bike Customs | Motorcycle Repairs & Service | Tires | Stereo Systems | Fremont, CA',
  description: 'At Bike Customs, your premier Fremont motorcycle shop, we offer a variety of services to keep your bike in top shape. Our expertise includes engine repair, installing high-quality motorcycle audio systems, and providing a selection of reliable motorcycle tires.',
  keywords: ['motorcycle repair', 'motorcycle service', 'motorcycle tires', 'motorcycle audio', 'Fremont CA', 'bike customs'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${oswald.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
