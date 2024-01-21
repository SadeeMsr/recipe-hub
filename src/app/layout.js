import { Inter } from 'next/font/google'
import '../styles/globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recipe Hub',
  description: 'So many Recipes 😋',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:mx-20`}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
