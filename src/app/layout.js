import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GTA CHEATS DATABASE',
  description: 'Website providing cheats for GTA : 3, GTA : San Andreas, GTA : IV, GTA : V',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-w-full bg-[#0a0a0a] min-h-screen">
          <Navbar/>
          {children}
          <Footer/>
        </div>
        </body>
    </html>
  )
}