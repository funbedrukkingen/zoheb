import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zo heb je de Bijbel nog nooit gelezen',
  description: 'Een chronologisch herschikte leesversie en Studiebijbel rond de Hebreeuwse godsnamen Elohim en YHWH.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#12100c',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl" className="bg-[#12100c]"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
