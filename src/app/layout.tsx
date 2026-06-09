import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motionary | The Proper Names Behind Every UI Animation',
  description:
    'Browse every UI motion effect by its proper industry name. Live previews, descriptions, and AI prompts for Framer Motion, GSAP, CSS, and more.',
  openGraph: {
    title: 'Motionary | The Proper Names Behind Every UI Animation',
    description:
      'Browse every UI motion effect by its proper industry name — with live previews and AI prompts.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} h-full`}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
