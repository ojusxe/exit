import { Inter, Work_Sans, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'RupeeBee - Financial Literacy & Fraud Protection by Punjab & Sind Bank',
  description: 'Learn, protect, and prosper with RupeeBee - your comprehensive financial companion featuring fraud protection, calculators, and AI-powered guidance.',
  keywords: 'financial literacy, fraud protection, EMI calculator, Punjab Sind Bank, banking app, financial education',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${workSans.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}