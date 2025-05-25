import type { Metadata } from 'next'
import './globals.css'
import connectToDB from '@/lib/db'

export const metadata: Metadata = {
  title: 'UniResume',
  description: 'UniResume - The best way to share your resume',
  generator: 'UniResume',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  await connectToDB();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
