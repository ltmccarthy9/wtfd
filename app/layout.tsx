
import './globals.css'

import React from 'react'


export const metadata = {
  title: 'wtfd',
  description: 'What the Fam Doing?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-slate-50 dark:bg-gray-700'>
          {children}
      </body>
    </html>
  )
}
