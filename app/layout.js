'use client'
import { Inter } from 'next/font/google'
import {AppProgressBar as ProgressBarr} from "next-nprogress-bar";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}

      <ProgressBarr
          height='5px'
          color='#06e9f5'
          shallowRouting
      />
      </body>

    </html>
  )
}
